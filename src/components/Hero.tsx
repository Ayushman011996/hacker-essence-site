import TypingAnimation from './TypingAnimation';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Name with gradient */}
          <h1 className="text-6xl md:text-8xl font-mono font-bold mb-6 text-gradient animate-fade-up">
            Rohan Rayakar
          </h1>
          
          {/* Role */}
          <div className="text-xl md:text-2xl text-secondary font-mono mb-8 animate-fade-up [animation-delay:0.2s] opacity-0 animate-[fade-up_0.8s_ease-out_0.2s_both]">
            <span className="text-muted-foreground">const role = "</span>
            <span className="text-secondary">Computer Science Student</span>
            <span className="text-muted-foreground">";</span>
          </div>
          
          {/* Typing tagline */}
          <div className="text-lg md:text-xl text-foreground font-mono mb-12 animate-fade-up [animation-delay:0.4s] opacity-0 animate-[fade-up_0.8s_ease-out_0.4s_both]">
            <span className="text-muted-foreground">{">"} </span>
            <TypingAnimation 
              text="Building the future, one line of code at a time."
              speed={80}
              delay={1000}
              className="text-foreground"
            />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up [animation-delay:0.6s] opacity-0 animate-[fade-up_0.8s_ease-out_0.6s_both]">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-secondary text-secondary font-mono font-medium rounded-lg hover:bg-secondary/10 hover:shadow-glow-secondary transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-float"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;