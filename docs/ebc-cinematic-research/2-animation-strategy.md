# Cinematic Animations Strategy — EBC V2 (PRO LEVEL)

> **Design Principle:** This is not a website with animated sections.
> This is **one continuous cinematic story** where each scene dissolves into the next.

---

## 1. Core Philosophy

### 1.1 One Continuous Story (Not Separate Sections)
The #1 mistake of the V1 implementation was treating each scene as a standalone section with a hard visual break. In cinema, scenes **transition** — they don't cut to black.

**Rule:** Every scene must visually dissolve, overlap, or morph into the next one.

### 1.2 Emotional Pacing (The Story Arc)
The page follows a classic **3-act narrative structure:**

```
ACT 1: SETUP        → Dream + Hook (inspire + ground)
ACT 2: CONFRONTATION → Journey + Challenge (build tension)
ACT 3: RESOLUTION    → Reward + Decision (climax + convert)
```

Each act has a distinct emotional tone backed by color, spacing, and animation speed.

### 1.3 Performance Rules (Non-Negotiable)
Nepal internet users will visit this page. Heavy animations = dead site.

| Rule | Why |
|------|-----|
| Only animate `transform` and `opacity` | These are GPU-composited. No layout thrashing. |
| Never use `onScroll` event listeners | Use Framer Motion `useScroll` (uses IntersectionObserver internally) |
| Lazy load all images | Use `next/image` with `loading="lazy"` |
| Add `will-change: transform` only on actively animating elements | Hint to browser GPU. Remove after animation. |
| Keep total page JS under 200KB gzipped | Audit with `next build && next analyze` |
| No video autoplay above the fold on mobile | Kills LCP score |

---

## 2. Universal UI Elements

### 2.1 Journey Progress Indicator (Sticky Top Bar)
A thin, sticky bar below the navbar showing the user's position in the story.

**Visual:**
```
┌──────────────────────────────────────────────────┐
│  ● Dream   ○ Journey   ○ Challenge   ○ Reward   │
└──────────────────────────────────────────────────┘
```

**Behavior:**
- Each label lights up (opacity 1, color `#006D77`) when its scene is active.
- Inactive labels stay muted (`opacity: 0.3`).
- A thin progress line fills between dots based on scroll position.

**Implementation:**
```tsx
const { scrollYProgress } = useScroll();
const sceneProgress = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 4]);
```

### 2.2 Color Flow (Background Mood)
The page background is NOT white throughout. It subtly shifts:

| Scene | Background | Text | Mood |
|-------|-----------|------|------|
| 1 - Dream | `#0F172A` (dark slate) | White | Cinematic, awe |
| 2 - Hook | `#F8FAFC` (light) | `#2C4A6A` | Grounding, real |
| 3 - Journey | `#FFFFFF` (white) | `#333` | Clean, informational |
| 4 - Challenge | `#1E293B` (dark blue-gray) | White | Tension, seriousness |
| 5 - Reward | `#0F172A` → bright burst | White → Gold | Emotional peak |
| 6 - Decision | `#F8FAFC` (light) | `#2C4A6A` | Clean, focused, trust |

---

## 3. Scene-by-Scene Deep Specification

---

### SCENE 1: THE DREAM (Hero)

**Purpose:** Inspire. Make the user feel the pull of Everest.

**Duration:** 100vh (full viewport height)

**Elements:**
1. Full-bleed background image (Everest at golden hour)
2. H1 title: "Everest Base Camp"
3. Subtitle: "This is not just a trek. It's a journey to the roof of the world."
4. Scroll hint arrow at bottom

**Animations:**

| Element | Initial | Animate | Timing |
|---------|---------|---------|--------|
| Background image | `scale: 1.1` | `scale: 1.0` (slow drift) | `duration: 20s, repeat: Infinity, ease: linear` |
| H1 | `opacity: 0, y: 40` | `opacity: 1, y: 0` | `duration: 1s, delay: 0.3` |
| Subtitle | `opacity: 0` | `opacity: 1` | `duration: 1s, delay: 0.8` |
| Scroll arrow | `opacity: 0, y: -10` | `opacity: 0.6, y: 0` | `duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: "reverse"` |

**Exit Transition (→ Scene 2):**
As the user scrolls past 80% of Scene 1:
- Background image: `opacity: 1 → 0.3`, `scale: 1.0 → 1.05` (slow push)
- Gradient overlay: darkens from 40% to 90% black
- H1 and subtitle: `opacity: 1 → 0`, `y: 0 → -30` (drift upward and vanish)

