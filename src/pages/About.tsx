import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Users, TrendingUp, Award, Heart, Zap, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We believe in empowering customers with a voice that matters and rewards that recognize their contribution."
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Helping businesses grow through authentic insights and actionable feedback from real users."
    },
    {
      icon: Award,
      title: "Quality & Trust",
      description: "Building a trusted platform where honest reviews meet genuine products and services."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously evolving our platform to provide the best experience for both customers and businesses."
    }
  ];

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", initials: "SJ" },
    { name: "Michael Chen", role: "CTO", initials: "MC" },
    { name: "Emma Williams", role: "Head of Product", initials: "EW" },
    { name: "David Brown", role: "Head of Business", initials: "DB" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-info to-accent text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20 animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Try N Sell
          </h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-in">
            Revolutionizing the way consumers and businesses connect through authentic feedback
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-l-4 border-l-accent shadow-xl animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-primary to-info p-3 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  At Try N Sell, we're on a mission to bridge the gap between consumers and businesses. 
                  We believe that authentic feedback should be rewarded, and businesses should have access 
                  to genuine insights that drive meaningful improvements.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our platform creates a win-win ecosystem where customers earn rewards for their valuable 
                  opinions, and businesses gain actionable intelligence to enhance their products and services.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Revenue Model Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-warning text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <DollarSign className="w-5 h-5" />
              <span className="font-semibold">Transparency</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Revenue Model</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in complete transparency. Here's how we sustain and grow our platform.
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl border-2 border-primary/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-info text-white">
                    <th className="px-6 py-4 text-left text-lg font-bold">Revenue Source</th>
                    <th className="px-6 py-4 text-right text-lg font-bold">Estimated Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-info/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Business Subscription Plans</div>
                          <div className="text-sm text-muted-foreground">Premium features for businesses to access advanced analytics</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-xl">35%</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-warning/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-accent font-bold">2</span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Pay per Feedback Model</div>
                          <div className="text-sm text-muted-foreground">Businesses pay for each verified customer review</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center bg-accent/10 text-accent font-bold px-4 py-2 rounded-lg text-xl">25%</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-info/20 to-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-info font-bold">3</span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Data Analytics & Insights Reports</div>
                          <div className="text-sm text-muted-foreground">Premium reports and market intelligence services</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center bg-info/10 text-info font-bold px-4 py-2 rounded-lg text-xl">20%</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-warning/20 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-warning font-bold">4</span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Sponsored Listings & Advertisements</div>
                          <div className="text-sm text-muted-foreground">Featured product placements and promotional opportunities</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center bg-warning/10 text-warning font-bold px-4 py-2 rounded-lg text-xl">10%</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary font-bold">5</span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Premium Reviewer Program</div>
                          <div className="text-sm text-muted-foreground">Exclusive access fees for top-tier reviewers</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-xl">10%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
            <p className="text-muted-foreground text-center">
              <span className="font-semibold text-foreground">Our Commitment:</span> All revenue streams are designed to create value for both customers and businesses while maintaining platform sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary"
                >
                  <div className="bg-gradient-to-br from-accent/20 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">The passionate people behind Try N Sell</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary to-info text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-xl text-white/90">Active Reviewers</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl text-white/90">Partner Businesses</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-xl text-white/90">Reviews Submitted</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <Card className="p-12 text-center bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the movement that's transforming how feedback drives innovation
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/customer-signup" 
              className="inline-block bg-gradient-to-r from-primary to-info text-white font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg"
            >
              Join as Customer
            </Link>
            <Link 
              to="/business-signup" 
              className="inline-block bg-gradient-to-r from-accent to-warning text-white font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg"
            >
              Join as Business
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
