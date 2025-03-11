export interface HomePayload {
  title: string
  headline: string
}

export interface HeaderPayload {
  icon: string
  links: string[]
}

export interface FooterPayload {
  contactEmail: string
  contactPhone: string
}

export interface ProductPayload {
  featured: string
}

export interface GalleryPayload {
  links: string[]
}

export interface MultiPageExampleV1Payload {
  header: HeaderPayload
  home: HomePayload
  product: ProductPayload
  gallery: GalleryPayload
  footer: FooterPayload
}

export const multiPageExampleV1DefaultValue: MultiPageExampleV1Payload = {
  header: {
    icon: 'https://lorem-ipsum.otiuming.com/icon.png',
    links: [
      'https://lorem-ipsum.otiuming.com/home',
      'https://lorem-ipsum.otiuming.com/product',
    ],
  },
  home: {
    title: 'Lorem ipsum',
    headline: 'Dolor sit amet',
  },
  product: {
    featured: 'lorem-ipsum-happy-hour-meal',
  },
  gallery: {
    links: [
      'https://images.otiuming.com/img-1.png',
      'https://images.otiuming.com/img-2.png',
      'https://images.otiuming.com/img-3.png',
    ],
  },
  footer: {
    contactEmail: 'devil-administrator-from@otiuming.com',
    contactPhone: '666-666',
  },
}