```tsx
const { scrollYProgress } = useScroll({ target: scene1Ref });
const heroOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
const heroScale  = useTransform(scrollYProgress, [0.6, 1], [1, 1.05]);
const overlayDark = useTransform(scrollYProgress, [0.6, 1], [0.4, 0.9]);
```

**Key:** Scene 2's first elements begin fading in at `scrollYProgress > 0.85`, creating a 15% overlap zone where both scenes are partially visible.

---

### SCENE 2: THE HOOK & REALITY

**Purpose:** Ground the dreamer. Acknowledge the anxiety. Build trust.

**Duration:** ~150vh (needs scroll room for sticky layout)

**Layout:**
```
┌─────────────────────────────────────────────┐
│                                             │
│   [Scrolling Text]     [Sticky Image]       │
│   Left 50%             Right 50%            │
│                                             │
│   Para 1 (fade in)     Image stays fixed    │
│   Para 2 (fade in)     while text scrolls   │
│   Para 3 (fade in)                          │
│                                             │
│              [Data Overlay Card]            │
│              Max Alt: 5,364m | 14 Days      │
│                                             │
└─────────────────────────────────────────────┘
```

**Animations:**

| Element | Trigger | Animation | Timing |
|---------|---------|-----------|--------|
| Each paragraph | `whileInView` | `opacity: 0→1, y: 20→0` | `duration: 0.6, ease: "easeOut"` |
| Sticky image | CSS `position: sticky; top: 8rem` | No JS animation needed | N/A |
| Data overlay card | `whileInView` on card container | `opacity: 0→1, y: 16→0` | `duration: 0.5, delay: 0.3` |

**Exit Transition (→ Scene 3):**
- The sticky image slowly desaturates (`filter: grayscale(0) → grayscale(0.5)`)
- Scene 3's heading begins fading in

---

### SCENE 3: THE JOURNEY (Interactive Itinerary)

**Purpose:** Make the user feel like they are *moving through* the Everest trail.

**Duration:** ~250vh+ (long — one scroll segment per day)

**Layout:**
```
┌─────────────────────────────────────────────┐
│                                             │
│   [Scrolling Day Cards]  [Sticky Right]     │
│   Left 55%               Right 45%          │
│                                             │
│   Day 1 ●───            Altitude Chart      │
│   Day 2   ●──           (updates as you     │
│   Day 3     ●─           scroll days)       │
│   ...                                       │
│   Day 14        ●        Current day        │
│                          highlighted         │
└─────────────────────────────────────────────┘
```

**Left Side — Day Cards:**

Each day is a card that appears as the user scrolls:

| Element | Trigger | Animation |
|---------|---------|-----------|
| Day number circle | `whileInView` | `scale: 0→1, opacity: 0→1` (pop) |
| Day title | `whileInView` | `opacity: 0→1, x: -20→0` (slide from left) |
| Description | `whileInView` | `opacity: 0→1` (simple fade, `delay: 0.15`) |
| Altitude/Accom badges | `whileInView` | `opacity: 0→1, y: 8→0` (`delay: 0.25`) |

**Right Side — Dynamic Altitude Visualization (Sticky):**

The `AltitudeChart` component is pinned with `position: sticky; top: 8rem`.

As the user scrolls through each day:
- The chart highlights the current day's data point (larger dot, glow effect).
- A vertical reference line moves to the current day.
- The altitude value updates with a count-up animation.

```tsx
// Track which day is currently in view
const [activeDay, setActiveDay] = useState(1);

// Each day card reports when it enters view
<motion.div
  onViewportEnter={() => setActiveDay(day.day)}
  viewport={{ margin: "-40% 0px -40% 0px" }}
>
```

**The Progress Line (Left Border):**
- A vertical line on the left that "fills" as the user scrolls.
- Uses `scaleY` driven by scroll progress of Scene 3's container.

```tsx
const { scrollYProgress } = useScroll({ target: scene3Ref });
// Line grows from 0 to 1 as user scrolls the itinerary
<motion.div
  style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
  className="absolute left-0 top-0 w-0.5 h-full bg-[#006D77]"
/>
```

**Exit Transition (→ Scene 4):**
- Background shifts from white to dark: `backgroundColor` interpolated via `useTransform`.
- Chart remains visible but the surrounding area darkens, creating a visual "tunnel" effect into the challenge.

