import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { useAuthenticationStatus, useUserId } from '@nhost/nextjs'
import posthog from 'posthog-js'

import {
  OtiumingApplication,
  ImageOptimizerContext,
  PublicUrlPrefixContext,
} from '@otiuming/ui-common'

import Footer from '@/layout/footer'
import Sidebar from '@/layout/sidebar'
import HeaderTop from '@/layout/header'

const { Content } = Layout

import config from '@/config/config'

import { useGet_Current_User_OrganizationQuery } from '@/data-access/generated'

const { theme } = config

if (typeof window !== 'undefined') {
  posthog.init(config.statistics.key, config.statistics.init)
  posthog.register(config.statistics.register)
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading: isLoadingAuthenticationStatus } =
    useAuthenticationStatus()
  const currentUser = useUserId()

  const { data, loading } = useGet_Current_User_OrganizationQuery({
    variables: {
      user_id: currentUser,
    },
  })

  const { topMenu, collapsed, rtl, mainContent } = useSelector((state: any) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
      collapsed: state.ChangeLayoutMode.menuCollapse,
      rtl: state.ChangeLayoutMode.rtlData,
      mainContent: state.ChangeLayoutMode.mode,
    }
  })

  if (mainContent === 'darkMode') {
    document.body.classList.add('dark')
    document.body.classList.add('dark')
  }

  if (rtl) {
    const html: any = document.querySelector('html')
    html.setAttribute('dir', 'rtl')
  }

  const { pathname, push } = useRouter()

  useEffect(() => {
    if (isLoadingAuthenticationStatus) {
      return
    }

    if (
      !isAuthenticated &&
      !pathname.startsWith('/login') &&
      !pathname.startsWith('/register') &&
      !pathname.startsWith('/forgot-password')
    ) {
      push('/')
    }
  }, [isAuthenticated, isLoadingAuthenticationStatus, pathname, push])

  return (
    <OtiumingApplication logLevel="debug" organization={data?.organization[0]}>
      <PublicUrlPrefixContext.Provider value={config.publicUrlPrefix}>
        <ImageOptimizerContext.Provider value={config.imageOptimizerUrl}>
          <ThemeProvider theme={theme}>
            <HeaderTop />

            <div className="flex flex-row gap-5 mt-[72px]">
              <Sidebar />

              <Layout
                className={`max-w-full duration-[300ms] ${
                  !topMenu
                    ? `xl:ps-0 ease-[ease] ${
                        collapsed ? 'ps-[80px]' : 'ps-[280px] delay-[150ms]'
                      }`
                    : ''
                }`}
              >
                <Content>
                  {children}

                  <Footer />
                </Content>
              </Layout>
            </div>
          </ThemeProvider>
        </ImageOptimizerContext.Provider>
      </PublicUrlPrefixContext.Provider>
    </OtiumingApplication>
  )
}

export default AdminLayout
