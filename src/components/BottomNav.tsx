import React from 'react';

export type Tab = 'home' | 'courses' | 'schedule' | 'profile';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  hiddenTabs?: string[];
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, hiddenTabs = [] }) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center pointer-events-none safe-area-pb">
      <nav className="bg-surface/95 backdrop-blur-lg border border-white/40 dark:border-white/20 p-1.5 rounded-[2rem] flex items-center gap-1 animate-slide-up pointer-events-auto transform translate-z-0">
        {!hiddenTabs.includes('home') && (
          <button
            onClick={() => onTabChange('home')}
            className={`group px-4 py-2.5 rounded-[1.5rem] font-bold transition-all duration-200 flex items-center justify-center ${
              activeTab === 'home'
                ? 'bg-[linear-gradient(108.4deg,rgba(220,194,255,1)_6.9%,rgba(185,223,248,1)_86.5%)] text-[#1f2331] scale-105'
                : 'text-theme-sub hover:bg-theme-element'
            }`}
          >
            <i className="fas fa-house-chimney text-lg"></i>
            {activeTab === 'home' && <span className="animate-fade-in text-sm ml-1.5">Home</span>}
          </button>
        )}

        {!hiddenTabs.includes('courses') && (
          <button
            onClick={() => onTabChange('courses')}
            className={`group px-4 py-2.5 rounded-[1.5rem] font-bold transition-all duration-200 flex items-center justify-center ${
              activeTab === 'courses'
                ? 'bg-[linear-gradient(108.4deg,rgba(220,194,255,1)_6.9%,rgba(185,223,248,1)_86.5%)] text-[#1f2331] scale-105'
                : 'text-theme-sub hover:bg-theme-element'
            }`}
          >
            <i className="fas fa-book-open text-lg"></i>
            {activeTab === 'courses' && <span className="animate-fade-in text-sm ml-1.5">Courses</span>}
          </button>
        )}

        {!hiddenTabs.includes('schedule') && (
          <button
            onClick={() => onTabChange('schedule')}
            className={`group px-4 py-2.5 rounded-[1.5rem] font-bold transition-all duration-200 flex items-center justify-center ${
              activeTab === 'schedule'
                ? 'bg-[linear-gradient(108.4deg,rgba(220,194,255,1)_6.9%,rgba(185,223,248,1)_86.5%)] text-[#1f2331] scale-105'
                : 'text-theme-sub hover:bg-theme-element'
            }`}
          >
            <i className="fas fa-calendar-days text-lg"></i>
            {activeTab === 'schedule' && <span className="animate-fade-in text-sm ml-1.5">Schedule</span>}
          </button>
        )}

        <button
          onClick={() => onTabChange('profile')}
          className={`px-4 py-2.5 rounded-[1.5rem] font-bold transition-all duration-200 flex items-center gap-2 ${
            activeTab === 'profile'
              ? 'bg-[linear-gradient(108.4deg,rgba(220,194,255,1)_6.9%,rgba(185,223,248,1)_86.5%)] text-[#1f2331] scale-105'
              : 'text-theme-sub hover:bg-theme-element'
          }`}
        >
          <i className="fas fa-user-graduate text-lg"></i>
          {activeTab === 'profile' && <span className="animate-fade-in text-sm ml-1.5">Profile</span>}
        </button>
      </nav>
    </div>
  );
};

export default React.memo(BottomNav);