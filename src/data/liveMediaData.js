// Sample verified live media and trip journeys across Uzbekistan
export const INITIAL_LIVE_MEDIA = [
  {
    id: 'trip-1',
    title: 'Toshkentdan Samarqandga Ertalabki VIP Avtotur',
    origin: 'Toshkent (Janubiy Avtovokzal)',
    destination: 'Samarqand (Registon Maydoni)',
    departureTime: '07:30',
    arrivalTime: '11:45',
    date: '2026-08-18',
    transportType: 'bus', // 'bus' | 'plane'
    mediaType: 'image', // 'image' | 'video'
    mediaUrl: '/images/landmarks/samarkand-registan.png',
    author: 'Sardor Rahimov (Gid & Haydovchi)',
    passengersCount: 42,
    status: 'arrived', // 'on_the_way' | 'arrived' | 'scheduled'
    statusTextUz: 'Muvaffaqiyatli yetib bordi (4 soat 15 daqiqa)',
    statusTextRu: 'Успешно прибыли (4 часа 15 минут)',
    statusTextEn: 'Successfully arrived (4 hrs 15 mins)',
    description: 'Yutong 2026 qulay avtobusimiz Samarqand Registon maydoniga yetib keldi. Sayohatchilarimiz mehmonxonaga joylashib, tushlikka yo\'l olishdi.'
  },
  {
    id: 'trip-2',
    title: 'Toshkent ➔ Buxoro Tongi Samolyot Parvozi',
    origin: 'Toshkent Xalqaro Aeroporti (T2)',
    destination: 'Buxoro Xalqaro Aeroporti & Ark',
    departureTime: '08:15',
    arrivalTime: '09:20',
    date: '2026-08-18',
    transportType: 'plane',
    mediaType: 'image',
    mediaUrl: '/images/landmarks/bukhara-ark.png',
    author: 'Malika Karimova (Tur Menejeri)',
    passengersCount: 28,
    status: 'arrived',
    statusTextUz: 'Parvoz 1 soat 05 daqiqada yakunlandi',
    statusTextRu: 'Полет завершен за 1 час 05 минут',
    statusTextEn: 'Flight completed in 1 hr 05 mins',
    description: 'Buxoroga tezyurar parvoz orqali 1 soatda yetib keldik. Aeroportdan shaxsiy transferimiz barcha sayyohlarni Ark va Labi Hovuzga olib bordi.'
  },
  {
    id: 'trip-3',
    title: 'Xiva Ichan Qal\'aga Kechki Jonli Sayohat',
    origin: 'Urganch Aeroporti',
    destination: 'Xiva Ichan Qal\'a (Kalta Minor)',
    departureTime: '16:00',
    arrivalTime: '16:40',
    date: '2026-08-17',
    transportType: 'bus',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    author: 'Otabek Yo\'ldoshev (Gid)',
    passengersCount: 18,
    status: 'arrived',
    statusTextUz: 'Xiva kechki chiroqlari ostida',
    statusTextRu: 'Хива в вечерних огнях',
    statusTextEn: 'Khiva under evening illuminations',
    description: 'Xiva Ichan Qal\'a bo\'ylab kechki ekskursiya va Nurullaboy saroyiga sayr. Ajoyib video lavha!'
  },
  {
    id: 'trip-4',
    title: 'Zomin Tog\'lariga Shanba Kungi Ekspeditsiya',
    origin: 'Toshkent (Qo\'yliq)',
    destination: 'Zomin Milliy Bog\'i & Oyna Ko\'prik',
    departureTime: '06:00',
    arrivalTime: '09:30',
    date: '2026-08-18',
    transportType: 'bus',
    mediaType: 'image',
    mediaUrl: '/images/landmarks/zomin-mountains.png',
    author: 'Dilshod Aliyev (Ekotur Gidi)',
    passengersCount: 22,
    status: 'on_the_way',
    statusTextUz: '🟢 Hozir Zomin archazorlarida',
    statusTextRu: '🟢 Сейчас в Зааминских лесах',
    statusTextEn: '🟢 Currently in Zaamin Forests',
    description: 'Zomin tog\'larida toza archa havosi, Oyna ko\'prik va Suffa platosiga sayohat davom etmoqda.'
  }
];
