# Track Plan: 103 - Trek Detail Page

This plan outlines the steps to build the high-conversion Trek Detail Page using dynamic routes.

---

## Phase 1: Route Setup & Dynamic Data Fetching
*Focus: Implementing the dynamic [slug] route and data lookup.*

- [x] **Task: Dynamic Trek Route & Data Hook** [67f15e5]
  - Create the `src/app/treks/[slug]/page.tsx` route.
  - Implement a helper to find a trek by its slug from `src/data/treks.ts`.
  - Handle 404 cases if the slug doesn't exist.

---

## Phase 2: Hero Section & Sticky CTA
*Focus: Immersive entrance and the crucial inquiry triggers.*

- [x] **Task: Immersive Detail Hero & Floating CTA** [e5a37e8]
  - Build the full-width hero with H1 and quick stats bar.
  - Implement the sticky "Plan This Trek" card that follows the user on scroll.
  - Integrate WhatsApp and Inquiry buttons.

---

## Phase 3: Content Sections (Overview & Itinerary)
*Focus: Building the core descriptive sections.*

- [x] **Task: Overview & Highlights Grid** [5e4835d]
- [x] **Task: Detailed Itinerary Timeline/Accordion** [5e4835d]

---

## Phase 4: Logistics & Trust Sections
*Focus: Transparency and preparation details.*

- [x] **Task: Cost Details & Preparation Blocks** [5d106f3]
- [x] **Task: Best Time & Route Map** [5d106f3]

---

## Phase 5: Conversion & Related Content
*Focus: Closing the deal and internal linking.*

- [x] **Task: Gallery, FAQ & Bottom Inquiry Form** [98c6025]
- [x] **Task: Related Treks Grid** [98c6025]
- [x] **Task: Conductor - User Manual Verification 'Phase 5' (Protocol in workflow.md)**
