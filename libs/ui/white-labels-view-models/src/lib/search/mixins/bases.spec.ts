import { describe, beforeEach, it, expect, vi, Mock } from 'vitest'
import { ok as assertOk, fail } from 'assert'

import { Rate, RateOnlyResponse, SearchParams } from '@otiuming/domain-search'
import { NewExplainedSearchParams } from '@otiuming/domain-shopping-cart'

import {
  OptionalAsyncResult,
  AsyncResult,
  FutureResult,
  Optional,
} from '../../tools'
import { AsyncStub } from '../../tools/stubs'
import {
  NavigateToContactUsFunction,
  NewReserveArguments,
  NewReserveFunction,
  OpenChooseOptionsFunction,
  SearchFunction,
  UnitSelectedSupplementsBySupplementId,
} from '../types'

import { ViewModelBase, ViewModelStateBase } from './bases'

describe('ViewModelBase', () => {
  let sut: TestDoubleImplementation
  let searchStub: AsyncStub<RateOnlyResponse, [SearchParams]>
  let searchFunction: (params: SearchParams) => FutureResult<RateOnlyResponse>
  let openChooseOptionsStub: Mock
  let reserveStub: Mock
  let naigateToContactUs: Mock

  beforeEach(() => {
    searchStub = new AsyncStub()

    searchFunction = (params) =>
      FutureResult.fromPromise(
        searchStub.call(params).then((r) => r as RateOnlyResponse),
      )

    openChooseOptionsStub = vi.fn()
    reserveStub = vi.fn()
    naigateToContactUs = vi.fn()

    sut = new TestDoubleImplementation(
      new TestDoubleState(),
      searchFunction,
      Optional.Some(EXPLAINED_SEARCH_PARAMS),
      SEARCH_REQUEST,
      openChooseOptionsStub,
      reserveStub,
      naigateToContactUs,
    )
  })

  it('can startup', () => {
    expect(searchStub).toBeTruthy()
    expect(searchFunction).toBeTruthy()
  })

  it('can be initialized', () => {
    sut.initialize()
  })

  it('can be instanciated', () => {
    expect(sut).toBeTruthy()
  })

  describe('search', () => {
    beforeEach(async () => {
      sut.executeSearch()
    })

    describe('when search finishes', () => {
      describe('with no results', () => {
        beforeEach(async () => {
          searchStub.signal(NO_RESULTS, SEARCH_REQUEST)

          await searchStub.untilNoMorePendingTasks()
        })

        it('fininshes', () => {
          expect(1).toBeTruthy()
        })

        it('assigns `searchResult` to result', () => {
          sut.searchResult.match({
            Done: (doneSearchResult) => {
              doneSearchResult.match({
                Ok: (searchResult) => {
                  expect(searchResult).toEqual(NO_RESULTS)
                },
                Error: () => fail(),
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        it('assings `selectedRate` to None', () => {
          sut.selectedRate.match({
            Done: (doneSelecetdRate) => {
              doneSelecetdRate.match({
                Ok: (selectedRate) => {
                  selectedRate.match({
                    None: () => ok(),
                    Some: () => fail(),
                  })
                },
                Error: () => fail(),
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        it('returns `total` as None', () => {
          sut.total.match({
            Done: (doneTotal) => {
              doneTotal.match({
                Ok: (okTotal) => {
                  okTotal.match({
                    None: () => ok(),
                    Some: () => fail(),
                  })
                },
                Error: () => fail(),
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        it('returns `hasMultipleBookableOptions` as false', () => {
          sut.hasMultipleBookableOptions.match({
            Done: (doneHasMultipleBookableOptions) => {
              doneHasMultipleBookableOptions.match({
                Ok: (hasMultipleBookableOptions) => {
                  expect(hasMultipleBookableOptions).toBeFalsy()
                },
                Error: () => fail(),
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        describe('when `executeAction` is called', () => {
          beforeEach(() => {
            sut.executeAction()
          })

          it('does not call `openChooseOptions`', () => {
            expect(openChooseOptionsStub).not.toHaveBeenCalled()
          })

          it('does not call `reserve`', () => {
            expect(reserveStub).not.toHaveBeenCalled()
          })

          it('calls `naigateToContactUs`', () => {
            expect(naigateToContactUs).toHaveBeenCalled()
          })
        })

        describe('`selectedSupplements`', () => {
          it('returns None', () => {
            sut.selectedSupplements.match({
              Done: (doneSelectedSupplements) => {
                doneSelectedSupplements.match({
                  Ok: (okSelectedSupplements) =>
                    okSelectedSupplements.match({
                      None: () => ok(),
                      Some: () => fail(),
                    }),
                  Error: () => fail(),
                })
              },
              Loading: () => fail(),
              NotAsked: () => fail(),
            })
          })
        })
      })

      describe('with error', () => {
        beforeEach(async () => {
          searchStub.signalError(new Error('error'), SEARCH_REQUEST)

          await searchStub.untilNoMorePendingTasks()
        })

        it('fininshes', () => {
          expect(1).toBeTruthy()
        })

        it('assigns `searchResult` to error', () => {
          sut.searchResult.match({
            Done: (doneSearchResult) => {
              doneSearchResult.match({
                Ok: () => fail(),
                Error: (error) => {
                  expect(error).toEqual(new Error('error'))
                },
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        describe('when `executeAction` is called', () => {
          beforeEach(() => {
            sut.executeAction()
          })

          it('does not call `openChooseOptions`', () => {
            expect(openChooseOptionsStub).not.toHaveBeenCalled()
          })

          it('does not call `reserve`', () => {
            expect(reserveStub).not.toHaveBeenCalled()
          })

          it('calls `naigateToContactUs`', () => {
            expect(naigateToContactUs).toHaveBeenCalled()
          })
        })
      })

      describe('returning a single rate with no supplements', () => {
        beforeEach(async () => {
          searchStub.signal(SINGLE_RESULT, SEARCH_REQUEST)

          await searchStub.untilNoMorePendingTasks()
        })

        it('finishes', () => {
          expect(1).toBeTruthy()
        })

        it('assigns `selectedRate` to Some with that sole rate', () => {
          sut.selectedRate.match({
            Done: (doneSelecetdRate) => {
              doneSelecetdRate.match({
                Ok: (selectedRate) => {
                  selectedRate.match({
                    None: () => fail(),
                    Some: (rate) => {
                      expect(rate).toEqual(SINGLE_RESULT[0])
                    },
                  })
                },
                Error: () => fail(),
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        it("returns `total` as selectedRate's total", () => {
          sut.total.match({
            Done: (doneTotal) => {
              doneTotal.match({
                Ok: (okTotal) => {
                  okTotal.match({
                    Some: (total) => {
                      expect(total).toEqual(getTotal(SINGLE_RESULT))
                    },
                    None: () => fail(),
                  })
                },
                Error: () => fail(),
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        it('returns `hasMultipleBookableOptions` as false', () => {
          sut.hasMultipleBookableOptions.match({
            Done: (doneHasMultipleBookableOptions) => {
              doneHasMultipleBookableOptions.match({
                Ok: (hasMultipleBookableOptions) => {
                  expect(hasMultipleBookableOptions).toBeFalsy()
                },
                Error: () => fail(),
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        describe('when `executeAction` is called', () => {
          beforeEach(() => {
            sut.executeAction()
          })

          it('does not call `openChooseOptions`', () => {
            expect(openChooseOptionsStub).not.toHaveBeenCalled()
          })

          it('calls `reserve`', () => {
            expect(reserveStub).toHaveBeenCalledWith({
              searchParams: SEARCH_REQUEST,
              explainedSearchParams: EXPLAINED_SEARCH_PARAMS,
              rateId: SINGLE_RESULT[0].id,
              price: getTotal(SINGLE_RESULT),
              units: [
                {
                  supplements: [],
                },
                {
                  supplements: [],
                },
              ],
            })
          })
        })

        describe('`selectedSupplements`', () => {
          it('returns None', () => {
            sut.selectedSupplements.match({
              Done: (doneSelectedSupplements) => {
                doneSelectedSupplements.match({
                  Ok: (okSelectedSupplements) =>
                    okSelectedSupplements.match({
                      None: () => fail(),
                      Some: (selectedSupplements) => {
                        expect(selectedSupplements).toEqual([{}, {}])
                      },
                    }),
                  Error: () => fail(),
                })
              },
              Loading: () => fail(),
              NotAsked: () => fail(),
            })
          })
        })
      })

      describe('returning a single rate with optional supplements', () => {
        beforeEach(async () => {
          searchStub.signal(
            SINGLE_RESULT_WITH_OPTIONAL_SUPPLEMENTS,
            SEARCH_REQUEST,
          )

          await searchStub.untilNoMorePendingTasks()
        })

        it('finishes', () => {
          expect(1).toBeTruthy()
        })

        it('assigns `selectedRate` to Some with that sole rate', () => {
          sut.selectedRate.match({
            Done: (doneSelecetdRate) => {
              doneSelecetdRate.match({
                Ok: (selectedRate) => {
                  selectedRate.match({
                    None: () => fail(),
                    Some: (rate) => {
                      expect(rate).toEqual(
                        SINGLE_RESULT_WITH_OPTIONAL_SUPPLEMENTS[0],
                      )
                    },
                  })
                },
                Error: () => fail(),
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        it("returns `total` as selectedRate's total", () => {
          sut.total.match({
            Done: (doneTotal) => {
              doneTotal.match({
                Ok: (okTotal) => {
                  okTotal.match({
                    Some: (total) => {
                      expect(total).toEqual(
                        getTotal(SINGLE_RESULT_WITH_OPTIONAL_SUPPLEMENTS),
                      )
                    },
                    None: () => fail(),
                  })
                },
                Error: () => fail(),
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        it('returns `hasMultipleBookableOptions` as true', () => {
          sut.hasMultipleBookableOptions.match({
            Done: (doneHasMultipleBookableOptions) => {
              doneHasMultipleBookableOptions.match({
                Ok: (hasMultipleBookableOptions) => {
                  expect(hasMultipleBookableOptions).toBeTruthy()
                },
                Error: () => fail(),
              })
            },
            Loading: () => fail(),
            NotAsked: () => fail(),
          })
        })

        describe('when `executeAction` is called', () => {
          beforeEach(() => {
            sut.executeAction()
          })

          it('calls `openChooseOptions`', () => {
            expect(openChooseOptionsStub).toHaveBeenCalled()
          })
        })

        describe('when `executeReserve` is called', () => {
          describe('without any supplement selected', () => {
            beforeEach(() => {
              sut.executeReserve()
            })

            it('does not call `openChooseOptions`', () => {
              expect(openChooseOptionsStub).not.toHaveBeenCalled()
            })

            it('calls `reserve`', () => {
              expect(reserveStub).toHaveBeenCalledWith({
                searchParams: SEARCH_REQUEST,
                explainedSearchParams: EXPLAINED_SEARCH_PARAMS,
                rateId: SINGLE_RESULT_WITH_OPTIONAL_SUPPLEMENTS[0].id,
                price: getTotal(SINGLE_RESULT_WITH_OPTIONAL_SUPPLEMENTS),
                units: [
                  {
                    supplements: [
                      { id: 'supplement-1', quantity: 0, unitPrice: 10 },
                      { id: 'supplement-2', quantity: 0, unitPrice: 20 },
                    ],
                  },
                  {
                    supplements: [
                      { id: 'supplement-1', quantity: 0, unitPrice: 10 },
                      { id: 'supplement-2', quantity: 0, unitPrice: 20 },
                    ],
                  },
                ],
              })
            })
          })

          describe('with supplements selected', () => {
            beforeEach(() => {
              sut.setSupplementSelection({
                unitIndex: 0,
                supplementId: 'supplement-1',
                count: 1,
              })
              sut.executeReserve()
            })

            it('does not call `openChooseOptions`', () => {
              expect(openChooseOptionsStub).not.toHaveBeenCalled()
            })

            it('calls `reserve`', () => {
              expect(reserveStub).toHaveBeenCalledWith({
                searchParams: SEARCH_REQUEST,
                explainedSearchParams: EXPLAINED_SEARCH_PARAMS,
                rateId: SINGLE_RESULT_WITH_OPTIONAL_SUPPLEMENTS[0].id,
                price: getTotal(SINGLE_RESULT_WITH_OPTIONAL_SUPPLEMENTS),
                units: [
                  {
                    supplements: [
                      { id: 'supplement-1', quantity: 1, unitPrice: 10 },
                      { id: 'supplement-2', quantity: 0, unitPrice: 20 },
                    ],
                  },
                  {
                    supplements: [
                      { id: 'supplement-1', quantity: 0, unitPrice: 10 },
                      { id: 'supplement-2', quantity: 0, unitPrice: 20 },
                    ],
                  },
                ],
              })
            })
          })
        })

        describe('`selectedSupplements`', () => {
          it('returns Some', () => {
            sut.selectedSupplements.match({
              Done: (doneSelectedSupplements) => {
                doneSelectedSupplements.match({
                  Ok: (okSelectedSupplements) =>
                    okSelectedSupplements.match({
                      None: () => fail(),
                      Some: (selectedSupplements) => {
                        expect(selectedSupplements).toEqual([
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 0,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 0,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                        ])
                      },
                    }),
                  Error: () => fail(),
                })
              },
              Loading: () => fail(),
              NotAsked: () => fail(),
            })
          })
        })
      })

      describe('selected supplements', () => {
        beforeEach(async () => {
          searchStub.signal(
            SINGLE_RESULT_WITH_OPTIONAL_SUPPLEMENTS,
            SEARCH_REQUEST,
          )

          await searchStub.untilNoMorePendingTasks()
        })

        describe('increate a supplement quantity', () => {
          beforeEach(() => {
            sut.increaseSupplements([
              {
                'supplement-1': 1,
              },
              {
                'supplement-2': 2,
              },
            ])
          })

          it('updates `selectedSupplements`', () => {
            sut.selectedSupplements.match({
              Done: (doneSelectedSupplements) => {
                doneSelectedSupplements.match({
                  Ok: (okSelectedSupplements) =>
                    okSelectedSupplements.match({
                      None: () => fail(),
                      Some: (selectedSupplements) => {
                        expect(selectedSupplements).toEqual([
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 1,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 0,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 2,
                              unitPrice: 20,
                            },
                          },
                        ])
                      },
                    }),
                  Error: () => fail(),
                })
              },
              Loading: () => fail(),
              NotAsked: () => fail(),
            })
          })
        })

        describe('increase supplement quantity for no unit', () => {
          beforeEach(() => {
            sut.increaseSupplements([])
          })

          it('does not update `selectedSupplements`', () => {
            sut.selectedSupplements.match({
              Done: (doneSelectedSupplements) => {
                doneSelectedSupplements.match({
                  Ok: (okSelectedSupplements) =>
                    okSelectedSupplements.match({
                      None: () => fail(),
                      Some: (selectedSupplements) => {
                        expect(selectedSupplements).toEqual([
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 0,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 0,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                        ])
                      },
                    }),
                  Error: () => fail(),
                })
              },
              Loading: () => fail(),
              NotAsked: () => fail(),
            })
          })
        })

        describe('increase a single supplement quantity', () => {
          beforeEach(() => {
            sut.increaseSupplement({
              unitIndex: 0,
              supplementId: 'supplement-1',
              count: 2,
            })
          })

          it('updates `selectedSupplements`', () => {
            sut.selectedSupplements.match({
              Done: (doneSelectedSupplements) => {
                doneSelectedSupplements.match({
                  Ok: (okSelectedSupplements) =>
                    okSelectedSupplements.match({
                      None: () => fail(),
                      Some: (selectedSupplements) => {
                        expect(selectedSupplements).toEqual([
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 2,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 0,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                        ])
                      },
                    }),
                  Error: () => fail(),
                })
              },
              Loading: () => fail(),
              NotAsked: () => fail(),
            })
          })
        })

        describe('increase a single supplment quantity by default amount', () => {
          beforeEach(() => {
            sut.increaseSupplement({
              unitIndex: 0,
              supplementId: 'supplement-1',
            })
          })

          it('updates `selectedSupplements`', () => {
            sut.selectedSupplements.match({
              Done: (doneSelectedSupplements) => {
                doneSelectedSupplements.match({
                  Ok: (okSelectedSupplements) =>
                    okSelectedSupplements.match({
                      None: () => fail(),
                      Some: (selectedSupplements) => {
                        expect(selectedSupplements).toEqual([
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 1,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 0,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                        ])
                      },
                    }),
                  Error: () => fail(),
                })
              },
              Loading: () => fail(),
              NotAsked: () => fail(),
            })
          })
        })

        describe('set supplement quantity', () => {
          beforeEach(() => {
            sut.setSupplementSelection({
              unitIndex: 0,
              supplementId: 'supplement-1',
              count: 2,
            })
          })

          it('updates `selectedSupplements`', () => {
            sut.selectedSupplements.match({
              Done: (doneSelectedSupplements) => {
                doneSelectedSupplements.match({
                  Ok: (okSelectedSupplements) =>
                    okSelectedSupplements.match({
                      None: () => fail(),
                      Some: (selectedSupplements) => {
                        expect(selectedSupplements).toEqual([
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 2,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 0,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                        ])
                      },
                    }),
                  Error: () => fail(),
                })
              },
              Loading: () => fail(),
              NotAsked: () => fail(),
            })
          })
        })

        describe('set supplement quantity to default amount', () => {
          beforeEach(() => {
            sut.setSupplementSelection({
              unitIndex: 0,
              supplementId: 'supplement-1',
            })
          })

          it('updates `selectedSupplements`', () => {
            sut.selectedSupplements.match({
              Done: (doneSelectedSupplements) => {
                doneSelectedSupplements.match({
                  Ok: (okSelectedSupplements) =>
                    okSelectedSupplements.match({
                      None: () => fail(),
                      Some: (selectedSupplements) => {
                        expect(selectedSupplements).toEqual([
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 1,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                          {
                            'supplement-1': {
                              id: 'supplement-1',
                              quantity: 0,
                              unitPrice: 10,
                            },
                            'supplement-2': {
                              id: 'supplement-2',
                              quantity: 0,
                              unitPrice: 20,
                            },
                          },
                        ])
                      },
                    }),
                  Error: () => fail(),
                })
              },
              Loading: () => fail(),
              NotAsked: () => fail(),
            })
          })
        })
      })
    })
  })

  describe('handlers', () => {
    it('can handle `handleExecuteAction`', () => {
      expect(sut.handleExecuteAction).toBeTruthy()
    })

    it('can handle `handleExecuteReserve`', () => {
      expect(sut.handleExecuteReserve).toBeTruthy()
    })

    it('can handle `handleSupplementSelectionSet`', () => {
      expect(sut.handleSupplementSelectionSet).toBeTruthy()
    })
  })

  describe('coverage fillin', () => {
    let sut: ViewModelBase<TestDoubleState, object>

    beforeEach(() => {
      sut = new ViewModelBase(
        new TestDoubleState(),
        {},
        searchFunction,
        openChooseOptionsStub,
        reserveStub,
        naigateToContactUs,
      )
    })

    it('can be instanciated', () => {
      expect(sut).toBeTruthy()
    })

    it('can execute toSearchParams', () => {
      const searchParams = sut.toSearchParams(
        {} as unknown as NewExplainedSearchParams,
      )

      expect(searchParams).toBeDefined()
    })

    it('can execute explainedSearchParams', () => {
      const explainedSearchParams = sut.explainedSearchParams

      expect(explainedSearchParams).toBeDefined()
    })

    it('can search', () => {
      sut = new TestDoubleImplementation(
        new TestDoubleState(),
        searchFunction,
        Optional.Some(EXPLAINED_SEARCH_PARAMS),
        SEARCH_REQUEST,
        openChooseOptionsStub,
        reserveStub,
        naigateToContactUs,
      )

      sut.searchWithModifiedParamsAndProcessResults((e) => e)
    })
  })
})

const EXPLAINED_SEARCH_PARAMS = {
  a: 'a',
} as unknown as NewExplainedSearchParams

const SEARCH_REQUEST = { b: 'b' } as unknown as SearchParams

const NO_RESULTS: RateOnlyResponse = []

const SINGLE_RESULT: RateOnlyResponse = [
  {
    id: 'single-rate',
    units: [
      {
        daily: [10, 10],
        hourly: [],
        global: 20.0,
        total: 40,
      },
      {
        daily: [20, 20],
        hourly: [],
        global: 40,
        total: 120,
      },
    ],
  },
]

const SINGLE_RESULT_WITH_OPTIONAL_SUPPLEMENTS: RateOnlyResponse = [
  {
    id: 'single-rate',
    units: [
      {
        daily: [10, 10],
        hourly: [],
        global: 20.0,
        total: 40,
        optionalSupplements: [
          {
            id: 'supplement-1',
            index: 0,
            type: 'per-day',
            daily: [5, 5],
            hourly: [],
            global: 0,
            sum: 10,
          },
          {
            id: 'supplement-2',
            index: 1,
            type: 'per-unit',
            daily: [],
            hourly: [],
            global: 20,
            sum: 20,
          },
        ],
      },
      {
        daily: [20, 20],
        hourly: [],
        global: 40,
        total: 120,
        optionalSupplements: [
          {
            id: 'supplement-1',
            index: 0,
            type: 'per-day',
            daily: [5, 5],
            hourly: [],
            global: 0,
            sum: 10,
          },
          {
            id: 'supplement-2',
            index: 1,
            type: 'per-unit',
            daily: [],
            hourly: [],
            global: 20,
            sum: 20,
          },
        ],
      },
    ],
  },
]

class TestDoubleImplementation extends ViewModelBase<TestDoubleState, object> {
  constructor(
    state: TestDoubleState,
    search: SearchFunction,
    private _explainedSearchParams: Optional<NewExplainedSearchParams>,
    private _searchParams: SearchParams,
    openChooseOptions: OpenChooseOptionsFunction,
    reserve: NewReserveFunction,
    navigateToContactUs: NavigateToContactUsFunction = () => {},
  ) {
    super(state, {}, search, openChooseOptions, reserve, navigateToContactUs)
  }

  override get explainedSearchParams(): Optional<NewExplainedSearchParams> {
    return this._explainedSearchParams
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override toSearchParams(
    explainedSearchParams: ExplainedSearchParams,
  ): SearchParams {
    return this._searchParams
  }
}

type ExplainedSearchParams = unknown

class TestDoubleState implements ViewModelStateBase {
  constructor(
    private _selectedRate: OptionalAsyncResult<Rate> = OptionalAsyncResult.NotAsked(),
    private _searchResults: AsyncResult<RateOnlyResponse> = AsyncResult.NotAsked(),
    private _selectedSupplements: OptionalAsyncResult<
      UnitSelectedSupplementsBySupplementId[]
    > = OptionalAsyncResult.NotAsked(),
  ) {}

  get selectedRate(): OptionalAsyncResult<Rate> {
    return this._selectedRate
  }
  submitSelectedRateChanges(
    apply: (current: OptionalAsyncResult<Rate>) => OptionalAsyncResult<Rate>,
  ): void {
    this._selectedRate = apply(this._selectedRate)
  }
  get searchResult(): AsyncResult<RateOnlyResponse> {
    return this._searchResults
  }
  submitSearchResultChanges(
    apply: (
      current: AsyncResult<RateOnlyResponse>,
    ) => AsyncResult<RateOnlyResponse>,
  ): void {
    this._searchResults = apply(this._searchResults)
  }

  get selectedSupplements(): OptionalAsyncResult<
    UnitSelectedSupplementsBySupplementId[]
  > {
    return this._selectedSupplements
  }
  submitSelectedSupplementsChanges(
    apply: (
      current: OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]>,
    ) => OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]>,
  ): void {
    this._selectedSupplements = apply(this._selectedSupplements)
  }
}

const ok = () => assertOk('ok')

function getTotal(reponse: RateOnlyResponse) {
  return reponse.reduce((p, c) => c.units.reduce((p, c) => c.total + p, 0), 0)
}
