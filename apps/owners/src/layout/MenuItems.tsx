import {
  Uil500px,
  UilAirplay,
  UilArrowGrowth,
  UilAt,
  UilBagAlt,
  UilBookAlt,
  UilBookOpen,
  UilChartBar,
  UilChat,
  UilCircle,
  UilClock,
  UilCompactDisc,
  UilCreateDashboard,
  UilDatabase,
  UilDocumentLayoutLeft,
  UilEdit,
  UilEllipsisV,
  UilEye,
  UilEnvelope,
  UilExclamationOctagon,
  UilFile,
  UilHeadphones,
  UilIcons,
  UilImages,
  UilBuilding,
  UilFolder,
  UilLayerGroup,
  UilMap,
  UilMapMarker,
  UilPicture,
  UilBrowser,
  UilPresentation,
  UilSearch,
  UilServer,
  UilSetting,
  UilShoppingCart,
  UilStar,
  UilSwimmer,
  UilTable,
  UilWindowSection,
  UilObjectGroup,
  UilCommentQuestion,
  UilHome,
  UilPlusCircle
} from '@iconscout/react-unicons'
import React, { useEffect } from 'react'
import { Menu } from 'antd'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import versions from '../demoData/changelog.json'

import {
  changeMenuMode,
  changeDirectionMode,
  changeLayoutMode,
} from '../redux/themeLayout/actionCreator'
import _ from 'lodash'
import { clientConfig } from '@/config/env'
import { useRoutes } from '@/components/use-routes'

