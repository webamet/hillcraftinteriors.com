import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import InteriorSolutions from './components/InteriorSolutions';
import HowItWorks from './components/HowItWorks';
import AuthorizedDealer from './components/AuthorizedDealer';
import DesignInspiration from './components/DesignInspiration';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import LocalSEO from './components/LocalSEO';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTAs from './components/FloatingCTAs';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <InteriorSolutions />
        <HowItWorks />
        <AuthorizedDealer />
        <DesignInspiration />
        <Gallery />
        <VideoSection />
        <LocalSEO />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}
