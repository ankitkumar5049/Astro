import './App.css'
import AboutSection from './components/aboutSection/AboutSection';
import AstroSolutions from './components/astroSolutions/AstroSolutions';
import Banner from "./components/banner/Banner";
import FeatureSection from './components/featureSection/FeatureSection';
import Hero from './components/hero/Hero';
import ProblemSection from './components/problemSection/problemSection';
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
    </div>
  )
}

export default App
