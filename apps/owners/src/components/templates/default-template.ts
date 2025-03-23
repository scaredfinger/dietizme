import React from 'react'
import { useTranslation } from 'react-i18next'

import { Multilanguage_Field_Input } from '@otiuming/domain-omnidata-types'

import { JSONSchema, MultilanguageTextEditor, buildUploadEditor } from '../forms'

import { Template } from './domain'

interface DefaultTemplate extends Template {
  pages: {
      home: JSONSchema
  }
}

export const useDefaultTemplate = (): DefaultTemplate => {
  const { t } = useTranslation()

  return {
    pages: {
      home: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            title: t('fields.title.title'),
            description: t('fields.title.description'),
            editor: MultilanguageTextEditor,
          },
          subtitle: {
            type: 'string',
            title: t('fields.subtitle.title'),
            description: t('fields.subtitle.description'),
            editor: MultilanguageTextEditor,
          },
          hero_image_id: {
            type: 'string',
            title: t('fields.hero_image.title'),
            description: t('fields.hero_image.description'),
            editor: buildUploadEditor(`hero-image-`),
          },
        },
      }
    }
  }
}

export interface DefaultTemplatePayload {
  home: HomeSection
}

export interface HomeSection {
  title: Multilanguage_Field_Input
  subtitle: Multilanguage_Field_Input
  hero_image_id?: string
}