import { AnswersByScope } from "@otiuming/domain-booking-questions";
import { createChangeProductHandler, createChangeBookingHandler } from "./BookingQuestions.helpers";

describe('BookingQuestions.helpers', () => {
  describe('createChangeProductHandler', () => {
    const initialAnswers: AnswersByScope = {
      products: mapN(3, pi => ({
        productAnswers: {
          questionP1: `old answer P${pi}1`,
          questionP2: `old answer P${pi}2`,
          questionP3: `old answer P${pi}3`,
        },
        adults: mapN(3, ai => ({
          questionA1: `old adult answer P${pi}A${ai}`,
          questionA2: `old adult answer P${pi}A${ai}`,
          questionA3: `old adult answer P${pi}A${ai}`,
        })),
        children: mapN(3, ci => ({
          questionC1: `old child answer P${pi}C${ci}`,
          questionC2: `old child answer P${pi}C${ci}`,
          questionC3: `old child answer P${pi}C${ci}`
        })),
      })),
      booking: {},
    };

    let mockOnChange: jest.Mock<void, [AnswersByScope]>;

    beforeEach(() => {
      mockOnChange = jest.fn();
    })


    describe('productAnswers', () => {
      let changeProductSUT: (newValue: unknown, productIndex: number, questionId: string) => void;

      beforeEach(() => {
        changeProductSUT = createChangeProductHandler(initialAnswers, mockOnChange, 'productAnswers')
      })

        ;[0, 1, 2].forEach((productIndex) => {
          ['questionP1', 'questionP2', 'questionP3'].forEach((questionId) => {
            it(`updates ${questionId} from product ${productIndex}`, () => {

              changeProductSUT('new answer', productIndex, questionId);

              const expectedAnswers = {
                ...initialAnswers,
                products: [
                  ...initialAnswers.products.slice(0, productIndex),
                  {
                    ...initialAnswers.products[productIndex],
                    productAnswers: {
                      ...initialAnswers.products[productIndex].productAnswers,
                      [questionId]: 'new answer'
                    }
                  },
                  ...initialAnswers.products.slice(productIndex + 1),
                ],
              };
              expect(mockOnChange).toHaveBeenCalledWith(expectedAnswers);
            })
          })

          describe('adults', () => {
            let changeAdultSUT: (newValue: unknown, productIndex: number, questionId: string, adultIndex: number) => void;

            beforeEach(() => {
              changeAdultSUT = createChangeProductHandler(initialAnswers, mockOnChange, 'adults');
            })

              ;[0, 1, 2].forEach((adultIndex) => {
                ['questionA1', 'questionA2', 'questionA3'].forEach((questionId) => {
                  it(`updates ${questionId} from product ${productIndex} adult ${adultIndex}`, () => {

                    changeAdultSUT('new adult answer', productIndex, questionId, adultIndex);

                    const expectedAnswers = {
                      ...initialAnswers,
                      products: [
                        ...initialAnswers.products.slice(0, productIndex),
                        {
                          ...initialAnswers.products[productIndex],
                          adults: [
                            ...initialAnswers.products[productIndex].adults.slice(0, adultIndex),
                            {
                              ...initialAnswers.products[productIndex].adults[adultIndex],
                              [questionId]: 'new adult answer'
                            },
                            ...initialAnswers.products[productIndex].adults.slice(adultIndex + 1),
                          ]
                        },
                        ...initialAnswers.products.slice(productIndex + 1),
                      ],
                    };
                    expect(mockOnChange).toHaveBeenCalledWith(expectedAnswers);
                  })
                })
              })
          })

          describe('children', () => {

            let changeChildSUT: (newValue: unknown, productIndex: number, questionId: string, childIndex: number) => void;

            beforeEach(() => {
              changeChildSUT = createChangeProductHandler(initialAnswers, mockOnChange, 'children');
            })

              ;[0, 1, 2].forEach((childIndex) => {
                ['questionC1', 'questionC2', 'questionC3'].forEach((questionId) => {
                  it(`updates ${questionId} from product ${productIndex} child ${childIndex}`, () => {

                    changeChildSUT('new child answer', productIndex, questionId, childIndex);

                    const expectedAnswers = {
                      ...initialAnswers,
                      products: [
                        ...initialAnswers.products.slice(0, productIndex),
                        {
                          ...initialAnswers.products[productIndex],
                          children: [
                            ...initialAnswers.products[productIndex].children.slice(0, childIndex),
                            {
                              ...initialAnswers.products[productIndex].children[childIndex],
                              [questionId]: 'new child answer'
                            },
                            ...initialAnswers.products[productIndex].children.slice(childIndex + 1),
                          ]
                        },
                        ...initialAnswers.products.slice(productIndex + 1),
                      ],
                    };
                    expect(mockOnChange).toHaveBeenCalledWith(expectedAnswers);
                  })
                })
              })
          })
        })
    })
  })

  describe('createChangeBookingHandler', () => {
    const initialAnswers: AnswersByScope = {
      booking: {
        questionB1: 'old booking answer B1',
        questionB2: 'old booking answer B2',
        questionB3: 'old booking answer B3',
      },
      products: [], // Assuming products array might be part of AnswersByScope but not used here
    };

    let mockOnChange: jest.Mock<void, [AnswersByScope]>;

    let changeBookingSUT: (newValue: unknown, questionId: string) => void;

    beforeEach(() => {
      mockOnChange = jest.fn();

      changeBookingSUT = createChangeBookingHandler(initialAnswers, mockOnChange);
    });

    ['questionB1', 'questionB2', 'questionB3'].forEach((questionId) => {
      it(`updates ${questionId} in booking answers`, () => {

        const newValue = `new answer for ${questionId}`;
        changeBookingSUT(newValue, questionId);

        const expectedAnswers = {
          ...initialAnswers,
          booking: {
            ...initialAnswers.booking,
            [questionId]: newValue,
          }
        };

        expect(mockOnChange).toHaveBeenCalledWith(expectedAnswers);
      });
    });
  });
})

function mapN<T>(n: number, fn: (i: number) => T): T[] {
  return Array(n).fill(0).map((_, i) => fn(i));
}