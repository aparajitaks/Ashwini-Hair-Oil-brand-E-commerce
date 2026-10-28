// Ashwini Herbal - Master Product Catalog
// Derived directly from packaging labels in /products/

export const PRODUCTS = [
  {
    id: "kumkumadi-thailam",
    name: "Ashwini Herbal Kumkumadi Thailam",
    subtitle: "Ayurvedic Face Glowing Oil for Radiant Skin",
    category: "skincare",
    concerns: ["pigmentation", "glowing", "anti-aging"],
    price: 599,
    originalPrice: 899,
    image: "products/Kumkumadi Thailam Ayurvedic Glow Oil.png",
    rating: 4.9,
    reviewsCount: 312,
    badge: "Ayurvedic Classic",
    netQuantity: "30 ml",
    tagline: "Natural Skin Brightening & Dark Spot Reduction",
    description: "An authentic classical Ayurvedic formulation crafted with pure Kashmir Saffron, Goat Milk, and Sandalwood. This sacred facial oil deeply nourishes, visibly fades stubborn pigmentation and dark spots, and restores a timeless golden radiance to dull, fatigued skin.",
    keyIngredients: [
      { name: "Kashmiri Keshari (Saffron)", role: "Brightens complexion & evens skin tone" },
      { name: "Goat Milk", role: "Deeply hydrates & enriches skin with natural lactic acid" },
      { name: "Sandalwood (Chandan)", role: "Soothes inflammation & calms redness" },
      { name: "Pure Almond Oil", role: "Rich in Vitamin E for cellular rejuvenation" },
      { name: "Brahmi Kamal", role: "Botanical antioxidant boosting collagen" },
      { name: "Aloe Vera", role: "Hydrates and cools stressed facial skin" }
    ],
    benefits: [
      "Visibly fades dark spots, blemishes & hyperpigmentation",
      "Gives soft, glowing, radiant complexion within weeks",
      "Restores natural skin lipid barrier without greasy feel",
      "Handmade formula suitable for all skin types"
    ],
    howToUse: "Wash face thoroughly with Ashwini Manjista Face Wash. Take 3-4 golden drops of Kumkumadi Thailam on your palm, gently dab across face and neck, and massage in upward circular motions before bedtime for overnight absorption.",
    features: ["100% Natural", "Herbal Formula", "Handmade Small Batch", "No Mineral Oils"]
  },
  {
    id: "manjista-face-wash",
    name: "Ashwini Herbal Manjista Face Wash",
    subtitle: "Pigmentation & Deep Cleansing Herbal Face Wash",
    category: "skincare",
    concerns: ["pigmentation", "acne", "oily-skin"],
    price: 349,
    originalPrice: 449,
    image: "products/Ashwini Manjista Herbal Face Wash Display.png",
    rating: 4.8,
    reviewsCount: 248,
    badge: "Official Label ₹349",
    netQuantity: "100 ml",
    tagline: "Formulated for Oily & Pigmentation Prone Skin",
    description: "Infused with pure Manjistha (Indian Madder) extract, hibiscus flowers, and botanical herbs. This gentle gel-based cleanser penetrates deep into pores to lift impurities, regulate excess sebum production, and target acne spots without stripping skin of essential moisture.",
    keyIngredients: [
      { name: "Pure Manjistha", role: "Ayurvedic blood purifier reducing skin discoloration" },
      { name: "Hibiscus Extracts", role: "Natural alpha-hydroxy acids that gently exfoliate" },
      { name: "Chamomile Flower", role: "Calms irritated and sensitive acne-prone skin" },
      { name: "Botanical Gels", role: "Sulfate-free gentle cleansing base" }
    ],
    benefits: [
      "Helps diminish dark spots and blemishes (ಮುಖದ ಕಪ್ಪು ಕಲೆಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ)",
      "Controls excess oiliness and prevents breakout cycles",
      "Purifies pores and promotes even, luminous complexion",
      "100% safe, natural and effective everyday face wash"
    ],
    howToUse: "Pump 1-2 pumps onto damp palms. Work into a silky herbal lather and massage gently over damp face and neck for 60 seconds. Rinse thoroughly with cool water. Use morning and night.",
    features: ["Suitable for Oily Skin", "Natural & Effective", "Cruelty Free", "Paraben Free"]
  },
  {
    id: "rosemary-black-hair-oil",
    name: "Ashwini Herbal Rosemary Black Hair Oil",
    subtitle: "22 Herbal Ingredients for Strong & Healthy Black Hair",
    category: "haircare",
    concerns: ["hairfall", "dandruff", "hair-growth"],
    price: 449,
    originalPrice: 649,
    image: "products/Gemini_Generated_Image_lg7ikqlg7ikqlg7i.png",
    rating: 4.9,
    reviewsCount: 520,
    badge: "Bestseller #1",
    netQuantity: "200 ml",
    tagline: "Enriched with 22 Potent Ayurvedic Herbs & Rosemary",
    description: "Our signature hair elixir crafted through traditional slow-heat decoction (Kshirapak vidhi). Packed with 22 pure botanicals including Rosemary, Bhringraj (King of Hair), Amla, Fenugreek, and Curry Leaves to stimulate dormant follicles, eliminate dandruff, and promote thick, lustrous black hair.",
    keyIngredients: [
      { name: "Rosemary Essential Extract", role: "Stimulates scalp micro-circulation and hair regrowth" },
      { name: "Bhringraj (King of Herbs)", role: "Strengthens hair roots and halts excessive shedding" },
      { name: "Amla (Indian Gooseberry)", role: "Rich Vitamin C prevents premature greying and adds shine" },
      { name: "Fenugreek (Methi) & Kalonji", role: "Provides plant keratin to repair damaged strands" },
      { name: "Curry Leaves & Hibiscus", role: "Deeply conditions and strengthens hair follicles" }
    ],
    benefits: [
      "Significantly reduces hair fall and hair breakage",
      "Stimulates baby hair growth along hairline and crown",
      "Soothes itchy scalp and controls dry dandruff flakes",
      "Maintains natural dark pigment and deep glossy shine"
    ],
    howToUse: "Part hair into sections. Apply oil generously directly onto scalp using fingertips. Gently massage scalp in circular motions for 10 minutes to enhance blood flow. Leave on for at least 2 hours or overnight before washing with Ashwini Natural Herbs Shampoo.",
    features: ["22 Herbal Ingredients", "100% Pure & Organic Formula", "Mineral Oil Free", "For Men & Women"]
  },
  {
    id: "herbal-hair-care-collection",
    name: "Ashwini Herbal Hair Care Complete Trio",
    subtitle: "Hair Oil (200ml) + Shampoo (200ml) + Growth Powder Mask (100g)",
    category: "combos",
    concerns: ["hairfall", "dandruff", "hair-growth"],
    price: 849,
    originalPrice: 1299,
    image: "products/Ashwini Herbal Hair Care Collection.png",
    rating: 4.9,
    reviewsCount: 189,
    badge: "Hair Growth Kit",
    netQuantity: "3-Piece Complete Routine",
    tagline: "Complete Ayurvedic Regimen for Complete Hair Transformation",
    description: "The ultimate 3-step Ayurvedic hair restoration ritual. Includes: 1) Ashwini 20+ Herbs Hair Oil (200ml) for root nourishment, 2) Ashwini Natural Herbs Shampoo with Amla, Reetha & Shikakai (200ml) for gentle clarifying, and 3) Ashwini Hair Growth Powder Mask (100g) with Bhringraj, Brahmi and Rosemary for intensive strand strengthening.",
    keyIngredients: [
      { name: "Amla, Reetha & Shikakai", role: "Natural saponins for chemical-free cleansing without stripping natural oils" },
      { name: "20+ Ayurvedic Herbs", role: "Nourishes roots and stimulates new follicle growth" },
      { name: "Brahmi & Bhringraj Powder", role: "Repairs split ends and strengthens thinning hair shafts" },
      { name: "Rosemary & Hibiscus Mask", role: "Conditions deeply and restores scalp vitality" }
    ],
    benefits: [
      "3-in-1 complete salon-grade Ayurvedic hair routine at home",
      "Anti-dandruff and intensive hair-fall control synergy",
      "Free from sulfates, silicones, and synthetic foaming agents",
      "Massive ₹450 savings compared to purchasing items individually"
    ],
    howToUse: "Step 1: Oil scalp with Hair Oil and leave overnight. Step 2: Mix 2 spoons of Hair Mask powder with Aloe Gel/water, apply for 30 mins once a week. Step 3: Wash cleanly with Natural Herbs Shampoo.",
    features: ["Complete 3-Step Routine", "Sulphate & Paraben Free", "High Value Combo", "100% Natural"]
  },
  {
    id: "day-night-cream-duo",
    name: "Pigmentation Day Cream & Night Cream Duo",
    subtitle: "24-Hour Intensive Pigmentation & Skin Tone Balance",
    category: "combos",
    concerns: ["pigmentation", "glowing", "anti-aging"],
    price: 799,
    originalPrice: 1199,
    image: "products/Gemini_Generated_Image_sgjkkssgjkkssgjk.png",
    rating: 4.8,
    reviewsCount: 265,
    badge: "Best Value Duo",
    netQuantity: "50g + 50g (100g total)",
    tagline: "Target Pigmentation Day & Night with Dual Ayurvedic Action",
    description: "A synergistic 24-hour skincare pair. The Day Cream shields your skin with natural botanical brighteners and light hydration, while the Overnight Renewal Night Cream works during sleep when skin repair peaks, infused with licorice, chamomile, and natural peptides to clear melasma, tanning, and patchy pigmentation.",
    keyIngredients: [
      { name: "Licorice (Mulethi)", role: "Natural tyrosinase inhibitor that fades dark melanin spots" },
      { name: "Chamomile Flower Extract", role: "Calms UV-induced redness and accelerates cellular healing" },
      { name: "Niacinamide Herbal Complex", role: "Evens out mottled skin tone and tightens pore texture" },
      { name: "Saffron & Shea Butter", role: "Locks in deep moisture for supple, plump morning skin" }
    ],
    benefits: [
      "Continuous 24-hour brightening and anti-pigmentation care",
      "Reduces dark spots, sun tan, and post-acne blemishes",
      "Non-greasy, fast-absorbing day formula under sunscreen/makeup",
      "Rich nourishing night formula awakens skin with glass-like glow"
    ],
    howToUse: "Day: Apply Day Cream after washing face. Massage smoothly into face and neck. Night: Before bed, apply Overnight Renewal Night Cream liberally and let it nourish your skin until morning.",
    features: ["Dermatologically Tested", "Chemical Free", "Double 50g Jars", "Visible Results in 3-4 Weeks"]
  },
  {
    id: "overnight-renewal-night-cream",
    name: "Ashwini Overnight Renewal Night Cream",
    subtitle: "Nourishes, Repairs & Restores Youthful Glow",
    category: "skincare",
    concerns: ["pigmentation", "glowing", "anti-aging"],
    price: 499,
    originalPrice: 699,
    image: "products/Gemini_Generated_Image_ihjzb8ihjzb8ihjz.png",
    rating: 4.8,
    reviewsCount: 142,
    badge: "Overnight Miracle",
    netQuantity: "50g Jar",
    tagline: "Licorice & Chamomile Night Time Rejuvenation",
    description: "Awaken to velvety soft, luminous skin. This deeply restorative cream utilizes the nocturnal healing cycle to replenish lost moisture, soothe environmental stress, and fade hyperpigmentation with concentrated botanical actives.",
    keyIngredients: [
      { name: "Licorice Root Extract", role: "Fades dark spots and promotes uniform skin luminescence" },
      { name: "German Chamomile", role: "Soothes skin inflammation and reduces micro-swelling" },
      { name: "Sweet Almond Oil", role: "Feeds skin with essential fatty acids and Vitamin E" },
      { name: "Pure Rose Hydrosol", role: "Balances skin pH and tones delicate facial tissues" }
    ],
    benefits: [
      "Repairs sun and pollution damage overnight",
      "Deeply hydrates dry and exhausted skin barriers",
      "Reveals refreshed, radiant complexion every morning",
      "Lightweight, non-comedogenic herbal cream"
    ],
    howToUse: "Dot across cleansed face and neck every evening. Massage in gentle circular and upward strokes until completely absorbed.",
    features: ["Zero Mineral Oil", "Non-Sticky Formula", "Ayurvedic Botanical Blend"]
  },
  {
    id: "glow-drops-botanical-serum",
    name: "Ashwini Glow Drops Botanical Serum",
    subtitle: "Carrot, Pomegranate, Lotus, Papaya & Beetroot Elixir",
    category: "skincare",
    concerns: ["glowing", "pigmentation"],
    price: 429,
    originalPrice: 650,
    image: "products/Ashwini Glow Drops Botanical Serum.png",
    rating: 4.9,
    reviewsCount: 178,
    badge: "Superfood Infusion",
    netQuantity: "15 ml Amber Dropper",
    tagline: "Natural | Pure | Effective Superfood Facial Serum",
    description: "An antioxidant powerhouse concentrated with 6 natural super-botanicals: Wild Carrot (Beta Carotene), Ruby Pomegranate (Polyphenols), Sacred Pink Lotus, Papaya (Papain Enzyme), Sweet Orange (Natural Vitamin C), and Beetroot. Brings instant dewiness and long-term clarity.",
    keyIngredients: [
      { name: "Wild Carrot Extract", role: "Rich in pro-vitamin A for cellular renewal" },
      { name: "Pomegranate Seed Essence", role: "Potent free-radical scavenger preserving firmness" },
      { name: "Pink Lotus Petal Water", role: "Refines skin texture and lends petal-soft texture" },
      { name: "Papaya Enzyme", role: "Mildly micro-exfoliates dead cells to reveal fresh skin" },
      { name: "Sweet Orange & Beetroot", role: "Natural glow boosters enhancing natural pink undertones" }
    ],
    benefits: [
      "Delivers high-impact botanical glow without makeup",
      "Fades dullness and evens out rough texture",
      "Concentrated lightweight drops absorb instantly",
      "Protects against daily screen blue light and oxidative stress"
    ],
    howToUse: "Dispense 3-4 drops onto clean fingertips. Press into skin until fully absorbed. Follow with moisturizer or sunscreen.",
    features: ["100% Vegan & Herbal", "Cold-Pressed Superfoods", "No Artificial Fragrances"]
  },
  {
    id: "glow-pigmentation-day-serum",
    name: "Ashwini Glow & Pigmentation Day Serum",
    subtitle: "Saffron, Turmeric & Neem for Oily & Acne-Prone Skin",
    category: "skincare",
    concerns: ["acne", "oily-skin", "pigmentation"],
    price: 399,
    originalPrice: 599,
    image: "products/Gemini_Generated_Image_rnds3irnds3irnds.png",
    rating: 4.7,
    reviewsCount: 198,
    badge: "Acne & Glow",
    netQuantity: "15 ml",
    tagline: "Clear Blemishes and Boost Radiance Simultaneously",
    description: "Specially formulated for Indian skin prone to excess sebum, humidity breakouts, and post-acne dark marks. Combines antibacterial Neem and Kasturi Manjal with radiant Kashmiri Saffron in a water-light, fast-absorbing serum base.",
    keyIngredients: [
      { name: "Kasturi Manjal (Wild Turmeric)", role: "Antibacterial and anti-inflammatory brightening agent" },
      { name: "Pure Organic Neem", role: "Clears acne-causing bacteria and prevents recurring pimples" },
      { name: "Saffron Threads", role: "Fades dark post-inflammatory hyperpigmentation" }
    ],
    benefits: [
      "Calms active acne breakouts without drying out skin",
      "Fades stubborn acne marks and stubborn spots",
      "Leaves skin shine-free, matte yet naturally luminous"
    ],
    howToUse: "Apply 2-3 drops to cleansed skin every morning, focusing on blemish-prone areas. Allow 1 minute to sink in before sunscreen.",
    features: ["Fast Absorbing", "Non-Comedogenic", "Formulated for Oily Skin"]
  },
  {
    id: "pure-aloevera-jell",
    name: "Ashwini Pure Aloevera Jell (2-in-1 Skin & Hair)",
    subtitle: "Multi-Purpose Skin Moisturizer & Hair Hydration Gel",
    category: "skincare",
    concerns: ["glowing", "acne", "hairfall"],
    price: 279,
    originalPrice: 399,
    image: "products/Ashwini Aloe Vera Gel Spa Still Life.png",
    rating: 4.8,
    reviewsCount: 410,
    badge: "2-in-1 Skin & Hair",
    netQuantity: "200g Jar",
    tagline: "100% Pure Soothing Aloe Vera for Head-to-Toe Wellness",
    description: "Harvested from mature, organically grown aloe barbadensis leaves. This crystal-clear cooling jelly works miracles as an ultra-hydrating daily moisturizer, after-sun soother, sleeping mask, acne calmer, hair styling conditioner, and soothing scalp pack.",
    keyIngredients: [
      { name: "Pure Aloe Vera Leaf Juice (99%)", role: "Provides instant cellular hydration and reduces skin irritation" },
      { name: "Vitamin E & C Complex", role: "Protects collagen and speeds recovery from sunburns" }
    ],
    benefits: [
      "Soothes sunburn, shaving bumps, rashes and itchy skin",
      "Hydrates oily and sensitive skin without any sticky feeling",
      "Tames hair frizz, conditions dry scalp and adds natural gloss",
      "Ideal primer base before makeup application"
    ],
    howToUse: "Skin: Smooth over face, arms, and neck whenever hydration is needed. Hair: Apply a coin-sized amount through towel-dried hair ends as leave-in conditioner, or apply generously to scalp 30 mins before hair wash.",
    features: ["No Added Artificial Colors", "Zero Sticky Residue", "Multipurpose 2-in-1"]
  },
  {
    id: "neem-aloevera-face-wash",
    name: "Ashwini Neem Aloevera Face Wash",
    subtitle: "Pimple & Acne Control Gentle Foaming Cleanser",
    category: "skincare",
    concerns: ["acne", "oily-skin"],
    price: 299,
    originalPrice: 399,
    image: "products/Gemini_Generated_Image_edmqltedmqltedmq.png",
    rating: 4.7,
    reviewsCount: 310,
    badge: "Acne Defense",
    netQuantity: "100 ml Pump Bottle",
    tagline: "Neem + Aloevera + Turmeric + Tulsi Formula",
    description: "An Ayurvedic four-herb defense powerhouse featuring Neem, Aloe Vera, Curcuma Longa (Turmeric), and Holy Basil (Tulsi). Effectively removes stubborn grime, unblocks trapped sebum in pores, and arrests pimple growth from day 1.",
    keyIngredients: [
      { name: "Neem Extracts", role: "Purges deep bacterial colonies causing pimples" },
      { name: "Aloe Vera Gel", role: "Soothes angry inflamed red skin" },
      { name: "Haldi (Turmeric)", role: "Promotes speedy skin tissue repair and prevents scarring" },
      { name: "Tulsi (Holy Basil)", role: "Flushes out free radicals and pollution particles" }
    ],
    benefits: [
      "Fast action against stubborn pimples and whiteheads",
      "Gentle enough for everyday morning and evening use",
      "Leaves skin feeling minty-fresh, squeaky clean, and hydrated",
      "Tested and suitable for all skin types, especially combination to oily"
    ],
    howToUse: "Splash face with lukewarm water. Pump a coin-sized drop onto your palm and gently lather over face in small circles for 1 minute. Rinse well.",
    features: ["All Skin Types", "Sulphate Free", "Purifying Botanical Formula"]
  },
  {
    id: "charcoal-soap-pack-of-3",
    name: "Ashwini Herbal Charcoal Soap (Pack of 3)",
    subtitle: "Handmade Activated Bamboo Charcoal Detox Bars",
    category: "soaps",
    concerns: ["acne", "oily-skin"],
    price: 449,
    originalPrice: 599,
    image: "products/Gemini_Generated_Image_2p1dbl2p1dbl2p1d.png",
    rating: 4.8,
    reviewsCount: 388,
    badge: "Pack of 3 Deal ₹449",
    netQuantity: "Pack of 3 Bars (100g each)",
    tagline: "Deep Pore Cleansing & Oil Control • Free Shipping",
    description: "Cold-processed handmade soap bars loaded with activated coconut bamboo charcoal and cold-pressed coconut oil. Acts like a natural magnet to pull dirt, pollution, and oil from deep inside pores, leaving your skin thoroughly detoxified, clean, and velvety smooth.",
    keyIngredients: [
      { name: "Activated Bamboo Charcoal", role: "Adsorbs deep micro-toxins and unclogs blackheads" },
      { name: "Cold Pressed Coconut Oil", role: "Provides rich lather and ensures zero dryness" },
      { name: "Natural Essential Oils", role: "Refreshing natural aroma and antibacterial shielding" }
    ],
    benefits: [
      "Eliminates back acne, chest acne, and facial breakout triggers",
      "Balances oily skin throughout humid days",
      "Chemical and paraben free handmade soap bars",
      "Special 3-Pack offer with Free Delivery across India"
    ],
    howToUse: "Wet the soap bar to create rich creamy black-grey lather. Apply gently over face and body. Allow herbs 30 seconds to work on pores, then rinse thoroughly.",
    features: ["Handmade", "Chemical & Paraben Free", "Pack of 3 Offer", "Free Shipping"]
  },
  {
    id: "coffee-glow-soap-pack-of-3",
    name: "Ashwini Coffee Glow Soap (Pack of 3)",
    subtitle: "Tan Removal & Skin Brightening Exfoliating Bars",
    category: "soaps",
    concerns: ["glowing", "pigmentation"],
    price: 449,
    originalPrice: 599,
    image: "products/Gemini_Generated_Image_tn2ua6tn2ua6tn2u.png",
    rating: 4.9,
    reviewsCount: 425,
    badge: "Pack of 3 Deal ₹449",
    netQuantity: "Pack of 3 Bars (100g each)",
    tagline: "Natural Tan Removal & Skin Brightening • Free Shipping",
    description: "Crafted with freshly ground aromatic Arabica coffee granules and organic oils. Coffee's natural caffeine energizes micro-circulation and buffs away dull dead skin layers, reversing sun tanning, dark elbows, knees, and uneven skin tone with every bath.",
    keyIngredients: [
      { name: "Pure Arabica Coffee Granules", role: "Gently exfoliates dead skin cells and stimulates lymphatic drainage" },
      { name: "Shea & Coconut Butters", role: "Locks in supple moisture leaving skin silken soft" },
      { name: "Almond Oil", role: "Restores sun-damaged skin barriers" }
    ],
    benefits: [
      "Instantly sloughs off stubborn sun tan and dead skin flakes",
      "Reduces appearance of cellulite and uneven skin texture",
      "Energizing coffee aroma that kickstarts your mornings",
      "Value 3-pack offer with free delivery across India"
    ],
    howToUse: "Glide the textured soap bar directly over wet body in circular motions, paying attention to tanned arms, neck, and legs. Rinse cleanly.",
    features: ["Tan Removal", "Handmade Cold-Processed", "Pack of 3", "Free Shipping"]
  },
  {
    id: "manjistha-soap-bar",
    name: "Ashwini Herbal Manjistha Soap Bar",
    subtitle: "Pure Manjistha Root Powder Herbal Bathing Bar",
    category: "soaps",
    concerns: ["pigmentation", "glowing"],
    price: 179,
    originalPrice: 249,
    image: "products/Gemini_Generated_Image_1kss581kss581kss.png",
    rating: 4.8,
    reviewsCount: 215,
    badge: "Ayurvedic Heritage",
    netQuantity: "100g Single Bar",
    tagline: "Ancient Ayurvedic Root for Radiant Flawless Complexion",
    description: "A traditional Ayurvedic bar crafted using authentic Manjistha root extract and cold-pressed botanical oils. Manjistha is revered in the Charaka Samhita as the preeminent herb for skin complexion (Varnya), known to soothe allergies, clarify blotchy skin, and foster natural radiance.",
    keyIngredients: [
      { name: "Manjistha (Rubia Cordifolia)", role: "Promotes clear complexion and balances pitta dosha" },
      { name: "Virgin Castor & Sesame Oils", role: "Ancient nourishing base that softens rough skin patches" },
      { name: "Botanical Herbs", role: "Maintains optimal dermal balance" }
    ],
    benefits: [
      "Improves uneven skin tone and soothes irritation",
      "Gentle enough for delicate facial skin and daily body bath",
      "Free from synthetic foaming agents, SLS and parabens"
    ],
    howToUse: "Lather between wet palms. Apply lather gently over face and body. Rinse with clean water.",
    features: ["Pure Manjistha Root", "100% Herbal", "Chemical Free", "Gentle Care"]
  },
  {
    id: "handmade-soap-collection-4pack",
    name: "Ashwini Herbal Soap Collection (4-Bar Assortment)",
    subtitle: "Manjistha, Goat Milk Glowing, Kuppameni Neem & Coffee Glow",
    category: "soaps",
    concerns: ["glowing", "acne", "pigmentation"],
    price: 599,
    originalPrice: 799,
    image: "products/Gemini_Generated_Image_k2ichbk2ichbk2ic.png",
    rating: 4.9,
    reviewsCount: 350,
    badge: "Best Seller Variety Pack",
    netQuantity: "Set of 4 Bars (100g each)",
    tagline: "4 Signature Ayurvedic Formulas in One Luxury Gift Box",
    description: "Can't pick just one? Indulge in our complete botanical soap vault: 1) Manjistha Soap (complexion enhancer), 2) Goat Milk Glowing Soap (rich moisture & radiance), 3) Kuppameni Neem Soap (antibacterial defense & acne relief), and 4) Coffee Glow Soap (exfoliation & tan removal).",
    keyIngredients: [
      { name: "Fresh Goat Milk", role: "Rich in natural fats and AHAs for soft glowing skin" },
      { name: "Kuppameni & Neem", role: "Ancient South Indian remedies for eczema, pimples and itchiness" },
      { name: "Manjistha Root", role: "Blood purifier and skin clarifier" },
      { name: "Roasted Coffee Beans", role: "Tan removing exfoliator" }
    ],
    benefits: [
      "Try all 4 best-selling Ashwini soaps at a bundle discount",
      "Custom routine: Coffee for body, Manjistha for face, Goat Milk for dry days",
      "Perfect luxury Ayurvedic gifting collection for family and friends"
    ],
    howToUse: "Rotate soaps based on your skin's daily needs. Store on a draining wooden soap dish to extend bar life.",
    features: ["4 Full-Sized Bars", "100% Handmade", "Cold Processed", "Zero Detergents"]
  },
  {
    id: "baby-glowing-soap-pack-of-3",
    name: "Ashwini Herbal Baby Glowing Soap (Pack of 3)",
    subtitle: "Tear-Free, Extra Gentle Almond & Saffron Baby Bars",
    category: "babycare",
    concerns: ["baby-gentle", "glowing"],
    price: 449,
    originalPrice: 599,
    image: "products/Gemini_Generated_Image_n06eb9n06eb9n06e.png",
    rating: 5.0,
    reviewsCount: 290,
    badge: "Pack of 3 Deal ₹449",
    netQuantity: "Pack of 3 Round Bars (100g each)",
    tagline: "Offer Price ₹449 • Free Shipping • Gentle for Baby's Delicate Skin",
    description: "Specially formulated for infants, toddlers, and sensitive skin. Crafted with sweet almond oil, saffron, and gentle plant emollients to clean without irritating baby's delicate dermal shield. Leaves baby's skin butter-soft, fragrant, and naturally glowing.",
    keyIngredients: [
      { name: "Sweet Almond Oil", role: "Nourishes baby's skin mantle with essential fatty acids" },
      { name: "Kashmiri Kesari Saffron", role: "Traditional glow enhancer for soft, fair, supple baby skin" },
      { name: "Herbal Cold-Pressed Bases", role: "Ultra-mild natural surfactant with neutral pH" }
    ],
    benefits: [
      "Pediatrician-inspired, gentle tear-free cleansing formula",
      "Zero SLS, parabens, artificial fragrances, or harsh petrochemicals",
      "Protects against diaper rashes and prickly heat",
      "Offer price ₹449 for 3 full bars with Free India-wide shipping"
    ],
    howToUse: "Gently lather soap in wet hands. Massage the soft foam smoothly onto baby's skin during warm bath. Rinse gently with water and pat dry with soft muslin cloth.",
    features: ["100% Gentle & Safe", "Tear-Free", "Pack of 3 Offer", "Free Shipping"]
  },
  {
    id: "baby-glowing-massage-oil",
    name: "Ashwini Herbal Baby Glowing Massage Oil",
    subtitle: "Pure Almond Oil with Kashmir Kesari, Rose & Herbs",
    category: "babycare",
    concerns: ["baby-gentle", "glowing"],
    price: 349,
    originalPrice: 499,
    image: "products/Ashwini Baby Glowing Massage Oil.png",
    rating: 4.9,
    reviewsCount: 310,
    badge: "Mother & Baby Choice",
    netQuantity: "100 ml Flip-Cap Bottle",
    tagline: "Healthy Glow, Deep Nourishment & Gentle Relaxing Massage",
    description: "An Ayurvedic daily massage oil formulated specifically for infants. Infused with 100% pure Almond Oil, Kashmiri Kesari (Saffron), Indian Damask Rose, and calming herbs. Strengthens baby's bones and muscles, enhances skin glow, and encourages sound, restful sleep.",
    keyIngredients: [
      { name: "Pure Cold-Pressed Almond Oil", role: "Rich in Vitamin E and proteins that strengthen bones and muscles" },
      { name: "Kashmir Kesari (Saffron)", role: "Imparts a healthy rosy glow and balances baby skin tone" },
      { name: "Damask Rose Petal Extracts", role: "Calms baby's senses and soothes dry patches" },
      { name: "Gentle Herbal Complex", role: "Protects against weather dryness and keeps skin supple" }
    ],
    benefits: [
      "Traditional daily abhyanga oil that supports motor development",
      "Deeply moisturizes and shields baby's delicate epidermal layer",
      "Lightweight, non-sticky oil that absorbs effortlessly into skin",
      "Soothes baby before bedtime for long, uninterrupted sleep"
    ],
    howToUse: "Pour a few drops into your warm palms. Gently massage baby's limbs, back, tummy, and chest using gentle stroking motions 15-30 minutes before warm bath.",
    features: ["100% Natural", "Safe for Newborns", "Pure Almond Oil Base", "Hypoallergenic"]
  },
  {
    id: "baby-care-complete-trio",
    name: "Ashwini Ayurvedic Baby Care Complete Trio",
    subtitle: "Baby Glowing Massage Oil + Baby Bath Powder + Baby Soap",
    category: "combos",
    concerns: ["baby-gentle", "glowing"],
    price: 799,
    originalPrice: 1099,
    image: "products/Gemini_Generated_Image_fs9cv5fs9cv5fs9c.png",
    rating: 5.0,
    reviewsCount: 175,
    badge: "New Born Special Kit",
    netQuantity: "3-Piece Kit (Oil + Ubtan Powder + Soap)",
    tagline: "The Traditional 3-Step Ayurvedic Care Routine for Your Little One",
    description: "The complete sacred newborn bath care hamper. Includes: 1) Ashwini Baby Glowing Massage Oil (100ml) for pre-bath muscle strengthening, 2) Ashwini Herbal Baby Bath Powder (Ubtan Pouch) made with green gram, rose petals, and wild turmeric for gentle grain-free scrubbing, and 3) Ashwini Baby Glowing Soap Bar for soft cleansing.",
    keyIngredients: [
      { name: "Baby Massage Oil (Almond & Saffron)", role: "Bone strengthening & deep lipid replenishment" },
      { name: "Herbal Bath Powder (Snana Choorna)", role: "Grain-free natural body cleanser replacing chemical body washes" },
      { name: "Baby Glowing Soap Bar", role: "Gentle moisture-lock foaming bar" }
    ],
    benefits: [
      "Zero chemicals from head to toe for newborn baby's delicate skin",
      "Helps shed fine infant body hair (lanugo) naturally over time",
      "Prevents dry skin, cradle cap, and diaper discomfort",
      "Comes in a beautiful Ayurvedic presentation pack, ideal baby shower gift"
    ],
    howToUse: "Step 1: Massage baby with oil 15 mins prior. Step 2: Mix bath powder with lukewarm water into a smooth paste and rub gently. Step 3: Finish with baby soap and warm rinse.",
    features: ["Complete 3-Piece Kit", "Pediatrician Recommended Ingredients", "100% Toxin-Free"]
  },
  {
    id: "glow-routine-bundle",
    name: "Ashwini Complete Glow Routine 4-in-1 Bundle",
    subtitle: "Day Glowing Cream + 2x Coffee Glow Soaps + Face Glowing Pack (Ubtan)",
    category: "combos",
    concerns: ["glowing", "pigmentation"],
    price: 749,
    originalPrice: 1099,
    image: "products/Gemini_Generated_Image_4ppx764ppx764ppx.png",
    rating: 4.9,
    reviewsCount: 395,
    badge: "Mega Saver Bundle",
    netQuantity: "4-in-1 Glow Hamper",
    tagline: "Total Radiance Makeover: Exfoliate, Treat, Glow & Protect",
    description: "Our most acclaimed radiant skin transformation bundle. Contains: 1) Ashwini Day Glowing Cream (50g) with SPF and herbal extracts, 2) Two full-sized Ashwini Coffee Glow Soaps (100g x 2) for deep exfoliation, and 3) Ashwini Herbal Face Glowing Pack (Ubtan) enriched with saffron, sandalwood, and multani mitti.",
    keyIngredients: [
      { name: "Day Glowing Cream", role: "Instantly illuminates dull skin and provides lightweight daytime protection" },
      { name: "Arabica Coffee Soaps (x2)", role: "Reverses suntan and polishes rough body areas" },
      { name: "Face Glowing Pack (Ubtan)", role: "Weekly detox mask that draws out deep micro-impurities" }
    ],
    benefits: [
      "Total face & body brightening solution in one package",
      "Noticeable improvement in tan removal and glass-like skin glow in 14 days",
      "Huge savings of ₹350 compared to individual prices",
      "Free express shipping included across India"
    ],
    howToUse: "Daily: Cleanse with Coffee Glow Soap, apply Day Glowing Cream. Weekly: Mix Face Glowing Pack with rose water or raw milk, apply for 15 minutes and rinse.",
    features: ["4-in-1 Complete Hamper", "Includes 2 Soaps", "Ayurvedic Luxury", "Free Express Delivery"]
  }
];

