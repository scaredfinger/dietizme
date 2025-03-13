import en from './en'
import es from './es'

import { RendererImpl } from '../../types'

import { template as bodyTemplate } from './body'
import bodyHbrJson from './body.hbr.json'

import { template as subjectTemplate } from './subject'

const translations = { en, es }

export const Renderer = new RendererImpl<Omit<typeof bodyHbrJson, 'i18n'>, typeof en>(
  translations, 
  bodyTemplate, 
  subjectTemplate
)
