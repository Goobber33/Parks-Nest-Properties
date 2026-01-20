import './WhyHired.css'

const WhyHired = () => {
  return (
    <section id="why-hired" className="why-hired">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">why choose us</h2>
          <h3 className="section-subtitle">Why We Get Hired</h3>
        </div>
        <div className="hired-grid fadeInUp">
          <div className="hired-card">
            <h4>OUR PERSONALIZED SERVICE</h4>
            <p>
              You are more than just a number to us, we want to hear your specific story! Our priority is to understand your needs and create a personalized plan that works for you. Let us help you navigate through any real estate challenges you may encounter.
            </p>
          </div>
          <div className="hired-card">
            <h4>OUR CANDID APPROACH</h4>
            <p>
              We believe at the core of our values that we are here to help. If we are not a good fit for you, we will let you know! If we cannot find a WIN-WIN for you and all parties involved, if we cannot find a win-win solution we will do our best to refer you to someone who can help.
            </p>
          </div>
          <div className="hired-card">
            <h4>OUR COMMUNICATION</h4>
            <p>
              Communication is at the center of our ethos. We will be there with you step by step, whether this is your first real estate transaction or 100th! We respond quickly to your needs via phone and text and answer all your questions and concerns promptly from contract to close.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyHired
