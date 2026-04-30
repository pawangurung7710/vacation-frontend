# Implementation Plan: Landing Page Mockup V2

## Phase 1: Setup & Foundation
- [x] Task 1: Update Tailwind Configuration
  - [x] Add Himalayan Serenity color tokens to `tailwind.config.ts` (`himalaya-canvas`, `himalaya-primary`, `himalaya-cta`, `himalaya-earth`).
- [x] Task 2: Create Mockup Route
  - [x] Create directory `src/app/mockup-v2` and basic `page.tsx`.
  - [x] Set up basic page layout structure applying the `bg-himalaya-canvas` background.
- [ ] Task: Conductor - User Manual Verification 'Setup & Foundation' (Protocol in workflow.md)

## Phase 2: Core Components Implementation
- [x] Task 3: Build Hero Section Component
  - [x] Create full-bleed image container with overlay.
  - [x] Implement centered typography.
  - [x] Build the "Pill Search" bar UI with CTA button.
- [x] Task 4: Build Trek Card Component
  - [x] Create `<MockTrekCard />` with `16:9` image ratio and `rounded-2xl`.
  - [x] Implement split-row metadata layout (duration, title, price, rating).
- [x] Task 5: Build "Why Travel With Us" Section
  - [x] Implement informational grid with Himalayan Serenity styling.
- [ ] Task: Conductor - User Manual Verification 'Core Components Implementation' (Protocol in workflow.md)

## Phase 3: Assembly & Refinement
- [x] Task 6: Assemble Page and Populate Mock Data
  - [x] Integrate Hero Section, Trek Grid, and Why Travel With Us into `src/app/mockup-v2/page.tsx`.
  - [x] Populate Trek Grid with 4-8 hardcoded `<MockTrekCard />` instances.
- [x] Task 7: Responsive Polish
  - [x] Ensure mobile, tablet, and desktop views match the design spec requirements (e.g., column wrapping, padding).
- [ ] Task: Conductor - User Manual Verification 'Assembly & Refinement' (Protocol in workflow.md)
