import { FormEvent } from 'react'
import './Referrals.css'

const Referrals = () => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your referral! We will contact you soon.')
    e.currentTarget.reset()
  }

  return (
    <div className="referrals-page">
      <section className="referrals-hero">
        <div className="container">
          <div className="section-header fadeInUp">
            <h2 className="section-title">REFERRALS</h2>
            <h3 className="section-subtitle">Learn about our referral program</h3>
          </div>
        </div>
      </section>

      <section className="referrals-content">
        <div className="container">
          <div className="referrals-main fadeInUp">
            <h2 className="referrals-heading">Wind River Partners referral program</h2>
            <p className="referrals-description">
              Do you know someone who is interested in selling their home using creative financing solutions or an all-cash offer? Wind River Partners can help! We appreciate you entrusting your referrals to us, and pay out a referral fee for any closed contracts. Please submit this contact form for referrals:
            </p>
            
            <form className="referrals-form fadeInUp" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Referrals
