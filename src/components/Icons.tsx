import React from 'react';
import { Trophy, Mic, Presentation, Zap, Users, Target, Crown, BarChart, Search, Star } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'Trophy': return <Trophy className={className} />;
    case 'Mic': return <Mic className={className} />;
    case 'Presentation': return <Presentation className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Target': return <Target className={className} />;
    case 'Crown': return <Crown className={className} />;
    case 'BarChart': return <BarChart className={className} />;
    case 'Search': return <Search className={className} />;
    default: return <Star className={className} />;
  }
};