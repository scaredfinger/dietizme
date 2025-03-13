import {
  Preload_Save_RateQuery,
  Rate_Headline_Constraint,
  Rate_Headline_Update_Column,
  Rate_Name_Constraint,
  Rate_Name_Update_Column,
  Rate_Price_Range_Constraint,
  Rate_Price_Range_Insert_Input,
  Rate_Price_Range_Update_Column,
  Rate_Save_Input,
  Rate_Type_Enum,
  Rate_UpsertMutationVariables,
} from '@otiuming/domain-omnidata-types'


import { OperationRequest } from '@otiuming/biz-builder'
import { createModifiedRate, DailyPrice, HourlyPrice } from '@otiuming/domain-rates'

import { logger } from '@/logger'
import { sanitizeInput } from '../../../../../common'

export function buildSaveRateInput(
  request: OperationRequest<Rate_Save_Input>,
  context: Preload_Save_RateQuery
): Rate_UpsertMutationVariables {
  const {
    id: rate_id,
    product_id,
    name: body_name,
    headline: body_headline,
    configuration
  } = request.body

  const name = {
    ...sanitizeInput(body_name || {}),
  }

  const headline = {
    ...sanitizeInput(body_headline || {}),
  }

  const business_model = context.product[0].business_model ?? context.organization[0].business_model

  logger.warn({
    eventId: 'RATE_WARN',
    business_model,
    configuration
  })

  const modifiedRate = createModifiedRate(
    business_model,
    configuration)

  const { price_calendar } = modifiedRate.match({
    Ok: (rate) => {
      const price_calendar: Rate_Price_Range_Insert_Input[] = rate.calendar.map((range) => ({
        from: range.from,
        to: range.to,
        ...(
          business_model.time_management === Rate_Type_Enum.Daily
            ? { daily: (range as DailyPrice).daily }
            : { hourly: (range as HourlyPrice).hourly }
        )
      }))

      return {
        price_calendar,
      }
    },
    Error: () => {
      return {
        price_calendar: []
      }
    }
  })

  const sanitizedConfiguration = modifiedRate.match({
    Ok: (rate) => rate.configuration,
    Error: () => ({})
  })

  const availability_rules = modifiedRate.match({
    Ok: (rate) => rate.availabilityRules,
    Error: () => []
  })

  const price_rules = modifiedRate.match({
    Ok: (rate) => rate.priceRules,
    Error: () => []
  })

  // TODO: Bring back alive only for advanced rates
  // TODO: If rate is by hour, project hourly instead of daily
  // const price_calendar = body_price_calendar.map((range) => ({
  //   ...range,
  //   value: undefined,
  //   daily: range.value,
  // }))

  // TODO: Be smart and delete only missing or modified ones
  const rate_price_ranges_to_delete = context.rate_by_pk.price_calendar.map(r => r.id)

  return {
    rate_price_ranges_to_delete,
    rate: {
      id: rate_id,
      product_id,
      configuration: sanitizedConfiguration,
      availability_rules,
      price_rules,
      name: {
        data: name,
        on_conflict: {
          constraint: Rate_Name_Constraint.RateNamePkey,
          update_columns: [
            Rate_Name_Update_Column.En,
            Rate_Name_Update_Column.Es,
            Rate_Name_Update_Column.De,
            Rate_Name_Update_Column.Fr,
          ],
        },
      },
      headline: {
        data: headline,
        on_conflict: {
          constraint: Rate_Headline_Constraint.RateHeadlinePkey,
          update_columns: [
            Rate_Headline_Update_Column.En,
            Rate_Headline_Update_Column.Es,
            Rate_Headline_Update_Column.De,
            Rate_Headline_Update_Column.Fr,
          ],
        },
      },
      price_calendar: {
        data: price_calendar,
        on_conflict: {
          constraint: Rate_Price_Range_Constraint.RatePriceRangePkey,
          update_columns: [
            Rate_Price_Range_Update_Column.To,
            Rate_Price_Range_Update_Column.From,
            Rate_Price_Range_Update_Column.Daily,
            Rate_Price_Range_Update_Column.Hourly,
          ],
        },
      },
    },
  }
}

