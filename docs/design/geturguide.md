# Design System Inspired by GetYourGuide

## 1. Visual Theme & Atmosphere
GetYourGuide's design is heavily focused on discovery and action. Unlike Airbnb's stark, minimalist white canvases, GetYourGuide leans into a slightly more energetic travel vibe, making prominent use of full-bleed hero images at the top of the page. It aims for high conversion and clear intent, using a vibrant primary blue to guide the user's eye to searchable elements and booking actions.

While Airbnb feels like a sleek editorial magazine, GetYourGuide feels like a highly optimized, modern e-commerce platform for travel experiences.

## 2. Color Palette & Roles
- **Brand Blue (Primary):** `#0060E9`. The high-contrast, energetic blue used for all primary actions: Search buttons, "Let's go" CTAs, and active states. It signals action and trust.
- **Brand Orange:** `#FF5533`. Used sparingly, primarily in the logo and occasional highlighting elements. 
- **Dark Navy (Text):** `#1A2B49`. The primary text color for headings. It provides a softer contrast than pure black, harmonizing well with the brand blue.
- **Medium Gray (Secondary Text):** `#63687A`. Used for body text, subtitles, and less critical metadata.
- **Alert Red:** `#D91E18`. Used for high-urgency badges like "Likely to sell out" or discount highlights.
- **Surface:** `#FFFFFF` (White) remains the primary background for content blocks below the hero, with subtle off-white or gray dividers.

## 3. Typography
- **Font Family:** `GT Eesti Pro Display` (or a similar modern, geometric sans-serif fallback). It has slightly more character than standard system fonts, giving a friendly but professional feel.
- **Hierarchy:**
  - **Hero Headings:** 48px to 56px, bold, often with negative tracking for impact. Overlaid in white on hero images.
  - **Section Headings:** 24px to 32px, dark navy, semi-bold.
  - **Listing Titles:** 16px, semi-bold. Limited to 2 lines for consistency in grid cards.
  - **Price:** 16px, bold. Usually denoted with a "From" prefix.
  - **Body / Metadata:** 14px, regular weight.

## 4. Component Stylings

### Buttons
- **Primary CTA ("Search", "Let's go"):** Full pill-shape (`border-radius: 999px`). Solid blue (`#0060E9`) background, white text. Generous horizontal padding.
- **Secondary CTA:** Can be outlined or text-only (e.g., "Change preferences"), utilizing the primary blue color for text.

### Listing Cards (Tours & Experiences)
- **Aspect Ratio:** `3:2` (Landscape). This differs from Airbnb's square (1:1) or portrait images, allowing wider scenic shots for tours.
- **Radius:** `12px` on images and containers.
- **Card Styling:** No shadow by default to keep the interface clean; a subtle shadow (`shadow-md`) appears on hover.
- **Metadata Flow:** 
  1. Image at top (often featuring top-left badges or a top-right wishlist heart).
  2. Category label (e.g., "Guided tour") in medium gray above the title.
  3. Title (Semi-bold, dark navy).
  4. Duration/Features (e.g., "2 hours").
  5. Bottom Row split: Rating (stars + numerical) on the left, Price ("From $XX") pushed to the right.

### Search Pill
- A massive, prominent centered pill overriding the hero image.
- Soft drop shadow to elevate it from the background photograph.
- Contains placeholder text on the left and a nested, solid blue pill-shaped "Search" button on the right edge.

## 5. Layout Principles
- **Grid:** Typically a 4-column structure on desktop for activity cards, collapsing to 2 on tablet and 1 on mobile.
- **Navigation:** 
  - Top bar features the logo on the left.
  - Functional icons (Wishlist, Cart, Currency, Profile) on the far right, with 12px labels beneath the icons.
  - Secondary navigation ("Places to see", "Things to do") sits just below the main header or adjacent to it as dropdowns.
- **Spacing:** Generous vertical whitespace between distinct sections (approx. `80px`), but tighter internal padding within cards (`4px` to `8px` between text elements) to keep information dense and scannable.
