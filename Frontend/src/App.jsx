import './App.css'
import { useEffect } from 'react'
import ScrollReveal from "scrollreveal";
import Header from './components/Header'

function App() {
  useEffect(() => {
    ScrollReveal().reveal("#about, #contact, #meet-our-team, #contact-details, #testimonial-swiper, #business-achievement, #financial-potential, #services, #consulting-services, #about-us, #brand-logos, #growing-business", {
      origin: "bottom",
      distance: "80px",
      duration: 1500, 
      delay: 150,
      easing: "ease-in-out"
    });
  }, []);
  return (
    <>
      <Header/>
    </>
  )
}

export default App
