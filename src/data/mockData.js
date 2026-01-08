
export const collections = [
    {
        id: 1,
        title: "Rewards & Recognition Hampers",
        description: "Celebrate employee milestones with elegantly curated gift sets.",
        image: "/images/collections/rewards.jpg",
        link: "/collections/rewards-recognition"
    },
    {
        id: 2,
        title: "Creative & Innovative Gifting",
        description: "Unique, modern, and thoughtful gifting ideas crafted to delight teams.",
        image: "/images/collections/creative.jpg",
        link: "/collections/creative-innovative"
    },
    {
        id: 3,
        title: "Seasonal & Festive Gifting",
        description: "Luxury selections crafted for Diwali, Christmas, New Year, and corporate events.",
        image: "/images/collections/seasonal.jpg",
        link: "/collections/seasonal-festive"
    },
    {
        id: 4,
        title: "Luxury Gourmet Hampers",
        description: "Exclusive fine foods, artisanal treats, and premium delicacies.",
        image: "/images/collections/gourmet.jpg",
        link: "/collections/luxury-gourmet"
    },
    {
        id: 5,
        title: "Branded Merchandise Kits",
        description: "Custom-designed company-branded essentials for employees and clients.",
        image: "/images/collections/merchandise.jpg",
        link: "/collections/branded-merchandise"
    },
    {
        id: 6,
        title: "Eco-conscious Gifting",
        description: "Sustainable, meaningful, and eco-friendly choices for conscious corporates.",
        image: "/images/collections/eco.jpg",
        link: "/collections/eco-conscious"
    }
];


const collectionImages = [
  "/assets/collection/img.png",
  "/assets/collection/img-1.png",
  "/assets/collection/img-2.png",
  "/assets/collection/img-3.png",
  "/assets/collection/img-4.png",
  "/assets/collection/img-5.png",
  "/assets/collection/img-6.png",
  "/assets/collection/img-7.png",
  "/assets/collection/img-8.png",
  "/assets/collection/img-9.png",
  "/assets/collection/img-10.png",
  "/assets/collection/img-11.png",
  "/assets/collection/img-12.png",
  "/assets/collection/img-13.png",
  "/assets/collection/img-14.png",
  "/assets/collection/img-15.png"
];

