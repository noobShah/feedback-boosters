import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const BusinessSignup = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await signUp(
      formData.email, 
      formData.password, 
      'business',
      { companyName: formData.companyName }
    );
    
    if (error) {
      toast({
        title: "Signup Failed",
        description: error.message || "Failed to create account",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Account Created!",
        description: "Welcome to Try N Sell Business Portal",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-info/5 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-primary mb-6 sm:mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <Card className="p-6 sm:p-8 border-l-4 border-l-accent">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Join as Business</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Get valuable insights from real customers</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                type="text"
                placeholder="Your Company Inc."
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Business Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="business@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isSubmitting}>
              {isSubmitting ? 'Creating Account...' : 'Create Business Account'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/business-login" className="text-accent hover:underline font-medium">
              Log in
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BusinessSignup;
