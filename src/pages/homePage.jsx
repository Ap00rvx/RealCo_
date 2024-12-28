import {useEffect} from 'react'
import FooterComponent from '../components/footer'
import {HeroSection} from '../components/hero'
import OurClients from '../components/ourClients'
import WhyChooseUs from '../components/WhyChooseUs'
import WorkDisplaySection from '../components/workDisplaySection'
import Services from '../components/services'
import CounterSection from '../components/statsComponent'
import axios from 'axios'
function HomePage() {
  const visitorUpdate = async()=>{
    const base= import.meta.env.VITE_BASE_URL ;
    const url = base + "/api/visitor/"; 
    await axios.get(url); 
  }
  useEffect(()=>{
    visitorUpdate(); 
  },[]); 
  return (
    <>
     <HeroSection/>
    <WhyChooseUs/>
    <OurClients/>
    <Services/>
    <CounterSection/>
    <WorkDisplaySection />
    <FooterComponent/>
    </>
  )
}

export default HomePage