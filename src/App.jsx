import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import How from "./components/How";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Trusted from "./components/Trusted";

const App = () => {

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <How />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  )
}

export default App;