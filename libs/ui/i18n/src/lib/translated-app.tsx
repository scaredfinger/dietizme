import React from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import _ from 'lodash'

import { FlattenedObject, NotObject } from './domain'
import { Messages } from './constants'

export function flattenObject<T>(ob: T, prefix?: string): FlattenedObject {
  return flattenObjectRecursive(ob, prefix) as FlattenedObject
}

function flattenObjectRecursive<T>(
  ob: T,
  prefix?: string,
): FlattenedObject | NotObject {
  if (!_.isObject(ob)) return ob as unknown as NotObject

  const toReturn: FlattenedObject = {}

  for (const key of Object.keys(ob)) {
    const prop = prefix ? `${prefix}.${key}` : key
    const value = ob[key]

    if (_.isObject(value)) {
      const flattenedValue = flattenObject(ob[key], prop)
      _.assignIn(toReturn, flattenedValue)
    } else {
      toReturn[prop] = value
    }
  }

  return toReturn
}

export const translatedApp =
  (messages: Messages) =>
  <T extends AppProps>(WrappedComponent: React.ComponentType<T>) => {
    const displayName =
      WrappedComponent.displayName || WrappedComponent.name || 'Component'

    function ComponentWithTranslations(props: T) {
      const { locale } = useRouter()

      function handleError(err: unknown): void {
        return
      }

      return (
        <IntlProvider
          messages={messages[locale]}
          locale={locale}
          onError={handleError}
        >
          <WrappedComponent {...props} />
        </IntlProvider>
      )
    }

    ComponentWithTranslations.displayName = `translatedApp(${displayName})`

    return ComponentWithTranslations
  }
