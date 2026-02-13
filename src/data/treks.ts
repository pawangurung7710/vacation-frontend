export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Strenuous";
export type Region = "Everest" | "Annapurna" | "Manaslu" | "Langtang" | "Mustang" | "Dolpo";
export type Season = "Spring" | "Autumn" | "Summer" | "Winter";

export interface ItineraryDay {
    day: number;
    title: string;
    altitude: string;
    hours: string;
    description: string;
}

export interface Trek {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    image: string;
    duration: number; // in days
    maxAltitude: number; // in meters
    difficulty: Difficulty;
    region: Region;
    bestSeasons: Season[];
    price: number; // in USD
    isPopular?: boolean;
    isBestSeller?: boolean;
    highlights?: string[];
    itinerary?: ItineraryDay[];
    includes?: string[];
    excludes?: string[];
}

export const treks: Trek[] = [
    {
        id: "ebc-14",
        title: "Everest Base Camp Trek",
        slug: "everest-base-camp",
        description: "The ultimate Himalayan adventure to the foot of the world's highest peak.",
        longDescription: "The Everest Base Camp trek is more than just a trek – it's a pilgrimage to the core of the Himalayas. Rising to an altitude of 5,364m, this journey takes you through high-altitude landscapes, Sherpa villages, and ancient monasteries. Experience the unique culture of the Khumbu region while standing in the shadow of Mount Everest.",
        image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?q=80&w=1200",
        duration: 14,
        maxAltitude: 5364,
        difficulty: "Strenuous",
        region: "Everest",
        bestSeasons: ["Spring", "Autumn"],
        price: 1250,
        isPopular: true,
        isBestSeller: true,
        highlights: [
            "Stand at the foot of Mount Everest (8,848m)",
            "Iconic flight from Kathmandu to Lukla",
            "Explore the vibrant Sherpa capital, Namche Bazaar",
            "Panoramic views from Kala Patthar (5,545m)",
            "Spiritual visit to Tengboche Monastery"
        ],
        itinerary: [
            { day: 1, title: "Arrival in Kathmandu", altitude: "1,400m", hours: "-", description: "Welcome to Nepal! We will pick you up from the airport and transfer you to your premium hotel." },
            { day: 2, title: "Full day Kathmandu Exploration", altitude: "1,400m", hours: "4-5", description: "Visit UNESCO world heritage sites and prepare for the trek." },
            { day: 3, title: "Fly to Lukla, Trek to Phakding", altitude: "2,610m", hours: "3-4", description: "Scenic flight followed by a gentle hike through the Dudh Koshi valley." },
            { day: 4, title: "Trek to Namche Bazaar", altitude: "3,440m", hours: "5-6", description: "Cross high suspension bridges and climb to the 'Capital of the Sherpas'." },
            { day: 5, title: "Acclimatization in Namche", altitude: "3,440m", hours: "3-4", description: "Hike to Everest View Hotel for your first clear look at the world's highest peak." },
            { day: 6, title: "Trek to Tengboche", altitude: "3,860m", hours: "5-6", description: "A spiritual journey to the famous monastery with stunning Ama Dablam views." }
        ],
        includes: [
            "All airport/hotel transfers",
            "Premium hotel in Kathmandu (2 nights)",
            "Standard teahouse accommodation during trek",
            "All meals (Breakfast, Lunch, Dinner)",
            "Professional local Sherpa guide",
            "Lukla flight tickets & airport taxes",
            "National Park permits and TIMS card"
        ],
        excludes: [
            "Nepal entry visa fee",
            "International flights",
            "Personal trekking gear",
            "Travel insurance (mandatory)",
            "Tips for guide and porters"
        ]
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
        highlights: [
            "Cross the Thorong La Pass (5,416m)",
            "Visit the sacred Muktinath Temple",
            "Experience diverse climates from subtropical to alpine",
            "Views of Annapurna and Dhaulagiri ranges"
        ]
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
        highlights: [
            "Stunning views of Mt. Manaslu (8,163m)",
            "Cross the Larkya La Pass (5,106m)",
            "Authentic Tibetan-Buddhist culture",
            "Remote, restricted area experience"
        ]
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
        highlights: [
            "360-degree mountain views within the ABC sanctuary",
            "Visit Machhapuchhre (Fishtail) Base Camp",
            "Relax in natural hot springs at Jhinu Danda",
            "Sunrise views from Poon Hill"
        ]
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
        highlights: [
            "Traditional Tamang culture and villages",
            "Stunning views of Langtang Lirung",
            "Climb Tserko Ri (4,984m) for panoramic views",
            "Lush rhododendron and bamboo forests"
        ]
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
        highlights: [
            "The medieval walled city of Lo Manthang",
            "Mysterious ancient 'sky caves'",
            "Arid, moon-like desert landscapes",
            "Untouched Tibetan culture and monasteries"
        ]
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
        highlights: [
            "Turquoise glacial lakes of Gokyo",
            "Views of four 8,000m peaks from Gokyo Ri",
            "Ngozumpa Glacier (Himalayas' longest)",
            "Less-crowded alternative to EBC"
        ]
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
        highlights: [
            "Crystal clear Phoksundo Lake",
            "Centuries-old Bon and Buddhist monasteries",
            "Cross two high passes (Kang La and Saldang La)",
            "Truly isolated wilderness experience"
        ]
    }
];
