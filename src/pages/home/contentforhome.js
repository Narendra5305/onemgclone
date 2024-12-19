const img_f_m_1 = 
    "https://onemg.gumlet.io/0f4763f1-32f0-440e-b270-8ea77f9bcefc_1724233095.jpg?w=1013&h=250&format=auto"
    



const img_f_m_2 = "https://onemg.gumlet.io/2024-12%2F1734012352_Winter_1948x800.png"

const img_f_m_3="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png"


const healthConcerns = [
    {id: 1, title: 'Diabetes', image: 'https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto'},
    {id: 2, title: 'Heart Care', image: 'https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto'},
    {id: 3, title: 'Stomach Care', image: 'https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto'},
    {id: 4, title: 'Liver Care', image: 'https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto'},
    {id: 5, title: 'Bone, Joint & Muscles Care', image: 'https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto'},
    {id: 6, title: 'Kidney Care', image: 'https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto'},
    {id: 7, title: 'Derma Care', image: 'https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto'},
    {id: 8, title: 'Respiratory Care', image: 'https://onemg.gumlet.io/8051e79c-6152-440e-b402-8d1ba8d7c82e.png?format=auto'},
    {id: 9, title: 'Eye Care', image: 'https://onemg.gumlet.io/1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png?format=auto'}
];



