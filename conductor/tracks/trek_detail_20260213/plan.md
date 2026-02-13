# Track Plan: 103 - Trek Detail Page

This plan outlines the steps to build the high-conversion Trek Detail Page using dynamic routes.

---

## Phase 1: Route Setup & Dynamic Data Fetching
*Focus: Implementing the dynamic [slug] route and data lookup.*

- [ ] **Task: Dynamic Trek Route & Data Hook**
  - Create the `src/app/treks/[slug]/page.tsx` route.
  - Implement a helper to find a trek by its slug from `src/data/treks.ts`.
  - Handle 404 cases if the slug doesn't exist.

---

## Phase 2: Hero Section & Sticky CTA
*Focus: Immersive entrance and the crucial inquiry triggers.*

- [ ] **Task: Immersive Detail Hero & Floating CTA**
  - Build the full-width hero with H1 and quick stats bar.
  - Implement the sticky "Plan This Trek" card that follows the user on scroll.
  - Integrate WhatsApp and Inquiry buttons.

---

## Phase 3: Content Sections (Overview & Itinerary)
*Focus: Building the core descriptive sections.*

- [ ] **Task: Overview & Highlights Grid**
  - Implement the 2-column Overview/Highlights section.
- [ ] **Task: Detailed Itinerary Timeline/Accordion**
  - Build the interactive day-by-day itinerary component.
  - Include altitude and trekking hour badges.

---

## Phase 4: Logistics & Trust Sections
*Focus: Transparency and preparation details.*

- [ ] **Task: Cost Details & Preparation Blocks**
  - Build the side-by-side Includes/Excludes component.
  - Implement the Difficulty Scale and Equipment Checklist (collapsible).
- [ ] **Task: Best Time & Route Map**
  - Create the 12-month seasonal grid.
  - Add the Map/Elevation section.

---

## Phase 5: Conversion & Related Content
*Focus: Closing the deal and internal linking.*

- [ ] **Task: Gallery, FAQ & Bottom Inquiry Form**
  - Implement the image gallery.
  - Build the accordion FAQ section.
  - Implement the large bottom inquiry card with form fields.
- [ ] **Task: Related Treks Grid**
  - Re-use the `TrekCard` to show 3 similar treks at the bottom.
- [ ] **Task: Conductor - User Manual Verification 'Phase 5' (Protocol in workflow.md)**
