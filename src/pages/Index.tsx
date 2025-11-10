import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Users, TrendingUp, Award, MessageSquare, Star, Target, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const { user, userRole, signOut } = useAuth();
  
  const features = [
    {
      icon: MessageSquare,
      title: 'Post Products',
      description: 'Businesses share products for real customer feedback',
    },
    {
      icon: Star,
      title: 'Get Reviews',
      description: 'Customers try products and provide honest opinions',
    },
    {
      icon: Award,
      title: 'Earn Rewards',
      description: 'Customers earn for quality feedback, businesses gain insights',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Active Reviewer',
      comment: 'I love being able to try new products and get rewarded for my honest feedback!',
      rating: 5,
    },
    {
      name: 'TechCorp Inc.',
      role: 'Business Partner',
      comment: 'The insights we receive help us improve our products significantly.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Product Enthusiast',
      comment: 'Great platform to discover new products and share my opinions.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <img src="/logo.png" alt="Try N Sell" className="h-8 sm:h-8" />
            </div>
            <div className="flex gap-2 sm:gap-4 items-center">
              {user && userRole ? (
                <>
                  <Link to={`/${userRole}/dashboard`}>
                    <Button variant="ghost" size="sm" className="hidden sm:flex">Go to Dashboard</Button>
                    <Button variant="ghost" size="sm" className="sm:hidden">Dashboard</Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={signOut}>
                    <LogOut className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:inline">Logout</span>
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/customer-login">
                    <Button variant="ghost" size="sm" className="text-xs sm:text-sm">Customer</Button>
                  </Link>
                  <Link to="/business-login">
                    <Button variant="ghost" size="sm" className="text-xs sm:text-sm">Business</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-brand text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Where Real Opinions Meet Real Rewards
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90">
            Connect businesses with customers for authentic product feedback.
            Try products, earn rewards, and help brands improve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/customer-signup">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Join as Customer <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/business-signup">
              <Button size="lg" variant="outline" className="border-white text-accent hover:bg-white/10">
                Join as Business <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between businesses and consumers by creating a transparent,
                rewarding ecosystem where authentic feedback drives product excellence and
                customer satisfaction.
              </p>
            </Card>
            <Card className="p-8 border-l-4 border-l-accent">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted consumer-to-business feedback platform,
                empowering millions of customers and helping thousands of businesses deliver
                exceptional products.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">How It Works</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Simple steps to start earning or gaining insights</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">What Our Community Says</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Real feedback from real users</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">Try N Sell</h3>
              <p className="text-sm text-muted-foreground">
                Connecting businesses with customers for authentic feedback.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Customers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/customer-signup" className="text-muted-foreground hover:text-primary">Sign Up</Link></li>
                <li><Link to="/customer-login" className="text-muted-foreground hover:text-primary">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Businesses</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/business-signup" className="text-muted-foreground hover:text-primary">Sign Up</Link></li>
                <li><Link to="/business-login" className="text-muted-foreground hover:text-primary">Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Try N Sell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
