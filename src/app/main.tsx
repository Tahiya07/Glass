import React from 'react';
import BottomNav from '../components/BottomNav';
export type Tab = 'android' | 'pc' | 'tv' | 'about' | 'updates';


const App: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<Tab>('android');

  return (
    <div className="min-h-screen bg-surface text-theme-text">
      <main className="mx-auto max-w-2xl px-6 pt-10 pb-28">
        <h1 className="text-2xl font-bold">Orion Navbar Preview</h1>
        <p className="mt-3 text-theme-sub">
          Click navbar items to preview active state transitions.
        </p>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
