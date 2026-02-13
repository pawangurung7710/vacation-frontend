# Plan: Custom Trek / Personalized Itineraries Page (Track 104)

## Phase 1: Foundation & Routing
*Goal: Setup the page structure and entry points.*

- [x] **Task: Route Initialization**
    - Create `src/app/custom-trek/page.tsx`.
    - Implement basic layout shell with Navbar and Footer.
- [x] **Task: Global Navigation Update**
    - Update `src/components/Navbar.tsx` to include "Custom Trip".
    - Update `src/components/Footer.tsx` (if applicable) with the new link.

## Phase 2: Hero & Value Proposition
*Goal: Communicate flexibility and expertise immediately.*

- [x] **Task: Hero Component**
    - Implement the "Design Your Personalized Nepal Trek" banner.
    - Set up warm, inviting Himalayan backgrounds.
- [x] **Task: Intro & Highlights Block**
    - Build the 2-column intro section.
    - Create a reusable `IconHighlight` component for Flexible Dates, Luxury Options, etc.

## Phase 3: Trip Type Cards & Process
*Goal: Segment travelers and explain the flow.*

- [x] **Task: Category Cards**
    - Create the 3-card layout (Private, Luxury, Short).
    - Reuse `premium-card` styles from `TrekCard`.
- [x] **Task: Process (How it Works)**
    - Implement the 4-step horizontal timeline.
- [x] **Task: Trust & Why Us**
    - Implement the short trust-builder section with local expertise focus.

## Phase 4: High-Conversion Form (V1)
*Goal: Capture leads via WhatsApp.*

- [x] **Task: Multi-Section Form Component**
    - Build form fields for Personal, Trip, and Style info.
    - Implement validation state.
- [x] **Task: WhatsApp Integration**
    - Create utility to format form data into a readable URL-encoded string.
    - Implement the client-side redirect to WhatsApp on "Submit".

## Phase 5: SEO & Final Polish
*Goal: Final verification and launch.*

- [x] **Task: SEO Implementation**
    - Set up Metadata (Title, Description, OpenGraph).
    - Ensure H1/H2 hierarchy is correct.
- [x] **Task: Conductor - User Manual Verification 'Phase 5'**

---

## 🚦 Phase Completion Verification Protocol
*To be run at the end of each phase:*
1. Verify build: `npm run build`
2. Cross-check against visual rules in `coding-standard.md`.
3. Commit changes with Task ID.
