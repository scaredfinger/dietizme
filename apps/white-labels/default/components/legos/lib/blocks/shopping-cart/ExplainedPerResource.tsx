import React from 'react'
import { PerResourceUnitSelection } from '@otiuming/domain-shopping-cart'
import { useTranslation } from '@otiuming/ui-i18n'

interface ExplainedDailyPerResourceSearchParamsProps {
  unitSelection: PerResourceUnitSelection
}

const ExplainedPerResource: React.FC<
  ExplainedDailyPerResourceSearchParamsProps
> = ({ unitSelection }) => {
  const { t } = useTranslation()

  return (
    <>
      <span className="block  text-sm text-neutral-500 dark:text-neutral-400">
        {unitSelection.quantity}x
      </span>
    </>
  )
}

export default ExplainedPerResource
