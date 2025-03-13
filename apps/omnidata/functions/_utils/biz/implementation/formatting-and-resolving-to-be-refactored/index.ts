import { config } from "../../../config"

function formatCurrency(value: number, currency = 'EUR', locale = 'en') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value)
}

export const IntlFormatter = {
  currency: formatCurrency
}

class MediaItemResolverImpl {
  private publicUrlPrefix: string
  private imageOptimizerUrl: string

  constructor(
    region?: string,
    subdomain?: string,
  ) {
    this.publicUrlPrefix = region
      ? `https://${subdomain}.storage.${region}.nhost.run/v1/files`
      : 'https://local.storage.nhost.run/v1/files'

    this.imageOptimizerUrl = region
      ? `https://otiuming-images.netlify.app`
      : 'http://localhost:4700'
  }

  resolveFileId({
    fileId,
    width,
    quality,
  }: {
    fileId: string
    width?: number
    quality?: number
  }) {
    const fileUrl = `${this.publicUrlPrefix}/${fileId}`

    return this.resolveUrl({ url: fileUrl, width, quality })
  }

  resolveUrl({
    url,
    width = 160,
    quality = 75,
  }: {
    url: string
    width?: number
    quality?: number
  }) {
    const urlWithOutManipulation = [
      this.imageOptimizerUrl,
      `_next/image?url=${encodeURIComponent(
        url,
      )}`,
    ].join(this.imageOptimizerUrl.endsWith('/') ? '' : '/')

    if (width && quality) {
      return `${urlWithOutManipulation}&w=${width}&q=${quality}`
    }

    return urlWithOutManipulation
  }

  revolveBookingUrl({
    organizationDomain,
    friendlyBookingId,
    customerEmail,
  }: {
    organizationDomain: string
    friendlyBookingId: string
    customerEmail: string
  }) {
    return `https://${organizationDomain}/checkout/thank-you?friendly_id=${friendlyBookingId}&contact_email=${customerEmail}`
  }
}

export const MediaItemResolver = new MediaItemResolverImpl(config.nohstRegion, config.nhostDomain)

export const Otiuming = {
  name: "Otiuming",
  website: "www.otiuming.com",
  logo: MediaItemResolver.resolveUrl({
    url: "https://my.otiuming.com/img/logo_dark.png"
  }),
  email: "support@otiuming.com",
  instagram: "https://www.instagram.com/otiuming/",
  facebook: "https://www.facebook.com/otiuming",
  twitter: "https://twitter.com/otiuming",
  signature: "Thank you for using Otiuming",
  poweredBy: "Powered by Otiuming, © 2024"
}