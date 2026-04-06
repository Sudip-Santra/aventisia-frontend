# Aventisia - Knowledge Base UI

A responsive front-end application built with **React**, replicating a Figma design for a Knowledge Base management interface. This project demonstrates pixel-accurate UI implementation, component-based architecture, and clean, maintainable code.

## Live Demo

**[https://aventisia-frontend-ui.netlify.app/](https://aventisia-frontend-ui.netlify.app/)**

---

## Table of Contents

- [Features Implemented](#features-implemented)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Design Decisions](#design-decisions)
- [Scripts](#scripts)

---

## Features Implemented

### 1. UI Implementation (Pixel-Accurate)

- Replicated the Figma design with high visual accuracy
- Proper spacing, typography, colors, and alignment throughout
- **Primary Color:** `#4F46E5` | **Secondary Color:** `#1E1B4B`
- Gradient header with search bar and workspace selector
- Active navigation state with left accent indicator
- Card-based grid layout for Knowledge Base items
- Pagination controls with rows-per-page selector

### 2. Interactive Elements

- **"Create New" button** opens a slide-in Sheet panel from the right
- Sheet contains a fully styled form with:
  - Name input (required, non-editable after creation)
  - Description textarea
  - Vector Store dropdown (Qdrant, Pinecone, Weaviate)
  - LLM Embedding Model dropdown (text-embedding-ada-002, 3-small, 3-large)
- Smooth open/close animations via Radix UI Sheet primitive
- Hamburger menu toggle for mobile sidebar

### 3. Responsive Design

- **Desktop (1024px+):** Full sidebar + 3-column card grid
- **Tablet (768px–1023px):** Full sidebar + 2-column card grid
- **Mobile (<768px):** Sidebar hidden, accessible via hamburger menu as a slide-out drawer; single-column card grid; compact header, pagination, and controls
- Mobile sidebar auto-closes when resizing back to desktop
- Create New sheet goes full-width on mobile

### 4. Component-Based Architecture

Modular, reusable components with clear separation of concerns:

| Component | Purpose |
|-----------|---------|
| `TopBar` | Header with logo, workspace selector, search bar, notifications, avatar |
| `Sidebar` | Navigation menu with sections (My Projects, Orchestrator, Admin) |
| `KnowledgeBase` | Main content area with search, grid, and pagination |
| `KnowledgeBaseCard` | Individual card displaying title, description, and date |
| `CreateKnowledgeBaseDialog` | Right-side Sheet form for creating a new Knowledge Base |
| `ui/*` | Reusable primitives — Button, Input, Select, Sheet, Dialog, Separator |

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI framework (functional components + hooks) |
| TypeScript | 5.9 | Type safety |
| Vite | 8 | Build tool and dev server |
| Tailwind CSS | 4 | Utility-first styling |
| Radix UI | 1.4 | Headless accessible UI primitives |
| shadcn/ui | 4.1 | Pre-built component variants |
| Lucide React | 1.7 | Icon library |
| Geist | Variable | Typography (font family) |

---

## Folder Structure

```
aventisia-frontend/
├── public/
│   ├── aventisia-logo.svg          # App logo
│   ├── favicon.svg                 # Browser favicon
│   └── icons.svg                   # Icon sprites
├── src/
│   ├── assets/                     # Static assets (images)
│   ├── components/
│   │   ├── ui/                     # Reusable UI primitives
│   │   │   ├── button.tsx          #   Button with variants
│   │   │   ├── dialog.tsx          #   Modal dialog
│   │   │   ├── input.tsx           #   Text input
│   │   │   ├── select.tsx          #   Dropdown select
│   │   │   ├── separator.tsx       #   Visual divider
│   │   │   └── sheet.tsx           #   Side panel overlay
│   │   ├── CreateKnowledgeBaseDialog.tsx  # Create form sheet
│   │   ├── KnowledgeBase.tsx       # Main content with grid + pagination
│   │   ├── KnowledgeBaseCard.tsx   # Individual KB card
│   │   ├── Sidebar.tsx             # Navigation sidebar (desktop + mobile)
│   │   └── TopBar.tsx              # Header bar
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn helper)
│   ├── App.tsx                     # Root layout and state management
│   ├── index.css                   # Global styles, theme variables, Tailwind config
│   └── main.tsx                    # Application entry point
├── index.html                      # HTML template
├── vite.config.ts                  # Vite configuration with path aliases
├── tsconfig.json                   # TypeScript config (base)
├── tsconfig.app.json               # TypeScript config (app)
├── tsconfig.node.json              # TypeScript config (node/tooling)
├── eslint.config.js                # ESLint configuration
├── components.json                 # shadcn/ui configuration
└── package.json                    # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/Sudip-Santra/aventisia-frontend.git

# Navigate to the project directory
cd aventisia-frontend

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build

```bash
# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview
```

### Lint

```bash
# Run ESLint
npm run lint
```

---

## Design Decisions

- **Tailwind CSS 4** with CSS custom properties for theming — enables easy light/dark mode support and consistent design tokens across components
- **Radix UI primitives** for accessibility-first interactive elements (Sheet, Select, Dialog) with keyboard navigation and screen reader support
- **shadcn/ui** for pre-styled component variants using `class-variance-authority`, keeping full control over styling
- **Responsive sidebar as Sheet** — on mobile, the sidebar transforms into a Radix Sheet overlay rather than using CSS-only hiding, providing proper focus management and backdrop
- **Component composition** — UI primitives in `ui/` are generic and reusable; feature components compose them with domain-specific logic

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check with `tsc` and build with Vite |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
