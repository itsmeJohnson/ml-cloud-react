import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
