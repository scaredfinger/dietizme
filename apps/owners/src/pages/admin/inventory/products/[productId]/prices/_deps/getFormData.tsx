import { Rate_Type_Enum } from '@/data-access'

import { Rate, Organization, FormRate } from './types'

export function getFormData(rate: Rate, organization: Organization) {
  if (!rate || !organization) {
    return {
      
    } as unknown as FormRate
  }

  if (organization.business_model.rate_type === Rate_Type_Enum.TimeSlots) {
    return {
      ...rate,
      configuration: rate.configuration,
      price_calendar: [],
    }
  }

  return {
    ...rate,
    price_calendar: rate.price_calendar.map((p) => ({
      from: p.from,
      to: p.to,
      value: p.daily,
    })),
  }
}
