import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';
import { Home, Terminal, AlertTriangle } from 'lucide-react';

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-up">
            <div className="mb-8">
              <AlertTriangle className="mx-auto text-destructive mb-4" size={64} />
            </div>
            
            <h1 className="text-8xl md:text-9xl font-mono font-bold mb-6 text-gradient">
              404
            </h1>
            
            <div className="code-block max-w-2xl mx-auto mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <span className="text-muted-foreground font-mono text-sm ml-4">error.log</span>
              </div>
              <div className="text-left">
                <span className="text-destructive">ERROR:</span> <span className="text-foreground">File not found in system</span>
                <br />
                <span className="text-primary">$</span> <span className="text-secondary">ls /requested/path</span>
                <br />
                <span className="text-muted-foreground ml-2">
                  ls: cannot access '/requested/path': No such file or directory
                </span>
                <br />
                <span className="text-primary">$</span> <span className="text-secondary">suggestion --help</span>
                <br />
                <span className="text-foreground ml-2">
                  Try navigating to an existing route or return to home base
                </span>
                <span className="terminal-cursor"></span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-mono font-semibold mb-4 text-secondary">
              Page Not Found
            </h2>
            
            <p className="text-muted-foreground font-mono mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist in this directory.
              Maybe it was moved, deleted, or you typed the wrong URL.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="px-8 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <Home size={20} />
                Return Home
              </Link>
              <Link
                to="/terminal"
                className="px-8 py-3 border border-secondary text-secondary font-mono font-medium rounded-lg hover:bg-secondary/10 hover:shadow-glow-secondary transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <Terminal size={20} />
                Try Terminal
              </Link>
            </div>

            <div className="mt-12 project-card">
              <h3 className="text-lg font-mono font-semibold text-tertiary mb-4">
                Quick Navigation
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-mono">
                  /about
                </Link>
                <Link to="/resume" className="text-muted-foreground hover:text-primary transition-colors font-mono">
                  /resume
                </Link>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors font-mono">
                  /projects
                </Link>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors font-mono">
                  /contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Custom404;