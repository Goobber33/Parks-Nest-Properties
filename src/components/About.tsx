import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-image fadeInLeft">
            <img 
              src="https://windriverpartners.net/wp-content/uploads/2024/08/pexels-photo-106399-1024x683.jpeg" 
              alt="Modern House Exterior" 
            />
          </div>
          <div className="about-content fadeInRight">
            <div className="section-header">
              <h2 className="section-title">ABOUT US</h2>
              <h3 className="section-subtitle">Wind River Partners</h3>
            </div>
            <p>
              <strong>Wind River Partners</strong> is a real estate investment company that was founded in 2022. We buy various types of homes located within the USA, such as distressed homes, homes that require repairs, homes that are being sold "as is," vacant homes, homes with renters, inherited homes, and much more. Each home we purchase is evaluated based on our specific buying criteria.
            </p>
            <Link to="/contact" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
