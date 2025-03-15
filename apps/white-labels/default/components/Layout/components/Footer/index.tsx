import React, { useMemo } from 'react'

import { Logo } from '@/components/legos/Logo'
import { FollowUs, SocialLinks } from '@/components/legos/lib/atoms/socials'
import { CustomLink } from '@/components/legos/lib/data-types'

import { useRoutes } from '@/components/use-routes'
import { useTranslation } from '@otiuming/ui-i18n'

export interface WidgetFooterMenu {
  id: string
  title: string
  menus: CustomLink[]
}

interface Props {
  logo?: string
  logoLight?: string
  socials: SocialLinks
}

export const Footer: React.FC<Props> = ({ logo, logoLight, socials }) => {
  const { t } = useTranslation()
  const routes = useRoutes()

  const widgetMenus: WidgetFooterMenu[] = useMemo(() => [
    {
      id: '5',
      title: t('sections.footer.columns.our-company.title'),
      menus: [
        { href: routes.about(), label: t('pages.about.title') },
        { href: routes.contact(), label: t('pages.contact.title') },
      ],
    },
    {
      id: '1',
      title: 'Explore',
      menus: [
        { href: routes.home(), label: t('pages.home.title') },
        { href: routes.productList(), label: t('pages.products.title') },
        { href: routes.facilities(), label: t('pages.we-offer.title') },
      ],
    },
  ], [routes, t])

  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo image={logo} imageLight={logoLight} />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <FollowUs
              {...socials}
              className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start"
            />
            {/* <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" /> */}
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  )
}
