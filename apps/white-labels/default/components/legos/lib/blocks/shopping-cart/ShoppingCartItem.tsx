import React, { useMemo } from 'react'

import {
  ShoppingCartItem as ShoppingCartItemDto,
  Unit,
  NewExplainedSearchParams,
  DateTimeSelection,
  UnitSelection,
} from '@otiuming/domain-shopping-cart'
import { useTranslation } from '@otiuming/ui-i18n'

import { NcImage } from '@/components/legos/lib/atoms/nc-image/nc-image'
import { useFormatCurrency } from '@/components/tools/use-format-currency'

import ExplainedDaily from './ExplainedDaily'
import ExplainedTimeSlots from './ExplainedTimeSlots'
import ExplainedPerPax from './ExplainedPerPax'
import ExplainedPerResource from './ExplainedPerResource'

interface ShoppingCartItemProps {
  item: ShoppingCartItemDto
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item }) => {
  const { t } = useTranslation()
  const { formatCurrency } = useFormatCurrency()

  const renderNewExplainedSearchParams = () => {
    const explainedSearchParams = item.explainedSearchParams as NewExplainedSearchParams

    return (
      <>
        {renderDateTimeSelection(explainedSearchParams.dateTimeSelection)}
        {renderUnitSelection(explainedSearchParams.unitSelection)}
      </>
    )
  }

  const renderDateTimeSelection = (dateTimeSelection: DateTimeSelection) => {
    switch (dateTimeSelection.type) {
      case 'daily-selection':
        return (
          <ExplainedDaily
            dateTimeSelection={dateTimeSelection}
          />
        )
      case 'time-slot-selection':
        return (
          <ExplainedTimeSlots
            dateTimeSelection={dateTimeSelection}
          />
        )
    }
  }

  const renderUnitSelection = (unitSelection: UnitSelection) => {
    switch (unitSelection.type) {
      case 'per-pax':
        return (
          <ExplainedPerPax
            unitSelection={unitSelection}
          />
        )
      case 'per-resource':
        return (
          <ExplainedPerResource
            unitSelection={unitSelection}
          />
        )
    }
  }

  const total = useMemo(
    () =>
      !item
        ? 0
        : item.price +
          item.units.reduce(
            (acc, unit) =>
              acc +
              unit.supplements.reduce(
                (acc, supplement) =>
                  acc + supplement.quantity * supplement.unitPrice,
                0,
              ),
            0,
          ),
    [item],
  )

  if (!item) return <></>

  function renderUnit(unit: Unit, index: number) {

    const selectedSupplements = unit.supplements.filter(
      (supplement) => supplement.quantity > 0,
    )

    if (!selectedSupplements.length) return null

    return (
      <div key={index}>
        <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
          {t('entities.unit.ith.format', { i: index + 1 })}
        </div>
        {selectedSupplements.map((supplement, index) => (
          <div
            key={index}
            className="flex justify-between text-neutral-6000 dark:text-neutral-300"
          >
            <span>
              {formatCurrency(supplement.unitPrice)} x{supplement.quantity}{' '}
              {supplement.title}
            </span>
            <span>
              {formatCurrency(supplement.quantity * supplement.unitPrice)}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="w-full flex flex-col sm:rounded-2xl lg:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-8 px-0 sm:p-6 xl:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex-shrink-0 w-full sm:w-40">
            <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
              <NcImage src={item.image} />
            </div>
          </div>
          <div className="py-5 sm:px-5 space-y-3">
            <div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                {item.description}
              </span>
              <span className="text-base font-medium mt-1 block">
                {item.title}
              </span>
            </div>
            {renderNewExplainedSearchParams()}
            <div className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold">
            {t('sections.price-details.title')}
          </h3>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>Base</span>
            <span>{formatCurrency(item.price)}</span>
          </div>
          {item.units.map(
            (unit, index) =>
              !!unit.supplements.length && renderUnit(unit, index),
          )}

          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>{t('fields.total.title')}</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCartItem
