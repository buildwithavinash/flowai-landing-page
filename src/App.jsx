import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Trusted from "./components/Trusted";

const App = () => {

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App;