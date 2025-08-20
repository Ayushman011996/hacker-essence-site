import Navigation from '@/components/Navigation';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const education = [
    {
      degree: "B.E in Computer Science & Engineering",
      institution: "RV College of Engineering, Bengaluru",
      period: "2022 - 2026",
      cgpa: "8.99",
      description: "Currently pursuing Bachelor's degree with focus on software engineering, machine learning, and computer vision."
    },
    {
      degree: "Karnataka Secondary Education - Class XII",
      institution: "SAI NIKETAN PU Science College, MUDHOL",
      period: "2020 - 2022",
      percentage: "96.16%",
      description: "Completed pre-university education with distinction in Physics, Chemistry, Mathematics, and Computer Science."
    }
  ];

  const skills = [
    { category: "Languages", items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"], level: 90 },
    { category: "Web Development", items: ["HTML", "CSS", "Node.js", "Next.js", "Tailwind CSS"], level: 85 },
    { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"], level: 80 },
    { category: "Frameworks", items: ["Express.js", "YOLOv5", "Drizzle ORM", "LLVM"], level: 75 },
    { category: "AI/ML", items: ["Machine Learning", "Computer Vision", "Image Processing"], level: 85 },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel", "WSL"], level: 90 }
  ];

  const achievements = [
    { title: "KCET 2022 Rank", description: "Secured 616th rank in Karnataka Common Entrance Test", icon: Award },
    { title: "Web 3.0 Hackathon Winner", description: "Winner of Apogee '25 BITS Pilani: Revved-Up Rhapsody", icon: Award },
    { title: "Academic Excellence", description: "Maintaining 8.99 CGPA in Computer Science Engineering", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-gradient">
              About Me
            </h1>
            <div className="code-block max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <span className="text-muted-foreground font-mono text-sm ml-4">whoami.sh</span>
              </div>
              <div className="text-left">
                <span className="text-primary">$</span> <span className="text-secondary">whoami</span>
                <br />
                <span className="text-foreground ml-2">
                  CS Engineering student at RVCE with 8.99 CGPA, passionate about building 
                  innovative web platforms and AI/ML solutions. Winner of Web 3.0 Hackathon 
                  and active competitive programmer.
                </span>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-mono font-bold mb-8 text-gradient flex items-center gap-3">
              <BookOpen className="text-primary" size={32} />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="project-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-mono font-semibold text-primary mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-secondary font-medium flex items-center gap-2 mb-1">
                        <MapPin size={16} />
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground font-mono flex items-center gap-2 md:justify-end">
                        <Calendar size={16} />
                        {edu.period}
                      </p>
                      <p className="text-tertiary font-mono text-lg">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-mono font-bold mb-8 text-gradient">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.category} 
                  className="project-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-mono font-semibold text-secondary mb-4">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-3xl font-mono font-bold mb-8 text-gradient">
              Key Achievements
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index} 
                    className="project-card text-center animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="mx-auto mb-4 text-primary" size={48} />
                    <h3 className="text-lg font-mono font-semibold text-secondary mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;