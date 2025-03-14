import React from 'react'

interface LoaderPublicProps {
  loading: boolean
}

interface LoaderProps extends LoaderPublicProps {
  children?: JSX.Element
}

function Loader({ loading, children }: LoaderProps) {
  if (loading) return (
    <>
      Loading...
    </>
  )

  return <>{children}</>
}

export function withLoader<T>(WrappedComponent: React.ComponentType<T>) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithTheme = (props: T & LoaderPublicProps) => {
    // Fetch the props you want to inject. This could be done with context instead.

    return (
      <Loader loading={props.loading}>
        <WrappedComponent {...props} />
      </Loader>
    )
  }

  ComponentWithTheme.displayName = `withLoader(${displayName})`

  return ComponentWithTheme
}
