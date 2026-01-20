import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // Temporarily disable smooth scroll
    document.documentElement.classList.add('no-smooth-scroll')
    
    // useLayoutEffect runs synchronously before browser paint
    // This ensures the page appears at the top instantly with no scroll animation
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Re-enable smooth scroll after a brief moment
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove('no-smooth-scroll')
      })
    })
  }, [pathname])

  return null
}

export default ScrollToTop
