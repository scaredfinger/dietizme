import { FC, PropsWithChildren, ReactNode, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { LoadingOutlined } from '@ant-design/icons'

import { PageHeaders } from '@/components/page-headers'

interface BreadCrumb {
  path: string
  breadcrumbName: string
}

interface Props {
  title: string
  subTitle?: ReactNode | string
  nearTitleComponents?: Iterable<ReactNode | string>
  breadcrumbs?: BreadCrumb[]
  loading?: boolean
}

export const Loader: FC = () => (
  <div className="h-[2000px] w-full p-10 center">
    <LoadingOutlined size={300} />
  </div>
)

export const DefaultForm: FC<Props & PropsWithChildren> = ({
  title,
  subTitle,
  nearTitleComponents,
  breadcrumbs = [],
  loading = false,
  children,
}) => {
  const { locale, pathname } = useRouter()
  const { t } = useTranslation()

  const sanitizedBreadcrumbs = useMemo(() => {
    let result = breadcrumbs ? [...breadcrumbs] : []

    if (!result[0] || !result[0].path.endsWith('admin')) {
      result = [
        {
          path: `/${locale}/admin`,
          breadcrumbName: t('pages.admin.title'),
        },
        ...result,
      ]
    }

    if (
      !result[result.length - 1] ||
      result[result.length - 1].breadcrumbName !== title
    ) {
      result = [
        ...result,
        {
          path: pathname,
          breadcrumbName: title,
        },
      ]
    }

    return result
  }, [breadcrumbs, locale, pathname, t, title])

  return (
    <>
      <PageHeaders
        title={title}
        subTitle={subTitle}
        buttons={nearTitleComponents}
        routes={sanitizedBreadcrumbs}
      />
      <div className="mx-6 mt-2 mb-10 col-span-3 bg-white dark:bg-white/10 text-theme-gray dark:text-white/60 text-[15px] rounded-10">
        <div className="p-4">
          {loading && <Loader />}
          {!loading && children}
        </div>
      </div>
    </>
  )
}
