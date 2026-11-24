'use client';

import { FormEvent, useState } from 'react';

type ProgramCard = {
  category: string;
  badgeClass: string;
  icon: string;
  rating: string;
  title: string;
  description: string;
  duration: string;
  courses: string;
  thumbnail: string;
};

const programPages: ProgramCard[][] = [[
  {
    category: 'TAHFIDZ AL-QURAN',
    badgeClass: 'bg-emerald-50 text-emerald-700',
    icon: 'fa-solid fa-book-quran',
    rating: '5.0',
    title: 'Tahfidz',
    description: 'Program hafalan Al-Qur’an yang terarah melalui setoran, murojaah, dan pendampingan musyrif sesuai kemampuan santri.',
    duration: 'Terjadwal Harian',
    courses: 'Pendampingan Musyrif',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'TAHSIN AL-QURAN',
    badgeClass: 'bg-amber-50 text-amber-700',
    icon: 'fa-solid fa-microphone-lines',
    rating: '4.9',
    title: 'Tahsin',
    description: 'Pembinaan makhraj, tajwid, dan kelancaran membaca Al-Qur’an agar setiap santri membaca dengan benar dan percaya diri.',
    duration: 'Pembinaan Pekanan',
    courses: 'Tajwid dan Tilawah',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'LUGHOH',
    badgeClass: 'bg-blue-50 text-blue-700',
    icon: 'fa-solid fa-language',
    rating: '4.9',
    title: 'Lughoh (Bahasa Arab & Inggris)',
    description: 'Pembiasaan bahasa Arab dan Inggris untuk mendukung komunikasi, pemahaman Al-Qur’an, dan wawasan global santri.',
    duration: 'Pembelajaran Harian',
    courses: 'Arab dan Inggris',
    thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
]];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programPage, setProgramPage] = useState(0);
  const [authMode, setAuthMode] = useState<string | null>(null);
  const [video, setVideo] = useState<{ title: string; poster: string } | null>(null);
  const [toast, setToast] = useState('');
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 3400); };
  const submitAuth = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setAuthMode(null); notify(authMode === 'Portal Santri' ? 'Berhasil masuk! Mengalihkan ke Portal Pendidikan Santri...' : 'Formulir Penerimaan Santri berhasil dibuat! Silakan cek email Anda.'); };
  return (
<div>
  {/* =====================================================================
 1. NAVBAR
  ====================================================================== */}
  <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100/80 transition-all">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      {/* Brand Logo */}
      <a href="#beranda" className="flex items-center gap-2.5 group focus:outline-none">
        <img src="/assets/logo.png" alt="Logo Pondok Modern As-Sadid" className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105" />
        <div className="flex flex-col">
          <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#1C2B25] leading-none">
            As-Sadid
          </span>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-tealBrand mt-0.5">
            Pondok Modern
          </span>
        </div>
      </a>
      {/* Desktop Center Nav Links */}
      <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-[#4A5568]">
        <a href="#beranda" className="text-[#1C2B25] font-semibold hover:text-tealBrand transition-colors">Beranda</a>
        <a href="#jurusan" className="hover:text-tealBrand transition-colors">Program Pendidikan</a>
        <a href="#prestasi" className="hover:text-tealBrand transition-colors">Prestasi</a>
        <a href="#fasilitas" className="hover:text-tealBrand transition-colors">Tentang Pondok</a>
      </nav>
      {/* Right Action Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button onClick={() => setAuthMode('Portal Santri')} className="text-sm font-semibold text-[#1C2B25] hover:text-tealBrand transition-colors">
          Portal Santri
        </button>
        <button onClick={() => setAuthMode('Penerimaan Santri 2026/2027')} className="bg-tealBrand hover:bg-tealBrand-hover text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all">
          Penerimaan Santri
        </button>
      </div>
      {/* Mobile Hamburger Button */}
      <button id="mobileMenuBtn" onClick={() => setMobileMenuOpen((value) => !value)} aria-label="Buka Menu" className="md:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors">
        <i className="fa-solid fa-bars text-lg" />
      </button>
    </div>
    {/* Mobile Dropdown Navigation */}
    <div id="mobileMenu" className={mobileMenuOpen ? 'md:hidden bg-white border-b border-slate-100 px-6 pt-3 pb-6 space-y-4 shadow-lg' : 'hidden md:hidden bg-white border-b border-slate-100 px-6 pt-3 pb-6 space-y-4 shadow-lg'}>
      <div className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
        <a href="#beranda" className="mobile-link py-1.5 text-tealBrand font-semibold">Beranda</a>
        <a href="#jurusan" className="mobile-link py-1.5 hover:text-tealBrand">Program Pendidikan</a>
        <a href="#prestasi" className="mobile-link py-1.5 hover:text-tealBrand">Prestasi</a>
        <a href="#fasilitas" className="mobile-link py-1.5 hover:text-tealBrand">Tentang Pondok</a>
      </div>
      <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
        <button onClick={() => setAuthMode('Portal Santri')} className="flex-1 py-2.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-800">
          Portal Santri
        </button>
        <button onClick={() => setAuthMode('Penerimaan Santri 2026/2027')} className="flex-1 py-2.5 rounded-full bg-tealBrand text-white text-sm font-semibold">
          Penerimaan Santri
        </button>
      </div>
    </div>
  </header>
  <main>
    {/* =====================================================================
   2. HERO SECTION
    ====================================================================== */}
    <section id="beranda" className="pt-4 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-slateSurface rounded-[2rem] md:rounded-[2.75rem] px-6 sm:px-12 lg:px-16 pt-12 pb-20 lg:py-16 relative overflow-hidden">
        {/* Decorative Top-Right Orange Semi-Circle */}
        <div className="hidden sm:block absolute top-10 right-10 w-20 h-10 bg-amberAccent rounded-b-full rotate-[35deg] opacity-95 pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy, CTAs & Stats */}
          <div className="lg:col-span-6 space-y-7 z-10 text-left">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-[3.3rem] leading-[1.15] text-[#1C2B25] tracking-tight">
              Menghafal Al-Qur'an, <br className="hidden sm:inline" />membentuk akhlak mulia bersama <br />
              <span className="inline-block mt-2 bg-amberAccent text-white px-6 py-1.5 rounded-full -rotate-2 shadow-sm transform transition-transform hover:rotate-0">
                As-Sadid
              </span>
            </h1>
            <p className="text-[#718096] text-base sm:text-lg leading-relaxed max-w-lg">
              Program Tahfidzul Qur'an yang memadukan hafalan Al-Qur'an, pemahaman diniyah, pendidikan formal, dan pembinaan akhlak dalam lingkungan pondok yang aman serta disiplin.
            </p>
            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-5 pt-1">
              <button onClick={() => setAuthMode('Penerimaan Santri 2026/2027')} className="bg-tealBrand hover:bg-tealBrand-hover text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all">
                Penerimaan Santri
              </button>
              <button onClick={() => setVideo({ title: 'Profil Pondok Pondok Modern As-Sadid', poster: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80' })} className="group flex items-center gap-3.5 text-sm sm:text-base font-semibold text-[#1C2B25] hover:text-tealBrand transition-colors">
                <span className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center text-amberAccent group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-play text-sm ml-0.5" />
                </span>
                <span>Profil Pondok</span>
              </button>
            </div>
            {/* Stats Row */}
            <div className="pt-6 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg border-t border-slate-200/70">
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-tealBrand">1.250+</div>
                <div className="text-xs sm:text-sm font-medium text-[#718096] mt-0.5">Santri Aktif</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-tealBrand">85+</div>
                <div className="text-xs sm:text-sm font-medium text-[#718096] mt-0.5">Pendidik &amp; Pengasuh</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-tealBrand">98%</div>
                <div className="text-xs sm:text-sm font-medium text-[#718096] mt-0.5">Santri Berprestasi</div>
              </div>
            </div>
          </div>
          {/* Right Column: Santri Portrait + Organic Shapes + Floating UI Widgets */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[380px] sm:min-h-[450px]">
            {/* Organic Background Shapes */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#BCE0F7] -top-2 left-6 sm:left-14 pointer-events-none" />
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-tealBrand bottom-2 right-4 sm:right-10 pointer-events-none" />
            {/* Main High School Santri Portrait */}
            <div className="relative z-10 w-64 sm:w-80 h-[350px] sm:h-[420px] rounded-b-full overflow-hidden flex items-end justify-center">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=85" alt="Santri As-Sadid tersenyum membawa buku dan tablet"  className="w-full h-full object-cover object-center rounded-t-[8rem] shadow-lg" />
            </div>
            {/* Floating Card 1: Top-Left Academic Achievement Pie Chart Card */}
            <div className="animate-float absolute top-6 left-2 sm:left-8 z-20 bg-white p-3.5 rounded-2xl shadow-float flex items-center justify-center">
              <div className="w-10 h-10 rounded-full relative flex items-center justify-center" style={{background: 'conic-gradient(#C9A227 0% 35%, #0B3D2E 35% 75%, #3B82F6 75% 100%)'}}>
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
            {/* Floating Card 2: Top-Right Accreditation Mini-Card */}
            <div className="animate-float-delayed absolute top-20 -right-1 sm:right-2 z-20 bg-white px-3.5 py-2.5 rounded-2xl shadow-float flex items-center gap-2.5 max-w-[215px]">
              <div className="w-9 h-9 rounded-full bg-tealBrand-light text-tealBrand flex items-center justify-center font-heading font-extrabold text-sm shrink-0">
                A
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-800 leading-tight">Akreditasi A (Unggul)</p>
                <div className="flex items-center gap-0.5 text-amberAccent text-[10px] mt-1">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
              </div>
            </div>
            {/* Floating Card 3: Bottom-Left Graduation Rate & Santri Avatars */}
            <div className="animate-float-delayed absolute bottom-10 left-0 sm:left-4 z-20 bg-white p-3.5 rounded-2xl shadow-float w-52 sm:w-56">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold text-slate-700">Kelulusan SNBP &amp; UTBK</span>
                <span className="text-[11px] font-extrabold text-tealBrand">98%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                <div className="h-full w-[98%] bg-amberAccent rounded-full" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Santri 1" className="w-7 h-7 rounded-full object-cover ring-2 ring-white" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="Santri 2" className="w-7 h-7 rounded-full object-cover ring-2 ring-white" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Santri 3" className="w-7 h-7 rounded-full object-cover ring-2 ring-white" />
                </div>
                <span className="px-2 py-1 rounded-full bg-tealBrand text-white text-[10px] font-bold">+320 Perguruan Tinggi</span>
              </div>
            </div>
            {/* Floating Card 4: Bottom-Right 3D Layered Academic Icon */}
            <div className="animate-float absolute bottom-6 right-4 sm:right-10 z-20 bg-white p-3.5 rounded-2xl shadow-float">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L28 10.5L16 17L4 10.5L16 4Z" fill="#5EEAD4" />
                <path d="M16 11L28 17.5L16 24L4 17.5L16 11Z" fill="#14B8A6" fillOpacity="0.85" />
                <path d="M16 17.5L28 24L16 30L4 24L16 17.5Z" fill="#0B3D2E" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* =====================================================================
     3. PARTNER / AKREDITASI & KERJA SAMA UNIVERSITAS BAR
====================================================================== */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-soft border border-slate-100/90 px-6 sm:px-10 py-6 sm:py-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center text-slate-600">
            {/* Pendidikan Terpadu */}
            <div className="flex items-center gap-2 font-heading font-extrabold text-sm tracking-wider text-slate-700 hover:text-tealBrand transition-colors select-none">
              <i className="fa-solid fa-landmark text-tealBrand" />
              <span>Pendidikan Terpadu</span>
            </div>
            {/* UI */}
            <div className="flex items-center gap-1.5 font-heading font-extrabold text-xl tracking-tight text-slate-700 hover:text-tealBrand transition-colors select-none">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-amberAccent text-white text-xs rounded-md font-bold">UI</span>
              <span>Diniyah</span>
            </div>
            {/* ITB */}
            <div className="flex items-center gap-1.5 font-heading font-extrabold text-lg tracking-tight text-slate-700 hover:text-tealBrand transition-colors select-none">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-tealBrand text-white text-[10px] rounded-md font-bold">ITB</span>
              <span>Pembinaan Adab</span>
            </div>
            {/* Asrama */}
            <div className="flex items-center gap-1.5 font-heading font-extrabold text-lg text-slate-700 hover:text-tealBrand transition-colors select-none">
              <i className="fa-solid fa-graduation-cap text-amberAccent" />
              <span>Asrama</span>
            </div>
            {/* Teknologi Pembelajaran */}
            <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5 font-heading font-bold text-sm tracking-tight text-slate-700 hover:text-tealBrand transition-colors select-none">
              <i className="fa-solid fa-globe text-tealBrand" />
              <span>Teknologi Pembelajaran</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =====================================================================
   4. SECTION "PROGRAM UNGGULAN"
    ====================================================================== */}
    <section id="jurusan" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F1EBDA]/45">
      {/* Decorative Orange Semi-Circle Top-Left */}
      <div className="hidden md:block absolute top-28 -left-10 w-28 h-28 bg-amberAccent rounded-full opacity-95 pointer-events-none" />
      {/* Decorative Dark Teal Semi-Circle Bottom-Right */}
      <div className="hidden md:block absolute bottom-12 -right-8 w-24 h-24 bg-tealBrand rounded-full opacity-95 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1C2B25]">
            Program Unggulan As-Sadid
          </h2>
          <p className="text-[#718096] text-sm sm:text-base mt-3">
            Program unggulan Tahfidz, Tahsin, serta Lughoh Bahasa Arab dan Inggris untuk membentuk santri yang dekat dengan Al-Qur'an, fasih membaca, dan percaya diri berkomunikasi.
          </p>
        </div>
        <div id="tracksGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programPages[programPage].map((program) => (
            <article key={program.title} className="bg-white rounded-3xl p-4 shadow-card border border-[#E6C766]/70 hover:-translate-y-1.5 hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#F1EBDA] group">
                  <img src={program.thumbnail} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
                  <button type="button" onClick={() => setVideo({ title: program.title, poster: program.thumbnail })} aria-label={`Lihat video ${program.title}`} className="absolute inset-0 m-auto w-11 h-11 rounded-full bg-white/95 text-amberAccent shadow-md flex items-center justify-center hover:scale-110 transition-transform">
                    <i className="fa-solid fa-play text-xs ml-0.5" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4 px-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-lg ${program.badgeClass} flex items-center justify-center text-[11px]`}><i className={program.icon} /></span>
                    <span className="text-[11px] font-bold tracking-wider text-slate-700 uppercase">{program.category}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700"><i className="fa-solid fa-star text-amberAccent text-[11px]" />{program.rating}</div>
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C2B25] mt-2.5 px-1">{program.title}</h3>
                <p className="text-[#718096] text-xs sm:text-sm leading-relaxed mt-1.5 px-1">{program.description}</p>
              </div>
              <div className="mt-5 pt-3.5 px-1 border-t border-dashed border-slate-200 flex items-center justify-between text-xs text-[#718096] font-medium">
                <span className="flex items-center gap-1.5"><i className="fa-regular fa-clock text-slate-400" />{program.duration}</span>
                <span className="flex items-center gap-1.5"><i className="fa-solid fa-book-bookmark text-tealBrand" />{program.courses}</span>
              </div>
            </article>
          ))}
        </div>
        <div id="trackDots" className="flex items-center justify-center gap-2.5 mt-12">
          {programPages.map((_, index) => (
            <button key={index} type="button" onClick={() => setProgramPage(index)} aria-label={`Halaman program ${index + 1}`} className={`track-dot h-2 rounded-full transition-all ${index === programPage ? 'w-6 bg-tealBrand' : 'w-2 bg-slate-300'}`} />
          ))}
        </div>
      </div>
    </section>
    {/* =====================================================================
   5. SECTION "FASILITAS & LINGKUNGAN BELAJAR"
    ====================================================================== */}
    <section id="fasilitas" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Left Column: Santri/Teacher + Organic Circle + Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[380px] sm:min-h-[440px]">
            {/* Soft Light Blue Organic Circle */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#BCE0F7] bottom-2 left-4 sm:left-10 pointer-events-none" />
            {/* Smiling Santri/Teacher Portrait */}
            <div className="relative z-10 w-64 sm:w-80 h-[360px] sm:h-[420px] rounded-b-full overflow-hidden flex items-end justify-center">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=85" alt="Guru dan santri belajar di ruang kelas pintar As-Sadid"  className="w-full h-full object-cover object-top rounded-t-3xl" />
            </div>
            {/* Floating Badge 1: Top-Left Digital Library / Lab Card */}
            <div className="animate-float absolute top-6 left-4 sm:left-10 z-20 bg-white p-3.5 rounded-2xl shadow-float -rotate-12">
              <div className="w-11 h-9 rounded-lg bg-tealBrand flex items-center justify-center text-white shadow-sm">
                <i className="fa-solid fa-flask-vial text-sm" />
              </div>
            </div>
            {/* Floating Badge 2: Middle-Right Digital Library Pill Card */}
            <div className="animate-float-delayed absolute top-28 -right-2 sm:right-2 z-20 bg-white px-4 py-3 rounded-2xl shadow-float flex items-center gap-3 w-52 sm:w-60">
              <div className="w-9 h-9 rounded-full bg-amberAccent-soft text-amberAccent flex items-center justify-center font-heading font-extrabold text-sm shrink-0">
                <i className="fa-solid fa-book-open" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-bold text-slate-800">Perpustakaan Digital</p>
                <p className="text-[10px] text-slate-500 mt-0.5">15.000+ E-Book &amp; Jurnal</p>
              </div>
            </div>
            {/* Floating Badge 3: Bottom-Right UTBK Average Score Chart Card */}
            <div className="animate-float absolute bottom-6 right-0 sm:right-4 z-20 bg-white p-4 rounded-2xl shadow-float w-52 sm:w-60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-700">Rata-rata Nilai UTBK</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">684.5</span>
              </div>
              <svg className="w-full h-14" viewBox="0 0 180 55" fill="none">
                <defs>
                  <linearGradient id="amberArea" x1={0} y1={0} x2={0} y2={1}>
                    <stop offset="0%" stopColor="#C9A227" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#C9A227" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <path d="M0 45 Q 30 22, 60 30 T 120 16 T 180 6 L 180 55 L 0 55 Z" fill="url(#amberArea)" />
                <path d="M0 45 Q 30 22, 60 30 T 120 16 T 180 6" stroke="#C9A227" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          {/* Right Column: Decorative Semi-Circle + Heading + Copy + CTA */}
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Decorative Pale Orange Semi-Circle Above Heading */}
            <div className="w-16 h-8 bg-amberAccent-soft rounded-b-full -rotate-12 mb-4" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.55rem] leading-[1.2] text-[#1C2B25]">
              Fasilitas terpadu untuk mendukung pembelajaran dan pembinaan santri
            </h2>
            <p className="text-[#718096] text-base leading-relaxed max-w-lg">
              Dilengkapi ruang belajar, perpustakaan, laboratorium pembelajaran, masjid, asrama, lapangan olahraga, dan sarana pembinaan yang mendukung aktivitas santri.
            </p>
            <div className="pt-2">
              <button onClick={() => setVideo({ title: 'Tur Virtual Fasilitas Pondok Modern As-Sadid', poster: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80' })} className="inline-block bg-tealBrand hover:bg-tealBrand-hover text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all">
                Lihat Fasilitas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =====================================================================
   6. SECTION "KISAH ALUMNI & PRESTASI"
    ====================================================================== */}
    <section id="prestasi" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slateSurface-alt relative overflow-hidden">
      {/* Decorative Semi-Circles */}
      <div className="hidden md:block absolute top-32 -left-10 w-24 h-24 bg-amberAccent rounded-full opacity-90 pointer-events-none" />
      <div className="hidden md:block absolute bottom-6 left-12 w-24 h-12 bg-amberAccent-soft rounded-t-full rotate-12 pointer-events-none" />
      <div className="hidden md:block absolute bottom-8 -right-6 w-16 h-16 bg-tealBrand rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1C2B25]">
            Cerita Prestasi Santri
          </h2>
          <button onClick={() => notify('Menampilkan seluruh daftar alumni berprestasi As-Sadid')} className="self-start sm:self-auto bg-tealBrand hover:bg-tealBrand-hover text-white text-sm font-semibold px-7 py-3 rounded-full shadow-sm transition-all">
            Lihat Semua
          </button>
        </div>
        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Large Featured Alumni Story Card */}
          <div className="lg:col-span-6 space-y-5 relative">
            {/* Small Teal Semi-Circle Accent Behind Corner */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-14 h-14 bg-tealBrand rounded-br-3xl rounded-tl-full z-0" />
            <div className="relative z-10 group rounded-3xl overflow-hidden shadow-card bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img id="featuredStoryImg" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85" alt="Ahmad Fauzan" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
                <button id="featuredStoryPlayBtn" onClick={() => notify('Memutar kisah alumni utama.')} aria-label="Putar kisah alumni utama" className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/95 text-amberAccent shadow-float flex items-center justify-center hover:scale-110 transition-transform">
                  <i className="fa-solid fa-play text-lg ml-1" />
                </button>
              </div>
            </div>
            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 id="featuredStoryName" className="font-heading font-bold text-xl text-[#1C2B25]">
                  Ahmad Fauzan
                </h3>
                <span id="featuredStoryBadge" className="text-xs font-semibold px-3 py-1 rounded-full bg-tealBrand-light text-tealBrand">
                  Juara Olimpiade Sains Kabupaten
                </span>
              </div>
              <p id="featuredStoryQuote" className="text-[#718096] text-sm sm:text-base leading-relaxed mt-2.5">
                "Pembinaan intensif di klub riset dan laboratorium informatika As-Sadid membekali saya strategi pemecahan masalah hingga meraih Medali Emas Olimpiade Sains dan lolos seleksi masuk Teknologi Informasi."
              </p>
            </div>
          </div>
          {/* Right Stacked List of 3 Horizontal Alumni Story Cards */}
          <div className="lg:col-span-6 space-y-4" id="storyListContainer">
            {/* Rendered & interactive via JavaScript */}
          </div>
        </div>
      </div>
    </section>
    {/* =====================================================================
   7. SECTION "PROGRAM WAKAF, SEDEKAH & INFAQ"
    ====================================================================== */}
    <section id="wakaf" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F1EBDA]/45">
      <div className="hidden md:block absolute top-16 left-10 w-20 h-20 bg-amberAccent rounded-full opacity-90 pointer-events-none" />
      <div className="hidden md:block absolute bottom-16 right-8 w-24 h-24 bg-tealBrand rounded-full opacity-90 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-tealBrand text-sm font-semibold uppercase tracking-widest">Berbagi Kebaikan</p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight text-[#1C2B25] mt-2">
            Program Wakaf, Sedekah, dan Infaq
          </h2>
          <p className="text-[#718096] text-sm sm:text-base mt-4">
            Bersama-sama mendukung pendidikan dan pembinaan santri melalui amal jariyah yang amanah, transparan, dan berkelanjutan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <article className="bg-white rounded-3xl p-7 shadow-card border border-[#E6C766]/70 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-tealBrand text-white flex items-center justify-center mb-5">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[1.8]"><path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M5 20v-7h14v7M4 13l8-7 8 7M8 20v-4h3v4m2 0v-4h3v4M8 11h8M12 6V3m-2 3h4" /></svg>
            </div>
            <h3 className="font-heading font-bold text-lg text-[#1C2B25]">Wakaf Pendidikan</h3>
            <p className="text-[#718096] text-sm leading-relaxed mt-3">
              Dukung pembangunan dan pemeliharaan ruang belajar, masjid, asrama, serta fasilitas pendidikan untuk generasi mendatang.
            </p>
            <button type="button" onClick={() => notify('Informasi Wakaf Pendidikan akan segera tersedia.')} className="mt-5 text-tealBrand text-sm font-semibold hover:underline">
              Pelajari Program →
            </button>
          </article>
          <article className="bg-white rounded-3xl p-7 shadow-card border border-[#E6C766]/70 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-amberAccent text-white flex items-center justify-center mb-5">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[1.8]"><path strokeLinecap="round" strokeLinejoin="round" d="M20.5 12.5 13 20l-3.5-3.5m-1.5-7A3.5 3.5 0 1 1 4.5 14L12 20l7.5-6A3.5 3.5 0 1 0 12 9.5 3.5 3.5 0 1 0 4.5 10" /></svg>
            </div>
            <h3 className="font-heading font-bold text-lg text-[#1C2B25]">Sedekah Santri</h3>
            <p className="text-[#718096] text-sm leading-relaxed mt-3">
              Ringankan kebutuhan pendidikan dan keseharian santri agar setiap anak dapat belajar, bertumbuh, dan berprestasi.
            </p>
            <button type="button" onClick={() => notify('Informasi Sedekah Santri akan segera tersedia.')} className="mt-5 text-tealBrand text-sm font-semibold hover:underline">
              Pelajari Program →
            </button>
          </article>
          <article className="bg-white rounded-3xl p-7 shadow-card border border-[#E6C766]/70 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-tealBrand text-white flex items-center justify-center mb-5">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[1.8]"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3 19 6v5c0 4.6-2.9 8.2-7 10-4.1-1.8-7-5.4-7-10V6l7-3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5a3 3 0 1 1 6 0M8 17c.8-1.5 2.1-2.2 4-2.2s3.2.7 4 2.2" /></svg>
            </div>
            <h3 className="font-heading font-bold text-lg text-[#1C2B25]">Wali Asuh</h3>
            <p className="text-[#718096] text-sm leading-relaxed mt-3">
              Menjadi pendamping kebaikan bagi santri melalui dukungan pendidikan, kebutuhan harian, dan pembinaan agar mereka tumbuh dengan baik.
            </p>
            <button type="button" onClick={() => notify('Informasi Program Wali Asuh akan segera tersedia.')} className="mt-5 text-tealBrand text-sm font-semibold hover:underline">
              Pelajari Program →
            </button>
          </article>
        </div>
        <div className="text-center mt-10">
          <button type="button" onClick={() => notify('Terima kasih atas niat baik Anda untuk mendukung As-Sadid.')} className="bg-tealBrand hover:bg-tealBrand-hover text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all">
            Dukung Program Kebaikan
          </button>
        </div>
      </div>
    </section>
    {/* =====================================================================
   8. SECTION "KATA ORANG TUA & SISWA"
    ====================================================================== */}
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Dark Teal Semi-Circle Top-Left & Pale Orange Semi-Circle Top-Right */}
      <div className="hidden md:block absolute top-14 left-1/4 -translate-x-24 w-24 h-12 bg-tealBrand rounded-t-full -rotate-45 pointer-events-none" />
      <div className="hidden md:block absolute top-28 right-1/4 translate-x-16 w-14 h-7 bg-amberAccent-soft rounded-t-full rotate-45 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight text-[#1C2B25]">
            Apa kata Orang Tua dan Alumni tentang As-Sadid
          </h2>
        </div>
        {/* 3-Column Testimonial Cards */}
        <div id="testimonialsGrid" className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* Populated by JS */}
        </div>
        {/* Testimonial Pagination Dots */}
        <div id="testimonialDots" className="flex items-center justify-center gap-2.5 mt-12">
          <button onClick={() => notify('Testimoni halaman 0 dipilih.')} aria-label="Halaman Testimoni 1" className="testi-dot w-6 h-2 rounded-full bg-tealBrand transition-all" />
          <button onClick={() => notify('Testimoni halaman 1 dipilih.')} aria-label="Halaman Testimoni 2" className="testi-dot w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-all" />
        </div>
      </div>
    </section>
    {/* =====================================================================
   8. SECTION "INFORMASI PENERIMAAN SANTRI & KEGIATAN PONDOK"
    ====================================================================== */}
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-tealBrand rounded-[2rem] sm:rounded-[2.5rem] px-6 sm:px-14 py-14 sm:py-16 relative overflow-hidden text-center shadow-soft">
        {/* Subtle Curved Wave Overlays */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full border-[28px] border-white/5 pointer-events-none" />
        <div className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full border-[32px] border-white/5 pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-40 h-40 rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Dapatkan informasi penerimaan santri dan kegiatan As-Sadid
          </h2>
          <p className="text-teal-100/90 text-sm sm:text-base">
            Masukkan alamat email Anda untuk menerima informasi penerimaan santri dan kegiatan pondok.
          </p>
          {/* Pill Input + Subscribe Button */}
          <form id="newsletterForm" className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input type="email" id="newsletterEmail" required placeholder="Masukkan alamat email Anda" className="w-full sm:flex-1 bg-white text-slate-800 placeholder-slate-400 text-sm px-6 py-3.5 rounded-full focus:outline-none focus:ring-4 focus:ring-amberAccent/40 shadow-sm" />
            <button type="submit" className="w-full sm:w-auto bg-amberAccent hover:bg-amberAccent-hover text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all shrink-0">
              Berlangganan
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
  {/* =====================================================================
 9. FOOTER
  ====================================================================== */}
  <footer className="bg-slateSurface-footer pt-16 pb-10 px-4 sm:px-6 lg:px-8 mt-14 border-t border-slate-100">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
        {/* Col 1: Brand, School Address & Social Icons */}
        <div className="lg:col-span-5 space-y-4">
          <a href="#beranda" className="inline-flex items-center gap-2.5">
            <img src="/assets/logo.png" alt="Logo Pondok Modern As-Sadid" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-[#1C2B25] leading-none">As-Sadid</span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-tealBrand mt-0.5">Pondok Modern</span>
            </div>
          </a>
          <p className="text-[#718096] text-sm leading-relaxed max-w-xs">
            Bareng, Kecamatan Sekar, Kabupaten Bojonegoro, Jawa Timur.<br />
            Membentuk generasi berilmu, berakhlak, dan berprestasi.
          </p>
          {/* Social Media Circular Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <a href="#instagram" onClick={(event) => { event.preventDefault(); notify('Membuka Instagram resmi @pondok.modern.assadid'); }} aria-label="Instagram" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-tealBrand hover:text-white hover:border-tealBrand transition-colors shadow-xs">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" /></svg>
            </a>
            <a href="#youtube" onClick={(event) => { event.preventDefault(); notify('Membuka kanal YouTube As-Sadid TV'); }} aria-label="YouTube" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-tealBrand hover:text-white hover:border-tealBrand transition-colors shadow-xs">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.55 12 3.55 12 3.55s-7.55 0-9.4.53A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.53 9.4.53 9.4.53s7.55 0 9.4-.53a3 3 0 0 0 2.1-2.12A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8ZM9.55 15.6V8.4L15.8 12l-6.25 3.6Z" /></svg>
            </a>
            <a href="#facebook" onClick={(event) => { event.preventDefault(); notify('Membuka halaman Facebook Pondok Modern As-Sadid'); }} aria-label="Facebook" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-tealBrand hover:text-white hover:border-tealBrand transition-colors shadow-xs">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M13.5 22v-8h2.75l.4-3h-3.15V9.1c0-.87.24-1.47 1.5-1.47h1.8V4.95c-.31-.04-1.38-.13-2.62-.13-2.59 0-4.36 1.58-4.36 4.48V11H7v3h2.82v8h3.68Z" /></svg>
            </a>
          </div>
        </div>
        {/* Col 2: Tentang Pondok */}
        <div className="lg:col-span-2 space-y-3.5">
          <h4 className="font-heading font-bold text-sm text-[#1C2B25]">Tentang Pondok</h4>
          <ul className="space-y-2.5 text-sm text-[#718096]">
            <li><a href="#beranda" className="hover:text-tealBrand transition-colors">Profil Pondok</a></li>
            <li><a href="#fasilitas" className="hover:text-tealBrand transition-colors">Visi dan Misi</a></li>
            <li><a href="#fasilitas" className="hover:text-tealBrand transition-colors">Pendidik dan Pengasuh</a></li>
            <li><a href="#prestasi" className="hover:text-tealBrand transition-colors">Prestasi</a></li>
          </ul>
        </div>
        {/* Col 3: Pendidikan */}
        <div className="lg:col-span-3 space-y-3.5">
          <h4 className="font-heading font-bold text-sm text-[#1C2B25]">Pendidikan</h4>
          <ul className="space-y-2.5 text-sm text-[#718096]">
            <li><a href="#jurusan" className="hover:text-tealBrand transition-colors">Kalender Pendidikan</a></li>
            <li><a href="#jurusan" className="hover:text-tealBrand transition-colors">Kegiatan Santri</a></li>
            <li><a href="#" data-legacy-click="event.preventDefault(); openAuthModal('Penerimaan Santri 2026/2027')" className="hover:text-tealBrand transition-colors">Penerimaan Santri</a></li>
            <li><a href="#prestasi" className="hover:text-tealBrand transition-colors">Berita dan Kegiatan</a></li>
          </ul>
        </div>
        {/* Col 4: Kontak */}
        <div className="lg:col-span-2 space-y-3.5">
          <h4 className="font-heading font-bold text-sm text-[#1C2B25]">Kontak</h4>
          <ul className="space-y-2.5 text-sm text-[#718096]">
            <li><a href="#newsletterForm" className="hover:text-tealBrand transition-colors">Hubungi Kami</a></li>
            <li><a href="#" data-legacy-click="event.preventDefault(); openAuthModal('Portal Santri')" className="hover:text-tealBrand transition-colors">Layanan Administrasi</a></li>
            <li><a href="#newsletterForm" className="hover:text-tealBrand transition-colors">Lokasi Pondok</a></li>
            <li><a href="#newsletterForm" className="hover:text-tealBrand transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
      {/* Bottom Divider & Copyright Bar */}
      <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718096]">
        <p>Hak Cipta © 2026 Pondok Modern As-Sadid. Seluruh hak cipta dilindungi.</p>
        <p className="font-medium text-slate-600">Dikelola oleh <span className="font-bold text-[#1C2B25]">Tim IT As-Sadid</span></p>
      </div>
    </div>
  </footer>
  {/* =====================================================================
 INTERACTIVE MODALS & TOAST NOTIFICATION
  ====================================================================== */}
  {/* Profil Pondok / Program Preview Modal */}
  {video && <div id="videoModal" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4" onClick={() => setVideo(null)}>
    <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl transform transition-all" onClick={(event) => event.stopPropagation()}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <h3 id="videoModalTitle" className="font-heading font-bold text-base sm:text-lg text-slate-800">{video.title}</h3>
        <button onClick={() => setVideo(null)} aria-label="Tutup Modal Video" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600">
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden">
        <img id="videoModalPoster" src={video.poster} alt="Pratinjau Video Pondok" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 bg-black/40">
          <div className="w-16 h-16 rounded-full bg-amberAccent text-white flex items-center justify-center shadow-lg mb-3 animate-pulse">
            <i className="fa-solid fa-play text-xl ml-1" />
          </div>
          <p className="font-heading font-bold text-lg">Tur Virtual dan Kegiatan Santri As-Sadid</p>
          <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-md">
            Saksikan suasana pembelajaran interaktif di ruang belajar, masjid, asrama, dan kegiatan santri kami.
          </p>
        </div>
      </div>
    </div>
  </div>}
  {/* Auth / Penerimaan Santri Registration Modal */}
  {authMode && <div id="authModal" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4" onClick={() => setAuthMode(null)}>
    <div className="bg-white rounded-3xl max-w-md w-full p-7 shadow-2xl relative" onClick={(event) => event.stopPropagation()}>
      <button onClick={() => setAuthMode(null)} aria-label="Tutup Modal Pendaftaran" className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600">
        <i className="fa-solid fa-xmark" />
      </button>
      <h3 id="authModalHeading" className="font-heading font-extrabold text-2xl text-[#1C2B25]">{authMode}</h3>
      <p id="authModalSub" className="text-sm text-[#718096] mt-1">{authMode === 'Portal Santri' ? 'Masuk menggunakan NIS atau email pondok untuk mengakses e-Rapor dan materi kelas.' : 'Lengkapi data awal calon santri untuk mendapatkan akun seleksi Penerimaan Santri Pondok Modern As-Sadid.'}</p>
      <form onSubmit={submitAuth} className="space-y-4 mt-6">
        {authMode !== 'Portal Santri' && <div id="ppdbNameField">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nama Lengkap Calon Santri</label>
          <input type="text" id="santriNameInput" placeholder="Contoh: Muhammad Rizky Pratama" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-tealBrand" />
        </div>}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Alamat Email / NIS</label>
          <input type="text" required placeholder="calon.santri@assadid.sch.id" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-tealBrand" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Kata Sandi</label>
          <input type="password" required placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-tealBrand" />
        </div>
        <button type="submit" id="authSubmitBtn" className="w-full bg-tealBrand hover:bg-tealBrand-hover text-white font-semibold py-3 rounded-full text-sm shadow-md transition-all">
          {authMode === 'Portal Santri' ? 'Masuk ke Portal' : 'Lanjutkan Pendaftaran'}
        </button>
      </form>
    </div>
  </div>}
  {/* Floating Toast Notification */}
  <div id="toast" className="fixed bottom-6 right-6 z-50 bg-[#1C2B25] text-white text-sm font-medium px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3">
    <span className="w-6 h-6 rounded-full bg-tealBrand text-white flex items-center justify-center text-xs shrink-0"><i className="fa-solid fa-check" /></span>
    <span id="toastMessage">{toast || 'Permintaan berhasil diproses!'}</span>
  </div>
</div>
  );
}


