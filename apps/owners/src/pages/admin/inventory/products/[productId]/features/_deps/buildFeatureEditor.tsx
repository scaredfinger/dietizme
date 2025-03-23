import { Feature_Type_Enum } from '@otiuming/domain-omnidata-types'

import { EditorProps, Form, JSONSchema } from '@/components/forms'

import { OrganizationFeature } from './types'
import { useEffect, useMemo, useState } from 'react'
import { JSONSchema7TypeName } from 'json-schema'

interface Props {
  feature_id: string,
  value: unknown
}

const FEATURE_TYPE_TO_JSON_SCHEMA_TYPE: Record<Feature_Type_Enum, JSONSchema7TypeName> = {
  [Feature_Type_Enum.Boolean]: 'boolean',
  [Feature_Type_Enum.Decimal]: 'number',
  [Feature_Type_Enum.Integer]: 'number',
  [Feature_Type_Enum.Text]: 'string',
  [Feature_Type_Enum.Dropdown]: 'string',
}

export function buildFeatureEditor(organization_features: OrganizationFeature[], locale: string, t: (key: string) => string) {
  return (props: EditorProps<Props>) => {

    const organization_features_by_id: Record<string, OrganizationFeature> = useMemo(() => organization_features.reduce((acc, f) => {
      acc[f.id] = f
      return acc
    }, {}), [])

    const [ type, setType ] = useState<JSONSchema7TypeName>('string')
    const [ hidden, setHidden ] = useState(true)
    const [ feature_id, setFeature ] = useState<string>(null)

    useEffect(() => {
      if (! props.formData?.feature_id) {
        return
      }

      const organizationFeature = organization_features_by_id[props.formData.feature_id]

      if (!organizationFeature) {
        return
      }

        setType(FEATURE_TYPE_TO_JSON_SCHEMA_TYPE[organizationFeature.type])
        setFeature(props.formData.feature_id)
        setHidden(organizationFeature.type === Feature_Type_Enum.Boolean)

    }, [organization_features_by_id, props.formData.feature_id])

    function onChange(value: Props) {
      const organizationFeature = organization_features_by_id[value.feature_id]

      if (!organizationFeature) {
        return
      }

      if (FEATURE_TYPE_TO_JSON_SCHEMA_TYPE[organizationFeature.type] !== type) {
        setType(FEATURE_TYPE_TO_JSON_SCHEMA_TYPE[organizationFeature.type])
      }

      if (value.feature_id !== feature_id) {
        setFeature(value.feature_id)
      }

      setHidden(organizationFeature.type === Feature_Type_Enum.Boolean)

      if (value.feature_id === props.formData.feature_id
        && value.value === props.formData.value) {
        return
      }

      props.onChange({
        ...value
      })
    }

    const FeatureForm = Form<Props>

    const schema: JSONSchema = useMemo(() => ({
      type: 'object',
      properties: {
        feature_id: {
          type: 'string',
          title: t('fields.feature.title'),
          enum: organization_features.map((f) => f.id),
          enumNames: organization_features.map((f) => f.name[locale]),
        },
        value: {
          title: t('fields.value.title'),
          type: type,
          hidden
        },
      },
    }), [hidden, type])

    const value = {
      ...props.formData,
      feature_id,
    }

    console.log('value', value)

    return (
      <>
        <FeatureForm
          {...props}
          onChange={onChange}
          schema={schema}
          value={value}
          hideSubmitButton={true}
        />
      </>
    )
  }
}