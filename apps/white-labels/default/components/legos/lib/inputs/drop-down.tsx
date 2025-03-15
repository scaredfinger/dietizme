import { useEffect, useState } from 'react'
import React, { FC } from 'react'
import { Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'
import _ from 'lodash'

import { Listbox } from '@headlessui/react'

export interface Options {
  [value: string]: string
}

export interface Props {
  value?: string
  onChange?: (value: string) => void
  options: Options
  texts: {
    placeholder: string
  }
}

export const DropDown: FC<Props> = ({
  options,
  value,
  onChange = _.noop,
  texts: { placeholder },
}) => {
  const [currentValue, setCurrentValue] = useState<string>()

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const renderSelectClass = () => {
    return (
      <Listbox
        value={currentValue}
        onChange={(newValue) => {
          setCurrentValue(newValue)
          onChange(newValue)
        }}
      >
        {({ open }) => {
          return (
            <>
              <Listbox.Button
                className={`
                px-4 py-1.5 
                rounded-md inline-flex items-center 
                hover:text-opacity-100 
                focus:outline-none 
                focus-visible:ring-2 
                focus-visible:ring-white 
                focus-visible:ring-opacity-75
                full-width
                xl:text-lg font-semibold
                ${open && 'rounded-b-3xl shadow-lg'}`}
              >
                { (currentValue && options[currentValue]) || placeholder }
                <ChevronDownIcon
                  className={`${
                    open ? '' : 'text-opacity-70'
                  } ml-2 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden="true"
                />
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Listbox.Options className="absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 dark:text-gray-100">
                  {Object.entries(options).map(([value, text]) => (
                    <Listbox.Option
                      className="px-4 py-1.5 rounded-md items-center font-medium hover:text-opacity-100 hover:cursor-pointer hover:bg-gray-500 hover:text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      key={value}
                      value={value}
                    >
                      {text}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </>
          )
        }}
      </Listbox>
    )
  }

  return renderSelectClass()
}
