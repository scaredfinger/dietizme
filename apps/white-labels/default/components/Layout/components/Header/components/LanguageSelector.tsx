import React, { Fragment, useMemo } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'

import { Locale, SUPPORTED_LOCALES_DESCRIPTORS } from '@otiuming/ui-i18n'

interface Props {
  className?: string
}

export const LanguageSelector: React.FC<Props> = ({ className = '' }) => {
  const { pathname, asPath, query, push, locale } = useRouter()

  const onLocaleChange = useMemo(
    () => (nextLocale: string) => {
      push({ pathname, query }, asPath, { locale: nextLocale })
    },
    [asPath, pathname, push, query],
  )

  const currentLocale = SUPPORTED_LOCALES_DESCRIPTORS[locale as Locale]

  return (
    <div className={className}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            {currentLocale.title}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {_.map(SUPPORTED_LOCALES_DESCRIPTORS, (descriptor, locale) => (
                <Menu.Item key={locale}>
                  {({ active }) => (
                    <Button
                      className={`${
                        active
                          ? 'bg-primary-6000 hover:bg-primary-700 text-neutral-50 dark:text-neutral-200'
                          : ''
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 dark:text-neutral-200`}
                      onClick={() => onLocaleChange(locale)}
                    >
                      {descriptor.title}
                    </Button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
