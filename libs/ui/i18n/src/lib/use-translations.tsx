import { useIntl } from 'react-intl'
import { Locale } from './constants'

interface UseTranslationResult {
  t: (id: string, values?: Record<string, any>) => string
  locale: Locale
}

export function useTranslation(): UseTranslationResult {
  const { formatMessage, locale } = useIntl()

  function t(id: string, values: Record<string, any> = {}) {
    return formatMessage({ id }, values)
  }

  return { t, locale: locale as Locale }
}
