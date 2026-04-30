# Specification: Landing Page Mockup V2

## Overview
This track involves creating a high-fidelity mockup of the new landing page design system, heavily inspired by the "Vacation Nepal Trekking - Design System" document (combining GetYourGuide's discovery flow with Airbnb's clean aesthetics). The mockup will be built in a dedicated, isolated route to allow for safe design iteration without affecting the current application.

## Functional Requirements
1. **Routing:** Create a new page accessible at `/mockup-v2`.
2. **Hero Section:** 
   - Implement a full-bleed, edge-to-edge placeholder hero image.
   - Overlay a prominent, centered H1 heading.
   - Implement a "Pill Search" container overlaying the image, featuring a primary action button using the CTA Accent color (`#006D77`).
3. **Popular Treks Grid:**
   - Implement a responsive grid layout (e.g., 4 columns on desktop).
   - Create a `<MockTrekCard />` component using strict 16:9 image ratios, rounded corners (`rounded-2xl`), and split-row metadata styling.
   - Populate the grid using completely hardcoded placeholder data for layout testing.
4. **Why Travel With Us Section:**
   - Implement an informational section below the grid.
   - Style using the "Himalayan Serenity" palette (incorporating the `#F8FAFC` background and `#2C4A6A` text).
5. **Tailwind Configuration:**
   - Update `tailwind.config.ts` (if not already done) to include the required Himalayan Serenity color tokens (`himalaya-canvas`, `himalaya-primary`, `himalaya-cta`, `himalaya-earth`).

## Non-Functional Requirements
- **Design Fidelity:** Strict adherence to the `vacation-trekking-system.md` guidelines (e.g., generous white space `gap-8`, soft shadows `shadow-sm`, correct typography weights).
- **Responsiveness:** All sections must look good on mobile, tablet, and desktop viewports.

## Acceptance Criteria
- [ ] Navigating to `/mockup-v2` displays the new landing page.
- [ ] The Hero Section displays a full-bleed image with a centered pill search bar.
- [ ] The Trek Grid displays placeholder cards with 16:9 aspect ratios and split-row metadata.
- [ ] The "Why Travel With Us" section is visually distinct and follows the new color palette.
- [ ] The global layout feels premium, breathable, and aligned with the intended brand positioning.

## Out of Scope
- Integration with real data from `src/data/treks.ts` (deferred to a later phase).
- Functional search logic inside the Pill Search bar.
- Functional booking or inquiry forms.
- Modifying the existing `/` homepage.
