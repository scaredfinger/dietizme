import { Multilanguage_Field_Input } from '@otiuming/domain-omnidata-types'

export interface SinglePageV2HomePayload {
  title: Multilanguage_Field_Input
  subtitle: Multilanguage_Field_Input
  hero_image_id?: string
}

export interface SinglePageV2Payload {
  home: SinglePageV2HomePayload
}

export const defaultSinglePageV2: SinglePageV2Payload = {
  home: {
    title: { en: 'Lorem ipsum' },
    subtitle: { en: 'Dolor sit amet' },
    hero_image_id: undefined,
  },
}
