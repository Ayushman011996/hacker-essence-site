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
          title: "Bachelor of Science in Computer Science",
          subtitle: "Your University Name",
          duration: "2022 - 2026",
          details: [
            "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
            "GPA: 3.8/4.0",
            "Dean's List: Fall 2023, Spring 2024"
          ]
        }
      ]
    },
    {
      title: "Experience",
      items: [
        {
          title: "Software Development Intern",
          subtitle: "Company Name",
          duration: "Summer 2024",
          details: [
            "Developed full-stack web applications using React and Node.js",
            "Collaborated with cross-functional teams in an Agile environment",
            "Implemented automated testing strategies improving code coverage by 40%"
          ]
        },
        {
          title: "Teaching Assistant",
          subtitle: "University CS Department",
          duration: "Fall 2023 - Present",
          details: [
            "Assist students in CS fundamentals and programming concepts",
            "Lead weekly lab sessions for 30+ students",
            "Grade assignments and provide constructive feedback"
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
            "JavaScript/TypeScript, Python, Java, C++",
            "HTML5, CSS3, SQL, Bash"
          ]
        },
        {
          title: "Frameworks & Technologies",
          details: [
            "React, Node.js, Express, Django",
            "MongoDB, PostgreSQL, MySQL",
            "Git, Docker, AWS, Vercel"
          ]
        }
      ]
    },
    {
      title: "Achievements",
      items: [
        {
          title: "Hackathon Winner",
          subtitle: "University Hackathon 2024",
          details: [
            "1st place for developing an AI-powered study assistant",
            "Led a team of 4 developers over 48 hours"
          ]
        },
        {
          title: "Open Source Contributions",
          details: [
            "Contributed to 5+ open source projects on GitHub",
            "Maintained personal projects with 100+ stars combined"
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