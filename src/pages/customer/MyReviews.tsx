import CustomerLayout from '@/components/layouts/CustomerLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockReviews } from '@/data/mockData';
import { Star } from 'lucide-react';

const MyReviews = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-success text-success-foreground';
      case 'pending':
        return 'bg-warning text-warning-foreground';
      case 'rejected':
        return 'bg-danger text-danger-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <CustomerLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">My Reviews</h2>
          <p className="text-muted-foreground">Track all your submitted product reviews</p>
        </div>

        <div className="space-y-4">
          {mockReviews.map((review) => (
            <Card key={review.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{review.productName}</h3>
                    <Badge className={getStatusColor(review.status)}>
                      {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-accent text-accent'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {review.comment}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Earnings</p>
                  <p className={`text-2xl font-bold ${
                    review.earnings > 0 ? 'text-success' : 'text-muted-foreground'
                  }`}>
                    ${review.earnings.toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </CustomerLayout>
  );
};

export default MyReviews;
