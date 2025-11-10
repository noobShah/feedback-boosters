import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Package, BarChart3, Building2, Bell, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface BusinessLayoutProps {
  children: ReactNode;
}

const BusinessLayout = ({ children }: BusinessLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { path: '/business/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/business/add-product', icon: PlusCircle, label: 'Add Product' },
    { path: '/business/all-products', icon: Package, label: 'All Products' },
    { path: '/business/product-insights', icon: BarChart3, label: 'Product Insights' },
    { path: '/business/profile', icon: Building2, label: 'Profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <Link to="/" className="text-2xl font-bold">Try N Sell</Link>
          <p className="text-sm text-primary-foreground/80 mt-1">Business Portal</p>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
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
          <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-sidebar-primary">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-foreground">
            {navItems.find(item => isActive(item.path))?.label || 'Business Dashboard'}
          </h1>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-accent text-accent-foreground">BZ</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default BusinessLayout;
