# Track Plan: Trek Catalog & Inquiry Flow

This plan outlines the steps to implement the core Trek Catalog and Inquiry flow for Vacation Nepal Trekking V1.

---

## Phase 1: Foundation & Data Modeling
*Focus: Define the trek data structure and set up the global components.*

- [ ] **Task: Define Trek Data Model**
  - Create `types/trek.ts` with interfaces for Itinerary, Highlights, and Stats.
  - Create `data/treks.json` with mock data for at least 5 major treks (EBC, ABC, etc.).
- [ ] **Task: Implement Shared UI Components**
  - Create reusable `Badge`, `Card`, and `Button` components using the Himalayan Serenity Palette.
  - Set up `Layout` with sticky navigation and brand footer.
- [ ] **Task: Conductor - User Manual Verification 'Phase 1' (Protocol in workflow.md)**

---

## Phase 2: Trek Listing Page
*Focus: Build the main collection page with advanced filtering.*

- [ ] **Task: Develop Filter Sidebar**
  - Implement checkboxes for Region, Difficulty, and Duration.
  - Add USD Price Range slider.
- [ ] **Task: Build Trek Grid**
  - Create responsive grid with 16:9 trek cards.
  - Implement sort functionality (Price, Duration).
- [ ] **Task: SEO & Content Block**
  - Add dynamic SEO title/description for the listing page.
  - Create the bottom content block for trekking-related context.
- [ ] **Task: Conductor - User Manual Verification 'Phase 2' (Protocol in workflow.md)**

---

## Phase 3: Trek Detail Page
*Focus: Detailed itinerary and visualization.*

- [ ] **Task: Detail Page Hero & Stats**
  - Build the premium hero section with high-res image and key trek stats.
- [ ] **Task: Day-by-Day Itinerary**
  - Create a clean, expandable itinerary list with elevation/time info.
- [ ] **Task: Altitude Chart & Map Integration**
  - Integrate Recharts for altitude profiles.
  - Add Mapbox placeholder/component for trek routes.
- [ ] **Task: Conductor - User Manual Verification 'Phase 3' (Protocol in workflow.md)**

---

## Phase 4: Inquiry Flow & Final Polish
*Focus: Lead generation and mobile optimization.*

- [ ] **Task: Implementation of Inquiry Form**
  - Build the React Hook Form with Zod validation.
  - Integrate "Send Message" and "Chat on WhatsApp" CTAs.
- [ ] **Task: Mobile Responsive Audit**
  - Ensure all charts, tables, and itineraries are breathable on mobile.
- [ ] **Task: Conductor - User Manual Verification 'Phase 4' (Protocol in workflow.md)**
