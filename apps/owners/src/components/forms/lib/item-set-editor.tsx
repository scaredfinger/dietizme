import _ from 'lodash'
import { useMemo } from 'react'

import { CheckBox } from '@/components/checkbox'
import { EditorProps } from '@/components/forms'

export interface Item {
  text: string
  value: string
}

type CheckedItem = Item & { checked: boolean }

export function buildItemSetEditor(items: Item[]) {
  const ItemsInSetEditor: React.FC<EditorProps<InSet>> = ({
    formData,
    onChange,
    schema,
  }) => {
    const initialValue = useMemo(
      () => getCheckedItems(items, formData),
      [formData],
    )

    function handleOnChange(checked: boolean, item: Item) {
      const newFormData = checked
        ? [...formData, { value: item.value }]
        : formData.filter((formItem) => formItem.value !== item.value)
      onChange(newFormData)
      console.log('handleOnChange', formData, newFormData)
    }

    return (
      <div>
        <label className='form-label'>{schema.title}</label>
        <div className="flex flex-wrap p-8 border-dashed border-1 rounded-lg border-gray-300 dark:border-gray-700">
          {initialValue.map((i) => (
            <div
              className="p-4 rounded-md bg-gray-100 border-1 m-4"
              key={i.value}
            >
              <CheckBox checked={i.checked} onChange={handleOnChange} item={i}>
                {i.text}
              </CheckBox>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return ItemsInSetEditor
}

type InSet = { value: string }[]

export function getCheckedItems(
  allItems: Item[],
  itemsInSet: InSet,
): CheckedItem[] {
  if (!itemsInSet) {
    return (
      allItems?.map((item) => ({
        checked: false,
        ...item,
      })) ?? []
    )
  }

  const itemsInSetById = itemsInSet.reduce(
    (agg, p) => ({
      [p.value]: true,
      ...agg,
    }),
    {},
  )

  return allItems.map((item) => ({
    checked: Boolean(itemsInSetById[item.value]),
    ...item,
  }))
}
