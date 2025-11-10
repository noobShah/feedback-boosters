import BusinessLayout from '@/components/layouts/BusinessLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MessageSquare, Eye } from 'lucide-react';
import { mockProducts } from '@/data/mockData';

const AllProducts = () => {
  return (
    <BusinessLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">All Products</h2>
            <p className="text-muted-foreground">Manage your product listings</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">Add New Product</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{product.category}</Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-primary">${product.price}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {product.feedbackCount} reviews
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  View Feedback
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </BusinessLayout>
  );
};

export default AllProducts;
