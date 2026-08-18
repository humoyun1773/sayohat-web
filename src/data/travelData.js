// ==========================================
// LOTOS FIELD - MULTILINGUAL TRAVEL DATA
// (UZBEKISTAN REGIONS & AUTHENTIC LANDMARK PHOTOS)
// (BUS, GAZEL, SPRINTER & GROUND TRANSPORT)
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
    flightDurationUz: 'Avtobus / Gazel: 4-4.5 soat (~90,000 - 140,000 so\'m) / Mashinada 3.5 soat',
    flightDurationRu: 'Автобус / Газель: 4-4.5 часа (~90,000 - 140,000 сум) / На авто 3.5 часа',
    flightDurationEn: 'Bus / Gazel van: 4-4.5 hours (~$8 - $11) / By car 3.5 hours',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Mart - Iyun, Sentyabr - Noyabr',
    bestTimeRu: 'Март - Июнь, Сентябрь - Ноябрь',
    bestTimeEn: 'March - June, Sept - Nov',
    temp: '+26°C',
    rating: 4.99,
    basePriceUSD: 100,
    descriptionUz: 'Samarqand – 2750 yildan ortiq boy tarixga ega Sharq gavhari. Buyuk Ipak Yo\'lining yuragi, Temuriylar saltanati poytaxti. Qulay konditsionerli sayyohlik avtobuslari va Gazellarda 5 kunlik unutilmas sayr.',
    descriptionRu: 'Самарканд — жемчужина Востока с более чем 2750-летней историей. Сердце Великого Шелкового Пути. 5-дневный тур на комфортабельных туристических автобусах и микроавтобусах Газель.',
    descriptionEn: 'Samarkand is the jewel of the Orient with over 2,750 years of rich history. The beating heart of the Silk Road. Complete 5-day tour by comfortable air-conditioned coaches and Gazel vans.',
    highlightsUz: [
      '5 kun / 4 kecha hashamatli 4★ tarixiy mehmonxonada tunash',
      'Konditsionerli qulay sayyohlik avtobusi / Gazel va tajribali haydovchi',
      'Registon maydonidagi 3 ta muazzam madrasa va tungi yorug\'lik shousi',
      'Amir Temur maqbarasi (Go\'ri Amir) va Shohi Zinda koshinlar yo\'lagi',
      'Silk Road Samarkand — "Boqiy Shahar" etno-parki va mashhur Samarqand to\'y oshi'
    ],
    highlightsRu: [
      '5 дней / 4 ночи проживания в уютном 4★ историческом отеле',
      'Комфортабельный туристический автобус / Газель с кондиционером',
      'Экскурсия по 3 медресе Регистана и вечернее световое шоу',
      'Мавзолей Амира Тимура (Гур-Эмир) и ансамбль Шахи-Зинда',
      'Silk Road Samarkand — «Вечный Город» и дегустация самаркандского плова'
    ],
    highlightsEn: [
      '5 Days / 4 Nights accommodation in a cozy 4★ boutique hotel',
      'Comfortable air-conditioned tourist coach / Gazel van with expert driver',
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
    flightDurationUz: 'Sayyohlik avtobusi / Gazel: 6.5-7 soat (~130,000 - 180,000 so\'m) / Mashinada 6 soat',
    flightDurationRu: 'Автобус / Газель: 6.5-7 часов (~130,000 - 180,000 сум) / На авто 6 часов',
    flightDurationEn: 'Tourist coach / Gazel: 6.5-7 hours (~$10 - $14) / By car 6 hours',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Bahor & Kuz oylari',
    bestTimeRu: 'Весна и Осень',
    bestTimeEn: 'Spring & Autumn',
    temp: '+27°C',
    rating: 4.98,
    basePriceUSD: 110,
    descriptionUz: 'Buxoro – 2500 yillik qadimiy islom madaniyati markazi, 140 dan ortiq me\'moriy yodgorliklar maskani. Shaharning tarixiy markazi to\'liq UNESCO merosi ro\'yxatiga kiritilgan. 5 kunlik qulay avtobus safari.',
    descriptionRu: 'Бухара — древний центр исламской культуры с 2500-летней историей и более чем 140 архитектурными памятниками. 5-дневный тур на комфортном автобусе.',
    descriptionEn: 'Bukhara is a sacred oasis of Islamic culture with 2,500 years of heritage and over 140 architectural monuments. Complete 5-day tour by comfortable ground coach.',
    highlightsUz: [
      '5 kun / 4 kecha Labi Hovuz yonidagi milliy sharqona mehmonxonada tunash',
      'Qulay konditsionerli sayyohlik avtobusi va shahar bo\'ylab transport',
      'Minorai Kalon va Poi Kalon ansambli bo\'ylab eksklyuziv sayohat',
      'Buxoro amirlarining qadimiy qarorgohi – Ark qal\'asi va saroylari',
      'Sitorai Mohi Xosa – Amirning yozgi bog\'-saroyi va savdo gumbazlari'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в аутентичном восточном отеле рядом с Ляби-Хауз',
      'Комфортабельный туристический автобус с кондиционером',
      'Экскурсия по ансамблю Пои-Калян и минарету Калян',
      'Древняя резиденция бухарских эмиров — цитадель Арк',
      'Ситораи Мохи-Хоса — летний дворец эмира и торговые купола'
    ],
    highlightsEn: [
      '5 Days / 4 Nights in an authentic boutique hotel next to Lyabi-Hauz',
      'Air-conditioned tourist coach with scenic rest stops and city transfers',
      'Exclusive tour of Poi Kalyan architectural complex & Kalyan Minaret',
      'Ancient fortress residence of Bukhara Emirs — Ark Citadel',
      'Sitorai Mokhi-Khosa summer palace and historic trading domes'
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
    flightDurationUz: 'Komfort Avtobus / Mikroavtobus: 12-14 soat (~220,000 - 280,000 so\'m)',
    flightDurationRu: 'Комфортабельный Автобус / Микроавтобус: 12-14 часов (~220,000 - 280,000 сум)',
    flightDurationEn: 'Long-distance tourist coach: 12-14 hours (~$17 - $22)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Aprel - Iyun, Sentyabr - Oktyabr',
    bestTimeRu: 'Апрель - Июнь, Сентябрь - Октябрь',
    bestTimeEn: 'April - June, Sept - Oct',
    temp: '+25°C',
    rating: 4.99,
    basePriceUSD: 145,
    descriptionUz: 'Xiva – Sharq ertaklaridagi kabi saqlanib qolgan yagona qadimiy shahar-qal\'a. 2500 yillik loy devorlar ichida 50 dan ortiq tarixiy obidalar uyg\'unlashgan. Qulay konditsionerli avtobuslarda 5 kunlik ekskursiya.',
    descriptionRu: 'Хива — единственный в мире город-крепость, сохранившийся как в восточной сказке. 5-дневный автобусный тур с размещением в сердце Ичан-Калы.',
    descriptionEn: 'Khiva is an authentic fairy-tale fortress city untouched by time. 5-day tour by comfortable air-conditioned coach with accommodation inside Ichan Kala.',
    highlightsUz: [
      '5 kun / 4 kecha Ichan Qal\'aning ichidagi qadimiy uslubdagi mehmonxonada tunash',
      'Qulay konditsionerli sayyohlik avtobusi va yo\'l davomida choyxonalarda to\'xtash',
      'Kalta Minor va 57 metrli Islomxo\'ja minorasi tepasidan shahar panoramasi',
      '218 ta o\'ymakor ustunli afsonaviy Juma masjidi va Nurullaboy saroyi',
      'Xorazm milliy tansiq taomlari: Tuxumbarak va Shivit oshi degustatsiyasi'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в колоритном отеле прямо внутри крепости Ичан-Кала',
      'Комфортабельный автобус с кондиционером и остановками для отдыха',
      'Панорама города с Кальта-Минор и 57-метрового минарета Ислам-Ходжа',
      'Джума-мечеть с 218 резными деревянными колоннами и дворец Нуруллабая',
      'Дегустация знаменитых хорезмских блюд: Тухум-барак и Шивит-оши'
    ],
    highlightsEn: [
      '5 Days / 4 Nights inside the fairy-tale walled city of Ichan Kala',
      'Long-distance luxury coach travel with scenic oasis rest stops',
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
    flightDurationUz: 'Avtobus + 4x4 Cho\'l Safari: 14-15 soat (~240,000 - 320,000 so\'m)',
    flightDurationRu: 'Автобус + 4х4 Джип-сафари: 14-15 часов (~240,000 - 320,000 сум)',
    flightDurationEn: 'Coach travel + 4x4 Desert Safari: 14-15 hours (~$19 - $25)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Aprel - Iyun, Sentyabr - Oktyabr',
    bestTimeRu: 'Апрель - Июнь, Сентябрь - Октябрь',
    bestTimeEn: 'April - June, Sept - Oct',
    temp: '+28°C',
    rating: 4.98,
    basePriceUSD: 155,
    descriptionUz: 'Ellikqal\'a – qadimiy Xorazm sivilizatsiyasining 50 ta qal\'adan iborat noyob hududi. Cho\'l qo\'ynidagi tarixiy yodgorliklar, o\'tovlarda tunash va tuyada sayohat. 5 kunlik avtotur.',
    descriptionRu: 'Элликкала — уникальный регион, где располагалось 50 крепостей древнего Хорезма. Историческое наследие в сердце пустыни Кызылкум. 5-дневный тур.',
    descriptionEn: 'Ellikqala is the realm of 50 ancient fortresses of Khorezm. A breathtaking historical journey through the heart of the Kyzylkum desert. 5 Days / 4 Nights tour.',
    highlightsUz: [
      'Ayozqal\'a va Toproqqal\'a kabi qadimiy qal\'alar bo\'ylab avto-ekspeditsiya',
      'Ayozko\'l bo\'yidagi o\'tovlarda tunash va yulduzli osmon tomoshasi',
      'Cho\'l bo\'ylab tuyada sayohat va ochiq havoda barbekyu',
      'Nukus shahridagi dunyoga mashhur Savitskiy san\'at muzeyi'
    ],
    highlightsRu: [
      'Экспедиция по древним крепостям Аяз-кала и Топрак-кала на джипах',
      'Ночевка в аутентичных юртах у озера Аязколь под звездным небом',
      'Верблюжьи прогулки по пустыне и ужин у костра',
      'Всемирно известный музей искусств им. Савицкого в Нукусе'
    ],
    highlightsEn: [
      'Expedition across ancient ruins of Ayaz Kala and Toprak Kala',
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
    taglineUz: 'Amir Temur Vatani — Oqsaroy, Dorus-Saodat va Taxtaqoracha Tandiri',
    taglineRu: 'Родина Амира Тимура — Аксарай, Дорус-Саодат и Тахтакарача',
    taglineEn: 'Birthplace of Amir Timur — Ak-Saray, Dorus-Saodat & Mountain Pass',
    coverImage: '/images/landmarks/oqsaroy-shahrisabz.png',
    flightDurationUz: 'Sayyohlik Avtobusi / Gazel: 5-5.5 soat (~110,000 - 160,000 so\'m)',
    flightDurationRu: 'Автобус / Газель: 5-5.5 часов (~110,000 - 160,000 сум)',
    flightDurationEn: 'Tourist Coach / Gazel: 5-5.5 hours (~$9 - $12)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Aprel - Noyabr',
    bestTimeRu: 'Апрель - Ноябрь',
    bestTimeEn: 'April - November',
    temp: '+27°C',
    rating: 4.98,
    basePriceUSD: 90,
    descriptionUz: 'Shahrisabz – Sohibqiron Amir Temurning kindik qoni to\'kilgan tabarruk go\'shasi. Mahobatli Oqsaroy peshtoqi, Dorus-Saodat va Taxtaqoracha tog\' dovonida mashhur tandir go\'shti bilan 5 kunlik avtotur.',
    descriptionRu: 'Шахрисабз — родина великого полководца Амира Тимура. Монументальный портал дворца Аксарай, мавзолей Дорус-Саодат и знаменитый тандыр-гушт на перевале Тахтакарача. 5 дней тура на автобусе.',
    descriptionEn: 'Shahrisabz is the beloved birthplace of Amir Timur. Verdant mountain valleys, grandiose imperial palaces, and pristine Zeravshan ranges with 5-day culinary and history road tour.',
    highlightsUz: [
      '5 kun / 4 kecha Shahrisabz tog\' etaklaridagi shinam mehmonxonada tunash',
      'Qulay konditsionerli sayyohlik avtobusi va tog\' transferlari',
      'Amir Temurning ulkan Oqsaroy darvozasi peshtoqi (65m balandlik)',
      'Dorus-Saodat va Jahongir Mirzo maqbarasi hamda Ko\'k Gumbaz masjidi',
      'Taxtaqoracha tog\' dovonida mashhur milliy tandir go\'shti ziyofati'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в комфортабельном отеле у подножия гор Шахрисабза',
      'Комфортабельный автобус / Газель с опытным водителем',
      'Грандиозный портал дворца Аксарай высотой 65 метров',
      'Комплекс Дорус-Саодат, усыпальница Джахангира и мечеть Кок-Гумбаз',
      'Знаменитый кашкадарьинский тандыр-гушт на горном перевале Тахтакарача'
    ],
    highlightsEn: [
      '5 Days / 4 Nights accommodation in a scenic foothills hotel in Shahrisabz',
      'Air-conditioned coach with scenic mountain pass transit',
      'Monumental 65-meter gateway arch of Amir Timur\'s Ak-Saray Palace',
      'Dorus-Saodat memorial complex, Jahangir mausoleum & Kok-Gumbaz Mosque',
      'Scenic feast of traditional cedar-smoked tandir lamb atop Takhtakaracha pass'
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
    flightDurationUz: 'Qulay Avtobus / Gazel: 6-6.5 soat (~120,000 - 170,000 so\'m)',
    flightDurationRu: 'Автобус / Газель: 6-6.5 часов (~120,000 - 170,000 сум)',
    flightDurationEn: 'Comfortable Coach / Gazel: 6-6.5 hours (~$10 - $13)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'May - Oktyabr',
    bestTimeRu: 'Май - Октябрь',
    bestTimeEn: 'May - October',
    temp: '+25°C',
    rating: 4.97,
    basePriceUSD: 105,
    descriptionUz: 'Qashqadaryo – bepoyon yaylovlar, baland Hisor cho\'qqilari, koinot sirlarini ochuvchi baland tog\' Maydanak rasadxonasi va betakror tog\' manzaralari. 5 kunlik avtobus safari.',
    descriptionRu: 'Кашкадарья — край альпийских лугов, вершин Гиссарского хребта, обсерватории Майданак и искреннего гостеприимства. Полный автобусный тур на 5 дней.',
    descriptionEn: 'Kashkadarya features majestic Hissar peaks, world-class observatory at Mount Maydanak, alpine canyons, and authentic southern cuisine. 5 Days / 4 Nights coach tour.',
    highlightsUz: [
      '5 kun / 4 kecha Kitob tog\' oromgohi va Qarshi shahar mehmonxonasida tunash',
      'Qulay konditsionerli sayyohlik avtobusi va tog\' mikroavtobuslari',
      'Kitob Baland Tog\' Maydanak Astronomiya Rasadxonasida yulduzlarni kuzatish',
      'Dengiz sathidan 2500m balanddagi sirli Amir Temur g\'ori va Hisor qo\'riqxonasi',
      'Haqiqiy Qashqadaryo tandir go\'shti va archazor tog\' havosi'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в горном комплексе Китаба и отеле Карши',
      'Комфортабельный автобус с кондиционером и горные микроавтобусы',
      'Наблюдение за звездами в обсерватории Майданак на высоте 2750м',
      'Таинственная пещера Амира Тимура и Гиссарский заповедник',
      'Настоящий кашкадарьинский тандыр-кабоб с ароматом хвои'
    ],
    highlightsEn: [
      '5 Days / 4 Nights in Kitob alpine resort and Karshi hotels',
      'Air-conditioned coach and high-altitude mountain vans',
      'Galaxy and deep-space stargazing at Mount Maydanak Observatory (2,750m)',
      'Mysterious Cave of Amir Timur at 2,500m elevation and Hissar Nature Reserve',
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
    flightDurationUz: 'Komfort Avtobus / Sprinter: 9-10 soat (~180,000 - 240,000 so\'m)',
    flightDurationRu: 'Автобус / Спринтер: 9-10 часов (~180,000 - 240,000 сум)',
    flightDurationEn: 'Long-distance Coach / Sprinter: 9-10 hours (~$14 - $19)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Aprel - Iyun, Sentyabr - Noyabr',
    bestTimeRu: 'Апрель - Июнь, Сентябрь - Ноябрь',
    bestTimeEn: 'April - June, Sept - Nov',
    temp: '+29°C',
    rating: 4.98,
    basePriceUSD: 130,
    descriptionUz: 'Surxondaryo – O\'zbekistonning eng janubiy va eng qadimiy vohasi. Boysun tog\'lari, qoyadan otiluvchi Sangardak sharsharasi, qadimgi Budda ibodatxonalari va Hakim at-Termiziy ziyoratgohi bilan 5 kunlik avtotur.',
    descriptionRu: 'Сурхандарья — самый южный и древний оазис Узбекистана. Самобытный фольклор Байсуна, водопад Сангардак, древние монастыри и святыни Термеза. 5 дней тура.',
    descriptionEn: 'Surkhandarya is Uzbekistan\'s southern paradise with ancient Buddhist stupas, towering Sangardak waterfalls, and UNESCO-recognized Boysun culture. Complete 5 Days / 4 Nights road journey.',
    highlightsUz: [
      '5 kun / 4 kecha Termiz mehmonxonasi va Boysun tog\' kottejlarida tunash',
      'Konditsionerli qulay sayyohlik avtobusi va Sangardak tog\' transferi',
      'UNESCO merosi Boysun tog\' kanyonlari va shifobaxsh Omonxona bulog\'i',
      'Qoyalardan otilib chiquvchi mashhur moviy Sangardak sharsharasi',
      'Fayoztepa qadimiy Budda ibodatxonasi va Al-Hakim at-Termiziy majmuasi'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в отелях Термеза и коттеджах в горах Байсуна',
      'Комфортабельный автобус и трансфер к водопаду Сангардак',
      'Каньоны Байсуна (наследие ЮНЕСКО) и целебный источник Омонхона',
      'Знаменитый водопад Сангардак, бьющий прямо из изумрудных скал',
      'Буддийский монастырь Фаязтепа I-III вв. и мавзолей Аль-Хаким ат-Термези'
    ],
    highlightsEn: [
      '5 Days / 4 Nights in Termez hotels and alpine lodges in Boysun',
      'Air-conditioned long-distance coach with mountain transfers',
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
    flightDurationUz: 'Komfort Mikroavtobus / Gazel: 2.5-3 soat (~70,000 - 110,000 so\'m)',
    flightDurationRu: 'Микроавтобус / Газель: 2.5-3 часа (~70,000 - 110,000 сум)',
    flightDurationEn: 'Minibus / Gazel: 2.5-3 hours (~$6 - $9)',
    visaUz: '5 kun / 4 kecha to\'liq VIP sayohat',
    visaRu: '5 дней / 4 ночи полный VIP тур',
    visaEn: '5 Days / 4 Nights Full VIP Tour',
    bestTimeUz: 'Yil bo\'yi (Qishda chang\'i, yozda salqin archazor)',
    bestTimeRu: 'Круглый год (Лыжи зимой, прохлада летом)',
    bestTimeEn: 'Year-round (Skiing in winter, alpine breeze in summer)',
    temp: '+22°C',
    rating: 4.99,
    basePriceUSD: 75,
    descriptionUz: 'Zomin – O\'zbekistonning eng toza va go\'zal baland tog\' maskani. Shifobaxsh qarag\'ayzorlar, ulkan osma shisha ko\'prik, dor yo\'li (kanat) va tog\' shinam kottejlari bilan 5 kunlik unutilmas ekotur.',
    descriptionRu: 'Заамин — самый экологически чистый высокогорный курорт Узбекистана. Целебные хвойные леса, подвесной стеклянный мост, канатная дорога и уютные альпийские шале. 5 дней отдыха на автобусе.',
    descriptionEn: 'Zaamin is Uzbekistan\'s pristine alpine paradise, renowned for therapeutic pine forests, high-altitude glass suspension bridge, cable cars, and alpine chalets. 5 Days / 4 Nights tour.',
    highlightsUz: [
      '5 kun / 4 kecha Zomin tog\' shinam kottejlari va eko-mehmonxonada tunash',
      'Qulay Gazel / Mikroavtobus transferi va Zomin milliy bog\'i bo\'ylab sayohat',
      'Zomin Milliy Bog\'idagi ulkan Osma Shisha Ko\'prik (Glass Bridge) sayri',
      '2000 metr balandlikdagi dor yo\'li (kanat) va toza archazor tog\' havosi',
      'Suffa platosi radioastronomiya rasadxonasi va Sherbuloq shifobaxsh suvi'
    ],
    highlightsRu: [
      '5 дней / 4 ночи в уютных альпийских коттеджах и эко-отелях Заамина',
      'Комфортабельный микроавтобус / Газель с кондиционером',
      'Подвесной стеклянный мост (Glass Bridge) в Зааминском национальном парке',
      'Канатная дорога на высоте 2000 метров и чистейший сосновый воздух',
      'Плато Суффа, радиоастрономическая обсерватория и целебный источник Шербулок'
    ],
    highlightsEn: [
      '5 Days / 4 Nights in cozy Zaamin alpine chalets and mountain eco-lodges',
      'Air-conditioned minibus transit and scenic Zaamin National Park tours',
      'Thrilling suspension Glass Bridge walk in Zaamin National Park',
      'Panoramic cable car ride at 2,000m altitude through pristine pine forests',
      'Suffa Plateau radio astronomy observatory & healing Sherbuloq spring'
    ],
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
    titleUz: 'Samarqand & Buxoro 5 Kunlik Qulay Avtobus Turi',
    titleRu: '5-Дневный Автобусный Тур: Самарканд и Бухара',
    titleEn: 'Samarkand & Bukhara 5-Day Comfortable Coach Tour',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'ENG KO\'P TANLANGAN -25%',
    badgeRu: 'ХИТ ПРОДАЖ -25%',
    badgeEn: 'MOST POPULAR -25%',
    oldPriceUSD: 140,
    newPriceUSD: 105,
    image: '/images/landmarks/samarkand-registan.png',
    includesUz: ['Konditsionerli Sayyohlik Avtobusi / Gazel', '4★ Tarixiy Mehmonxonalar (4 kecha)', 'Shaxsiy gid & barcha muzey chiptalari', 'Milliy to\'y oshi va kechki dasturlar'],
    includesRu: ['Комфортабельный автобус / Газель с кондиционером', '4★ Исторические отели (4 ночи)', 'Персональный гид и билеты во все музеи', 'Национальный праздничный плов и ужины'],
    includesEn: ['Air-conditioned tourist coach / Gazel van', '4★ Historic boutique hotels (4 nights)', 'Private tour guide & museum access', 'Festive traditional dinners included']
  },
  {
    id: 'deal-2',
    countryId: 'khorezm',
    titleUz: 'Xiva Ichan Qal\'a & Ellikqal\'a Avtotur Ekspeditsiyasi',
    titleRu: 'Автотур: Хива Ичан-Кала и Древние Крепости Элликкалы',
    titleEn: 'Khiva Ichan Kala & Ellikqala Ancient Fortresses Bus Tour',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'EKSKLYUZIV -30%',
    badgeRu: 'ЭКСКЛЮЗИВ -30%',
    badgeEn: 'EXCLUSIVE -30%',
    oldPriceUSD: 210,
    newPriceUSD: 145,
    image: '/images/landmarks/khiva-ichan-kala.png',
    includesUz: ['Konditsionerli Komfort Avtobus / Gazel', 'Ichan Qal\'a ichidagi sharqona mehmonxona (4 kecha)', 'Ayozqal\'a & Toproqqal\'a jip safari', 'Xorazm milliy tansiq taomlari'],
    includesRu: ['Комфортабельный автобус / Газель с кондиционером', 'Восточный отель внутри Ичан-Калы (4 ночи)', 'Джип-сафари в Аяз-кала и Топрак-кала', 'Хорезмские национальные блюда'],
    includesEn: ['Air-conditioned long-distance coach / Gazel', 'Boutique hotel inside Ichan Kala (4 nights)', '4x4 Jeep safari to Ayaz Kala & Toprak Kala', 'Gourmet regional culinary banquets']
  },
  {
    id: 'deal-3',
    countryId: 'surkhandarya',
    titleUz: 'Surxondaryo Boysun, Omonxona & Sangardak Sharsharasi Avtoturi',
    titleRu: 'Сурхандарья: Байсун, Омонхона и Водопад Сангардак (Автотур)',
    titleEn: 'Surkhandarya: Boysun, Omonkhona & Sangardak Waterfall Bus Tour',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'TABIAT VA SIHAT -20%',
    badgeRu: 'ПРИРОДА И ЗДОРОВЬЕ -20%',
    badgeEn: 'NATURE & HEALTH -20%',
    oldPriceUSD: 165,
    newPriceUSD: 130,
    image: '/images/landmarks/termiz-historic.png',
    includesUz: ['Komfort Sayyohlik Sprinter / Avtobus', 'Termiz va Boysun tog\' kottejlari (4 kecha)', 'Sangardak sharsharasiga tog\' transferi', 'Omonxona shifobaxsh suvi va tog\' nonushtasi'],
    includesRu: ['Комфортный автобус / Sprinter с кондиционером', 'Отели Термеза и коттеджи в горах Байсуна (4 ночи)', 'Трансфер к водопаду Сангардак', 'Целебная вода Омонхоны и горные завтраки'],
    includesEn: ['Air-conditioned tourist Sprinter / Coach', 'Termez hotels and Boysun mountain eco-lodges (4 nights)', 'Mountain transit to Sangardak Waterfall', 'Omonkhona healing waters & breakfasts']
  },
  {
    id: 'deal-4',
    countryId: 'qashqadaryo',
    titleUz: 'Qashqadaryo Kitob Rasadxonasi & Shahrisabz Oqsaroy Avtoturi',
    titleRu: 'Кашкадарья: Обсерватория в Китабе и Аксарай в Шахрисабзе (Автотур)',
    titleEn: 'Kashkadarya: Kitob Observatory & Shahrisabz Ak-Saray Bus Tour',
    daysUz: '4 kecha / 5 kun',
    daysRu: '4 ночи / 5 дней',
    daysEn: '4 nights / 5 days',
    badgeUz: 'KOINOT SIRLARI -25%',
    badgeRu: 'ТАЙНЫ ВСЕЛЕННОЙ -25%',
    badgeEn: 'STARGAZING & HISTORY -25%',
    oldPriceUSD: 135,
    newPriceUSD: 100,
    image: '/images/landmarks/oqsaroy-shahrisabz.png',
    includesUz: ['Komfort Avtobus / Gazel transferi', 'Maydanak observatoriyasida yulduzlarni kuzatish (4 kecha)', 'Oqsaroy va Dorus-Saodat ekskursiyasi', 'Taxtaqoracha tandir go\'shti ziyofati'],
    includesRu: ['Комфортабельный автобус / Газель', 'Наблюдение за звездами в обсерватории Майданак (4 ночи)', 'Экскурсия в Аксарай и Дорус-Саодат', 'Ужин с кашкадарьинским тандыр-кабобом'],
    includesEn: ['Air-conditioned coach / Gazel van', 'Stargazing at Mount Maydanak Observatory (4 nights)', 'Guided tour of Ak-Saray & Dorus-Saodat', 'Traditional mountain feast on pass']
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
    countryUz: 'Samarqand & Buxoro avtoturi',
    countryRu: 'Автобусный тур по Самарканду и Бухаре',
    countryEn: 'Samarkand & Bukhara Coach Tour',
    textUz: 'Oilamiz bilan qulay konditsionerli sayyohlik avtobusida Samarqand va Buxoroga 5 kunlik sayohatga bordik. Avtobus juda yumshoq va toza, haydovchi o\'ta ehtiyotkor, mehmonxonalar ajoyib!',
    textRu: 'Мы поехали семьей на комфортабельном автобусе с кондиционером в Самарканд и Бухару на 5 дней. Автобус очень мягкий и чистый, водитель аккуратный, отели отличные!',
    textEn: 'Our family took the air-conditioned tourist coach for a 5-day journey to Samarkand and Bukhara. The bus was exceptionally comfortable, the driver very professional, and hotels top quality!',
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
    countryUz: 'Xiva & Ellikqal\'a avto-ekspeditsiyasi',
    countryRu: 'Авто-экспедиция Хива & Элликкала',
    countryEn: 'Khiva & Ellikqala Road Expedition',
    textUz: 'Ichan Qal\'aning kechki chiroqlari va Ellikqal\'adagi Ayozqal\'a qadimiy manzaralari butun umrga yodda qoladigan bo\'ldi. Yo\'lda qulay mikroavtobusda maroqli bordik, hamma narsa vaqtida tashkil qilindi.',
    textRu: 'Ночные огни Ичан-Калы и древние виды Аяз-калы в Элликкале запомнятся на всю жизнь. Поездка на микроавтобусе была очень комфортной, все четко организовано.',
    textEn: 'The night lights of Ichan Kala and the ancient fortresses of Ayaz Kala were breathtaking. The minibus trip was comfortable and perfectly timed.',
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
    textUz: 'Sangardak sharsharasi va Boysun tog\'laridagi toza havo, Omonxona bulog\'i haqiqiy tabiat mo\'jizasi! Sprinter mikroavtobusi, tog\' yo\'llarida xavfsiz haydash va mehmonxona a\'lo darajada!',
    textRu: 'Водопад Сангардак и чистейший горный воздух Байсуна — настоящее чудо! Микроавтобус Sprinter, безопасное вождение по горным дорогам и отель на высшем уровне.',
    textEn: 'Sangardak waterfall and the fresh mountain air of Boysun were wonderful! The Sprinter van was very smooth and mountain driving perfectly safe.',
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
