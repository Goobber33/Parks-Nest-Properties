import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLinkClick = () => {
    closeMenu()
    // Use instant scroll to prevent visible scrolling animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo" onClick={handleLinkClick}>
            <img src="https://windriverpartners.net/wp-content/uploads/2024/08/Logo-Realuxe.png" alt="Wind River Partners" className="logo-img" />
            <span className="logo-text">WIND RIVER PARTNERS</span>
          </Link>
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={handleLinkClick}>HOME</Link></li>
            <li><Link to="/about-us" className={isActive('/about-us') ? 'active' : ''} onClick={handleLinkClick}>ABOUT US</Link></li>
            <li><Link to="/referrals" className={isActive('/referrals') ? 'active' : ''} onClick={handleLinkClick}>REFERRALS</Link></li>
            <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={handleLinkClick}>CONTACT</Link></li>
          </ul>
          <Link to="/contact" className="btn-sell-home" onClick={handleLinkClick}>SELL YOUR HOME</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
