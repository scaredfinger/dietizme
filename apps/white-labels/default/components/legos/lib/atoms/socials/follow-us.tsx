import React, { FC } from 'react'
import { SocialsList1 } from './list'
import { SocialType, SocialLinks } from './types'

interface OwnProps {
  className?: string
}

type Props = OwnProps & SocialLinks

export const FollowUs: FC<Props> = ({
  className,
  facebook,
  twitter,
  instagram,
  youtube,
}) => {
  const socials = [
    { name: 'Facebook', icon: 'lab la-facebook-square', href: facebook },
    { name: 'Twitter', icon: 'lab la-twitter', href: twitter },
    { name: 'Youtube', icon: 'lab la-youtube', href: youtube },
    { name: 'Instagram', icon: 'lab la-instagram', href: instagram },
  ]
    .filter((item) => item.href)
    .map((item) => item as SocialType)

  return <SocialsList1 socials={socials} className={className} />
}
