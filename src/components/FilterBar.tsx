import React from 'react';
import { SEGMENT_LABELS } from '../constants';
import { CollateralSegment } from '../types';

interface FilterBarProps {
  activeSegment: CollateralSegment | null;
  onSegmentChange: (segment: CollateralSegment | null) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeSegment, onSegmentChange }) => {
  const segments: (CollateralSegment | null)[] = [
    null,
    'demo',
    'client-relationship',
    'insights',
    'sales',
    'ai',
    'si',
    'shopper',
  ];

  const segmentColors: Record<CollateralSegment, string> = {
    'demo': 'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-900',
    'client-relationship': 'from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 text-emerald-900',
    'insights': 'from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 text-amber-900',
    'sales': 'from-rose-50 to-rose-100 hover:from-rose-100 hover:to-rose-200 text-rose-900',
    'ai': 'from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 text-purple-900',
    'si': 'from-sky-50 to-sky-100 hover:from-sky-100 hover:to-sky-200 text-sky-900',
    'shopper': 'from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 text-pink-900',
  };

  return (
    <div className="mb-12 flex flex-wrap gap-3 justify-center">
      {segments.map((segment) => (
        <button
          key={segment || 'all'}
          onClick={() => onSegmentChange(segment)}
          className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all transform ${
            segment === null
              ? activeSegment === null
                ? 'bg-brand-dark text-white shadow-md scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              : activeSegment === segment
              ? `bg-gradient-to-r ${segmentColors[segment]} shadow-md scale-105`
              : `bg-gradient-to-r ${segmentColors[segment]} opacity-60 hover:opacity-100`
          }`}
        >
          {segment === null ? 'All Segments' : SEGMENT_LABELS[segment]}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
