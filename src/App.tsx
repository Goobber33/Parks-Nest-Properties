import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Referrals from './pages/Referrals'
import ContactPage from './pages/ContactPage'
import './App.css'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    // Animation observer - triggers animations when elements scroll into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'animated' class to trigger animation
            entry.target.classList.add('animated')
            // Once animated, we can stop observing
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // Function to observe elements
    const observeElements = () => {
      const animatedElements = document.querySelectorAll(
        '.fadeInLeft, .fadeInRight, .fadeInUp'
      )
      
      animatedElements.forEach((element) => {
        // Only observe if not already animated
        if (!element.classList.contains('animated')) {
          observer.observe(element)
        }
      })
    }

    // Small delay to ensure DOM is ready after route change
    const timeoutId = setTimeout(() => {
      observeElements()
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [location.pathname]) // Re-run when route changes

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  )
}

export default App
