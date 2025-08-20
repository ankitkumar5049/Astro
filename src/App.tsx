import './App.css'
import AboutSection from './components/aboutSection/AboutSection';
import AstroSolutions from './components/astroSolutions/AstroSolutions';
import Banner from "./components/banner/Banner";
import FeatureSection from './components/featureSection/FeatureSection';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import AstroCardSection from './components/infoSection/AstroCardSection';
import InsightsSection from './components/insightSection/InsightsSection';
import ProblemSection from './components/problemSection/problemSection';
import ServiceSection from './components/serviceSection/ServiceSection';
import StatsSection from './components/stateSection/StatsSection';
import Strings from './constants/strings/string';

function App() {
  return (
    <div >
      <Banner message= {Strings.bannerMessage}/>
      <Hero />
      <FeatureSection />
      <AboutSection />
      <AstroSolutions />
      <StatsSection />
      <ProblemSection />
      <AstroCardSection />
      <ServiceSection />
      <InsightsSection />
      <Footer />
    </div>
  )
}

export default App
