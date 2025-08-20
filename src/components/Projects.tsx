import { useState, useEffect } from 'react';
import { ExternalLink, Github, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  languages_url: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

interface ProjectLanguages {
  [key: string]: number;
}

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepo[]>([]);
  const [languages, setLanguages] = useState<{ [key: string]: ProjectLanguages }>({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [allLanguages, setAllLanguages] = useState<string[]>([]);

  useEffect(() => {
    fetchRepos();
  }, []);

  useEffect(() => {
    filterRepos();
  }, [repos, searchTerm, selectedLanguage, languages]);

  const fetchRepos = async () => {
    try {
      // Fetch repositories
      const reposResponse = await fetch('https://api.github.com/users/rmrayakar/repos?sort=updated&per_page=20');
      if (!reposResponse.ok) {
        throw new Error('Failed to fetch repositories');
      }
      const reposData: GitHubRepo[] = await reposResponse.json();
      
      // Filter out forks and add topics if missing
      const filteredRepos = reposData
        .filter(repo => !repo.fork && repo.description) // Only original repos with descriptions
        .map(repo => ({
          ...repo,
          topics: repo.topics || []
        }));

      setRepos(filteredRepos);

      // Fetch languages for each repo
      const languagePromises = filteredRepos.map(async (repo) => {
        try {
          const langResponse = await fetch(repo.languages_url);
          if (langResponse.ok) {
            const langData = await langResponse.json();
            return { repoId: repo.id, languages: langData };
          }
        } catch (error) {
          console.error(`Failed to fetch languages for ${repo.name}:`, error);
        }
        return { repoId: repo.id, languages: {} };
      });

      const languageResults = await Promise.all(languagePromises);
      const languageMap: { [key: string]: ProjectLanguages } = {};
      const allLangs = new Set<string>();

      languageResults.forEach(({ repoId, languages: repoLanguages }) => {
        languageMap[repoId] = repoLanguages;
        Object.keys(repoLanguages).forEach(lang => allLangs.add(lang));
      });

      setLanguages(languageMap);
      setAllLanguages(Array.from(allLangs).sort());
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      setLoading(false);
      // Fallback to demo data
      setRepos(demoProjects);
    }
  };

  const filterRepos = () => {
    let filtered = repos;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by language
    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(repo => {
        const repoLanguages = languages[repo.id] || {};
        return Object.keys(repoLanguages).includes(selectedLanguage);
      });
    }

    setFilteredRepos(filtered);
  };

  const getMainLanguage = (repoId: number): string => {
    const repoLanguages = languages[repoId] || {};
    const entries = Object.entries(repoLanguages);
    if (entries.length === 0) return 'Unknown';
    
    return entries.reduce((a, b) => a[1] > b[1] ? a : b)[0];
  };

  const getTechBadges = (repo: GitHubRepo): string[] => {
    const mainLang = getMainLanguage(repo.id);
    const badges = [mainLang];
    
    // Add topics as additional badges
    repo.topics.slice(0, 3).forEach(topic => {
      if (!badges.includes(topic)) {
        badges.push(topic);
      }
    });

    return badges.filter(badge => badge !== 'Unknown').slice(0, 4);
  };

  // Demo projects in case GitHub API fails
  const demoProjects: GitHubRepo[] = [
    {
      id: 1,
      name: "portfolio-website",
      description: "Personal portfolio website built with React and TypeScript",
      html_url: "https://github.com/rmrayakar/portfolio-website",
      language: "TypeScript",
      languages_url: "",
      topics: ["react", "typescript", "portfolio"],
      stargazers_count: 12,
      forks_count: 3,
      updated_at: "2024-01-15T10:30:00Z",
      fork: false
    },
    {
      id: 2,
      name: "task-manager-app",
      description: "Full-stack task management application with real-time updates",
      html_url: "https://github.com/rmrayakar/task-manager-app",
      homepage: "https://taskmanager-demo.vercel.app",
      language: "JavaScript",
      languages_url: "",
      topics: ["nodejs", "mongodb", "react"],
      stargazers_count: 8,
      forks_count: 2,
      updated_at: "2024-01-10T14:20:00Z",
      fork: false
    }
  ];

  if (loading) {
    return (
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-mono font-bold text-center mb-16 text-gradient">
            Projects
          </h2>
          <div className="flex justify-center">
            <div className="animate-pulse text-primary font-mono">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-mono font-bold text-center mb-16 text-gradient">
          Projects
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-input border-border font-mono"
            />
          </div>
          
          <div className="relative min-w-[200px]">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Languages</option>
              {allLanguages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo, index) => (
            <div
              key={repo.id}
              className="project-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                  {repo.name.replace(/-/g, ' ')}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {getTechBadges(repo).map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                <div className="flex gap-4">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                </div>
                <span>
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-mono">
              No projects found matching your criteria.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="font-mono border-primary text-primary hover:bg-primary/10"
          >
            <a
              href="https://github.com/rmrayakar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;