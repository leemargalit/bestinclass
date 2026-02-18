import React, { useState, useMemo } from 'react';
import { QUARTER_DATA, APP_CONFIG } from './constants';
import { AwardCategory, CollateralSegment } from './types';
import AwardCard from './components/AwardCard';
import WinnerModal from './components/WinnerModal';
import FilterBar from './components/FilterBar';
import { Trophy, Calendar, Search } from 'lucide-react';

const App: React.FC = () => {
  const [activeQuarterId, setActiveQuarterId] = useState<string>(
    QUARTER_DATA.find(q => q.isActive)?.id || QUARTER_DATA[0].id
  );
  const [selectedCategory, setSelectedCategory] = useState<AwardCategory | null>(null);
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);
  const [activeSegment, setActiveSegment] = useState<CollateralSegment | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeQuarter = QUARTER_DATA.find(q => q.id === activeQuarterId) || QUARTER_DATA[0];

  const filteredCategories = useMemo(() => {
    let categories = activeQuarter.categories;

    if (activeSegment) {
      categories = categories.filter(cat => cat.segments.includes(activeSegment));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      categories = categories.filter(cat =>
        cat.title.toLowerCase().includes(query) ||
        cat.winner?.name.toLowerCase().includes(query) ||
        cat.runnerUp?.name.toLowerCase().includes(query)
      );
    }

    return categories;
  }, [activeQuarter.categories, activeSegment, searchQuery]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      
      {/* Hero Section */}
      <header className="relative bg-brand-dark overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-gold border border-brand-gold/30 backdrop-blur-sm mb-6">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wider uppercase">Internal Only</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm">
            BEST IN CLASS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-purple">2025</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            A centralized hub of leadership-validated excellence - setting global standards, accelerating onboarding, and celebrating top performance across Similarweb.
          </p>

          <a
            href={APP_CONFIG.submissionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-lg shadow-xl shadow-orange-900/20 transition-all transform hover:-translate-y-1"
          >
            Q1 2026 Submission Form
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full -mt-8 relative z-10">

        {/* Segment Filter Bar */}
        <FilterBar
          activeSegment={activeSegment}
          onSegmentChange={setActiveSegment}
        />

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by category or winner name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-xl shadow-lg border border-slate-200">
            {QUARTER_DATA.map((quarter) => (
              <button
                key={quarter.id}
                onClick={() => setActiveQuarterId(quarter.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeQuarterId === quarter.id
                    ? 'bg-brand-dark text-white shadow-md'
                    : 'text-slate-500 hover:text-brand-dark hover:bg-slate-50'
                }`}
              >
                <Calendar className="w-4 h-4" />
                {quarter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-brand-primary uppercase tracking-widest mb-2">
            {activeQuarter.label} Winners
          </h2>
          <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 pb-20">
          {filteredCategories.map((category) => (
            <AwardCard
              key={category.id}
              category={category}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setClickPosition({ x: rect.left, y: rect.top });
                setSelectedCategory(category);
              }}
            />
          ))}
          
          {/* Static "Best of the Best" CTA Card - Only visible for Q4 2025 */}
          {activeQuarter.id === 'q4-2025' && (
            <div className="relative group flex flex-col items-center justify-center p-8 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl min-h-[220px]">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Trophy className="w-24 h-24 rotate-12" />
               </div>
               <h3 className="text-3xl font-extrabold text-center mb-2">2025</h3>
               <p className="text-xl font-bold text-center uppercase tracking-wider mb-4">Best of<br/>the Best</p>
               <div className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                  Coming Soon
               </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; 2025 The Hub. All rights reserved.</p>
        </div>
      </footer>

      {/* Modal Overlay */}
      <WinnerModal
        category={selectedCategory}
        clickPosition={clickPosition}
        onClose={() => {
          setSelectedCategory(null);
          setClickPosition(null);
        }}
      />
    </div>
  );
};

export default App;