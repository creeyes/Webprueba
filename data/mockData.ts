import { Property, TeamMember, BlogPost } from '../types';

export const properties: Property[] = [
  {
    id: 'prop-1',
    title: 'Villa Al-Andalus',
    price: 8500000,
    location: 'Sierra Blanca',
    beds: 6,
    baths: 7,
    sqm: 1200,
    type: 'Villa',
    isFeatured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu-KEhS4our_cYIHXLwU61-2Z2f4S_yvxbYBlHesm-3jRTdv9YYz-5d_Z2yJc3eAUwBcdg54udWCgbd-LkEoCiJdQ9rShb8_WRYiPjivghAp1QkbcubR1pLIy8YeUF8ihrWsr7NlmFiHDd_EHDMcTpa4Twh5_KyAr9amGvkGl1GOLpRFozc-c-TvCQbqYn09csRRYzYgoierK9y1LR2WpZp7BaZSEY6BnBbgCccrD0uqPkM2LfvCzFKvy6yOlElAF2wAbYAz-Fx70',
    description: 'A masterpiece of Andalusian architecture fused with modern luxury. This expansive estate in Sierra Blanca offers panoramic sea views, a private spa, and lush tropical gardens.',
    features: ['Sea Views', 'Private Spa', 'Heated Pool', 'Cinema Room', 'Gated Community']
  },
  {
    id: 'prop-2',
    title: 'The Zagaleta Retreat',
    price: 12900000,
    location: 'La Zagaleta',
    beds: 8,
    baths: 10,
    sqm: 2500,
    type: 'Villa',
    isFeatured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA9wwzWlGKa_OEnKd_eFxPEmwmy0a068UlNXY-uUmXvSr0KluPZw3m1cL37yhPwW-UyxkPH59_ar_w-KiYcjuiaaM0aVtKMTHFeD1s7LfMMCJszQofqF_8_btvai7sarDm9wcX-mlypSwaCLJpIYMQpdkxsAa5dgEl3f5Gq4oky4sLIf3hXdVG8tiIXVNQnLptwCMMEWTQZig65WTUiDoeCKBCNfzCJoJmXhELjnoC754iRahXhRrV3FP0Z85y_Flrk614xSq6-LI',
    description: 'Nestled within Europe’s most exclusive country club, this contemporary mansion redefines privacy and elegance. Featuring a helipad, equestrian facilities, and world-class security.',
    features: ['Helipad', 'Golf Front', 'Indoor Pool', 'Staff Quarters', 'Smart Home System']
  },
  {
    id: 'prop-3',
    title: 'Marina Penthouse',
    price: 4200000,
    location: 'Puerto Banús',
    beds: 3,
    baths: 4,
    sqm: 450,
    type: 'Penthouse',
    isFeatured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqopY7tSazyqx6q4r1xZ9tViSPkWhBfyh-3J0pjKca6-hustLNbEnzTumseAPNm6-bJ_7a424pDcK2HMgS59VKbchJfr-d2_WcDTAceLM5bL_Lq9TejMHuexxaHqXdQmlwWa4I3XXtDzbW3F3b1j5BEhoS-1HmErwKuopt_ql9NZeXc3xtQSA7t9rENONrkcmSnk2T6CTdwJnFgkyv0x2WnRcigE8M-iKvIXOJ43oijbukrF22Ty03iipoWO9ajg9ugvXnc0Q9Eqk',
    description: 'Frontline beach penthouse overlooking the superyachts of Puerto Banús. Direct beach access, expansive terraces for entertaining, and walking distance to designer boutiques.',
    features: ['Beachfront', 'Panoramic Terrace', 'Concierge', 'Private Lift', 'Jacuzzi']
  },
  {
    id: 'prop-4',
    title: 'Nueva Andalucía Villa',
    price: 5750000,
    location: 'Golf Valley',
    beds: 5,
    baths: 5,
    sqm: 700,
    type: 'Villa',
    isFeatured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcOmrkcQ77mPCBsRQWuA4WXbc0pS65-RcrunG_ySt19Mr5G9alH2yGR8f1w6NbwKMaGKoy2pOk-xxfgbTZYKDxa-jG4AY1JLO8tEbN9oGjEmxq4PkHB5Mqn3ASFeq6iWo6dZbU5zmX8qW0eOzN_PV_Q_3qY08BoAR9nR_j3PTZk8a1msZ2TrYt0Z0X8OjLwHdXGh5lk_ixm0atqQ7ptqzwlnEFGHFazLpDYE8aUjPpQNUP64hNR0xDk_Cj82R1gCP7lRJHmC1DVec',
    description: 'Modern minimalist luxury in the heart of the Golf Valley. Open plan living, floor-to-ceiling windows, and a pristine infinity pool overlooking La Concha mountain.',
    features: ['Mountain Views', 'Infinity Pool', 'Home Gym', 'Wine Cellar', 'Roof Terrace']
  },
  {
    id: 'prop-5',
    title: 'The Emerald Estate',
    price: 15000000,
    location: 'Golden Mile',
    beds: 5,
    baths: 6,
    sqm: 800,
    type: 'Villa',
    isFeatured: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQu-vZpkbR_wYLWWRYDutVNjqsODp4caZe73EztUFRpD2XK4QWyEwyZajSCZrpP1LfkhXgBZ4mtT0g-eWmeEiqdc5peoLOOT62JP2mVF5gZoY3XuuLEsxwOG2dt4Mea1MS6CJv3oaU5BSrquXSeqCV0gtzCkA2PBVvxG-Eiflum56uR-TvoJDUA2Dolw9acUu08sftI-JnmjsyVeMRSrtlmGble8XwVlrSNGBkjPgjWk7pkjAqd4K30AqVvkdclPVzdMRMi9LzHqg',
    description: 'New construction on the Golden Mile. Geometric brilliance meets organic warmth. This estate sets a new standard for eco-conscious luxury living.',
    features: ['New Build', 'Eco-Friendly', 'Sea Views', 'Spa & Gym', 'Guest House']
  },
  {
    id: 'prop-6',
    title: 'Modern House Marbella',
    price: 745000,
    location: 'Marbella East',
    beds: 4,
    baths: 2,
    sqm: 206,
    type: 'Villa',
    isFeatured: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHkzDPvMY9R45UIuJpCW49mETnx2-nzGm1idytTub36vailCp3n96NK4jZSR2qBAYTnNPx2q-KQnsUovgATeYcj_I-zGfDPISto2IlfPbW3LX6AJwwXi4iuY9-WzAM5i64f2lMdpVVbDZXsqyz3ULbpRreM2i_Otl44b2En3FZoUgGgPfau8vi0moHrcF1SIbPS_UoG_4cWvfA3RnsvBbf2AIZbqbQmriFZoGCXfTOCpY2Lk6vTF7owQU6vzQvL5fMRekmLqAtS3A',
    description: 'A charming modern villa perfect for family living. Close to international schools and the best beaches in Marbella East.',
    features: ['Garden', 'Pool', 'Close to Schools', 'Modern Kitchen']
  }
];

