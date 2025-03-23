import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthenticationStatus } from '@nhost/nextjs'

import backgroundImage from '../../public/img/admin-bg-light.png'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading: isLoadingAuthentication } = useAuthenticationStatus()

  const {pathname, push} = useRouter()

  useEffect(() => {
    if (isLoadingAuthentication) {
      return
    }

    if (
      isAuthenticated &&
      (pathname == '/' ||
        pathname.startsWith('/login') ||
        pathname.startsWith('/register') ||
        pathname.startsWith('/forgot-password'))
    ) {
      push('/admin')
    }
  }, [pathname, push, isAuthenticated, isLoadingAuthentication])

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
      className="bg-top bg-no-repeat"
    >
      <div className="py-[60px] 2xl:py-[60px] px-[15px]">
        <div className="flex justify-center">
          <Image
            className="dark:hidden"
            src="/img/logo_dark.png"
            alt="Logo Dark"
            width="140"
            height="32"
          />
          <Image
            className="hidden dark:block"
            src="/img/logo_white.png"
            alt="Logo"
            width="140"
            height="32"
          />
        </div>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
