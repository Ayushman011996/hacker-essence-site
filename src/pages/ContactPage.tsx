import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, CheckCircle, Send, MapPin, Code } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rmraikar777@gmail.com",
      href: "mailto:rmraikar777@gmail.com",
      copyable: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9964975545",
      href: "tel:+919964975545",
      copyable: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "rmrayakar",
      href: "https://github.com/rmrayakar",
      copyable: false
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ramachandramr",
      href: "https://www.linkedin.com/in/ramachandramr/",
      copyable: false
    }
  ];

  const codingProfiles = [
    {
      platform: "GeeksforGeeks",
      username: "rmraiknww2",
      url: "https://www.geeksforgeeks.org/user/rmraiknww2/"
    },
    {
      platform: "LeetCode",
      username: "ramachandramr",
      url: "https://leetcode.com/ramachandramr/"
    }
  ];

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (label === "Email") {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      }
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-gradient">
              Contact
            </h1>
            <div className="code-block max-w-2xl mx-auto">
              <div className="text-left">
                <span className="text-primary">$</span> <span className="text-secondary">contact --init</span>
                <br />
                <span className="text-foreground ml-2">
                  Ready to collaborate? Let's build something amazing together.
                </span>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fade-up">
                <h2 className="text-3xl font-mono font-bold mb-6 text-gradient">
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={item.label} 
                        className="project-card flex items-center justify-between animate-fade-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center gap-4">
                          <Icon className="text-primary" size={24} />
                          <div>
                            <p className="font-mono text-sm text-muted-foreground">
                              {item.label}
                            </p>
                            <a
                              href={item.href}
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="font-mono text-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          </div>
                        </div>
                        {item.copyable && (
                          <button
                            onClick={() => copyToClipboard(item.value, item.label)}
                            className="p-2 text-muted-foreground hover:text-secondary transition-colors"
                            aria-label={`Copy ${item.label}`}
                          >
                            {item.label === "Email" && emailCopied ? (
                              <CheckCircle size={20} className="text-success" />
                            ) : (
                              <Copy size={20} />
                            )}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Coding Profiles */}
              <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-mono font-bold mb-4 text-gradient flex items-center gap-2">
                  <Code className="text-tertiary" size={24} />
                  Coding Profiles
                </h3>
                <div className="space-y-3">
                  {codingProfiles.map((profile, index) => (
                    <a
                      key={profile.platform}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card flex items-center justify-between hover:border-tertiary/50 transition-all duration-300 block"
                    >
                      <div>
                        <p className="font-mono text-tertiary font-medium">
                          {profile.platform}
                        </p>
                        <p className="font-mono text-sm text-muted-foreground">
                          @{profile.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="project-card animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-4">
                  <MapPin className="text-secondary" size={24} />
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Location</p>
                    <p className="font-mono text-foreground">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="project-card">
                <h3 className="text-2xl font-mono font-bold mb-6 text-gradient">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-sm text-muted-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none transition-colors font-mono"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-sm text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none transition-colors font-mono"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none transition-colors font-mono"
                      placeholder="Project collaboration, internship, etc."
                    />
                  </div>
                  
                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none transition-colors font-mono resize-vertical"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;