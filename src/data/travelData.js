// ==========================================
// LOTOS FIELD - MULTILINGUAL TRAVEL DATA
// REAL CALCULATED MARKET PRICES FOR BOTH:
// 1. [BUS] Sayyohlik Avtobusi / Gazel / Sprinter
// 2. [PLANE] To'g'ridan-to'g'ri Samolyot Parvozi
// (Includes: Round-trip Transport + 4 Nights Hotel + 3 Meals/Day for 5 Days + Museum Passes & Private Guides)
// ==========================================

export const EXCHANGE_RATE = 12850; // 1 USD = 12,850 UZS

export const CATEGORIES = [
  { id: 'all', nameUz: 'Barcha Viloyat va Shaharlar', nameRu: 'Все Регионы и Города', nameEn: 'All Regions & Cities' },
  { id: 'history', nameUz: '🕌 Qadimiy & Tarixiy Shaharlar', nameRu: '🕌 Древние и Исторические Города', nameEn: '🕌 Historic & Ancient Cities' },
  { id: 'nature', nameUz: '🏔️ Tog\' & Tabiat Qo\'riqxonalari', nameRu: '🏔️ Горы и Заповедники', nameEn: '🏔️ Mountains & Nature' },
  { id: 'ancient', nameUz: '🏰 Qadimiy Qal\'alar & Arxeologiya', nameRu: '🏰 Древние Крепости и Археология', nameEn: '🏰 Ancient Fortresses & Archaeology' }
];

