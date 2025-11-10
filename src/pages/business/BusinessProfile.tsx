import BusinessLayout from '@/components/layouts/BusinessLayout';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Building2 } from 'lucide-react';

const BusinessProfile = () => {
  return (
    <BusinessLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="bg-accent text-accent-foreground text-3xl">
                <Building2 className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">Your Business Name</h2>
              <p className="text-muted-foreground">business@company.com</p>
            </div>
            <Button variant="outline">Change Logo</Button>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  type="text"
                  defaultValue="Your Business Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  type="text"
                  placeholder="E.g., Technology, Retail"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Company Description</Label>
              <Textarea
                id="description"
                rows={4}
                placeholder="Tell customers about your business..."
                className="resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="City, Country"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="bg-accent hover:bg-accent/90">
                Save Changes
              </Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </div>
          </form>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Account Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold text-primary">6</p>
              <p className="text-sm text-muted-foreground">Products Listed</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold text-accent">856</p>
              <p className="text-sm text-muted-foreground">Total Reviews</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold text-success">4.5</p>
              <p className="text-sm text-muted-foreground">Avg Rating</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold text-info">94%</p>
              <p className="text-sm text-muted-foreground">Response Rate</p>
            </div>
          </div>
        </Card>
      </div>
    </BusinessLayout>
  );
};

export default BusinessProfile;
