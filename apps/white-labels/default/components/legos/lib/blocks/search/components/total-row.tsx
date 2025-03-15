import { useTranslation } from '@otiuming/ui-i18n'
import {
  AsyncResult,
  OptionalAsyncResult,
} from '@otiuming/ui-white-labels-view-models'

interface Props{
  viewModel: {
    total: OptionalAsyncResult<number>
    hasMultipleBookableOptions: AsyncResult<boolean>
  }
  formatCurrency: (amount: number) => string
}

export function buildTotalRow() {
  const TotalRow: React.FC<Props> = ({
    viewModel,
    formatCurrency,
  }) => {
    const { t } = useTranslation()

    return viewModel.total.match({
      Done: (resultOfTotal) =>
        resultOfTotal.match({
          Ok: (okTotal) =>
            okTotal.match({
              None: () => (
                <div className="flex justify-between font-semibold">
                  {t('status.no-results-contact-us.title')}
                </div>
              ),
              Some: (total) =>
                viewModel.hasMultipleBookableOptions.match({
                  Done: (resultOfHasMultipleBookableOptions) =>
                    resultOfHasMultipleBookableOptions.match({
                      Ok: (hasMultipleBookableOptions) => (
                        <div className="flex justify-between font-semibold">
                          {hasMultipleBookableOptions ? (
                            <>
                              <span>{t('fields.from.title')}</span>
                              <span>{formatCurrency(total)}</span>
                            </>
                          ) : (
                            <>
                              <span>{t('fields.total.title')}</span>
                              <span>{formatCurrency(total)}</span>
                            </>
                          )}
                        </div>
                      ),
                      Error: () => (
                        <div className="flex justify-between font-semibold">
                          {t('status.error.title')}
                        </div>
                      ),
                    }),
                  Loading: () => (
                    <div className="flex justify-between font-semibold">
                      {t('status.loading.title')}
                    </div>
                  ),
                  NotAsked: () => (
                    <div className="flex justify-between font-semibold">
                      {t('status.loading.title')}
                    </div>
                  ),
                }),
            }),
          Error: () => (
            <div className="flex justify-between font-semibold">
              {t('status.no-results-contact-us.title')}
            </div>
          ),
        }),
      Loading: () => (
        <div className="flex justify-between font-semibold">
          {t('status.loading.title')}
        </div>
      ),
      NotAsked: () => (
        <div className="flex justify-between font-semibold">
          {t('status.loading.title')}
        </div>
      ),
    })
  }

  return TotalRow
}
