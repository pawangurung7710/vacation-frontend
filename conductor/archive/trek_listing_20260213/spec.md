# Track Spec: 102 - Nepal Treks Listing Page

## Overview
The goal of this track is to implement the main collection page for all treks in Nepal. This page serves as a comparison and discovery hub, guiding users toward individual trek detail pages.

## User Stories
- As a traveler, I want to easily browse all available treks in Nepal so I can compare my options.
- As a traveler, I want to filter treks by difficulty, duration, region, and season to find the one that fits my needs.
- As a traveler, I want to sort treks by price and popularity to see what fits my budget and interests.
- As a traveler, I want to see key stats (days, altitude, price) at a glance for each trek.

## Requirements

### 1. Page Hero (Slim)
- Slim version (40-50% height).
- Breadcrumbs: Home > Nepal Treks.
- Heading: "Explore Treks in Nepal".
- Soft Himalayan background with light overlay.

### 2. Filter & Sort Bar
- Sticky on desktop.
- Filters: Region (Dropdown), Difficulty (Dropdown), Duration (Slider/Dropdown), Season (Multi-select), Price Range.
- Slide-out drawer on mobile for filters.
- Clear Filters button.

### 3. Trek Card Grid
- 3 columns (Desktop), 2 columns (Tablet), 1 column (Mobile).
- Cards showing: Image, Badges (Most Popular, etc.), Trek Name, 1-line description, Stats (Days, Altitude, Group Size, Difficulty), Price, and "View Details" button.

### 4. Search Results Header
- Count of treks found.
- Sort dropdown (Popularity, Price Low-High, Duration).

### 5. Mid-Page Promo Strip
- Subtle banner after 6-9 treks for seasonal promotions.

### 6. SEO Content Block
- Informative text section at the bottom explaining Nepal trekking.

### 7. Global Footer & Navbar
- Reuse existing components for consistency.

## Design
- Himalayan Serenity Palette:
  - Background: #F8FAFC
  - Headings/Cards: #2C4A6A
  - CTA Accent: #006D77
  - Soft shadows and rounded corners (rounded-2xl).
- Typography: Inter (Sans) and Outfit (Serif).

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Lucide React Icons
