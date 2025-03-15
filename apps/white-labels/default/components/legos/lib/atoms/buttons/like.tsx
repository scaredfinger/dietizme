import React, { FC, useState } from 'react'
import { Heart } from '../images'

interface Props {
  className?: string
  colorClass?: string
  isLiked?: boolean
}

export const Like: FC<Props> = ({
  className = '',
  colorClass = 'text-white bg-black bg-opacity-30 hover:bg-opacity-50',
  isLiked = false,
}) => {
  const [likedState, setLikedState] = useState(isLiked)

  return (
    <div
      className={`nc-BtnLikeIcon w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
        likedState ? 'nc-BtnLikeIcon--liked' : ''
      }  ${colorClass} ${className}`}
      data-nc-id="BtnLikeIcon"
      title="Save"
      onClick={() => setLikedState(!likedState)}
    >
      <Heart likedState={likedState} />
    </div>
  )
}
