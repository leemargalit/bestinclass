import React, { useEffect, useState } from 'react';
import { AwardCategory } from '../types';
import { DynamicIcon } from './Icons';
import { X, ExternalLink, Award } from 'lucide-react';

interface WinnerModalProps {
  category: AwardCategory | null;
  clickPosition: { x: number; y: number } | null;
  onClose: () => void;
}

const WinnerModal: React.FC<WinnerModalProps> = ({ category, clickPosition, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (category) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [category]);

  if (!category) return null;

  const { winner } = category;

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 flex items-center justify-center ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className={`relative bg-white w-96 max-h-[85vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-dark to-blue-900 p-8 text-white flex-shrink-0">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start space-x-6 relative z-10">
            <div className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${category.colorTheme === 'orange' ? 'bg-orange-500' : 'bg-blue-500'}`}>
              <DynamicIcon name={category.iconName} className="w-10 h-10 text-white" />
            </div>
            
            <div className="flex-grow">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wide uppercase mb-2">
                {category.title}
              </div>
              <h2 className="text-3xl font-bold mb-1">{winner?.name || 'Winner TBD'}</h2>
              {winner?.role && <p className="text-blue-200 text-lg">{winner.role}</p>}
            </div>
          </div>
        </div>

        {/* Body - Scrollable */}
        <div className="flex-1 p-8 overflow-y-auto overflow-x-hidden">
          <div className="prose prose-slate max-w-none">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-4">
               Why is it the <span className="text-brand-accent italic">BEST</span>?
            </h3>

            {winner ? (
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <ul className="space-y-4">
                  {winner.descriptionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start text-slate-600">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-slate-500 italic">Details coming soon...</p>
            )}

            {/* Winner Links Section */}
            {winner && winner.links && winner.links.length > 0 && (
               <div className="mt-6">
                 <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                   Winner's Collateral
                 </h4>
                 <div className="grid gap-3 sm:grid-cols-2">
                   {winner.links.map((link, idx) => (
                     <a 
                       key={idx}
                       href={link.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-lg text-blue-700 font-medium transition-colors group"
                     >
                       <span className="truncate mr-2">{link.label}</span>
                       <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 flex-shrink-0" />
                     </a>
                   ))}
                 </div>
               </div>
            )}

            {/* Runner Up Section */}
            {category.runnerUp && (
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                  <Award className="w-4 h-4 text-slate-400" />
                  Runner Up
                </h4>
                <div className="bg-gradient-to-r from-slate-50 to-white rounded-lg p-4 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-bold text-slate-800 text-lg">{category.runnerUp.name}</p>
                      {category.runnerUp.role && <p className="text-sm text-slate-500">{category.runnerUp.role}</p>}
                    </div>
                  </div>
                  
                  {category.runnerUp.links && category.runnerUp.links.length > 0 && (
                    <div className="flex flex-col gap-2">
                       {category.runnerUp.links.map((link, idx) => (
                         <a 
                           key={idx}
                           href={link.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 text-sm text-brand-primary hover:text-brand-dark hover:underline"
                         >
                           <ExternalLink className="w-3 h-3" />
                           <span>{link.label}</span>
                         </a>
                       ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-slate-100 text-right">
              <div className="text-xs text-slate-400">
                Category ID: <span className="font-mono text-slate-500">{category.id.toUpperCase()}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;