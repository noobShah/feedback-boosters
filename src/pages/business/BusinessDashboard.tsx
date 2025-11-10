import BusinessLayout from '@/components/layouts/BusinessLayout';
import StatCard from '@/components/StatCard';
import { MessageSquare, Package, TrendingUp, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { mockInsights } from '@/data/mockData';

const BusinessDashboard = () => {
  const ratingData = mockInsights.ratingDistribution.map(item => ({
    name: `${item.rating} Star`,
    value: item.count,
  }));

  const sentimentData = [
    { name: 'Positive', value: mockInsights.sentiment.positive, color: 'hsl(var(--success))' },
    { name: 'Neutral', value: mockInsights.sentiment.neutral, color: 'hsl(var(--warning))' },
    { name: 'Negative', value: mockInsights.sentiment.negative, color: 'hsl(var(--danger))' },
  ];

  return (
    <BusinessLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Business Analytics</h2>
          <p className="text-muted-foreground">Track your product feedback and insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Feedback"
            value={mockInsights.totalFeedback}
            icon={MessageSquare}
            trend="+12% from last month"
            accentColor="primary"
          />
          <StatCard
            title="Products Listed"
            value={6}
            icon={Package}
            trend="2 active campaigns"
            accentColor="accent"
          />
          <StatCard
            title="Avg Rating"
            value={mockInsights.averageRating}
            icon={TrendingUp}
            trend="+0.3 this month"
            accentColor="success"
          />
          <StatCard
            title="Top Reviewer"
            value={mockInsights.topReviewer}
            icon={Users}
            trend="Most engaged"
            accentColor="info"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Rating Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ratingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Sentiment Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Feedback Highlights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-success/10 rounded-lg border-l-4 border-l-success">
              <p className="font-medium mb-1">Wireless Headphones Pro</p>
              <p className="text-sm text-muted-foreground italic">
                "Amazing sound quality and comfortable to wear for long periods."
              </p>
              <p className="text-xs text-muted-foreground mt-2">⭐⭐⭐⭐⭐ - Sarah Johnson</p>
            </div>
            <div className="p-4 bg-warning/10 rounded-lg border-l-4 border-l-warning">
              <p className="font-medium mb-1">Smart Fitness Watch</p>
              <p className="text-sm text-muted-foreground italic">
                "Great features but battery life could be better."
              </p>
              <p className="text-xs text-muted-foreground mt-2">⭐⭐⭐⭐ - Mike Chen</p>
            </div>
          </div>
        </Card>
      </div>
    </BusinessLayout>
  );
};

export default BusinessDashboard;