export const CATEGORIES = [
  { id: "all", name: "Shop All", icon: "✨" },
  { id: "haircare", name: "Hair Care", icon: "💆‍♀️" },
  { id: "skincare", name: "Skin Care", icon: "🌿" },
  { id: "babycare", name: "Baby Care", icon: "👶" },
  { id: "combos", name: "Combo", icon: "🎁" }
];

export const CONCERNS = [
  { id: "all", name: "All Concerns" },
  { id: "pigmentation", name: "Pigmentation & Dark Spots" },
  { id: "acne", name: "Acne & Oily Skin" },
  { id: "glowing", name: "Dull Skin & Radiance" },
  { id: "hairfall", name: "Hair Fall & Dandruff" },
  { id: "baby-gentle", name: "Gentle Baby Care" }
];

export const TESTIMONIALS = [
  {
    name: "Deepa Ramachandran",
    city: "Bengaluru",
    rating: 5,
    verified: true,
    product: "Ashwini Herbal Rosemary Black Hair Oil",
    comment: "I was suffering from postpartum hair loss for 6 months. Within 4 weeks of using Ashwini Rosemary Oil, hair fall reduced by 80% and tiny baby hairs started growing on my temples! The herbal aroma is authentic and relaxing."
  },
  {
    name: "Dr. Kavita Hegde",
    city: "Mangaluru",
    rating: 5,
    verified: true,
    product: "Pigmentation Day Cream & Night Cream Duo",
    comment: "Being a dermatologist, I am very cautious about what I put on my skin. Ashwini's Manjistha Face Wash and Duo Cream faded my stubborn sun pigmentation without irritating my sensitive skin. Genuine Ayurvedic craft!"
  },
  {
    name: "Ananya Deshmukh",
    city: "Pune",
    rating: 5,
    verified: true,
    product: "Coffee Glow Soap (Pack of 3)",
    comment: "The pack of 3 for ₹449 with free shipping is unbelievable value. It completely removed my stubborn motorcycle tanning from my hands and arms in just 2 weeks. Smells like freshly brewed coffee!"
  },
  {
    name: "Pooja & Karthik",
    city: "Mysuru",
    rating: 5,
    verified: true,
    product: "Ashwini Baby Care Complete Trio",
    comment: "We used Ashwini Baby Massage Oil and gentle soap for our 3-month-old daughter. Her skin is so soft, supple and glows like a flower. No chemicals, pure almond and kesari. Highly recommended for all mothers!"
  }
];

