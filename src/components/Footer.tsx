import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-tagline">
          Your trusted partner in real estate, offering fair cash offers and stress-free solutions for homeowners nationwide.
        </p>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/referrals">Referrals</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:dani@windriverpartners.net">dani@windriverpartners.net</a></li>
              <li><a href="tel:+14044028193">(404) 402-8193</a></li>
              <li>129 Temple Peak Lane, Boulder, WY 82923</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; Copyright 2024. Parks Nest Properties All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