export const products = [
    // --- Category 1: Rewards & Recognition (5 items) ---
    {
        id: "rewards-milestone-classic",
        categoryId: 1,
        name: "Classic Milestone Hamper",
        subtitle: "Timeless appreciation for dedicated service.",
        description: "A classic selection of premium dry fruits, a customized plaque, and a high-quality pen, perfect for recognizing work anniversaries.",
        images: [collectionImages[4], collectionImages[5]],
        customizationOptions: ["Engraved plaque name", "Company logo on box"],
        productDetails: ["Premium Almonds & Cashews (200g)", "Metal pen with case", "Customized acrylic plaque"],
        priceRange: { min: 1500, max: 2500, currency: "₹", note: "(customizable)" },
        features: [{ label: "Elegant Packaging", icon: "box" }, { label: "Personalized", icon: "user" }]
    },
    {
        id: "rewards-star-performer",
        categoryId: 1,
        name: "Star Performer Kit",
        subtitle: "For the ones who shine the brightest.",
        description: "Includes a tech gadget, a certificate of appreciation, and gourmet chocolates to celebrate outstanding performance.",
        images: [collectionImages[6], collectionImages[7]],
        customizationOptions: ["Custom certificate text", "Branded tech gear"],
        productDetails: ["Bluetooth Speaker or Power bank", "Box of Truffles", "Framed Certificate"],
        priceRange: { min: 2500, max: 4000, currency: "₹", note: "(customizable)" },
        features: [{ label: "Tech Included", icon: "cpu" }, { label: "Award Ready", icon: "star" }]
    },
    {
        id: "rewards-gratitude-box",
        categoryId: 1,
        name: "Gratitude Box",
        subtitle: "A heartfelt thank you in a box.",
        description: "Simple yet profound inclusive of a gratitude journal, aromatic candle, and herbal tea.",
        images: [collectionImages[8], collectionImages[9]],
        customizationOptions: ["Journal branding", "Note card"],
        productDetails: ["Gratitude Journal", "Scented Soy Candle", "Organic Green Tea"],
        priceRange: { min: 800, max: 1500, currency: "₹", note: "(customizable)" },
        features: [{ label: "Wellness Focused", icon: "heart" }]
    },
    {
        id: "rewards-leadership-gold",
        categoryId: 1,
        name: "Leadership Gold Tier",
        subtitle: "Premium gratitude for visionary leaders.",
        description: "Luxury leather desk set combined with imported coffee and a crystal trohpy.",
        images: [collectionImages[10], collectionImages[11]],
        customizationOptions: ["Embossed leather", "Etched crystal"],
        productDetails: ["Leather Desk Pad & Organizer", "Imported Colombian Coffee", "Crystal Trophy"],
        priceRange: { min: 5000, max: 8000, currency: "₹", note: "(customizable)" },
        features: [{ label: "Premium Materials", icon: "diamond" }]
    },
    {
        id: "rewards-long-service",
        categoryId: 1,
        name: "Legacy Service Award",
        subtitle: "Honoring years of loyalty and dedication.",
        description: "A Silver plated memento, vintage wine (non-alcoholic option available), and a luxury watch box.",
        images: [collectionImages[12], collectionImages[13]],
        customizationOptions: ["Date inscription", "Metal choice"],
        productDetails: ["Silver Plated Memento", "Sparkling Grape Juice/Wine", "Watch Organizer Box"],
        priceRange: { min: 4000, max: 7000, currency: "₹", note: "(customizable)" },
        features: [{ label: "Heirloom Quality", icon: "award" }]
    },

    // --- Category 2: Creative & Innovative Gifting (5 items) ---
    {
        id: "creative-tech-desk",
        categoryId: 2,
        name: "Modern Tech Desk Setup",
        subtitle: "Upgrade their workspace with style.",
        description: "Wireless charger, cable organizer, and a quirky desk plant pot.",
        images: [collectionImages[14], collectionImages[15]],
        customizationOptions: ["Logo on charger", "Color themes"],
        productDetails: ["Wireless Charging Pad", "Leather Cable Snap", "Ceramic Pot (Plant not included)"],
        priceRange: { min: 1200, max: 2000, currency: "₹", note: "(customizable)" },
        features: [{ label: "Modern Utility", icon: "zap" }]
    },
    {
        id: "creative-art-therapy",
        categoryId: 2,
        name: "Art Therapy Kit",
        subtitle: "Unleash creativity and reduce stress.",
        description: "Adult coloring book, premium colored pencils, and a DIY canvas painting set.",
        images: [collectionImages[1], collectionImages[2]],
        customizationOptions: ["Custom book cover"],
        productDetails: ["Mandala Coloring Book", "24-Pack Watercolor Pencils", "Small Canvas & Paints"],
        priceRange: { min: 1000, max: 1800, currency: "₹", note: "" },
        features: [{ label: "Stress Relief", icon: "smile" }]
    },
    {
        id: "creative-music-vibe",
        categoryId: 2,
        name: "Music Vibe Pack",
        subtitle: "For the audiophiles in the team.",
        description: "Retro-styled decoration piece and high-quality earphones.",
        images: [collectionImages[3], collectionImages[4]],
        customizationOptions: ["Earphone case branding"],
        productDetails: ["Retro Cassette Decor", "Wired/Wireless Earphones", "Spotify Playlist Card"],
        priceRange: { min: 1500, max: 3000, currency: "₹", note: "" },
        features: [{ label: "Fun & Funky", icon: "music" }]
    },
    {
        id: "creative-puzzle-master",
        categoryId: 2,
        name: "Mind Bender Puzzle Set",
        subtitle: "Sharpen the mind with fun puzzles.",
        description: "Wooden mechanical puzzles and a Rubik's cube.",
        images: [collectionImages[5], collectionImages[6]],
        customizationOptions: ["Box branding"],
        productDetails: ["3D Wooden Interlock Puzzle", "Speed Cube", "Instruction Guide"],
        priceRange: { min: 600, max: 1200, currency: "₹", note: "" },
        features: [{ label: "Brain Teaser", icon: "box" }]
    },
    {
        id: "creative-diy-grow",
        categoryId: 2,
        name: "DIY Microgreens Kit",
        subtitle: "Grow your own healthy greens at desk.",
        description: "Everything needed to grow microgreens: soil, seeds, and biodegradable pots.",
        images: [collectionImages[7], collectionImages[8]],
        customizationOptions: ["Seed selection", "Pot branding"],
        productDetails: ["Coco Peat Discs", "3 Varieties of Seeds", "Bamboo/Jute Pots"],
        priceRange: { min: 500, max: 1000, currency: "₹", note: "" },
        features: [{ label: "Eco-Friendly", icon: "leaf" }]
    },

    // --- Category 3: Seasonal & Festive Gifting (5 items) ---
    {
        id: "seasonal-diwali-delight",
        categoryId: 3,
        name: "Diwali Delight Box",
        subtitle: "Traditional brightness for the festival of lights.",
        description: "Hand-painted Diyas, box of Soan Papdi, and mixed dry fruits.",
        images: [collectionImages[9], collectionImages[10]],
        customizationOptions: ["Diya colors", "Sweet selection"],
        productDetails: ["Set of 4 Clay Diyas", "Soan Papdi (250g)", "Mixed Nuts (100g)"],
        priceRange: { min: 800, max: 1500, currency: "₹", note: "(seasonal)" },
        features: [{ label: "Traditional", icon: "sun" }]
    },
    {
        id: "seasonal-secret-santa",
        categoryId: 3,
        name: "Secret Santa Surprise",
        subtitle: "Joyful goodies for Christmas.",
        description: "Plum cake, Santa hat, and Christmas decor ornaments.",
        images: [collectionImages[11], collectionImages[12]],
        customizationOptions: ["Ornaments theme"],
        productDetails: ["Rich Plum Cake (250g)", "Santa Hat", "Tree Ornaments x 3"],
        priceRange: { min: 600, max: 1200, currency: "₹", note: "(seasonal)" },
        features: [{ label: "Festive Spirit", icon: "gift" }]
    },
    {
        id: "seasonal-new-year-bash",
        categoryId: 3,
        name: "New Year Bash Kit",
        subtitle: "Welcome the new year with a bang.",
        description: "Party poppers, planner for the new year, and gourmet popcorn.",
        images: [collectionImages[13], collectionImages[14]],
        customizationOptions: ["Planner year branding"],
        productDetails: ["2026 Daily Planner", "Gourmet Caramel Popcorn", "Party Poppers"],
        priceRange: { min: 1000, max: 1800, currency: "₹", note: "" },
        features: [{ label: "New Beginnings", icon: "calendar" }]
    },
    {
        id: "seasonal-holi-splash",
        categoryId: 3,
        name: "Holi Splash Hamper",
        subtitle: "Colorful wishes for a vibrant festival.",
        description: "Organic herbal colors, Thandai mix, and water-resistant phone pouch.",
        images: [collectionImages[15], collectionImages[1]],
        customizationOptions: ["Color selection"],
        productDetails: ["Herbal Gulal (3 colors)", "Instant Thandai Mix", "Waterproof Pouch"],
        priceRange: { min: 700, max: 1300, currency: "₹", note: "(seasonal)" },
        features: [{ label: "Organic Safe", icon: "droplet" }]
    },
    {
        id: "exquisite-premium-festive-hamper",
        categoryId: 3,
        name: "Exquisite Premium Festive Hamper",
        subtitle: "A bespoke corporate gifting solution crafted with elegance and detail.",
        description: "Celebrate your corporate relationships with a thoughtfully curated festive hamper, featuring premium assortments, artisanal treats, and customization options tailored for teams, clients, and leadership gifting.",
        images: [
            collectionImages[1],
            collectionImages[2],
            collectionImages[3],
            collectionImages[4]
        ],
        customizationOptions: [
            "Add corporate branding & logo",
            "Custom ribbon colors",
            "Personalized message cards",
            "Tailored product combinations",
            "Packaging upgrades (wooden box / luxury basket / premium fabric box)"
        ],
        productDetails: [
            "Premium dry fruits (almonds, pistachios, cashews)",
            "Luxury chocolate selection",
            "Imported teas / coffees",
            "Elegant handcrafted basket",
            "Optional add-ons: candles, fragrance sachets, corporate stationary kits"
        ],
        priceRange: {
            min: 500,
            max: 5000,
            currency: "₹",
            note: "(customizable)"
        },
        features: [
            { label: "Premium handpicked items", icon: "star" },
            { label: "Luxury packaging", icon: "gift" },
            { label: "Perfect for corporate festivals", icon: "building" },
            { label: "Bulk order support", icon: "users" },
            { label: "Quick dispatch", icon: "truck" }
        ]
    },

    // --- Category 4: Luxury Gourmet Hampers (5 items) ---
    {
        id: "gourmet-italian-dinner",
        categoryId: 4,
        name: "Italian Dinner Date",
        subtitle: "Authentic Italian flavors at home.",
        description: "Imported pasta, olive oil, basil pesto, and artisan cheese crackers.",
        images: [collectionImages[5], collectionImages[6]],
        customizationOptions: ["Wine pairing add-on"],
        productDetails: ["Durum Wheat Pasta", "Extra Virgin Olive Oil", "Basil Pesto Jar", "Parmesan Crackers"],
        priceRange: { min: 2000, max: 3500, currency: "₹", note: "" },
        features: [{ label: "Authentic Taste", icon: "globe" }]
    },
    {
        id: "gourmet-choco-connoisseur",
        categoryId: 4,
        name: "Chocolate Connoisseur Box",
        subtitle: "Dark, milk, and white luxury.",
        description: "Single-origin dark chocolate bars, pralines, and cocoa roasted almonds.",
        images: [collectionImages[7], collectionImages[8]],
        customizationOptions: ["Custom sleeve"],
        productDetails: ["70% Ecuador Dark Chocolate", "Swiss Pralines Box", "Cocoa Dusted Almonds"],
        priceRange: { min: 1500, max: 2500, currency: "₹", note: "" },
        features: [{ label: "Rich Flavor", icon: "heart" }]
    },
    {
        id: "gourmet-tea-time",
        categoryId: 4,
        name: "Royal High Tea Set",
        subtitle: "English breakfast experience.",
        description: "Earl Grey tea tin, shortbread cookies, and honey jar.",
        images: [collectionImages[9], collectionImages[10]],
        customizationOptions: ["Tea flavor choice"],
        productDetails: ["Earl Grey Loose Leaf", "Scottish Shortbread", "Organic Honey"],
        priceRange: { min: 1200, max: 2000, currency: "₹", note: "" },
        features: [{ label: "Relaxing", icon: "coffee" }]
    },
    {
        id: "gourmet-healthy-snack",
        categoryId: 4,
        name: "Healthy Snacking Edit",
        subtitle: "Guilt-free gourmet munching.",
        description: "Quinoa puffs, roasted seeds mix, and freeze-dried fruits.",
        images: [collectionImages[11], collectionImages[12]],
        customizationOptions: ["Dietary preferences"],
        productDetails: ["Spiced Quinoa Puffs", "7-Seeds Mix", "Freeze-Dried Strawberry"],
        priceRange: { min: 1000, max: 1800, currency: "₹", note: "" },
        features: [{ label: "Health Conscious", icon: "check" }]
    },
    {
        id: "gourmet-coffee-brew",
        categoryId: 4,
        name: "Artisan Coffee Brew Kit",
        subtitle: "For the serious coffee lover.",
        description: "French press ground coffee, dark chocolate coffee beans, and a ceramic mug.",
        images: [collectionImages[13], collectionImages[14]],
        customizationOptions: ["Roast level"],
        productDetails: ["Arabica Ground Coffee", "Choco-Coffee Beans", "Ceramic Mug"],
        priceRange: { min: 1800, max: 3000, currency: "₹", note: "" },
        features: [{ label: "Aromatic", icon: "coffee" }]
    },

    // --- Category 5: Branded Merchandise Kits (5 items) ---
    {
        id: "merch-welcome-kit",
        categoryId: 5,
        name: "New Joiner Welcome Kit",
        subtitle: "Make them feel part of the team day one.",
        description: "T-shirt, notebook, pen, and a sipper bottle, all branded.",
        images: [collectionImages[15], collectionImages[1]],
        customizationOptions: ["Full branding suite"],
        productDetails: ["Cotton T-Shirt", "Hardcover Notebook", "Metal Pen", "Sipper Bottle"],
        priceRange: { min: 1000, max: 2000, currency: "₹", note: "(bulk only)" },
        features: [{ label: "Onboarding Essential", icon: "user-plus" }]
    },
    {
        id: "merch-travel-kit",
        categoryId: 5,
        name: "Corporate Traveler Kit",
        subtitle: "Essentials for the team on the move.",
        description: "Travel neck pillow, passport holder, and luggage tag.",
        images: ["/images/products/merch2-main.jpg"],
        customizationOptions: ["Leather emboss"],
        productDetails: ["Memory Foam Neck Pillow", "Leather Passport Cover", "Metal Luggage Tag"],
        priceRange: { min: 1500, max: 2500, currency: "₹", note: "" },
        features: [{ label: "Travel Ready", icon: "plane" }]
    },
    {
        id: "merch-wfh-essentials",
        categoryId: 5,
        name: "WFH Essentials Bundle",
        subtitle: "Productivity at home.",
        description: "Laptop stand, ring light for calls, and a cable organizer pouch.",
        images: ["/images/products/merch3-main.jpg"],
        customizationOptions: ["Tech compatibility"],
        productDetails: ["Adjustable Laptop Stand", "Clip-on Ring Light", "Cable Pouch"],
        priceRange: { min: 2000, max: 3500, currency: "₹", note: "" },
        features: [{ label: "Productivity", icon: "wifi" }]
    },
    {
        id: "merch-fitness-pack",
        categoryId: 5,
        name: "Corporate Fitness Pack",
        subtitle: "Promoting health and wellness.",
        description: "Yoga mat, shaker bottle, and resistance bands.",
        images: ["/images/products/merch4-main.jpg"],
        customizationOptions: ["Color branding"],
        productDetails: ["Anti-skid Yoga Mat", "Shaker Bottle", "Set of 3 Resistance Bands"],
        priceRange: { min: 1200, max: 2200, currency: "₹", note: "" },
        features: [{ label: "Wellness", icon: "activity" }]
    },
    {
        id: "merch-executive-vest",
        categoryId: 5,
        name: "Executive Fleece Jacket",
        subtitle: "Warmth and style for the winter.",
        description: "Premium fleece jacket with subtle company logo embroidery.",
        images: ["/images/products/merch5-main.jpg"],
        customizationOptions: ["Embroidery location"],
        productDetails: ["Unisex Fleece Jacket", "YKK Zippers"],
        priceRange: { min: 1500, max: 2500, currency: "₹", note: "" },
        features: [{ label: "Premium Apparel", icon: "cloud-rain" }]
    },

    // --- Category 6: Eco-conscious Gifting (5 items) ---
    {
        id: "eco-zero-waste",
        categoryId: 6,
        name: "Zero Waste Starter Kit",
        subtitle: "A step towards a greener planet.",
        description: "Bamboo toothbrush, steel straw set, and reusable shopping bag.",
        images: ["/images/products/eco1-main.jpg"],
        customizationOptions: ["Pouch branding"],
        productDetails: ["Bamboo Toothbrush", "Steel Straws + Cleaner", "Cotton Tote Bag"],
        priceRange: { min: 500, max: 1000, currency: "₹", note: "" },
        features: [{ label: "Sustainable", icon: "recycle" }]
    },
    {
        id: "eco-office-stationery",
        categoryId: 6,
        name: "Plantable Stationery Set",
        subtitle: "Use it, then plant it.",
        description: "Plantable seed paper notebook, pens and pencils made from recycled paper.",
        images: ["/images/products/eco2-main.jpg"],
        customizationOptions: ["Seed type"],
        productDetails: ["Seed Paper Diary", "Set of 5 Plantable Pens", "Set of 5 Plantable Pencils"],
        priceRange: { min: 400, max: 800, currency: "₹", note: "" },
        features: [{ label: "Biodegradable", icon: "flower" }]
    },
    {
        id: "eco-bamboo-flask",
        categoryId: 6,
        name: "Bamboo Thermos Flask",
        subtitle: "Stylish hydration with natural touch.",
        description: "Double-walled steel flask with bamboo exterior finish.",
        images: ["/images/products/eco3-main.jpg"],
        customizationOptions: ["Engraving"],
        productDetails: ["500ml Capacity", "Tea Infuser Included", "Bamboo Shell"],
        priceRange: { min: 800, max: 1500, currency: "₹", note: "" },
        features: [{ label: "Plastic Free", icon: "droplet" }]
    },
    {
        id: "eco-cork-wallet",
        categoryId: 6,
        name: "Cork Accessories Set",
        subtitle: "Cruelty-free leather alternative.",
        description: "Wallet and keychain made from natural cork material.",
        images: ["/images/products/eco4-main.jpg"],
        customizationOptions: ["Box branding"],
        productDetails: ["Cork Wallet (Men/Women)", "Cork Keychain"],
        priceRange: { min: 1000, max: 2000, currency: "₹", note: "" },
        features: [{ label: "Vega Friendly", icon: "check-circle" }]
    },
    {
        id: "eco-solar-power",
        categoryId: 6,
        name: "Solar Power Bank",
        subtitle: "Charge on the go with the sun.",
        description: "Portable power bank with solar charging panel.",
        images: ["/images/products/eco5-main.jpg"],
        customizationOptions: ["Logo print"],
        productDetails: ["10000mAh Battery", "Solar Panel", "Dual USB Output"],
        priceRange: { min: 1500, max: 2500, currency: "₹", note: "" },
        features: [{ label: "Renewable Energy", icon: "sun" }]
    }
];
