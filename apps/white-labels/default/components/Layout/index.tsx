import React, { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet'

import { Organization_By_Domain_Minimal } from '@/data-access/queries/get-organization'

import { useImageMediumUrlFunction } from '@/utils'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

interface Props {
  organization: Organization_By_Domain_Minimal
  pageDescription?: string
  pageTitle: string
}

export const Layout: React.FC<Props & PropsWithChildren> = ({
  children,
  organization,
  pageDescription,
  pageTitle,
}) => {
  const buildPublicUrl = useImageMediumUrlFunction()

  const branding = organization?.branding

  const favicon = buildPublicUrl(branding?.favicon_id || '')
  const logo = branding?.logo_id && buildPublicUrl(branding?.logo_id || '')
  const logoLight =
    branding?.logo_light_id && buildPublicUrl(branding?.logo_light_id || '')

  const siteTitle = branding?.meta_title?.value || organization?.name || ''
  const title = `${siteTitle} - ${pageTitle}`

  const description = pageDescription || branding?.meta_description?.value

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        <meta name="description" content={description} />
      </Helmet>
      <Header logo={logo} logoLight={logoLight} />
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        {children}
      </div>
      <Footer
        logo={logo}
        logoLight={logoLight}
        socials={organization.socials}
      />
    </>
  )
}
