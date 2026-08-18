// ==========================================
// LOTOS FIELD - MULTILINGUAL TRAVEL DATA
// (UZBEKISTAN REGIONS & AUTHENTIC LANDMARK PHOTOS)
// ==========================================

export const EXCHANGE_RATE = 12850; // 1 USD = 12,850 UZS

export const CATEGORIES = [
  { id: 'all', uz: 'Barcha Viloyat va Shaharlar', ru: 'Все Регионы и Города', en: 'All Regions & Cities' },
  { id: 'history', uz: '🕌 Qadimiy & Tarixiy Shaharlar', ru: '🕌 Древние и Исторические Города', en: '🕌 Historic & Ancient Cities' },
  { id: 'nature', uz: '🏔️ Tog\' & Tabiat Qo\'riqxonalari', ru: '🏔️ Горы и Заповедники', en: '🏔️ Mountains & Nature' },
  { id: 'ancient', uz: '🏰 Qadimiy Qal\'alar & Arxeologiya', ru: '🏰 Древние Крепости и Археология', en: '🏰 Ancient Fortresses & Archaeology' }
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
    flightDurationUz: '50 daqiqa (Parvoz: ~340,000 so\'m) / 2 soat 10 daqiqa (Afrosiyob)',
    flightDurationRu: '50 минут (Авиабилет: ~340,000 сум) / 2 часа 10 мин (Афросиаб)',
    flightDurationEn: '50 min (Flight: ~$27) / 2h 10m (Afrosiyob Bullet Train)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Mart - Iyun, Sentyabr - Noyabr',
    bestTimeRu: 'Март - Июнь, Сентябрь - Ноябрь',
    bestTimeEn: 'March - June, Sept - Nov',
    temp: '+26°C',
    rating: 4.99,
    basePriceUSD: 160,
    descriptionUz: 'Samarqand – 2750 yildan ortiq boy tarixga ega Sharq gavhari. Buyuk Ipak Yo\'lining yuragi, Temuriylar saltanati poytaxti va dunyo sivilizatsiyasining buyuk me\'moriy durdonasi. 5 kun va 4 kechalik to\'liq VIP tur paketi.',
    descriptionRu: 'Самарканд — жемчужина Востока с более чем 2750-летней историей. Сердце Великого Шелкового Пути, столица империи Тимуридов и величайший памятник мировой цивилизации. Полный VIP тур на 5 дней и 4 ночи.',
    descriptionEn: 'Samarkand is the jewel of the Orient with over 2,750 years of rich history. The beating heart of the Silk Road, capital of the Timurid Empire, and a UNESCO World Heritage marvel. Complete 5 Days / 4 Nights VIP package.',
    highlightsUz: [
      '5 kun / 4 kecha hashamatli 4-5★ tarixiy mehmonxonada tunash',
      'Afrosiyob VIP tezyurar poyezdi yoki samolyot chiptasi kiritilgan',
      'Registon maydonidagi 3 ta muazzam madrasa va tungi yorug\'lik shousi',
      'Amir Temur maqbarasi (Go\'ri Amir) va Shohi Zinda koshinlar yo\'lagi',
      'Silk Road Samarkand — "Boqiy Shahar" etno-parki va mashhur Samarqand to\'y oshi'
    ],
    highlightsRu: [
      '5 дней / 4 ночи проживания в роскошном 4-5★ историческом отеле',
      'VIP-билеты на скоростной поезд Афросиаб или авиабилеты включены',
      'Экскурсия по 3 медресе Регистана и вечернее световое шоу',
      'Мавзолей Амира Тимура (Гур-Эмир) и уникальный ансамбль Шахи-Зинда',
      'Silk Road Samarkand — «Вечный Город» и дегустация самаркандского плова'
    ],
    highlightsEn: [
      '5 Days / 4 Nights accommodation in a luxury 4-5★ boutique hotel',
      'Afrosiyob VIP bullet train or flight tickets included',
      'Guided tour of the 3 grand madrasahs of Registan and evening light show',
      'Mausoleum of Amir Timur (Gur-e-Amir) and cobalt-tiled Shah-i Zinda',
      'Silk Road Samarkand — "Eternal City" ethno-park and traditional pilaf feast'
    ],
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
    flightDurationUz: '1 soat (Parvoz: ~450,000 so\'m) / 3.5 soat (Afrosiyob)',
    flightDurationRu: '1 час (Авиабилет: ~450,000 сум) / 3.5 часа (Афросиаб)',
    flightDurationEn: '1 hour (Flight: ~$35) / 3.5 hours (Afrosiyob Train)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Bahor & Kuz oylari',
    bestTimeRu: 'Весна и Осень',
    bestTimeEn: 'Spring & Autumn',
    temp: '+27°C',
    rating: 4.98,
    basePriceUSD: 185,
    descriptionUz: 'Buxoro – 2500 yillik qadimiy islom madaniyati markazi, 140 dan ortiq me\'moriy yodgorliklar maskani. Shaharning tarixiy markazi to\'liq UNESCO merosi ro\'yxatiga kiritilgan. 5 kunlik unutilmas VIP sayr.',
    descriptionRu: 'Бухара — древний центр исламской культуры с 2500-летней историей и более чем 140 архитектурными памятниками. Весь исторический центр включен в список наследия ЮНЕСКО.',
    descriptionEn: 'Bukhara is a sacred oasis of Islamic culture with 2,500 years of heritage and over 140 architectural monuments. An UNESCO World Heritage site preserving ancient Silk Road glory.',
    highlightsUz: [
      '5 kun / 4 kecha Labi Hovuz yonidagi milliy sharqona mehmonxonada tunash',
      'Minorai Kalon va Poi Kalon ansambli bo\'ylab eksklyuziv sayohat',
      'Buxoro amirlarining qadimiy qarorgohi – Ark qal\'asi va saroylari',
      'Sitorai Mohi Xosa – Amirning yozgi bog\'-saroyi va zardo\'zlik muzeyi',
      'Buxoroning asriy savdo gumbazlari (Toqi Zargaron) va milliy taomlar'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в аутентичном восточном отеле рядом с Ляби-Хауз',
      'Эксклюзивная экскурсия по ансамблю Пои-Калян и минарету Калян',
      'Древняя резиденция бухарских эмиров — цитадель Арк',
      'Ситораи Мохи-Хоса — летний дворец эмира и музей золотого шитья',
      'Торговые купола Бухары (Токи Заргарон) и национальная кухня'
    ],
    highlightsEn: [
      '5 Days / 4 Nights in an authentic boutique hotel next to Lyabi-Hauz',
      'Exclusive tour of Poi Kalyan architectural complex & Kalyan Minaret',
      'Ancient fortress residence of Bukhara Emirs — Ark Citadel',
      'Sitorai Mokhi-Khosa — Summer palace of the Emir & gold embroidery art',
      'Historic trading domes (Toqi Zargaron) and Bukharian gourmet feasts'
    ],
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
    flightDurationUz: '1 soat 20 daqiqa (Parvoz: ~780,000 so\'m)',
    flightDurationRu: '1 час 20 минут (Авиабилет: ~780,000 сум)',
    flightDurationEn: '1 hour 20 min (Flight: ~$60)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Aprel - Iyun, Sentyabr - Oktyabr',
    bestTimeRu: 'Апрель - Июнь, Сентябрь - Октябрь',
    bestTimeEn: 'April - June, Sept - Oct',
    temp: '+25°C',
    rating: 4.99,
    basePriceUSD: 240,
    descriptionUz: 'Xiva – Sharq ertaklaridagi kabi saqlanib qolgan yagona qadimiy shahar-qal\'a. 2500 yillik loy devorlar ichida 50 dan ortiq tarixiy obidalar uyg\'unlashgan. Toshkentdan to\'g\'ridan-to\'g\'ri samolyot parvozi bilan 5 kunlik VIP tur.',
    descriptionRu: 'Хива — единственный в мире город-крепость, сохранившийся как в восточной сказке. За глиняными стенами возрастом 2500 лет скрываются более 50 шедевров зодчества. Полный тур на 5 дней.',
    descriptionEn: 'Khiva is an authentic fairy-tale fortress city untouched by time. Enclosed within 2,500-year-old mud-brick walls lie over 50 majestic monuments. 5-day VIP flight expedition.',
    highlightsUz: [
      '5 kun / 4 kecha Ichan Qal\'aning ichidagi qadimiy uslubdagi mehmonxonada tunash',
      'Toshkent - Urganch to\'g\'ridan-to\'g\'ri samolyot parvozi va VIP transfer',
      'Kalta Minor va 57 metrli Islomxo\'ja minorasi tepasidan shahar panoramasi',
      '218 ta o\'ymakor ustunli afsonaviy Juma masjidi va Nurullaboy saroyi',
      'Xorazm milliy tansiq taomlari: Tuxumbarak va Shivit oshi degustatsiyasi'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в колоритном отеле прямо внутри крепости Ичан-Кала',
      'Прямой авиаперелет Ташкент - Ургенч и персональный VIP-трансфер',
      'Панорама города с Кальта-Минор и 57-метрового минарета Ислам-Ходжа',
      'Джума-мечеть с 218 резными деревянными колоннами и дворец Нуруллабая',
      'Дегустация знаменитых хорезмских блюд: Тухум-барак и Шивит-оши'
    ],
    highlightsEn: [
      '5 Days / 4 Nights inside the fairy-tale walled city of Ichan Kala',
      'Direct round-trip flights Tashkent - Urgench with VIP airport transfers',
      'Panoramas from Kalta Minor and the 57-meter Islam Khodja minaret',
      'Juma Mosque with 218 intricately carved wooden pillars & Nurullabay Palace',
      'Authentic Khorezmian culinary tasting: handmade Tukhumbarak & Shivit Oshi'
    ],
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
    flightDurationUz: '1 soat 30 daqiqa (Parvoz: ~850,000 so\'m)',
    flightDurationRu: '1 час 30 минут (Авиабилет: ~850,000 сум)',
    flightDurationEn: '1 hour 30 min (Flight: ~$66)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Aprel - Iyun, Sentyabr - Oktyabr',
    bestTimeRu: 'Апрель - Июнь, Сентябрь - Октябрь',
    bestTimeEn: 'April - June, Sept - Oct',
    temp: '+28°C',
    rating: 4.98,
    basePriceUSD: 195,
    descriptionUz: 'Ellikqal\'a – qadimiy Xorazm sivilizatsiyasining 50 ta qal\'adan iborat noyob hududi. Cho\'l qo\'ynidagi tarixiy yodgorliklar va o\'tovlarda tunash imkoniyati.',
    descriptionRu: 'Элликкала — уникальный регион, где когда-то располагалось 50 крепостей древнего Хорезма. Историческое наследие в сердце пустыни Кызылкум.',
    descriptionEn: 'Ellikqala is the realm of 50 ancient fortresses of Khorezm. A breathtaking historical journey through the heart of the Kyzylkum desert.',
    highlightsUz: [
      'Ayozqal\'a va Toproqqal\'a kabi qadimiy qal\'alar bo\'ylab ekspeditsiya',
      'Ayozko\'l bo\'yidagi o\'tovlarda tunash va yulduzli osmon tomoshasi',
      'Cho\'l bo\'ylab tuyada sayohat va ochiq havoda barbekyu',
      'Nukus shahridagi dunyoga mashhur Savitskiy san\'at muzeyi'
    ],
    highlightsRu: [
      'Экспедиция по древним крепостям Аяз-кала и Топрак-кала',
      'Ночевка в аутентичных юртах у озера Аязколь под звездным небом',
      'Верблюжьи прогулки по пустыне и ужин у костра',
      'Всемирно известный музей искусств им. Савицкого в Нукусе'
    ],
    highlightsEn: [
      'Overnight stay in authentic yurt camps beside Ayazkul lake',
      'Camel desert trekking and brilliant stargazing under dark skies',
      'World-renowned Savitsky Art Museum in Nukus'
    ],
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
    taglineUz: 'Sohibqiron Vatani — Oqsaroy, Dorus-Saodat va Taxtaqoracha Dovoni',
    taglineRu: 'Родина Тамерлана — Дворец Аксарай и перевал Тахтакарача',
    taglineEn: 'Birthplace of Tamerlane — Ak-Saray Palace & Takhtakaracha Pass',
    coverImage: '/images/landmarks/oqsaroy-shahrisabz.png',
    flightDurationUz: 'Samarqanddan mashinada 1.5 soat / Qarshi orqali',
    flightDurationRu: '1.5 часа на авто из Самарканда / через Карши',
    flightDurationEn: '1.5 hours by car from Samarkand / via Karshi',
    visaUz: 'Erkin kirish',
    visaRu: 'Свободный вход',
    visaEn: 'Free entry',
    bestTimeUz: 'Aprel - Noyabr',
    bestTimeRu: 'Апрель - Ноябрь',
    bestTimeEn: 'April - November',
    temp: '+26°C',
    rating: 4.95,
    basePriceUSD: 70,
    descriptionUz: 'Shahrisabz – Amir Temur tavallud topgan muqaddas vatan. Yashil bog\'lar, Temuriylar arxitekturasi va Zarafshon tog\' tizmasining purviqor manzaralari.',
    descriptionRu: 'Шахрисабз — родина великого полководца Амира Тимура. Зеленые сады, шедевры архитектуры эпохи Тимуридов и живописные горные перевалы.',
    descriptionEn: 'Shahrisabz is the beloved birthplace of Amir Timur. Verdant mountain valleys, grandiose imperial palaces, and pristine Zeravshan ranges.',
    highlightsUz: [
      'Amir Temurning ulkan Oqsaroy darvozasi peshtoqi (65m balandlik)',
      'Dorus-Saodat va Jahongir Mirzo maqbarasi',
      'Dorut-Tilovat majmuasi va Ko\'k Gumbaz masjidi',
      'Taxtaqoracha tog\' dovonida tandir go\'shti tanovul qilish',
      'Muzdek tog\' buloqlari va qadimiy chinorlar sayri'
    ],
    highlightsRu: [
      'Грандиозный портал дворца Аксарай высотой 65 метров',
      'Комплекс Дорус-Саодат и усыпальница Джахангира',
      'Ансамбль Дорут-Тилават и мечеть Кок-Гумбаз',
      'Тандыр-гушт на вершине горного перевала Тахтакарача',
      'Прогулка среди вековых платанов и родников'
    ],
    highlightsEn: [
      'Monumental 65-meter gateway arch of Ak-Saray Palace',
      'Dorus-Saodat memorial complex and Jahangir mausoleum',
      'Dorut-Tilovat complex and turquoise Kok-Gumbaz Mosque',
      'Scenic tasting of traditional tandir lamb atop Takhtakaracha pass',
      'Cool mountain springs and ancient plane tree groves'
    ],
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
    flightDurationUz: '1 soat (Parvoz: ~450,000 so\'m) / Afrosiyob poyezdi',
    flightDurationRu: '1 час (Авиабилет: ~450,000 сум) / Поезд Афросиаб',
    flightDurationEn: '1 hour (Flight: ~$35) / Afrosiyob Bullet Train',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'May - Oktyabr',
    bestTimeRu: 'Май - Октябрь',
    bestTimeEn: 'May - October',
    temp: '+25°C',
    rating: 4.97,
    basePriceUSD: 175,
    descriptionUz: 'Qashqadaryo – bepoyon yaylovlar, baland Hisor cho\'qqilari, koinot sirlarini ochuvchi baland tog\' Maydanak rasadxonasi va betakror tog\' manzaralari. 5 kunlik astronomiya va tabiat ekspeditsiyasi.',
    descriptionRu: 'Кашкадарья — край альпийских лугов, величественных вершин Гиссарского хребта, уникальных астрономических обсерваторий Майданак и искреннего гостеприимства. Полный тур на 5 дней.',
    descriptionEn: 'Kashkadarya features the majestic Hissar peaks, world-class high-altitude observatory at Mount Maydanak, hidden alpine canyons, and authentic southern cuisine. 5 Days / 4 Nights tour.',
    highlightsUz: [
      '5 kun / 4 kecha Kitob tog\' oromgohi va Qarshi shahar mehmonxonasida tunash',
      'Kitob Baland Tog\' Maydanak Astronomiya Rasadxonasida yulduzlarni kuzatish',
      'Dengiz sathidan 2500m balanddagi sirli Amir Temur g\'ori va Hisor qo\'riqxonasi',
      'Qarshi daryosi ustidagi tarixiy Amir Temur ko\'prigi va Odina masjidi',
      'Haqiqiy Qashqadaryo tandir go\'shti va archazor tog\' havosi'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в горном комплексе Китаба и премиум-отеле Карши',
      'Наблюдение за звездами и галактиками в обсерватории Майданак на высоте 2750м',
      'Таинственная пещера Амира Тимура на высоте 2500 метров и Гиссарский заповедник',
      'Исторический мост Амира Тимура в Карши и старинная мечеть Одина',
      'Настоящий кашкадарьинский тандыр-кабоб с ароматом хвои'
    ],
    highlightsEn: [
      '5 Days / 4 Nights in Kitob alpine resort and premium Karshi hotels',
      'Galaxy and deep-space stargazing at Mount Maydanak Observatory (2,750m)',
      'Mysterious Cave of Amir Timur at 2,500m elevation and Hissar Nature Reserve',
      'Historic XVI century Amir Timur Bridge and Odina Mosque in Karshi',
      'Authentic cedar-smoked tandir kebab tasting in alpine mountain lodges'
    ],
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
    flightDurationUz: '1 soat 15 daqiqa (Parvoz: ~720,000 so\'m)',
    flightDurationRu: '1 час 15 минут (Авиабилет: ~720,000 сум)',
    flightDurationEn: '1 hour 15 min (Flight: ~$56)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Aprel - Iyun, Sentyabr - Noyabr',
    bestTimeRu: 'Апрель - Июнь, Сентябрь - Ноябрь',
    bestTimeEn: 'April - June, Sept - Nov',
    temp: '+29°C',
    rating: 4.98,
    basePriceUSD: 225,
    descriptionUz: 'Surxondaryo – O\'zbekistonning eng janubiy va eng qadimiy vohasi. Boysun tog\'lari, qoyadan otiluvchi Sangardak sharsharasi, qadimgi Budda ibodatxonalari va Hakim at-Termiziy ziyoratgohi bilan 5 kunlik VIP safari.',
    descriptionRu: 'Сурхандарья — самый южный и древний оазис Узбекистана. Самобытный фольклор Байсуна, водопад Сангардак, древние буддийские монастыри и святыни Термеза. 5 дней незабываемого отдыха.',
    descriptionEn: 'Surkhandarya is Uzbekistan\'s southern paradise with ancient Buddhist stupas, towering Sangardak waterfalls, and UNESCO-recognized Boysun culture. Complete 5 Days / 4 Nights journey.',
    highlightsUz: [
      '5 kun / 4 kecha Termiz mehmonxonasi va Boysun tog\' eko-kempinglarida tunash',
      'Toshkent - Termiz to\'g\'ridan-to\'g\'ri samolyot parvozi va barcha transferlar',
      'UNESCO merosi Boysun tog\' kanyonlari va shifobaxsh Omonxona bulog\'i',
      'Qoyalardan otilib chiquvchi mashhur moviy Sangardak sharsharasi',
      'Fayoztepa qadimiy Budda ibodatxonasi va Al-Hakim at-Termiziy majmuasi'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в отелях Термеза и эко-коттеджах в горах Байсуна',
      'Прямой авиаперелет Ташкент - Термез и индивидуальные VIP-трансферы',
      'Каньоны Байсуна (наследие ЮНЕСКО) и целебный источник Омонхона',
      'Знаменитый водопад Сангардак, бьющий прямо из изумрудных скал',
      'Буддийский монастырь Фаязтепа I-III вв. и мавзолей Аль-Хаким ат-Термези'
    ],
    highlightsEn: [
      '5 Days / 4 Nights in Termez boutique hotels and alpine eco-lodges in Boysun',
      'Direct round-trip flights Tashkent - Termez with private transfers',
      'Boysun mountain gorges (UNESCO Heritage) and healing Omonkhona mineral springs',
      'Spectacular Sangardak waterfall gushing out from moss-covered canyon cliffs',
      'Ancient Buddhist monastery of Fayaztepa and holy Al-Hakim at-Termizi complex'
    ],
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
    id: 'tashkent-zomin',
    name: 'Toshkent & Zomin Tog\'lari',
    nameRu: 'Ташкент и горы Заамина',
    nameEn: 'Tashkent & Zaamin Mountains',
    flag: '🌲',
    capital: 'Toshkent shahri / Jizzax',
    category: 'nature',
    taglineUz: 'O\'zbekiston Shveytsariyasi — Zomin Qarag\'ayzori va Zamonaviy Poytaxt',
    taglineRu: 'Швейцария Узбекистана — Сосновые леса Заамина и Столица',
    taglineEn: 'Switzerland of Uzbekistan — Zaamin Pine Forests & Capital',
    coverImage: '/images/landmarks/tashkent-tv-tower.png',
    flightDurationUz: '2.5 soat (VIP Zomin transferi: ~180,000 so\'m) / Poyezd',
    flightDurationRu: '2.5 часа (VIP-трансфер в Заамин: ~180,000 сум) / Поезд',
    flightDurationEn: '2.5 hours (VIP Zaamin transit: ~$14) / Express train',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Yil bo\'yi (Qishda chang\'i, yozda salqin)',
    bestTimeRu: 'Круглый год (Лыжи зимой, прохлада летом)',
    bestTimeEn: 'Year-round (Skiing in winter, alpine breeze in summer)',
    temp: '+24°C',
    rating: 4.99,
    basePriceUSD: 140,
    descriptionUz: 'Toshkent va Zomin – zamonaviy megapolis qulayliklari hamda toza tog\' archazorlarining ajoyib uyg\'unligi. Shisha ko\'priklar, tog\' kurortlari va poytaxt obidalari bilan 5 kunlik to\'liq VIP sayohat.',
    descriptionRu: 'Ташкент и Заамин — сочетание комфорта современного мегаполиса и чистого хвойного горного воздуха. Стеклянные подвесные мосты, премиум-курорты и парки. 5 дней отдыха.',
    descriptionEn: 'Tashkent and Zaamin offer a seamless blend of modern metropolitan luxury and crystal-pure alpine pine forests, featuring glass suspension bridges and resorts. 5 Days / 4 Nights.',
    highlightsUz: [
      '5 kun / 4 kecha Zomin tog\' Premium kottejlarida va poytaxt mehmonxonasida tunash',
      'Zomin Milliy Bog\'idagi ulkan Osma Shisha Ko\'prik (Glass Bridge) sayri',
      '2000 metr balandlikdagi dor yo\'li (kanat) va toza archazor tog\' havosi',
      'Hazrati Imom (Hastimom) majmuasidagi VII asr Usmon Qur\'oni ziyorati',
      'Amirsoy tog\' kurorti, Chorsu bozori va Toshkent Teleminorasi'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в премиум-коттеджах Заамина и столичном отеле 4-5★',
      'Подвесной стеклянный мост (Glass Bridge) в Зааминском национальном парке',
      'Канатная дорога на высоте 2000 метров и чистейший сосновый воздух',
      'Священный Коран Усмана VII века в комплексе Хазрати Имам',
      'Всесезонный курорт Амирсой, базар Чорсу и Ташкентская телебашня'
    ],
    highlightsEn: [
      '5 Days / 4 Nights in luxury Zaamin alpine chalets and premium capital hotels',
      'Thrilling suspension Glass Bridge walk in Zaamin National Park',
      'Panoramic cable car ride at 2,000m altitude through pristine pine forests',
      'Original VII century Holy Uthman Quran at Hazrati Imam complex',
      'Amirsoy mountain resort, historic Chorsu bazaar & Tashkent TV Tower'
    ],
    images: [
      '/images/landmarks/tashkent-tv-tower.png',
      '/images/landmarks/uzbekistan-mountains.png',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { 
        nameUz: 'Zomin Tog\'lari & Osma Ko\'prik', nameRu: 'Горы Заамина и Мост', nameEn: 'Zaamin Mountains & Bridge',
        descUz: 'Yashil archazor vodiylar va toza tog\' havosi',
        descRu: 'Изумрудные сосновые долины и чистый горный воздух',
        descEn: 'Lush alpine valleys, crystal rivers, and refreshing mountain air',
        img: '/images/landmarks/uzbekistan-mountains.png'
      },
      { 
        nameUz: 'Hazrati Imom (Hastimom)', nameRu: 'Комплекс Хазрати Имам', nameEn: 'Hazrati Imam Complex',
        descUz: 'Poytaxtning bosh islomiy obidasi va nodir qo\'lyozmalar',
        descRu: 'Главная исламская святыня столицы с древнейшими рукописями',
        descEn: 'Historic Islamic intellectual center housing ancient holy manuscripts',
        img: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Amirsoy Mountain Resort', nameRu: 'Курорт Амирсой', nameEn: 'Amirsoy Mountain Resort',
        descUz: 'Xalqaro toifadagi qishki va yozgi tog\' kurorti',
        descRu: 'Всесезонный горный курорт международного уровня',
        descEn: 'World-class all-season mountain wellness & ski resort',
        img: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80'
      },
      { 
        nameUz: 'Teleminora & Shahidlar Xotirasi', nameRu: 'Телебашня и Мемориальный Парк', nameEn: 'Tashkent TV Tower & Memorial Park',
        descUz: '375 metrli teleminora va go\'zal gumbazli xiyobon',
        descRu: '375-метровая телебашня и живописный парковый ансамбль',
        descEn: '375m iconic TV tower and ornate turquoise memorial rotunda',
        img: '/images/landmarks/tashkent-tv-tower.png'
      }
    ]
  }
];

