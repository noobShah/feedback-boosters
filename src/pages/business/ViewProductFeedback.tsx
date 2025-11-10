import { useParams, Link } from 'react-router-dom';
import BusinessLayout from '@/components/layouts/BusinessLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Star, TrendingUp, TrendingDown, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';
import { mockProducts } from '@/data/mockData';

const ViewProductFeedback = () => {
  const { productId } = useParams();
  const product = mockProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <BusinessLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/business/all-products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </BusinessLayout>
    );
  }

  // Generate dummy feedback data based on product
  const feedbackData = [
    {
      id: '1',
      customerName: 'Priya Sharma',
      rating: 5,
      date: '2024-03-20',
      comment: 'Absolutely love this product! The quality exceeded my expectations. Worth every rupee spent.',
      sentiment: 'positive',
      verified: true,
    },
    {
      id: '2',
      customerName: 'Rahul Kumar',
      rating: 4,
      date: '2024-03-19',
      comment: 'Great product overall. Delivery was quick and packaging was good. Would recommend to others.',
      sentiment: 'positive',
      verified: true,
    },
    {
      id: '3',
      customerName: 'Anjali Patel',
      rating: 5,
      date: '2024-03-18',
      comment: 'Best purchase I made this month! The features are exactly as described. Very satisfied.',
      sentiment: 'positive',
      verified: false,
    },
    {
      id: '4',
      customerName: 'Vikram Singh',
      rating: 3,
      date: '2024-03-17',
      comment: 'Product is decent but I expected better quality for this price range. Could be improved.',
      sentiment: 'neutral',
      verified: true,
    },
    {
      id: '5',
      customerName: 'Meera Reddy',
      rating: 4,
      date: '2024-03-16',
      comment: 'Good value for money. Minor issues with packaging but product quality is excellent.',
      sentiment: 'positive',
      verified: true,
    },
    {
      id: '6',
      customerName: 'Arjun Gupta',
      rating: 5,
      date: '2024-03-15',
      comment: 'Outstanding! Exactly what I was looking for. Will definitely purchase again.',
      sentiment: 'positive',
      verified: true,
    },
  ];

  const ratingDistribution = [
    { stars: 5, count: 98, percentage: 68 },
    { stars: 4, count: 32, percentage: 22 },
    { stars: 3, count: 10, percentage: 7 },
    { stars: 2, count: 3, percentage: 2 },
    { stars: 1, count: 2, percentage: 1 },
  ];

  const sentimentStats = {
    positive: 82,
    neutral: 15,
    negative: 3,
  };

  return (
    <BusinessLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/business/all-products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Products
            </Link>
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Average Rating</span>
              <Star className="w-5 h-5 text-accent" />
            </div>
            <p className="text-3xl font-bold">{product.rating}</p>
            <p className="text-xs text-muted-foreground">{product.feedbackCount} reviews</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Positive Feedback</span>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <p className="text-3xl font-bold text-success">{sentimentStats.positive}%</p>
            <p className="text-xs text-muted-foreground">Customers satisfied</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Reviews</span>
              <MessageSquare className="w-5 h-5 text-info" />
            </div>
            <p className="text-3xl font-bold">{product.feedbackCount}</p>
            <p className="text-xs text-muted-foreground">All time</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Price</span>
              <span className="text-sm font-semibold text-primary">{product.category}</span>
            </div>
            <p className="text-3xl font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
            <p className="text-xs text-muted-foreground">Current price</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Rating Distribution */}
          <Card className="p-6 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Rating Distribution</h3>
            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12">
                    <span className="text-sm font-medium">{item.stars}</span>
                    <Star className="w-3 h-3 fill-accent text-accent" />
                  </div>
                  <Progress value={item.percentage} className="flex-1 h-2" />
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-semibold mb-3">Sentiment Analysis</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-success" />
                    <span className="text-sm">Positive</span>
                  </div>
                  <span className="text-sm font-semibold text-success">{sentimentStats.positive}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-warning" />
                    <span className="text-sm">Neutral</span>
                  </div>
                  <span className="text-sm font-semibold text-warning">{sentimentStats.neutral}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4 text-danger" />
                    <span className="text-sm">Negative</span>
                  </div>
                  <span className="text-sm font-semibold text-danger">{sentimentStats.negative}%</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Customer Feedback */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Customer Feedback</h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {feedbackData.map((feedback) => (
                <Card key={feedback.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold">{feedback.customerName}</p>
                        {feedback.verified && (
                          <Badge variant="outline" className="text-xs">
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < feedback.rating
                                  ? 'fill-accent text-accent'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(feedback.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        feedback.sentiment === 'positive'
                          ? 'default'
                          : feedback.sentiment === 'neutral'
                          ? 'secondary'
                          : 'destructive'
                      }
                      className="text-xs"
                    >
                      {feedback.sentiment}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feedback.comment}
                  </p>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default ViewProductFeedback;
