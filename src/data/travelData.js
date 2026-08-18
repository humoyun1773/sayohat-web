export const EXCHANGE_RATE = 12850; // 1 USD = 12,850 UZS

export const AIRPLANES_FLEET = [
  {
    id: 'boeing-787',
    name: 'Boeing 787-8 Dreamliner',
    type: 'Uzoq masofali keng fyuzelyajli layner',
    airline: 'Uzbekistan Airways / Emirates hamkorlikda',
    speed: '913 km/soat',
    range: '14,140 km',
    capacity: '246 o\'rin',
    altitude: '13,100 metr',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    cabinImage: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=80',
    features: ['Shaxsiy 4K multimedia monitor', 'Wi-Fi internet parvoz davomida', '180° yotadigan VIP Biznes o\'rindiqlar', 'Shovqinsiz motor texnologiyasi']
  },
  {
    id: 'airbus-a350',
    name: 'Airbus A350-900 XWB',
    type: 'Ultra-zamonaviy lyuks samolyot',
    airline: 'Turkish Airlines / Qatar Airways',
    speed: '903 km/soat',
    range: '15,000 km',
    capacity: '315 o\'rin',
    altitude: '12,800 metr',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    cabinImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    features: ['Toza tog\' havosi filtratsiyasi HEPA', 'Panoramali quyosh nurlari nazorati', 'First Class Suite shaxsiy xonalar', 'Gurme taomlar va xushbo\'y qahva']
  },
  {
    id: 'airbus-a321neo',
    name: 'Airbus A321neo LR',
    type: 'O\'rta masofali eng tejamkor va qulay layner',
    airline: 'FlyDubai / Air Arabia',
    speed: '876 km/soat',
    range: '7,400 km',
    capacity: '190 o\'rin',
    altitude: '11,900 metr',
    image: 'https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&w=1200&q=80',
    cabinImage: 'https://images.unsplash.com/photo-1517400508447-88cca5584458?auto=format&fit=crop&w=1200&q=80',
    features: ['Keng oyoq joyi (Extra Legroom)', 'USB va Type-C tezkor quvvatlash', 'O\'zbek va xalqaro issiq taomlar', 'Silliq va xavfsiz parvoz']
  }
];

export const LIVE_FLIGHTS = [
  { flightNo: 'HY-271', from: 'Toshkent (TAS)', to: 'Istanbul (IST)', plane: 'Boeing 787', time: '08:40', status: 'Bortga Chiqish', statusColor: 'emerald', gate: 'B-04' },
  { flightNo: 'FZ-768', from: 'Toshkent (TAS)', to: 'Dubay (DXB)', plane: 'Airbus A321', time: '11:15', status: 'Registratsiya', statusColor: 'cyan', gate: 'A-02' },
  { flightNo: 'TK-371', from: 'Samarqand (SKD)', to: 'Antaliya (AYT)', plane: 'Boeing 737', time: '13:50', status: 'Rejada', statusColor: 'amber', gate: 'C-01' },
  { flightNo: 'SV-842', from: 'Toshkent (TAS)', to: 'Jidda / Makka (JED)', plane: 'Airbus A330', time: '16:20', status: 'Rejada', statusColor: 'purple', gate: 'B-07' },
  { flightNo: 'HY-501', from: 'Toshkent (TAS)', to: 'Parij (CDG)', plane: 'Boeing 787', time: '19:00', status: 'Rejada', statusColor: 'blue', gate: 'A-05' },
  { flightNo: 'HY-705', from: 'Toshkent (TAS)', to: 'Tokio (NRT)', plane: 'Boeing 787', time: '22:30', status: 'Rejada', statusColor: 'indigo', gate: 'B-01' },
];

export const CATEGORIES = [
  { id: 'all', name: 'Barcha Davlatlar', icon: 'Globe' },
  { id: 'beach', name: '🏖️ Sohil & Maldiv/Bali', icon: 'Palmtree' },
  { id: 'historical', name: '🕌 Ziyorat & Tarix', icon: 'Landmark' },
  { id: 'nature', name: '🏔️ Shveytsariya & Tog\'lar', icon: 'Mountain' },
  { id: 'luxury', name: '✨ Dubay & AQSH & Lyuks', icon: 'Sparkles' },
];

