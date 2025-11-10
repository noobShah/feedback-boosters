import CustomerLayout from '@/components/layouts/CustomerLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Upload } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mockProducts } from '@/data/mockData';

const SubmitFeedback = () => {
  const location = useLocation();
  const incomingState = (location.state || {}) as { productId?: string };

  const [rating, setRating] = useState([5]);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(incomingState.productId);

  return (
    <CustomerLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Submit Product Feedback</h2>
          <p className="text-muted-foreground">Share your honest opinion and earn rewards</p>
        </div>

        <Card className="p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="product">Select Product</Label>
              <Select value={selectedProduct} onValueChange={(val) => setSelectedProduct(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a product you've tried" />
                </SelectTrigger>
                <SelectContent>
                  {mockProducts.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Rating: {rating[0]} / 5</Label>
              <Slider
                value={rating}
                onValueChange={setRating}
                min={1}
                max={5}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">Your Feedback</Label>
              <Textarea
                id="feedback"
                placeholder="Share your detailed experience with this product..."
                rows={6}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Detailed, honest feedback helps businesses improve and earns you better rewards.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Upload Photos (Optional)</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Click to upload product photos
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Submit Feedback
              </Button>
              <Button type="button" variant="outline">
                Save as Draft
              </Button>
            </div>
          </form>
        </Card>

        <Card className="p-6 bg-primary/5 border-l-4 border-l-primary">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            💡 Tips for Quality Reviews
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Be specific about features you liked or disliked</li>
            <li>• Include photos showing the product in use</li>
            <li>• Mention how it compares to similar products</li>
            <li>• Quality reviews earn up to ₹850 in rewards!</li>
          </ul>
        </Card>
      </div>
    </CustomerLayout>
  );
};

export default SubmitFeedback;
