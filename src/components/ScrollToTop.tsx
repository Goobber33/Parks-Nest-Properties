import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Use instant scroll (no smooth behavior) to prevent visible scrolling
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
    // Also set scroll position directly as a fallback
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

export default ScrollToTop
