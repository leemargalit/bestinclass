import React from 'react';
import { AwardCategory } from '../types';
import { DynamicIcon } from './Icons';
import { ChevronDown } from 'lucide-react';

interface AwardCardProps {
  category: AwardCategory;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const AwardCard: React.FC<AwardCardProps> = ({ category, onClick }) => {
  const isSpecial = category.colorTheme === 'orange' || category.colorTheme === 'gold';
  const isPurple = category.colorTheme === 'purple';

  // Base styles
  const cardBase = "relative group flex flex-col items-center justify-between p-6 rounded-xl transition-all duration-300 cursor-pointer border";
  
  // Theme variants
  let themeStyles = "bg-white border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5";
  let iconBg = "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white";
  let badgeColor = "text-blue-600";
  
  if (category.colorTheme === 'orange') {
    themeStyles = "bg-gradient-to-br from-orange-50 to-white border-orange-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-900/10";
    iconBg = "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white";
    badgeColor = "text-orange-600";
  } else if (category.colorTheme === 'purple') {
     themeStyles = "bg-gradient-to-br from-purple-50 to-white border-purple-200 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-900/10";
    iconBg = "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white";
    badgeColor = "text-purple-600";
  }

  return (
    <div 
      onClick={onClick}
      className={`${cardBase} ${themeStyles} h-full min-h-[220px]`}
    >
      {/* Decorative Diamond/Badge Shape Background for Icon */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={`w-20 h-20 rotate-45 border-4 border-white shadow-sm transition-colors duration-300 flex items-center justify-center ${iconBg}`}>
          <div className="-rotate-45">
             <DynamicIcon name={category.iconName} className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="mt-12 w-full text-center flex-grow flex flex-col items-center justify-center space-y-2">
        <h3 className="text-lg font-bold text-slate-800 leading-tight px-2">
          {category.title}
        </h3>
        
        {category.winner && (
          <p className="text-sm font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            Winner: {category.winner.name}
          </p>
        )}
      </div>

      <div className="mt-4">
        <button 
          className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${badgeColor} border-current group-hover:bg-current group-hover:text-white`}
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Special "Best of Best" Label if needed */}
      {isSpecial && (
        <div className="absolute top-2 right-2">
           <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
        </div>
      )}
    </div>
  );
};

export default AwardCard;