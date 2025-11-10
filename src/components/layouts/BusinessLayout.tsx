import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Package, BarChart3, Building2, Bell, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/useAuth';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface BusinessLayoutProps {
  children: ReactNode;
}

const BusinessLayout = ({ children }: BusinessLayoutProps) => {
  const location = useLocation();
  const { signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/business/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/business/add-product', icon: PlusCircle, label: 'Add Product' },
    { path: '/business/all-products', icon: Package, label: 'All Products' },
    { path: '/business/product-insights', icon: BarChart3, label: 'Product Insights' },
    { path: '/business/profile', icon: Building2, label: 'Profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const NavContent = () => (
    <>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-accent text-accent-foreground'
                      : 'hover:bg-sidebar-primary'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-primary-foreground hover:bg-sidebar-primary"
          onClick={() => {
            signOut();
            setMobileMenuOpen(false);
          }}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-primary text-primary-foreground flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <Link to="/" className="text-2xl font-bold">Try N Sell</Link>
          <p className="text-sm text-primary-foreground/80 mt-1">Business Portal</p>
        </div>
        
        <NavContent />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6">
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-primary text-primary-foreground p-0">
              <div className="p-6 border-b border-sidebar-border">
                <Link to="/" className="text-2xl font-bold">Try N Sell</Link>
                <p className="text-sm text-primary-foreground/80 mt-1">Business Portal</p>
              </div>
              <NavContent />
            </SheetContent>
          </Sheet>
          

          <h1 className="text-base lg:text-xl font-semibold text-foreground truncate">
            {navItems.find(item => isActive(item.path))?.label || 'Business Dashboard'}
          </h1>
          
          <div className="flex items-center gap-2 lg:gap-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar className="w-8 h-8 lg:w-10 lg:h-10">
              <AvatarFallback className="bg-accent text-accent-foreground text-sm">BZ</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default BusinessLayout;
