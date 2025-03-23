import { padStart } from 'lodash'
import {
  DateRangeWithValueEditor,
  JSONSchema,
  MultilanguageTextAreaEditor,
  MultilanguageTextEditor,
  buildEnumFields,
} from '@/components/forms'
import { Rate_Type_Enum, Unit_Management_Enum } from '@/data-access'

import { Rate, RateProduct, Organization } from './types'

export function getSchema(
  rate: Rate,
  product: RateProduct,
  organization: Organization,
  t: (key: string, interpolation?: unknown) => string,
): JSONSchema {
  if (!rate || !organization) {
    return {
      type: 'object',
      properties: {},
    }
  }

  const businessModel = product?.business_model ?? {
    time_management: organization.business_model.rate_type,
    unit_management: organization.business_model.unit_management,
  }

  if (
    businessModel.time_management === Rate_Type_Enum.TimeSlots &&
    businessModel.unit_management === Unit_Management_Enum.PerPax
  ) {
    return {
      type: 'object',
      properties: {
        // TODO: Bring back name and description for rates
        // name: {
        //   type: 'object',
        //   title: t('fields.name.title'),
        //   editor: MultilanguageTextEditor,
        // },
        // headline: {
        //   type: 'object',
        //   title: t('fields.headline.title'),
        //   description: t('fields.headline.description'),
        //   editor: MultilanguageTextAreaEditor,
        // },
        configuration: {
          type: 'object',
          title: t('fields.rate-configuration.types.time-slots-per-pax.title'),
          description: t(
            'fields.rate-configuration.types.time-slots-per-pax.description',
          ),
          properties: {
            durationInHours: {
              type: 'integer',
              title: t('fields.rate-configuration.duration.title'),
              minimum: 1,
              maximum: 8,
            },
            pricePerPerson: {
              type: 'number',
              title: t('fields.rate-configuration.price-per-adult.format', {
                currency: organization.currency,
              }),
              minimum: 1,
            },
            pricePerChild: {
              type: 'number',
              title: t('fields.rate-configuration.price-per-child.format', {
                currency: organization.currency,
              }),
              minimum: 0,
            },
            startingHours: {
              type: 'array',
              title: t('fields.rate-configuration.starting-hours.title'),
              items: buildEnumFields({
                title: t('fields.type.title'),
                enumValues: new Array(17).fill(6).map((_, i) => ({
                  label: `${padStart((i + 6).toString(), 2, '0')}:00`,
                  value: i + 6,
                })),
              }),
            },
          },
        },
      },
    }
  }

  if (
    businessModel.time_management === Rate_Type_Enum.TimeSlots &&
    businessModel.unit_management === Unit_Management_Enum.PerResource
  ) {
    return {
      type: 'object',
      properties: {
        configuration: {
          type: 'object',
          title: t(
            'fields.rate-configuration.types.time-slots-per-resource.title',
          ),
          description: t(
            'fields.rate-configuration.types.time-slots-per-resource.description',
          ),
          properties: {
            durationInHours: {
              type: 'integer',
              title: t('fields.rate-configuration.duration.title'),
              minimum: 1,
              maximum: 8,
            },
            pricePerResource: {
              type: 'number',
              title: t('fields.rate-configuration.price-per-resource.format', {
                currency: organization.currency,
              }),
              minimum: 1,
            },
            startingHours: {
              type: 'array',
              title: t('fields.rate-configuration.starting-hours.title'),
              items: buildEnumFields({
                title: t('fields.type.title'),
                enumValues: new Array(17).fill(6).map((_, i) => ({
                  label: `${padStart((i + 6).toString(), 2, '0')}:00`,
                  value: i + 6,
                })),
              }),
            },
          },
        },
      },
    }
  }

  if (
    businessModel.time_management === Rate_Type_Enum.Daily &&
    businessModel.unit_management === Unit_Management_Enum.PerResource
  ) {
    return {
      type: 'object',
      properties: {
        configuration: {
          type: 'object',
          title: t('fields.rate-configuration.types.daily-per-resource.title'),
          description: t(
            'fields.rate-configuration.types.daily-per-resource.description',
          ),
          properties: {
            pricePerResource: {
              type: 'number',
              title: t('fields.rate-configuration.price-per-resource.format', {
                currency: organization.currency,
              }),
              minimum: 1,
            },
            maxResources: {
              type: 'number',
              title: t('fields.rate-configuration.max-resources.title'),
              minimum: 1,
            },
          },
        },
      },
    }
  }

  if (
    businessModel.time_management === Rate_Type_Enum.Daily &&
    businessModel.unit_management === Unit_Management_Enum.PerPax
  ) {
    return {
      type: 'object',
      properties: {
        configuration: {
          type: 'object',
          title: t('fields.rate-configuration.types.daily-per-pax.title'),
          description: t(
            'fields.rate-configuration.types.daily-per-pax.description',
          ),
          properties: {
            pricePerPax: {
              type: 'number',
              title: t('fields.rate-configuration.price-per-adult.format', {
                currency: organization.currency,
              }),
              minimum: 1,
            },
            pricePerChild: {
              type: 'number',
              title: t('fields.rate-configuration.price-per-child.format', {
                currency: organization.currency,
              }),
              minimum: 0,
            },
          },
        },
      },
    }
  }

  return {
    type: 'object',
    properties: {
      unsuported: {
        type: 'string',
        title: t('warnings.unsupported.title'),
        description: t('warnings.unsupported.description'),
      },
      name: {
        type: 'object',
        title: t('fields.name.title'),
        editor: MultilanguageTextEditor,
      },
      headline: {
        type: 'object',
        title: t('fields.headline.title'),
        description: t('fields.headline.description'),
        editor: MultilanguageTextAreaEditor,
      },
      price_calendar: {
        type: 'array',
        title: t('fields.prices.title'),
        // description: t('fields.prices.description'),
        items: {
          type: 'object',
          editor: DateRangeWithValueEditor,
        },
      },
    },
  }
}
