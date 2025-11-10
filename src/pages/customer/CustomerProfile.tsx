import CustomerLayout from '@/components/layouts/CustomerLayout';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Award, DollarSign, MessageSquare } from 'lucide-react';

const CustomerProfile = () => {
  return (
    <CustomerLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                CU
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">Customer User</h2>
              <p className="text-muted-foreground mb-3">customer@example.com</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-primary">Top Reviewer</Badge>
                <Badge className="bg-accent">5-Star Expert</Badge>
                <Badge className="bg-success">Verified</Badge>
              </div>
            </div>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold mb-1">24</p>
            <p className="text-sm text-muted-foreground">Total Reviews</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-accent" />
            </div>
            <p className="text-2xl font-bold mb-1">4.8</p>
            <p className="text-sm text-muted-foreground">Avg Rating</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-success" />
            </div>
            <p className="text-2xl font-bold mb-1">₹10,200</p>
            <p className="text-sm text-muted-foreground">Total Earned</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-info" />
            </div>
            <p className="text-2xl font-bold mb-1">4</p>
            <p className="text-sm text-muted-foreground">Badges Earned</p>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Review History</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">This Month</span>
              <span className="font-semibold">8 reviews</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Last Month</span>
              <span className="font-semibold">12 reviews</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-muted-foreground">All Time</span>
              <span className="font-semibold">24 reviews</span>
            </div>
          </div>
        </Card>
      </div>
    </CustomerLayout>
  );
};

export default CustomerProfile;
