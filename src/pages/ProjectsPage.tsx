import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Search, Filter, Star, GitFork, Calendar, ExternalLink, Github } from 'lucide-react';
import Projects from '@/components/Projects';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const featuredProjects = [
    {
      id: 1,
      name: "Prep Sutra",
      description: "Competitive Exam Preparation Platform with AI-powered features including study planner, PYQ analyzer, and essay generator.",
      language: "JavaScript",
      stars: 15,
      forks: 3,
      updated_at: "2024-01-15",
      topics: ["nextjs", "ai", "education", "react"],
      html_url: "https://github.com/rmrayakar/prep-sutra",
      homepage: "https://prep-sutra.vercel.app"
    },
    {
      id: 2,
      name: "The Makers Market",
      description: "Local Artisan Marketplace with integrated payment systems (PhonePe, Stripe, PayPal) and Google Maps location search.",
      language: "JavaScript",
      stars: 12,
      forks: 2,
      updated_at: "2024-01-10",
      topics: ["ecommerce", "marketplace", "payment", "react"],
      html_url: "https://github.com/rmrayakar/makers-market",
      homepage: "https://makers-market.vercel.app"
    },
    {
      id: 3,
      name: "Traffic Sign Detection",
      description: "Real-time traffic sign detection system using YOLOv5 with high accuracy and Non-Maximum Suppression.",
      language: "Python",
      stars: 20,
      forks: 8,
      updated_at: "2023-12-20",
      topics: ["yolov5", "computer-vision", "ml", "opencv"],
      html_url: "https://github.com/rmrayakar/traffic-sign-detection",
      homepage: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-gradient">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto">
              Showcasing innovative solutions in web development, AI/ML, and computer vision
            </p>
          </div>

          {/* Featured Projects */}
          <section className="mb-16">
            <h2 className="text-3xl font-mono font-bold mb-8 text-gradient flex items-center gap-3">
              <Star className="text-primary" size={32} />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-mono font-semibold text-primary hover:text-secondary transition-colors cursor-pointer">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star size={16} />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={16} />
                        <span className="text-sm">{project.forks}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="tech-badge bg-primary/20 text-primary border-primary/30">
                      {project.language}
                    </span>
                    {project.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="tech-badge">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>Updated {new Date(project.updated_at).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-secondary transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Projects from GitHub */}
          <section>
            <h2 className="text-3xl font-mono font-bold mb-8 text-gradient flex items-center gap-3">
              <Github className="text-secondary" size={32} />
              GitHub Repositories
            </h2>
            <Projects />
          </section>

          {/* GitHub Profile Link */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/rmrayakar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-secondary text-secondary font-mono font-medium rounded-lg hover:bg-secondary/10 hover:shadow-glow-secondary transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;