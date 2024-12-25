
import FooterComponent from '../components/footer'
import {HeroSection} from '../components/hero'
import OurClients from '../components/ourClients'
import WhyChooseUs from '../components/WhyChooseUs'
import WorkDisplaySection from '../components/workDisplaySection'
import Services from '../components/services'
import CounterSection from '../components/statsComponent'
function HomePage() {
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