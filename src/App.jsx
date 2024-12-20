
import FooterComponent from './components/footer'
import {HeroSection} from './components/hero'
import  {Navbar}  from './components/Navbar'
import ServiceComponent from './components/servicesSection'
import SponsorsSection from './components/sponsersSection'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <HeroSection/>
    <WhyChooseUs/>
    <SponsorsSection/>
    <ServiceComponent/>
    <FooterComponent/>
    
   
  </>
  )
}

export default App
