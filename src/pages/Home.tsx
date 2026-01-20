import Hero from '../components/Hero'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Process from '../components/Process'
import WhyHired from '../components/WhyHired'
import Specialties from '../components/Specialties'
import Testimonials from '../components/Testimonials'
import ContactCTA from '../components/ContactCTA'
import Contact from '../components/Contact'
import '../App.css'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Process />
      <WhyHired />
      <Specialties />
      <Testimonials />
      <ContactCTA />
      <Contact />
    </>
  )
}

export default Home
