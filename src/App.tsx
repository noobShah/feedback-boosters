import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Customer Pages
import CustomerLogin from "./pages/customer/CustomerLogin";
import CustomerSignup from "./pages/customer/CustomerSignup";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import BrowseProducts from "./pages/customer/BrowseProducts";
import SubmitFeedback from "./pages/customer/SubmitFeedback";
import MyReviews from "./pages/customer/MyReviews";
import CustomerProfile from "./pages/customer/CustomerProfile";

// Business Pages
import BusinessLogin from "./pages/business/BusinessLogin";
import BusinessSignup from "./pages/business/BusinessSignup";
import BusinessDashboard from "./pages/business/BusinessDashboard";
import AddProduct from "./pages/business/AddProduct";
import AllProducts from "./pages/business/AllProducts";
import ProductInsights from "./pages/business/ProductInsights";
import BusinessProfile from "./pages/business/BusinessProfile";
import ViewProductFeedback from "./pages/business/ViewProductFeedback";

// Components
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          
          {/* Customer Routes */}
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/customer-signup" element={<CustomerSignup />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/customer/browse-products" element={<BrowseProducts />} />
          <Route path="/customer/submit-feedback" element={<SubmitFeedback />} />
          <Route path="/customer/my-reviews" element={<MyReviews />} />
          <Route path="/customer/profile" element={<CustomerProfile />} />
          
          {/* Business Routes */}
          <Route path="/business-login" element={<BusinessLogin />} />
          <Route path="/business-signup" element={<BusinessSignup />} />
          <Route path="/business/dashboard" element={<BusinessDashboard />} />
          <Route path="/business/add-product" element={<AddProduct />} />
          <Route path="/business/all-products" element={<AllProducts />} />
          <Route path="/business/product-feedback/:productId" element={<ViewProductFeedback />} />
          <Route path="/business/product-insights" element={<ProductInsights />} />
          <Route path="/business/profile" element={<BusinessProfile />} />
          
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
