import { FormEvent } from 'react'
import './Contact.css'

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info fadeInLeft">
            <h2>Contact</h2>
            <div className="contact-details">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:dani@windriverpartners.net">dani@windriverpartners.net</a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+14044028193">(404) 402-8193</a>
              </p>
              <p>
                <strong>Address:</strong> 129 Temple Peak Lane, Boulder, WY 82923
              </p>
            </div>
          </div>
          <div className="contact-form-wrapper fadeInRight">
            <h2>Get In Touch</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" id="phone" name="phone" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" rows={5} placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
