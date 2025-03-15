import { useTranslation } from '@otiuming/ui-i18n'

import { ButtonPrimary } from '../../../atoms'
import { AsyncResult } from '@otiuming/ui-white-labels-view-models'
import { RateOnlyResponse } from '@otiuming/domain-search'

interface Props{
  viewModel: {
    hasMultipleBookableOptions: AsyncResult<boolean>
    searchResult: AsyncResult<RateOnlyResponse>
    handleExecuteAction: () => void
  }
}

export function buildActionButton() {
  const ActionButton: React.FC<Props> = ({ viewModel }) => {
    const { t } = useTranslation()

    const disabled = viewModel.searchResult.match({
      Done: (doneSearchResult) =>
        doneSearchResult.match({
          Ok: () => false,
          Error: () => false,
        }),
      Loading: () => true,
      NotAsked: () => true,
    })

    return (
      <ButtonPrimary 
        onClick={viewModel.handleExecuteAction}
        disabled={disabled}
      >
        {viewModel.hasMultipleBookableOptions.match({
          Done: (doneHasMultipleBookableOptions) =>
            doneHasMultipleBookableOptions.match({
              Ok: (hasMultipleBooableOptions) =>
                hasMultipleBooableOptions
                  ? t('actions.view-options.title')
                  : t('actions.reserve.title'),
              Error: () => t('actions.contact-us.title'),
            }),
          Loading: () => t('status.loading.title'),
          NotAsked: () => t('status.loading.title'),
        })}
      </ButtonPrimary>
    )
  }

  return ActionButton
}
