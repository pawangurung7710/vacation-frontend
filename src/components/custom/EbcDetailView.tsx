"use client";

import React from "react";
import { TrekData } from "@/types/trek";
import EntityHero from "./EntityHero";
import AltitudeChart from "./AltitudeChart";
import CostBreakdown from "./CostBreakdown";
import { generateTrekSchema } from "@/utils/schemaGenerator";
import { FileText, Navigation, ShieldAlert, Thermometer, Video, Backpack, Star, MessageCircle, UserCheck } from "lucide-react";
import dynamic from 'next/dynamic';
import RelatedTreks from "../RelatedTreks";
import TrekInquiryForm from "../TrekInquiryForm";
import TrekOverview from "../TrekOverview";
import StickyInquiryCard from "../StickyInquiryCard";

// Lazy load the Altitude chart as it uses heavy D3/Recharts libraries
const LazyAltitudeChart = dynamic(() => import('./AltitudeChart'), { 
  ssr: false, 
  loading: () => <div className="h-[300px] w-full animate-pulse bg-slate-100 rounded-2xl"></div> 
});

interface EbcDetailViewProps {
  trek: TrekData;
}

export default function EbcDetailView({ trek }: EbcDetailViewProps) {
  // Generate JSON-LD schema array
  const jsonLdSchema = generateTrekSchema(trek);

  return (
    <main className="min-h-screen bg-background">
      {/* 1. Schema Injection (Invisible but CRITICAL for SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* 2. Hero Section */}
      <EntityHero trek={trek} />

      {/* RESTORED NEGATIVE MARGIN (-mt-10 md:-mt-20) FOR PREMIUM OVERLAP FEEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-20 relative z-20 pb-20">
        
        {/* 3. Sticky Table of Contents (Internal Anchor Linking Strategy) */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border border-border-subtle rounded-2xl shadow-sm py-4 px-6 mb-12" aria-label="Page Table of Contents">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-bold uppercase tracking-wider text-primary-text/70">
            <li><a href="#overview" className="hover:text-[#F59E0B] transition-colors">Overview</a></li>
            <li><a href="#itinerary" className="hover:text-[#F59E0B] transition-colors">Itinerary</a></li>
            <li><a href="#altitude-chart" className="hover:text-[#F59E0B] transition-colors">Altitude Profile</a></li>
            <li><a href="#cost-breakdown" className="hover:text-[#F59E0B] transition-colors">Cost Breakdown</a></li>
            <li><a href="#complexity-moat" className="hover:text-[#F59E0B] transition-colors">Logistics & Safety</a></li>
          </ul>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Main Left Column */}
          <div className="flex-1 space-y-16">
            
            {/* RESTORED TREK OVERVIEW & HIGHLIGHTS */}
            <section id="overview" className="scroll-mt-24">
              <TrekOverview 
                overview={trek.longDescription} 
                highlights={trek.highlights} 
              />
            </section>

            {/* ITINERARY */}
            <section id="itinerary" className="scroll-mt-24">
              <h2 className="text-3xl font-serif font-bold text-primary-text mb-6 flex items-center gap-2">
                <Navigation className="text-[#F59E0B]" /> Day-by-Day Itinerary
              </h2>
              <div className="space-y-6">
                {trek.itinerary.map((day) => (
                  <div key={day.day} className="bg-white p-6 rounded-2xl shadow-sm border border-border-subtle hover:border-[#1E3A5F]/20 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-border-subtle pb-4">
                      <h3 className="text-xl font-bold text-[#1E3A5F]">Day {day.day}: {day.title}</h3>
                      <span className="text-sm font-semibold bg-[#F8FAFC] px-3 py-1 rounded-full text-primary-text/70 mt-2 md:mt-0">
                        {day.altitude}
                      </span>
                    </div>
                    <p className="text-primary-text/80 leading-relaxed mb-4">{day.experienceNote}</p>
                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-primary-text/60">
                      <span>🚶 {day.distance} ({day.walkingHours})</span>
                      <span>🛏️ {day.accommodation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ALTITUDE CHART */}
            <section id="altitude-chart" className="scroll-mt-24">
              <LazyAltitudeChart itinerary={trek.itinerary} />
            </section>

            {/* COST BREAKDOWN */}
            <CostBreakdown 
              included={trek.costBreakdown.included} 
              excluded={trek.costBreakdown.excluded} 
              estimateBreakdown={trek.costBreakdown.estimateBreakdown}
              totalCostUSD={trek.totalCostUSD}
            />

            {/* COMPLEXITY MOAT: Helicopter, Packing, Altitude */}
            <section id="complexity-moat" className="scroll-mt-24 space-y-12">
              <h2 className="text-3xl font-serif font-bold text-primary-text mb-6">Essential Logistics & Safety Protocols</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Helicopter */}
                <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                    <ShieldAlert className="text-red-600" /> Helicopter Evacuation
                  </h3>
                  <p className="text-red-800/80 text-sm mb-4">{trek.helicopterEvacuation.details}</p>
                  <p className="text-red-900 font-bold">Estimated Cost: {trek.helicopterEvacuation.costRangeUSD}</p>
                </div>

                {/* Altitude Sickness */}
                <div className="bg-[#F8FAFC] border border-border-subtle p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Activity className="text-[#1E3A5F]" /> AMS Prevention
                  </h3>
                  <ul className="list-disc list-inside text-primary-text/80 text-sm space-y-2 mb-4">
                    {trek.altitudeSicknessGuide.prevention.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-primary-text/60 italic border-t border-border-subtle pt-3">
                    Protocol: {trek.altitudeSicknessGuide.policy}
                  </p>
                </div>
              </div>

              {/* Packing List */}
              <div className="bg-white border border-border-subtle p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-4 flex items-center gap-2">
                  <Backpack className="text-[#F59E0B]" /> Critical Packing List
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary-text mb-2">Must Have</h4>
                    <ul className="list-none space-y-1">
                      {trek.packingList.mustHave.map((item, idx) => (
                        <li key={idx} className="text-sm text-primary-text/80 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A5F]" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-text mb-2">Rentable in Kathmandu</h4>
                    <ul className="list-none space-y-1">
                      {trek.packingList.rentableInKathmandu.map((item, idx) => (
                        <li key={idx} className="text-sm text-primary-text/80 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* WEATHER GUIDE (Structured HTML Table for AI Extraction) */}
            <section id="weather" className="scroll-mt-24">
              <h2 className="text-3xl font-serif font-bold text-primary-text mb-6 flex items-center gap-2">
                <Thermometer className="text-[#F59E0B]" /> Monthly Weather Guide
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border-subtle">
                <table className="w-full text-left text-sm text-primary-text bg-white">
                  <thead className="bg-[#1E3A5F] text-white uppercase text-xs tracking-wider">
                    <tr>
                      <th scope="col" className="px-6 py-4">Month</th>
                      <th scope="col" className="px-6 py-4">Conditions</th>
                      <th scope="col" className="px-6 py-4">Day Temp</th>
                      <th scope="col" className="px-6 py-4">Night Temp</th>
                      <th scope="col" className="px-6 py-4">Suitability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                    {trek.weatherGuide.map((weather, idx) => (
                      <tr key={idx} className="hover:bg-[#F8FAFC]">
                        <td className="px-6 py-4 font-bold whitespace-nowrap">{weather.month}</td>
                        <td className="px-6 py-4">{weather.condition}</td>
                        <td className="px-6 py-4">{weather.tempDay}</td>
                        <td className="px-6 py-4">{weather.tempNight}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            weather.suitability === 'Best' ? 'bg-green-100 text-green-800' :
                            weather.suitability === 'Not Recommended' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {weather.suitability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* MULTIMEDIA SEO LAYER */}
            <section id="multimedia" className="scroll-mt-24 bg-black rounded-2xl overflow-hidden shadow-lg border border-[#1E3A5F]">
              <div className="p-6 bg-[#1E3A5F] text-white">
                <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
                  <Video className="text-[#F59E0B]" /> Experience The Trail (Video)
                </h2>
              </div>
              <div className="aspect-video bg-gray-900 w-full flex items-center justify-center relative">
                {/* Fallback mock for youtube iframe */}
                <div className="text-center">
                  <Video size={48} className="text-white/20 mx-auto mb-4" />
                  <p className="text-white/50">YouTube Embed: Everest Base Camp Real Experience</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <details className="cursor-pointer group">
                  <summary className="font-bold text-[#1E3A5F] flex items-center gap-2">
                    <FileText size={18} /> Read Full Video Transcript (SEO Optimized)
                  </summary>
                  <div className="mt-4 text-sm text-primary-text/70 leading-relaxed border-l-2 border-[#F59E0B] pl-4">
                    "Welcome to day one of the Everest Base Camp Trek. We just landed in Lukla at 2,860 meters. The air is already noticeably thinner. Our guide Pasang is coordinating the porters. Today is an easy 3-hour walk to Phakding, mostly downhill following the Dudh Koshi river..."
                  </div>
                </details>
              </div>
            </section>

            {/* VERIFIED REVIEWS CAROUSEL (TRUST TRIGGERS) */}
            <section id="reviews" className="scroll-mt-24 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-primary-text mb-6">Verified Trekkers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {trek.reviews.map((review, idx) => (
                  <div key={idx} className="bg-white border border-border-subtle p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-1 mb-3 text-[#F59E0B]">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-primary-text/80 italic mb-4">"{review.content}"</p>
                    <div className="text-sm font-bold text-[#1E3A5F]">{review.author}</div>
                    <div className="text-xs text-primary-text/50">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Sidebar (Conversion) - RESTORED ORIGINAL BEAUTIFUL CARD */}
          <div className="w-full lg:w-[380px] shrink-0">
             {/* We use 'as any' here because our strict TrekData has slightly different fields than their generic mock Trek type, but StickyInquiryCard only cares about trek.price */}
             <StickyInquiryCard trek={trek as any} />
          </div>

        </div>

        {/* RELATED TREKS (Internal Linking Strategy) */}
        <div className="mt-20 border-t border-border-subtle pt-12">
           <h2 className="text-3xl font-serif font-bold text-primary-text mb-8 text-center">Explore Similar Treks</h2>
           <RelatedTreks currentTrekId={trek.id} region={trek.region} />
        </div>
      </div>

      {/* MOBILE STICKY FOOTER CTA (Conversion Layer) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border-subtle p-4 z-50 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-primary-text/40 tracking-widest leading-none mb-1">Total Cost</span>
              <span className="text-xl font-bold text-[#1E3A5F] leading-none">${trek.totalCostUSD}</span>
          </div>
          <div className="flex space-x-2">
              <a
                  href="https://wa.me/9779801234567"
                  className="p-3 bg-[#25D366] text-white rounded-xl shadow-md active:scale-95 transition-transform flex items-center justify-center"
              >
                  <MessageCircle size={24} />
              </a>
              <button className="bg-[#F59E0B] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform">
                  Book Now
              </button>
          </div>
      </div>

    </main>
  );
}

// Helper icon component since lucide-react might complain if not passed properly
function Activity(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>; }
