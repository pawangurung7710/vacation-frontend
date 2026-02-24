# Future Roadmap & V2 Enhancements

This document tracks strategic features and improvements deferred during Phase 1 (MVP/Lean) implementation for later development stages.

---

## 🚀 Lead Handling & Backend
- **Hybrid Conversion System (WhatsApp + Email + DB):**
    - Implement simultaneous WhatsApp message generation and Database persistence.
    - Integrate **Resend** or **SendGrid** for structured email notifications to administrators.
    - Set up **Supabase** or **Vercel Postgres** for CRM-style lead management.
- **Lead Tracking:** 
    - Implement analytics events for partial form fills.
    - Track "WhatsApp Click-through Rate" vs form submission rate.

## 🗺 Navigation & Omnipresence
- **Deep Integration:**
    - **Listing Page Banner:** Add "Want to modify this itinerary?" contextual CTA within the sidebar of individual trek pages.
    - **Mid-listing CTA:** Insert a "Design Your Own" block between rows 2 and 3 of the trek grid.
    - **Footer Expansion:** Add a "Plan Your Trip" column in the global footer with links to Custom Treks, Group Treks, and Luxury Treks.

## 🎨 Visuals & High-End Content
- **Category-Specific Custom Imagery:**
    - **Private Group:** Photos showing intimate human connection and guide interaction.
    - **Luxury:** High-end lodge interiors and helicopter-based visual assets.
    - **Short Treks:** High-reward scenery and specific viewpoint photography.
- **Interactive Map Builder:** A simplified v1.5 map where users can click regions to "add" them to their custom interest list.

## 📈 Advanced SEO
- **Dynamic Meta Descriptions:** Generate unique metadata based on the specific "Custom Type" (Private/Luxury/Short).
- **Schema.org Extension:** Implement `Service` and `Offer` schema for custom trekking solutions.
