import { Rate, RateOnlyResponse, SearchParams } from '@otiuming/domain-search'
import { NewExplainedSearchParams } from '@otiuming/domain-shopping-cart'

import { AsyncResult, Optional, OptionalAsyncResult } from '../../tools'
import {
  NavigateToContactUsFunction,
  NewReserveFunction,
  OpenChooseOptionsFunction,
  SearchFunction,
  SupplementSelectionArgs,
  UnitSelectedSupplementsBySupplementId,
} from '../types'

export interface ViewModelStateBase {
  readonly selectedRate: OptionalAsyncResult<Rate>
  submitSelectedRateChanges(
    apply: (current: OptionalAsyncResult<Rate>) => OptionalAsyncResult<Rate>,
  ): void

  readonly searchResult: AsyncResult<RateOnlyResponse>
  submitSearchResultChanges(
    apply: (
      current: AsyncResult<RateOnlyResponse>,
    ) => AsyncResult<RateOnlyResponse>,
  ): void

  readonly selectedSupplements: OptionalAsyncResult<
    UnitSelectedSupplementsBySupplementId[]
  >
  submitSelectedSupplementsChanges(
    apply: (
      current: OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]>,
    ) => OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]>,
  ): void
}

export interface ViewModelConfigurationBase {}

export class ViewModelBase<
  State extends ViewModelStateBase,
  Configuration extends ViewModelConfigurationBase,
