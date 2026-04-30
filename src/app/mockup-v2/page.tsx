"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Search, Globe, Menu, User, Heart, Star, ChevronRight, ChevronLeft, Home, Map, Bell } from 'lucide-react';

// ── Valid images only (skip broken 29-byte files and missing paths) ──
const VALID_IMAGES = [
  '/images/everest-base-camp.jpg',
  '/images/annapurna-circuit.jpg',
  '/images/manaslu-circuit.jpg',
  '/images/annapurna-base-camp.jpg',
  '/images/gokyo-lakes.jpg',
  '/images/upper-dolpo.jpg',
  '/images/hero-bg.jpg',
  '/images/seasonal-deal.jpg',
];

const getImage = (index: number) => VALID_IMAGES[index % VALID_IMAGES.length];

// ── Generate 30 fake listings ──
const generateListings = () => {
  const regions = ['Everest', 'Annapurna', 'Manaslu', 'Langtang', 'Mustang', 'Dolpo'];
  const distances = ['118 kilometers away', '142 kilometers away', '95 kilometers away', '210 kilometers away', '168 kilometers away', '87 kilometers away'];
  const prices = [1250, 1350, 1050, 1450, 950, 750, 1850, 1350, 2450];

  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    image: getImage(i),
    title: `Apartment in ${regions[i % regions.length]}, Ne...`,
    distance: distances[i % distances.length],
    dates: `Oct ${12 + (i % 5)} – ${17 + (i % 5)}`,
    price: prices[i % prices.length],
    rating: (4.79 + (i % 20) / 100).toFixed(2),
    isGuestFavorite: i % 4 === 0,
  }));
};

const allListings = generateListings();

// ── Listing Card ──
const ListingCard = ({ listing }: { listing: (typeof allListings)[0] }) => (
  <div className="flex flex-col group cursor-pointer min-w-[200px] flex-1 snap-start shrink-0">
    <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-3 bg-[#f0f0f0]">
      <Image
        src={listing.image}
        alt={listing.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 215px"
        className="object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
      />
      <button className="absolute top-3 right-3 z-10">
        <Heart className="w-6 h-6" fill="rgba(0,0,0,0.5)" stroke="white" strokeWidth={2} />
      </button>
      {listing.isGuestFavorite && (
        <div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.18)] z-10">
          <span className="text-[13px] font-semibold text-[#222]">Guest favorite</span>
        </div>
      )}
    </div>
    <div className="flex justify-between items-start">
      <span className="font-medium text-[15px] text-[#222] truncate pr-3">{listing.title}</span>
      <div className="flex items-center gap-1 shrink-0">
        <Star className="w-3.5 h-3.5 fill-[#222] text-[#222]" />
        <span className="text-[14px]">{listing.rating}</span>
      </div>
    </div>
    <span className="text-[15px] text-[#717171] mt-0.5 truncate">{listing.distance}</span>
    <span className="text-[15px] text-[#717171] truncate">{listing.dates}</span>
    <div className="mt-1">
      <span className="font-semibold text-[15px] text-[#222]">${listing.price}</span>
      <span className="text-[15px] text-[#222]"> night</span>
    </div>
  </div>
);

// ── Carousel Section ──
const CarouselSection = ({ title, listings }: { title: string; listings: (typeof allListings) }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[22px] font-semibold text-[#222] flex items-center gap-2 cursor-pointer group">
          {title}
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </h2>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center transition-opacity ${canScrollLeft ? 'opacity-100 hover:shadow-sm' : 'opacity-30 cursor-default'}`}
          >
            <ChevronLeft className="w-3.5 h-3.5 text-[#222]" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center transition-opacity ${canScrollRight ? 'opacity-100 hover:shadow-sm' : 'opacity-30 cursor-default'}`}
          >
            <ChevronRight className="w-3.5 h-3.5 text-[#222]" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        {listings.map((listing, idx) => (
          <ListingCard key={`${listing.id}-${idx}`} listing={listing} />
        ))}
      </div>
    </div>
  );
};

