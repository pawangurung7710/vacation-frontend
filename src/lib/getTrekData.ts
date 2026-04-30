import { TrekDataSchema, TrekData } from '../types/trek';
import ebcData from '../data/ebc-data.json';

/**
 * Simulates fetching data from an API, while providing absolutely 
 * strict runtime Zod validation for our Entity structure.
 */
export async function getTrekBySlug(slug: string): Promise<TrekData | null> {
  // In Phase V2, this will be: await fetch(`api/treks/${slug}`)
  
  if (slug === 'everest-base-camp') {
    try {
      // 🚀 Zod Runtime Validation happens here! 
      // If the JSON is missing a required field or has a typo, this throws an error, 
      // preventing the UI from rendering broken or incomplete entity data.
      const validatedData = TrekDataSchema.parse(ebcData);
      return validatedData;
    } catch (error) {
      console.error("Critical Data Error: Schema validation failed for EBC JSON data", error);
      throw new Error("Failed to validate Trek Data Entity Schema.");
    }
  }

  return null;
}
