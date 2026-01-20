import { Link } from 'react-router-dom'
import './ContactCTA.css'

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="container">
        <div className="contact-cta-wrapper">
          <div className="contact-cta-content fadeInLeft">
            <div className="section-header">
              <h2 className="section-title">Want to Sell Your House? Contact Us Today!</h2>
              <p className="section-description">
                Reach out now to start your easy home-selling journey with our expert team. We're here to provide a fast, fair, and stress-free solution tailored just for you.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
          <div className="contact-cta-image fadeInRight">
            <img 
              src="https://windriverpartners.net/wp-content/uploads/2024/08/modern-house-facade-2021-08-27-19-27-44--1024x683.jpg" 
              alt="Home Inspection" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
