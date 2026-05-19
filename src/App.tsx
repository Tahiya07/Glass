import React from 'react';
import { motion } from 'framer-motion';
import BottomNav from './components/BottomNav';
import type { Tab } from './components/BottomNav';
import StudentDashboard from './components/StudentDashboard';
import { CoursesPage, ProfilePage, SchedulePage } from './components/StudentPages';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<Tab>('home');
  const { theme, cycleTheme } = useTheme();

  const sectionTitle: Record<Tab, string> = {
    home: 'Study Hub',
    courses: 'Course Library',
    schedule: 'Today Timeline',
    profile: 'Student Profile',
  };

  const themeIcon = theme === 'light' ? 'fa-moon' : 'fa-sun';

  const renderTabPage = () => {
    if (activeTab === 'courses') {
      return <CoursesPage />;
    }
    if (activeTab === 'schedule') {
      return <SchedulePage />;
    }
    if (activeTab === 'profile') {
      return <ProfilePage />;
    }
    return <StudentDashboard />;
  };

  return (
    <div className="dashboard-grid relative min-h-screen overflow-x-hidden bg-surface text-theme-text">
      <div className="dashboard-bg">
        <div className="dashboard-orb dashboard-orb-a" />
        <div className="dashboard-orb dashboard-orb-b" />
      </div>
      <main>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-5 md:px-8">
          <div className="glass-surface orion-glass-card rounded-2xl border border-theme-border/60 bg-card/60 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-sub">Active Module</p>
                <h2 className="mt-1 text-lg font-black text-theme-text">{sectionTitle[activeTab]}</h2>
              </div>
              <motion.button
                onClick={cycleTheme}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 360, damping: 24 }}
                className="h-10 w-10 rounded-full border border-theme-border/60 bg-theme-element/80 text-theme-sub hover:text-theme-text"
                title={`Theme: ${theme}`}
                aria-label={`Cycle theme (current ${theme})`}
              >
                <i className={`fas ${themeIcon}`}></i>
              </motion.button>
            </div>
          </div>
        </div>
        {renderTabPage()}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