const winter_care = [
    {
      "title": "Zandu Chyavanprash Avaleha | For Immunity, Strength & Stamina Jaggery",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/jznrkwvlkh1eau9x8muk.jpg",
      "description": "Zandu Chyavanprash Avaleha, made with jaggery, helps boost immunity, strength, and stamina with its Ayurvedic formulation.",
      "price": "₹450",
      "discount_price": "₹400",
      "discount_percentage": "11%",
      "rating": "4.5",
      "weight": "500g",
      "benefits": "Boosts immunity, enhances energy, and promotes overall wellness.",
      "delivery_time": "30 mins",
      "product_highlights": ["Boosts immunity", "Enhances energy", "Ayurvedic formula", "Made with jaggery"],
      "brand_name": "Zandu"
    },
    {
      "title": "Organic India Tea for Immunity, Antioxidant Support & Stress Relief | Flavour Lemon Ginger Green Tea",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/zztxxk5kpsgowlifcjpp.jpg",
      "description": "Organic India Tea is a flavorful blend of lemon, ginger, and green tea that provides immunity support, antioxidants, and stress relief.",
      "price": "₹350",
      "discount_price": "₹320",
      "discount_percentage": "9%",
      "rating": "4.3",
      "weight": "100g",
      "benefits": "Strengthens immunity, rich in antioxidants, and reduces stress.",
      "delivery_time": "45 mins",
      "product_highlights": ["Antioxidant-rich", "Helps in stress relief", "Natural ingredients", "Supports immunity"],
      "brand_name": "Organic India"
    },
    {
      "title": "Tetley Green Tea Immune with Added Vitamin C Tea Bag (1.4gm Each) | Flavour Ginger, Mint & Lemon",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/10b2f9449d0b4d259d287d781e86416e.jpg",
      "description": "Tetley Green Tea with added Vitamin C offers a refreshing flavor of ginger, mint, and lemon to support your immune health.",
      "price": "₹280",
      "discount_price": "₹250",
      "discount_percentage": "11%",
      "rating": "4.2",
      "weight": "30 tea bags",
      "benefits": "Supports immunity, refreshes mind and body, and adds a natural boost of Vitamin C.",
      "delivery_time": "25 mins",
      "product_highlights": ["Contains Vitamin C", "Supports immune health", "Refreshing flavor", "30 tea bags"],
      "brand_name": "Tetley"
    },
    {
      "title": "Nivea Multi-Purpose Creme | Protects & Moisturises Skin",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/aoyv1cwt3wmzsqpvnddu.jpg",
      "description": "Nivea Multi-Purpose Creme is a trusted skincare solution that protects and moisturizes your skin all day.",
      "price": "₹190",
      "discount_price": "₹170",
      "discount_percentage": "11%",
      "rating": "4.6",
      "weight": "100ml",
      "benefits": "Provides intense hydration, suitable for all skin types, and protects against dryness.",
      "delivery_time": "20 mins",
      "product_highlights": ["Intense hydration", "Suitable for all skin types", "Protects against dryness"],
      "brand_name": "Nivea"
    },
    {
      "title": "Sri Sri Tattva Natural Honey | No Sugar Adulteration",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/yszubhuqcxrntig0yzth.jpg",
      "description": "Sri Sri Tattva Natural Honey is a pure and natural sweetener with no sugar adulteration, ideal for a healthy lifestyle.",
      "price": "₹250",
      "discount_price": "₹220",
      "discount_percentage": "12%",
      "rating": "4.7",
      "weight": "500g",
      "benefits": "Boosts energy, promotes digestion, and enhances immunity naturally.",
      "delivery_time": "35 mins",
      "product_highlights": ["No added sugar", "Free from adulteration", "Natural sweetener", "Promotes digestion"],
      "brand_name": "Sri Sri Tattva"
    },
    {
      "title": "Asbob Healthcare 3 in 1 Vaporizers, Steamer, Steam Inhaler, Facial Steamer Vaporiser for Cold and Cough Blue",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/7d5e0cdceee74589a7d35bd85f60c84c.jpg",
      "description": "A versatile 3-in-1 vaporizer suitable for steam inhalation, facial steaming, and cold relief.",
      "price": "₹499",
      "discount_price": "₹450",
      "discount_percentage": "10%",
      "rating": "4.4",
      "weight": "800g",
      "benefits": "Relieves cold symptoms, clears nasal passages, and improves skin hydration.",
      "delivery_time": "30 mins",
      "product_highlights": ["3-in-1 functionality", "Effective for cold relief", "Facial steamer", "Portable and easy to use"],
      "brand_name": "Asbob Healthcare"
    },
    {
      "title": "Tata 1mg Hot Water Bag for Period Cramps & Pain Relief | Leak proof | Long heat retention | Red",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/5a831babaee94a89853452a2a5032b7a.jpg",
      "description": "Tata 1mg Hot Water Bag provides effective pain relief with long heat retention and a leak-proof design.",
      "price": "₹299",
      "discount_price": "₹270",
      "discount_percentage": "10%",
      "rating": "4.6",
      "weight": "500ml capacity",
      "benefits": "Relieves period cramps, muscle aches, and back pain effectively.",
      "delivery_time": "30 mins",
      "product_highlights": ["Leak-proof", "Long heat retention", "Pain relief", "Ideal for period cramps"],
      "brand_name": "Tata 1mg"
    },
    {
      "title": "Zandu Pure Honey with No Added Sugar | Free from Adulteration",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/91f1a2bfd1304c1b988a381a37cbcdaa.jpg",
      "description": "Zandu Pure Honey is a natural sweetener, free from added sugar and adulteration, perfect for healthy living.",
      "price": "₹275",
      "discount_price": "₹250",
      "discount_percentage": "9%",
      "rating": "4.8",
      "weight": "500g",
      "benefits": "Enhances immunity, promotes weight management, and supports digestion.",
      "delivery_time": "35 mins",
      "product_highlights": ["No added sugar", "Free from adulteration", "Natural sweetener", "Supports immunity"],
      "brand_name": "Zandu"
    },
    {
      "title": "Tata 1mg Digital Thermometer with One Touch Operation for Child and Adult",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ecef90a98df740c789f849d6140b7a16.jpg",
      "description": "Tata 1mg Digital Thermometer offers fast and accurate temperature readings for children and adults.",
      "price": "₹220",
      "discount_price": "₹190",
      "discount_percentage": "14%",
      "rating": "4.3",
      "weight": "100g",
      "benefits": "Easy-to-use, precise, and suitable for all age groups.",
      "delivery_time": "20 mins",
      "product_highlights": ["One-touch operation", "Fast temperature readings", "For all age groups", "Accurate results"],
      "brand_name": "Tata 1mg"
    },
    {
      "title": "Baidyanath Kesari Kalp Royal Chyawanprash | For Immunity, Vitality, Strength & Stamina",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/4e9a0ea473f64df1b13a68e00144834b.jpg",
      "description": "Baidyanath Kesari Kalp Chyawanprash is enriched with saffron and herbs to boost vitality, strength, and immunity.",
      "price": "₹550",
      "discount_price": "₹500",
      "discount_percentage": "9%",
      "rating": "4.6",
      "weight": "1kg",
      "benefits": "Enhances stamina, boosts immune response, and rejuvenates energy levels.",
      "delivery_time": "40 mins",
      "product_highlights": ["Contains saffron", "Boosts vitality", "Enhances immunity", "Promotes stamina"],
      "brand_name": "Baidyanath"
    }
  ]
  
  

