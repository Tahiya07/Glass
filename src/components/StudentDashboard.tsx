import React from 'react';
import { motion } from 'framer-motion';
import { assignments, courseProgress, studentStats } from '../data/studentDashboard';

const statusStyle: Record<(typeof assignments)[number]['status'], string> = {
  'Due Soon': 'bg-red-400/20 text-red-200',
  'In Progress': 'bg-amber-300/20 text-amber-100',
  Submitted: 'bg-lime-300/20 text-lime-100',
};

const cardMotion = {
  whileHover: { y: -3, scale: 1.01 },
  transition: { type: 'spring', stiffness: 340, damping: 24 },
};

const StudentDashboard: React.FC = () => {
  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-32 pt-7 md:px-8">
      <section className="glass-surface orion-glass-card rounded-3xl border border-theme-border/60 bg-card/70 p-5 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-theme-sub">Student Dashboard</p>
            <h1 className="mt-1 text-2xl font-black tracking-tight text-theme-text">Semester Overview</h1>
          </div>
          <div className="rounded-2xl border border-theme-border/50 bg-theme-element/70 px-3 py-2 text-xs font-bold text-theme-sub">
            Spring 2026
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-4 md:grid-cols-3">
        {studentStats.map((stat) => (
          <motion.article
            key={stat.label}
            {...cardMotion}
            className="glass-surface orion-glass-card rounded-2xl border border-theme-border/60 bg-card/65 p-4 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-theme-sub">{stat.label}</p>
              <i className={`fas ${stat.icon} text-primary`}></i>
            </div>
            <p className="mt-2 text-3xl font-black tracking-tight text-theme-text">{stat.value}</p>
            <p className="mt-1 text-xs font-semibold text-theme-sub">{stat.trend}</p>
          </motion.article>
        ))}
      </section>

      <section className="mt-5 grid gap-4 lg:grid-cols-[1.45fr_1fr]">
        <motion.article
          {...cardMotion}
          className="glass-surface orion-glass-card rounded-2xl border border-theme-border/60 bg-card/65 p-5 backdrop-blur-xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-theme-text">Course Progress</h2>
            <span className="text-xs font-semibold text-theme-sub">This Week</span>
          </div>
          <div className="space-y-4">
            {courseProgress.map((course) => (
              <div key={course.code}>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-theme-text">{course.code} · {course.title}</p>
                    <p className="text-xs text-theme-sub">{course.instructor}</p>
                  </div>
                  <p className="text-sm font-black text-theme-text">{course.progress}%</p>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-theme-element/90">
                  <div className={`h-full rounded-full bg-gradient-to-r ${course.accent}`} style={{ width: `${course.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          {...cardMotion}
          className="glass-surface orion-glass-card rounded-2xl border border-theme-border/60 bg-card/65 p-5 backdrop-blur-xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-theme-text">Upcoming Tasks</h2>
            <i className="fas fa-bell text-theme-sub"></i>
          </div>
          <div className="space-y-3">
            {assignments.map((item) => (
              <div key={item.title} className="rounded-xl border border-theme-border/40 bg-theme-element/35 p-3">
                <p className="text-sm font-bold text-theme-text">{item.title}</p>
                <p className="mt-1 text-xs font-semibold text-theme-sub">{item.course}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-theme-sub">{item.due}</span>
                  <span className={`rounded-full px-2 py-1 text-[10px] font-black uppercase tracking-wide ${statusStyle[item.status]}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.article>
      </section>
    </div>
  );
};

export default StudentDashboard;
