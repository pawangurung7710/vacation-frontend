# Vacation Nepal Trekking - Design System

## 1. Core Philosophy & Positioning
**"Local Nepali expertise with global trust standards."**

This design system is a strategic hybrid of **GetYourGuide's conversion-driven discovery** (powerful hero imagery, dense but clear card data) and **Airbnb's elegant friction-less booking** (white space, sticky panels, refined typography). It avoids the cluttered, outdated "directory" look typical of local trekking agencies, signaling instead a premium, international brand.

## 2. Color System: Himalayan Serenity
Our palette is curated to reflect the natural environment of the Himalayas while maintaining digital accessibility and high-end contrast.

- **Background (Canvas):** `#F8FAFC` (Soft, icy white/gray). Prevents the harshness of pure white while feeling breathable.
- **Primary Text / Headings:** `#2C4A6A` (Deep Mountain Blue). Confident, trustworthy, and heavily used for all titles and primary copy.
- **CTA Accent:** `#006D77` (Teal/Evergreen). Used exclusively for primary actions ("Book Now", "Search"). This is our equivalent of Airbnb's pink or GYG's bright blue.
- **Earth Accent:** `#5D4037` (Warm Brown). Used for subtle highlights, icons, dividers, or tertiary badges to ground the design.
- **Surface (Cards/Panels):** `#FFFFFF` (Pure White). Creates subtle elevation against the `#F8FAFC` background.
- **Subtext / Metadata:** `#64748B` (Slate Gray) or `#475569`. Used for duration, altitude, and secondary information.
- **Borders:** `#E0E0E0`.

## 3. Typography & Hierarchy
Clean, modern typography (e.g., Inter, Outfit, or standard Sans-Serif) to ensure readability and a global feel.

- **Hero Display:** 56px to 72px, Bold. Overlaying majestic photography.
- **Page H1:** 36px to 48px, Bold (`#2C4A6A`).
- **Section H2:** 28px to 32px, Semi-Bold (`#2C4A6A`).
- **Trek Card Title:** 18px to 20px, Semi-Bold (`#2C4A6A`).
- **Card Metadata (Duration/Difficulty):** 14px, Medium (`#5D4037` or Gray).
- **Price Emphasis:** 18px, Bold (`#2C4A6A`).
- **Button Labels:** 16px, Medium.

*Rule: Generous line heights (1.5 for body) and negative letter-spacing (-0.02em) on massive headings for a chiseled look.*

## 4. Signature Components

### A. The Hero Search Section (Top of Funnel)
- **Visual:** Full-bleed, edge-to-edge breathtaking trekking photograph.
- **Layout:** Centered H1 (e.g., "Discover the Himalayas").
- **Search Pill:** A massive, `rounded-full` (pill-shaped) white container overlaid on the image. It contains location/date inputs and a nested CTA Accent (`#006D77`) "Search" button on the right edge.

### B. Trek Listing Cards (The Discovery Grid)
- **Container:** Pure white (`#FFFFFF`) sitting on the `#F8FAFC` background. `rounded-2xl` corners.
- **Image:** **Strictly `16:9` aspect ratio.** Ensures sweeping mountain ranges are not cropped into squares. Image inherits top `rounded-2xl` corners.
- **Interaction:** Slight card lift and a 2-3% image zoom on hover. Slow, smooth 300ms transition. No flashy animations.
- **Shadow:** `shadow-sm` by default, lifting to `shadow-md` on hover.
- **Metadata Structure (Top to Bottom):**
  1. Image (with subtle top-right wishlist heart).
  2. *Padding: 16px to 24px.*
  3. Pre-title: "14 Days • Max Alt: 5,364m • Strenuous" (Earth Accent or Slate, 14px).
  4. Title: "Everest Base Camp Trek" (Deep Mountain Blue, 18px).
  5. Bottom Row: Star rating/reviews on the left, **"From $1,350"** on the right. (Clear USD pricing).

### C. Detail Page (The Booking Flow)
- **Layout:** Asymmetric 2-column layout. 65% content (left) / 35% booking panel (right).
- **Sticky Booking Panel (Right Rail):** Mimicking Airbnb. Stays fixed on scroll. Pure white, `rounded-2xl`, with a soft layered shadow. Contains Price, Dates, Group Size, and a massive `#006D77` "Reserve" button.
- **Icon-Driven Amenities (Left):** Essential info (Permits, Meals, Guide, Porter, Flights) displayed as a clean grid with minimalist icons, reducing text bloat.

## 5. UI & Layout Principles
- **Generous White Space:** Minimum `gap-8` between grid items. `py-16` or `py-24` between major page sections. Do not overwhelm the user.
- **Rounded Geometry:** Modern `rounded-xl` (12px) or `rounded-2xl` (16px) on cards, panels, and images. `rounded-full` (pill) for primary buttons.
- **SEO Driven:** Semantic HTML, single H1 per page, structured H2/H3s for itineraries. SEO text blocks placed naturally without keyword stuffing.
- **International Appeal:** Clean UI, clear USD pricing, professional tone (no excessive exclamation points or local directory clutter).

## 6. Execution Checklist for Mockups
- [ ] Implement Himalayan Serenity colors in Tailwind config.
- [ ] Create 16:9 card components with split-row metadata.
- [ ] Build a pill-shaped search overlay.
- [ ] Ensure subtle hover states (no wild rotations or bounces).
