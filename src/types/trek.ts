import { z } from 'zod';

export const DayItinerarySchema = z.object({
  day: z.number(),
  title: z.string(),
  altitude: z.string(),
  altitudeMeters: z.number(),
  distance: z.string(),
  walkingHours: z.string(),
  accommodation: z.string(),
  meals: z.array(z.string()),
  experienceNote: z.string(), // "Complexity moat" note
});

export const CostItemSchema = z.object({
  category: z.string(),
  description: z.string(),
  amountUSD: z.number().optional()
});

export const FAQSchema = z.object({
  question: z.string(),
  answer: z.string() // Highly structured for AI snippet extraction
});

export const WeatherSchema = z.object({
  month: z.string(),
  condition: z.string(),
  tempDay: z.string(),
  tempNight: z.string(),
  suitability: z.enum(['Best', 'Good', 'Possible', 'Not Recommended'])
});

export const ReviewEntitySchema = z.object({
  author: z.string(),
  rating: z.number().min(1).max(5),
  date: z.string(),
  content: z.string()
});

export const GuideSchema = z.object({
  name: z.string(),
  experienceYears: z.number(),
  certifications: z.array(z.string()),
  bio: z.string()
});

export const TrekDataSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(), // Essential for AI summary
  longDescription: z.string(), // For the Trek Overview component
  highlights: z.array(z.string()), // For the Key Highlights block
  durationDays: z.number(),
  maxAltitudeMeters: z.number(),
  difficulty: z.enum(['Easy', 'Moderate', 'Challenging', 'Strenuous']),
  region: z.string(),
  startPoint: z.string(),
  endPoint: z.string(),
  totalCostUSD: z.number(),
  price: z.number(), // Required by legacy components like StickyInquiryCard
  trustBadges: z.array(z.string()),
  heroImage: z.string(), // URL
  images: z.array(z.string()), // URLs
  itinerary: z.array(DayItinerarySchema),
  costBreakdown: z.object({
    included: z.array(z.string()),
    excluded: z.array(z.string()),
    estimateBreakdown: z.array(CostItemSchema)
  }),
  weatherGuide: z.array(WeatherSchema),
  packingList: z.object({
    mustHave: z.array(z.string()),
    optional: z.array(z.string()),
    rentableInKathmandu: z.array(z.string())
  }),
  helicopterEvacuation: z.object({
    costRangeUSD: z.string(),
    insuranceRequired: z.boolean(),
    details: z.string()
  }),
  altitudeSicknessGuide: z.object({
    symptoms: z.array(z.string()),
    prevention: z.array(z.string()),
    policy: z.string()
  }),
  faqs: z.array(FAQSchema),
  reviews: z.array(ReviewEntitySchema),
  expertGuides: z.array(GuideSchema)
});

export type WeatherInfo = z.infer<typeof WeatherSchema>;
export type CostItemInfo = z.infer<typeof CostItemSchema>;
export type DayItinerary = z.infer<typeof DayItinerarySchema>;
export type TrekData = z.infer<typeof TrekDataSchema>;
export type FAQInfo = z.infer<typeof FAQSchema>;
export type ReviewEntity = z.infer<typeof ReviewEntitySchema>;
