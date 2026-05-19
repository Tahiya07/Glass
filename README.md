# Orion Glass Navbar + Student Dashboard

Exact Orion Store bottom navbar extracted with the same component structure and class names, now embedded in a student dashboard demo so the frosted glass style is clearly visible.

## Features

- Orion-style glass navbar depth and layered blur
- Theme switching (`light`, `dark`)
- Lavender brand gradient accents (`linear-gradient(135deg, #E6E6FA, #c9bfe0, #bfb4db)`)
- Apple-inspired liquid glass cards/nav with subtle noise texture
- Mobile-responsive spacing and typography for phone-first layout
- Orion-like dock glide animation for active navbar pill
- Student pages mapped to navbar tabs:
  - `Home`
  - `Courses`
  - `Schedule`
  - `Profile`

## Run

```bash
npm install
npm run dev
```

## Entry files

- `src/main.tsx` (Vite app entry)
- `src/App.tsx` (student dashboard shell + navbar)
- `src/components/BottomNav.tsx` (exact navbar component)
- `src/components/StudentDashboard.tsx` (dashboard UI)
- `src/data/studentDashboard.ts` (demo content)
- `index.css` (theme variables + navbar-specific animation/util classes)
