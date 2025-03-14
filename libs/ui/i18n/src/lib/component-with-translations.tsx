import React from 'react'
import { useTranslation } from './use-translations'

export interface ComponentWithTranslations {
  t: (key: string) => string
}

export function withTranslations<T>(
  WrappedComponent: React.ComponentType<T & ComponentWithTranslations>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  type PublicProps = Exclude<T, ComponentWithTranslations>

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithTranslations = (props: PublicProps) => {
    // Fetch the props you want to inject. This could be done with context instead.

    const { t } = useTranslation()

    return <WrappedComponent t={t} {...props} />
  }

  ComponentWithTranslations.displayName = `withTranslations(${displayName})`

  return ComponentWithTranslations
}