---

### SCENE 4: THE CHALLENGE (Tension & Difficulty)

**Purpose:** Create the emotional dip. The user must feel the weight of altitude before the reward hits.

**Duration:** ~150vh

**Tone:** Dark. Serious. Cinematic tension.

**Background:** `#1E293B` (dark blue-gray) — a deliberate contrast to the bright journey.

**Layout:**
```
┌─────────────────────────────────────────────┐
│  DARK BACKGROUND                            │
│                                             │
│   [Sticky Chart]       [Scrolling Content]  │
│   Left 45%             Right 55%            │
│                                             │
│   AltitudeChart        "At 4,000m, your     │
│   (zooms in slowly)     body starts to      │
│                         fight back..."      │
│                                             │
│                        The Meat Rule         │
│                        Gut Health            │
│                        Emergency Evac        │
│                                             │
└─────────────────────────────────────────────┘
```

**Animations:**

| Element | Trigger | Animation | Notes |
|---------|---------|-----------|-------|
| Section entry | Scroll into view | `backgroundColor: #FFF → #1E293B` | Interpolated over 100px of scroll |
| Chart container | On section active | `scale: 1 → 1.03` | Very slow zoom (10s), creates tension |
| Each safety block | `whileInView` | `opacity: 0→1, x: 20→0` | Slide from right |
| "Meat Rule" icon | `whileInView` | `scale: 0→1` with spring | `type: "spring", stiffness: 200` |

**Copy Tone (Critical Change from V1):**

Instead of:
> ❌ "Emergency Helicopter Evacuation: In the rare event of severe AMS..."

Write:
> ✅ "At 4,940 meters, the air holds barely half the oxygen you're used to. Your steps slow. Your lungs burn. This is where preparation meets reality — and where our guides have kept every single trekker safe for 20+ years."

**Exit Transition (→ Scene 5):**
This is the **most important transition** on the entire page. It's the shift from tension to triumph.

- Background: `#1E293B` → pure black (`#000`) over 50px of scroll
- Then: a brief blackout (50vh of pure black — like a movie beat)
- Then: Scene 5 bursts in

---

### SCENE 5: THE REWARD (Cinematic Payoff)

**Purpose:** The emotional climax. The user should feel goosebumps.

**Duration:** ~200vh (needs breathing room)

**Sequence (this is scripted like a film):**

**Beat 1 — The Blackout (50vh)**
- Pure black screen.
- Nothing visible. The user scrolls through darkness.
- This creates *anticipation*.

**Beat 2 — The Reveal (100vh)**
- A massive, fullscreen image of Everest Base Camp fades in from black.
- `opacity: 0 → 1` over 200px of scroll.
- Image uses `object-fit: cover` on a `100vh` container.

```tsx
const imgOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
```

**Beat 3 — The Words (overlaid on image)**
- After the image is fully visible, text appears:

```
"You made it."
```
- `opacity: 0→1`, `duration: 1.2s`, `delay: 0` (as scroll reaches 40%)
- Font: 5rem, white, `text-shadow: 0 2px 40px rgba(0,0,0,0.5)`

**Beat 4 — The Pause (30vh spacer)**
- Nothing new appears. The user just scrolls with the image and text visible.
- This creates a moment of *emotional absorption*.

**Beat 5 — The Data (appears on scroll)**
```
"Everest Base Camp — 5,364m"
"The roof of the world, beneath your feet."
```
- `opacity: 0→1, y: 20→0`, staggered (`delay: 0.2` between lines)

**Beat 6 — The Gallery (3 images)**
- Three images fade in as a row: Monastery, Base Camp Rock, Sherpa portrait.
- Staggered: `delay: 0, 0.15, 0.3`
- Each image: `opacity: 0→1, scale: 0.95→1`

**Exit Transition (→ Scene 6):**
- The dark/dramatic background dissolves to light (`#F8FAFC`).
- The emotional images fade to a soft blur.
- Clean, focused Scene 6 emerges naturally.

---

### SCENE 6: THE DECISION (Natural Conversion)

**Purpose:** Convert the emotionally charged user into a lead — without killing the mood.

**Duration:** ~100vh

**Background:** `#F8FAFC` (clean, trustworthy, breathable)

**The Bridge Copy (Critical):**
Before showing ANY CTA, a transitional line appears:

