import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const email = 'rohan.rayakar@example.com'; // Replace with actual email

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${email}`,
      color: 'text-primary',
      handle: email
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/rmrayakar',
      color: 'text-foreground',
      handle: '@rmrayakar'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/rohanrayakar',
      color: 'text-secondary',
      handle: '/in/rohanrayakar'
    }
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: "Email copied!",
        description: "Email address has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy email address.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real implementation, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-mono font-bold text-center mb-16 text-secondary-gradient">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="code-block">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <span className="text-muted-foreground font-mono text-sm ml-4">contact.json</span>
              </div>
              
              <pre className="text-sm">
                <code className="text-foreground">
{`{
  "status": "open_to_opportunities",
  "response_time": "24_hours",
  "preferred_contact": "email",
  "currently_seeking": [
    "internships",
    "entry_level_positions",
    "collaboration_projects"
  ],
  "timezone": "EST"
}`}
                </code>
              </pre>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-mono font-semibold text-primary mb-6">
                Connect With Me
              </h3>
              
              {socialLinks.map((link, index) => (
                <div key={link.name} className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm border border-border rounded-lg hover-glow group">
                  <link.icon className={`h-6 w-6 ${link.color} group-hover:scale-110 transition-transform`} />
                  <div className="flex-1">
                    <div className="font-mono font-medium text-foreground">
                      {link.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {link.handle}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {link.name === 'Email' && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={copyEmail}
                        className="h-8 w-8 p-0 hover:bg-primary/10"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="code-block">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              <span className="text-muted-foreground font-mono text-sm ml-4">contact_form.tsx</span>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                <h3 className="text-xl font-mono font-semibold text-success mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-muted-foreground font-mono">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="ghost"
                  className="mt-4 font-mono"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border font-mono"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border font-mono"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border font-mono"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-input border-border font-mono resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-mono"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;