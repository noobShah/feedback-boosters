export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
  feedbackCount: number;
  rating: number;
}

export interface Review {
  id: string;
  productId: string;
  productName: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  status: 'approved' | 'pending' | 'rejected';
  earnings: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    price: 11049,
    description: 'Premium wireless headphones with noise cancellation',
    feedbackCount: 145,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    price: 16999,
    description: 'Track your health and fitness goals',
    feedbackCount: 89,
    rating: 4.2,
  },
  {
    id: '3',
    name: 'Organic Skincare Set',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    price: 6799,
    description: 'Natural and organic skincare products',
    feedbackCount: 203,
    rating: 4.8,
  },
  {
    id: '4',
    name: 'Gaming Mouse RGB',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    price: 4249,
    description: 'High-precision gaming mouse with customizable RGB',
    feedbackCount: 67,
    rating: 4.3,
  },
  {
    id: '5',
    name: 'Portable Coffee Maker',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
    price: 7649,
    description: 'Make coffee anywhere, anytime',
    feedbackCount: 124,
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Yoga Mat Premium',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    price: 3399,
    description: 'Non-slip premium yoga mat',
    feedbackCount: 178,
    rating: 4.7,
  },
];

export const mockReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    productName: 'Wireless Headphones Pro',
    customerName: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing sound quality and comfortable to wear for long periods.',
    date: '2024-03-15',
    status: 'approved',
    earnings: 425,
  },
  {
    id: '2',
    productId: '2',
    productName: 'Smart Fitness Watch',
    customerName: 'Mike Chen',
    rating: 4,
    comment: 'Great features but battery life could be better.',
    date: '2024-03-14',
    status: 'pending',
    earnings: 0,
  },
  {
    id: '3',
    productId: '3',
    productName: 'Organic Skincare Set',
    customerName: 'Emily Davis',
    rating: 5,
    comment: 'Love these products! My skin feels amazing.',
    date: '2024-03-13',
    status: 'approved',
    earnings: 425,
  },
];

export const mockInsights = {
  totalFeedback: 856,
  averageRating: 4.5,
  topReviewer: 'Sarah Johnson',
  sentiment: {
    positive: 72,
    neutral: 20,
    negative: 8,
  },
  ratingDistribution: [
    { rating: 5, count: 420 },
    { rating: 4, count: 280 },
    { rating: 3, count: 100 },
    { rating: 2, count: 40 },
    { rating: 1, count: 16 },
  ],
};
