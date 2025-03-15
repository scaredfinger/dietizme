import React, { useState } from 'react'
import _ from 'lodash'

import {
  Rate_Type_Enum,
  Unit_Management_Enum,
} from '@otiuming/domain-omnidata-types'
import {
  BusinessModel,
  Configuration,
  DailyPerPaxConfiguration,
  DailyPerResourceConfiguration,
  TimeSlotsPerPaxConfiguration,
} from '@otiuming/domain-rates'
import { ReserveArguments } from '@otiuming/ui-white-labels-view-models'

import { useRoutes } from '@/components/use-routes'

import { Amount } from '../../data-types'

import {
  TimeSlotsPerPaxSearchBox,
  useSearchFunction,
  useTimeSlotViewModel,
} from './time-slots-per-pax'
import { SimpleSearchBox } from './simple'
import {
  DailyPerProductSearchBox,
  useDailyPerResourceSearchFunction,
  useDailyPerResourceViewModel,
} from './daily-per-resource'
import OptionChooserDialog from './components/option-chooser-dialog'
import { useRouter } from 'next/router'
import { DailyPerPaxSearchBox, useDailyPerPaxViewModel } from './daily-per-pax'

interface Props {
  formatCurrency: (amount: Amount) => string
  productId: string
  rateConfiguration: Configuration
  searchEngineUrl: string
  onReserve: (item: ReserveArguments) => void
  businessModel: BusinessModel
}

export const SearchBoxChooser: React.FC<Props> = ({
  formatCurrency,
  businessModel,
  rateConfiguration,
  productId,
  searchEngineUrl,
  onReserve,
}) => {
  if (
    businessModel.time_management === Rate_Type_Enum.TimeSlots &&
    businessModel.unit_management === Unit_Management_Enum.PerPax
  ) {
    return (
      <TimeSlotsPerPaxBoundSearchBox
        configuration={rateConfiguration as TimeSlotsPerPaxConfiguration}
        productId={productId}
        searchEngineUrl={searchEngineUrl}
        onReserve={onReserve}
        formatCurrency={formatCurrency}
      />
    )
  }

  if (
    businessModel.time_management === Rate_Type_Enum.Daily &&
    businessModel.unit_management === Unit_Management_Enum.PerResource
  ) {
    return (
      <DailyPerResourceBoundSearchBox
        configuration={rateConfiguration as DailyPerResourceConfiguration}
        productId={productId}
        searchEngineUrl={searchEngineUrl}
        onReserve={onReserve}
        formatCurrency={formatCurrency}
      />
    )
  }

  if (
    businessModel.time_management === Rate_Type_Enum.Daily &&
    businessModel.unit_management === Unit_Management_Enum.PerPax
  ) {
    return (
      <DailyPerPaxBoundSearchBox 
        configuration={rateConfiguration as DailyPerPaxConfiguration}
        productId={productId}
        searchEngineUrl={searchEngineUrl}
        onReserve={onReserve}
        formatCurrency={formatCurrency} />
    )
  }

  return <SimpleSearchBox formatCurrency={formatCurrency} />
}

const TimeSlotsPerPaxBoundSearchBox: React.FC<{
  configuration: TimeSlotsPerPaxConfiguration
  productId: string
  searchEngineUrl: string
  onReserve: (item: ReserveArguments) => void
  formatCurrency: (amount: Amount) => string
}> = ({
  configuration,
  productId,
  searchEngineUrl,
  onReserve,
  formatCurrency,
}) => {
  const searchFunction = useSearchFunction({
    productId,
    searchEngineUrl,
  })
  const [openOptionChooserDialog, setOpenOptionChooserDialog] = useState(false)
  
  const { push } = useRouter()

  const { contact } = useRoutes()

  const viewModel = useTimeSlotViewModel({
    configuration,
    search: searchFunction,
    reserve: onReserve,
    openChooseBookableOptions: () => setOpenOptionChooserDialog(true),
    navigateToContactUs: () => push(contact()),
  })

  return (
    <>
      <TimeSlotsPerPaxSearchBox
        viewModel={viewModel}
        formatCurrency={formatCurrency}
      />
      <OptionChooserDialog
        selectedSupplements={viewModel.selectedSupplements}
        open={openOptionChooserDialog}
        onClose={() => setOpenOptionChooserDialog(false)}
        formatCurrency={formatCurrency}
        onSupplementSelected={viewModel.handleSupplementSelectionSet}
        onReserve={viewModel.handleExecuteReserve}
      />
    </>
  )
}

const DailyPerResourceBoundSearchBox: React.FC<{
  configuration: DailyPerResourceConfiguration
  productId: string
  searchEngineUrl: string
  onReserve: (item: ReserveArguments) => void
  formatCurrency: (amount: Amount) => string
}> = ({
  configuration,
  productId,
  searchEngineUrl,
  onReserve,
  formatCurrency,
}) => {
  const searchFunction = useDailyPerResourceSearchFunction({
    productId,
    searchEngineUrl,
  })
  
  const { push } = useRouter()

  const { contact } = useRoutes()

  const [openOptionChooserDialog, setOpenOptionChooserDialog] = useState(false)

  const viewModel = useDailyPerResourceViewModel({
    configuration,
    search: searchFunction,
    reserve: onReserve,
    openChooseOptions: () => setOpenOptionChooserDialog(true),
    navigateToContactUs: () => push(contact()),
  })

  return (
    <>
      <DailyPerProductSearchBox
        viewModel={viewModel}
        formatCurrency={formatCurrency}
      />
      <OptionChooserDialog
        selectedSupplements={viewModel.selectedSupplements}
        open={openOptionChooserDialog}
        onClose={() => setOpenOptionChooserDialog(false)}
        formatCurrency={formatCurrency}
        onSupplementSelected={viewModel.handleSupplementSelectionSet}
        onReserve={viewModel.handleExecuteReserve}
      />
    </>
  )
}

const DailyPerPaxBoundSearchBox: React.FC<{
  configuration: DailyPerPaxConfiguration
  productId: string
  searchEngineUrl: string
  onReserve: (item: ReserveArguments) => void
  formatCurrency: (amount: Amount) => string
}> = ({
  configuration,
  productId,
  searchEngineUrl,
  onReserve,
  formatCurrency,
}) => {
  const searchFunction = useSearchFunction({
    productId,
    searchEngineUrl,
  })
  
  const { push } = useRouter()

  const { contact } = useRoutes()

  const [openOptionChooserDialog, setOpenOptionChooserDialog] = useState(false)

  const viewModel = useDailyPerPaxViewModel({
    configuration,
    search: searchFunction,
    reserve: onReserve,
    openChooseOptions: () => setOpenOptionChooserDialog(true),
    navigateToContactUs: () => push(contact()),
  })

  return (
    <>
      <DailyPerPaxSearchBox
        viewModel={viewModel}
        formatCurrency={formatCurrency}
      />
      <OptionChooserDialog
        selectedSupplements={viewModel.selectedSupplements}
        open={openOptionChooserDialog}
        onClose={() => setOpenOptionChooserDialog(false)}
        formatCurrency={formatCurrency}
        onSupplementSelected={viewModel.handleSupplementSelectionSet}
        onReserve={viewModel.handleExecuteReserve}
      />
    </>
  )
}


