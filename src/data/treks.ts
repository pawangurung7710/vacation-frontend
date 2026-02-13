export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Strenuous";
export type Region = "Everest" | "Annapurna" | "Manaslu" | "Langtang" | "Mustang" | "Dolpo";
export type Season = "Spring" | "Autumn" | "Summer" | "Winter";

export interface Trek {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    duration: number; // in days
    maxAltitude: number; // in meters
    difficulty: Difficulty;
    region: Region;
    bestSeasons: Season[];
    price: number; // in USD
    isPopular?: boolean;
    isBestSeller?: boolean;
}

export const treks: Trek[] = [
    {
        id: "ebc-14",
        title: "Everest Base Camp Trek",
        slug: "everest-base-camp",
        description: "The ultimate Himalayan adventure to the foot of the world's highest peak.",
        image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?q=80&w=1200",
        duration: 14,
        maxAltitude: 5364,
        difficulty: "Strenuous",
        region: "Everest",
        bestSeasons: ["Spring", "Autumn"],
        price: 1250,
        isPopular: true,
        isBestSeller: true,
    },
    {
        id: "ac-12",
        title: "Annapurna Circuit Trek",
        slug: "annapurna-circuit",
        description: "A diverse trek through lush valleys and high passes with incredible views.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
        duration: 12,
        maxAltitude: 5416,
        difficulty: "Moderate",
        region: "Annapurna",
        bestSeasons: ["Spring", "Autumn"],
        price: 1050,
        isPopular: true,
    },
    {
        id: "mc-15",
        title: "Manaslu Circuit Trek",
        slug: "manaslu-circuit",
        description: "A remote and culturally rich circuit around the 'Mountain of the Spirit'.",
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200",
        duration: 15,
        maxAltitude: 5106,
        difficulty: "Challenging",
        region: "Manaslu",
        bestSeasons: ["Spring", "Autumn"],
        price: 1450,
    },
    {
        id: "abc-10",
        title: "Annapurna Base Camp",
        slug: "annapurna-base-camp",
        description: "A classic trek into the heart of the Annapurna sanctuary.",
        image: "https://images.unsplash.com/photo-1502404554313-2a3b05423f05?q=80&w=1200",
        duration: 10,
        maxAltitude: 4130,
        difficulty: "Moderate",
        region: "Annapurna",
        bestSeasons: ["Spring", "Autumn"],
        price: 950,
        isBestSeller: true,
    },
    {
        id: "lv-7",
        title: "Langtang Valley Trek",
        slug: "langtang-valley",
        description: "A beautiful trek through rhododendron forests and high alpine meadows.",
        image: "https://images.unsplash.com/photo-1571401835393-8c5f3b39c6bc?q=80&w=1200",
        duration: 7,
        maxAltitude: 3870,
        difficulty: "Easy",
        region: "Langtang",
        bestSeasons: ["Spring", "Autumn"],
        price: 750,
    },
    {
        id: "um-10",
        title: "Upper Mustang Trek",
        slug: "upper-mustang",
        description: "Explore the ancient kingdom of Lo and the unique desert-like landscape.",
        image: "https://images.unsplash.com/photo-1526674170501-f18632e79b18?q=80&w=1200",
        duration: 10,
        maxAltitude: 3810,
        difficulty: "Moderate",
        region: "Mustang",
        bestSeasons: ["Spring", "Autumn", "Summer"],
        price: 1850,
    },
    {
        id: "gl-15",
        title: "Gokyo Lakes Trek",
        slug: "gokyo-lakes",
        description: "Experience the turquoise lakes and the Ngozumpa Glacier in the Everest region.",
        image: "https://images.unsplash.com/photo-1510137600163-2729bc6959a6?q=80&w=1200",
        duration: 15,
        maxAltitude: 5357,
        difficulty: "Strenuous",
        region: "Everest",
        bestSeasons: ["Spring", "Autumn"],
        price: 1350,
    },
    {
        id: "dp-18",
        title: "Upper Dolpo Trek",
        slug: "upper-dolpo",
        description: "A truly remote expedition into the hidden land of Bon culture.",
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200",
        duration: 18,
        maxAltitude: 5120,
        difficulty: "Challenging",
        region: "Dolpo",
        bestSeasons: ["Summer"],
        price: 2450,
    }
];
