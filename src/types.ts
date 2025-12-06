import { LucideIcon } from 'lucide-react';

export interface CollateralLink {
  label: string;
  url: string;
}

export interface WinnerDetails {
  name: string;
  role?: string;
  avatarUrl?: string; // Optional URL for winner's photo
  links: CollateralLink[];
  descriptionPoints: string[];
}

export type CollateralSegment =
  | 'demo'
  | 'client-relationship'
  | 'insights'
  | 'sales'
  | 'ai'
  | 'si'
  | 'shopper';

export interface AwardCategory {
  id: string;
  title: string;
  iconName: 'Trophy' | 'Mic' | 'Presentation' | 'Zap' | 'Users' | 'Target' | 'Crown' | 'BarChart' | 'Search';
  colorTheme: 'blue' | 'purple' | 'orange' | 'gold';
  segments: CollateralSegment[];
  winner?: WinnerDetails;
  runnerUp?: WinnerDetails;
}

export interface QuarterData {
  id: string;
  label: string;
  isActive: boolean;
  categories: AwardCategory[];
}