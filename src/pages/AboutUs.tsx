import { Link } from 'react-router-dom'
import './AboutUs.css'

const AboutUs = () => {

  return (
    <div className="about-us-page">
      <section className="about-us-hero">
        <div className="container">
          <div className="section-header fadeInUp">
            <h2 className="section-title">About Us</h2>
          </div>
        </div>
      </section>

      <section className="about-us-content">
        <div className="container">
          <div className="about-us-main fadeInUp">
            <h2 className="about-us-subtitle">Discover Our Story and What Sets Us Apart in Real Estate.</h2>
            <div className="about-us-features fadeInUp">
              <h3>-FAIR CASH OFFER. -FLEXIBLE CLOSING. -NO DELAYS. -STRESS FREE. -WIN-WIN DEALS.</h3>
            </div>
            <div className="about-us-text fadeInUp">
              <p>
                <strong>Wind River Partners</strong> is a real estate investment company that was founded in 2022. We buy various types of homes located within the USA, such as distressed homes, homes that require repairs, homes that are being sold "as is," vacant homes, homes with renters, inherited homes, and much more. Each home we purchase is evaluated based on our specific buying criteria.
              </p>
              <p>
                We are dedicated to helping homeowners find win-win solutions for their unique situations. Whether you're facing foreclosure, struggling to sell a burdensome property, dealing with probate, or simply needing to sell your house for any reason, we can provide a solution that allows you to focus on the things you love.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-mission">
        <div className="container">
          <div className="mission-wrapper">
            <div className="mission-image fadeInLeft">
              <img 
                src="https://windriverpartners.net/wp-content/uploads/2024/08/pexels-divinetechygirl-1181293-684x1024.jpg" 
                alt="Our Mission" 
              />
            </div>
            <div className="mission-content fadeInRight">
              <h2 className="section-title">Our Mission</h2>
              <h3 className="section-subtitle">A Real Estate Investment Company that #GivesBack</h3>
              <div className="mission-text">
                <p>
                  Our company is not solely focused on making profits; we also strive to create employment opportunities for others and give back to our community. Our CEO, Danielle Overbaugh, is the board chairwoman of a nonprofit organization that supports differently-abled people.
                </p>
                <p>
                  We recognize the lack of affordable housing options for people with disabilities, and so a portion of all proceeds from Wind River's transactions goes to charity. Our goal is to contribute to the purchase of a personal care home for those in need. At Wind River, we work hard and believe in the power of doing good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-ceo">
        <div className="container">
          <div className="ceo-wrapper">
            <div className="ceo-image fadeInLeft">
              <img 
                src="https://windriverpartners.net/wp-content/uploads/2024/08/image.png" 
                alt="Danielle Overbaugh, CEO" 
              />
            </div>
            <div className="ceo-content fadeInRight">
              <h2 className="section-title">About our CEO</h2>
              <div className="ceo-text">
                <p>
                  Danielle Overbaugh, the founder and CEO of Wind River Partners, has always had a strong passion for real estate investment. At the age of 21, she purchased her first townhome, which was quite unusual for someone her age. Today, she still owns that property as a rental unit and recognizes the value of real estate.
                </p>
                <p>
                  Before starting her own company, Dani served as the Chief Operating Officer for a leading healthcare company in Atlanta, GA. Her experience has made her a highly motivated executive with a strong work ethic, who leads a team of real estate investment experts. She specializes in performing turnarounds, program development, operating efficiency, and developing high-performing teams.
                </p>
                <p>
                  Dani is not only a successful businesswoman but also a competitive cyclist and author of "Fear No Distance." She is often invited as a keynote speaker and podcast guest, where she shares her insights on leadership and motivation.
                </p>
                <p>
                  Dani firmly believes that compassion and empathy can coexist in the world of business. At Wind River Partners, they follow the principle of people helping people and consider their work a privilege, not just a job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-cta">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-image fadeInLeft">
              <img 
                src="https://windriverpartners.net/wp-content/uploads/2024/08/modern-house-facade-2021-08-27-19-27-44--1024x683.jpg" 
                alt="Sell Your Property" 
              />
            </div>
            <div className="cta-content fadeInRight">
              <h2 className="section-title">Sell Your PROPERTY</h2>
              <h3 className="section-subtitle">Get in touch</h3>
              <p>
                Reach out now to start your easy home-selling journey with our expert team. We're here to provide a fast, fair, and stress-free solution tailored just for you.
              </p>
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
