const About = () => {
  const aboutData = {
    name: "Ramachandra Manjunath Rayakar",
    role: "Computer Science Student",
    university: "RV College of Engineering, Bengaluru",
    year: "3rd Year",
    interests: [
      "Full-Stack Development",
      "Machine Learning",
      "Computer Vision",
      "Competitive Programming",
      "AI/ML Applications"
    ],
    currentlyLearning: [
      "React/Next.js",
      "Node.js/Express.js",
      "Python/JavaScript",
      "YOLOv5",
      "Data Structures & Algorithms"
    ],
    bio: "CS Engineering student at RVCE with 8.99 CGPA, passionate about building innovative web platforms and AI/ML solutions. Winner of Web 3.0 Hackathon and active competitive programmer."
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-mono font-bold text-center mb-16 text-gradient">
          About Me
        </h2>
        
        <div className="code-block animate-fade-up">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-destructive rounded-full"></div>
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <div className="w-3 h-3 bg-success rounded-full"></div>
            </div>
            <span className="text-muted-foreground font-mono text-sm ml-4">about.json</span>
          </div>
          
          <pre className="text-sm overflow-x-auto">
            <code className="text-foreground">
{`{
  "name": "${aboutData.name}",
  "role": "${aboutData.role}",
  "education": {
    "university": "${aboutData.university}",
    "year": "${aboutData.year}",
    "major": "Computer Science"
  },
  "interests": [
${aboutData.interests.map(interest => `    "${interest}"`).join(',\n')}
  ],
  "currentlyLearning": [
${aboutData.currentlyLearning.map(tech => `    "${tech}"`).join(',\n')}
  ],
  "bio": "${aboutData.bio}",
  "status": "Available for internships",
  "lastUpdated": "${new Date().toISOString().split('T')[0]}"
}`}
            </code>
          </pre>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 hover-glow">
            <h3 className="text-xl font-mono font-semibold text-primary mb-4">Core Interests</h3>
            <div className="flex flex-wrap gap-2">
              {aboutData.interests.map((interest, index) => (
                <span key={index} className="tech-badge">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 hover-glow">
            <h3 className="text-xl font-mono font-semibold text-secondary mb-4">Currently Learning</h3>
            <div className="flex flex-wrap gap-2">
              {aboutData.currentlyLearning.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-mono font-medium rounded-lg hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;