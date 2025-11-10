import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const CustomerLogin = () => {
  const navigate = useNavigate();
  const { signIn, user, userRole, loading } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user && userRole === 'customer') {
      navigate('/customer/dashboard');
    }
  }, [user, userRole, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await signIn(email, password, 'customer');
    
    if (error) {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid email or password",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-primary mb-6 sm:mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <Card className="p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Customer Login</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Welcome back! Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Continue as Customer'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link to="/customer-signup" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CustomerLogin;
