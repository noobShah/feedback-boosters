import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  accentColor?: 'primary' | 'accent' | 'success' | 'warning' | 'info';
}

const StatCard = ({ title, value, icon: Icon, trend, accentColor = 'primary' }: StatCardProps) => {
  return (
    <Card className={`p-6 border-l-4 ${
      accentColor === 'primary' ? 'border-l-primary' :
      accentColor === 'accent' ? 'border-l-accent' :
      accentColor === 'success' ? 'border-l-success' :
      accentColor === 'warning' ? 'border-l-warning' :
      'border-l-info'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold text-foreground mt-2">{value}</h3>
          {trend && (
            <p className="text-xs text-muted-foreground mt-2">{trend}</p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${
          accentColor === 'primary' ? 'bg-primary/10' :
          accentColor === 'accent' ? 'bg-accent/10' :
          accentColor === 'success' ? 'bg-success/10' :
          accentColor === 'warning' ? 'bg-warning/10' :
          'bg-info/10'
        }`}>
          <Icon className={`w-6 h-6 ${
            accentColor === 'primary' ? 'text-primary' :
            accentColor === 'accent' ? 'text-accent' :
            accentColor === 'success' ? 'text-success' :
            accentColor === 'warning' ? 'text-warning' :
            'text-info'
          }`} />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