export const COUNTRIES = [
  {
    id: 'turkey',
    name: 'Turkiya (Istanbul & Antaliya)',
    nameEn: 'Turkey',
    flag: '🇹🇷',
    capital: 'Anqara / Istanbul',
    category: 'beach',
    tagline: 'Bosfor sehri, Kapadokiya sharlari va Antaliya moviy dengizi',
    coverImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '4.5 soat (To\'g\'ridan-to\'g\'ri har kuni)',
    visa: '30 kungacha vizasiz erkin rejim',
    bestTime: 'May - Noyabr (Dengiz), Yil bo\'yi (Istanbul)',
    currency: 'TRY (Turk lirasi) / USD / EUR',
    language: 'Turkcha / Ruscha / Inglizcha',
    temp: '+27°C',
    weatherDesc: 'Iliq va quyoshli dengiz havosi',
    rating: 4.95,
    reviewsCount: 4210,
    basePriceUSD: 490,
    highlights: [
      'Kapadokiyada quyosh chiqishida havo sharlarida parvoz',
      'Aya Sofiya, Moviy Masjid va Topkapi saroyi',
      'Antaliya, Belek va Kemerda All-Inclusive 5★ dam olish',
      'Bosfor bo\'ylab kechki yaxta sayri va jonli musiqalar',
      'Pamukkale oq travertinlari va Kleopatra issiq bulog\'i'
    ],
    description: 'Turkiya – Sharq va G\'arb sivilizatsiyasi chorrahasi. Dunyoga mashhur turk mehmondo\'stligi, shohona 5 yulduzli kurortlar, O\'rta Yer va Egey dengizining billur toza suvlari, lazzatli kaboblar va shirinliklar.',
    images: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Kapadokiya Göreme', desc: 'Sehrli g\'or mehmonxonalar va yuzlab havo sharlari parvozi', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80' },
      { name: 'Istanbul Bosfor Bo\'g\'ozi', desc: 'Ikki qit\'ani birlashtiruvchi afsonaviy shahar manzarasi', img: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80' },
      { name: 'Antaliya & Belek Sohillari', desc: 'Oltin qumli plyajlar va ultra lyuks all-inclusive mehmonxonalar', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Pamukkale Travertinlari', desc: 'Tabiiy oppoq kalsiy terrasalar va shifobaxsh termal suvlar', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'uae',
    name: 'BAA (Dubay & Abu-Dabi)',
    nameEn: 'United Arab Emirates',
    flag: '🇦🇪',
    capital: 'Abu-Dabi / Dubay',
    category: 'luxury',
    tagline: 'Kelajak megapolisi, osmono\'par binolar va cho\'l jip safari',
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '3.5 soat (FlyDubai va Uzbekistan Airways)',
    visa: '30 kungacha vizasiz',
    bestTime: 'Oktyabr - May (Eng ideal fasl)',
    currency: 'AED (BAA Dirhami) / USD',
    language: 'Arabcha / Inglizcha / Ruscha',
    temp: '+32°C',
    weatherDesc: 'Quyoshli va musaffo osmon',
    rating: 4.98,
    reviewsCount: 3890,
    basePriceUSD: 550,
    highlights: [
      'Burj Khalifa 148-qavatidan butun Dubay panoramasi',
      'Palm Jumeirah sun\'iy oroli va Atlantis akvaparki',
      'Qizil cho\'lda VIP 4x4 Jip Safari va barbekyu kechasi',
      'Dubay Mall, musiqali favvoralar va Miracle Garden gul bog\'i',
      'Kelajak Muzeyi (Museum of the Future)'
    ],
    description: 'Dubay – har bir burchagida hashamat va mo\'jiza mujassam bo\'lgan shahar. Dengiz bo\'yidagi Marina villalari, superkarlar, dunyodagi eng baland osmono\'parlar va shohona xarid maskanlari.',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Burj Khalifa & Favvoralar', desc: '828 metr balandlikdagi dunyoning eng baland binosi', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80' },
      { name: 'Palm Jumeirah & Atlantis', desc: 'Fors ko\'rfazi uzra qurilgan afsonaviy palma shaklidagi orol', img: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80' },
      { name: 'Qizil Cho\'l Safari & VIP Shou', desc: 'Duna bo\'ylab ekstremal avto-poyga va arabcha shou', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80' },
      { name: 'Kelajak Muzeyi', desc: 'Arab xattotligi bilan bezatilgan jahon arxitekturasi durdonasi', img: 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'maldives',
    name: 'Maldiv Orollari (Hind Okeani)',
    nameEn: 'Maldives',
    flag: '🇲🇻',
    capital: 'Male',
    category: 'beach',
    tagline: 'Hind okeanidagi moviy lagunalar va suv ustidagi lyuks villalar',
    coverImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '6 soat (Dubay orqali qulay ulanish)',
    visa: 'Aeroportda 30 kunga bepul beriladi',
    bestTime: 'Noyabr - May (Iliq va shamolsiz fasl)',
    currency: 'USD ($) / MVR',
    language: 'Divexi / Inglizcha',
    temp: '+30°C',
    weatherDesc: 'Iliq tropik okean shabadasi',
    rating: 4.99,
    reviewsCount: 2150,
    basePriceUSD: 1100,
    highlights: [
      'Okean ustidagi xususiy basseynli shohona villalar',
      'Gidrosamolyotda (Seaplane) orollar ustida go\'zal parvoz',
      'Delfinlar, ulkan toshbaqalar va manta skatlari bilan suzish',
      '5 metr suv ostida joylashgan akvarium-restoranda tushlik',
      'Yulduzli osmon ostida qumli plyajda shaxsiy romantik oqshom'
    ],
    description: 'Maldiv orollari – yer yuzidagi haqiqiy jannat. Shovqindan uzoq, shaffof feruza okean, mayin oppoq marjon qumi va eng yuqori darajadagi shaxsiy servis.',
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Suv Ustidagi VIP Villalar', desc: 'Basseynli xususiy villa va to\'g\'ridan-to\'g\'ri okeanga tushish', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80' },
      { name: 'Ba Atoll Rif Snorkeling', desc: 'Dunyoning eng toza marjon riflari va ekzotik baliqlar', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Vaadhoo Neon Plyaji', desc: 'Kechasi bioluminessensiya tufayli moviy nur sochuvchi sohil', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Ithaa Suv Osti Restorani', desc: 'Akulalar va rang-barang dengiz hayoti qurshovida gurme taomlar', img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'saudi',
    name: 'Saudiya Arabistoni (Umra & Ziyorat)',
    nameEn: 'Saudi Arabia',
    flag: '🇸🇦',
    capital: 'Ar-Riyod / Makka / Madina',
    category: 'historical',
    tagline: 'Muqaddas Ka\'batulloh, Masjidun Nabaviy va ruhiy sokinlik',
    coverImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '4.5 soat (Toshkentdan to\'g\'ridan-to\'g\'ri Jiddaga)',
    visa: 'Elektron Umra va Turistik viza 24 soatda',
    bestTime: 'Yil bo\'yi (Ayniqsa qish va bahor oylarida)',
    currency: 'SAR (Saudiya Riyoli) / USD',
    language: 'Arabcha / O\'zbekcha ellikboshi',
    temp: '+31°C',
    weatherDesc: 'Quruq va iliq quyoshli iqlim',
    rating: 5.0,
    reviewsCount: 5900,
    basePriceUSD: 850,
    highlights: [
      'Masjidul Haramda Ka\'batulloh tavofi va Sa\'y amallari',
      'Masjidun Nabaviyda Payg\'ambarimiz (s.a.v.) ravzalarini ziyorat qilish',
      'Qubo masjidi, Uhud tog\'i va Qiblatayn masjidi ekskursiyalari',
      'Haramga yaqin 5★ mehmonxonalar va 3 mahal o\'zbek milliy taomlari',
      'Tajribali diniy ulamolar va shifokorlar doimiy hamrohligi'
    ],
    description: 'Umra ziyorati – har bir musulmon orzu qiladigan muborak safar. Biz bilan to\'g\'ridan-to\'g\'ri reyslar, Haram maydoniga piyoda masofadagi lyuks mehmonxonalar va barcha sharoitlar yaratilgan.',
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Masjidul Haram & Ka\'ba', desc: 'Dunyodagi eng muqaddas masjid va nurli tavof maydoni', img: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80' },
      { name: 'Masjidun Nabaviy Madina', desc: 'Payg\'ambarimiz (s.a.v.) masjidi va ulug\'vor soyabonlar', img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80' },
      { name: 'Uhud Tog\'i va Shuhodolar', desc: 'Islom tarixidagi buyuk sahobalar qadamjosi', img: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80' },
      { name: 'Qubo Masjidi', desc: 'Islom tarixida qurilgan ilk muqaddas masjid', img: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'switzerland',
    name: 'Shveytsariya (Alp Tog\'lari)',
    nameEn: 'Switzerland',
    flag: '🇨🇭',
    capital: 'Bern / Syurix / Jeneva',
    category: 'nature',
    tagline: 'Alp cho\'qqilari, billurdek toza ko\'llar va panoramik poyezdlar',
    coverImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '7 soat (Frankfurt yoki Istanbul orqali)',
    visa: 'Shengen vizasi (Biz to\'liq tayyorlab beramiz)',
    bestTime: 'May - Oktyabr (Tabiat), Dekabr - Mart (Chang\'i)',
    currency: 'CHF (Shveytsariya Franki) / EUR',
    language: 'Nemis / Fransuz / Italyan / Inglizcha',
    temp: '+19°C',
    weatherDesc: 'Musaffo va toza tog\' havosi',
    rating: 4.97,
    reviewsCount: 1980,
    basePriceUSD: 1250,
    highlights: [
      'Matterhorn afsonaviy piramidasimon cho\'qqisi (Zermatt)',
      'Glacier Express shaffof panoramali tog\' poyezdida sayohat',
      'Lauterbrunnen vodiysi va 72 ta sharshara manzarasi',
      'Lyutsern ko\'li bo\'ylab paroxodda sayr',
      'Haqiqiy shveysar pishloqlari va shokolad fabrikalari'
    ],
    description: 'Shveytsariya – Yevropaning eng go\'zal va xavfsiz mamlakati. Yam-yashil vodiylar, billurdek toza muzlik suvlari, Alp tog\'laridagi ertaknamo qishloqlar sizni maftun etadi.',
    images: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Lauterbrunnen Vodiysi', desc: 'Tik qoyalardan oqib tushuvchi sharsharalar va yashil vodiylar', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80' },
      { name: 'Matterhorn Zermatt', desc: 'Dunyodagi eng mashhur qorli cho\'qqi va chang\'i kurorti', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80' },
      { name: 'Glacier Express Poyezdi', desc: 'Alp tog\'lari aro oyna vagonlarda afsonaviy temir yo\'l safari', img: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80' },
      { name: 'Lyutsern & Kapellbryukke', desc: 'O\'rta asrlarga oid yog\'och ko\'prik va moviy ko\'l', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'japan',
    name: 'Yaponiya (Tokio & Kioto)',
    nameEn: 'Japan',
    flag: '🇯🇵',
    capital: 'Tokio',
    category: 'luxury',
    tagline: 'Sakura gullari, Fuji tog\'i va kelajak texnologiyasi',
    coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '7.5 soat (Toshkentdan to\'g\'ridan-to\'g\'ri reys)',
    visa: 'Elektron viza (Osonlashtirilgan tartib)',
    bestTime: 'Mart - May (Sakura mavsumi), Sentabr - Noyabr',
    currency: 'JPY (Yapon Yenasi) / USD',
    language: 'Yaponcha / Inglizcha',
    temp: '+22°C',
    weatherDesc: 'Yoqimli quyoshli ob-havo',
    rating: 4.96,
    reviewsCount: 2400,
    basePriceUSD: 1190,
    highlights: [
      'Fuji tog\'ining maftunkor manzaralari va Kawaguchiko ko\'li',
      'Shinkansen tezyurar samolyot-poyezdida 320 km/soat tezlikda parvoz',
      'Kioto shahrining 10,000 ta qizil Torii darvozalari',
      'Tokio Shibuya, Shinjuku va Akihabara neon ko\'chalari',
      'Haqiqiy yapon sushisi, ramen va choy marosimlari'
    ],
    description: 'Kunchiqar mamlakat Yaponiya – qadimiy samuray va geysha madaniyati bilan eng ilg\'or kelajak robot texnologiyalari birlashgan mo\'jizaviy diyor.',
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Muqaddas Fuji Tog\'i', desc: 'Qor bilan qoplangan Yaponiyaning bosh ramzi', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Kioto Fushimi Inari', desc: 'Tog\' bo\'ylab cho\'zilgan cheksiz qizil ma\'bad koridori', img: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Tokio Shibuya Crossing', desc: 'Dunyoning eng gavjum va yorqin neonli chorrahasi', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80' },
      { name: 'Akihabara Texno Shahri', desc: 'Anime, robotlar va zamonaviy texnologiyalar markazi', img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'uzbekistan',
    name: 'O\'zbekiston (Samarqand, Buxoro, Xiva)',
    nameEn: 'Uzbekistan',
    flag: '🇺🇿',
    capital: 'Toshkent',
    category: 'historical',
    tagline: 'Buyuk Ipak Yo\'li yuragi, moviy gumbazlar va Zomin tabiati',
    coverImage: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    flightDuration: 'Ichki parvozlar (Afrosiyob poyezdi va reyslar)',
    visa: 'O\'zbekiston fuqarolari uchun erkin',
    bestTime: 'Mart - Iyun, Sentabr - Noyabr',
    currency: 'UZS (So\'m)',
    language: 'O\'zbek tili',
    temp: '+26°C',
    weatherDesc: 'Iliq va oftobli ob-havo',
    rating: 4.98,
    reviewsCount: 3100,
    basePriceUSD: 250,
    highlights: [
      'Registon maydoni, Go\'ri Amir va Shohi Zinda ziyoratlari',
      'Buxoroyi Sharif Poi Kalon va Ark qal\'asi sirlari',
      'Xiva Ichan Qal\'a ochiq osmon ostidagi tirik muzey',
      'Zomin Milliy Bog\'ining toza archazor tog\' havosi',
      'O\'zbek milliy tansiq taomlari va palov ustalari mahorati'
    ],
    description: 'O\'zbekiston – sharqona ertaklar mamlakati. Ming yillik tarixga ega obidalar, samoviy naqshlar, dunyoga mashhur mehmondo\'stlik va boy madaniy meros.',
    images: [
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626293952701-d7faef141154?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Samarqand Registon', desc: 'Sharq durdonasi va betakror koshinkor madrasalar', img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80' },
      { name: 'Buxoro Poi Kalon', desc: 'Ulug\'vor minorai Kalon va qadimiy karvonsaroylar', img: 'https://images.unsplash.com/photo-1626293952701-d7faef141154?auto=format&fit=crop&w=800&q=80' },
      { name: 'Xiva Ichan Qal\'a', desc: 'Loy devorlar bilan o\'ralgan haqiqiy ming yillik shahar', img: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=800&q=80' },
      { name: 'Zomin Shveytsariyasi', desc: 'Muazzam qarag\'ayzorlar va osma shisha ko\'prik', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'indonesia',
    name: 'Indoneziya (Bali Oroli)',
    nameEn: 'Indonesia (Bali)',
    flag: '🇮🇩',
    capital: 'Jakarta / Denpasar',
    category: 'beach',
    tagline: 'Tropik sharsharalar, sholi terrasalari va okean syorfingi',
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '8.5 soat',
    visa: 'Aeroportda elektron viza (VoA)',
    bestTime: 'Aprel - Noyabr',
    currency: 'IDR (Indoneziya Rupiyasi) / USD',
    language: 'Indonezcha / Inglizcha',
    temp: '+29°C',
    weatherDesc: 'Tropik iliq okean iqlimi',
    rating: 4.95,
    reviewsCount: 3300,
    basePriceUSD: 780,
    highlights: [
      'Nusa Penida Kelingking plyaji (Dinozavr qoyasi)',
      'Ubudning yam-yashil sholi maydonlari va afsonaviy Bali mayatnigi (Swing)',
      'Uluwatu qoyasida quyosh botishi va olovli Kechak raqsi',
      'Ekzotik tropik sharsharalar ostida cho\'milish',
      'Xususiy tropik villalar va suzuvchi nonushta (Floating Breakfast)'
    ],
    description: 'Sehrli Bali – ruhiy sokinlik, betakror yashil tabiat, vulqonlar, ekzotik ibodatxonalar va Hind okeanining qudratli to\'lqinlari yurti.',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Nusa Penida Kelingking', desc: 'Okean uzra yuksalgan dinozavr shaklidagi qoyatosh sohili', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80' },
      { name: 'Ubud Tegalalang', desc: 'Zumrad rang sholi terrasalari va baland belanchaklar', img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80' },
      { name: 'Uluwatu Qoyalari', desc: 'To\'lqinlar ustidagi qadimiy ibodatxona va Kechak olov shousi', img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80' },
      { name: 'Gili Toshbaqalar Orollari', desc: 'Toza moviy suvlar va ulkan dengiz toshbaqalari bilan snorkeling', img: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'france',
    name: 'Fransiya (Parij & Kot d\'Azur)',
    nameEn: 'France',
    flag: '🇫🇷',
    capital: 'Parij',
    category: 'luxury',
    tagline: 'Romantika, Eyfel minorasi, Luvr san\'ati va Fransiya Rivyerasi',
    coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
    planeImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    flightDuration: '6.5 soat (Toshkentdan to\'g\'ridan-to\'g\'ri qatnov)',
    visa: 'Shengen vizasi',
    bestTime: 'Aprel - Oktyabr',
    currency: 'EUR (Yevro) / USD',
    language: 'Fransuzcha / Inglizcha',
    temp: '+23°C',
    weatherDesc: 'Yoqimli bahor-yoz havosi',
    rating: 4.90,
    reviewsCount: 2800,
    basePriceUSD: 980,
    highlights: [
      'Eyfel minorasi tepasidan Parij nurlariga boqish',
      'Luvr muzeyida Mona Liza va san\'at durdonalari',
      'Sen daryosi bo\'ylab romantik panoramali kema safari',
      'Disneylend Parij – barcha yoshdagilar uchun ertaklar olami',
      'Nitssa, Kann va Monako sohillaridagi lyuks dam olish'
    ],
    description: 'Parij – orzular va muhabbat poytaxti. Tarixiy qasrlar, mashhur kruassanlar, Yelisey dalalari va fransuz nafosati.',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80'
    ],
    spots: [
      { name: 'Eyfel Minorasi', desc: 'Parijning afsonaviy ramzi va kechki yorqin chiroqlari', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80' },
      { name: 'Luvr Muzeyi & Piramida', desc: 'Dunyodagi eng boy san\'at xazinasi va shoh saroyi', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80' },
      { name: 'Disneylend Parij', desc: 'Mikki Maus, qasrlar va attraksionlar saltanati', img: 'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Nitssa & Kot d\'Azur', desc: 'Moviy qirg\'oq va O\'rta yer dengizining lyuks kurorti', img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];

export const HOT_DEALS = [
  {
    id: 'deal-1',
    countryId: 'turkey',
    title: 'Antaliya All-Inclusive 5★ Ultra Lyuks Ta\'til',
    country: 'Turkiya',
    days: '7 kecha / 8 kun',
    badge: 'QAYNOQ TAKLIF -25%',
    oldPriceUSD: 680,
    newPriceUSD: 510,
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
    planeImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    includes: ['To\'g\'ridan-to\'g\'ri aviaqatnov', '5★ Ultra All Inclusive Mehmonxona', 'Transfer & Sug\'urta', 'Gid xizmati'],
    expiresInHours: 14
  },
  {
    id: 'deal-2',
    countryId: 'uae',
    title: 'Dubay VIP Sayohat + Safari va Burj Khalifa',
    country: 'BAA',
    days: '5 kecha / 6 kun',
    badge: 'ENG KO\'P SOTILGAN -30%',
    oldPriceUSD: 790,
    newPriceUSD: 550,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    planeImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    includes: ['Parvoz + bagaj 23kg', 'Marina bo\'yidagi 4★+ Mehmonxona', 'Jip Safari & Kechki ovqat', 'Burj Khalifa chiptasi'],
    expiresInHours: 9
  },
  {
    id: 'deal-3',
    countryId: 'saudi',
    title: 'Umra Ziyorati 2026 (To\'g\'ridan-to\'g\'ri Toshkent-Jidda)',
    country: 'Saudiya Arabistoni',
    days: '14 kun',
    badge: 'BARCHA QULAYLIKLAR BILAN',
    oldPriceUSD: 980,
    newPriceUSD: 850,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    planeImage: 'https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&w=800&q=80',
    includes: ['To\'g\'ridan-to\'g\'ri charter reys', 'Haramga yaqin 5★ mehmonxonalar', 'Tajribali ellikboshi', 'Viza, tibbiy sug\'urta va sovg\'alar'],
    expiresInHours: 28
  },
  {
    id: 'deal-4',
    countryId: 'maldives',
    title: 'Maldiv Orollari Suv Villasi Romantik Ta\'til',
    country: 'Maldiv',
    days: '6 kecha / 7 kun',
    badge: 'LYUKS CHEGIRMA -20%',
    oldPriceUSD: 1450,
    newPriceUSD: 1150,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    planeImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
    includes: ['Gidrosamolyotda transfer', 'Suv ustidagi shaxsiy villa', 'Full Board (3 mahal taom)', 'Snorkeling va kanoe'],
    expiresInHours: 19
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Bobur Mirzayev',
    role: 'Tadbirkor, Toshkent',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    country: 'Dubay (BAA)',
    text: 'Dubayga oilaviy sayohatimiz ajoyib o\'tdi! Samolyot chiptalaridan tortib mehmonxonagacha barchasi yuqori darajada tashkil qilingan. Ayniqsa Telegram orqali 24/7 yordam berishgani juda ma\'qul bo\'ldi.',
    date: '3 kun oldin'
  },
  {
    id: 2,
    name: 'Nigora Karimova',
    role: 'Dizayner, Samarqand',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    country: 'Kapadokiya (Turkiya)',
    text: 'Kapadokiyadagi havo sharlarida parvoz – hayotimdagi eng unutilmas lahzalar bo\'ldi! Narxlari juda qulay va barcha ekskursiyalar vaqtida amalga oshirildi. Hammaga tavsiya qilaman!',
    date: '1 hafta oldin'
  },
  {
    id: 3,
    name: 'Sherzodbek Alimov',
    role: 'Dasturchi, Farg\'ona',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    country: 'Bali (Indoneziya)',
    text: 'Sayt orqali to\'g\'ridan-to\'g\'ri WhatsAppda operator bilan bog\'landim, 10 daqiqa ichida barcha vizaviy va tur hujjatlarimni rasmiylashtirib berishdi. Haqiqiy professional jamoa!',
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
  workHours: 'Har kuni 08:00 dan 22:00 gacha (24/7 qo\'llab-quvvatlash)'
};
