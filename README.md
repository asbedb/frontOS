# frontOS

[Try it here!](https://frontosfun.netlify.app/)

A retro desktop environment simulator that recreates the look and feel of classic Windows XP in the browser. Built with React, TypeScript, and Vite.

## Features

- **Desktop Environment** — Full-screen browser desktop with a functional taskbar, start menu, and system tray
- **Theme System** — Dynamically loadable themes with pluggable component styles
- **Start Menu** — Click-triggered menu with left and right panels
- **System Tray** — Real-time clock and date display
- **Multiple Themes** — Ships with `bindows-xd` (XP classic) and `sleek` (modern variant)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 + custom CSS variables |
| Linting | ESLint 9 + typescript-eslint |
| Formatting | Prettier + prettier-plugin-tailwindcss |
| Package Manager | pnpm |

## Getting Started

**Prerequisites:** Node.js 18+, pnpm

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── applications/
│   └── system/
│       ├── desktop-environment/
│       │   ├── DesktopEnvironment.tsx   # Root component and theme context provider
│       │   ├── components/              # Taskbar, Start Menu, System Tray, etc.
│       │   └── themes/
│       │       ├── types.ts             # Theme interface definitions
│       │       ├── ThemeLoader.ts       # Dynamic theme loader
│       │       ├── ThemeContext.ts      # React Context for theme distribution
│       │       ├── bindows-xd/          # Windows XP-style theme
│       │       └── sleek/               # Modern variant theme
│       └── settings/
│           ├── DisplaySettings.ts       # Theme preference config
│           └── types.ts                 # AvailableThemes, DisplaySettings types
└── mvp/
    ├── types/                           # Shared type definitions
    ├── constants/
    └── common/layout/
```

## Theme System

Themes live under `src/applications/system/desktop-environment/themes/`. Each theme is a folder containing style definition files for each component:

```
themes/my-theme/
├── taskbarStyles.ts
├── startButtonStyles.ts
├── startMenuStyles.ts
├── systemTrayStyles.ts
└── dividerStyles.ts
```

Themes are loaded dynamically at runtime via `ThemeLoader.ts` and distributed via React Context. To add a new theme, create a folder following the structure above and register it in `DisplaySettings.ts`.

## Available Themes

| Theme | Description |
|-------|-------------|
| `bindows-xd` | Windows XP-inspired classic theme with the original blue/green color palette |
| `sleek` | Modern minimal variant |