//   Immunity supplement of the week

const immunity_supplement = [
    {
      "id": 1,
      "title": "Dabur Chyawanprash | 3X Immunity Action | Builds Strength, Stamina & Overall Health",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/67aedb77ca584e35905269af3eed6ef4.jpg",
      "description": "Dabur Chyawanprash is an Ayurvedic formulation designed to strengthen immunity, build stamina, and improve overall health.",
      "price": "₹399",
      "discount_price": "₹360",
      "discount_percentage": "10%",
      "rating": "4.7",
      "weight": "1kg",
      "benefits": "Enhances immunity, improves energy, and supports respiratory health.",
      "delivery_time": "30 mins",
      "product_highlights": ["3X Immunity action", "Boosts strength", "Ayurvedic formulation"],
      "brand_name": "Dabur"
    },
    {
      "id": 2,
      "title": "Organic India Chyawanprash | Helps Support Immunity",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/pharmacy-production-rxs%2F1733933794_crop_488.png",
      "description": "Organic India Chyawanprash is a natural blend to promote immunity and improve overall wellness.",
      "price": "₹550",
      "discount_price": "₹495",
      "discount_percentage": "10%",
      "rating": "4.5",
      "weight": "500g",
      "benefits": "Supports immunity, improves energy levels, and enhances vitality.",
      "delivery_time": "35 mins",
      "product_highlights": ["Natural ingredients", "Supports overall health", "Ayurvedic immunity booster"],
      "brand_name": "Organic India"
    },
    {
      "id": 3,
      "title": "Dabur Chyawanprakash Sugar-Free (Chyawanprash) | Suitable for Diabetics & Boosts Immunity",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/616e75d7587a4d588f46853133d703d8.jpg",
      "description": "Dabur Chyawanprakash Sugar-Free is specially formulated for diabetics to support immunity without compromising on taste.",
      "price": "₹450",
      "discount_price": "₹405",
      "discount_percentage": "10%",
      "rating": "4.6",
      "weight": "900g",
      "benefits": "Boosts immunity, improves energy, and is suitable for diabetics.",
      "delivery_time": "30 mins",
      "product_highlights": ["Sugar-free formulation", "Safe for diabetics", "Supports immunity"],
      "brand_name": "Dabur"
    },
    {
      "id": 4,
      "title": "Zandu Kesari Jeevan Fit for Diabetics",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/oxm3yrglzdy06xligskb.jpg",
      "description": "Zandu Kesari Jeevan is an Ayurvedic chyawanprash made for diabetics, boosting strength, stamina, and immunity.",
      "price": "₹600",
      "discount_price": "₹540",
      "discount_percentage": "10%",
      "rating": "4.4",
      "weight": "900g",
      "benefits": "Strengthens immunity, improves stamina, and supports diabetic health.",
      "delivery_time": "30 mins",
      "product_highlights": ["Diabetic-friendly", "Improves energy", "Natural immunity booster"],
      "brand_name": "Zandu"
    },
    {
      "id": 5,
      "title": "Dabur Chyawanprash | 3X Immunity Action | Builds Strength, Stamina & Overall Health Red",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/bec513ba356a4e69a7fa8ba29bcaddd2.jpg",
      "description": "Dabur Chyawanprash Red is designed to boost immunity threefold, enhance stamina, and promote overall health.",
      "price": "₹425",
      "discount_price": "₹382",
      "discount_percentage": "10%",
      "rating": "4.8",
      "weight": "1kg",
      "benefits": "Boosts immunity, enhances energy, and supports respiratory wellness.",
      "delivery_time": "25 mins",
      "product_highlights": ["3X Immunity action", "Reduces fatigue", "Natural herbal formulation"],
      "brand_name": "Dabur"
    },
    {
      "id": 6,
      "title": "Zandu Kesari Jivan Chyawanprash | For Immunity, Strength, Stamina & Bone Health",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/roq4nzjspyh7uxgeamp0.jpg",
      "description": "Zandu Kesari Jivan Chyawanprash is enriched with saffron and herbs for immunity, strength, and bone health.",
      "price": "₹650",
      "discount_price": "₹585",
      "discount_percentage": "10%",
      "rating": "4.5",
      "weight": "900g",
      "benefits": "Boosts immunity, enhances stamina, and supports bone strength.",
      "delivery_time": "30 mins",
      "product_highlights": ["Enriched with saffron", "Supports bone health", "Improves vitality"],
      "brand_name": "Zandu"
    },
    {
      "id": 7,
      "title": "Nagarjuna Chyavanapraasham",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/7165af9a37dc41a592eb80e3a0e17122.jpg",
      "description": "Nagarjuna Chyavanapraasham is a traditional Ayurvedic formula for enhancing immunity and overall health.",
      "price": "₹400",
      "discount_price": "₹360",
      "discount_percentage": "10%",
      "rating": "4.2",
      "weight": "500g",
      "benefits": "Boosts immunity, supports digestion, and rejuvenates energy.",
      "delivery_time": "30 mins",
      "product_highlights": ["Traditional recipe", "Improves vitality", "Supports overall wellness"],
      "brand_name": "Nagarjuna"
    }
  ]
  

