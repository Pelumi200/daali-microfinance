import { useState } from 'react'
import './App.css'
import HeaderApp from './assets/components/header'
import HeroApp from './assets/components/hero'
import AboutApp from './assets/components/about'
import ServicesApp from './assets/components/services'
import WhyChooseUsApp from './assets/components/why-choose-us'
import ImpactApp from './assets/components/global-impact'
import ContactApp from './assets/components/contact'
import FooterApp from './assets/components/footer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCarousel from './assets/components/testimonial'



function App() {
 

  return (
    <>
      <HeaderApp/>
      <HeroApp/>
      <AboutApp/>
      <ServicesApp/>
      <WhyChooseUsApp/>
      <ImpactApp></ImpactApp>
      <TestimonialCarousel></TestimonialCarousel>
      <ContactApp></ContactApp>
      <FooterApp/>
    </>
  )
}

export default App
