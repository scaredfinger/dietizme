import { Breadcrumb } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import { ReactNode } from 'react'

interface Route {
  path: string
  breadcrumbName: string
}

interface Button {
  text: string
  onClick: () => void
}

interface Props {
  title?: string
  subTitle?: ReactNode
  routes?: Route[]
  buttons?: Iterable<ReactNode>
  ghost?: boolean
  bgColor?: string
  className?: string
}

function PageHeaders({
  title,
  subTitle,
  routes,
  buttons,
  ghost,
  bgColor,
  className = 'flex items-center justify-between px-8 xl:px-[15px] pt-[18px] pb-6 sm:pb-[30px] bg-transparent sm:flex-col',
}: Props) {
  const breadcrumbItems = routes
    ? routes.map((route: any, index: any) => ({
        title:
          index + 1 === routes.length ? (
            route.breadcrumbName
          ) : (
            <div className="inline-flex items-start group text-light dark:text-light-extra">
              {index === 0 && (
                <>
                  <ReactSVG
                    className="relative top-0.5 me-2 [&>div>svg]:text-current group-hover:text-primary dark:group-hover:text-white/[.87] duration-200"
                    src="/img/icon/home.svg"
                  />{' '}
                </>
              )}
              <Link
                href={route.path}
                className="text-light dark:text-light-extra group-hover:text-primary dark:group-hover:text-white/[.87] text-[14px] leading-[22px]  duration-200"
              >
                {route.breadcrumbName}
              </Link>
            </div>
          ),
      }))
    : []

  const breadcrumb = (
    <Breadcrumb
      className="flex order-2 relative top-1.5 mb-2 [&>ol>li>.ant-breadcrumb-link]:flex md:justify-center md:[&>ol]:justify-center md:[&>ol]:gap-[10px]"
      separator={
        <span className="inline-flex bg-light-extra relative -top-0.5 w-1 h-1 rounded-full" />
      }
      items={breadcrumbItems}
    />
  )

  return (
    <>
      <PageHeader
        className={`${className}`}
        title={title}
        subTitle={subTitle}
        breadcrumb={breadcrumb}
        extra={buttons}
        ghost={ghost}
      />
    </>
  )
}

export { PageHeaders }
