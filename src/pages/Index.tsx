import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
