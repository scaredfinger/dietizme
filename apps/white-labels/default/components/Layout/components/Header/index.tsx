import React, { useEffect } from 'react'
import Link from 'next/link'

import { useTranslation } from '@otiuming/ui-i18n'

import { Logo } from '@/components/legos/Logo'

import { SwitchDarkMode } from './components/SwitchDarkMode'
import { LanguageSelector } from './components/LanguageSelector'

import { useRoutes } from '@/components/use-routes'

import styles from './styles.module.scss'

let observer: IntersectionObserver | null = null

interface Props {
  logo?: string
  logoLight?: string
}

export const Header: React.FC<Props> = ({ logo, logoLight }) => {
  const {t} = useTranslation()
  const { productList, about, contact } = useRoutes()
  
  const anchorRef = React.useRef<HTMLDivElement>(null)

  const [isTopOfPage, setIsTopOfPage] = React.useState(true)

  const isTopPageIntersectionCallback = (
    entries: IntersectionObserverEntry[],
  ) => {
    entries.forEach((entry) => {
      setIsTopOfPage(entry.isIntersecting)
    })
  }

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(isTopPageIntersectionCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      })
      anchorRef.current && observer.observe(anchorRef.current)
    }
  }, [])

  const headerClassName = isTopOfPage
    ? 'shadow-sm dark:border-b dark:border-neutral-700 mb-8'
    : 'shadow-sm dark:border-b dark:border-neutral-700 mb-8'

  // change just the locale and maintain all other route information including href's query

  return (
    <>
      <div
        className={`${headerClassName} nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg`}
      >
        <div className={`nc-MainNav1 nc-MainNav2 relative z-10`}>
          <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center">
            <div className="hidden md:flex justify-start flex-1 items-center space-x-3 sm:space-x-8 lg:space-x-10">
              <Logo image={logo} imageLight={logoLight} />
              <div className="hidden lg:block h-10 border-l border-neutral-300 dark:border-neutral-500"></div>

              <ul className="nc-Navigation hidden lg:flex lg:flex- lg:flex-wrap lg:items-center lg:space-x-10 relative">
                <li>
                  <Link
                    className={styles.navlink}
                    href={productList()}
                  >{t(`pages.products.title`)}</Link>
                </li>
                <li>
                  <Link className={styles.navlink} href={about()}>
                    {t(`pages.about.title`)}
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.navlink}
                    href={contact()}
                  >{t(`pages.contact.title`)}</Link>
                </li>
              </ul>
            </div>

            <div className="lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
              {/* <HeroSearchForm2MobileFactory /> */}
            </div>

            <div className="hidden md:flex flex-shrink-0 items-center justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
              <div className="hidden items-center lg:flex space-x-1">
                <LanguageSelector />
                <div></div>
                <SwitchDarkMode />
              </div>
            </div>

            <div className="flex lg:hidden">
              <LanguageSelector />
              <SwitchDarkMode className="p-0 h-9" />
            </div>
          </div>
        </div>
      </div>
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  )
}
