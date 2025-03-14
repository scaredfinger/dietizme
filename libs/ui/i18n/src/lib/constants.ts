import { FlattenedObject } from './domain'

export interface Messages {
  en: FlattenedObject
  es: FlattenedObject
  fr: FlattenedObject
  de: FlattenedObject
}

export type Locale = keyof Messages
export const SUPPORTED_LOCALES = ['en', 'es', 'de', 'fr']

export interface LocaleDescriptor {
  title: string
  flag: string
}

export const SUPPORTED_LOCALES_DESCRIPTORS: Record<Locale, LocaleDescriptor> = {
  en: {
    flag: '🇬🇧',
    title: 'English',
  },
  es: {
    flag: '🇪🇸',
    title: 'Español',
  },
  fr: {
    flag: '🇫🇷',
    title: 'Français',
  },
  de: {
    flag: '🇩🇪',
    title: 'Deutsch',
  },
}
