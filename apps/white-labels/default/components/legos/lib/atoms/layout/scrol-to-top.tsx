import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop: React.FC = () => {
  const locationPathName = useLocation().pathname
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [locationPathName])

  return null
}
