import "./styles/main.scss";
import Header from './components/Header'
import Hero from "./components/Hero";
import Features from "./components/Features";
import Comparison from "./components/Comparison";
import HowItWorks from "./components/HowItWorks";
import sphereImg from "./assets/howitworks/sphere.png";
import botIcon from './assets/icons/bot-icon.png';
import Testimonials from "./components/Testimonials";
import Solutions from "./components/Solutions";
import SupportedCrm from "./components/SupportedCrm";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features /> 
        <Comparison />
        <HowItWorks />
        <div className="decorative-sphere-container">
          <img src={sphereImg} alt="" className="decorative-sphere" />
        </div>
        <Testimonials />
        <div className="bot-icon">
          <img src={botIcon} alt="LeadCRM Bot" className="bot-icon__image" />
        </div>
        <Solutions />
        <SupportedCrm />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}

export default App
