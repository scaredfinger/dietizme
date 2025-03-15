import React, { FC, Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { Guests } from '@otiuming/domain-data-types'

import { NumberInput } from './number-input'
import { AddGuests } from '../atoms'
import { useTranslation } from '@otiuming/ui-i18n'

export interface GuestsInputProps {
  value: Guests
  onChange?: (data: Guests) => void
  fieldClassName?: string
  className?: string
  buttonSubmitHref?: string
  hasButtonSubmit?: boolean
}

export const GuestsInput: FC<GuestsInputProps> = ({
  value,
  onChange,
  fieldClassName = '[ nc-hero-field-padding ]',
  className = '[ nc-flex-1 ]',
  buttonSubmitHref = '#',
  hasButtonSubmit = true,
}) => {
  const { t } = useTranslation()

  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(
    value.adults || 0,
  )
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(
    value.children || 0,
  )
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(
    value.infants || 0,
  )

  useEffect(() => {
    setGuestAdultsInputValue(value.adults || 0)
    setGuestChildrenInputValue(value.children || 0)
    setGuestInfantsInputValue(value.infants || 0)
  }, [value])

  const handleChangeData = (value: number, type: keyof Guests) => {
    const newValue = {
      adults: guestAdultsInputValue,
      children: guestChildrenInputValue,
      infants: guestInfantsInputValue,
    }
    if (type === 'adults') {
      setGuestAdultsInputValue(value)
      newValue.adults = value
    }
    if (type === 'children') {
      setGuestChildrenInputValue(value)
      newValue.children = value
    }
    if (type === 'infants') {
      setGuestInfantsInputValue(value)
      newValue.infants = value
    }
    onChange && onChange(newValue)
  }

  const totalGuests =
    guestChildrenInputValue + guestAdultsInputValue + guestInfantsInputValue

  return (
    <Popover className={`flex relative ${className}`}>
      {({ open }) => (
        <>
          <div
            className={`flex-1 flex items-center focus:outline-none cursor-pointer ${
              open ? 'rounded-b-3xl shadow-lg' : ''
            }`}
          >
            <Popover.Button
              className={`flex-1 flex text-left items-center ${fieldClassName} space-x-3 `}
              onClick={() => document.querySelector('html')?.click()}
            >
              <div className="text-neutral-300 dark:text-neutral-400">
                <AddGuests />
              </div>
              <div className="flex-grow">
                <span className="block xl:text-lg font-semibold">
                  {t('fields.total-pax.format', {
                    value: totalGuests,
                  })}
                </span>
                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                  {totalGuests
                    ? t('fields.pax.title')
                    : t('actions.add-pax.title')}
                </span>
              </div>
            </Popover.Button>

            <div className="relative">
              {/* {!!totalGuests && open && (
                <ClearDataButton
                  onClick={() => {
                    setGuestAdultsInputValue(0)
                    setGuestChildrenInputValue(0)
                    setGuestInfantsInputValue(0)
                  }}
                />
              )} */}
            </div>

            {/* BUTTON SUBMIT OF FORM
            {hasButtonSubmit && (
              <div className="pr-2 xl:pr-4">
                <ButtonSubmit href={buttonSubmitHref} />
              </div>
            )} */}
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <NumberInput
                className="w-full"
                value={guestAdultsInputValue}
                onChange={(value) => handleChangeData(value, 'adults')}
                max={10}
                min={1}
                label={t('fields.adults.title')}
                desc={t('fields.adults.description')}
              />
              <NumberInput
                className="w-full mt-6"
                value={guestChildrenInputValue}
                onChange={(value) => handleChangeData(value, 'children')}
                max={4}
                label={t('fields.children.title')}
                desc={t('fields.children.description')}
              />

              <NumberInput
                className="w-full mt-6"
                value={guestInfantsInputValue}
                onChange={(value) => handleChangeData(value, 'infants')}
                max={4}
                label={t('fields.infants.title')}
                desc={t('fields.infants.description')}
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
