import Navigation from '@/components/Navigation';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Command {
  input: string;
  output: string[];
  timestamp: Date;
}

const TerminalPage = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const commands = {
    help: [
      'Available commands:',
      '  about      - Learn more about me',
      '  projects   - View my projects',
      '  resume     - View my resume',
      '  contact    - Get my contact information',
      '  skills     - List my technical skills',
      '  education  - View my educational background',
      '  clear      - Clear the terminal',
      '  whoami     - Display user information',
      '  ls         - List available sections',
      '  cd <page>  - Navigate to a page',
      '  pwd        - Print working directory',
      '  exit       - Return to main site'
    ],
    about: [
      'Ramachandra Manjunath Rayakar',
      'Computer Science Student at RV College of Engineering, Bengaluru',
      'Current CGPA: 8.99',
      '',
      'CS Engineering student with passion for building innovative web platforms',
      'and AI/ML solutions. Winner of Web 3.0 Hackathon and active competitive',
      'programmer with expertise in full-stack development and machine learning.'
    ],
    projects: [
      'Featured Projects:',
      '',
      '1. Prep Sutra - Competitive Exam Preparation Platform',
      '   Technologies: Next.js, AI/ML, React',
      '   Features: Study planner, PYQ analyzer, essay generator',
      '',
      '2. The Makers Market - Local Artisan Marketplace',
      '   Technologies: React, Payment Integration, Google Maps',
      '   Features: Multi-payment support, order tracking, admin tools',
      '',
      '3. Traffic Sign Detection System',
      '   Technologies: Python, YOLOv5, Computer Vision',
      '   Features: Real-time detection, high accuracy, NMS',
      '',
      'Type "cd projects" to view detailed project page'
    ],
    resume: [
      'Ramachandra Manjunath Rayakar',
      'Email: rmraikar777@gmail.com',
      'Phone: +91 9964975545',
      'GitHub: github.com/rmrayakar',
      'LinkedIn: linkedin.com/in/ramachandramr/',
      '',
      'Education:',
      '• B.E in Computer Science & Engineering (2022-2026) - CGPA: 8.99',
      '• Class XII - SAI NIKETAN PU Science College (96.16%)',
      '',
      'Key Achievements:',
      '• KCET 2022 Rank: 616',
      '• Winner: Web 3.0 Hackathon - Apogee \'25 BITS Pilani',
      '',
      'Type "cd resume" for detailed view'
    ],
    contact: [
      'Contact Information:',
      '',
      'Email: rmraikar777@gmail.com',
      'Phone: +91 9964975545',
      'Location: Bengaluru, Karnataka, India',
      '',
      'Professional Profiles:',
      '• GitHub: github.com/rmrayakar',
      '• LinkedIn: linkedin.com/in/ramachandramr/',
      '',
      'Coding Profiles:',
      '• GeeksforGeeks: rmraiknww2',
      '• LeetCode: ramachandramr',
      '',
      'Type "cd contact" for contact form'
    ],
    skills: [
      'Technical Skills:',
      '',
      'Programming Languages:',
      '  C, C++, Java, Python, JavaScript, SQL',
      '',
      'Web Development:',
      '  HTML, CSS, Node.js, Next.js, Tailwind CSS',
      '',
      'Databases:',
      '  MySQL, MongoDB, PostgreSQL',
      '',
      'Frameworks & Libraries:',
      '  Express.js, YOLOv5, Drizzle ORM, LLVM, Graphviz',
      '',
      'AI/ML & Data Processing:',
      '  Machine Learning, Computer Vision, Image Processing',
      '',
      'Tools & Platforms:',
      '  Git, GitHub, VS Code, Vercel, WSL'
    ],
    education: [
      'Educational Background:',
      '',
      '🎓 B.E in Computer Science & Engineering',
      '   RV College of Engineering, Bengaluru',
      '   2022 - 2026 | Current CGPA: 8.99',
      '',
      '🎓 Karnataka Secondary Education - Class XII',
      '   SAI NIKETAN PU Science College, MUDHOL',
      '   2020 - 2022 | Percentage: 96.16%',
      '',
      'Current Status: 3rd Year Student',
      'Specialization: Software Engineering, ML, Computer Vision'
    ],
    whoami: [
      'rmrayakar@terminal:~$ whoami',
      'Ramachandra Manjunath Rayakar',
      'Role: Computer Science Student & Developer',
      'Location: Bengaluru, Karnataka, India',
      'Status: Available for internships and collaborations'
    ],
    ls: [
      'Available sections:',
      '  about/',
      '  resume/',
      '  projects/',
      '  contact/',
      '  achievements/',
      '  terminal/'
    ],
    pwd: [
      '/home/rmrayakar/portfolio/terminal'
    ]
  };

  useEffect(() => {
    // Welcome message
    setHistory([{
      input: '',
      output: [
        'Welcome to rmrayakar terminal v1.0.0',
        'Type "help" for available commands',
        ''
      ],
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [command, ...args] = trimmedCmd.split(' ');
    
    let output: string[] = [];

    switch (command) {
      case '':
        output = [''];
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        navigate('/');
        return;
      case 'cd':
        if (args.length === 0) {
          output = ['cd: missing argument', 'Usage: cd <page>'];
        } else {
          const page = args[0];
          const validPages = ['about', 'resume', 'projects', 'contact', 'achievements'];
          if (validPages.includes(page)) {
            navigate(`/${page}`);
            return;
          } else {
            output = [`cd: ${page}: No such directory`];
          }
        }
        break;
      default:
        if (command in commands) {
          output = commands[command as keyof typeof commands];
        } else {
          output = [
            `Command not found: ${command}`,
            'Type "help" for available commands'
          ];
        }
    }

    const newCommand: Command = {
      input: cmd,
      output,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newCommand]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        if (newIndex === commandHistory.length - 1 && historyIndex === commandHistory.length - 1) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="code-block min-h-[600px] animate-fade-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              <span className="text-muted-foreground font-mono text-sm ml-4">
                rmrayakar@terminal: ~
              </span>
            </div>

            <div className="space-y-4">
              {history.map((cmd, index) => (
                <div key={index}>
                  {cmd.input && (
                    <div className="flex items-center gap-2">
                      <span className="text-primary">$</span>
                      <span className="text-foreground">{cmd.input}</span>
                    </div>
                  )}
                  {cmd.output.map((line, lineIndex) => (
                    <div key={lineIndex} className={`${line.startsWith('cd:') || line.startsWith('Command not found:') ? 'text-destructive' : 'text-muted-foreground'} ml-4`}>
                      {line}
                    </div>
                  ))}
                </div>
              ))}

              <div className="flex items-center gap-2">
                <span className="text-primary">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-foreground font-mono"
                  placeholder="Type a command..."
                  autoComplete="off"
                />
                <span className="w-2 h-5 bg-primary animate-pulse"></span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground font-mono text-sm">
              Try commands like "help", "about", "projects", "cd resume", or "exit"
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TerminalPage;