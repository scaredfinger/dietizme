import React, { useState } from 'react'

import { Boxes, NcImage } from '../../atoms'

import { ModalPhotos } from './modal-photos'

export enum GalleryType {
  wide = 'WIDE',
  tall = 'TALL',
}

interface Props {
  urls: string[]
  type?: GalleryType
}

export const Gallery: React.FC<Props> = ({ urls, type }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openFocusIndex, setOpenFocusIndex] = useState(0)

  const handleOpenModal = (index: number) => {
    setIsOpen(true)
    setOpenFocusIndex(index)
  }

  const handleCloseModal = () => setIsOpen(false)

  const renderTallTiles = (urls: string[]) => {
    return (
      <header className="container px-0 rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-3 row-span-3 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={() => handleOpenModal(0)}
          >
            <NcImage
              containerClassName="absolute inset-0"
              className="object-cover w-full h-full rounded-md sm:rounded-xl"
              src={urls[0]}
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {urls
            .filter((_, i) => i >= 1 && i < 4)
            .map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 3 ? 'block' : ''
                }`}
              >
                <NcImage
                  containerClassName="aspect-w-4 aspect-h-3"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl "
                  src={item || ''}
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => handleOpenModal(index + 1)}
                />
              </div>
            ))}

          <div
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
            onClick={() => handleOpenModal(0)}
          >
            <Boxes />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              Show all photos
            </span>
          </div>
        </div>
      </header>
    )
  }

  const renderWideTiles = (urls: string[]) => {
    return (
      <header className="container 2xl:px-14 rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={() => handleOpenModal(0)}
          >
            <NcImage
              containerClassName="absolute inset-0"
              className="object-cover w-full h-full rounded-md sm:rounded-xl"
              src={urls[0]}
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {urls
            .filter((_, i) => i >= 1 && i < 5)
            .map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 3 ? 'hidden sm:block' : ''
                }`}
              >
                <NcImage
                  containerClassName="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl "
                  src={item || ''}
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => handleOpenModal(index + 1)}
                />
              </div>
            ))}

          <div
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
            onClick={() => handleOpenModal(0)}
          >
            <Boxes />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              Show all photos
            </span>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      {type === GalleryType.wide && renderWideTiles(urls)}
      {type !== GalleryType.wide && renderTallTiles(urls)}
      {/* Modal */}
      <ModalPhotos
        imgs={urls}
        isOpen={isOpen}
        onClose={handleCloseModal}
        initFocus={openFocusIndex}
        uniqueClassName="nc-ListingExperiencesDetailPage__modalPhotos"
      />
    </>
  )
}