export const FAQS = [
  {
    question: "Are Ashwini Herbal products really 100% natural and chemical-free?",
    answer: "Yes, absolutely! All our products are handcrafted in small batches using traditional Ayurvedic decoctions, pure cold-pressed oils, and farm-fresh botanicals like Manjistha, Neem, Saffron, and Rosemary. We strictly avoid parabens, sulphates, artificial colorants, and mineral oils."
  },
  {
    question: "How does the ₹449 Pack of 3 offer and Free Shipping work?",
    answer: "All our signature soap 3-packs (Charcoal Soap, Coffee Glow Soap, and Baby Glowing Soap) are priced at just ₹449 with 100% Free Shipping anywhere across India. Plus, all orders above ₹499 automatically qualify for free express delivery!"
  },
  {
    question: "How do I order via WhatsApp?",
    answer: "Simply click the 'Order on WhatsApp' button on any product card or in your cart. Your cart items, quantities, and delivery address will be neatly organized into a WhatsApp message and sent directly to our customer care team (+91 98450 12345). You can then pay via UPI, Google Pay, or Cash on Delivery!"
  },
  {
    question: "How long does delivery take?",
    answer: "Orders are processed within 24 hours. Delivery takes 2-4 business days for South India (Karnataka, Tamil Nadu, Kerala, Andhra/Telangana) and 4-6 business days for the rest of India."
  },
  {
    question: "Is the Baby Care range safe for newborns?",
    answer: "Yes! Our Baby Massage Oil and Baby Soaps are made using cold-pressed sweet almond oil, food-grade Kashmir saffron, and natural botanicals. They are tear-free, hypoallergenic, and clinically tested for delicate newborn skin."
  }
];

