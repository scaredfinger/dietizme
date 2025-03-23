import React from 'react'
import { JSONSchema7TypeName } from 'json-schema'
import { Form as RJSFForm } from '@rjsf/antd'
import { Input } from 'antd'
import validator from '@rjsf/validator-ajv8'
import { ComponentType } from 'react'
import { Dictionary } from 'lodash'

import { Tab } from '@/components/tabs'

import { Multilanguage_Field_Input } from '@otiuming/domain-omnidata-types'
import { useOrganizationLanguages } from '@otiuming/ui-common'

export type Editor =
  | React.FunctionComponent<EditorProps>
  | React.ComponentClass<EditorProps>

export interface JSONSchema {
  type: JSONSchema7TypeName
  title?: string
  description?: string
  editor?:
    | React.FunctionComponent<EditorProps>
    | React.ComponentClass<EditorProps>
  readOnly?: boolean
  properties?: {
    [p: string]: JSONSchema
  }
  items?: JSONSchema
  minimum?: number
  maximum?: number
  minItems?: number
  maxItems?: number
  className?: string
  enum?: any[]
  enumNames?: string[]
  default?: any
  hidden?: boolean
}

export interface FormProps<Entity> {
  value: Entity
  schema: JSONSchema
  onSubmit?: (newValue: Entity) => void
  onChange?: (newValue: Entity) => void
  hideSubmitButton?: boolean
  t: (key: string) => string
}

interface EditorSchema {
  title: string
  description: string
}

export interface EditorProps<Value = any> {
  schema: EditorSchema
  onChange: (v: Value) => void
  t: (key: string) => string
  formData: Value
  idSchema: { $id: string }
}

export interface LanguageAwareTextEditor {
  lang: string
  value: string
  onChange: (v: string) => void
  idSchema: { $id: string }
}

export function inAllOrganizationLanguages(
  Inner: ComponentType<LanguageAwareTextEditor>,
) {
  return function EditorWithLanguages(
    props: EditorProps<Multilanguage_Field_Input>,
  ) {
    const organizationLanguages = useOrganizationLanguages()

    function onChanged(changedValue: Partial<Multilanguage_Field_Input>) {
      const newValue = {
        ...props.formData,
        ...changedValue,
      }

      const changedValueKeys = Object.keys(changedValue)
      const keysWithActualChanges = changedValueKeys.filter(
        (k) =>
          props.formData === undefined ||
          props.formData === null ||
          (changedValue as any)[k] !== (props.formData as any)[k],
      )
      if (keysWithActualChanges.length === 0) return

      props.onChange(newValue)
    }

    const { t, schema, formData } = props
    const formDataAsDic = formData as Dictionary<string>

    const data = organizationLanguages.map((lang) => ({
      tabTitle: t(`languages.${lang}`),
      key: lang,
      content: (
        <Inner
          lang={lang}
          value={formData ? formDataAsDic[lang] : ''}
          onChange={(newValue) => onChanged({ [lang]: newValue })}
          idSchema={props.idSchema}
        />
      ),
    }))

    // TODO: This is the place to fix the
    // style workaround for the forms
    // TODO: There is a type problem here
    return (
      <>
        <label className="form-label" htmlFor={props.idSchema.$id}>
          {schema.title}
        </label>
        <sub style={{ display: 'none' }}>{schema.description}</sub>
        <Tab className="multilanguage-tabs" data={data as any}></Tab>
      </>
    )
  }
}

const TextEditor: React.FC<LanguageAwareTextEditor> = ({
  value,
  onChange,
  lang,
}) => <Input value={value} onChange={(e) => onChange(e.target.value)} />

export const MultilanguageTextEditor = inAllOrganizationLanguages(TextEditor)

const TextArea: React.FC<LanguageAwareTextEditor> = ({
  value,
  onChange,
  lang,
}) => (
  <Input.TextArea value={value} onChange={(e) => onChange(e.target.value)} />
)

export const MultilanguageTextAreaEditor = inAllOrganizationLanguages(TextArea)

interface EditorWithTranslations {
  t: (key: string) => string
}

function translatedEditor<T>(
  t: (key: string) => string,
  WrappedComponent: React.ComponentType<T & EditorWithTranslations>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  type PublicProps = Exclude<T, EditorWithTranslations>

  const ComponentWithTranslations = (props: PublicProps) => {
    return <WrappedComponent t={t} {...props} />
  }

  ComponentWithTranslations.displayName = `withTranslations(${displayName})`

  return ComponentWithTranslations
}

export function extractUiSchema(
  t: (k: string) => string,
  schema: JSONSchema,
): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  // TODO: Bring help and description back
  // result['ui:description'] = schema.description
  // result['ui:help'] = schema.description
  result['ui:title'] = schema.title
  result['ui:classNames'] = `otiuming-form ${schema.className ?? ''}`
  if (schema.hidden)
    result['ui:widget'] = 'hidden'

  if (schema.editor) {
    result['ui:field'] = translatedEditor(t, schema.editor)
  }

  if (schema.items) {
    result['items'] = {
      ...extractUiSchema(t, schema.items),
      'ui:label': false,
    }
    return result
  }

  if (!schema.properties) return result

  for (const propertyName of Object.keys(schema.properties)) {
    const property = schema.properties[propertyName]

    const propertyUiSchema = extractUiSchema(t, property)

    result[propertyName] = propertyUiSchema
  }

  return result
}

export function Form<Entity>(props: FormProps<Entity>) {
  const ref = React.createRef()

  function onSubmit({ formData }: { formData?: unknown }) {
    const typedFormdData = formData as Entity
    typedFormdData && props.onSubmit && props.onSubmit(typedFormdData)
  }

  function onChange({ formData }: { formData?: unknown }) {
    const typedFormdData = formData as Entity
    typedFormdData && props.onChange && props.onChange(typedFormdData)
  }

  const t = props.t

  const uiSchema = extractUiSchema(t, props.schema)

  function onSaveClick() {
    const current = ref.current as any

    onSubmit(current.state)
  }

  return (
    <div className="mx-6 mt-2 mb-10 col-span-3 bg-white dark:bg-white/10 text-theme-gray dark:text-white/60 text-[15px] rounded-10">
      <div className="p-4">
        <RJSFForm
          ref={ref as any}
          schema={props.schema}
          uiSchema={uiSchema}
          formData={props.value}
          validator={validator}
          onSubmit={onSubmit}
          onChange={onChange}
        >
          {!props.hideSubmitButton && (
            <button type="button" className="form-submit" onClick={onSaveClick}>
              {t('actions.save.title')}
            </button>
          )}
          {props.hideSubmitButton && <></>}
        </RJSFForm>
      </div>
    </div>
  )
}
