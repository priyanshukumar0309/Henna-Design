import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { NordicLightCycle } from './components/NordicLightCycle';
import { ScrollHennaBorder } from './components/ScrollHennaBorder';
import { FloatingMobileNav } from './components/FloatingMobileNav';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { HennaCareGuide } from './components/HennaCareGuide';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <NordicLightCycle />
      <ScrollHennaBorder />
      <FloatingMobileNav />
      <Navigation />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="portfolio">
          <Gallery />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="care">
          <HennaCareGuide />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
