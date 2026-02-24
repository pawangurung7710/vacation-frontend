# Specification: Special Offers / Deals Page (Track 105)

## Overview
A dedicated page to showcase active trekking deals with a focus on urgency and professional credibility. The page maintains a premium feel, avoiding "cheap" sales graphics, and uses curated offers to convert deal-driven visitors.

## Functional Requirements
- **Hero Section:** Light hero with "Exclusive Himalayan Trekking Offers" and primary CTA to view deals.
- **Active Offers Grid:** 
    - 2-3 column responsive grid of offer cards.
    - Each card includes: Trek image, type badge (e.g., Early Bird), title, description, highlights, and a clear expiry date.
    - **Actions:** "Claim This Offer" button redirects to WhatsApp or the inquiry form on the trek detail page.
- **Transparancy & Conditions:** Clear section outlining offer validities, group requirements, and deposit terms.
- **Urgency Section:** Visual block reinforcing limited-time availability.
- **Global CTA:** Final high-conversion block leading to WhatsApp/Inquiry.

## Design Requirements
- **Premium Aesthetics:** No flashy red "SALE" graphics. Use the `Himalayan Serenity Palette`.
- **Consistency:** Use the same card shadows and button styles as the rest of the site.
- **Visual Cues:** Subtle accent highlights for expiry dates to create urgency without being aggressive.

## Acceptance Criteria
- [ ] Page accessible at `/deals`.
- [ ] Responsive grid of at least 3 sample offers.
- [ ] "Claim This Offer" buttons work correctly (WhatsApp/Scroll to form).
- [ ] Meta Title/Description set for "Nepal Trekking Deals".
- [ ] SEO H1/H2 hierarchy strictly follows the task description.

## Out of Scope (V1)
- Backend logic for auto-deactivating offers.
- Dynamic countdown timers.
- User-specific discount codes.
