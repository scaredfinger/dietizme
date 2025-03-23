import React, { useEffect, useState } from "react"

const getWindowSafely = () => {
  return typeof window !== "undefined" ? window : null
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  
  useEffect(() => {
    const safeWindow = getWindowSafely()
    const handleResize = () => {
    setWindowSize({
        width: safeWindow.innerWidth,
        height: safeWindow.innerHeight,
    })
    }

    safeWindow.addEventListener('resize', handleResize)

    handleResize()

    return () => safeWindow.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
  }, [])
  
  return windowSize
}