```
"Now the question is…"
(pause — 10vh spacer)
"Will you experience this yourself?"
```

- `opacity: 0→1`, centered, `text-[#2C4A6A]`, `text-4xl`

**Then the CTA Section:**

```
┌─────────────────────────────────────────────┐
│                                             │
│   [Trust Copy]          [Inquiry Card]      │
│   Left 50%              Right 50%           │
│                                             │
│   "Your Everest Story   [Price]             │
│    Starts Here"         [Plan This Trek]    │
│                         [WhatsApp Now]      │
│   ✅ Guaranteed         [Trust badges]      │
│   ✅ Small Groups                           │
│   ✅ No Hidden Fees                         │
│                                             │
└─────────────────────────────────────────────┘
```

**Animations:**

| Element | Trigger | Animation |
|---------|---------|-----------|
| Bridge text | `whileInView` | `opacity: 0→1` (slow, `duration: 1s`) |
| Left trust copy | `whileInView` | `opacity: 0→1, y: 20→0` |
| Inquiry card | `whileInView` | `opacity: 0→1, y: 30→0, delay: 0.3` |
| CTA buttons | Hover | `scale: 1→1.02` (`whileHover`) |
| CTA buttons | Tap | `scale: 1→0.98` (`whileTap`) |

---

## 4. Transition Map (Complete)

This is the visual flow of how each scene connects:

```
SCENE 1 (Dream)
  │
  ├─ Hero darkens, text drifts up
  ├─ 15% overlap zone
  │
SCENE 2 (Hook)
  │
  ├─ Sticky image desaturates
  ├─ Background stays light
  │
SCENE 3 (Journey)
  │
  ├─ Background interpolates white → dark
  ├─ Chart stays visible, context shifts
  │
SCENE 4 (Challenge)
  │
  ├─ Background → pure black (beat)
  ├─ 50vh of darkness (anticipation)
  │
SCENE 5 (Reward)
  │
  ├─ Dark dissolves to light
  ├─ Emotional imagery fades/blurs
  │
SCENE 6 (Decision)
```

---

## 5. Framer Motion Patterns Used

### Pattern A: Scroll-Linked Transitions (Between Scenes)
```tsx
const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
```

### Pattern B: Viewport-Triggered Reveals (Within Scenes)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>
```

### Pattern C: Staggered Children
```tsx
const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

<motion.div variants={container} initial="hidden" whileInView="show">
  {items.map(i => <motion.div key={i} variants={item} />)}
</motion.div>
```

### Pattern D: Spring Physics (For Pops & Bounces)
```tsx
transition={{ type: "spring", stiffness: 200, damping: 20 }}
```
Used sparingly — only for day number circles and icon reveals.

---

## 6. Responsive Behavior

| Breakpoint | Layout Change |
|------------|--------------|
| Desktop (≥1024px) | Side-by-side sticky layouts. Full cinematic experience. |
| Tablet (768-1023px) | Sticky elements become inline. Reduced spacing. |
| Mobile (<768px) | All content stacks vertically. Sticky disabled. Simpler fade-only animations. No parallax. |

**Mobile-Specific Rules:**
- Disable `position: sticky` on media elements (they stack naturally).
- Reduce `whileInView` animation distances (`y: 20` → `y: 12`).
- Scene 5 fullscreen image uses `60vh` instead of `100vh`.
- The blackout beat (Scene 4→5) is reduced to `20vh`.
- Progress indicator switches to a simple dot row (no text labels).

---

## 7. Image & Asset Requirements

| Scene | Asset | Specs | Notes |
|-------|-------|-------|-------|
| 1 | `hero-ebc-golden.webp` | 1920×1080, <200KB | Everest at golden hour, dramatic sky |
| 2 | `hillary-bridge.webp` | 800×600, <100KB | Suspension bridge with prayer flags |
| 3 | `ebc-route-map.svg` | Vector, <30KB | Simplified trail map for sticky panel |
| 4 | (No new image — chart is the visual) | — | — |
| 5 | `base-camp-arrival.webp` | 1920×1080, <250KB | The iconic EBC rock/sign, wide angle |
| 5 | `monastery.webp` | 600×400, <80KB | Tengboche monastery |
| 5 | `sherpa-portrait.webp` | 600×400, <80KB | Authentic Sherpa guide portrait |
| 6 | (No image — clean CTA focus) | — | — |

**All images:** WebP format, served via `next/image` with `sizes` prop for responsive delivery.