// ══════════════════════════════════════
// MAIN PAGE
// ══════════════════════════════════════
export default function MockupV2Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#222] font-sans">

      {/* ── HEADER ── */}
      <header className="bg-white sticky top-0 z-50 border-b border-[#ddd]">

        {/* Top bar */}
        <div className="mx-auto px-6 md:px-10 xl:px-20 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center text-[#ff385c] shrink-0">
            <svg viewBox="0 0 1000 1000" aria-hidden="true" className="h-8 w-8 fill-current">
              <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-55 0-98 21-128.1 64-51 75.1-29 191.1 90 340.2-72 80-156.1 139-241.1 102-44-19-76-58-83-105-9-61 15-127 74-192 42-46 93-84 152-114 43.1-22 88.1-39 135.1-50 47-11 95-17 143.1-17h1c48 0 96 6 143.1 17 47 11 92 28 135.1 50 59 30 110 68 152 114 59 65 83 131 74 192z"></path>
            </svg>
            <span className="ml-2 text-[22px] font-bold tracking-tight hidden lg:block">airbnb</span>
          </div>

          {/* Center — both elements always rendered, toggled via opacity/transform */}
          <div className="flex-1 flex justify-center relative">

            {/* Tri-Tab (visible at top) */}
            <div
              className="flex items-center gap-8 transition-all duration-300 ease-in-out"
              style={{
                opacity: isScrolled ? 0 : 1,
                transform: isScrolled ? 'translateY(-8px) scale(0.95)' : 'translateY(0) scale(1)',
                pointerEvents: isScrolled ? 'none' : 'auto',
                position: isScrolled ? 'absolute' : 'relative',
              }}
            >
              <button className="flex flex-col items-center gap-1.5 pb-1 border-b-2 border-[#222]">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  <span className="text-[16px] font-medium">Homes</span>
                </div>
              </button>
              <button className="flex flex-col items-center gap-1.5 pb-1 border-b-2 border-transparent opacity-60 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 relative">
                  <Map className="w-5 h-5" />
                  <span className="text-[16px] font-medium">Experiences</span>
                  <span className="absolute -top-2.5 -right-7 bg-[#222] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">NEW</span>
                </div>
              </button>
              <button className="flex flex-col items-center gap-1.5 pb-1 border-b-2 border-transparent opacity-60 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 relative">
                  <Bell className="w-5 h-5" />
                  <span className="text-[16px] font-medium">Services</span>
                  <span className="absolute -top-2.5 -right-7 bg-[#222] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">NEW</span>
                </div>
              </button>
            </div>

            {/* Mini Search Pill (visible when scrolled) */}
            <div
              className="flex items-center bg-white border border-[#ddd] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out"
              style={{
                opacity: isScrolled ? 1 : 0,
                transform: isScrolled ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
                pointerEvents: isScrolled ? 'auto' : 'none',
                position: isScrolled ? 'relative' : 'absolute',
              }}
            >
              <button className="text-[14px] font-semibold text-[#222] px-5 py-2.5 border-r border-[#ddd]">Anywhere</button>
              <button className="text-[14px] font-semibold text-[#222] px-5 py-2.5 border-r border-[#ddd]">Anytime</button>
              <button className="text-[14px] text-[#717171] px-4 py-1.5 flex items-center gap-3">
                <span>Add guests</span>
                <div className="bg-[#ff385c] text-white p-2 rounded-full">
                  <Search className="w-3.5 h-3.5" strokeWidth={3.5} />
                </div>
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1 shrink-0">
            <button className="text-[14px] font-medium px-4 py-2.5 hover:bg-[#f7f7f7] rounded-full transition-colors hidden lg:block">Become a host</button>
            <button className="p-3 hover:bg-[#f7f7f7] rounded-full transition-colors hidden sm:block">
              <Globe className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-3 border border-[#ddd] p-2 pl-3 rounded-full hover:shadow-md transition-shadow bg-white ml-1">
              <Menu className="w-4 h-4" />
              <div className="bg-[#717171] text-white rounded-full p-1.5">
                <User className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Big Search Pill — slides up/down with transform instead of height */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out border-t border-[#ebebeb]"
          style={{
            maxHeight: isScrolled ? '0px' : '100px',
            opacity: isScrolled ? 0 : 1,
            transform: isScrolled ? 'translateY(-20px)' : 'translateY(0)',
          }}
        >
          <div className="max-w-[850px] mx-auto px-4 py-4">
            <div className="bg-[#ebebeb] rounded-full flex items-center h-[66px] relative">

              <button className="flex-1 px-8 text-left bg-white rounded-full h-full flex flex-col justify-center shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_6px_rgba(0,0,0,0.04)] z-20 hover:bg-[#f7f7f7] transition-colors">
                <span className="text-[12px] font-extrabold text-[#222]">Where</span>
                <span className="text-[14px] text-[#717171]">Search destinations</span>
              </button>

              <button className="flex-1 px-8 text-left rounded-full h-full flex flex-col justify-center z-10 hover:bg-white hover:shadow-md transition-all relative">
                <span className="text-[12px] font-extrabold text-[#222]">When</span>
                <span className="text-[14px] text-[#717171]">Add dates</span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-[#ddd]"></div>
              </button>

              <div className="flex-[1.3] pl-8 pr-2 rounded-full h-full flex items-center justify-between z-10 hover:bg-white hover:shadow-md transition-all cursor-pointer">
                <div className="flex flex-col justify-center">
                  <span className="text-[12px] font-extrabold text-[#222]">Who</span>
                  <span className="text-[14px] text-[#717171]">Add guests</span>
                </div>
                <button className="bg-[#ff385c] hover:bg-[#d70466] h-12 w-12 rounded-full text-white flex items-center justify-center transition-colors">
                  <Search className="w-5 h-5" strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── CONTENT ── */}
      <main className="mx-auto px-6 md:px-10 lg:px-20 xl:px-[140px] py-10">
        <CarouselSection title="Popular homes in Seoul" listings={allListings.slice(0, 8)} />
        <CarouselSection title="Available next month in Tokyo" listings={allListings.slice(8, 16)} />
        <CarouselSection title="Stay in Melbourne" listings={allListings.slice(16, 24)} />
        <CarouselSection title="Weekend getaways" listings={allListings.slice(3, 11)} />
      </main>
    </div>
  );
}