const featured_brands = [
    {
      "id": 1,
      "image_link": "https://onemg.gumlet.io/2024-12%2F1733823130_Cetaphil.png?format=auto"
    },
    {
      "id": 2,
      "image_link": "https://onemg.gumlet.io/2024-12%2F1733980497_Organic+India.png?format=auto"
    },
    {
      "id": 3,
      "image_link": "https://onemg.gumlet.io/2024-12%2F1733980483_Dabur.png?format=auto"
    },
    {
      "id": 4,
      "image_link": "https://onemg.gumlet.io/2024-12%2F1733980575_Baidyanath+Nagpur.png?format=autohttps://onemg.gumlet.io/2024-12%2F1734153028_Himalaya.png?format=auto"
    },
    {
      "id": 5,
      "image_link": "https://onemg.gumlet.io/2024-12%2F1733980557_Nivea.png?format=auto"
    },
    {
      "id": 6,
      "image_link": "https://onemg.gumlet.io/2024-12%2F1734153042_Zandu.png?format=auto"
    },
    {
      "id": 7,
      "image_link": "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1719206972_tejasya.png?format=auto"
    },
    {
      "id": 8,
      "image_link": "https://onemg.gumlet.io/diagnostics%2F2024-06%2F1719206984_Tata+1mg.png?format=auto"
    }
  ]
  


const health_checkups = [
    {
      "id": "001",
      "title": "Comprehensive Gold Full Body Checkup",
      "price": "₹3,999",
      "you_need_to_provide": "Blood sample, fasting",
      "test_is_for": "Male/Female",
      "test_preparation": "Fast for 10-12 hours before the test."
    },
    {
      "id": "002",
      "title": "Good Health Silver Package",
      "price": "₹2,499",
      "you_need_to_provide": "Blood sample, fasting",
      "test_is_for": "Male/Female",
      "test_preparation": "Avoid fatty meals 24 hours prior."
    },
    {
      "id": "003",
      "title": "Comprehensive Silver Full Body Checkup",
      "price": "₹2,999",
      "you_need_to_provide": "Blood sample, fasting",
      "test_is_for": "Male/Female",
      "test_preparation": "Fast for 8-10 hours before the test."
    },
    {
      "id": "004",
      "title": "Comprehensive Platinum Full Body Checkup",
      "price": "₹6,999",
      "you_need_to_provide": "Blood sample, fasting",
      "test_is_for": "Male/Female",
      "test_preparation": "Fast for 10-12 hours before the test."
    },
    {
      "id": "005",
      "title": "Good Health Platinum Package",
      "price": "₹5,499",
      "you_need_to_provide": "Blood sample, fasting",
      "test_is_for": "Male/Female",
      "test_preparation": "Avoid alcohol 48 hours before the test."
    },
    {
      "id": "006",
      "title": "Good Health Gold Package",
      "price": "₹3,499",
      "you_need_to_provide": "Blood sample, fasting",
      "test_is_for": "Male/Female",
      "test_preparation": "Fast for 10 hours before the test."
    }
];
  


export default {img_f_m_1 ,img_f_m_2 , img_f_m_3 , healthConcerns ,  winter_care , immunity_supplement , featured_brands ,health_checkups
}