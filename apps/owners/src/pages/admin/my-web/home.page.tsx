import { useTranslation } from 'react-i18next'
import {
  useMy_Web_Section_SaveMutation,
  useGet_My_Web_SectionQuery,
} from '@/data-access'
import { useCurrentOrganizationId, withLoader } from '@otiuming/ui-common'
import {
  Form,
  FormProps,
  JSONSchema,
} from '@/components/forms'

import { useRouter } from 'next/router'
import { PageHeaders } from '@/components/page-headers'
import { useDefaultTemplate } from '@/components/templates'
import { FC } from 'react'

export default function HomeForm() {
  const { t } = useTranslation()
  const { locale } = useRouter()

  const template = useDefaultTemplate()
  const schema = template.pages.home

  const pageRoutes = [
    {
      path: `/${locale}/admin`,
      breadcrumbName: t('pages.admin.title'),
    },
    {
      path: `/${locale}/admin/my-web/branding`,
      breadcrumbName: t('pages.home.title'),
    },
  ]

  return (
    <>
      <PageHeaders routes={pageRoutes} title={t('pages.home.title')} />
      <MyWebSectionEditForm 
        sectionName='home'
        schema={schema}
      />
    </>
  )
}

interface MyWebSectionEditFormProps {
  schema: JSONSchema
  sectionName: string
}

const FormWithLoader = withLoader<FormProps<MyWebSectionEditFormProps>>(Form)

const MyWebSectionEditForm: FC<MyWebSectionEditFormProps> = ({
    schema,
    sectionName,
  }) => {
    const { t } = useTranslation()
    const organization_id = useCurrentOrganizationId()
  
    const loadVariables = {
      organization_id,
      section_id: sectionName,
    }
  
    const {
      data: myWebSectionData,
      loading,
      refetch: refetchMyWebSectionData,
    } = useGet_My_Web_SectionQuery({
      variables: loadVariables,
    })
  
    const [saveMyWebSection, { loading: saving }] =
      useMy_Web_Section_SaveMutation()
  
    function saveChanges(newValue: unknown) {
      saveMyWebSection({
        variables: {
          section: {
            ...loadVariables,
            value: newValue,
          },
        },
      }).then(() => refetchMyWebSectionData(loadVariables))
    }
  
    const data = myWebSectionData?.my_web_section[0]?.value
  
    return (
      <FormWithLoader
        t={t}
        loading={loading || saving}
        value={data}
        schema={schema}
        onSubmit={saveChanges}
      />
    )
  }