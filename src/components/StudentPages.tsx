import React from 'react';
import { motion } from 'framer-motion';

const cardMotion = {
  whileHover: { y: -3, scale: 1.01 },
  transition: { type: 'spring', stiffness: 340, damping: 24 },
};

export const CoursesPage: React.FC = () => {
  const courses = [
    { title: 'Data Structures', code: 'CSE-221', room: 'Lab 3', slots: 'Mon/Wed 10:00' },
    { title: 'Linear Algebra', code: 'MAT-204', room: 'A-402', slots: 'Tue/Thu 11:30' },
    { title: 'Web Engineering', code: 'CSE-250', room: 'Smart Room 2', slots: 'Sun/Tue 14:00' },
  ];

  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-32 pt-6 sm:px-5 sm:pt-7 md:px-8">
      <div className="glass-surface orion-glass-card rounded-3xl border border-theme-border/60 bg-card/70 p-4 backdrop-blur-xl sm:p-5">
        <h2 className="text-xl font-black text-theme-text">My Courses</h2>
        <p className="mt-1 text-sm text-theme-sub">Current semester enrolled modules and schedule slots.</p>
      </div>
      <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <motion.article
            key={course.code}
            {...cardMotion}
            className="glass-surface orion-glass-card rounded-2xl border border-theme-border/60 bg-card/65 p-4 backdrop-blur-xl sm:p-5"
          >
            <p className="text-xs font-black tracking-[0.18em] text-theme-sub">{course.code}</p>
            <h3 className="mt-2 text-lg font-extrabold text-theme-text">{course.title}</h3>
            <p className="mt-3 text-sm font-semibold text-theme-sub">
              <i className="fas fa-door-open mr-2 text-primary"></i>{course.room}
            </p>
            <p className="mt-1 text-sm font-semibold text-theme-sub">
              <i className="fas fa-clock mr-2 text-primary"></i>{course.slots}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export const SchedulePage: React.FC = () => {
  const timeline = [
    { time: '08:30', title: 'Morning Focus Session', note: 'Algorithm revision · 45 min' },
    { time: '10:00', title: 'Data Structures Class', note: 'Heap & Priority Queue lab' },
    { time: '14:00', title: 'Web Engineering', note: 'Team sprint planning' },
    { time: '19:00', title: 'Assignment Block', note: 'Linear Algebra worksheet' },
  ];

  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-32 pt-6 sm:px-5 sm:pt-7 md:px-8">
      <div className="glass-surface orion-glass-card rounded-3xl border border-theme-border/60 bg-card/70 p-4 backdrop-blur-xl sm:p-5">
        <h2 className="text-xl font-black text-theme-text">Today&apos;s Schedule</h2>
        <p className="mt-1 text-sm text-theme-sub">Time-boxed routine to keep your semester momentum.</p>
      </div>
      <div className="mt-4 space-y-3 sm:mt-5">
        {timeline.map((item) => (
          <motion.article
            key={item.time}
            {...cardMotion}
            className="glass-surface orion-glass-card rounded-2xl border border-theme-border/60 bg-card/65 p-4 backdrop-blur-xl"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="brand-gradient-bg mt-0.5 rounded-xl px-2.5 py-1.5 text-[11px] font-black text-[#2f2a3f] sm:px-3 sm:py-2 sm:text-xs">{item.time}</div>
              <div>
                <h3 className="text-base font-extrabold text-theme-text">{item.title}</h3>
                <p className="mt-1 text-sm text-theme-sub">{item.note}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export const ProfilePage: React.FC = () => {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-32 pt-6 sm:px-5 sm:pt-7 md:px-8">
      <div className="glass-surface orion-glass-card rounded-3xl border border-theme-border/60 bg-card/70 p-4 backdrop-blur-xl sm:p-5">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="brand-gradient-bg h-20 w-20 rounded-3xl p-1">
            <div className="flex h-full w-full items-center justify-center rounded-[1.2rem] bg-surface text-2xl text-primary">
              <i className="fas fa-user-graduate"></i>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-theme-sub">Student Profile</p>
            <h2 className="mt-1 text-2xl font-black text-theme-text">Tahiya Rahman</h2>
            <p className="mt-1 text-sm text-theme-sub">CSE Department · Batch 2024 · ID 241-15-402</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 md:grid-cols-3">
        <motion.article {...cardMotion} className="glass-surface orion-glass-card rounded-2xl border border-theme-border/60 bg-card/65 p-4 backdrop-blur-xl">
          <p className="text-sm font-bold text-theme-sub">Scholarship</p>
          <p className="mt-2 text-2xl font-black text-theme-text">Merit 40%</p>
        </motion.article>
        <motion.article {...cardMotion} className="glass-surface orion-glass-card rounded-2xl border border-theme-border/60 bg-card/65 p-4 backdrop-blur-xl">
          <p className="text-sm font-bold text-theme-sub">Completed Credits</p>
          <p className="mt-2 text-2xl font-black text-theme-text">64</p>
        </motion.article>
        <motion.article {...cardMotion} className="glass-surface orion-glass-card rounded-2xl border border-theme-border/60 bg-card/65 p-4 backdrop-blur-xl">
          <p className="text-sm font-bold text-theme-sub">Advisor</p>
          <p className="mt-2 text-2xl font-black text-theme-text">Dr. A. Karim</p>
        </motion.article>
      </div>
    </section>
  );
};