> {
  constructor(
    public state: State,
    public configuration: Configuration,
    public search: SearchFunction,
    public openChooseOptions: OpenChooseOptionsFunction,
    public reserve: NewReserveFunction,
    public navigateToContactUs: NavigateToContactUsFunction,
  ) {}

  public get explainedSearchParams(): Optional<NewExplainedSearchParams> {
    return Optional.None()
  }

  public toSearchParams(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    explainedSearchParams: NewExplainedSearchParams,
  ): SearchParams {
    return {} as unknown as SearchParams
  }

  public executeSearch() {
    this.explainedSearchParams.map((params) => {
      this.searchAndProcessResults(params)
    })
  }

  public searchWithModifiedParamsAndProcessResults(
    modify: (e: NewExplainedSearchParams) => NewExplainedSearchParams,
  ): void {
    this.explainedSearchParams.map((current) => {
      const changed = modify(current)
      this.searchAndProcessResults({ ...changed })
    })
  }

  public searchAndProcessResults(params: NewExplainedSearchParams): void {
    const searchParams = this.toSearchParams(params)
    const searchFutureResult = this.search(searchParams)
    searchFutureResult.mapOk((response) => {
      const selectedRate = response[0]

      this.state.submitSelectedRateChanges(() =>
        response && response.length > 0
          ? OptionalAsyncResult.Some(selectedRate)
          : OptionalAsyncResult.None(),
      )

      const selectedSupplements:
        | UnitSelectedSupplementsBySupplementId[]
        | undefined = createEmptySelectedSupplements(selectedRate)

      const newSelectedSupplements =
        OptionalAsyncResult.FromNullable(selectedSupplements)
      this.state.submitSelectedSupplementsChanges(() => newSelectedSupplements)

      this.state.submitSearchResultChanges(() => AsyncResult.Ok(response))
    })

    searchFutureResult.mapError((error) => {
      this.state.submitSelectedRateChanges(() => OptionalAsyncResult.None())
      this.state.submitSearchResultChanges(() => AsyncResult.Error(error))
    })

    this.state.submitSelectedRateChanges(AsyncResult.Loading)
    this.state.submitSearchResultChanges(AsyncResult.Loading)
  }

  get searchResult() {
    return this.state.searchResult
  }

  get selectedRate() {
    return this.state.selectedRate
  }

  get total(): OptionalAsyncResult<number> {
    return this.selectedRate.mapOk((maybeRate) =>
      maybeRate.map((rate) => rate.units.reduce((p, c) => c.total + p, 0)),
    )
  }

  get hasMultipleBookableOptions(): AsyncResult<boolean> {
    return this.searchResult.mapOk((result) =>
      Boolean(result?.[0]?.units?.[0]?.optionalSupplements?.length),
    )
  }

  public executeAction() {
    this.searchResult.mapOk((result) => {
      if (!result || result.length === 0) {
        this.navigateToContactUs()
      }
    })

    this.searchResult.mapError(() => {
      this.navigateToContactUs()
    })

    this.hasMultipleBookableOptions.mapOk((hasMultipleBookableOptions) => {
      if (hasMultipleBookableOptions) {
        this.openChooseOptions()
      } else {
        this.executeReserve()
      }
    })
  }

  get handleExecuteAction() {
    return this.executeAction.bind(this)
  }

  public executeReserve() {
    this.selectedRate.mapOk((optionRate) =>
      optionRate.map((rate) =>
        this.total.mapOk((optionTotal) =>
          optionTotal.map((total) =>
            this.explainedSearchParams.map((explainedSearchParams) => {
              this.selectedSupplements.mapOk((okSelectedSupplements) => {
                okSelectedSupplements.map((selectedSupplements) => {
                  const units = selectedSupplements.map((unitSupplements) => ({
                    supplements: Object.values(unitSupplements).map((s) => ({
                      id: s.id,
                      quantity: s.quantity,
                      unitPrice: s.unitPrice,
                    })),
                  }))

                  this.reserve({
                    explainedSearchParams: explainedSearchParams,
                    searchParams: this.toSearchParams(explainedSearchParams),
                    rateId: rate.id,
                    price: total,
                    units: units,
                  })
                })
              })
            }),
          ),
        ),
      ),
    )
  }

  public get handleExecuteReserve() {
    return this.executeReserve.bind(this)
  }

  get selectedSupplements() {
    return this.state.selectedSupplements
  }

  public increaseSupplements(deltas: Record<string, number>[]) {
    this.state.submitSelectedSupplementsChanges((current) =>
      current.mapOk((okCurrent) =>
        okCurrent.map((unitSupplements) =>
          unitSupplements.map((unitSupplement, index) => {
            const unitDeltas = deltas[index]

            const existingEntries = Object.entries(unitSupplement)
            const existingEntriesWithDeltasApplied = existingEntries.map(
              ([key, value]) => {
                if (unitDeltas) {
                  const delta = unitDeltas[key] ?? 0
                  return [key, { ...value, quantity: value.quantity + delta }]
                }
                return [key, value]
              },
            )
            const newUnitSupplement = Object.fromEntries(
              existingEntriesWithDeltasApplied,
            )

            return newUnitSupplement
          }),
        ),
      ),
    )
  }

  public increaseSupplement({
    unitIndex,
    supplementId,
    count = 1,
  }: SupplementSelectionArgs) {
    this.state.submitSelectedSupplementsChanges((current) =>
      current.mapOk((okCurrent) =>
        okCurrent.map((unitSupplements) => [
          ...unitSupplements.slice(0, unitIndex),
          {
            ...unitSupplements[unitIndex],
            [supplementId]: {
              ...unitSupplements[unitIndex][supplementId],
              quantity:
                unitSupplements[unitIndex][supplementId].quantity + count,
            },
          },
          ...unitSupplements.slice(unitIndex + 1),
        ]),
      ),
    )
  }

  public setSupplementSelection({
    unitIndex,
    supplementId,
    count = 1,
  }: SupplementSelectionArgs) {
    this.state.submitSelectedSupplementsChanges((current) =>
      current.mapOk((okCurrent) =>
        okCurrent.map((unitSupplements) => [
          ...unitSupplements.slice(0, unitIndex),
          {
            ...unitSupplements[unitIndex],
            [supplementId]: {
              ...unitSupplements[unitIndex][supplementId],
              quantity: count,
            },
          },
          ...unitSupplements.slice(unitIndex + 1),
        ]),
      ),
    )
  }

  public get handleSupplementSelectionSet() {
    return this.setSupplementSelection.bind(this)
  }

  public initialize() {
    this.executeSearch()
  }
}

function createEmptySelectedSupplements(
  selectedRate: Rate,
): UnitSelectedSupplementsBySupplementId[] | undefined {
  return selectedRate?.units?.map(
    (u) =>
      (u.optionalSupplements || [])?.reduce(
        (result, supplement) =>
          ({
            ...result,
            [supplement.id]: {
              id: supplement.id,
              quantity: 0,
              unitPrice: supplement.sum,
            },
          }) as UnitSelectedSupplementsBySupplementId,
        {},
      ),
  )
}
