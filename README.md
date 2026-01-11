# Pantech Marine Services - Professional Website

A modern, professional website for Pantech Marine Services DMCEST - Trusted marine surveyors and consultants since 1982.

# Project Summary

## Overview
This is a full-stack web application built with **React** and **TypeScript**, powered by **Vite**. It features a modern, responsive UI using **Shadcn UI** and **Tailwind CSS**, connected to a custom **Node.js** backend.

## Tech Stack
*   **Core**: React 18, TypeScript, Vite
*   **UI & Styling**: Tailwind CSS, Shadcn UI (Radix Primitives), Lucide React (Icons)
*   **Data & State**: TanStack Query (React Query), React Hook Form, Zod (Validation)
*   **Visualization**: Recharts
*   **Backend**: Node.js, Nodemon
*   **Build Tools**: Concurrently, ESLint, PostCSS

## How It Works (Step-by-Step)

1.  **Start Command**: You run `npm run dev` in the terminal.
2.  **Parallel Execution**: The `concurrently` utility executes two scripts at the same time:
    *   **Server**: Runs `npm run server`, which starts your backend (`server.js`) using `nodemon` to watch for changes.
    *   **Client**: Runs `npm run client`, which launches the Vite development server for the React frontend.
3.  **Development**:
    *   The frontend launches (typically at `http://localhost:5173`).
    *   The backend runs in the background to handle API requests.
    *   Updates to code trigger automatic reloads (HMR for frontend, restart for backend).


## 📋 Pages
- **Home** - Landing page with hero, services overview, statistics, testimonials
- **About** - Company history, mission, and key highlights
- **Services** - Detailed service offerings (6 services)
- **Contact** - Contact information and inquiry form

## 🛠️ Tech Stack
*   **Core**: React 18, TypeScript, Vite
*   **UI & Styling**: Tailwind CSS, Shadcn UI (Radix Primitives), Lucide React (Icons)
*   **Data & State**: TanStack Query (React Query), React Hook Form, Zod (Validation)
*   **Visualization**: Recharts
*   **Backend**: Node.js, Nodemon
*   **Build Tools**: Concurrently, ESLint, PostCSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server (runs both frontend and backend)
npm run dev
```

The development servers will start:
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3000

### Environment Variables (Optional)

Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3000
PORT=3000
```

If not provided, defaults will be used.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Run linter
npm run lint
```

## 📁 Project Structure

```
marine/
├── src/
│   ├── components/      # React components
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ChatBot.tsx
│   │   ├── Statistics.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Certifications.tsx
│   │   └── ClientLogos.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   ├── lib/            # Utilities
│   │   └── utils.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── dist/               # Production build output
└── Configuration files
```

## 🎨 Design System

### Colors
- **Primary**: Professional blue (#1E5FA8)
- **Navy Deep**: Dark authoritative tone
- **Ocean Teal**: Marine-themed accent
- **Steel Dark**: Professional gray

### Typography
- **Headings**: Montserrat (Bold, 700-800)
- **Body**: Open Sans (Regular, 400)

## 📱 Features Overview

### Interactive Elements
- **AI Chatbot** - Intelligent chatbot with context-aware responses, fallback mode, and error handling
- **Contact Form** - Full backend integration with validation and real-time feedback
- **Error Boundaries** - Comprehensive error handling with user-friendly error pages
- Smooth animations and transitions
- Mobile-responsive navigation

### Trust Building
- Statistics showcase (40+ years, 15,000+ surveys)
- Client testimonials with ratings
- Certifications display
- Client logos section
- Trust indicators in header

## 🧪 Testing

See `TESTING_CHECKLIST.md` for comprehensive testing guide.

## 📚 Documentation

- `TESTING_CHECKLIST.md` - Testing procedures
- `PROJECT_SUMMARY.md` - Project overview
- `UPDATES_SUMMARY.md` - Feature updates
- `THEME_UPDATE_SUMMARY.md` - Design theme details
- `PROJECT_UPDATES_COMPLETE.md` - Complete update log
- `QUICK_START.md` - Quick reference guide
- `FINAL_PROJECT_STATUS.md` - Project status
- `VERIFICATION_CHECKLIST.md` - Verification details

## 🚀 Deployment

### Build Output
The production build is in the `dist/` directory after running `npm run build`.

### Deployment Options
- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment
- **GitHub Pages** - Free hosting
- **Traditional Hosting** - Upload `dist/` folder

### Environment Variables
Create a `.env` file in the root directory (optional):
```env
VITE_API_URL=http://localhost:3000
PORT=3000
```

If not provided, the application will use default values:
- Frontend API URL: `http://localhost:3000`
- Backend Port: `3000`

## 📝 Customization

### Update Contact Information
Edit `src/components/Header.tsx` and `src/components/Footer.tsx`:
- Phone number
- Email address
- Location

### Update Content
- Pages: Edit files in `src/pages/`
- Components: Edit files in `src/components/`
- Styles: Edit `src/index.css` and component files

### Add Images
Place images in `public/` directory and reference them as `/image-name.jpg`

## 🤝 Contributing

This is a private project for Pantech Marine Services.

## 📄 License

Private - All rights reserved

## 👥 Company Information

**Pantech Marine Services DMCEST**
- Established: 1982
- Location: Dubai, UAE
- Service Area: GCC & Mediterranean ports
- Availability: 24/7

## ✨ Key Highlights

- ✅ Professional, trustworthy design
- ✅ Fully responsive
- ✅ Interactive features
- ✅ Trust-building elements
- ✅ Production-ready
- ✅ Well-documented
- ✅ Optimized performance

---

**Built with ❤️ for Pantech Marine Services**

For questions or support, contact: info@pantechmarine.com

1.  **Start Command**: You run `npm run dev` in the terminal.
2.  **Parallel Execution**: The `concurrently` utility executes two scripts at the same time:
    *   **Server**: Runs `npm run server`, which starts your backend (`server.js`) using `nodemon` to watch for changes.
    *   **Client**: Runs `npm run client`, which launches the Vite development server for the React frontend.
3.  **Development**:
    *   The frontend launches (typically at `http://localhost:5173`).
    *   The backend runs in the background to handle API requests.
    *   Updates to code trigger automatic reloads (HMR for frontend, restart for backend).
