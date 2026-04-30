import { TrekData } from '../types/trek';

/**
 * Generates JSON-LD Structured Data for the entity graphs
 * Used directly within a `<script type="application/ld+json">` tag in Next.js
 */
export function generateTrekSchema(trek: TrekData) {
  // 1. Base LocalBusiness/Provider Entity
  const organizationEntity = {
    "@type": "TravelAgency",
    "@id": "https://vacationnepaltrekking.com/#organization",
    "name": "Vacation Nepal Trekking",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati",
      "addressCountry": "NP"
    },
    "description": "Premium local trekking and adventure operator in the Himalayas.",
    "url": "https://vacationnepaltrekking.com"
  };

  // 2. Aggregate Rating (If reviews exist)
  let aggregateRating;
  if (trek.reviews.length > 0) {
    const totalRating = trek.reviews.reduce((acc, curr) => acc + curr.rating, 0);
    aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": (totalRating / trek.reviews.length).toFixed(1),
      "reviewCount": trek.reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  // 3. Product & TouristTrip Entity (The core Trek)
  const productAndTripEntity = {
    "@context": "https://schema.org",
    "@type": ["Product", "TouristTrip"],
    "name": trek.name,
    "description": trek.description,
    "image": trek.heroImage,
    "tourType": "Trekking",
    "provider": {
      "@id": "https://vacationnepaltrekking.com/#organization"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": trek.region
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": trek.itinerary.map((day, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": `Day ${day.day}: ${day.title}`,
          "description": day.experienceNote
        }
      }))
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": trek.totalCostUSD,
      "availability": "https://schema.org/InStock",
      "url": `https://vacationnepaltrekking.com/treks/${trek.slug}`
    },
    ...(aggregateRating && { aggregateRating }),
    "review": trek.reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewBody": review.content
    }))
  };

  // 4. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": trek.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // 5. VideoObject Schema (Multimedia SEO)
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `${trek.name} Real Experience`,
    "description": `Detailed day-by-day video guide and experience of the ${trek.name}.`,
    "thumbnailUrl": trek.heroImage,
    "uploadDate": "2025-01-01T08:00:00+08:00",
    "contentUrl": "https://www.youtube.com/watch?v=mockvideo_ebc",
    "embedUrl": "https://www.youtube.com/embed/mockvideo_ebc",
    "publisher": {
      "@id": "https://vacationnepaltrekking.com/#organization"
    }
  };

  // Bundle the schemas into a Knowledge Graph array
  return [
    { "@context": "https://schema.org", ...organizationEntity },
    productAndTripEntity,
    faqSchema,
    videoSchema
  ];
}
