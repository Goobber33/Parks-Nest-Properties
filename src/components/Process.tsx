import './Process.css'

const Process = () => {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">From Discussion to Closing, We Make Selling Easy</h2>
          <p className="section-description">
            We guide you through every step, from initial consultation to a flexible closing, ensuring a smooth and straightforward selling experience.
          </p>
        </div>
        <div className="process-wrapper">
          <div className="process-image fadeInLeft">
            <img 
              src="https://windriverpartners.net/wp-content/uploads/2024/08/pexels-photo-106399-1024x683.jpeg" 
              alt="Real Estate Process" 
            />
          </div>
          <div className="process-steps fadeInUp">
            <div className="process-step">
              <div className="step-icon">1</div>
              <h4>Candid Discussion.</h4>
              <p>You will share property details with our expert team via phone.</p>
            </div>
            <div className="process-step">
              <div className="step-icon">2</div>
              <h4>Analysis & Market Research.</h4>
              <p>We will do an analysis and valuation of your property.</p>
            </div>
            <div className="process-step">
              <div className="step-icon">3</div>
              <h4>Fair Cash Offer.</h4>
              <p>You will receive our free cash offer from the Wind River team of experts.</p>
            </div>
            <div className="process-step">
              <div className="step-icon">4</div>
              <h4>Creative Finance Solutions.</h4>
              <p>We offer flexible financing options tailored to your needs, ensuring a solution that works best for you</p>
            </div>
            <div className="process-step">
              <div className="step-icon">5</div>
              <h4>Flexible Closing.</h4>
              <p>We will close on your timeline if you accept the offer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
