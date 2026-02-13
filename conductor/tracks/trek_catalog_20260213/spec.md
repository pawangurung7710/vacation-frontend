# Track Spec: Trek Catalog & Inquiry Flow

## Overview
This track focuses on building the "Trek Catalog" system, which includes the listing of all available treks and the detailed information page for each trek. It is the primary conversion driver for Vacation Nepal Trekking V1.

## Objectives
- Create a reusable Trek Data Model (Mock) for V1.
- Develop a premium, responsive Nepal Treks Listing Page with advanced filtering.
- Develop a comprehensive Trek Detail Page with itineraries, charts, and maps.
- Implement an Inquiry Form that collects high-quality leads.

## Scope
- **Data:** Define TypeScript interfaces and mock JSON for treks.
- **UI Architecture:** Use Next.js 14 App Router, Tailwind CSS, and Framer Motion.
- **Filter Logic:** Implement client-side filtering for Region, Difficulty, Duration, and Price.
- **Visuals:** Integrate Recharts for altitude and Mapbox for trek routes.
- **Conversion:** Create a React Hook Form for inquiries and WhatsApp deep links.

## Tech Stack (Specifics)
- **Framework:** Next.js (SSR for listing/detail pages).
- **Styling:** Tailwind CSS + Lucide Icons.
- **Forms:** React Hook Form + Zod.
- **Charts:** Recharts (Altitude profile).
- **Maps:** Mapbox GL JS.

## Success Criteria
- Filter combinations update the grid seamlessly.
- Trek details are SEO-optimized with correct metadata.
- Inquiry form validates all mandatory traveler information.
- Mobile experience is seamless for multi-day itineraries.
