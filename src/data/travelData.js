// ==========================================
// LOTOS FIELD - O'ZBEKISTON ICHKI TURIZMI & VILOYATLAR
// ==========================================

export const EXCHANGE_RATE = 12850; // 1 USD = 12,850 UZS

export const AIRPLANES_FLEET = [
  {
    id: 'boeing-787',
    name: 'Boeing 787-8 Dreamliner',
    title: 'Zamonaviy Orzu Layneri',
    routes: 'Toshkent ➔ Urganch / Nukus / Termiz',
    speed: '913 km/soat',
    range: '14,140 km',
    capacity: '246 o\'rin',
    altitude: '13,100 metr',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    description: 'Katta oynalar, toza havo filtrlari va shovqinsiz dvigatellar bilan jihozlangan eng zamonaviy keng fuzelyajli layner.',
    gallery: [
      { title: 'Tashqi ko\'rinish', url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80' },
      { title: 'VIP Biznes Salon', url: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=80' },
      { title: 'Keng va qulay salon', url: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['180° yotadigan VIP o\'rindiqlar', 'Wi-Fi va multimedia ekrani', 'O\'zbek milliy tansiq taomlari', 'Keng bagaj joyi']
  },
  {
    id: 'airbus-a321neo',
    name: 'Airbus A321neo',
    title: 'Tezkor va Tejamkor Ekologik Layner',
    routes: 'Toshkent ➔ Samarqand / Buxoro / Qarshi',
    speed: '876 km/soat',
    range: '7,400 km',
    capacity: '188 o\'rin',
    altitude: '12,000 metr',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    description: 'Yangi avlod tejamkor dvigatellari va kengaytirilgan qulay saloniga ega tezyurar samolyot.',
    gallery: [
      { title: 'Aeroport perronida', url: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80' },
      { title: 'Yorug\' va zamonaviy interyer', url: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Ultra zamonaviy LED chiroqlar', 'USB zaryadlash portlari', 'Shovqinsiz kabina', 'Maxsus ichimliklar servisi']
  },
  {
    id: 'airbus-a320',
    name: 'Airbus A320-200',
    title: 'Viloyatlararo Asosiy Qatnov Layneri',
    routes: 'Barcha O\'zbekiston aeroportlari bo\'ylab',
    speed: '840 km/soat',
    range: '6,100 km',
    capacity: '150 o\'rin',
    altitude: '11,900 metr',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    description: 'O\'zbekiston viloyatlari o\'rtasidagi eng ommabop, ishonchli va xavfsiz layner.',
    gallery: [
      { title: 'Bulutlar uzra parvoz', url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80' },
      { title: 'Qulay o\'rindiqlar', url: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Har kuni qatnovlar', 'Tezkor ro\'yxatdan o\'tish', 'Katta yotoqli biznes klass', 'Professional bort kuzatuvchilari']
  },
  {
    id: 'afrosiyob-express',
    name: 'Afrosiyob Tezyurar Poyezdi',
    title: 'Ispaniyaning Talgo 250 Tezyurar Ekspressi',
    routes: 'Toshkent ➔ Samarqand ➔ Buxoro ➔ Qarshi',
    speed: '250 km/soat',
    range: '900 km',
    capacity: '287 o\'rin',
    altitude: 'Yer usti magistrali',
    image: 'https://images.unsplash.com/photo-1532103054090-a0840b28e579?auto=format&fit=crop&w=1200&q=80',
    description: 'Toshkentdan Samarqandga bor-yo\'g\'i 2 soat 10 daqiqada eltuvchi hashamatli tezyurar poyezd.',
    gallery: [
      { title: 'Tezyurar poyezd yo\'lda', url: 'https://images.unsplash.com/photo-1532103054090-a0840b28e579?auto=format&fit=crop&w=1200&q=80' },
      { title: 'VIP Vagon saloni', url: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['VIP, Biznes va Ekonom klasslar', 'Issiq choy, qahva va shirinliklar', 'Klimat-kontrol tizimi', 'Panoramali derazalar']
  }
];

export const LIVE_FLIGHTS = [
  { flightNo: 'HY-011', from: 'Toshkent (TAS)', to: 'Samarqand (SKD)', plane: 'Airbus A320', time: '07:30', status: 'Bortga Chiqish', gate: 'D-01' },
  { flightNo: 'HY-023', from: 'Toshkent (TAS)', to: 'Buxoro (BHK)', plane: 'Airbus A320', time: '08:45', status: 'Registratsiya', gate: 'D-03' },
  { flightNo: 'HY-051', from: 'Toshkent (TAS)', to: 'Urganch / Xiva (UGC)', plane: 'Boeing 787', time: '09:20', status: 'Rejada', gate: 'A-02' },
  { flightNo: 'HY-065', from: 'Toshkent (TAS)', to: 'Termiz (TMJ)', plane: 'Airbus A320', time: '11:10', status: 'Rejada', gate: 'D-02' },
  { flightNo: 'HY-071', from: 'Toshkent (TAS)', to: 'Qarshi (KSQ)', plane: 'Airbus A320', time: '14:30', status: 'Rejada', gate: 'D-04' },
  { flightNo: 'HY-085', from: 'Toshkent (TAS)', to: 'Nukus (NCU)', plane: 'Boeing 787', time: '17:00', status: 'Rejada', gate: 'A-01' }
];

export const CATEGORIES = [
  { id: 'all', name: 'Barcha Viloyat va Shaharlar' },
  { id: 'history', name: '🕌 Qadimiy & Tarixiy Shaharlar' },
  { id: 'nature', name: '🏔️ Tog\' & Tabiat Qo\'riqxonalari' },
  { id: 'ancient', name: '🏰 Qadimiy Qal\'alar & Arxeologiya' }
];

// O'ZBEKISTON VILOYATLARI VA SAYOHAT MARKAZLARI
export const COUNTRIES = [
  {
    id: 'samarkand',
    name: 'Samarqand Viloyati',
    nameEn: 'Samarkand',
    flag: '🏛️',
    capital: 'Samarqand shahri',
    category: 'history',
    tagline: 'Sayqali Ro\'yi Zamin — Registon maydoni, Go\'ri Amir va Boqiy Shahar',
    coverImage: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '50 daqiqa (Samolyot) / 2 soat (Afrosiyob)',
    visa: 'O\'zbekiston fuqarolari uchun to\'liq erkin',
    bestTime: 'Mart - Iyun, Sentyabr - Noyabr',
    currency: 'UZS (So\'m) / USD',
    language: 'O\'zbekcha / Ruscha / Inglizcha',
    temp: '+26°C',
    weatherDesc: 'Musaffo quyoshli osmon va mayin shabada',
    rating: 4.99,
    reviewsCount: 5420,
    basePriceUSD: 85,
    highlights: [
      'Registon maydonidagi 3 ta muazzam madrasa bo\'ylab ekskursiya',
      'Amir Temur va Temuriylar maqbarasi (Go\'ri Amir)',
      'Afsonaviy Shohi Zinda moviy koshinlar majmuasi',
      'Silk Road Samarkand — "Boqiy Shahar" etno-parki va yaxtalar kanali',
      'Mashhur Samarqand noni va to\'y palovi degustatsiyasi'
    ],
    description: 'Samarqand – 2750 yildan ortiq boy tarixga ega Sharq gavhari. Buyuk Ipak Yo\'lining yuragi, Temuriylar saltanati poytaxti va dunyo sivilizatsiyasining buyuk me\'moriy durdonasi.',
    images: [
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626293952701-d7faef141154?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Registon Maydoni', desc: 'Tillakori, Ulug\'bek va Sherdor madrasalarining tillarang jilosi', img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80' },
      { name: 'Go\'ri Amir Maqbarasi', desc: 'Sohibqiron Amir Temur va ulug\' allomalarning mangu maskani', img: 'https://images.unsplash.com/photo-1626293952701-d7faef141154?auto=format&fit=crop&w=800&q=80' },
      { name: 'Shohi Zinda Majmuasi', desc: 'Sharq miniatyurasining eng go\'zal moviy koshinlar xazinasi', img: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=800&q=80' },
      { name: 'Boqiy Shahar (Silk Road)', desc: 'Zamonaviy xalqaro turizm markazi va hunarmandlar rastalari', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'bukhara',
    name: 'Buxoro Viloyati',
    nameEn: 'Bukhara',
    flag: '🕌',
    capital: 'Buxoro shahri',
    category: 'history',
    tagline: 'Buxoroyi Sharif — Minorai Kalon, Ark Qal\'asi va Labi Hovuz',
    coverImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '1 soat (Samolyot) / 3.5 soat (Afrosiyob)',
    visa: 'Erkin kirish',
    bestTime: 'Bahor & Kuz oylari',
    currency: 'UZS (So\'m) / USD',
    language: 'O\'zbekcha / Tojikcha / Ruscha',
    temp: '+27°C',
    weatherDesc: 'Quyoshli va musaffo sharqona iqlim',
    rating: 4.98,
    reviewsCount: 4890,
    basePriceUSD: 80,
    highlights: [
      'Minorai Kalon va Poi Kalon masjid-madrasasi sirlari',
      'Buxoro amirlarining qadimiy qarorgohi — Ark Qal\'asi',
      'Asriy chinorlar soyasidagi mashhur Labi Hovuz ansambli',
      'Sitorai Mohi Xosa — Amirning naqshinkor yozgi saroyi',
      'Buxoro zardo\'zlik va pichoqchilik san\'ati mahorat darslari'
    ],
    description: 'Buxoro – islom olamining muqaddas madaniyat poytaxti. Yuzlab qadimiy gumbazlar, karvonsaroylar, zardo\'zlik ustalari va sharqona ertak muhiti.',
    images: [
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Poi Kalon & Minorai Kalon', desc: '48 metrli afsonaviy minora va ulug\'vor masjid', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Buxoro Ark Qal\'asi', desc: 'Buxoro hukmdorlarining ulkan g\'ishtin qal\'asi', img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80' },
      { name: 'Labi Hovuz & Nodir Devonbegi', desc: 'Markaziy hovuz bo\'yidagi choyxona va jonli musiqalar', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80' },
      { name: 'Sitorai Mohi Xosa Saroyi', desc: 'Oyna va naqshlar bilan bezatilgan shohona saroy', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'khorezm',
    name: 'Xorazm (Xiva Ichan Qal\'a)',
    nameEn: 'Khorezm & Khiva',
    flag: '🏰',
    capital: 'Urganch / Xiva shahri',
    category: 'history',
    tagline: 'Ochiq Osmon Ostidagi Tirik Muzey — Ichan Qal\'a va Kalta Minor',
    coverImage: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '1.5 soat (Toshkent ➔ Urganch reysi)',
    visa: 'Erkin kirish',
    bestTime: 'Aprel - Iyun, Sentyabr - Oktyabr',
    currency: 'UZS (So\'m) / USD',
    language: 'Xorazm shevasi / O\'zbekcha / Ruscha',
    temp: '+25°C',
    weatherDesc: 'Quruq va toza cho\'l-voha havosi',
    rating: 4.99,
    reviewsCount: 3950,
    basePriceUSD: 95,
    highlights: [
      'UNESCO merosi Ichan Qal\'a ichida kechki chiroqlar sayri',
      'Mashhur Kalta Minor va Islomxo\'ja minorasiga chiqish',
      '218 ta betakror yog\'och o\'ymakor ustunli Juma Masjidi',
      'Tosh Hovli va Nurullaboy shoh saroylari zallari',
      'Xorazmcha tuxumbarak, shivit oshi va daryo balig\'i'
    ],
    description: 'Xiva – qadimgi Xorazm sivilizatsiyasining saqlanib qolgan yagona tirik qal\'a-shahri. Gilamlar, doiralar sadolari va ming yillik loy devorlar.',
    images: [
      'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Ichan Qal\'a Majmuasi', desc: 'To\'liq saqlangan afsonaviy o\'rta asrlar qal\'asi', img: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=800&q=80' },
      { name: 'Kalta Minor & Islomxo\'ja', desc: 'Moviy feruza koshinli ulkan minora', img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80' },
      { name: 'Juma Masjidi', desc: 'Har biri alohida naqsh bilan o\'yilgan 218 ta ustun', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Nurullaboy Saroyi', desc: 'Yevropa va Sharq uslubi uyg\'unlashgan xon saroyi', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'ellikqala',
    name: 'Ellikqal\'a (Qoraqalpog\'iston)',
    nameEn: 'Ellikqala & Ancient Fortresses',
    flag: '🏜️',
    capital: 'Bo\'ston / Nukus',
    category: 'ancient',
    tagline: '50 Qal\'a Saltanati — Ayozqal\'a, Toproqqal\'a va Qizilqum Mo\'jizalari',
    coverImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '1.5 soat (Nukus yoki Urganch orqali)',
    visa: 'Erkin kirish',
    bestTime: 'Aprel - May, Sentyabr - Oktyabr',
    currency: 'UZS (So\'m)',
    language: 'Qoraqalpoqcha / O\'zbekcha / Ruscha',
    temp: '+28°C',
    weatherDesc: 'Qizilqum oftobli va tiniq havosi',
    rating: 4.96,
    reviewsCount: 2120,
    basePriceUSD: 110,
    highlights: [
      'Ayozqal\'a (mil.avv. IV asr) tepaligidan Qizilqum cho\'li panoramasi',
      'Qadimgi Xorazmshohlar bosh qarorgohi — Toproqqal\'a saroyi',
      'Ayozko\'l bo\'yida qoraqalpoq o\'tovlarida (yurtlarda) tunash',
      'Tuyalarda cho\'l safari va ochiq osmon ostida yulduzlarni kuzatish',
      'Savitskiy nomidagi jahonga mashhur Nukus tasviriy san\'at muzeyi'
    ],
    description: 'Ellikqal\'a – qadimgi Xorazmning 50 dan ortiq qudratli qal\'alar tizimi joylashgan sirli maskan. Bu yerda siz o\'zingizni 2000 yil avvalgi dunyoda his qilasiz.',
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Ayozqal\'a Qadimiy Qal\'asi', desc: 'Baland qumtosh tepalik uzra qad ko\'targan ulkan qasr', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80' },
      { name: 'Toproqqal\'a Shoh Saroyi', desc: 'Qadimgi freskalar va arxeologik topilmalar beshigi', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80' },
      { name: 'Ayozko\'l O\'tovlar Lageri', desc: 'Milliy o\'tovlarda dam olish va cho\'l barbekyusi', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Savitskiy San\'at Muzeyi', desc: 'Dunyoga mashhur rus avangard san\'ati to\'plami', img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'shahrisabz',
    name: 'Shahrisabz (Kesh)',
    nameEn: 'Shahrisabz',
    flag: '👑',
    capital: 'Shahrisabz shahri',
    category: 'history',
    tagline: 'Sohibqiron Vatani — Oqsaroy, Dorus-Saodat va Taxtaqoracha Dovoni',
    coverImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    flightDuration: 'Samarqanddan mashinada 1.5 soat / Qarshi orqali',
    visa: 'Erkin kirish',
    bestTime: 'Aprel - Noyabr',
    currency: 'UZS (So\'m)',
    language: 'O\'zbekcha / Tojikcha',
    temp: '+26°C',
    weatherDesc: 'Tog\' etagi toza va salqin havosi',
    rating: 4.95,
    reviewsCount: 3100,
    basePriceUSD: 70,
    highlights: [
      'Amir Temurning ulkan Oqsaroy darvozasi peshtoqi (65m balandlik)',
      'Dorus-Saodat va Jahongir Mirzo maqbarasi',
      'Dorut-Tilovat majmuasi va Ko\'k Gumbaz masjidi',
      'Taxtaqoracha tog\' dovonida tandir go\'shti tanovul qilish',
      'Muzdek tog\' buloqlari va qadimiy chinorlar sayri'
    ],
    description: 'Shahrisabz – Amir Temur tavallud topgan muqaddas vatan. Yashil bog\'lar, Temuriylar arxitekturasi va Zarafshon tog\' tizmasining purviqor manzaralari.',
    images: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Oqsaroy Majmuasi', desc: '"Qudratimizga shubha qilsang, biz qurgan imoratlarga boq"', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80' },
      { name: 'Dorus-Saodat Majmuasi', desc: 'Temuriylar sulolaviy xilxonasi va maqbaralari', img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80' },
      { name: 'Ko\'k Gumbaz Masjidi', desc: 'Ulug\'bek tomonidan qurdirilgan muhtasham moviy masjid', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Taxtaqoracha Tog\' Dovoni', desc: 'Tog\' cho\'qqisidagi mashhur tandir go\'shti va manzaralar', img: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'qashqadaryo',
    name: 'Qashqadaryo (Kitob & Hisor)',
    nameEn: 'Kashkadarya & Kitob',
    flag: '🔭',
    capital: 'Qarshi shahri',
    category: 'nature',
    tagline: 'Koinot Rasadxonasi, Amir Temur G\'ori va Hisor Tog\'lari',
    coverImage: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '1 soat (Toshkent ➔ Qarshi reysi)',
    visa: 'Erkin kirish',
    bestTime: 'May - Oktyabr',
    currency: 'UZS (So\'m)',
    language: 'O\'zbekcha / Tojikcha',
    temp: '+25°C',
    weatherDesc: 'Toza musaffo tog\' havosi',
    rating: 4.97,
    reviewsCount: 2750,
    basePriceUSD: 85,
    highlights: [
      'Kitob Baland Tog\' Maydanak Astronomiya Rasadxonasi (Yulduzlar olami)',
      'Dengiz sathidan 2500m balanddagi sirli Amir Temur g\'ori',
      'Hisor Davlat Qo\'riqxonasi va Qizilsuv kanyonlari',
      'Qarshi daryosi ustidagi tarixiy Amir Temur ko\'prigi va Odina masjidi',
      'Haqiqiy Qashqadaryo tandir go\'shti va archa xushbo\'y havosi'
    ],
    description: 'Qashqadaryo – bepoyon yaylovlar, baland Hisor cho\'qqilari, koinot sirlarini ochuvchi yirik observatoriyalar va betakror mehmondo\'stlik maskani.',
    images: [
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Maydanak & Kitob Rasadxonasi', desc: 'Dunyoning eng tiniq osmonli baland tog\' teleskoplari', img: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Hisor Tog\' Qo\'riqxonasi', desc: 'Baland sharsharalar, archazorlar va yovvoyi tabiat', img: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Amir Temur Qadimiy Ko\'prigi', desc: 'Qarshi daryosi uzra qurilgan XVI asr me\'moriy obidasi', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80' },
      { name: 'Miraki Oromgohi', desc: 'Qashqadaryo tog\' etaklaridagi go\'zal dam olish maskani', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'surkhandarya',
    name: 'Surxondaryo (Boysun & Termiz)',
    nameEn: 'Surkhandarya & Boysun',
    flag: '⛰️',
    capital: 'Termiz shahri',
    category: 'nature',
    tagline: 'UNESCO Boysun Madaniyati, Sangardak Sharsharasi va Hakim at-Termiziy',
    coverImage: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '1 soat (Toshkent ➔ Termiz reysi)',
    visa: 'Erkin kirish',
    bestTime: 'Aprel - Iyun, Sentyabr - Noyabr',
    currency: 'UZS (So\'m)',
    language: 'O\'zbekcha / Tojikcha',
    temp: '+29°C',
    weatherDesc: 'Iliq subtropik sharqiy iqlim',
    rating: 4.98,
    reviewsCount: 2900,
    basePriceUSD: 90,
    highlights: [
      'UNESCO nomoddiy madaniy merosi ro\'yxatidagi afsonaviy Boysun tog\'lari',
      'Qoyalardan otilib chiquvchi mashhur Sangardak sharsharasi',
      'Qadimiy Baqtriya va Fayoztepa budda ibodatxonalari',
      'Al-Hakim at-Termiziy va Sulton Saodat muqaddas ziyoratgohlari',
      'Omonxona shifobaxsh ma\'danli suvlari va Qirqqiz qal\'asi'
    ],
    description: 'Surxondaryo – O\'zbekistonning eng janubiy va eng qadimiy vohasi. Boysun folklori, Baqtriya madaniyati, sharsharalar va muqaddas ziyoratgohlar yurti.',
    images: [
      'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Boysun Qishloqlari & Omonxona', desc: 'Baland qoyalar bag\'ridagi shifobaxsh ma\'danli suv bulog\'i', img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80' },
      { name: 'Sangardak Sharsharasi', desc: 'Yashil moxli qoyatoshlardan tushuvchi ajoyib sharshara', img: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Fayoztepa & Qoratepa', desc: 'Milodiy I-III asrlarga oid qadimgi Budda stupalari', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Hakim at-Termiziy Majmuasi', desc: 'Amudaryo sohilidagi ulug\' alloma ziyoratgohi', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'tashkent-zomin',
    name: 'Toshkent & Zomin Tog\'lari',
    nameEn: 'Tashkent & Zaamin Mountains',
    flag: '🌲',
    capital: 'Toshkent shahri / Jizzax',
    category: 'nature',
    tagline: 'O\'zbekiston Shveytsariyasi — Zomin Qarag\'ayzori va Zamonaviy Poytaxt',
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    flightDuration: 'Poytaxt markazi / Mashinada 2.5 soat (Zomin)',
    visa: 'Erkin kirish',
    bestTime: 'Yil bo\'yi (Qishda chang\'i, yozda salqin)',
    currency: 'UZS (So\'m)',
    language: 'O\'zbekcha / Ruscha / Inglizcha',
    temp: '+24°C',
    weatherDesc: 'Salqin tog\' archazori va poytaxt nurlari',
    rating: 4.99,
    reviewsCount: 6100,
    basePriceUSD: 60,
    highlights: [
      'Zomin Milliy Bog\'idagi ulkan Osma Shisha Ko\'prik (Glass Bridge)',
      '2000 metr balandlikdagi dor yo\'li (kanat) va archazorlar',
      'Hazrati Imom (Hastimom) majmuasidagi VII asr Usmon Qur\'oni',
      'Amirsoy & Chimyon tog\' kurortlarida lyuks dam olish',
      'Chorsu bozori va Toshkent metropolitenining naqshinkor bekatlari'
    ],
    description: 'Toshkent va Zomin – zamonaviy megapolis qulayliklari hamda toza tog\' archazorlarining ajoyib uyg\'unligi. Shisha ko\'priklar, kurortlar va boy madaniyat.',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Zomin Osma Shisha Ko\'prigi', desc: 'Tog\' darasi uzra qurilgan hayajonli panoramali shisha ko\'prik', img: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Hazrati Imom (Hastimom)', desc: 'Poytaxtning bosh islomiy obidasi va nodir qo\'lyozmalar', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80' },
      { name: 'Amirsoy Mountain Resort', desc: 'Xalqaro toifadagi qishki va yozgi tog\' kurorti', img: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Chorsu Bozor & Toshkent Teleminorasi', desc: 'Sharqona bozor muhiti va 375 metrli teleminora', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];

// O'ZBEKISTON ICHKI TURIZMI UCHUN QAYNOQ TUR PAKETLARI
export const HOT_DEALS = [
  {
    id: 'deal-1',
    countryId: 'samarkand',
    title: 'Samarqand & Buxoro VIP Afrosiyob Ekspress Turi',
    country: 'Samarqand & Buxoro',
    days: '3 kecha / 4 kun',
    badge: 'ENG KO\'P TANLANGAN -25%',
    oldPriceUSD: 240,
    newPriceUSD: 180,
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80',
    planeImage: 'https://images.unsplash.com/photo-1532103054090-a0840b28e579?auto=format&fit=crop&w=800&q=80',
    includes: ['Afrosiyob VIP poyezd chiptalari', '4-5★ Tarixiy Mehmonxonalar', 'Shaxsiy gid & barcha muzey chiptalari', 'Milliy to\'y oshi va kechki dasturlar'],
    expiresInHours: 14
  },
  {
    id: 'deal-2',
    countryId: 'khorezm',
    title: 'Xiva Ichan Qal\'a & Ellikqal\'a Qadimiy Qal\'alar Ekspeditsiyasi',
    country: 'Xorazm & Ellikqal\'a',
    days: '3 kecha / 4 kun',
    badge: 'EKSKLYUZIV -30%',
    oldPriceUSD: 290,
    newPriceUSD: 210,
    image: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=800&q=80',
    planeImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
    includes: ['Toshkent-Urganch to\'g\'ridan-to\'g\'ri aviaparvoz', 'Ichan Qal\'a ichidagi sharqona mehmonxona', 'Ayozqal\'a & Toproqqal\'a jip safari', 'Xorazm milliy tansiq taomlari'],
    expiresInHours: 9
  },
  {
    id: 'deal-3',
    countryId: 'surkhandarya',
    title: 'Surxondaryo Boysun, Omonxona & Sangardak Sharsharasi Safari',
    country: 'Surxondaryo (Termiz)',
    days: '2 kecha / 3 kun',
    badge: 'TABIAT VA SIHAT -20%',
    oldPriceUSD: 220,
    newPriceUSD: 160,
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80',
    planeImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    includes: ['Toshkent-Termiz aviaparvozi', 'Boysun tog\' eko-kottejlari', 'Sangardak sharsharasiga VIP transfer', 'Omonxona shifobaxsh suvi va tog\' nonushtasi'],
    expiresInHours: 24
  },
  {
    id: 'deal-4',
    countryId: 'qashqadaryo',
    title: 'Qashqadaryo Kitob Rasadxonasi & Shahrisabz Oqsaroy Turi',
    country: 'Qashqadaryo & Shahrisabz',
    days: '2 kecha / 3 kun',
    badge: 'KOINOT SIRLARI -25%',
    oldPriceUSD: 190,
    newPriceUSD: 140,
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80',
    planeImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    includes: ['Afrosiyob poyezdi yoki samolyot', 'Maydanak observatoriyasida yulduzlarni kuzatish', 'Oqsaroy va Dorus-Saodat ekskursiyasi', 'Taxtaqoracha tandir go\'shti ziyofati'],
    expiresInHours: 18
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Sardor Rahimov',
    role: 'Tadbirkor, Toshkent',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    country: 'Samarqand & Buxoro turi',
    text: 'Oilamiz bilan Afrosiyob poyezdida Samarqand va Buxoroga 4 kunlik sayohatga bordik. LOTOS FIELD tashkilotchiligi juda ajoyib bo\'ldi – mehmonxonalar toza, gidlar nihoyatda bilimdon!',
    date: '3 kun oldin'
  },
  {
    id: 2,
    name: 'Dilnoza Karimova',
    role: 'Shifokor, Farg\'ona',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    country: 'Xiva & Ellikqal\'a ekspeditsiyasi',
    text: 'Ichan Qal\'aning kechki chiroqlari va Ellikqal\'adagi Ayozqal\'a qadimiy manzaralari butun umrga yodda qoladigan bo\'ldi. O\'z yurtimiz naqadar go\'zal va boy tarixga ega ekanligiga yana bir bor amin bo\'ldik.',
    date: '1 hafta oldin'
  },
  {
    id: 3,
    name: 'Jasurbek Mahmudov',
    role: 'Arxitektor, Namangan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    country: 'Surxondaryo Sangardak & Boysun',
    text: 'Sangardak sharsharasi va Boysun tog\'laridagi toza havo, Omonxona bulog\'i haqiqiy tabiat mo\'jizasi! Transport, mehmonxona va ovqatlanish 100% vaqtida va oliy darajada tashkil qilindi.',
    date: '2 hafta oldin'
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
  address: 'Toshkent shahri, Amir Temur shoh ko\'chasi, 107-B bino',
  workHours: 'Har kuni 08:00 dan 22:00 gacha (24/7 ichki turizm markazi)'
};
