import './Testimonials.css'

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">testimonials</h2>
          <h3 className="section-subtitle">Hear from our satisfied clients</h3>
        </div>
        <div className="testimonials-wrapper">
          <div className="testimonial-image fadeInLeft">
            <img 
              src="https://windriverpartners.net/wp-content/uploads/2024/08/modern-house-facade-2021-08-27-19-27-44--1024x683.jpg" 
              alt="Happy Homeowner" 
            />
          </div>
          <div className="testimonial-card fadeInRight">
            <h4>Smooth and Hassle-Free Sale!</h4>
            <p>
              Selling my home was a breeze with Wind River Partners. They delivered exactly what they promised—quick, easy, and stress-free
            </p>
            <p className="testimonial-author">Michael R., Denver, CO</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
