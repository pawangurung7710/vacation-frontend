# Specification: Custom Trek / Personalized Itineraries Page (Track 104)

## Overview
A high-conversion landing page designed to capture premium and flexible travelers who want tailor-made Himalayan journeys. The V1 implementation focuses on a "Lean" ecosystem: high-impact design and local expertise, with WhatsApp as the primary conversion engine.

## Functional Requirements
- **Hero Section:** "Design Your Personalized Nepal Trek" headline with Start Planning/WhatsApp CTAs.
- **Trip Type Cards:** Three distinct cards (Private Group, Luxury, Short Treks) following the `premium-card` design system.
- **4-Step Process Bar:** Simple horizontal overview of the planning journey (Vision -> Draft -> Refine -> Confirm).
- **Custom Inquiry Form:**
    - Detailed multisector form (Personal, Trip Details, Style).
    - **V1 Logic:** On submit, construct a formatted summary string and open `https://wa.me/` with the pre-filled message.
- **Global Navigation:** Update `Navbar` and `Footer` to include "Custom Treks" as a primary destination.

## Acceptance Criteria
- [ ] Page accessible at `/treks/custom` or `/custom-trek`.
- [ ] Navbar and Footer links successfully lead to the custom page.
- [ ] Form validation ensures all required fields are present before opening WhatsApp.
- [ ] SEO H1/H2 structure matches the spec in `104-custom-trek.md`.
- [ ] Design remains 100% consistent with the `Himalayan Serenity Palette`.

## Out of Scope (Phase 1)
- Backend API routes and database storage.
- Email notifications.
- Interactive region maps.
