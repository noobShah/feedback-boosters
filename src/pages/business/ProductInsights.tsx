import BusinessLayout from '@/components/layouts/BusinessLayout';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { mockProducts, mockInsights } from '@/data/mockData';

const ProductInsights = () => {
  const ratingTrendData = [
    { month: 'Jan', rating: 4.2 },
    { month: 'Feb', rating: 4.3 },
    { month: 'Mar', rating: 4.5 },
    { month: 'Apr', rating: 4.4 },
    { month: 'May', rating: 4.6 },
    { month: 'Jun', rating: 4.5 },
  ];

  const categoryPerformance = [
    { category: 'Electronics', avgRating: 4.3, reviews: 356 },
    { category: 'Beauty', avgRating: 4.8, reviews: 203 },
    { category: 'Fitness', avgRating: 4.6, reviews: 178 },
    { category: 'Kitchen', avgRating: 4.5, reviews: 124 },
  ];

  return (
    <BusinessLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Product Insights</h2>
            <p className="text-muted-foreground">Detailed analytics and feedback trends</p>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              {mockProducts.map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Total Feedback</p>
            <p className="text-3xl font-bold text-primary">{mockInsights.totalFeedback}</p>
            <p className="text-xs text-success mt-1">↑ 12% from last month</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Average Rating</p>
            <p className="text-3xl font-bold text-accent">{mockInsights.averageRating}</p>
            <p className="text-xs text-success mt-1">↑ 0.3 improvement</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Response Rate</p>
            <p className="text-3xl font-bold text-success">94%</p>
            <p className="text-xs text-muted-foreground mt-1">Within 24 hours</p>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Rating Trend Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ratingTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis domain={[0, 5]} stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="rating" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Average Rating"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Category Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="avgRating" fill="hsl(var(--primary))" name="Avg Rating" radius={[8, 8, 0, 0]} />
              <Bar dataKey="reviews" fill="hsl(var(--accent))" name="Total Reviews" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top Performing Products</h3>
            <div className="space-y-3">
              {mockProducts.slice(0, 3).map((product, index) => (
                <div key={product.id} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full font-bold text-primary">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.feedbackCount} reviews</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-accent">{product.rating}</p>
                    <p className="text-xs text-muted-foreground">rating</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Common Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {['Quality', 'Comfortable', 'Value', 'Durable', 'Innovative', 'Easy to use', 'Worth it', 'Excellent'].map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default ProductInsights;
