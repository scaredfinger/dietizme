import React, { ReactNode, FC, createContext, useContext } from 'react'

import { createLogger, Level, logger } from '@otiuming/utils-logging'

interface CurrentOrganization {
  id: string
  name: string
}

const CurrentOrganizationContext = createContext<CurrentOrganization | null>(
  null,
)
const LoggerContext = createContext(logger)

interface Props {
  logLevel: Level
  organization: CurrentOrganization
  children: ReactNode
}

export function useLogger() {
  return useContext(LoggerContext)
}

export function useCurrentOrganizationId() {
  return useContext(CurrentOrganizationContext)?.id
}

export function useCurrentOrganization() {
  return useContext(CurrentOrganizationContext)
}

export const OtiumingApplication: FC<Props> = (p) => {
  const logger = createLogger(p.logLevel)

  return (
    <CurrentOrganizationContext.Provider value={p.organization}>
      <LoggerContext.Provider value={logger}>
        {p.children}
      </LoggerContext.Provider>
    </CurrentOrganizationContext.Provider>
  )
}
