import React from 'react'
import { PerPaxUnitSelection } from '@otiuming/domain-shopping-cart'
import { useTranslation } from '@otiuming/ui-i18n'

interface ExplainedTimeSlotsPerPaxSearchParamsProps {
  unitSelection: PerPaxUnitSelection
}

const ExplainedPerPax: React.FC<
  ExplainedTimeSlotsPerPaxSearchParamsProps
> = ({ unitSelection }) => {
  const { t } = useTranslation()

  return (
    <>
      <span className="block text-sm text-neutral-500 dark:text-neutral-400">
        {unitSelection.units.map((unit, index) => (
          <div key={index}>
            {t('entities.adults.format', { value: unit.guests.adults })}
            {!!unit.guests.children && ', ' + t('entities.children.format', { value: unit.guests.children })}
          </div>
        ))}
      </span>
    </>
  )
}

export default ExplainedPerPax
