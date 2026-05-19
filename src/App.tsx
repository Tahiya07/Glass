import React from 'react';
import BottomNav from './components/BottomNav';
import type { Tab } from './components/BottomNav';
import StudentDashboard from './components/StudentDashboard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<Tab>('android');

  const sectionTitle: Record<Tab, string> = {
    android: 'Study Hub',
    pc: 'Desktop Lab',
    tv: 'Lecture Cast',
    about: 'Developer Notes',
    updates: 'Updates',
  };

  return (
    <div className="dashboard-grid relative min-h-screen overflow-x-hidden bg-surface text-theme-text">
      <div className="dashboard-bg">
        <div className="dashboard-orb dashboard-orb-a" />
        <div className="dashboard-orb dashboard-orb-b" />
      </div>
      <main>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-5 md:px-8">
          <div className="glass-surface rounded-2xl border border-theme-border/60 bg-card/60 px-4 py-3 backdrop-blur-xl shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-theme-sub">Active Module</p>
            <h2 className="mt-1 text-lg font-black text-theme-text">{sectionTitle[activeTab]}</h2>
          </div>
        </div>
        <StudentDashboard />
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
