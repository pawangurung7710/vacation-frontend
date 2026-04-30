# Implementation Plan: EBC Cinematic V2

## Phase 1: Track Setup & Routing Configuration
- [x] Task: Create `app/treks/everest-base-camp-cinematic/page.tsx`.
- [x] Task: Setup the `EbcCinematicView` master component.
- [x] Task: Conductor - User Manual Verification 'Track Setup & Routing Configuration' (Protocol in workflow.md)

## Phase 2: Narrative Scaffolding & Background Alternation
- [x] Task: Scaffold the 6 narrative sections (Dream, Hook, Journey, Challenge, Reward, Action) using the alternating background palette (White, Slate-50, Deep Blue).
- [x] Task: Implement the "Skip to Itinerary" sticky sub-nav.
- [x] Task: Conductor - User Manual Verification 'Narrative Scaffolding' (Protocol in workflow.md)

## Phase 3: Scrollytelling UI & Framer Motion Integration
- [x] Task: Build the Desktop "Sticky Right" layout for the Hook and Challenge sections.
- [x] Task: Wrap text blocks in Framer Motion `<motion.div>` with `whileInView` fade-ins.
- [x] Task: Ensure mobile fallback gracefully stacks content vertically.
- [x] Task: Conductor - User Manual Verification 'Scrollytelling UI' (Protocol in workflow.md)

## Phase 4: Competitor Content Injection & Data Mapping
- [x] Task: Inject the raw Alpine Ramble emotional copy into the *Dream* and *Hook* sections.
- [x] Task: Inject the raw Discovery World Trekking logistical copy into the *Challenge* and *Journey* sections.
- [x] Task: Remount existing `AltitudeChart` and `StickyInquiryCard` components into the cinematic flow.
- [x] Task: Conductor - User Manual Verification 'Competitor Content Injection' (Protocol in workflow.md)
