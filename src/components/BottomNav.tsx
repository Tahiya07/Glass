import React from 'react';
import { motion } from 'framer-motion';

export type Tab = 'home' | 'courses' | 'schedule' | 'profile';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  hiddenTabs?: string[];
}

const tabs: Array<{ id: Tab; label: string; icon: string }> = [
  { id: 'home', label: 'Home', icon: 'fa-house-chimney' },
  { id: 'courses', label: 'Courses', icon: 'fa-book-open' },
  { id: 'schedule', label: 'Schedule', icon: 'fa-calendar-days' },
  { id: 'profile', label: 'Profile', icon: 'fa-user-graduate' },
];

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, hiddenTabs = [] }) => {
  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 flex justify-center px-3 pointer-events-none safe-area-pb sm:bottom-4">
      <nav className="orion-glass-nav pointer-events-auto flex w-full max-w-max items-center gap-1 rounded-[1.7rem] border border-theme-border px-1.5 py-1.5 backdrop-blur-lg animate-slide-up sm:rounded-[2rem]">
        {tabs
          .filter((tab) => !hiddenTabs.includes(tab.id))
          .map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                whileHover={{ y: -2, scale: 1.035 }}
                whileTap={{ scale: 0.965 }}
                transition={{ type: 'spring', stiffness: 460, damping: 24, mass: 0.66 }}
                className={`relative z-10 flex items-center justify-center gap-1.5 rounded-[1.3rem] px-3 py-2 text-sm font-bold transition-colors duration-200 sm:px-4 sm:py-2.5 ${
                  isActive ? 'text-[#2f2a3f]' : 'text-theme-sub hover:bg-theme-element/70'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="dock-pill"
                    className="dock-pill brand-gradient-bg absolute inset-0 -z-10 rounded-[1.3rem]"
                    transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.8 }}
                  />
                )}
                <i className={`fas ${tab.icon} text-base sm:text-lg`}></i>
                {isActive && <span className="animate-fade-in text-xs sm:text-sm">{tab.label}</span>}
              </motion.button>
            );
          })}
      </nav>
    </div>
  );
};

export default React.memo(BottomNav);
