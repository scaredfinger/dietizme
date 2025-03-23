import { Row } from 'antd'
import { EditorProps } from '../form'

export interface DateRangeWithValue {
  from: string
  to: string
  value: number
}

export function DateRangeWithValueEditor(
  props: EditorProps<DateRangeWithValue>
) {
  const { t } = props
  const { from, to, value } = props.formData

  function onChange(changedValue: Partial<DateRangeWithValue>) {
    const newValue = {
      ...props.formData,
      ...changedValue,
    }

    props.onChange(newValue)
  }

  return (
    <Row>
      {/* <ReactForm.Group as={Col}>
        <ReactForm.Label>{t('fields.from.title')} </ReactForm.Label>
        <ReactForm.Control
          type="date"
          value={getValue(from)}
          onChange={(e) => onChange({ from: getChangedValue(e.target.value) })}
        ></ReactForm.Control>
      </ReactForm.Group>
      <ReactForm.Group as={Col}>
        <ReactForm.Label>To</ReactForm.Label>
        <ReactForm.Control
          type="date"
          value={getValue(to)}
          onChange={(e) => onChange({ to: getChangedValue(e.target.value) })}
        ></ReactForm.Control>
      </ReactForm.Group>
      <ReactForm.Group as={Col}>
        <ReactForm.Label>Value</ReactForm.Label>
        <ReactForm.Control
          value={value}
          onChange={(e) => onChange({ value: parseFloat(e.target.value) })}
        ></ReactForm.Control>
      </ReactForm.Group> */}
    </Row>
  )
}

function getValue(dateString: string) {
  const date = new Date(dateString)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const result = `${date.getFullYear()}-${month}-${day}`

  return result
}

function getChangedValue(dateString: string) {
  const result = new Date(dateString).toISOString()

  return result
}
