import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  DateTimeSelection,
  NewExplainedSearchParams,
  UnitSelection,
} from '@otiuming/domain-shopping-cart'

import { useDateFormaters } from '../utilities/use-date-formatters'

interface Props {
  explainedSearchParams: NewExplainedSearchParams
}

export const ExplainedSearchParamsComponent: React.FC<Props> = ({
  explainedSearchParams,
}: Props) => {
  const { t } = useTranslation()

  const { renderShortDate } = useDateFormaters()

  function renderDateTimeSelection(dateTimeSelection: DateTimeSelection) {
    if (dateTimeSelection.type === 'time-slot-selection') {
      return (
        <>
          <p>
            {t('fields.date.title')}
            {': '}
            {renderShortDate(dateTimeSelection.date)}
          </p>
          <p>
            {t('fields.time-slot.title')}
            {': '}
            {dateTimeSelection.timeSlot.start}-{dateTimeSelection.timeSlot.end}
          </p>
        </>
      )
    } else {
      return (
        <>
          <p>
            {t('fields.from.title')}
            {': '}
            {renderShortDate(dateTimeSelection.dateRange.from)}
          </p>
          <p>
            {t('fields.to.title')}
            {': '}
            {renderShortDate(dateTimeSelection.dateRange.to)}
          </p>
        </>
      )
    }
  }

  function renderUnitSelection(unitSelection: UnitSelection) {
    if (unitSelection.type === 'per-pax') {
      return (
        <>
          {unitSelection.units.map((unit, i) => (
            <div key={i}>
              <p>
                {t('entities.adults.withCount', { count: unit.guests.adults })}
                {unit.guests.children > 0 && ', ' + t('entities.children.withCount', {
                  count: unit.guests.children,
                })}
                { unit.guests.infants > 0 && ', ' + t('entities.infants.withCount', {
                  count: unit.guests.infants,
                })}
              </p>
            </div>
          ))}
        </>
      )
    } else {
      return (
        <>
          <p>
            {t('fields.quantity.title')}
            {': '}
            {unitSelection.quantity}
          </p>
        </>
      )
    }
  }

  return (
    <>
      <div>
        {renderDateTimeSelection(explainedSearchParams.dateTimeSelection)}
      </div>
      <div>{renderUnitSelection(explainedSearchParams.unitSelection)}</div>
    </>
  )
}
