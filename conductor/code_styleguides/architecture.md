# Frontend Architecture – Vacation Trekking Nepal

We use a Feature-Based Scalable Architecture.

---

## Folder Structure

/app
  /(marketing)
    page.tsx (homepage)
    /treks
    /regions
    /about
  /(legal)
    /privacy
    /terms

/components
  /layout
  /treks
  /forms
  /ui
  /charts
  /maps

/lib
  /utils
  /constants
  /seo

/types
  trek.ts
  region.ts
  review.ts

/data
  treks.json (temporary mock data)

/styles
  globals.css

---

## Page Strategy

### Static Pages (SSG)
- Trek detail pages
- Region pages
- Blog posts (future)

### Dynamic Filtering (CSR)
- Trek listing filters

---

## Component Structure

Every feature must have:

Feature/
  FeatureCard.tsx
  FeatureSection.tsx
  Feature.types.ts
  Feature.constants.ts

---

## Reusable UI Components

- Button
- Container
- Section
- Heading
- Card
- Badge
- Divider

Never duplicate layout code.

---

## Trek Data Model (Frontend Only)

Trek:
- id
- slug
- title
- region
- duration
- maxAltitude
- difficulty
- priceUSD
- bestSeason[]
- images[]
- itinerary[]
- altitudeChart[]