function MenuItems() {
  const path = '/admin'
  const { t } = useTranslation()

  const { topMenu } = useSelector((state: any) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    }
  })

  const router = useRouter()
  const { pathname } = router
  const pathArray = pathname && pathname !== '/' ? pathname.split(path) : []
  const mainPath = pathArray.length > 1 ? pathArray[1] : ''
  const mainPathSplit = mainPath.split('/')

  const routes = useRoutes()

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu
      ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`]
      : [],
  )
  const [openItems, setOpenItems] = React.useState(
    !topMenu
      ? [
          `${
            mainPathSplit.length === 1
              ? 'demo-1'
              : mainPathSplit.length === 2
                ? mainPathSplit[1]
                : mainPathSplit[2]
          }`,
        ]
      : [],
  )

  useEffect(() => {
    // Check if the current route matches the base path.
    if (pathname === path) {
      setOpenKeys(['dashboard']) // active menu key.
      setOpenItems(['demo-1']) // active menu item.
    }
  }, [pathname])

  const onOpenChange = (keys: any) => {
    setOpenKeys(
      keys[keys.length - 1] !== 'recharts'
        ? [keys.length && keys[keys.length - 1]]
        : keys,
    )
  }

  const onClick = (item: any) => {
    setOpenItems([item.key])
    if (item.keyPath.length === 1) setOpenKeys([])
  }

  const dispatch = useDispatch()

  const changeNavbar = (topMode: any) => {
    const html: any = document.querySelector('html')
    if (topMode) {
      html.classList.add('hexadash-topmenu')
    } else {
      html.classList.remove('hexadash-topmenu')
    }
    //@ts-ignore
    dispatch(changeMenuMode(topMode))
  }

  const changeLayoutDirection = (rtlMode: any) => {
    if (rtlMode) {
      const html: any = document.querySelector('html')
      html.setAttribute('dir', 'rtl')
    } else {
      const html: any = document.querySelector('html')
      html.setAttribute('dir', 'ltr')
    }
    //@ts-ignore
    dispatch(changeDirectionMode(rtlMode))
  }

  const changeLayout = (mode: any) => {
    //@ts-ignore
    dispatch(changeLayoutMode(mode))
  }

  const darkmodeActivated = () => {
    document.body.classList.add('dark')
  }

  const darkmodeDiactivated = () => {
    document.body.classList.remove('dark')
  }

  function getItem(label: any, key: any, icon: any, children: any) {
    return {
      label,
      key,
      icon,
      children,
    }
  }

  const items = [
    getItem(
      t('sections.inventory.title', {
        postProcess: 'capitalize',
      }),
      null,
      !topMenu && <UilFolder />,
      [
        getItem(
          <Link href="/admin/inventory/bookings">
            {t('pages.bookings.title', { postProcess: 'lowercase' })}
          </Link>,
          'bookings',
          !topMenu && <UilBookAlt />,
          null,
        ),
        getItem(
          <Link href="/admin/inventory/products">
            {t('pages.products.title', { postProcess: 'lowercase' })}
          </Link>,
          'products',
          !topMenu && <UilImages />,
          null,
        ),
        getItem(
          <Link href="/admin/inventory/product-groups">
            {t('pages.product-groups.title', { postProcess: 'lowercase' })}
          </Link>,
          'product-groups',
          !topMenu && <UilObjectGroup />,
          null,
        ),
        getItem(
          <Link href={routes.supplementList()}>
            {t('pages.supplements.title', { postProcess: 'lowercase' })}
          </Link>,
          'supplements',
          !topMenu && <UilPlusCircle />,
          null,
        )
      ],
    ),
    getItem(
      t('sections.my-web.title', { postProcess: 'capitalize' }),
      null,
      !topMenu && <UilBrowser />,
      [
        getItem(
          <Link href="/admin/my-web/branding">
            {t('pages.branding.title', { postProcess: 'lowercase' })}
          </Link>,
          'branding',
          <UilEye />,
          null,
        ),
        getItem(
          <Link href="/admin/my-web/home">
            {t('pages.home.title', { postProcess: 'lowercase' })}
          </Link>,
          'home',
          <UilHome />,
          null,
        )
      ],
    ),
    getItem(
      t('sections.organization.title', {
        postProcess: 'capitalize',
      }),
      null,
      !topMenu && <UilBuilding />,
      [
        getItem(
          <Link href="/admin/organization/settings">
            {t('pages.settings.title', { postProcess: 'lowercase' })}
          </Link>,
          'settings',
          !topMenu && <UilSetting />,
          null,
        ),
        getItem(
          <Link href="/admin/organization/venue">
            {t('pages.venue.title', { postProcess: 'lowercase' })}
          </Link>,
          'venue',
          !topMenu && <UilMapMarker />,
          null,
        ),
        getItem(
          <Link href="/admin/organization/facilities">
            {t('pages.facilities.title', { postProcess: 'lowercase' })}
          </Link>,
          'facilities',
          !topMenu && <UilSwimmer />,
          null,
        ),
        getItem(
          <Link href="/admin/organization/highlights">
            {t('pages.highlights.title', { postProcess: 'lowercase' })}
          </Link>,
          'highlights',
          !topMenu && <UilStar />,
          null,
        ),
        getItem(
          <Link href="/admin/organization/gallery">
            {t('pages.gallery.title', { postProcess: 'lowercase' })}
          </Link>,
          'gallery',
          !topMenu && <UilImages />,
          null,
        ),
        getItem(
          <Link href={routes.features()}>
            {t('pages.features.title', { postProcess: 'lowercase' })}
          </Link>,
          'features',
          !topMenu && <UilLayerGroup />,
          null,
        ),
        getItem(
          <Link href="/admin/organization/booking-questions">
            {t('pages.booking-questions.title', { postProcess: 'lowercase' })}
          </Link>,
          'booking-questions',
          !topMenu && <UilCommentQuestion/>,
          null,
        ),
      ],
    ),

  ]

  return (
    <Menu
      onClick={onClick}
      onOpenChange={onOpenChange}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      defaultSelectedKeys={openKeys}
      defaultOpenKeys={openItems}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      selectedKeys={openItems}
      items={items}
    />
  )
}

export default MenuItems
