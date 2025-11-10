import CustomerLayout from '@/components/layouts/CustomerLayout';
import StatCard from '@/components/StatCard';
import { FileText, Clock, DollarSign, TrendingUp } from 'lucide-react';

const CustomerDashboard = () => {
  return (
    <CustomerLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Welcome back, Customer!</h2>
          <p className="text-muted-foreground">Here's your feedback activity overview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Reviews"
            value={24}
            icon={FileText}
            trend="+3 this week"
            accentColor="primary"
          />
          <StatCard
            title="Pending Approvals"
            value={5}
            icon={Clock}
            trend="2 under review"
            accentColor="warning"
          />
          <StatCard
            title="Total Earnings"
            value="$120"
            icon={DollarSign}
            trend="+$15 this month"
            accentColor="success"
          />
          <StatCard
            title="Review Score"
            value="4.8"
            icon={TrendingUp}
            trend="Excellent reviewer"
            accentColor="info"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Review Approved</p>
                  <p className="text-sm text-muted-foreground">Wireless Headphones Pro</p>
                </div>
                <span className="text-sm text-success font-medium">+$5.00</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Review Pending</p>
                  <p className="text-sm text-muted-foreground">Smart Fitness Watch</p>
                </div>
                <span className="text-sm text-muted-foreground">Pending</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Review Approved</p>
                  <p className="text-sm text-muted-foreground">Organic Skincare Set</p>
                </div>
                <span className="text-sm text-success font-medium">+$5.00</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-4">Badges & Achievements</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-primary/10 rounded-lg">
                <div className="text-3xl mb-2">🏆</div>
                <p className="font-medium text-center">Top Reviewer</p>
                <p className="text-xs text-muted-foreground text-center">20+ reviews</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-accent/10 rounded-lg">
                <div className="text-3xl mb-2">⭐</div>
                <p className="font-medium text-center">5-Star Expert</p>
                <p className="text-xs text-muted-foreground text-center">Quality feedback</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-success/10 rounded-lg">
                <div className="text-3xl mb-2">💰</div>
                <p className="font-medium text-center">Earner</p>
                <p className="text-xs text-muted-foreground text-center">$100+ earned</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-info/10 rounded-lg">
                <div className="text-3xl mb-2">🚀</div>
                <p className="font-medium text-center">Early Adopter</p>
                <p className="text-xs text-muted-foreground text-center">First 100 users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default CustomerDashboard;
