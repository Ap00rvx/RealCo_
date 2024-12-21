
import FooterComponent from './components/footer'
import {HeroSection} from './components/hero'
import OurClients from './components/ourClients'
import WhyChooseUs from './components/WhyChooseUs'
import WorkDisplaySection from './components/workDisplaySection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar /> */}
    <HeroSection/>
    <WhyChooseUs/>
    <OurClients/>
    <WorkDisplaySection />
    <FooterComponent/>
    
   
  </>
  )
}

export default App
