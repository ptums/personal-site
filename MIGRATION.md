# Migration from Next.js to TanStack Start

This document outlines the migration from Next.js to TanStack Start for the personal website.

## What Changed

### 1. Project Structure
- **Before**: Next.js app directory structure (`app/`, `app/layout.tsx`, `app/page.tsx`, etc.)
- **After**: TanStack Start file-based routing (`routes/`, `routes/__root.tsx`, `routes/index.tsx`, etc.)

### 2. Dependencies
- **Removed**: Next.js, Vercel Analytics, Vercel Speed Insights, Next.js ESLint config
- **Added**: TanStack Router, TanStack Start, TanStack Router DevTools, Vite, @vitejs/plugin-react

### 3. Routing
- **Before**: Next.js App Router with `app/` directory
- **After**: TanStack Start file-based routing with `routes/` directory
- **Routes migrated**:
  - `/` → `routes/index.tsx`
  - `/blog` → `routes/blog.tsx`
  - `/blog/post/[slug]` → `routes/blog.post.$slug.tsx`
  - `/previous-work` → `routes/previous-work.tsx`
  - `/reviews` → `routes/reviews.tsx`

### 4. Components Updated
- **Header.tsx**: Replaced Next.js `Link` and `useSelectedLayoutSegments` with TanStack Router equivalents
- **MobileMenu.tsx**: Updated navigation logic to use TanStack Router
- **All routes**: Converted from Next.js page components to TanStack Start route components

### 5. Data Fetching
- **Before**: Next.js server components with `async` functions
- **After**: TanStack Start loaders in route definitions

### 6. Metadata
- **Before**: Next.js `metadata` exports
- **After**: TanStack Start `meta` functions in route definitions

### 7. Images
- **Before**: Next.js `Image` component
- **After**: Standard HTML `img` tags

### 8. Fonts
- **Before**: Next.js font optimization with `next/font/google`
- **After**: Google Fonts CSS import with Tailwind CSS classes

## Key Files

### New Files
- `app.tsx` - Main application entry point
- `main.tsx` - React DOM entry point
- `index.html` - HTML template
- `vite.config.ts` - Vite configuration
- `tanstack.config.ts` - TanStack Start configuration
- `routes/__root.tsx` - Root route layout
- `routes/index.tsx` - Home page
- `routes/blog.tsx` - Blog listing page
- `routes/blog.post.$slug.tsx` - Individual blog post
- `routes/previous-work.tsx` - Previous work page
- `routes/reviews.tsx` - Reviews page
- `globals.css` - Global styles (moved from app directory)
- `font.ts` - Font configuration (simplified)

### Removed Files
- `next-env.d.ts` - Next.js TypeScript definitions
- `app/` directory - Entire Next.js app directory structure

### Updated Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind configuration
- `components/Header.tsx` - Navigation component
- `components/MobileMenu.tsx` - Mobile navigation
- `utils/api.ts` - API utilities

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Generate Contentful types
npm run codegen
```

## Deployment

The site is now a standard Vite application and can be deployed to any static hosting service:

- **Vercel**: Still supported, just change the build command to `npm run build`
- **Netlify**: Supported with `npm run build`
- **GitHub Pages**: Supported with `npm run build`
- **Any static hosting**: Supported

## Benefits of Migration

1. **Framework Independence**: No longer tied to Vercel/Next.js ecosystem
2. **Modern Tooling**: Uses Vite for faster development and building
3. **Type Safety**: TanStack Router provides excellent TypeScript support
4. **Flexibility**: Can deploy to any hosting platform
5. **Performance**: Vite's build system is faster than Next.js
6. **Developer Experience**: TanStack Router provides excellent dev tools

## Notes

- All existing functionality has been preserved
- The site maintains the same visual design and user experience
- Contentful integration continues to work as before
- All routes and navigation work identically to the Next.js version
