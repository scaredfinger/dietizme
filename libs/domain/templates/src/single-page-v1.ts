import { Multilanguage_Field_Input } from '@otiuming/domain-omnidata-types'

export interface SinglePageV1Payload {
  title: Multilanguage_Field_Input
  subtitle: Multilanguage_Field_Input
  hero_image_id?: string
  free_text?: Multilanguage_Field_Input
}

export function asSinglePageV1Payload(input: unknown) {
  return input as SinglePageV1Payload
}

export const defaultSinglePageV1: SinglePageV1Payload = {
  title: { en: 'Lorem ipsum' },
  subtitle: { en: 'Dolor sit amet' },
  hero_image_id: undefined,
  free_text: undefined,
}