export const team: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Julian Vance',
    role: 'Senior Portfolio Director',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC8-77dWbBQMZCj2JCG_dtgIJiS41fFrzFk02f3KZithBE4bRKuQVgJzSReDrgxrOvnlMG7Zg7zBmplmfshWenaAJbIq0NeSqeRcWhJB0PaiQa7b7caCiQwTF5oT-jYgl4xu-7DCcjhw2SFUqOpYuDYC3JZYSU1TM1djffE6KMZea12G_jxDNW1m_LRAve7gpU51Deg5E5VFMotYk9bZ3-RzMESebCS09eZuBEsCSpLdCnH4MTSgQ1AuTFodJWqdjKlq_JM26LNrA'
  },
  {
    id: 'team-2',
    name: 'Sofia Rossi',
    role: 'Senior Consultant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFThFZqZkYQ7LO7ZnDgsIDWE0r1SZTLuqu9E_N4aV_Tg9hnCo4bARgCg8-u3z_uxlsgtLnYRCsOivIw_ufKFDoh3GOf2ltGVbBa-yz8n19sjFETWkY9Q54mUFYNXLuSV4jNxb9bPTA4cEKJlJdiXe6_vHpLx_3vLpgVlctQLvlW8U4SQf6KimNVuxIW5vnaGxZnPE6oHL2OSZ1lP-q-oZev0M_bIsYPrmm9SecoW7jm-YQzzn1ir78OmjqX5F5Ci8i-TCxg47Bng0'
  },
  {
    id: 'team-3',
    name: 'Alejandro Sanz',
    role: 'Managing Director',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZiwKlVf6Wnv1Eg6IncyMkMKgrZzys4FXD6GWlOkvKpBBFCWTS_1_aiMH_a5l6Du-JlzJSKp96HNNHZNRKvWpG1cPjV9RzBYMCcFhcm8VANXkLi5_Qk2uCd3cfuA28CSx66JbqmYhoZ709W8xcC_i5mbCoaT17OmSaImu_6htcoZ33w4o2wUZ0wjy-VAs-4HADrmWYtnF4aDk5yWIWWMcq9rdunav79eMP1v69UtcDFu17gWoftu1IdS2JnixJW-hPN0WxxJuATK0'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Rich Culinary Culture of Southern Spain',
    date: '2 April 2024',
    category: 'Lifestyle',
    excerpt: 'Gastronomy in Costa del Sol: Exploring the rich culinary culture of Southern Spain. Costa del Sol is known for more than just its beaches.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2jhtFGnLR3DaYzqtPwPZI2iNvjsb3mc1IbvDlHxTLP6HObvXuIonaQatdDQ08LI5rh7IOfJ_DsfUUNgH6yYPwMa6QSOsLrXjdNaeq8TBENUlp-ITcZVQEUMTen2P54snBx_7dbMxbxJR5c2SwImkX08w5ikPSPDzM3417wxqP3_xze7OjeHGO4aY2P3SF9F4Kqk23JWC3KqHUgUK7PqQMSIwuVU3SEwRGkCFiCS8a86_sJRT7sXH3UaJHQOvAkFVpalJLfB6iFx4',
    content: [
      "The Costa del Sol is famous worldwide for its golden beaches, enviable climate, and vibrant nightlife. However, beneath the sun-soaked surface lies a culinary heritage as rich and varied as its history. Southern Spain’s gastronomy is a celebration of fresh, local ingredients, heavily influenced by Mediterranean traditions and Moorish legacy.",
      "One cannot speak of Andalusian cuisine without mentioning Gazpacho. This cold soup, born in the sweltering heat of southern summers, is a refreshing blend of ripe tomatoes, peppers, cucumbers, garlic, and olive oil. It is more than just a dish; it is a staple of daily life, offering hydration and nutrition in a glass.",
      "Moving to the coast, the 'Espeto de Sardinas' takes center stage. These are sardines skewered on bamboo canes and roasted over an open fire on the beach, usually inside a boat filled with sand. The smoky flavor, combined with the sea breeze and the sound of waves, creates a dining experience that is uniquely Malagueño.",
      "For those with a sweet tooth, the region offers delights like 'Pestiños', deep-fried dough glazed with honey, traditionally eaten during Holy Week or Christmas. These treats reflect the historical Arab influence on Spanish confectionery, prioritizing honey, almonds, and spices.",
      "Exploring the local markets of Marbella or Malaga reveals the true heart of this culture. Stalls overflow with vibrant olives, cured hams (Jamón Ibérico), and fresh seafood brought in daily. It is a culture that values the ritual of eating—long lunches that stretch into the afternoon, shared tapas that encourage conversation, and a glass of Sherry to toast to the good life."
    ]
  },
  {
    id: 'post-2',
    title: 'Sustainable Tourism in Costa del Sol',
    date: '29 March 2024',
    category: 'Eco-Living',
    excerpt: 'Embracing eco-friendly practices and attractions. As sustainability becomes an increasingly important aspect of travel.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaoZ9yrl6aAxQIQRzrlw0p_PffQsD33t3CEyMiaJxy-uZ1OgbgFtYWiREVnRxOTA_ostFY9JbCKcXgxGa7tgFpynz442Q1IncKQrr2ldgEyUIhH9-F6C8LedoHPEV96iwmJc_Xsrvp9sC3712ONojlSz9JCuhsDcf62WY90rkBhsq0rZuVdQeev76ak2Uy_qw3KmeQHj6ZN8Eky5BkztptPdA6PNYSnsQ0v3MduvFLA186lFifsc1-oeVWA4NbWBHSUIy0DBVokMs',
    content: [
      "As global awareness of environmental issues grows, the Costa del Sol is taking significant strides towards sustainable tourism. This region, long beloved for its natural beauty, is now focusing on preserving its landscapes, marine life, and cultural heritage for future generations.",
      "Hotels and resorts are increasingly adopting eco-friendly certifications, implementing water conservation systems, and using solar energy to power their facilities. Many luxury establishments in Marbella now offer farm-to-table dining experiences, sourcing ingredients from local organic producers to reduce their carbon footprint.",
      "Beyond accommodation, the region is promoting 'slow travel'. Visitors are encouraged to explore the stunning hiking trails of the Sierra de las Nieves National Park, a UNESCO Biosphere Reserve, rather than relying solely on motorized transport. Cycling paths are being expanded along the coast, connecting towns and offering a greener way to sightsee.",
      "Marine conservation is also a priority. Initiatives to clean up beaches and protect the Mediterranean Posidonia seagrass meadows are gaining momentum. Tourists can participate in responsible whale and dolphin watching tours that adhere to strict guidelines to minimize disturbance to wildlife.",
      "Ultimately, sustainable tourism in Costa del Sol is about respecting the balance between enjoyment and preservation. It invites travelers to immerse themselves in the authentic local lifestyle, value the natural resources, and leave a positive impact on the destination they cherish."
    ]
  },
  {
    id: 'post-3',
    title: 'New Direct Flights to New York Announced',
    date: '20 March 2024',
    category: 'Travel News',
    excerpt: 'United Airlines will offer a three-times-weekly direct link between Malaga Airport and Newark, opening up Costa del Sol to the US market.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGAnoUN7wrdih_ijcs6ngbb9f9wwArgxdZS1kpDgTK2xhY9pmNfveKQzVqksxD5YVte-B79czZnK7E6A8_RNAGNkUtKI2d_dhqINhGsN3d7OJh7EgneHwig2_87SZzbw6Cl-ldlfLOhd4bAXAmsS_LkhLjHCIcU7uQW3e06wY1aN5kMgKMXMwZ6a5RSW1PEZKgjSvMLXb9Dm61mKFrsqPRhLQMHKSYexWGSb2vsSa8tAUSxdYSWogqY7bkT9YZhps2chLucNy0hGA',
    content: [
      "In a major boost for international connectivity, United Airlines has announced a new seasonal nonstop service between Malaga-Costa del Sol Airport (AGP) and New York/Newark (EWR). This direct link marks a significant milestone for the region, opening up the sunny Andalusian coast to the vast US market with unprecedented ease.",
      "The service is scheduled to operate three times a week, providing a convenient gateway for American travelers seeking the culture, climate, and luxury of Southern Spain. Conversely, it offers residents of the Costa del Sol a direct line to the Big Apple, facilitating business and leisure travel alike.",
      "Local tourism officials have hailed the announcement as a 'game-changer'. The US market has shown growing interest in Spain as a premier destination, and removing the need for layovers in Madrid or other European hubs makes the Costa del Sol significantly more attractive.",
      "Expectations are high that this route will not only boost hotel occupancy but also stimulate the luxury real estate market. American investors, known for their appreciation of high-quality lifestyle properties, will now find it much easier to visit and explore investment opportunities in Marbella and its surroundings.",
      "As the inaugural flight approaches, excitement is building. This connection symbolizes the growing global status of Malaga and the Costa del Sol, reinforcing its position as a world-class destination that is now just a flight away from the heart of the United States."
    ]
  }
];