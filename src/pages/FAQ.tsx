import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How does Try N Sell work?",
      answer: "Try N Sell connects consumers with businesses through authentic product reviews. Customers can browse products, submit detailed feedback, and earn rewards. Businesses gain valuable insights from real users to improve their products and services."
    },
    {
      question: "How do I earn rewards as a customer?",
      answer: "Simply sign up as a customer, browse available products, and submit your honest reviews. Once your review is approved by the business, you'll earn rewards that can be redeemed for various benefits and incentives."
    },
    {
      question: "What types of products can I review?",
      answer: "You can review a wide variety of products across different categories including electronics, fashion, home goods, beauty products, and more. New products are added regularly by our business partners."
    },
    {
      question: "How long does it take for my review to be approved?",
      answer: "Most reviews are reviewed within 24-48 hours. You'll receive a notification once your review has been approved and your rewards have been credited to your account."
    },
    {
      question: "Can businesses respond to reviews?",
      answer: "Yes! Businesses can view all reviews, respond to feedback, and engage with customers directly through the platform. This creates a two-way dialogue that benefits both parties."
    },
    {
      question: "Is my feedback confidential?",
      answer: "Your detailed feedback is shared with businesses to help them improve. However, you control what information is made public. Business-facing insights remain confidential unless you choose to make them public."
    },
    {
      question: "How do businesses benefit from Try N Sell?",
      answer: "Businesses get access to detailed product insights, sentiment analysis, and authentic customer feedback. This helps them identify strengths, address weaknesses, and make data-driven decisions to improve their products."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods. Business subscriptions can be managed through your dashboard with automatic billing options available."
    },
    {
      question: "Can I delete my account?",
      answer: "Yes, you can delete your account at any time from your profile settings. Please note that this action is permanent and will remove all your data, reviews, and rewards from the platform."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team through the Contact page, email us directly, or use the in-app chat support available in your dashboard. We typically respond within 24 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/5 to-info/10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-info text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-in">
            Find answers to common questions about Try N Sell
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-l-primary animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:text-primary hover:no-underline py-6">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you get the most out of Try N Sell
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-primary to-info text-white font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