export const COUNTRIES = [
  {
    id: 'samarkand',
    name: 'Samarqand Viloyati',
    nameRu: 'Самаркандская область',
    nameEn: 'Samarkand Region',
    flag: '🏛️',
    capital: 'Samarqand shahri',
    category: 'history',
    taglineUz: 'Sayqali Ro\'yi Zamin — Registon maydoni, Go\'ri Amir va Boqiy Shahar',
    taglineRu: 'Лик Земли — Площадь Регистан, Гур-Эмир и Вечный Город',
    taglineEn: 'Pearl of the Silk Road — Registan Square, Gur-e-Amir & Eternal City',
    coverImage: '/images/landmarks/samarkand-registan.png',
    visaUz: '5 kun / 4 kecha to\'liq hamma xarajatlar kiritilgan',
    visaRu: '5 дней / 4 ночи «Все включено»',
    visaEn: '5 Days / 4 Nights All-Inclusive',
    bestTimeUz: 'Mart - Iyun, Sentyabr - Noyabr',
    bestTimeRu: 'Март - Июнь, Сентябрь - Ноябрь',
    bestTimeEn: 'March - June, Sept - Nov',
    temp: '+26°C',
    rating: 4.99,
    descriptionUz: 'Samarqand – 2750 yillik Sharq gavhari. 5 kun va 4 kechalik to\'liq paket: tanlangan transport (avtobus yoki samolyot), 4★ mehmonxona, 5 kun 3 mahal to\'y oshi va milliy taomlar, Registon, Go\'ri Amir, Shohi Zinda biletlari va shaxsiy gid.',
    descriptionRu: 'Самарканд — жемчужина Востока. Полный тур на 5 дней / 4 ночи: выбранный транспорт (автобус или самолет), 4★ отель, 3-разовое питание с самаркандским пловом, билеты на все памятники и персональный гид.',
    descriptionEn: 'Samarkand 5 Days / 4 Nights all-inclusive: chosen transport (coach or flight), 4★ hotel, 3 gourmet meals daily with traditional pilaf, all museum tickets & private guide.',
    
    // Dual Transport Packages
    packages: {
      bus: {
        priceUSD: 190, // 2,441,500 so'm
        durationUz: '🚌 Qulay Sayyohlik Avtobusi: 4-4.5 soat (Borish-kelish chiptasi kiritilgan)',
        durationRu: '🚌 Комфортабельный автобус: 4-4.5 часа (Билеты включены)',
        durationEn: '🚌 Tourist Coach: 4-4.5 hours (Round-trip tickets included)',
        transportLabelUz: 'Qulay Sayyohlik Avtobusi',
        transportLabelRu: 'Комфортабельный автобус',
        transportLabelEn: 'Comfortable Tourist Coach',
        highlightsUz: [
          '🚌 Toshkentdan qulay konditsionerli sayyohlik avtobusi (borish-kelish)',
          '🏨 4 kecha Registon yonidagi 4★ tarixiy mehmonxonada tunash',
          '🍲 5 kun davomida 3 mahal to\'liq ovqatlanish (mashhur to\'y oshi, shashliklar)',
          '🏛️ Registon, Go\'ri Amir, Shohi Zinda, Boqiy Shahar kirish biletlari',
          '👨‍💼 5 kun davomida siz bilan birga bo\'luvchi professional litsenziyali gid'
        ],
        highlightsRu: [
          '🚌 Комфортабельный туристический автобус с кондиционером (туда и обратно)',
          '🏨 4 ночи в 4★ историческом отеле рядом с Регистаном',
          '🍲 3-разовое питание на 5 дней (знаменитый самаркандский плов, шашлыки)',
          '🏛️ Входные билеты в Регистан, Гур-Эмир, Шахи-Зинда и Вечный Город',
          '👨‍💼 Профессиональный сертифицированный гид на все дни тура'
        ],
        highlightsEn: [
          '🚌 Round-trip air-conditioned tourist coach transportation',
          '🏨 4 Nights accommodation in 4★ hotel near Registan Square',
          '🍲 Full board: 3 gourmet meals daily across 5 days (Samarkand pilaf, kebabs)',
          '🏛️ All entrance tickets to Registan, Gur-e-Amir, Shah-i Zinda & Eternal City',
          '👨‍💼 Dedicated licensed professional tour guide throughout the trip'
        ]
      },
      plane: {
        priceUSD: 250, // 3,212,500 so'm
        durationUz: '✈️ To\'g\'ridan-to\'g\'ri Samolyot: 50 daqiqa (2 tomonlama parvoz kiritilgan)',
        durationRu: '✈️ Прямой авиаперелет: 50 минут (Авиабилеты в обе стороны включены)',
        durationEn: '✈️ Direct Flight: 50 min (Round-trip flights included)',
        transportLabelUz: 'To\'g\'ridan-to\'g\'ri Samolyot Reysi',
        transportLabelRu: 'Прямой авиаперелет',
        transportLabelEn: 'Direct Domestic Flight',
        highlightsUz: [
          '✈️ Toshkent - Samarqand - Toshkent 2 tomonlama samolyot parvozi va VIP transfer',
          '🏨 4 kecha Registon yonidagi 4-5★ hashamatli mehmonxonada tunash',
          '🍲 5 kun davomida 3 mahal to\'liq to\'y oshi va restoran menyulari',
          '🏛️ Barcha tarixiy obidalar va Boqiy Shaharga VIP kirish chiptalari',
          '👨‍💼 Shaxsiy gid va shaxsiy avtomobil transferi'
        ],
        highlightsRu: [
          '✈️ Прямой авиаперелет Ташкент - Самарканд - Ташкент и VIP-трансфер',
          '🏨 4 ночи в роскошном 4-5★ отеле рядом с Регистаном',
          '🍲 3-разовое ресторанное питание с дегустацией самаркандских блюд',
          '🏛️ VIP-билеты во все памятники и исторический комплекс Вечный Город',
          '👨‍💼 Персональный гид и индивидуальный автомобиль на весь период'
        ],
        highlightsEn: [
          '✈️ Round-trip flights Tashkent - Samarkand - Tashkent with VIP airport transfer',
          '🏨 4 Nights in luxury 4-5★ boutique hotel next to Registan',
          '🍲 Full board 3 meals daily with premier dining & banquet events',
          '🏛️ VIP all-inclusive passes to all monuments and Eternal City',
          '👨‍💼 Dedicated private guide with chauffeured executive vehicle'
        ]
      }
    },
    images: [
      '/images/landmarks/samarkand-registan.png',
      'https://images.unsplash.com/photo-1626293952701-d7faef141154?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { 
        nameUz: 'Registon Maydoni', nameRu: 'Площадь Регистан', nameEn: 'Registan Square',
        descUz: 'Tillakori, Ulug\'bek va Sherdor madrasalarining tillarang jilosi',
        descRu: 'Золотое сияние медресе Тилля-Кари, Улугбека и Шердор',
        descEn: 'Golden splendor of Tillya-Kori, Ulugh Beg and Sher-Dor madrasahs',
        img: '/images/landmarks/samarkand-registan.png'
      },
      { 
        nameUz: 'Go\'ri Amir Maqbarasi', nameRu: 'Мавзолей Гур-Эмир', nameEn: 'Gur-e-Amir Mausoleum',
        descUz: 'Sohibqiron Amir Temur va ulug\' allomalarning mangu maskani',
        descRu: 'Усыпальница Амира Тимура и великих ученых эпохи',
        descEn: 'Eternal resting place of Amir Timur and illustrious scholars',
        img: 'https://images.unsplash.com/photo-1626293952701-d7faef141154?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Shohi Zinda Majmuasi', nameRu: 'Комплекс Шахи-Зинда', nameEn: 'Shah-i Zinda Ensemble',
        descUz: 'Sharq miniatyurasining eng go\'zal moviy koshinlar xazinasi',
        descRu: 'Шедевр восточной архитектуры с уникальной голубой мозаикой',
        descEn: 'Masterpiece of Islamic architecture adorned with vivid cobalt mosaics',
        img: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Boqiy Shahar (Silk Road)', nameRu: 'Вечный Город (Silk Road)', nameEn: 'Eternal City (Silk Road)',
        descUz: 'Zamonaviy xalqaro turizm markazi va hunarmandlar rastalari',
        descRu: 'Международный туристический комплекс и ремесленные мастерские',
        descEn: 'Modern world-class tourism center with artisan workshops and canals',
        img: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'bukhara',
    name: 'Buxoro Viloyati',
    nameRu: 'Бухарская область',
    nameEn: 'Bukhara Region',
    flag: '🕌',
    capital: 'Buxoro shahri',
    category: 'history',
    taglineUz: 'Buxoroyi Sharif — Minorai Kalon, Ark Qal\'asi va Labi Hovuz',
    taglineRu: 'Священная Бухара — Минарет Калян, Цитадель Арк и Ляби-Хауз',
    taglineEn: 'Noble Bukhara — Kalyan Minaret, Ark Citadel & Lyabi-Hauz',
    coverImage: '/images/landmarks/bukhara-ark.png',
    visaUz: '5 kun / 4 kecha to\'liq hamma xarajatlar kiritilgan',
    visaRu: '5 дней / 4 ночи «Все включено»',
    visaEn: '5 Days / 4 Nights All-Inclusive',
    bestTimeUz: 'Bahor & Kuz oylari',
    bestTimeRu: 'Весна и Осень',
    bestTimeEn: 'Spring & Autumn',
    temp: '+27°C',
    rating: 4.98,
    descriptionUz: 'Buxoroyi Sharif – 2500 yillik islom madaniyati markazi. 5 kunlik to\'liq tur: qulay avtobus yoki samolyot, Labi Hovuz yonidagi sharqona mehmonxona, 3 mahal Buxoro taomlari, Ark, Minorai Kalon, Sitorai Mohi Xosa muzeylari va shaxsiy gid.',
    descriptionRu: 'Священная Бухара. Полный тур на 5 дней: комфортабельный автобус или самолет, отель у Ляби-Хауз, 3-разовое бухарское питание, входные билеты в Арк, Калян, дворец эмира и персональный гид.',
    descriptionEn: 'Sacred Bukhara 5-day tour: luxury coach or direct flight, boutique hotel by Lyabi-Hauz, 3 meals daily of regional cuisine, all monument tickets and private guide.',
    packages: {
      bus: {
        priceUSD: 209, // 2,685,650 so'm
        durationUz: '🚌 Sayyohlik Avtobusi / Sprinter: 6.5-7 soat (Borish-kelish chiptasi kiritilgan)',
        durationRu: '🚌 Комфортный автобус / Спринтер: 6.5-7 часов (Билеты включены)',
        durationEn: '🚌 Tourist Coach / Sprinter: 6.5-7 hours (Round-trip included)',
        transportLabelUz: 'Sayyohlik Avtobusi / Sprinter',
        transportLabelRu: 'Комфортабельный автобус',
        transportLabelEn: 'Tourist Coach / Sprinter',
        highlightsUz: [
          '🚌 Toshkentdan konditsionerli qulay sayyohlik avtobusi (borish-kelish)',
          '🏨 4 kecha Labi Hovuz bo\'yidagi 4★ milliy sharqona mehmonxonada tunash',
          '🍲 5 kun davomida 3 mahal Buxoro tansiq taomlari (G\'ijduvon shashlik, osh, somsa)',
          '🕌 Minorai Kalon, Ark qal\'asi, Sitorai Mohi Xosa saroyi kirish chiptalari',
          '👨‍💼 Tarixchi professional shaxsiy gid xizmati'
        ],
        highlightsRu: [
          '🚌 Комфортабельный автобус с кондиционером (туда и обратно)',
          '🏨 4 ночи в 4★ аутентичном отеле прямо у Ляби-Хауз',
          '🍲 3-разовое питание (гиждуванский шашлык, бухарский плов, тандыр-самса)',
          '🕌 Входные билеты в Минарет Калян, Цитадель Арк, Дворец Ситораи Мохи-Хоса',
          '👨‍💼 Персональный профессиональный гид-историк'
        ],
        highlightsEn: [
          '🚌 Round-trip air-conditioned tourist coach transportation',
          '🏨 4 Nights in authentic 4★ boutique hotel next to Lyabi-Hauz',
          '🍲 3 meals daily featuring Gijduvan kebabs, Bukharian pilaf & pastries',
          '🕌 Full museum passes: Kalyan Minaret, Ark Citadel, Summer Palace of Emir',
          '👨‍💼 Dedicated professional historic guide'
        ]
      },
      plane: {
        priceUSD: 280, // 3,598,000 so'm
        durationUz: '✈️ To\'g\'ridan-to\'g\'ri Samolyot: 1 soat (2 tomonlama parvoz kiritilgan)',
        durationRu: '✈️ Прямой авиаперелет: 1 час (Авиабилеты в обе стороны включены)',
        durationEn: '✈️ Direct Flight: 1 hour (Round-trip flights included)',
        transportLabelUz: 'To\'g\'ridan-to\'g\'ri Samolyot Reysi',
        transportLabelRu: 'Прямой авиаперелет',
        transportLabelEn: 'Direct Domestic Flight',
        highlightsUz: [
          '✈️ Toshkent - Buxoro - Toshkent 2 tomonlama samolyot parvozi va VIP transfer',
          '🏨 4 kecha Labi Hovuz yonidagi 4-5★ lyuks sharqona mehmonxonada tunash',
          '🍲 5 kun davomida 3 mahal Buxoro tansiq taomlari va maxsus ziyofatlar',
          '🕌 Barcha tarixiy obidalar va Sitorai Mohi Xosa saroyiga VIP kirish biletlari',
          '👨‍💼 Shaxsiy tarixchi gid va shaxsiy avtomobil transferi'
        ],
        highlightsRu: [
          '✈️ Прямой авиаперелет Ташкент - Бухара - Ташкент и VIP-трансфер',
          '🏨 4 ночи в роскошном 4-5★ отеле у Ляби-Хауз',
          '🍲 3-разовое ресторанное питание с блюдами бухарской кухни',
          '🕌 Полный VIP-доступ ко всем памятникам Бухары и летнему дворцу эмира',
          '👨‍💼 Персональный гид и автомобиль с водителем на весь период'
        ],
        highlightsEn: [
          '✈️ Round-trip flights Tashkent - Bukhara - Tashkent with private VIP transfer',
          '🏨 4 Nights in luxury 4-5★ heritage hotel by Lyabi-Hauz',
          '🍲 3 gourmet meals daily featuring traditional Bukharian cuisine',
          '🕌 VIP passes to all landmarks including Ark Citadel & Emir’s Summer Palace',
          '👨‍💼 Dedicated private guide with executive car service'
        ]
      }
    },
    images: [
      '/images/landmarks/bukhara-ark.png',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { 
        nameUz: 'Poi Kalon & Minorai Kalon', nameRu: 'Пои-Калян и Минарет Калян', nameEn: 'Poi Kalyan & Kalyan Minaret',
        descUz: '48 metrli afsonaviy minora va ulug\'vor masjid',
        descRu: 'Легендарный 48-метровый минарет и грандиозная мечеть',
        descEn: 'Legendary 48-meter tower that stood the test of centuries',
        img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Buxoro Ark Qal\'asi', nameRu: 'Цитадель Арк', nameEn: 'Ark Citadel of Bukhara',
        descUz: 'Buxoro hukmdorlarining ulkan g\'ishtin qal\'asi',
        descRu: 'Грандиозная крепость правителей Бухары',
        descEn: 'Massive fortress residence of the historic Bukhara emirs',
        img: '/images/landmarks/bukhara-ark.png'
      },
      { 
        nameUz: 'Labi Hovuz Ansambli', nameRu: 'Ансамбль Ляби-Хауз', nameEn: 'Lyabi-Hauz Ensemble',
        descUz: 'Markaziy hovuz bo\'yidagi choyxona va jonli musiqalar',
        descRu: 'Уютные чайханы и восточная музыка вокруг старинного пруда',
        descEn: 'Cozy teahouses and serene waters under ancient sycamores',
        img: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Sitorai Mohi Xosa Saroyi', nameRu: 'Дворец Ситораи Мохи-Хоса', nameEn: 'Sitorai Mokhi-Khosa Palace',
        descUz: 'Oyna va naqshlar bilan bezatilgan shohona saroy',
        descRu: 'Дворец с зеркальным залом и павлиньим садом',
        descEn: 'Opulent palace with mirror halls, stained glass and gardens',
        img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'khorezm',
    name: 'Xorazm (Xiva Ichan Qal\'a)',
    nameRu: 'Хорезм (Хива Ичан-Кала)',
    nameEn: 'Khorezm (Khiva Ichan Kala)',
    flag: '🏰',
    capital: 'Urganch / Xiva shahri',
    category: 'history',
    taglineUz: 'Ochiq Osmon Ostidagi Tirik Muzey — Ichan Qal\'a va Kalta Minor',
    taglineRu: 'Живой Музей Под Открытым Небом — Ичан-Кала и Кальта-Минор',
    taglineEn: 'Living Open-Air Museum — Ichan Kala & Kalta Minor',
    coverImage: '/images/landmarks/khiva-ichan-kala.png',
    visaUz: '5 kun / 4 kecha to\'liq hamma xarajatlar kiritilgan',
    visaRu: '5 дней / 4 ночи «Все включено»',
    visaEn: '5 Days / 4 Nights All-Inclusive',
    bestTimeUz: 'Aprel - Iyun, Sentyabr - Oktyabr',
    bestTimeRu: 'Апрель - Июнь, Сентябрь - Октябрь',
    bestTimeEn: 'April - June, Sept - Oct',
    temp: '+25°C',
    rating: 4.99,
    descriptionUz: 'Xiva – Sharq ertaklaridagi kabi saqlanib qolgan yagona qadimiy shahar-qal\'a. 5 kunlik tur: samolyot yoki avtobus, Ichan Qal\'a ichidagi hashamatli mehmonxona, 3 mahal xorazmcha tansiq taomlar, 50 ta obidaga chiptalar va shaxsiy gid.',
    descriptionRu: 'Хива — сказочный город-крепость. Полный тур на 5 дней: самолет или автобус, колоритный отель внутри крепости Ичан-Кала, 3-разовое питание (Тухум-барак, Шивит-оши), VIP-билеты во все музеи и персональный гид.',
    descriptionEn: 'Khiva 5-Day Expedition: flight or coach transit, luxury boutique hotel inside Ichan Kala citadel, 3 gourmet meals daily, full museum VIP passes and private guide.',
    packages: {
      bus: {
        priceUSD: 220, // 2,827,000 so'm
        durationUz: '🚌 Komfort Sayyohlik Avtobusi: 12-14 soat (Borish-kelish kiritilgan)',
        durationRu: '🚌 Комфортабельный автобус: 12-14 часов (Билеты включены)',
        durationEn: '🚌 Tourist Coach: 12-14 hours (Round-trip included)',
        transportLabelUz: 'Komfort Sayyohlik Avtobusi',
        transportLabelRu: 'Комфортабельный автобус',
        transportLabelEn: 'Long-distance Coach',
        highlightsUz: [
          '🚌 Toshkentdan konditsionerli qulay sayyohlik avtobusi va yo\'l to\'xtashlari',
          '🏨 4 kecha Ichan Qal\'aning ichidagi sharqona mehmonxonada tunash',
          '🍲 5 kun davomida 3 mahal Xorazm tansiq taomlari (Tuxumbarak, Shivit oshi)',
          '🏰 Ichan Qal\'aning barcha 50 ta obidasi, Nurullaboy saroyi va Kalta Minor biletlari',
          '👨‍💼 Professional shaxsiy gid xizmati'
        ],
        highlightsRu: [
          '🚌 Комфортабельный автобус с кондиционером и остановками для отдыха',
          '🏨 4 ночи в колоритном отеле прямо внутри стен Ичан-Калы',
          '🍲 3-разовое питание (знаменитый Тухум-барак, Шивит-оши, рыба)',
          '🏰 Входные билеты во все 50 памятников Ичан-Калы и Дворец Нуруллабая',
          '👨‍💼 Профессиональный персональный гид'
        ],
        highlightsEn: [
          '🚌 Round-trip long-distance coach with scenic oasis stops',
          '🏨 4 Nights inside the fairy-tale walled city of Ichan Kala',
          '🍲 3 meals daily: handmade Tukhumbarak, dill noodles (Shivit Oshi) & fish',
          '🏰 Access to all 50 monuments inside Ichan Kala & Nurullabay Palace',
          '👨‍💼 Dedicated professional historic guide'
        ]
      },
      plane: {
        priceUSD: 328, // 4,214,800 so'm
        durationUz: '✈️ To\'g\'ridan-to\'g\'ri Samolyot: 1 soat 20 daqiqa (2 tomonlama parvoz kiritilgan)',
        durationRu: '✈️ Прямой авиаперелет: 1 час 20 минут (Авиабилеты в обе стороны включены)',
        durationEn: '✈️ Direct Flight: 1 hour 20 min (Round-trip flights included)',
        transportLabelUz: 'To\'g\'ridan-to\'g\'ri Samolyot Reysi',
        transportLabelRu: 'Прямой авиаперелет',
        transportLabelEn: 'Direct Domestic Flight',
        highlightsUz: [
          '✈️ Toshkent - Urganch - Toshkent 2 tomonlama samolyot parvozi va VIP transfer',
          '🏨 4 kecha Ichan Qal\'aning ichidagi sharqona hashamatli mehmonxonada tunash',
          '🍲 5 kun davomida 3 mahal Xorazm tansiq taomlari (Tuxumbarak, Shivit oshi, Xon baliq)',
          '🏰 Ichan Qal\'aning barcha 50 ta obidasi, Nurullaboy saroyi va Kalta Minor biletlari',
          '👨‍💼 Shaxsiy professional gid va aeroport VIP transferlari'
        ],
        highlightsRu: [
          '✈️ Прямой авиаперелет Ташкент - Ургенч - Ташкент (билеты в обе стороны)',
          '🏨 4 ночи в колоритном бутик-отеле прямо внутри стен Ичан-Калы',
          '🍲 3-разовое питание (знаменитый Тухум-барак, Шивит-оши, рыба по-хорезмски)',
          '🏰 VIP-билеты во все 50 памятников Ичан-Калы, Дворец Нуруллабая и Кальта-Минор',
          '👨‍💼 Персональный гид и VIP-трансферы из аэропорта'
        ],
        highlightsEn: [
          '✈️ Direct round-trip flights Tashkent - Urgench - Tashkent with airport transfers',
          '🏨 4 Nights accommodation inside the historic mud-brick walls of Ichan Kala',
          '🍲 3 gourmet meals daily: handmade Tukhumbarak, dill noodles (Shivit Oshi) & fish',
          '🏰 Full VIP pass to all 50 monuments inside Ichan Kala and Nurullabay Palace',
          '👨‍💼 Dedicated personal guide and chauffeured airport transfers'
        ]
      }
    },
    images: [
      '/images/landmarks/khiva-ichan-kala.png',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { 
        nameUz: 'Ichan Qal\'a Majmuasi', nameRu: 'Комплекс Ичан-Кала', nameEn: 'Ichan Kala Citadel',
        descUz: 'To\'liq saqlangan afsonaviy o\'rta asrlar qal\'asi',
        descRu: 'Полностью сохраненная средневековая цитадель',
        descEn: 'Fully intact fortified medieval inner town',
        img: '/images/landmarks/khiva-ichan-kala.png'
      },
      { 
        nameUz: 'Kalta Minor & Islomxo\'ja', nameRu: 'Кальта-Минар и Ислам-Ходжа', nameEn: 'Kalta Minor & Islam Khodja',
        descUz: 'Moviy feruza koshinli ulkan minora',
        descRu: 'Бирюзовый гигантский минарет и панорама города',
        descEn: 'Cobalt glazed minaret and city panoramic towers',
        img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Juma Masjidi', nameRu: 'Джума-мечеть', nameEn: 'Juma Mosque',
        descUz: 'Har biri alohida naqsh bilan o\'yilgan 218 ta ustun',
        descRu: '218 колонн с неповторимой резьбой по дереву',
        descEn: '218 distinctively carved wooden columns with skylights',
        img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Nurullaboy Saroyi', nameRu: 'Дворец Нуруллабая', nameEn: 'Nurullabay Palace',
        descUz: 'Yevropa va Sharq uslubi uyg\'unlashgan xon saroyi',
        descRu: 'Ханский дворец европейско-восточного стиля',
        descEn: 'Royal palace harmonizing European and oriental artistry',
        img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'ellikqala',
    name: 'Ellikqal\'a (Qoraqalpog\'iston)',
    nameRu: 'Элликкала (Каракалпакстан)',
    nameEn: 'Ellikqala (Karakalpakstan)',
    flag: '🏜️',
    capital: 'Bo\'ston / Nukus',
    category: 'ancient',
    taglineUz: '50 Qal\'a Saltanati — Ayozqal\'a, Toproqqal\'a va Qizilqum Mo\'jizasi',
    taglineRu: 'Царство 50 Крепостей — Аяз-Кала, Топрак-Кала и Тайны Кызылкумов',
    taglineEn: 'Realm of 50 Fortresses — Ayaz Kala, Toprak Kala & Kyzylkum Wonders',
    coverImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    visaUz: '5 kun / 4 kecha to\'liq hamma xarajatlar kiritilgan',
    visaRu: '5 дней / 4 ночи «Все включено»',
    visaEn: '5 Days / 4 Nights All-Inclusive',
    bestTimeUz: 'Aprel - Iyun, Sentyabr - Oktyabr',
    bestTimeRu: 'Апрель - Июнь, Сентябрь - Октябрь',
    bestTimeEn: 'April - June, Sept - Oct',
    temp: '+28°C',
    rating: 4.98,
    descriptionUz: 'Ellikqal\'a – 50 ta qadimiy qal\'alar saltanati. 5 kunlik to\'liq ekspeditsiya: samolyot yoki avtobus, 4x4 cho\'l safari jipi, Ayozko\'l o\'tovlar lagerida tunash, Savitskiy san\'at muzeyi, 3 mahal to\'liq ovqatlanish va professional gid.',
    descriptionRu: 'Элликкала — царство 50 древних крепостей. 5-дневный тур: самолет или автобус, джип-сафари 4х4, ночевки в аутентичных юртах у озера Аязколь, всемирный музей Савицкого и 3-разовое питание.',
    descriptionEn: 'Ellikqala 5-Day Desert Expedition: flight or coach transit, 4x4 desert safari, nomadic yurt camping under stars by Ayazkul, Savitsky Art Museum & full board gourmet meals.',
    packages: {
      bus: {
        priceUSD: 230, // 2,955,500 so'm
        durationUz: '🚌 Avtobus + 4x4 Cho\'l Safari: 14-15 soat (Borish-kelish kiritilgan)',
        durationRu: '🚌 Автобус + Джип-сафари: 14-15 часов (Билеты включены)',
        durationEn: '🚌 Coach + 4x4 Safari: 14-15 hours (Round-trip included)',
        transportLabelUz: 'Sayyohlik Avtobusi + 4x4',
        transportLabelRu: 'Туристический автобус + 4х4',
        transportLabelEn: 'Coach + 4x4 Safari',
        highlightsUz: [
          '🚌 Qulay sayyohlik avtobusi va Ayozqal\'a bo\'ylab 4x4 jip safari',
          '🏕️ 4 kecha Ayozko\'l bo\'yidagi milliy o\'tovlar lageri va mehmonxona',
          '🍲 5 kun davomida 3 mahal to\'liq ovqatlanish va ochiq havoda cho\'l barbekyusi',
          '🎨 Nukus shahridagi dunyoga mashhur Savitskiy san\'at muzeyi biletlari',
          '👨‍💼 Professional ekspeditsiya gidi xizmati'
        ],
        highlightsRu: [
          '🚌 Комфортный автобус и джип-сафари 4х4 по крепостям Аяз-кала и Топрак-кала',
          '🏕️ 4 ночи в юртовом лагере у озера Аязколь и отеле',
          '🍲 3-разовое питание с барбекю у костра под звездным небом',
          '🎨 Входные билеты в знаменитый музей искусств им. Савицкого',
          '👨‍💼 Профессиональный гид экспедиции'
        ],
        highlightsEn: [
          '🚌 Coach transportation and 4x4 off-road Jeep desert safari',
          '🏕️ 4 Nights nomadic yurt camping by Ayazkul lake & hotel',
          '🍲 3 meals daily with open-air campfire barbecues under dark skies',
          '🎨 Tickets to the world-famous Savitsky Avant-Garde Art Museum',
          '👨‍💼 Certified expedition guide'
        ]
      },
      plane: {
        priceUSD: 338, // 4,343,300 so'm
        durationUz: '✈️ Samolyot + 4x4 Safari: 1 soat 30 daqiqa (Ikki tomonlama parvoz kiritilgan)',
        durationRu: '✈️ Авиаперелет + Джип-сафари: 1 час 30 минут (Авиабилеты включены)',
        durationEn: '✈️ Direct Flight + 4x4 Safari: 1 hour 30 min (Round-trip flights included)',
        transportLabelUz: 'To\'g\'ridan-to\'g\'ri Samolyot + 4x4 Safari',
        transportLabelRu: 'Прямой авиаперелет + Джип-сафари',
        transportLabelEn: 'Direct Flight + 4x4 Safari',
        highlightsUz: [
          '✈️ Toshkent - Nukus / Urganch - Toshkent 2 tomonlama samolyot parvozi',
          '🚙 Ayozqal\'a va Toproqqal\'a bo\'ylab 4x4 jip safari transporti',
          '🏕️ 4 kecha Ayozko\'l bo\'yidagi milliy o\'tovlar lageri va shahar mehmonxonasi',
          '🍲 5 kun davomida 3 mahal to\'liq ovqatlanish va ochiq havoda cho\'l barbekyusi',
          '🎨 Nukus shahridagi dunyoga mashhur Savitskiy san\'at muzeyiga kirish va gid'
        ],
        highlightsRu: [
          '✈️ Прямой авиаперелет Ташкент - Нукус / Ургенч в обе стороны',
          '🚙 Джип-сафари 4х4 по древним крепостям Аяз-кала и Топрак-кала',
          '🏕️ 4 ночи в аутентичном юртовом лагере у озера Аязколь и отеле Нукуса',
          '🍲 3-разовое питание с барбекю у костра под звездным небом',
          '🎨 Билеты в знаменитый музей искусств им. Савицкого и услуги гида'
        ],
        highlightsEn: [
          '✈️ Direct round-trip flights Tashkent - Nukus / Urgench',
          '🚙 4x4 off-road Jeep desert safari across Ayaz Kala & Toprak Kala',
          '🏕️ 4 Nights nomadic yurt camping by Ayazkul lake and Nukus hotel',
          '🍲 3 meals daily with open-air campfire barbecues under dark skies',
          '🎨 VIP access to the world-famous Savitsky Avant-Garde Art Museum'
        ]
      }
    },
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { 
        nameUz: 'Ayozqal\'a Qadimiy Qal\'asi', nameRu: 'Крепость Аяз-кала', nameEn: 'Ayaz Kala Ancient Fortress',
        descUz: 'Baland qumtosh tepalik uzra qad ko\'targan ulkan qasr',
        descRu: 'Могучая крепость на высокой песчаной скале',
        descEn: 'Towering sandstone fortress standing proud above desert dunes',
        img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Toproqqal\'a Shoh Saroyi', nameRu: 'Дворец Топрак-кала', nameEn: 'Toprak Kala Palace Citadel',
        descUz: 'Qadimgi freskalar va arxeologik topilmalar beshigi',
        descRu: 'Древний дворец хорезмских царей с фресками',
        descEn: 'Palatial residence of ancient Khorezmian monarchs',
        img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Ayozko\'l O\'tovlar Lageri', nameRu: 'Юртовый лагерь Аязколь', nameEn: 'Ayazkul Yurt Camp',
        descUz: 'Milliy o\'tovlarda dam olish va cho\'l barbekyusi',
        descRu: 'Отдых в аутентичных юртах и ужин у костра',
        descEn: 'Nomadic yurt experience, campfire barbecue and folk songs',
        img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Savitskiy San\'at Muzeyi', nameRu: 'Музей Савицкого (Нукус)', nameEn: 'Savitsky Museum of Art',
        descUz: 'Dunyoga mashhur rus avangard san\'ati to\'plami',
        descRu: 'Вторая в мире коллекция русского авангарда',
        descEn: 'The world-famous "Louvre in the Desert" avant-garde art repository',
        img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'shahrisabz',
    name: 'Shahrisabz (Kesh)',
    nameRu: 'Шахрисабз (Кеш)',
    nameEn: 'Shahrisabz (Kesh)',
    flag: '👑',
    capital: 'Shahrisabz shahri',
    category: 'history',
    taglineUz: 'Amir Temur Vatani — Oqsaroy, Dorus-Saodat va Taxtaqoracha Tandiri',
    taglineRu: 'Родина Амира Тимура — Аксарай, Дорус-Саодат и Тахтакарача',
    taglineEn: 'Birthplace of Amir Timur — Ak-Saray, Dorus-Saodat & Mountain Pass',
    coverImage: '/images/landmarks/oqsaroy-shahrisabz.png',
    visaUz: '5 kun / 4 kecha to\'liq hamma xarajatlar kiritilgan',
    visaRu: '5 дней / 4 ночи «Все включено»',
    visaEn: '5 Days / 4 Nights All-Inclusive',
    bestTimeUz: 'Aprel - Noyabr',
    bestTimeRu: 'Апрель - Ноябрь',
    bestTimeEn: 'April - November',
    temp: '+27°C',
    rating: 4.98,
    descriptionUz: 'Shahrisabz – Sohibqiron Amir Temurning kindik qoni to\'kilgan tabarruk maskani. 5 kunlik to\'liq sayohat: qulay avtobus yoki samolyot, 4★ mehmonxona, 3 mahal milliy ovqatlanish (mashhur tog\' tandir go\'shti), Oqsaroy, Dorus-Saodat va shaxsiy gid.',
    descriptionRu: 'Шахрисабз — родина Амира Тимура. Полный тур на 5 дней: комфортабельный автобус или самолет, 4★ отель, 3-разовое питание (знаменитый горный тандыр-гушт), входные билеты во дворец Аксарай и персональный гид.',
    descriptionEn: 'Shahrisabz 5-day tour: comfortable coach or flight transit, 4★ hotel, 3 meals daily including traditional mountain tandir lamb, full museum passes and private guide.',
    packages: {
      bus: {
        priceUSD: 174, // 2,235,900 so'm
        durationUz: '🚌 Sayyohlik Avtobusi: 5-5.5 soat (Taxtaqoracha dovoni orqali)',
        durationRu: '🚌 Туристический автобус: 5-5.5 часов (Через перевал Тахтакарача)',
        durationEn: '🚌 Tourist Coach: 5-5.5 hours (Via Takhtakaracha pass)',
        transportLabelUz: 'Qulay Sayyohlik Avtobusi',
        transportLabelRu: 'Туристический автобус',
        transportLabelEn: 'Comfortable Tourist Coach',
        highlightsUz: [
          '🚌 Qulay konditsionerli sayyohlik avtobusi (Toshkentdan borish-kelish)',
          '🏨 4 kecha Shahrisabz tog\' etaklaridagi shinam 4★ mehmonxonada tunash',
          '🍲 5 kun davomida 3 mahal ovqatlanish (mashhur Taxtaqoracha tandir go\'shti)',
          '👑 Amir Temurning ulkan Oqsaroy peshtoqi, Dorus-Saodat va Ko\'k Gumbaz biletlari',
          '👨‍💼 Professional shaxsiy tarixchi gid xizmati'
        ],
        highlightsRu: [
          '🚌 Комфортабельный автобус с кондиционером (туда и обратно)',
          '🏨 4 ночи в 4★ отеле у подножия гор Шахрисабза',
          '🍲 3-разовое питание с дегустацией тандыр-гушта на перевале',
          '👑 Входные билеты во Дворец Аксарай, Дорус-Саодат и мечеть Кок-Гумбаз',
          '👨‍💼 Услуги сертифицированного гида-историка'
        ],
        highlightsEn: [
          '🚌 Round-trip air-conditioned coach transportation from Tashkent',
          '🏨 4 Nights in comfortable 4★ mountain-view hotel in Shahrisabz',
          '🍲 Full board meals: 3 times daily featuring cedar-smoked mountain tandir',
          '👑 Full entrance passes to Ak-Saray Palace, Dorus-Saodat & Kok-Gumbaz',
          '👨‍💼 Certified professional private tour guide'
        ]
      },
      plane: {
        priceUSD: 240, // 3,084,000 so'm
        durationUz: '✈️ Samolyot + Shaxsiy Transfer: 1 soat (Samarqand/Qarshi reysi orqali)',
        durationRu: '✈️ Авиаперелет + Трансфер: 1 час (Через рейс в Самарканд/Карши)',
        durationEn: '✈️ Flight + Private Transit: 1 hour (Via Samarkand/Karshi flight)',
        transportLabelUz: 'Samolyot + VIP Transfer',
        transportLabelRu: 'Авиаперелет + VIP-трансфер',
        transportLabelEn: 'Flight + VIP Transfer',
        highlightsUz: [
          '✈️ Toshkent - Samarqand/Qarshi 2 tomonlama samolyot parvozi va VIP avtomobil transferi',
          '🏨 4 kecha Shahrisabz 4★ mehmonxonasida tunash',
          '🍲 5 kun davomida 3 mahal to\'liq tog\' tandir tansiq taomlari',
          '👑 Oqsaroy, Dorus-Saodat va Ko\'k Gumbaz majmualariga VIP kirish biletlari',
          '👨‍💼 Shaxsiy tarixchi gid va shaxsiy avtomobil'
        ],
        highlightsRu: [
          '✈️ Авиаперелет в обе стороны и персональный VIP-трансфер',
          '🏨 4 ночи в 4★ отеле Шахрисабза',
          '🍲 3-разовое питание с ресторанным обслуживанием и тандыр-кабобом',
          '👑 Полный VIP-доступ ко всем памятникам эпохи Тимуридов',
          '👨‍💼 Персональный гид-историк и автомобиль на весь тур'
        ],
        highlightsEn: [
          '✈️ Round-trip flights with private executive vehicle transfer',
          '🏨 4 Nights in 4★ hotel in Shahrisabz',
          '🍲 3 gourmet meals daily featuring traditional roasted meats',
          '👑 Full VIP access passes to Ak-Saray & Dorus-Saodat',
          '👨‍💼 Dedicated personal guide and private chauffeur'
        ]
      }
    },
    images: [
      '/images/landmarks/oqsaroy-shahrisabz.png',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { 
        nameUz: 'Oqsaroy Majmuasi', nameRu: 'Дворец Аксарай', nameEn: 'Ak-Saray Palace',
        descUz: '"Qudratimizga shubha qilsang, biz qurgan imoratlarga boq"',
        descRu: '«Если сомневаешься в нашем величии — взгляни на наши постройки»',
        descEn: '"If you doubt our power, gaze upon our magnificent buildings"',
        img: '/images/landmarks/oqsaroy-shahrisabz.png'
      },
      { 
        nameUz: 'Dorus-Saodat Majmuasi', nameRu: 'Комплекс Дорус-Саодат', nameEn: 'Dorus-Saodat Complex',
        descUz: 'Temuriylar sulolaviy xilxonasi va maqbaralari',
        descRu: 'Усыпальница сыновей и потомков Тимура',
        descEn: 'Dynastic burial vault and shrines of the Timurid house',
        img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Ko\'k Gumbaz Masjidi', nameRu: 'Мечеть Кок-Гумбаз', nameEn: 'Kok-Gumbaz Mosque',
        descUz: 'Ulug\'bek tomonidan qurdirilgan muhtasham moviy masjid',
        descRu: 'Голубая купольная мечеть, возведенная Улугбеком',
        descEn: 'Stunning blue dome Friday Mosque commissioned by Ulugh Beg',
        img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Taxtaqoracha Tog\' Dovoni', nameRu: 'Перевал Тахтакарача', nameEn: 'Takhtakaracha Mountain Pass',
        descUz: 'Tog\' cho\'qqisidagi mashhur tandir go\'shti va manzaralar',
        descRu: 'Высокогорный перевал с захватывающими панорамами',
        descEn: 'Breathtaking high-altitude pass bridging Samarkand & Kashkadarya',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'qashqadaryo',
    name: 'Qashqadaryo (Kitob & Hisor)',
    nameRu: 'Кашкадарья (Китаб и Гиссар)',
    nameEn: 'Kashkadarya (Kitob & Hissar)',
    flag: '🔭',
    capital: 'Qarshi shahri',
    category: 'nature',
    taglineUz: 'Koinot Rasadxonasi, Amir Temur G\'ori va Hisor Tog\'lari',
    taglineRu: 'Астрономическая Обсерватория, Пещера Тимура и горы Гиссара',
    taglineEn: 'Astronomy Observatory, Timur\'s Cave & Hissar Mountains',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    visaUz: '5 kun / 4 kecha to\'liq hamma xarajatlar kiritilgan',
    visaRu: '5 дней / 4 ночи «Все включено»',
    visaEn: '5 Days / 4 Nights All-Inclusive',
    bestTimeUz: 'May - Oktyabr',
    bestTimeRu: 'Май - Октябрь',
    bestTimeEn: 'May - October',
    temp: '+25°C',
    rating: 4.97,
    descriptionUz: 'Qashqadaryo – koinot sirlarini ochuvchi Maydanak rasadxonasi va Hisor tog\'lari. 5 kunlik to\'liq paket: qulay avtobus yoki samolyot, tog\' oromgohi, 3 mahal tandir taomlari, Maydanak tungi teleskopi, Amir Temur g\'ori va shaxsiy gid.',
    descriptionRu: 'Кашкадарья — высокогорная обсерватория Майданак и горы Гиссара. Полный тур на 5 дней: автобус или самолет, горный отель, 3-разовое питание с тандыр-кабобом, ночной обзор галактик в телескопы и персональный гид.',
    descriptionEn: 'Kashkadarya 5-day tour: coach or flight transit, alpine resort, 3 meals daily, night-sky telescope observations at Maydanak Observatory, Cave of Amir Timur & guide.',
    packages: {
      bus: {
        priceUSD: 190, // 2,441,500 so'm
        durationUz: '🚌 Qulay Avtobus / Sprinter: 6-6.5 soat (Borish-kelish chiptasi kiritilgan)',
        durationRu: '🚌 Комфортный автобус: 6-6.5 часов (Билеты включены)',
        durationEn: '🚌 Tourist Coach / Van: 6-6.5 hours (Round-trip included)',
        transportLabelUz: 'Qulay Sayyohlik Avtobusi',
        transportLabelRu: 'Комфортабельный автобус',
        transportLabelEn: 'Comfortable Coach',
        highlightsUz: [
          '🚌 Qulay konditsionerli sayyohlik avtobusi va tog\' transferlari',
          '🏨 4 kecha Kitob baland tog\' oromgohida va mehmonxonada tunash',
          '🍲 5 kun davomida 3 mahal tog\' tansiq taomlari (Qashqadaryo tandir kabobi)',
          '🔭 Maydanak baland tog\' rasadxonasida tungi yulduzlar va koinotni kuzatish',
          '🏔️ Amir Temur g\'ori, Hisor qo\'riqxonasi va professional tog\' gidi'
        ],
        highlightsRu: [
          '🚌 Комфортабельный автобус и высокогорные трансферы',
          '🏨 4 ночи в высокогорном курортном комплексе Китаба',
          '🍲 3-разовое питание с кашкадарьинским тандыр-кабобом',
          '🔭 Наблюдение за галактиками в телескопы обсерватории Майданак (2750м)',
          '🏔️ Пещера Амира Тимура, Гиссарский заповедник и услуги горного гида'
        ],
        highlightsEn: [
          '🚌 Round-trip coach transit and high-altitude mountain transport',
          '🏨 4 Nights accommodation in Kitob alpine resort and hotel',
          '🍲 3 meals daily featuring cedar-smoked tandir meats & fresh mountain produce',
          '🔭 Night galaxy stargazing sessions at Mount Maydanak Observatory (2,750m)',
          '🏔️ Cave of Amir Timur, Hissar Nature Reserve pass & certified guide'
        ]
      },
      plane: {
        priceUSD: 260, // 3,341,000 so'm
        durationUz: '✈️ To\'g\'ridan-to\'g\'ri Samolyot: 1 soat (Toshkent-Qarshi reysi orqali)',
        durationRu: '✈️ Прямой авиаперелет: 1 час (Рейс Ташкент-Карши)',
        durationEn: '✈️ Direct Flight: 1 hour (Tashkent-Karshi flight)',
        transportLabelUz: 'To\'g\'ridan-to\'g\'ri Samolyot Reysi',
        transportLabelRu: 'Прямой авиаперелет',
        transportLabelEn: 'Direct Domestic Flight',
        highlightsUz: [
          '✈️ Toshkent - Qarshi - Toshkent 2 tomonlama samolyot parvozi va tog\' transferi',
          '🏨 4 kecha Kitob tog\' VIP kottejlari va Qarshi mehmonxonasida tunash',
          '🍲 5 kun davomida 3 mahal maxsus tandir va tog\' tansiq taomlari',
          '🔭 Maydanak observatoriyasida koinot va sayyoralarni kuzatish',
          '👨‍💼 Shaxsiy tog\' gidi va yo\'ltanlamas avtomobil'
        ],
        highlightsRu: [
          '✈️ Авиаперелет Ташкент - Карши - Ташкент и трансфер в горы',
          '🏨 4 ночи в VIP-коттеджах Китаба и премиум-отеле Карши',
          '🍲 3-разовое питание с национальными деликатесами',
          '🔭 Эксклюзивное ночное наблюдение планет в обсерватории Майданак',
          '👨‍💼 Горный гид и внедорожник на весь период тура'
        ],
        highlightsEn: [
          '✈️ Round-trip flights Tashkent - Karshi - Tashkent with mountain transit',
          '🏨 4 Nights in luxury Kitob mountain chalets & hotel',
          '🍲 3 gourmet meals daily featuring traditional delicacies',
          '🔭 Deep space planetary observations at Maydanak Observatory',
          '👨‍💼 Dedicated mountain guide with 4x4 vehicle'
        ]
      }
    },
    images: [
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { 
        nameUz: 'Maydanak & Kitob Rasadxonasi', nameRu: 'Обсерватория Майданак', nameEn: 'Mount Maydanak Observatory',
        descUz: 'Dunyoning eng tiniq osmonli baland tog\' teleskoplari',
        descRu: 'Телескопы мирового уровня под чистейшим звездным небом',
        descEn: 'One of the world’s clearest night-sky observation summits',
        img: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Hisor Tog\' Qo\'riqxonasi', nameRu: 'Гиссарский Заповедник', nameEn: 'Hissar Nature Reserve',
        descUz: 'Baland sharsharalar, archazorlar va yovvoyi tabiat',
        descRu: 'Горные водопады, арчовые леса и первозданная природа',
        descEn: 'Cascading waterfalls, juniper forests, and pristine wilderness',
        img: '/images/landmarks/uzbekistan-mountains.png'
      },
      { 
        nameUz: 'Amir Temur Qadimiy Ko\'prigi', nameRu: 'Мост Амира Тимура в Карши', nameEn: 'Amir Timur Bridge in Karshi',
        descUz: 'Qarshi daryosi uzra qurilgan XVI asr me\'moriy obidasi',
        descRu: 'Памятник средневековой инженерии XVI века',
        descEn: 'Historic brick arch bridge spanning across Kashkadarya river',
        img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Miraki Oromgohi', nameRu: 'Курорт Мираки', nameEn: 'Miraki Mountain Resort',
        descUz: 'Qashqadaryo tog\' etaklaridagi go\'zal dam olish maskani',
        descRu: 'Живописная зона отдыха у подножия гор',
        descEn: 'Picturesque alpine wellness resort nestled in foothills',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'surkhandarya',
    name: 'Surxondaryo (Boysun & Termiz)',
    nameRu: 'Сурхандарья (Байсун и Термез)',
    nameEn: 'Surkhandarya (Boysun & Termez)',
    flag: '⛰️',
    capital: 'Termiz shahri',
    category: 'nature',
    taglineUz: 'UNESCO Boysun Madaniyati, Sangardak Sharsharasi va Hakim at-Termiziy',
    taglineRu: 'Культура Байсуна (ЮНЕСКО), Водопад Сангардак и Термез',
    taglineEn: 'UNESCO Boysun Culture, Sangardak Waterfall & Termez Heritage',
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    visaUz: '5 kun / 4 kecha to\'liq hamma xarajatlar kiritilgan',
    visaRu: '5 дней / 4 ночи «Все включено»',
    visaEn: '5 Days / 4 Nights All-Inclusive',
    bestTimeUz: 'Aprel - Iyun, Sentyabr - Noyabr',
    bestTimeRu: 'Апрель - Июнь, Сентябрь - Ноябрь',
    bestTimeEn: 'April - June, Sept - Nov',
    temp: '+29°C',
    rating: 4.98,
    descriptionUz: 'Surxondaryo – qadimiy sivilizatsiya va Boysun tog\'lari. 5 kunlik tur: samolyot yoki avtobus, 4★ mehmonxona va tog\' kottejlari, 3 mahal janubiy taomlar, Sangardak sharsharasi, Omonxona bulog\'i, Fayoztepa va shaxsiy gid.',
    descriptionRu: 'Сурхандарья — оазис древней культуры и горы Байсуна. Полный тур на 5 дней: прямой авиаперелет или автобус, 4★ отели и коттеджи, 3-разовое питание, водопад Сангардак, источник Омонхона и персональный гид.',
    descriptionEn: 'Surkhandarya 5-Day Expedition: direct flight or coach transit, 4★ boutique hotels & alpine chalets, 3 meals daily, Sangardak waterfall, Omonkhona healing spring & guide.',
    packages: {
      bus: {
        priceUSD: 210, // 2,698,500 so'm
        durationUz: '🚌 Sayyohlik Avtobusi / Sprinter: 9-10 soat (Borish-kelish kiritilgan)',
        durationRu: '🚌 Комфортабельный автобус: 9-10 часов (Билеты включены)',
        durationEn: '🚌 Tourist Coach / Sprinter: 9-10 hours (Round-trip included)',
        transportLabelUz: 'Komfort Avtobus / Sprinter',
        transportLabelRu: 'Комфортный автобус / Спринтер',
        transportLabelEn: 'Tourist Coach / Sprinter',
        highlightsUz: [
          '🚌 Toshkentdan qulay konditsionerli Sprinter / sayyohlik avtobusi',
          '🏨 4 kecha Termiz mehmonxonasi va Boysun tog\' kottejlarida tunash',
          '🍲 5 kun davomida 3 mahal janubiy tansiq taomlar va Omonxona tog\' nonushtasi',
          '💧 Sangardak sharsharasi va Fayoztepa Budda ibodatxonasi biletlari',
          '👨‍💼 Professional shaxsiy gid xizmati'
        ],
        highlightsRu: [
          '🚌 Комфортный автобус / Sprinter с кондиционером (туда и обратно)',
          '🏨 4 ночи в отелях Термеза и коттеджах в горах Байсуна',
          '🍲 3-разовое питание с южными национальными блюдами',
          '💧 Экскурсия к водопаду Сангардак и древнему монастырю Фаязтепа',
          '👨‍💼 Профессиональный гид на все дни тура'
        ],
        highlightsEn: [
          '🚌 Round-trip air-conditioned Sprinter / tourist coach transportation',
          '🏨 4 Nights accommodation in Termez hotel & Boysun mountain lodges',
          '🍲 3 meals daily featuring southern authentic specialties',
          '💧 Excursions to Sangardak Waterfall & Fayaztepa Buddhist site',
          '👨‍💼 Professional licensed tour guide'
        ]
      },
      plane: {
        priceUSD: 300, // 3,855,000 so'm
        durationUz: '✈️ To\'g\'ridan-to\'g\'ri Samolyot: 1 soat 15 daqiqa (2 tomonlama parvoz kiritilgan)',
        durationRu: '✈️ Прямой авиаперелет: 1 час 15 минут (Авиабилеты в обе стороны включены)',
        durationEn: '✈️ Direct Flight: 1 hour 15 min (Round-trip flights included)',
        transportLabelUz: 'To\'g\'ridan-to\'g\'ri Samolyot Reysi',
        transportLabelRu: 'Прямой авиаперелет',
        transportLabelEn: 'Direct Domestic Flight',
        highlightsUz: [
          '✈️ Toshkent - Termiz - Toshkent to\'g\'ridan-to\'g\'ri 2 tomonlama samolyot parvozi',
          '🏨 4 kecha Termiz 4★ mehmonxonasi va Boysun tog\' eko-kottejlarida tunash',
          '🍲 5 kun davomida 3 mahal janubiy tansiq taomlar va Omonxona tog\' nonushtasi',
          '💧 Qoyalardan otilib chiquvchi mashhur moviy Sangardak sharsharasi transferi',
          '🏛️ Fayoztepa Budda ibodatxonasi, Hakim at-Termiziy ziyoratgohi va shaxsiy gid'
        ],
        highlightsRu: [
          '✈️ Прямой авиаперелет Ташкент - Термез - Ташкент (билеты в обе стороны)',
          '🏨 4 ночи в 4★ отеле Термеза и эко-коттеджах в горах Байсуна',
          '🍲 3-разовое питание с южными национальными блюдами',
          '💧 Трансфер к уникальному водопаду Сангардак и источнику Омонхона',
          '🏛️ Буддийский монастырь Фаязтепа, комплекс Аль-Хаким ат-Термези и гид'
        ],
        highlightsEn: [
          '✈️ Direct round-trip flights Tashkent - Termez - Tashkent with private transit',
          '🏨 4 Nights accommodation in 4★ Termez hotel & Boysun alpine chalets',
          '🍲 3 meals daily featuring southern Uzbek gastronomic specialties',
          '💧 Private excursion to Sangardak Waterfall & Omonkhona mineral springs',
          '🏛️ Fayaztepa Buddhist monastery, holy Al-Hakim at-Termizi complex & guide'
        ]
      }
    },
    images: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      '/images/landmarks/termiz-historic.png'
    ],
    spots: [
      { 
        nameUz: 'Boysun Qishloqlari & Omonxona', nameRu: 'Байсун и Омонхона', nameEn: 'Boysun Villages & Omonkhona',
        descUz: 'Baland qoyalar bag\'ridagi shifobaxsh ma\'danli suv bulog\'i',
        descRu: 'Целебный минеральный источник среди отвесных скал',
        descEn: 'Sacred mineral healing springs nestled deep inside high canyon rocks',
        img: '/images/landmarks/uzbekistan-mountains.png'
      },
      { 
        nameUz: 'Sangardak Sharsharasi', nameRu: 'Водопад Сангардак', nameEn: 'Sangardak Waterfall',
        descUz: 'Yashil moxli qoyatoshlardan tushuvchi ajoyib sharshara',
        descRu: 'Живописный водопад, бьющий сквозь изумрудный мох скал',
        descEn: 'Spectacular waterfall gushing out from lush moss-covered cliffs',
        img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Fayoztepa & Qoratepa', nameRu: 'Фаязтепа и Каратепа', nameEn: 'Fayaztepa & Karatepa',
        descUz: 'Milodiy I-III asrlarga oid qadimgi Budda stupalari',
        descRu: 'Древние буддийские ступы и монастыри I-III веков',
        descEn: 'Ancient Silk Road Buddhist stupas and monastic cave complexes',
        img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Hakim at-Termiziy Majmuasi', nameRu: 'Комплекс Аль-Хаким ат-Термези', nameEn: 'Al-Hakim at-Termizi Complex',
        descUz: 'Amudaryo sohilidagi ulug\' alloma ziyoratgohi',
        descRu: 'Мавзолей великого ученого-суфия на берегу Амударьи',
        descEn: 'Holy shrine of the great Sufi philosopher on the banks of Amu Darya',
        img: '/images/landmarks/termiz-historic.png'
      }
    ]
  },
  {
    id: 'zomin',
    name: 'Zomin Tog\'lari (Jizzax Viloyati)',
    nameRu: 'Горы Заамина (Джизакская область)',
    nameEn: 'Zaamin Mountains (Jizzakh Region)',
    flag: '🌲',
    capital: 'Zomin tumani / Jizzax',
    category: 'nature',
    taglineUz: 'O\'zbekiston Shveytsariyasi — Zomin Qarag\'ayzori va Osma Shisha Ko\'prik',
    taglineRu: 'Швейцария Узбекистана — Хвойные леса Заамина и Стеклянный Мост',
    taglineEn: 'Switzerland of Uzbekistan — Zaamin Pine Forests & Glass Bridge',
    coverImage: '/images/landmarks/uzbekistan-mountains.png',
    visaUz: '5 kun / 4 kecha to\'liq hamma xarajatlar kiritilgan',
    visaRu: '5 дней / 4 ночи «Все включено»',
    visaEn: '5 Days / 4 Nights All-Inclusive',
    bestTimeUz: 'Yil bo\'yi (Qishda chang\'i, yozda salqin archazor)',
    bestTimeRu: 'Круглый год (Лыжи зимой, прохлада летом)',
    bestTimeEn: 'Year-round (Skiing in winter, alpine breeze in summer)',
    temp: '+22°C',
    rating: 4.99,
    descriptionUz: 'Zomin – O\'zbekistonning Shveytsariyasi. 5 kunlik to\'liq tog\' safari: qulay mikroavtobus yoki VIP transfer, shinam tog\' kotteji, 3 mahal toza tog\' taomlari, osma shisha ko\'prik, dor yo\'li (kanat), Suffa platosi va professional gid.',
    descriptionRu: 'Заамин — Швейцария Узбекистана. Полный горный тур на 5 дней: микроавтобус или VIP-трансфер, альпийский коттедж, 3-разовое питание, стеклянный мост, канатная дорога, плато Суффа и персональный гид.',
    descriptionEn: 'Zaamin 5-day alpine road tour: comfortable minibus or VIP transit, mountain chalets, 3 meals daily, glass suspension bridge, cable car passes & professional mountain guide.',
    packages: {
      bus: {
        priceUSD: 158, // 2,030,300 so'm
        durationUz: '🚌 Qulay Mikroavtobus / Gazel: 2.5-3 soat (Borish-kelish kiritilgan)',
        durationRu: '🚌 Микроавтобус / Газель: 2.5-3 часа (Трансфер включен)',
        durationEn: '🚌 Comfortable Minibus / Gazel: 2.5-3 hours (Transit included)',
        transportLabelUz: 'Qulay Mikroavtobus / Gazel',
        transportLabelRu: 'Микроавтобус / Газель',
        transportLabelEn: 'Comfortable Minibus / Gazel',
        highlightsUz: [
          '🚌 Qulay Gazel / Mikroavtobus transferi (Toshkentdan borish-kelish)',
          '🏨 4 kecha Zomin tog\' shinam kottejlari va eko-mehmonxonada tunash',
          '🍲 5 kun davomida 3 mahal to\'liq toza tog\' ovqatlanishi (qaymoq, tandir kabob)',
          '🌉 Zomin Milliy Bog\'idagi ulkan Osma Shisha Ko\'prik (Glass Bridge) va kanat biletlari',
          '🌲 Suffa platosi, Sherbuloq shifobaxsh suvi va professional gid'
        ],
        highlightsRu: [
          '🚌 Комфортабельный микроавтобус / Газель (туда и обратно)',
          '🏨 4 ночи в уютных альпийских коттеджах и эко-отелях Заамина',
          '🍲 3-разовое питание с экологически чистыми горными продуктами',
          '🌉 Билеты на Подвесной стеклянный мост (Glass Bridge) и канатную дорогу',
          '🌲 Плато Суффа, целебный источник Шербулок и услуги гида'
        ],
        highlightsEn: [
          '🚌 Round-trip air-conditioned minibus transit from Tashkent',
          '🏨 4 Nights accommodation in cozy Zaamin alpine chalets and lodges',
          '🍲 3 fresh organic mountain meals daily across 5 days',
          '🌉 Full tickets to Suspension Glass Bridge and panoramic cable car',
          '🌲 Guided excursions to Suffa Plateau & healing Sherbuloq springs'
        ]
      },
      plane: {
        priceUSD: 200, // 2,570,000 so'm
        durationUz: '🚗 VIP Komfort Shaxsiy Transfer: 2 soat (Toshkentdan to\'g\'ridan-to\'g\'ri kottejgacha)',
        durationRu: '🚗 VIP Индивидуальный трансфер: 2 часа (От дома прямо в коттедж)',
        durationEn: '🚗 VIP Private Express Transit: 2 hours (Door-to-door luxury transfer)',
        transportLabelUz: 'VIP Shaxsiy Komfort Transfer',
        transportLabelRu: 'VIP Индивидуальный трансфер',
        transportLabelEn: 'VIP Private Luxury Transit',
        highlightsUz: [
          '🚗 Toshkentdan shaxsiy lyuks avtomobil transferi (to\'g\'ridan-to\'g\'ri kottejgacha)',
          '🏨 4 kecha Zomin tog\' Premium VIP kottejlarida tunash',
          '🍲 5 kun davomida 3 mahal restoran darajasidagi tog\' taomlari',
          '🌉 Osma Shisha Ko\'prik, dor yo\'li (kanat) va barcha bog\' chiptalari',
          '🌲 Shaxsiy shofyor va shaxsiy tog\' gid xizmati'
        ],
        highlightsRu: [
          '🚗 Индивидуальный комфортабельный трансфер прямо до коттеджа',
          '🏨 4 ночи в премиум VIP-коттеджах Заамина с видом на горы',
          '🍲 3-разовое питание ресторанного уровня с экологическими продуктами',
          '🌉 Билеты на Стеклянный мост, канатную дорогу и в Национальный парк',
          '🌲 Личный водитель и персональный горный гид'
        ],
        highlightsEn: [
          '🚗 Private luxury chauffeured vehicle direct to mountain chalet',
          '🏨 4 Nights in premium VIP alpine chalets with panoramic views',
          '🍲 3 gourmet mountain meals daily featuring organic cuisine',
          '🌉 VIP passes to Suspension Glass Bridge & scenic cable cars',
          '🌲 Dedicated personal chauffeur & private mountain guide'
        ]
      }
    },
    images: [
      '/images/landmarks/uzbekistan-mountains.png',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { 
        nameUz: 'Zomin Osma Shisha Ko\'prik', nameRu: 'Стеклянный Мост Заамина', nameEn: 'Zaamin Suspension Glass Bridge',
        descUz: 'Baland kanyon ustidagi hayajonli osma shisha ko\'prik',
        descRu: 'Захватывающий стеклянный подвесной мост над каньоном',
        descEn: 'Thrilling glass suspension bridge spanning high above the mountain canyon',
        img: '/images/landmarks/uzbekistan-mountains.png'
      },
      { 
        nameUz: 'Suffa Platosi Rasadxonasi', nameRu: 'Плато Суффа и Обсерватория', nameEn: 'Suffa Plateau Observatory',
        descUz: 'Dengiz sathidan 2500m balandlikdagi koinot rasadxonasi',
        descRu: 'Высокогорное плато на высоте 2500м с чистейшим обзором космоса',
        descEn: 'High-altitude 2,500m plateau with premier radio astronomy facilities',
        img: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Zomin Milliy Bog\'i & Archazorlar', nameRu: 'Национальный Парк Заамин', nameEn: 'Zaamin National Pine Park',
        descUz: 'Yashil archazor vodiylar va toza shifobaxsh tog\' havosi',
        descRu: 'Изумрудные сосновые долины и чистый горный воздух',
        descEn: 'Lush alpine pine valleys, crystal rivers, and refreshing mountain air',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Sherbuloq & Sharshara', nameRu: 'Источник Шербулок и Водопад', nameEn: 'Sherbuloq Spring & Waterfall',
        descUz: 'Muzdek ma\'danli tog\' bulog\'i va manzarali sharshara',
        descRu: 'Целебный горный родник и живописный водопад',
        descEn: 'Pristine mountain mineral spring and cascading waterfall',
        img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

export const HOT_DEALS = [
  {
    id: 'deal-1',
    countryId: 'samarkand',
    titleUz: 'Samarqand & Buxoro 5 Kunlik To\'liq Paket (Avtobusda)',
    titleRu: 'Самарканд и Бухара: 5 Дней «Все Включено» (Автобус)',
    titleEn: 'Samarkand & Bukhara 5-Day All-Inclusive Coach Tour',
    transportType: 'bus',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'ENG KO\'P TANLANGAN -20%',
    badgeRu: 'ХИТ ПРОДАЖ -20%',
    badgeEn: 'MOST POPULAR -20%',
    oldPriceUSD: 240,
    newPriceUSD: 190, // ~2,441,500 so'm
    image: '/images/landmarks/samarkand-registan.png',
    includesUz: [
      '🚌 Qulay konditsionerli sayyohlik avtobusi',
      '🏨 4★ Tarixiy Mehmonxonalar (4 kecha)',
      '🍲 5 kun 3 mahal to\'y oshi va milliy taomlar',
      '👨‍💼 Shaxsiy gid & barcha muzey chiptalari'
    ],
    includesRu: [
      '🚌 Комфортабельный автобус с кондиционером',
      '🏨 4★ Исторические отели (4 ночи)',
      '🍲 3-разовое питание (самаркандский плов)',
      '👨‍💼 Персональный гид и билеты во все музеи'
    ],
    includesEn: [
      '🚌 Air-conditioned tourist coach transportation',
      '🏨 4★ Historic boutique hotels (4 nights)',
      '🍲 3 meals daily featuring traditional feasts',
      '👨‍💼 Private tour guide & all entrance tickets'
    ]
  },
  {
    id: 'deal-2',
    countryId: 'khorezm',
    titleUz: 'Xiva Ichan Qal\'a & Qal\'alar VIP Parvoz Turi (Samolyotda)',
    titleRu: 'Хива Ичан-Кала: VIP Авиатур (Прямой Перелет)',
    titleEn: 'Khiva Ichan Kala 5-Day VIP Direct Flight Expedition',
    transportType: 'plane',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'EKSKLYUZIV REYS -25%',
    badgeRu: 'ЭКСКЛЮЗИВ -25%',
    badgeEn: 'EXCLUSIVE FLIGHT -25%',
    oldPriceUSD: 430,
    newPriceUSD: 328, // ~4,214,800 so'm
    image: '/images/landmarks/khiva-ichan-kala.png',
    includesUz: [
      '✈️ Toshkent-Urganch 2 tomonlama samolyot parvozi',
      '🏨 Ichan Qal\'a ichidagi 4★ sharqona mehmonxona (4 kecha)',
      '🍲 5 kun 3 mahal Xorazm tansiq taomlari',
      '🏰 50 ta obidaga VIP pasport & shaxsiy gid'
    ],
    includesRu: [
      '✈️ Прямой авиаперелет в обе стороны Ташкент-Ургенч',
      '🏨 4★ Восточный отель внутри Ичан-Калы (4 ночи)',
      '🍲 3-разовое питание (Тухум-барак, Шивит-оши)',
      '🏰 VIP-билеты во все памятники и персональный гид'
    ],
    includesEn: [
      '✈️ Direct round-trip flights Tashkent-Urgench',
      '🏨 4★ Boutique hotel inside Ichan Kala (4 nights)',
      '🍲 3 gourmet meals daily featuring Khorezm cuisine',
      '🏰 All-inclusive VIP pass to 50 monuments & guide'
    ]
  },
  {
    id: 'deal-3',
    countryId: 'surkhandarya',
    titleUz: 'Surxondaryo Boysun, Omonxona & Sangardak (Samolyotda)',
    titleRu: 'Сурхандарья: Байсун и Сангардак (Авиатур)',
    titleEn: 'Surkhandarya: Boysun & Sangardak Direct Flight Tour',
    transportType: 'plane',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'TABIAT VA SIHAT -20%',
    badgeRu: 'ПРИРОДА И ЗДОРОВЬЕ -20%',
    badgeEn: 'NATURE & HEALTH -20%',
    oldPriceUSD: 380,
    newPriceUSD: 300, // ~3,855,000 so'm
    image: '/images/landmarks/termiz-historic.png',
    includesUz: [
      '✈️ Toshkent-Termiz 2 tomonlama samolyot parvozi',
      '🏨 Termiz 4★ mehmonxonasi va Boysun tog\' kottejlari (4 kecha)',
      '🍲 5 kun 3 mahal ovqatlanish va Omonxona shifobaxsh suvi',
      '💧 Sangardak sharsharasiga VIP transfer & gid'
    ],
    includesRu: [
      '✈️ Прямой авиаперелет Ташкент-Термез (в обе стороны)',
      '🏨 Отели Термеза и коттеджи в горах Байсуна (4 ночи)',
      '🍲 3-разовое питание и целебная вода Омонхоны',
      '💧 Трансфер к водопаду Сангардак и услуги гида'
    ],
    includesEn: [
      '✈️ Direct round-trip flights Tashkent-Termez',
      '🏨 4★ Termez hotels & Boysun alpine lodges (4 nights)',
      '🍲 3 meals daily & Omonkhona healing mineral springs',
      '💧 Private transfer to Sangardak Waterfall & guide'
    ]
  },
  {
    id: 'deal-4',
    countryId: 'zomin',
    titleUz: 'Zomin Tog\'lari & Osma Shisha Ko\'prik Safari (Avtobusda)',
    titleRu: 'Горы Заамина и Стеклянный Мост (Автотур)',
    titleEn: 'Zaamin Alpine Mountains & Glass Bridge Road Tour',
    transportType: 'bus',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'ENG ARZON EKOTUR -20%',
    badgeRu: 'ХИТ СЕЗОНА -20%',
    badgeEn: 'BEST VALUE -20%',
    oldPriceUSD: 200,
    newPriceUSD: 158, // ~2,030,300 so'm
    image: '/images/landmarks/uzbekistan-mountains.png',
    includesUz: [
      '🚌 Qulay Mikroavtobus / Gazel transferi',
      '🏨 Zomin tog\' shinam kottejlari va eko-mehmonxona (4 kecha)',
      '🍲 5 kun 3 mahal toza tog\' ovqatlanishi (tandir kabob)',
      '🌉 Osma Shisha Ko\'prik va dor yo\'li (kanat) chiptalari'
    ],
    includesRu: [
      '🚌 Комфортный микроавтобус / Газель (трансфер)',
      '🏨 Уютные коттеджи в горах Заамина (4 ночи)',
      '🍲 3-разовое питание с горными деликатесами',
      '🌉 Билеты на Стеклянный мост и канатную дорогу'
    ],
    includesEn: [
      '🚌 Comfortable minibus / Gazel transportation',
      '🏨 Cozy Zaamin mountain chalets & eco-lodges (4 nights)',
      '🍲 3 fresh organic mountain meals daily',
      '🌉 Passes to Suspension Glass Bridge and cable cars'
    ]
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Sardor Rahimov',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    roleUz: 'Tadbirkor, Samarqand safari',
    roleRu: 'Предприниматель, Самарканд',
    roleEn: 'Entrepreneur, Samarkand Tour',
    countryUz: 'Samarqand & Buxoro 5 kunlik avtoturi',
    countryRu: 'Автобусный тур по Самарканду и Бухаре',
    countryEn: 'Samarkand & Bukhara 5-Day Coach Tour',
    textUz: '5 kunlik to\'liq paket oldik. Avtobus juda shinam, 4 kecha Registon yonidagi ajoyib mehmonxonada turdik. 3 mahal ovqatlar nihoyatda mazali va to\'yimli bo\'ldi!',
    textRu: 'Взяли полный тур на 5 дней. Автобус комфортный, 4 ночи провели в отличном отеле возле Регистана. 3-разовое питание невероятно вкусное и сытное!',
    textEn: 'We booked the full 5-day all-inclusive package. The bus was very comfortable, 4 nights in a gorgeous hotel right by Registan, and 3 delicious meals daily!',
    dateUz: '3 kun oldin',
    dateRu: '3 дня назад',
    dateEn: '3 days ago'
  },
  {
    id: 2,
    name: 'Dilnoza Karimova',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    roleUz: 'Shifokor, Xiva safari',
    roleRu: 'Врач, Хива авиатур',
    roleEn: 'Physician, Khiva Flight Tour',
    countryUz: 'Xiva Ichan Qal\'a 5 kunlik samolyot turi',
    countryRu: 'Авиатур Хива Ичан-Кала на 5 дней',
    countryEn: 'Khiva Ichan Kala 5-Day Flight Tour',
    textUz: 'Toshkentdan samolyotda 1 soat 20 daqiqada Urganchga yetib bordik. Ichan Qal\'aning ichidagi sharqona mehmonxona, Tuxumbarak va shaxsiy gid xizmati 100% narxiga arziydi!',
    textRu: 'Долетели на самолете из Ташкента всего за 1 час 20 минут. Отель внутри крепости, национальные блюда и индивидуальный гид — всё на высшем уровне!',
    textEn: 'Direct flight in 1h 20m from Tashkent to Urgench was smooth. Boutique hotel inside Ichan Kala, local feasts and private guide were worth every penny!',
    dateUz: '1 hafta oldin',
    dateRu: '1 неделю назад',
    dateEn: '1 week ago'
  },
  {
    id: 3,
    name: 'Jasurbek Mahmudov',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    roleUz: 'Arxitektor, Surxondaryo safari',
    roleRu: 'Архитектор, Сурхандарья авиатур',
    roleEn: 'Architect, Surkhandarya Flight Tour',
    countryUz: 'Surxondaryo Sangardak & Termiz (Samolyotda)',
    countryRu: 'Сурхандарья Сангардак & Термез (Самолет)',
    countryEn: 'Surkhandarya Sangardak & Termez (Flight)',
    textUz: 'Termizga samolyotda uchdik, so\'ngra Sangardak sharsharasi va Boysun tog\'lariga bordik. Mehmonxona, 3 mahal ovqat, barcha biletlar to\'liq paket ichida ekanligi juda qulay bo\'ldi.',
    textRu: 'Прилетели на самолете в Термез, затем отправились на водопад Сангардак и в горы Байсуна. Отель, 3-разовое питание и все билеты включены — очень удобно!',
    textEn: 'Flew to Termez, then visited Sangardak waterfall and Boysun mountains. Hotel, 3 meals daily, and all tickets included in the price made it hassle-free.',
    dateUz: '2 hafta oldin',
    dateRu: '2 недели назад',
    dateEn: '2 weeks ago'
  }
];

export const CONTACT_INFO = {
  phone: '+998 (90) 123-45-67',
  phoneClean: '+998901234567',
  secondaryPhone: '+998 (71) 200-88-99',
  telegram: 'https://t.me/lotos_field_tour',
  telegramUser: '@lotos_field_tour',
  whatsapp: 'https://wa.me/998901234567',
  instagram: 'https://instagram.com/lotos.field',
  email: 'info@lotosfield.uz',
  addressUz: 'Toshkent shahri, Yunusobod tumani, Amir Temur shoh ko\'chasi, 107-B bino',
  addressRu: 'г. Ташкент, Юнусабадский район, проспект Амира Темура, здание 107-Б',
  addressEn: 'Tashkent city, Yunusabad district, Amir Timur Avenue, 107-B Building',
  metroUz: 'Bodomzor & Minor metro bekatlari (3 daqiqalik piyoda yo\'l)',
  metroRu: 'Станции метро Бадамзар & Минор (3 минуты пешком)',
  metroEn: 'Bodomzor & Minor Metro Stations (3 min walk)',
  googleMapsUrl: 'https://maps.google.com/?q=Amir+Temur+Avenue+Tashkent',
  yandexMapsUrl: 'https://yandex.uz/maps/?text=Toshkent+Amir+Temur+shoh+kochasi+107B',
  embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.845892558832!2d69.281816!3d41.333857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed33%3A0x6b4998782a20a45b!2zQW1pciBUZW11ciBTcXVhcmUsIFRhc2hrZW50!5e0!3m2!1sen!2suz!4v1700000000000!5m2!1sen!2suz',
  workHoursUz: 'Dushanba — Yakshanba: 08:00 dan 22:00 gacha (24/7 telefon orqali qo\'llab-quvvatlash)',
  workHoursRu: 'Понедельник — Воскресенье: с 08:00 до 22:00 (24/7 поддержка по телефону)',
  workHoursEn: 'Monday — Sunday: 08:00 to 22:00 (24/7 Phone Support)'
};

