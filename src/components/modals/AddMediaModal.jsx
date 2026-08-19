import React, { useState, useRef } from 'react';
import { 
  X, Image as ImageIcon, Video, Upload, 
  MapPin, Clock, Calendar, Bus, Plane, 
  Plus
} from 'lucide-react';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

export default function AddMediaModal({ isOpen, onClose, onAddMedia, lang = 'uz' }) {
  useBodyScrollLock(isOpen);

  const [title, setTitle] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('08:00');
  const [arrivalTime, setArrivalTime] = useState('12:00');
  const [date, setDate] = useState('2026-08-18');
  const [transportType, setTransportType] = useState('bus'); // 'bus' | 'plane'
  const [mediaType, setMediaType] = useState('image'); // 'image' | 'video'
  const [mediaUrl, setMediaUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [passengersCount, setPassengersCount] = useState(20);

  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const isVideo = file.type.startsWith('video');
      const isImg = file.type.startsWith('image');

      if (isVideo) {
        setMediaType('video');
      } else if (isImg) {
        setMediaType('image');
      }

      // Convert to persistent Data URL (base64) so it stays in localStorage
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setPreviewUrl(result);
        setMediaUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert(lang === 'ru' ? 'Введите название поездки' : 'Sayohat nomini kiriting');
      return;
    }
    if (!origin.trim() || !destination.trim()) {
      alert(lang === 'ru' ? 'Укажите откуда и куда' : 'Qayerdan va qayerga borilayotganini kiriting');
      return;
    }

    const finalMedia = mediaUrl.trim() || previewUrl || (mediaType === 'video' ? 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' : '/images/landmarks/samarkand-registan.png');

    const newTrip = {
      id: 'trip-' + Date.now(),
      title: title.trim(),
      origin: origin.trim(),
      destination: destination.trim(),
      departureTime,
      arrivalTime,
      date,
      transportType,
      mediaType,
      mediaUrl: finalMedia,
      author: author.trim() || 'Sayyoh / Gid',
      passengersCount: Number(passengersCount) || 1,
      status: 'arrived',
      statusTextUz: `${origin} ➔ ${destination} (${departureTime} - ${arrivalTime})`,
      statusTextRu: `${origin} ➔ ${destination} (${departureTime} - ${arrivalTime})`,
      statusTextEn: `${origin} ➔ ${destination} (${departureTime} - ${arrivalTime})`,
      description: description.trim() || `${origin}dan ${destination}ga ${transportType === 'plane' ? 'samolyot' : 'avtobus'} safari.`
    };

    onAddMedia(newTrip);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md modal-backdrop-animate overscroll-none touch-none"
      onClick={onClose}
      onTouchMove={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col modal-card-animate"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#10b981] text-white flex items-center justify-center font-bold shadow-md">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold tracking-wider text-[#065f46] uppercase block">
                YANGI SAYOHAT KUNDALIGI & MEDIA
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Rasm yoki Video Bilan Sayohat Qo'shish
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div 
          className="p-5 sm:p-7 overflow-y-auto space-y-4 modal-scrollable overscroll-contain"
          onTouchMove={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* 1. Trip Title */}
            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1">
                1. Sayohat Sarlavhasi / Nomi:
              </label>
              <input
                type="text"
                required
                placeholder="Masalan: Toshkentdan Samarqandga Ertalabki VIP Avtotur"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-[#10b981] focus:ring-3 focus:ring-[#10b981]/15 bg-white text-slate-900 transition-all placeholder:text-slate-400 shadow-2xs"
              />
            </div>

            {/* 2. Transport Choice (Bus or Plane) */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                2. Transport Turi:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setTransportType('bus')}
                  className={`py-3 px-4 rounded-2xl border-2 font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    transportType === 'bus'
                      ? 'border-[#10b981] bg-[#ecfdf5] text-[#065f46] shadow-xs'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                  }`}
                >
                  <Bus className="w-4 h-4 text-[#10b981]" />
                  <span>🚌 Avtobus / Gazel</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTransportType('plane')}
                  className={`py-3 px-4 rounded-2xl border-2 font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    transportType === 'plane'
                      ? 'border-[#10b981] bg-[#ecfdf5] text-[#065f46] shadow-xs'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                  }`}
                >
                  <Plane className="w-4 h-4 text-emerald-600 transform -rotate-45" />
                  <span>✈️ Samolyot Reysi</span>
                </button>
              </div>
            </div>

            {/* 3. Origin & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Qayerdan (Jo'nash nuqtasi):</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masalan: Toshkent (Janubiy Avtovokzal)"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-[#10b981] focus:ring-3 focus:ring-[#10b981]/15 bg-white text-slate-900 transition-all placeholder:text-slate-400 shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Qayerga (Manzil):</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masalan: Samarqand (Registon Maydoni)"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-[#10b981] focus:ring-3 focus:ring-[#10b981]/15 bg-white text-slate-900 transition-all placeholder:text-slate-400 shadow-2xs"
                />
              </div>
            </div>

            {/* 4. Departure Time & Arrival Time & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Jo'nash Soati:</span>
                </label>
                <input
                  type="time"
                  required
                  value={departureTime}
                  onChange={(e) => setDepartureTime(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm font-bold focus:outline-none focus:border-[#10b981] focus:ring-3 focus:ring-[#10b981]/15 bg-white text-slate-900 transition-all cursor-pointer shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Yetib Borish Soati:</span>
                </label>
                <input
                  type="time"
                  required
                  value={arrivalTime}
                  onChange={(e) => setArrivalTime(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm font-bold focus:outline-none focus:border-[#10b981] focus:ring-3 focus:ring-[#10b981]/15 bg-white text-slate-900 transition-all cursor-pointer shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Sana:</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm font-bold focus:outline-none focus:border-[#10b981] focus:ring-3 focus:ring-[#10b981]/15 bg-white text-slate-900 transition-all cursor-pointer shadow-2xs"
                />
              </div>
            </div>

            {/* 5. MEDIA UPLOAD (PHOTO OR VIDEO) */}
            <div className="space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                  5. Rasm yoki Video Yuklash:
                </label>

                {/* Switch Media Type */}
                <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setMediaType('image')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      mediaType === 'image' ? 'bg-[#10b981] text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Rasm</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMediaType('video')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      mediaType === 'video' ? 'bg-[#10b981] text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Video</span>
                  </button>
                </div>
              </div>

              {/* Local File Picker */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-[#10b981] bg-white p-4 rounded-2xl text-center cursor-pointer transition-all hover:bg-emerald-50/50 flex flex-col items-center justify-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#10b981] flex items-center justify-center">
                  <Upload className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-slate-800">
                  Kompyuter yoki Telefondan {mediaType === 'video' ? 'Video' : 'Rasm'} tanlang
                </div>
                <div className="text-[10px] text-slate-400">
                  {mediaType === 'video' ? 'MP4, MOV, WEBM formatlar' : 'JPG, PNG, WEBP formatlar'}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={mediaType === 'video' ? 'video/*' : 'image/*'}
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              {/* Or Paste Direct URL */}
              <div className="pt-2">
                <input
                  type="url"
                  placeholder={`Yoki to'g'ridan-to'g'ri ${mediaType === 'video' ? 'video' : 'rasm'} havolasini (URL) kiriting...`}
                  value={mediaUrl.startsWith('data:') ? '' : mediaUrl}
                  onChange={(e) => {
                    setMediaUrl(e.target.value);
                    setPreviewUrl(e.target.value);
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#10b981] bg-white text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Preview Box */}
              {previewUrl && (
                <div className="mt-3 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 max-h-48 flex items-center justify-center relative">
                  {mediaType === 'video' ? (
                    <video src={previewUrl} controls className="w-full max-h-48 object-contain" />
                  ) : (
                    <img src={previewUrl} alt="Preview" className="w-full max-h-48 object-cover" />
                  )}
                  <button
                    type="button"
                    onClick={() => { setPreviewUrl(''); setMediaUrl(''); }}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/70 text-white hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>

            {/* 6. Author & Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Muallif / Gid / Sayyoh Ismi:
                </label>
                <input
                  type="text"
                  placeholder="Masalan: Sardor Rahimov (Gid)"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#10b981] bg-white text-slate-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Sayohatchilar Soni:
                </label>
                <input
                  type="number"
                  min={1}
                  max={60}
                  value={passengersCount}
                  onChange={(e) => setPassengersCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#10b981] bg-white text-slate-900 transition-all"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Sayohat Haqida Qisqacha Izoh:
              </label>
              <textarea
                rows={2}
                placeholder="Yo'l taassurotlari, ob-havo va sayyohlar kayfiyati haqida..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#10b981] bg-white text-slate-900 transition-all placeholder:text-slate-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl btn-primary-emerald font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
              >
                <Plus className="w-5 h-5" />
                <span>SAYOHAT MEDIA KARTASINI QO'SHISH</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
