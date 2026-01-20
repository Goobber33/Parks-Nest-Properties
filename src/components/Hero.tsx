import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-luxury-house-bg">
        <img src="https://windriverpartners.net/wp-content/uploads/2024/08/Modern-luxury-house-and-gardens.png" alt="Modern luxury house and gardens" />
      </div>
      <div className="container">
        <div className="hero-top-text">
          <div className="hero-title-section fadeInLeft">
            <h2 className="hero-title">REAL ESTATE INVESTMENT COMPANY</h2>
            <div className="hero-title-line"></div>
          </div>
          <div className="hero-description-section fadeInRight">
            <h3 className="hero-description">WE BUY PROPERTIES ACROSS THE USA.</h3>
            <p className="hero-text">
              Your trusted partner in real estate, offering fair cash offers and stress-free solutions for homeowners nationwide.
            </p>
          </div>
        </div>
        <div className="hero-bottom-content">
          <div className="hero-left fadeInLeft">
          </div>
          <div className="hero-right fadeInRight">
            <div className="hero-cta-card">
              <div className="hero-cta-image">
                <img src="https://windriverpartners.net/wp-content/uploads/2024/08/modern-house-facade-2021-08-27-19-27-44--1024x683.jpg" alt="Modern House with Pool" />
              </div>
              <div className="hero-cta-text">
                <h4>
                  <Link to="/contact">INTERESTED IN SELLING?</Link>
                </h4>
                <p><Link to="/contact" className="hero-cta-link">Contact us today!</Link></p>
              </div>
            </div>
            <Link to="/contact" className="hero-contact-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
              </svg>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
