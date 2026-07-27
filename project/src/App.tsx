import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from '@/components/shell/Loader';
import { CustomCursor } from '@/components/shell/CustomCursor';
import { ScrollProgress } from '@/components/shell/ScrollProgress';
import { Navbar } from '@/components/shell/Navbar';
import { CommandPalette } from '@/components/shell/CommandPalette';
import { BackToTop } from '@/components/shell/BackToTop';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Certifications, Internships, Education } from '@/components/sections/Credentials';
import { TechStack } from '@/components/sections/TechStack';
import { Achievements, Testimonials } from '@/components/sections/Achievements';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { useLenis } from '@/hooks/usePortfolio';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  useLenis();

  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden';
  }, [loaded]);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <CustomCursor />
      <ScrollProgress />
      <Navbar onCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <BackToTop />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Internships />
        <Education />
        <TechStack />
        <Achievements />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
