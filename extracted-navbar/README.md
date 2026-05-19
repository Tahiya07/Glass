# Orion Store Navbar (Only)

This folder contains the Orion Store bottom navbar extracted with the same component structure and class names.

## Included files

- `components/BottomNav.tsx` (exact navbar component)
- `types.ts` (`Tab` type dependency)
- `index.css` (theme variables + navbar-required custom classes/animations)
- `tailwind.config.js` (required color tokens and theme mappings)
- `postcss.config.js`
- `package.json` (minimal dependency set)

## Required imports in your app

Import these once in your global entry file:

```ts
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
```

Then use the component:

```tsx
import BottomNav from './components/BottomNav';
```
