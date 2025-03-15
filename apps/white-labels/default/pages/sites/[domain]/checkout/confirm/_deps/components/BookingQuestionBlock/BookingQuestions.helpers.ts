import _ from 'lodash';

import { Answers, AnswersByScope } from '@otiuming/domain-booking-questions';

export const createChangeProductHandler = (
  answers: AnswersByScope,
  onChange: (answers: AnswersByScope) => void,
  scope: keyof AnswersByScope['products'][0]
) => (
  newValue: unknown,
  productIndex: number,
  questionId: string,
  paxIndex = 0,
) => {
    const modified = {
      ...answers,
      products: answers.products.map((product, index) => {
        if (index === productIndex) {
          return {
            ...product,
            [scope]: _.isArray(product[scope])
              ? (product[scope] as Answers[]).map((a, i) => ({
                ...a,
                [questionId]: i === paxIndex ? newValue : a[questionId],
              }))
              : {
                ...product[scope],
                [questionId]: newValue,
              },
          };
        }
        return product;
      }),
    };

    onChange(modified);
  };

export const createChangeBookingHandler = (
  answers: AnswersByScope,
  onChange: (answers: AnswersByScope) => void
) =>
  (
    newValue: unknown,
    questionId: string,
  ) => {
    const modified: AnswersByScope = {
      ...answers,
      booking: {
        ...answers.booking,
        [questionId]: newValue,
      }
    }

    onChange(modified)
  }