import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@trynsell.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Street",
      description: "San Francisco, CA 94105"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-accent via-warning to-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <MessageSquare className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
                Get In Touch
              </h1>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-in">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-t-4 border-t-accent"
              >
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-primary font-semibold mb-1">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="p-8 border-l-4 border-l-primary shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-accent to-warning hover:from-accent/90 hover:to-warning/90"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Info Side */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-info/10 border-info/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Quick Support</h3>
                <p className="text-muted-foreground mb-6">
                  Need immediate assistance? Check out our FAQ page or join our community forum for quick answers.
                </p>
                <div className="space-y-3">
                  <Link 
                    to="/faq" 
                    className="block w-full bg-white border border-border hover:border-primary rounded-xl px-6 py-3 text-center font-semibold transition-colors"
                  >
                    View FAQ
                  </Link>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-accent/10 to-warning/10 border-accent/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Business Inquiries</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in partnerships or enterprise solutions? Let's talk about how Try N Sell can help grow your business.
                </p>
                <a 
                  href="mailto:business@trynsell.com"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-semibold"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  business@trynsell.com
                </a>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-success/10 to-primary/10 border-success/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM EST</p>
                  <p><span className="font-semibold text-foreground">Saturday:</span> 10:00 AM - 4:00 PM EST</p>
                  <p><span className="font-semibold text-foreground">Sunday:</span> Closed</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
