import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">why choose us</h2>
          <h3 className="section-subtitle">Your Trusted Partner in Real Estate Solutions</h3>
          <p className="section-description">
            Personalized service, candid communication, and solutions tailored to your unique real estate needs.
          </p>
        </div>
        <div className="features-wrapper">
          <div className="features-image fadeInLeft">
            <img 
              src="https://windriverpartners.net/wp-content/uploads/2024/08/pexels-photo-106399-1024x683.jpeg" 
              alt="Real Estate Solutions" 
            />
          </div>
          <div className="features-grid fadeInUp">
            <div className="feature-card">
              <img 
                src="https://windriverpartners.net/wp-content/uploads/2024/08/icon-1.png" 
                alt="Fair Cash Offer" 
                className="feature-icon"
              />
              <h4>FAIR CASH OFFER.</h4>
            </div>
            <div className="feature-card">
              <img 
                src="https://windriverpartners.net/wp-content/uploads/2024/08/icon-2.png" 
                alt="Flexible Closing" 
                className="feature-icon"
              />
              <h4>FLEXIBLE CLOSING.</h4>
            </div>
            <div className="feature-card">
              <img 
                src="https://windriverpartners.net/wp-content/uploads/2024/08/icon-3.png" 
                alt="No Delays" 
                className="feature-icon"
              />
              <h4>NO DELAYS.</h4>
            </div>
            <div className="feature-card">
              <img 
                src="https://windriverpartners.net/wp-content/uploads/2024/08/icon-4.png" 
                alt="Stress Free" 
                className="feature-icon"
              />
              <h4>STRESS FREE.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
