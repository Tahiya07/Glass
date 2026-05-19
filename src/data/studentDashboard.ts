export interface StudentStat {
  label: string;
  value: string;
  trend: string;
  icon: string;
}

export interface CourseProgress {
  code: string;
  title: string;
  instructor: string;
  progress: number;
  accent: string;
}

export interface AssignmentItem {
  title: string;
  course: string;
  due: string;
  status: 'Due Soon' | 'In Progress' | 'Submitted';
}

export const studentStats: StudentStat[] = [
  { label: 'Current GPA', value: '3.82', trend: '+0.11 this term', icon: 'fa-chart-line' },
  { label: 'Attendance', value: '94%', trend: '2 classes missed', icon: 'fa-calendar-check' },
  { label: 'Credits', value: '17', trend: 'On track to graduate', icon: 'fa-layer-group' },
];

export const courseProgress: CourseProgress[] = [
  { code: 'CSE-221', title: 'Data Structures', instructor: 'Dr. Rehan', progress: 78, accent: 'from-indigo-500 to-indigo-300' },
  { code: 'MAT-204', title: 'Linear Algebra', instructor: 'Ms. Tania', progress: 64, accent: 'from-lime-400 to-emerald-300' },
  { code: 'CSE-250', title: 'Web Engineering', instructor: 'Mr. Sami', progress: 87, accent: 'from-fuchsia-500 to-pink-300' },
];

export const assignments: AssignmentItem[] = [
  { title: 'Heap Sort Analysis Report', course: 'CSE-221', due: 'Today, 11:59 PM', status: 'Due Soon' },
  { title: 'Matrix Decomposition Worksheet', course: 'MAT-204', due: 'Tomorrow, 09:00 PM', status: 'In Progress' },
  { title: 'REST API Mockup Submission', course: 'CSE-250', due: 'May 24, 2026', status: 'Submitted' },
];
