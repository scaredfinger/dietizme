import {
  UilAngleDown,
  UilBell,
  UilDollarSign,
  UilSetting,
  UilSignout,
  UilUser,
  UilUsersAlt,
} from '@iconscout/react-unicons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/authentication/AuthContext'

import PopOver from '@/components/popup'
import Heading from '@/components/heading'
import DropDown from '@/components/dropdown'

const AuthInfo = React.memo((props: any) => {
  const { pathname, asPath, query, push, locale } = useRouter()

  const onLocaleChange = useMemo(
    () => (nextLocale: string) => {
      push({ pathname, query }, asPath, { locale: nextLocale })
    },
    [asPath, pathname, push, query],
  )
  const { i18n } = useTranslation()

  const { currentUser, logout } = useAuth()

  const { t } = useTranslation()

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     console.log('AUTH_NAV', {
  //       isAuthenticated,
  //       currentUser,
  //       logout,
  //       dispatch,
  //       router,
  //     })
  //     // @ts-ignore
  //     dispatch(logOutAction(() => router.push('/')))
  //   }
  // }, [dispatch, isAuthenticated, router])

  const handleLogout = async (e: any) => {
    logout()
  }

  const userContent = (
    <div>
      <div className="min-w-[280px] sm:min-w-full">
        <figure className="flex items-center text-sm rounded-[8px] bg-section dark:bg-white/10 py-[20px] px-[25px] mb-[12px]">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="rounded-full ltr:mr-4 rtl:ml-4"
            src={currentUser?.avatarUrl ?? '/img/avatar/chat-auth.png'}
            alt=""
            width="50"
            height="50"
          />
          <figcaption>
            <Heading
              className="text-dark dark:text-white/[.87] mb-0.5 text-sm"
              as="h5"
            >
              {currentUser?.displayName}
            </Heading>
            <p className="mb-0 text-xs text-body dark:text-white/60">
              {currentUser?.defaultRole}
            </p>
          </figcaption>
        </figure>
        <ul className="mb-[10px]">
          <li>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilUser className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Profile
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilSetting className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Settings
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilDollarSign className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Billing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilUsersAlt className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Activity
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilBell className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Help
            </Link>
          </li>
        </ul>
        <Link
          onClick={handleLogout}
          href={'#'}
          className="flex items-center justify-center text-sm font-medium bg-[#f4f5f7] dark:bg-[#32333f] h-[50px] text-light hover:text-primary dark:hover:text-white/60 dark:text-white/[.87] mx-[-12px] mb-[-15px] rounded-b-6"
        >
          <UilSignout className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Sign Out
        </Link>
      </div>
    </div>
  )

  const onFlagChangeHandle = (value: any, e: any) => {
    e.preventDefault()

    onLocaleChange(value)
  }

  const country = ['en', 'es', 'de', 'fr'].map(lang => ({
      key: lang,
      label: (
        <Link
          href="#"
          onClick={(e) => onFlagChangeHandle(lang, e)}
          className="flex items-center bg-white dark:bg-white/10 hover:bg-primary/[.05] rounded-4 px-3 py-1.5 text-sm text-dark dark:text-white/60"
        >
          <Image
            className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2"
            src={`/img/flag/${lang}.png`}
            alt=""
            width="20"
            height="20"
          />
          <span>{t(`languages.${lang}`)}</span>
        </Link>
      ),
  }))

  return (
    <div className="flex items-center justify-end flex-auto gap-6 lg:gap-4">
      <div className="flex">
        <DropDown placement="bottomRight" customContent={country}>
          <Link href="#" className="flex">
            <Image src={`/img/flag/${i18n.language}.png`} alt="" width="20" height="20" />
          </Link>
        </DropDown>
      </div>
      <div className="flex">
        <PopOver placement="bottomRight" content={userContent} action="click">
          <Link
            href="#"
            className="flex items-center overflow-x-auto text-light whitespace-nowrap"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentUser?.avatarUrl ?? '/img/avatar/matureman1.png'}
              alt="Avatar"
              width="32"
              height="32"
              className="rounded-full border-1"
            />
            <span className="ms-2.5 lg:ms-1.5 me-1.5 text-body dark:text-white/60 text-sm font-medium md:hidden">
              {currentUser ? currentUser.displayName : 'Abdullah Bin Talha'}
            </span>
            <UilAngleDown className="w-4 h-4 min-w-[16px]" />
          </Link>
        </PopOver>
      </div>
    </div>
  )
})

export default AuthInfo
