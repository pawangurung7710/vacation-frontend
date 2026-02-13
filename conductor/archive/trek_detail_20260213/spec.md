# Track Spec: 103 - Trek Detail Page

## Overview
This track focuses on implementing the highly detailed, conversion-oriented Individual Trek Detail Page. This is the final decision point for users, requiring a blend of immersive visuals, technical trekking data, and strong trust signals.

## User Stories
- As a traveler, I want to see a detailed day-by-day itinerary so I can understand the daily challenge and scenery.
- As a traveler, I want to clearly see what is included and excluded in the price to avoid hidden costs.
- As a traveler, I want to understand the physical requirements and altitude risks of the trek.
- As a traveler, I want to easily initiate an inquiry via WhatsApp or a form from any point on the page.

## Requirements

### 1. Immersive Hero & Quick Stats
- Full-width hero with H1 (Trek Name + Region).
- Icon-based quick stats: Duration, Max Altitude, Difficulty, Group Size, Price.
- Floating/Sticky CTA card with "Plan This Trek" and WhatsApp buttons.

### 2. Overview & Highlights
- Left column: Compelling 2-3 paragraph intro.
- Right column: Icon-based "Key Highlights".

### 3. Detailed Itinerary
- Vertical timeline or accordion layout.
- For each day: Title, Altitude, Trekking Hours, and Description.

### 4. Cost Transparency
- Side-by-side "Includes" (green ticks) and "Excludes" (red minus).
- Optional add-ons list (Porters, Heli-return, etc.).

### 5. Trust & Preparation
- Difficulty rating visual (1-5 scale).
- Equipment checklist (collapsible).
- Food, accommodation, and insurance details.

### 6. Seasonal Guide & Route Map
- 12-month color-coded grid (Excellent/Good/Not Recommended).
- Embedded map or custom route illustration under "Route & Elevation".

### 7. Conversion & FAQ
- Large image gallery with rounded corners.
- Accordion FAQ (SEO-ready).
- Bottom Inquiry Form card with "Local expert response within 24 hours".

### 8. Discovery
- "Related Treks" section at the bottom (reusing TrekCard design).

## Design
- Consistent with Himalayan Serenity Palette.
- Premium typography (Outfit for headings, Inter for body).
- High contrast for CTAs (Teal #006D77).
- Spacious, international-standard layout.

## Tech Stack
- Next.js (App Router)
- Framer Motion (Accordions, Sticky effects)
- Lucide React (Icons)
- Tailwind CSS
