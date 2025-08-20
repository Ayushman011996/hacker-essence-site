import Navigation from '@/components/Navigation';
import { Award, Trophy, Star, Calendar, ExternalLink } from 'lucide-react';

const AchievementsPage = () => {
  const achievements = [
    {
      title: "Web 3.0 Hackathon Winner",
      event: "Apogee '25 BITS Pilani: Revved-Up Rhapsody",
      organization: "Birla Institute of Technology Science, Pilani",
      date: "2025",
      type: "competition",
      description: "Won the prestigious Web 3.0 hackathon competition, demonstrating innovative solutions in blockchain and decentralized technologies.",
      icon: Trophy,
      color: "primary"
    },
    {
      title: "KCET 2022 - 616th Rank",
      event: "Karnataka Common Entrance Test",
      organization: "Government of Karnataka",
      date: "2022",
      type: "academic",
      description: "Achieved excellent rank in state-level engineering entrance examination among thousands of candidates.",
      icon: Award,
      color: "secondary"
    },
    {
      title: "Academic Excellence",
      event: "Current CGPA: 8.99",
      organization: "RV College of Engineering",
      date: "2022-2026",
      type: "academic",
      description: "Maintaining outstanding academic performance throughout the Computer Science Engineering program.",
      icon: Star,
      color: "tertiary"
    }
  ];

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera / Stanford University",
      date: "2023",
      skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"]
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      skills: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      title: "Computer Vision Fundamentals",
      issuer: "OpenCV University",
      date: "2023",
      skills: ["OpenCV", "Python", "Image Processing", "YOLO"]
    }
  ];

  const recognitions = [
    {
      title: "Dean's List",
      description: "Consistently achieved high academic performance",
      semester: "Multiple Semesters"
    },
    {
      title: "Best Project Award",
      description: "Traffic Sign Detection System using YOLOv5",
      semester: "6th Semester"
    },
    {
      title: "Active Contributor",
      description: "Open source contributions and community involvement",
      semester: "Ongoing"
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
              Achievements
            </h1>
            <div className="code-block max-w-2xl mx-auto">
              <div className="text-left">
                <span className="text-primary">$</span> <span className="text-secondary">achievements --list</span>
                <br />
                <span className="text-foreground ml-2">
                  Showcasing academic excellence, competition victories, and professional recognitions
                </span>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </div>

          {/* Major Achievements */}
          <section className="mb-16">
            <h2 className="text-3xl font-mono font-bold mb-8 text-gradient flex items-center gap-3">
              <Trophy className="text-primary" size={32} />
              Major Achievements
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index} 
                    className="project-card animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className={`p-4 rounded-full bg-${achievement.color}/10 border border-${achievement.color}/20`}>
                        <Icon className={`text-${achievement.color}`} size={32} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-mono font-semibold text-primary mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-secondary font-medium mb-1">
                              {achievement.event}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {achievement.organization}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm mt-2 md:mt-0">
                            <Calendar size={16} />
                            {achievement.date}
                          </div>
                        </div>
                        <p className="text-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-mono font-bold mb-8 text-gradient flex items-center gap-3">
              <Award className="text-secondary" size={32} />
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="project-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-mono font-semibold text-secondary mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground font-mono text-sm mb-4">
                    {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Academic Recognitions */}
          <section>
            <h2 className="text-3xl font-mono font-bold mb-8 text-gradient flex items-center gap-3">
              <Star className="text-tertiary" size={32} />
              Academic Recognitions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recognitions.map((recognition, index) => (
                <div 
                  key={index} 
                  className="project-card text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-mono font-semibold text-tertiary mb-3">
                    {recognition.title}
                  </h3>
                  <p className="text-foreground text-sm mb-3">
                    {recognition.description}
                  </p>
                  <p className="text-muted-foreground font-mono text-xs">
                    {recognition.semester}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Summary */}
          <section className="mt-16">
            <div className="code-block">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <span className="text-muted-foreground font-mono text-sm ml-4">stats.json</span>
              </div>
              <pre className="text-sm">
                <code className="text-foreground">
{`{
  "academic_performance": {
    "current_cgpa": 8.99,
    "class_12_percentage": 96.16,
    "kcet_rank": 616
  },
  "competitions": {
    "hackathons_won": 1,
    "total_competitions": 3,
    "win_rate": "33.3%"
  },
  "certifications": {
    "completed": ${certifications.length},
    "in_progress": 2,
    "domains": ["AI/ML", "Web Dev", "Computer Vision"]
  },
  "status": "Available for opportunities"
}`}
                </code>
              </pre>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AchievementsPage;