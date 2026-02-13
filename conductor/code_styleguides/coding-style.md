# Coding Standards – Vacation Trekking Nepal

## Language
- TypeScript only
- Strict mode enabled

---

## Naming Conventions

Components:
- PascalCase
Example:
TrekCard.tsx

Functions:
- camelCase

Constants:
- UPPER_SNAKE_CASE

---

## Styling Rules

- Tailwind only
- No inline styles
- No CSS modules
- No styled-components

Use utility classes:
- spacing: px-6 py-12
- rounded-2xl
- shadow-sm

---

## Component Rules

1. Components must be reusable.
2. No hardcoded content inside components.
3. All text content must come from props or data.
4. Avoid large components (>200 lines).

---

## Performance Rules

- Use Next.js Image for all images.
- Use dynamic imports for heavy components (Mapbox).
- Avoid unnecessary re-renders.
- Memoize large lists if needed.

---

## SEO Rules

Every page must:
- Have unique title
- Have unique description
- Have canonical URL
- Use structured data for trek pages

---

## Accessibility

- All images must have alt text.
- Buttons must be keyboard accessible.
- Use semantic HTML (section, article, nav).
