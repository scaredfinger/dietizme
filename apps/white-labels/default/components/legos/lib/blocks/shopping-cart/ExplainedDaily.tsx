import React from 'react'
import { DailySelection } from '@otiuming/domain-shopping-cart'
import { useTranslation } from '@otiuming/ui-i18n'

interface ExplainedDailyPerResourceSearchParamsProps {
  dateTimeSelection: DailySelection
}

const ExplainedDaily: React.FC<
  ExplainedDailyPerResourceSearchParamsProps
> = ({ dateTimeSelection }) => {
  const { t } = useTranslation()

  return (
    <>
      <span className="block  text-sm text-neutral-500 dark:text-neutral-400">
        {t('fields.date-range.from.title')}{' '}
        {dateTimeSelection.dateRange.from.format('YYYY-MM-DD')}{' '}
        {t('fields.date-range.to.title')}{' '}
        {dateTimeSelection.dateRange.to.format('YYYY-MM-DD')}
      </span>
    </>
  )
}

export default ExplainedDaily
