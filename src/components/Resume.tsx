import { useState } from 'react';
import { Download, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResumeSection {
  title: string;
  items: Array<{
    title: string;
    subtitle?: string;
    duration?: string;
    details: string[];
  }>;
}

const Resume = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['education']));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const resumeData: ResumeSection[] = [
    {
      title: "Education",
      items: [
        {
          title: "B.E in Computer Science & Engineering",
          subtitle: "RV College of Engineering, Bengaluru",
          duration: "2022 - 2026",
          details: [
            "Current CGPA: 8.99/10.0",
            "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Real-Time Systems",
            "Focus Areas: Web Development, Machine Learning, Computer Vision"
          ]
        },
        {
          title: "Karnataka Secondary Education - Class XII",
          subtitle: "SAI NIKETAN PU Science College, MUDHOL",
          duration: "2020 - 2022",
          details: [
            "Percentage: 96.16%",
            "Science Stream with Mathematics",
            "Secured 616th rank in KCET 2022"
          ]
        }
      ]
    },
    {
      title: "Projects",
      items: [
        {
          title: "Prep Sutra - Competitive Exam Preparation Platform",
          duration: "Full-Stack Web Application",
          details: [
            "Built comprehensive platform for competitive exam preparation with study planner and PYQ analyzer",
            "Implemented AI/ML features for article summarization and essay generation",
            "Added user authentication, progress tracking, and personalized content recommendations",
            "Designed responsive UI for accessibility across all devices"
          ]
        },
        {
          title: "The Makers Market - Local Artisan Marketplace",
          duration: "E-commerce Platform",
          details: [
            "Developed online marketplace for artisans with role-based access control",
            "Built comprehensive features: product listing, cart management, crowdfunding, order tracking",
            "Integrated multiple payment gateways (PhonePe, Stripe, PayPal) with Google Maps",
            "Created admin dashboard for user, product, and order management"
          ]
        },
        {
          title: "Real-Time Traffic Sign Detection System",
          duration: "Computer Vision Project",
          details: [
            "Implemented YOLOv5-based real-time traffic sign detection with high accuracy",
            "Applied Non-Maximum Suppression for optimized object detection",
            "Processed live video streams with annotated training data",
            "Designed for integration with autonomous vehicle systems"
          ]
        }
      ]
    },
    {
      title: "Skills",
      items: [
        {
          title: "Programming Languages",
          details: [
            "C, C++, Java, Python, JavaScript, SQL",
            "Strong foundation in Object-Oriented Programming"
          ]
        },
        {
          title: "Web Development",
          details: [
            "Frontend: HTML5, CSS3, Next.js, Tailwind CSS",
            "Backend: Node.js, Express.js",
            "Databases: MySQL, MongoDB, PostgreSQL, Drizzle ORM"
          ]
        },
        {
          title: "AI/ML & Specialized Tools",
          details: [
            "Machine Learning, Computer Vision, Image Processing, Data Preprocessing",
            "YOLOv5, LLVM, Graphviz",
            "Git, GitHub, VS Code, Vercel, WSL"
          ]
        }
      ]
    },
    {
      title: "Achievements",
      items: [
        {
          title: "Web 3.0 Online Hackathon Winner",
          subtitle: "Apogee '25 BITS Pilani - Revved-Up Rhapsody",
          details: [
            "Won hackathon organized by Birla Institute of Technology Science, Pilani",
            "Demonstrated excellence in Web 3.0 technologies and innovation"
          ]
        },
        {
          title: "Academic Excellence",
          details: [
            "Secured 616th rank in KCET 2022",
            "Maintaining 8.99 CGPA in Computer Science Engineering",
            "Active on coding platforms: GeeksforGeeks (rmraiknww2), LeetCode (ramachandramr)"
          ]
        }
      ]
    }
  ];

  const handleDownloadResume = () => {
    // In a real implementation, this would download an actual PDF
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 px-6 bg-card/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold mb-8 text-secondary-gradient">
            Resume
          </h2>
          <Button 
            onClick={handleDownloadResume}
            className="bg-tertiary hover:bg-tertiary/80 text-tertiary-foreground font-mono"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="space-y-6">
          {resumeData.map((section, sectionIndex) => (
            <div key={section.title} className="code-block animate-fade-up" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
              <button
                onClick={() => toggleSection(section.title.toLowerCase())}
                className="flex items-center justify-between w-full text-left mb-4 hover:text-primary transition-colors"
              >
                <div className="flex items-center gap-2">
                  {expandedSections.has(section.title.toLowerCase()) ? (
                    <ChevronDown className="h-4 w-4 text-primary" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-primary" />
                  )}
                  <span className="text-lg font-mono font-semibold text-primary">
                    {section.title.toLowerCase()}
                  </span>
                </div>
                <span className="text-muted-foreground font-mono text-sm">
                  {expandedSections.has(section.title.toLowerCase()) ? 'collapse' : 'expand'}
                </span>
              </button>

              {expandedSections.has(section.title.toLowerCase()) && (
                <div className="pl-6 space-y-6 animate-fade-in">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-primary/30 pl-6">
                      <div className="mb-2">
                        <h4 className="font-mono font-semibold text-foreground">
                          {item.title}
                        </h4>
                        {item.subtitle && (
                          <p className="text-secondary font-mono text-sm">
                            {item.subtitle}
                          </p>
                        )}
                        {item.duration && (
                          <p className="text-muted-foreground font-mono text-xs">
                            {item.duration}
                          </p>
                        )}
                      </div>
                      <ul className="space-y-1">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-muted-foreground text-sm flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;