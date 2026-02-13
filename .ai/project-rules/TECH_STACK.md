# Vacation Trekking Nepal – Frontend Tech Stack

## Core Framework
- Framework: Next.js 14+ (App Router)
- Language: TypeScript
- Rendering: SSR + SSG (SEO-first approach)

Why Next.js?
- Server-side rendering for SEO (critical for trekking/travel keywords)
- Static generation for trek detail pages
- Excellent performance optimization
- Built-in routing and metadata management

---

## Styling
- Tailwind CSS
- tailwind-merge (class merging)
- clsx (conditional classes)

Design Principles:
- Spacious layout
- Clean typography
- Calm Himalayan color palette
- Soft shadows
- Premium minimal aesthetic

---

## State & Data Management
- TanStack Query (React Query)
- Zustand (only if lightweight global state is needed)

---

## Forms & Validation
- React Hook Form
- Zod (schema validation)

Used for:
- Trek inquiry forms
- Custom trek request forms
- Newsletter subscription

---

## Animation
- Framer Motion

Used for:
- Page transitions
- Hero image fade-in
- Card hover lift effects
- Scroll reveal animations

Keep animations subtle and premium.

---

## Charts (Altitude Profiles)
- Recharts

Used for:
- Elevation gain charts
- Altitude per day visualization

Rules:
- Clean minimal grid
- No bright colors
- Use brand palette

---

## Maps
- Mapbox GL JS

Used for:
- Trek route visualization
- Region exploration map

Do not use Google Maps for route visuals.

---

## Image Optimization
- Next.js Image component
- Cloudinary (future integration)

All trek images must:
- Use lazy loading
- Use WebP format
- Be responsive

---

## SEO
- Next.js Metadata API
- Dynamic metadata per trek page
- Open Graph support
- Structured Data (JSON-LD)

Critical Pages:
- Trek listing
- Trek detail pages
- Region pages

---

## Icons
- Lucide React

Avoid heavy icon libraries.

---

## Deployment
- Vercel (frontend)
