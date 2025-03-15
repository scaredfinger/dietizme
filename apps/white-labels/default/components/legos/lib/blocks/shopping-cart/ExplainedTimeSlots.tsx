import React from 'react'
import { TimeSlotSelection } from '@otiuming/domain-shopping-cart'
import { useTranslation } from '@otiuming/ui-i18n'

interface Props {
  dateTimeSelection: TimeSlotSelection
}

const ExplainedTimeSlots: React.FC<
  Props
> = ({ dateTimeSelection }) => {
  const { t } = useTranslation()

  return (
    <>
      <span className="block text-sm text-neutral-500 dark:text-neutral-400">
      {dateTimeSelection.date.format('YYYY-MM-DD')}{', '}
      {dateTimeSelection.timeSlot.start}{' - '}
      {dateTimeSelection.timeSlot.end}{' '}
      </span>
    </>
  )
}

export default ExplainedTimeSlots
