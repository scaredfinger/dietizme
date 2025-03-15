import { Dialog, Switch } from '@headlessui/react'
import React from 'react'

import { useTranslation } from '@otiuming/ui-i18n'
import {
  OptionalAsyncResult,
  SupplementSelectionArgs,
  UnitSelectedSupplementsBySupplementId,
} from '@otiuming/ui-white-labels-view-models'

import { useGet_Supplements_EnQuery } from '@/data-access'

import { ButtonPrimary } from '../../../atoms'

interface Props {
  selectedSupplements: OptionalAsyncResult<
    UnitSelectedSupplementsBySupplementId[]
  >
  open: boolean
  onClose: () => void
  formatCurrency: (amount: number) => string
  onSupplementSelected: (params: SupplementSelectionArgs) => void
  onReserve: () => void
}

export const OptionChooserDialog: React.FC<Props> = ({
  selectedSupplements,
  open,
  onClose,
  formatCurrency,
  onSupplementSelected,
  onReserve
}) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onClose={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full dark:bg-gray-900 dark:bg-opacity-80 z-50">
        <div className="relative top-1/4 mx-auto p-5 border border-neutral-200 dark:border-neutral-700 w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-1/3 shadow-lg rounded-3xl bg-white dark:bg-gray-800">
          <div className="mt-3 text-center">
            <h3
              className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
              id="modal-title"
            >
              {t('entities.supplements.title')}
            </h3>
            <div className="mt-2 px-7 py-3">
              <div className="text-sm text-gray-500 dark:text-gray-300">
                {selectedSupplements.match({
                  Done: (doneResult) =>
                    doneResult.match({
                      Ok: (okResult) =>
                        okResult.match({
                          Some: (result) => (
                            <InnerOptionChooser
                              selectedSupplements={result}
                              formatCurrency={formatCurrency}
                              onSupplementSelected={onSupplementSelected}
                            />
                          ),
                          None: () => <></>,
                        }),
                      Error: () => <></>,
                    }),
                  Loading: () => <></>,
                  NotAsked: () => <></>,
                })}
              </div>
            </div>
            <div className="flex justify-center items-center px-4 py-3">
              <ButtonPrimary onClick={onReserve}>
                {t('actions.reserve.title')}
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

interface InnerOptionChooserProps {
  selectedSupplements: UnitSelectedSupplementsBySupplementId[]
  formatCurrency: (amount: number) => string
  onSupplementSelected: (params: SupplementSelectionArgs) => void
}

const InnerOptionChooser: React.FC<InnerOptionChooserProps> = ({
  selectedSupplements,
  formatCurrency,
  onSupplementSelected,
}) => {
  const { t } = useTranslation()

  const supplementIdsAsObject = selectedSupplements
    .flatMap((u) => Object.keys(u))
    .reduce((p, c) => ({ ...p, [c]: c }), {})
  const supplement_ids = Object.keys(supplementIdsAsObject)

  const { data, loading } = useGet_Supplements_EnQuery({
    variables: {
      supplement_ids,
    },
  })

  if (loading || !data?.supplement) {
    return <></>
  }

  const supplementsById = data.supplement.reduce(
    (p, c) => ({ ...p, [c.id]: c }),
    {},
  )

  return (
    <>
      {selectedSupplements.map((unitSelectedSupplementsById, unitIndex) => (
        <div key={unitIndex} className="mt-4">
          <h3 className="text-md font-medium">
            {t('entities.unit.ith.format', { i: unitIndex + 1 })}
          </h3>
          {Object.keys(unitSelectedSupplementsById).length && (
            <div>
              {Object.values(unitSelectedSupplementsById).map((supplement) => {
                const enabled = supplement.quantity > 0
                const name = supplementsById[supplement.id].name.text

                return (
                  <div key={supplement.id} className="ml-4 py-1 align-middle">
                    <Switch
                      className={`${
                        enabled ? 'bg-blue-600' : 'bg-gray-200'
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                      onChange={(selected) => {
                        onSupplementSelected({
                          unitIndex,
                          supplementId: supplement.id,
                          count: selected ? 1 : 0,
                        })
                      }}
                    >
                      <span className="sr-only">
                        {t('actions.select.format', { value: name })}
                      </span>
                      <span
                        className={`${
                          enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>
                    <span className="pl-2">
                      {name} (
                      {formatCurrency(supplement.unitPrice)})
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default OptionChooserDialog
