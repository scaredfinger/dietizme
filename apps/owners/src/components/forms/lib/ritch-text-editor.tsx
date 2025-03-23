import {
  EditorProps,
  inAllOrganizationLanguages,
  LanguageAwareTextEditor,
} from './form'

import dynamic from 'next/dynamic'

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export function RichTextEditor(props: EditorProps<string>) {
  return (
    <>
      <h1>{props.schema.title}</h1>

      <ReactQuill value={props.formData} onChange={(v) => props.onChange(v)} />
    </>
  )
}

const RichTextEditorInner: React.FC<LanguageAwareTextEditor> = ({
  value,
  lang,
  onChange: onChanged,
}) => <ReactQuill 
  style={{ height: '200px' }}
  value={value} 
  onChange={(e) => onChanged(e)} />

export const MultilanguageRichTextEditor =
  inAllOrganizationLanguages(RichTextEditorInner)
