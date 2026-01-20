import { FormEvent } from 'react'
import './ContactPage.css'

const ContactPage = () => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <div className="contact-page">
      <section className="contact-page-hero">
        <div className="container">
          <div className="section-header fadeInUp">
            <h2 className="section-title">Contact</h2>
          </div>
        </div>
      </section>

      <section className="contact-page-content">
        <div className="container">
          <div className="contact-page-wrapper">
            <div className="contact-page-info fadeInLeft">
              <h2 className="contact-page-heading">Get in Touch</h2>
              <p className="contact-page-description">
                Fill out the form or contact us directly to get started. We're here to assist you every step of the way!
              </p>
              <div className="contact-page-details">
                <div className="contact-detail-item">
                  <a href="mailto:dani@windriverpartners.net">dani@windriverpartners.net</a>
                </div>
                <div className="contact-detail-item">
                  <a href="tel:+14044028193">(404) 402-8193</a>
                </div>
                <div className="contact-detail-item">
                  <span>129 Temple Peak Lane, Boulder, WY 82923</span>
                </div>
              </div>
            </div>
            <div className="contact-page-form-wrapper fadeInRight">
              <form className="contact-page-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Property Address:</label>
                  <input type="text" id="address" name="address" placeholder="Property Address:" required />
                </div>
                <div className="form-group">
                  <label htmlFor="reason">Reason for Selling:</label>
                  <textarea id="reason" name="reason" rows={5} placeholder="Reason for Selling:" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
