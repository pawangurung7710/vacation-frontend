# Specification: EBC Cinematic V2

## 1. Overview
Create a "movie-like" scrollytelling V2 page for the Everest Base Camp Trek. This page will act as an A/B test environment to evaluate high-immersion UX against traditional scrolling. It leverages raw competitor content (Discovery World Trekking and Alpine Ramble) to simulate a complete, dense information architecture without sacrificing premium aesthetics.

## 2. Functional Requirements
- **Routing:** Create a new Next.js route at `app/treks/everest-base-camp-cinematic/page.tsx`.
- **Scrollytelling Engine:** Implement sticky layouts (text scrolls left, media stays sticky right) using Tailwind CSS (`sticky top-20`).
- **Cinematic Animations:** Use `framer-motion` for `whileInView` fade-ins, gentle upward slides, and image reveals.
- **Narrative Flow Architecture:**
  - *The Dream (Hero)*
  - *The Hook & Reality* (Alternating soft gray)
  - *The Journey Begins* (Interactive daily timeline)
  - *The Challenge* (Altitude chart & logistics)
  - *The Reward* (Visuals & Trust Markers)
  - *The Action* (Dark theme CTA & Pricing)
- **Content Injection:** Directly import paragraphs and logistical breakdowns from DWT and Alpine Ramble as placeholder copy.
- **Quick Navigation:** Implement a "Skip to Itinerary/Price" sticky sub-nav button for logical buyers.

## 3. Non-Functional Requirements
- **Mobile Responsiveness:** Sticky layouts must gracefully degrade to vertical stacks on mobile (`md:` break point) while retaining fade-in animations.
- **Performance:** Animations must be lightweight so they do not cause scroll jank.

## 4. Out of Scope
- Overwriting the live `/treks/everest-base-camp` route.
- Final copywriting (placeholder text is expected).
