
import React from 'react';
import { motion } from 'framer-motion';
export type Tab = 'home' | 'courses' | 'schedule' | 'profile';


interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  hiddenTabs?: string[];
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, hiddenTabs = [] }) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center pointer-events-none safe-area-pb">
       <nav className="orion-glass-nav bg-surface/95 backdrop-blur-lg border border-theme-border p-1.5 rounded-[2rem] flex items-center gap-1 animate-slide-up pointer-events-auto transform translate-z-0">
         
         {!hiddenTabs.includes('home') && (
             <motion.button 
                onClick={() => onTabChange('home')}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                className={`group px-4 py-2.5 rounded-[1.5rem] font-bold transition-all duration-200 flex items-center justify-center ${activeTab === 'home' ? 'brand-gradient-bg text-[#2f2a3f] scale-105' : 'text-theme-sub hover:bg-theme-element/70'}`}
             >
                <i className="fas fa-house-chimney text-lg"></i>
                {activeTab === 'home' && <span className="animate-fade-in text-sm ml-1.5">Home</span>}
             </motion.button>
         )}

         {!hiddenTabs.includes('courses') && (
             <motion.button 
                onClick={() => onTabChange('courses')}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                className={`group px-4 py-2.5 rounded-[1.5rem] font-bold transition-all duration-200 flex items-center justify-center ${activeTab === 'courses' ? 'brand-gradient-bg text-[#2f2a3f] scale-105' : 'text-theme-sub hover:bg-theme-element/70'}`}
             >
                <i className="fas fa-book-open text-lg"></i>
                {activeTab === 'courses' && <span className="animate-fade-in text-sm ml-1.5">Courses</span>}
             </motion.button>
         )}

         {!hiddenTabs.includes('schedule') && (
             <motion.button 
                onClick={() => onTabChange('schedule')}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                className={`group px-4 py-2.5 rounded-[1.5rem] font-bold transition-all duration-200 flex items-center justify-center ${activeTab === 'schedule' ? 'brand-gradient-bg text-[#2f2a3f] scale-105' : 'text-theme-sub hover:bg-theme-element/70'}`}
             >
                <i className="fas fa-calendar-days text-lg"></i>
                {activeTab === 'schedule' && <span className="animate-fade-in text-sm ml-1.5">Schedule</span>}
             </motion.button>
         )}

         <motion.button 
            onClick={() => onTabChange('profile')}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 26 }}
            className={`px-4 py-2.5 rounded-[1.5rem] font-bold transition-all duration-200 flex items-center gap-2 ${activeTab === 'profile' ? 'brand-gradient-bg text-[#2f2a3f] scale-105' : 'text-theme-sub hover:bg-theme-element/70'}`}
         >
            <i className="fas fa-user-graduate text-lg"></i>
            {activeTab === 'profile' && <span className="animate-fade-in text-sm ml-1.5">Profile</span>}
         </motion.button>
      </nav>
    </div>
  );
};

export default React.memo(BottomNav);