export const HOT_DEALS = [
  {
    id: 'deal-1',
    countryId: 'samarkand',
    titleUz: 'Samarqand & Buxoro VIP Afrosiyob Ekspress Turi',
    titleRu: 'VIP Экспресс-тур в Самарканд и Бухару на Афросиабе',
    titleEn: 'Samarkand & Bukhara VIP Afrosiyob Bullet Train Tour',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'ENG KO\'P TANLANGAN -25%',
    badgeRu: 'ХИТ ПРОДАЖ -25%',
    badgeEn: 'MOST POPULAR -25%',
    oldPriceUSD: 240,
    newPriceUSD: 180,
    image: '/images/landmarks/samarkand-registan.png',
    includesUz: ['Afrosiyob VIP poyezd chiptalari', '4-5★ Tarixiy Mehmonxonalar (4 kecha)', 'Shaxsiy gid & barcha muzey chiptalari', 'Milliy to\'y oshi va kechki dasturlar'],
    includesRu: ['VIP-билеты на скоростной поезд Афросиаб', '4-5★ Исторические отели (4 ночи)', 'Персональный гид и билеты во все музеи', 'Национальный праздничный плов и ужины'],
    includesEn: ['VIP tickets for Afrosiyob high-speed train', '4-5★ Historic boutique hotels (4 nights)', 'Private tour guide & museum access', 'Festive traditional dinners included']
  },
  {
    id: 'deal-2',
    countryId: 'khorezm',
    titleUz: 'Xiva Ichan Qal\'a & Ellikqal\'a Qadimiy Qal\'alar Ekspeditsiyasi',
    titleRu: 'Экспедиция: Хива Ичан-Кала и Древние Крепости Элликкалы',
    titleEn: 'Khiva Ichan Kala & Ellikqala Ancient Fortresses Expedition',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'EKSKLYUZIV -30%',
    badgeRu: 'ЭКСКЛЮЗИВ -30%',
    badgeEn: 'EXCLUSIVE -30%',
    oldPriceUSD: 340,
    newPriceUSD: 240,
    image: '/images/landmarks/khiva-ichan-kala.png',
    includesUz: ['Toshkent-Urganch to\'g\'ridan-to\'g\'ri aviaparvoz', 'Ichan Qal\'a ichidagi sharqona mehmonxona (4 kecha)', 'Ayozqal\'a & Toproqqal\'a jip safari', 'Xorazm milliy tansiq taomlari'],
    includesRu: ['Прямой авиаперелет Ташкент-Ургенч', 'Восточный отель внутри Ичан-Калы (4 ночи)', 'Джип-сафари в Аяз-кала и Топрак-кала', 'Хорезмские национальные блюда'],
    includesEn: ['Direct round-trip flights Tashkent-Urgench', 'Boutique hotel inside Ichan Kala (4 nights)', '4x4 Jeep safari to Ayaz Kala & Toprak Kala', 'Gourmet regional culinary banquets']
  },
  {
    id: 'deal-3',
    countryId: 'surkhandarya',
    titleUz: 'Surxondaryo Boysun, Omonxona & Sangardak Sharsharasi Safari',
    titleRu: 'Сурхандарья: Байсун, Омонхона и Водопад Сангардак',
    titleEn: 'Surkhandarya: Boysun, Omonkhona & Sangardak Waterfall Tour',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'TABIAT VA SIHAT -20%',
    badgeRu: 'ПРИРОДА И ЗДОРОВЬЕ -20%',
    badgeEn: 'NATURE & HEALTH -20%',
    oldPriceUSD: 280,
    newPriceUSD: 225,
    image: '/images/landmarks/termiz-historic.png',
    includesUz: ['Toshkent-Termiz aviaparvozi', 'Termiz va Boysun tog\' kottejlari (4 kecha)', 'Sangardak sharsharasiga VIP transfer', 'Omonxona shifobaxsh suvi va tog\' nonushtasi'],
    includesRu: ['Авиаперелет Ташкент-Термез', 'Отели Термеза и коттеджи в горах Байсуна (4 ночи)', 'VIP-трансфер к водопаду Сангардак', 'Целебная вода Омонхоны и горные завтраки'],
    includesEn: ['Direct round-trip flights Tashkent-Termez', 'Termez hotels and Boysun mountain eco-lodges (4 nights)', 'VIP transit to Sangardak Waterfall', 'Omonkhona healing waters & breakfasts']
  },
  {
    id: 'deal-4',
    countryId: 'qashqadaryo',
    titleUz: 'Qashqadaryo Kitob Rasadxonasi & Shahrisabz Oqsaroy Turi',
    titleRu: 'Кашкадарья: Обсерватория в Китабе и Аксарай в Шахрисабзе',
    titleEn: 'Kashkadarya: Kitob Observatory & Shahrisabz Ak-Saray Tour',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'KOINOT SIRLARI -25%',
    badgeRu: 'ТАЙНЫ ВСЕЛЕННОЙ -25%',
    badgeEn: 'STARGAZING & HISTORY -25%',
    oldPriceUSD: 220,
    newPriceUSD: 165,
    image: '/images/landmarks/oqsaroy-shahrisabz.png',
    includesUz: ['Afrosiyob poyezdi yoki samolyot parvozi', 'Maydanak observatoriyasida yulduzlarni kuzatish (4 kecha)', 'Oqsaroy va Dorus-Saodat ekskursiyasi', 'Taxtaqoracha tandir go\'shti ziyofati'],
    includesRu: ['Поезд Афросиаб или авиаперелет', 'Наблюдение за звездами в обсерватории Майданак (4 ночи)', 'Экскурсия в Аксарай и Дорус-Саодат', 'Ужин с кашкадарьинским тандыр-кабобом'],
    includesEn: ['Afrosiyob bullet train or flight tickets', 'Stargazing at Mount Maydanak Observatory (4 nights)', 'Guided tour of Ak-Saray & Dorus-Saodat', 'Traditional mountain feast on pass']
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Sardor Rahimov',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    roleUz: 'Tadbirkor, Toshkent',
    roleRu: 'Предприниматель, Ташкент',
    roleEn: 'Entrepreneur, Tashkent',
    countryUz: 'Samarqand & Buxoro turi',
    countryRu: 'Тур по Самарканду и Бухаре',
    countryEn: 'Samarkand & Bukhara Tour',
    textUz: 'Oilamiz bilan Afrosiyob poyezdida Samarqand va Buxoroga 4 kunlik sayohatga bordik. LOTOS FIELD tashkilotchiligi juda ajoyib bo\'ldi – mehmonxonalar toza, gidlar nihoyatda bilimdon!',
    textRu: 'Мы поехали семьей на скоростном поезде Афросиаб в Самарканд и Бухару на 4 дня. Организация LOTOS FIELD на высшем уровне – отели чистые, гиды невероятно образованные!',
    textEn: 'Our family took the high-speed Afrosiyob train for a 4-day journey to Samarkand and Bukhara. LOTOS FIELD organized everything flawlessly — immaculate hotels and brilliant guides!',
    dateUz: '3 kun oldin',
    dateRu: '3 дня назад',
    dateEn: '3 days ago'
  },
  {
    id: 2,
    name: 'Dilnoza Karimova',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    roleUz: 'Shifokor, Farg\'ona',
    roleRu: 'Врач, Фергана',
    roleEn: 'Physician, Fergana',
    countryUz: 'Xiva & Ellikqal\'a ekspeditsiyasi',
    countryRu: 'Экспедиция Хива & Элликкала',
    countryEn: 'Khiva & Ellikqala Expedition',
    textUz: 'Ichan Qal\'aning kechki chiroqlari va Ellikqal\'adagi Ayozqal\'a qadimiy manzaralari butun umrga yodda qoladigan bo\'ldi. O\'z yurtimiz naqadar go\'zal va boy tarixga ega ekanligiga yana bir bor amin bo\'ldik.',
    textRu: 'Ночные огни Ичан-Калы и древние виды Аяз-калы в Элликкале запомнятся на всю жизнь. Мы еще раз убедились, насколько прекрасна и богата история нашей страны.',
    textEn: 'The night lights of Ichan Kala and the ancient fortresses of Ayaz Kala in Ellikqala were breathtaking. Truly an unforgettable immersion into Uzbekistan\'s timeless heritage.',
    dateUz: '1 hafta oldin',
    dateRu: '1 неделю назад',
    dateEn: '1 week ago'
  },
  {
    id: 3,
    name: 'Jasurbek Mahmudov',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    roleUz: 'Arxitektor, Namangan',
    roleRu: 'Архитектор, Наманган',
    roleEn: 'Architect, Namangan',
    countryUz: 'Surxondaryo Sangardak & Boysun',
    countryRu: 'Сурхандарья Сангардак & Байсун',
    countryEn: 'Surkhandarya Sangardak & Boysun',
    textUz: 'Sangardak sharsharasi va Boysun tog\'laridagi toza havo, Omonxona bulog\'i haqiqiy tabiat mo\'jizasi! Transport, mehmonxona va ovqatlanish 100% vaqtida va oliy darajada tashkil qilindi.',
    textRu: 'Водопад Сангардак и чистейший горный воздух Байсуна, целебный источник Омонхона — настоящее чудо природы! Все организовано точно в срок и по высшему разряду.',
    textEn: 'Sangardak waterfall, the fresh mountain breeze of Boysun, and the healing springs of Omonkhona are real wonders of nature! Transit, hotel, and meals were 100% on point.',
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
  addressUz: 'Toshkent shahri, Amir Temur shoh ko\'chasi, 107-B bino',
  addressRu: 'г. Ташкент, проспект Амира Тимура, здание 107-Б',
  addressEn: 'Tashkent city, Amir Timur avenue, Building 107-B',
  workHoursUz: 'Har kuni 08:00 dan 22:00 gacha (24/7 ichki turizm markazi)',
  workHoursRu: 'Ежедневно с 08:00 до 22:00 (24/7 центр туризма)',
  workHoursEn: 'Daily 08:00 to 22:00 (24/7 support)'
};
