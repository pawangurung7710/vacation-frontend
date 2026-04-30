# Implementation Plan: Everest Base Camp Trek

## Phase 1: Architecture & Data Foundation
- [x] Sub-task: Define `TrekData` TypeScript interface (enforcing the Entity schema).
- [x] Sub-task: Validate `ebc-data.json` against `TrekData` using runtime validation (e.g., Zod).
- [x] Sub-task: Create `data/ebc-data.json` mapped to the types.
- [x] Sub-task: Build `utils/schemaGenerator.ts` to output Knowledge Graph-ready JSON-LD (TouristTrip, LocalBusiness, FAQ, Review).
- [x] Task: Conductor - User Manual Verification 'Architecture & Data Foundation' (Protocol in workflow.md)

## Phase 2: Base UI & Brand Layer Generation
- [x] Sub-task: scaffold base components from shadcn/ui/headless components (Accordion, Cards, Buttons).
- [x] Sub-task: Develop `components/custom/AltitudeChart.tsx` (Recharts).
- [x] Sub-task: Develop `components/custom/CostBreakdown.tsx` & `TrekStats.tsx`.
- [x] Sub-task: Develop `components/custom/Hero.tsx` with Himalayan brand styling.
- [x] Sub-task: Implement lazy loading mechanisms for heavy components like AltitudeChart and Video embeds.
- [x] Task: Conductor - User Manual Verification 'Base UI & Brand Layer Generation' (Protocol in workflow.md)

## Phase 3: Content Assembly & Complexity Moat 
- [x] Sub-task: Build the main EBC detail page leveraging the JSON file.
- [x] Sub-task: Add internal anchor links between sections (Itinerary ↔ Cost ↔ FAQ ↔ Difficulty).
- [x] Sub-task: Structure the Helicopter Evacuation, Packing List, and Difficulty Guide visually.
- [x] Sub-task: Inject Multimedia SEO layer (optimized WebP images, accurate ALT texts, Video Embed schema, Video Transcripts).
- [x] Sub-task: Include explicit structured data tables (Cost table, Altitude table, Weather table) for AI extraction.
- [x] Task: Conductor - User Manual Verification 'Content Assembly & Complexity Moat' (Protocol in workflow.md)

## Phase 4: Conversion & Internal Ecosystem
- [x] Sub-task: Implement sticky mobile WhatsApp CTA and inline lead forms.
- [x] Sub-task: Build the internal linking/cluster blocks bridging EBC to Kathmandu / Route pages.
- [x] Sub-task: Implement EEAT Trust Markers (Author/Guide bios, fact-check tags).
- [x] Task: Conductor - User Manual Verification 'Conversion & Internal Ecosystem' (Protocol in workflow.md)

## Phase 5: Technical SEO Audit & Launch Readiness
- [x] Sub-task: Run performance profiling in Next.js to guarantee LCP < 2.5s.
- [x] Sub-task: Code-split heavy components (like Recharts API).
- [x] Sub-task: Final validate structured schema against Google Rich Results.
- [x] Task: Conductor - User Manual Verification 'Technical SEO Audit & Launch Readiness' (Protocol in workflow.md)

## Phase 6: Self-Audit & Strict Skill Execution
- [x] Sub-task: Render EEAT Trust Markers (Expert Guide bios from JSON) into the EBC UI layer.
- [x] Sub-task: Update `schemaGenerator.ts` to output `@type: "VideoObject"` to fulfill Multimedia SEO requirements.
- [x] Sub-task: Mount the existing `<TrekInquiryForm />` to fulfill the Inline Lead Form requirement.
- [ ] Task: Conductor - User Manual Verification 'Self-Audit & Strict Skill Execution' (Protocol in workflow.md)
