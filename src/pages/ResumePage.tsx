import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Download, FileText, Code, Database, Award, Phone, Mail, Github, Linkedin } from 'lucide-react';

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'education.cpp', icon: FileText },
    { id: 'projects', label: 'projects.py', icon: Code },
    { id: 'skills', label: 'skills.md', icon: Database },
    { id: 'achievements', label: 'achievements.json', icon: Award }
  ];

  const TabContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-mono font-semibold text-primary mb-2">
                B.E in Computer Science & Engineering
              </h3>
              <p className="text-secondary font-medium mb-1">RV College of Engineering, Bengaluru</p>
              <p className="text-muted-foreground mb-2">2022 - 2026 | Current CGPA: 8.99</p>
              <p className="text-foreground">
                Pursuing Bachelor's degree with specialization in software engineering, machine learning, 
                and computer vision. Maintaining excellent academic performance with hands-on project experience.
              </p>
            </div>
            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-mono font-semibold text-secondary mb-2">
                Karnataka Secondary Education - Class XII
              </h3>
              <p className="text-tertiary font-medium mb-1">SAI NIKETAN PU Science College, MUDHOL</p>
              <p className="text-muted-foreground mb-2">2020 - 2022 | Percentage: 96.16%</p>
              <p className="text-foreground">
                Completed pre-university education with distinction in Physics, Chemistry, Mathematics, 
                and Computer Science, laying strong foundation for engineering studies.
              </p>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            <div className="project-card">
              <h3 className="text-xl font-mono font-semibold text-primary mb-3">
                Prep Sutra | Competitive Exam Preparation Platform
              </h3>
              <ul className="text-foreground space-y-2 mb-4">
                <li>• Built a web-based platform to help competitive exam aspirants prepare effectively</li>
                <li>• Developed modules including study planner, PYQ analyzer, article summarizer, essay writer and curated resources</li>
                <li>• Implemented user authentication, progress tracking and personalized content recommendations</li>
                <li>• Integrated AI/ML features for summarization and essay generation</li>
                <li>• Designed a responsive UI using modern web technologies for accessibility across devices</li>
              </ul>
            </div>

            <div className="project-card">
              <h3 className="text-xl font-mono font-semibold text-secondary mb-3">
                The Makers Market | Local Artisan Marketplace
              </h3>
              <ul className="text-foreground space-y-2 mb-4">
                <li>• Developed an online platform for artisans to sell handmade and local products</li>
                <li>• Added user login and signup with role based access</li>
                <li>• Built product listing, cart management, crowdfunding and order tracking features</li>
                <li>• Integrated PhonePe, Stripe and PayPal payments with Google Maps location search</li>
                <li>• Created admin tools to manage users, products and orders</li>
              </ul>
            </div>

            <div className="project-card">
              <h3 className="text-xl font-mono font-semibold text-tertiary mb-3">
                Real-Time Traffic Sign Detection System
              </h3>
              <ul className="text-foreground space-y-2 mb-4">
                <li>• Captured and preprocessed live video/images with annotated data for training</li>
                <li>• Used YOLOv5 for real-time traffic sign detection with high accuracy</li>
                <li>• Applied Non-Maximum Suppression to remove redundant boxes</li>
                <li>• Displayed detected signs with labels for autonomous systems</li>
              </ul>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="project-card">
                <h3 className="text-lg font-mono font-semibold text-primary mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'].map((skill) => (
                    <span key={skill} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="project-card">
                <h3 className="text-lg font-mono font-semibold text-secondary mb-4">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'Node.js', 'Next.js', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="project-card">
                <h3 className="text-lg font-mono font-semibold text-tertiary mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'MongoDB', 'PostgreSQL'].map((skill) => (
                    <span key={skill} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="project-card">
                <h3 className="text-lg font-mono font-semibold text-primary mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {['Express.js', 'YOLOv5', 'Drizzle ORM', 'LLVM', 'Graphviz'].map((skill) => (
                    <span key={skill} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="project-card">
                <h3 className="text-lg font-mono font-semibold text-secondary mb-4">AI/ML & Data Processing</h3>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Computer Vision', 'Image Processing', 'Data Preprocessing', 'NMS'].map((skill) => (
                    <span key={skill} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="project-card">
                <h3 className="text-lg font-mono font-semibold text-tertiary mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Vercel', 'WSL'].map((skill) => (
                    <span key={skill} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-6">
            <div className="code-block">
              <pre className="text-sm">
                <code className="text-foreground">
{`{
  "academic": {
    "kcet_2022_rank": 616,
    "current_cgpa": 8.99,
    "class_12_percentage": 96.16
  },
  "competitions": {
    "web3_hackathon": {
      "event": "Apogee '25 BITS Pilani: Revved-Up Rhapsody",
      "position": "Winner",
      "organizer": "Birla Institute of Technology Science, Pilani"
    }
  },
  "coding_profiles": {
    "geeksforgeeks": "rmraiknww2",
    "leetcode": "ramachandramr"
  },
  "status": "Available for internships"
}`}
                </code>
              </pre>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header with Download Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 animate-fade-up">
            <div>
              <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4 text-gradient">
                Resume
              </h1>
              <p className="text-muted-foreground font-mono">
                Complete professional overview
              </p>
            </div>
            <button className="mt-6 md:mt-0 px-8 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
              <Download size={20} />
              Download PDF
            </button>
          </div>

          {/* Contact Info */}
          <div className="project-card mb-8 animate-fade-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <span className="font-mono text-sm">rmraikar777@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-secondary" size={20} />
                <span className="font-mono text-sm">+919964975545</span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="text-tertiary" size={20} />
                <span className="font-mono text-sm">rmrayakar</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-primary" size={20} />
                <span className="font-mono text-sm">ramachandramr</span>
              </div>
            </div>
          </div>

          {/* Code Editor Tabs */}
          <div className="project-card p-0 animate-fade-up">
            {/* Tab Headers */}
            <div className="flex flex-wrap border-b border-border">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-mono text-sm transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? 'border-primary text-primary bg-primary/5'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    <Icon size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <TabContent />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumePage;