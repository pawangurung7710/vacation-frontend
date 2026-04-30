"use client";

import React, { useRef, useState } from "react";
import { TrekData } from "@/types/trek";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import StickyInquiryCard from "@/components/StickyInquiryCard";
import AltitudeChart from "@/components/custom/AltitudeChart";

interface EbcCinematicViewProps {
  trekData: TrekData;
}

export default function EbcCinematicView({ trekData }: EbcCinematicViewProps) {
  // References for scroll tracking
  const containerRef = useRef<HTMLDivElement>(null);
  const scene1Ref = useRef<HTMLElement>(null);
  const scene3Ref = useRef<HTMLElement>(null);
  const scene5Ref = useRef<HTMLElement>(null);

  // Global Scroll Progress
  const { scrollYProgress: globalScroll } = useScroll();
  
  // Scene 1 Transitions
  const { scrollYProgress: scene1Scroll } = useScroll({
    target: scene1Ref,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scene1Scroll, [0.6, 1], [1, 0]);
  const heroScale = useTransform(scene1Scroll, [0, 1], [1.05, 1.15]); // slow drift
  const heroY = useTransform(scene1Scroll, [0.6, 1], [0, -50]);
  const overlayDark = useTransform(scene1Scroll, [0.6, 1], [0.4, 0.9]);

  // Scene 3 Progress (Journey)
  const { scrollYProgress: scene3Scroll } = useScroll({
    target: scene3Ref,
    offset: ["start center", "end center"]
  });
  const itineraryProgress = useSpring(scene3Scroll, { stiffness: 100, damping: 30 });

  const [activeDay, setActiveDay] = useState(1);

  // Scene 4 & 5 (Blackout & Payoff)
  const { scrollYProgress: scene5Scroll } = useScroll({
    target: scene5Ref,
    offset: ["start end", "center center"]
  });
  
  // Reward Fade In
  const rewardOpacity = useTransform(scene5Scroll, [0.4, 0.7], [0, 1]);
  const rewardTextOpacity = useTransform(scene5Scroll, [0.7, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-[#0F172A] selection:bg-[#006D77] selection:text-white font-sans overflow-x-hidden">
      
      {/* 2.1 PROGRESS INDICATOR */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-1 bg-[#006D77] z-[60] origin-left"
        style={{ scaleX: globalScroll }}
      />
      
      {/* SCENE 1: THE DREAM (Hero) */}
      <section ref={scene1Ref} className="relative h-[120vh] flex items-start justify-center bg-[#0F172A] sticky top-0 z-0">
        <motion.div 
          className="absolute inset-0 z-0 origin-center"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          {/* Fallback color if image is missing */}
          <div className="w-full h-[100vh] bg-slate-800 absolute inset-0"></div>
          <img 
            src="/images/treks/ebc/hero-base-camp.jpg" 
            alt="Everest Base Camp"
            className="w-full h-[100vh] object-cover relative z-10"
          />
        </motion.div>
        <motion.div 
          className="absolute top-0 w-full h-[100vh] bg-black z-10"
          style={{ opacity: overlayDark }}
        />
        
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-[35vh]"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-6 drop-shadow-2xl"
          >
            Everest Base Camp
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl md:text-3xl text-gray-200 font-light tracking-wide"
          >
            This is not just a trek.<br/> It&apos;s a journey to the roof of the world.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 0.6, y: 0 }}
             transition={{ duration: 0.8, delay: 2.5, repeat: Infinity, repeatType: "reverse" }}
             className="mt-20 flex justify-center"
          >
             <div className="w-[1px] h-16 bg-white" />
          </motion.div>
        </motion.div>
      </section>

      {/* SCENE 2: THE HOOK & REALITY */}
      <section className="relative z-10 bg-[#F8FAFC] py-32 rounded-t-[3rem] -mt-[20vh] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-16 relative">
            
            <div className="md:w-[55%]">
              <div className="sticky top-32">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold text-[#2C4A6A] mb-8 leading-tight tracking-tight"
                >
                  Exciting? Absolutely.<br/>
                  <span className="text-gray-400">A little intimidating? Also yes.</span>
                </motion.h2>
                
                <div className="prose prose-xl text-gray-600 space-y-8 font-light leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                  >
                    If you’re feeling a mix of adrenaline and anxiety as you plan this trip, you’re experiencing exactly what most future Everest Base Camp trekkers feel.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    The Everest Base Camp Trek is the world’s most iconic high-altitude trekking journey, but it rarely feels that way at the beginning. It starts quietly in Nepal’s Khumbu region—with the sound of boots on stone, the thin pull of altitude, and the first sight of prayer flags stretched across the sky.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    You do not come here only to see Everest. You come here to feel what it means to move toward it on foot.
                  </motion.p>
                </div>
              </div>
            </div>
            
            <div className="md:w-[45%] relative hidden md:block">
               <div className="sticky top-32 h-[80vh] flex items-center">
                 <div className="relative w-full">
                   <div className="absolute inset-0 bg-slate-300 rounded-2xl"></div>
                   <img 
                      src="/images/treks/ebc/suspension-bridge.jpg" 
                      alt="Hillary Suspension Bridge" 
                      className="rounded-2xl shadow-2xl object-cover h-[600px] w-full relative z-10"
                   />
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-2xl flex gap-8 border border-white z-20"
                   >
                     <div>
                       <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Max Altitude</p>
                       <p className="text-3xl font-bold text-[#006D77]">5,364m</p>
                     </div>
                     <div className="w-[1px] h-12 bg-gray-200"></div>
                     <div>
                       <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Duration</p>
                       <p className="text-3xl font-bold text-[#006D77]">{trekData.durationDays || 14} Days</p>
                     </div>
                   </motion.div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 3: THE JOURNEY BEGINS */}
      <section ref={scene3Ref} id="itinerary" className="relative z-10 bg-white py-32 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl font-bold text-[#2C4A6A] mb-6">The Journey</h2>
            <p className="text-xl text-gray-500 font-light">Each day on the mountain follows a simple rhythm shaped by altitude and terrain.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-16 relative">
            {/* Left: Scrolling Itinerary */}
            <div className="md:w-[55%] relative">
              {/* Progress Line */}
              <div className="absolute left-[27px] top-0 w-[2px] h-full bg-gray-100">
                <motion.div 
                  className="w-full bg-[#006D77] origin-top"
                  style={{ scaleY: itineraryProgress, height: "100%" }}
                />
              </div>

              <div className="space-y-32 py-10">
                {trekData.itinerary?.map((day) => (
                  <motion.div 
                    key={day.day}
                    onViewportEnter={() => setActiveDay(day.day)}
                    viewport={{ margin: "-40% 0px -40% 0px" }}
                    className={`relative pl-20 transition-opacity duration-500 ${activeDay === day.day ? 'opacity-100' : 'opacity-40'}`}
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`absolute left-[11px] top-1 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10 transition-colors duration-500
                        ${activeDay >= day.day ? 'bg-[#006D77] text-white' : 'bg-white text-gray-400 border-2 border-gray-200'}`}
                    >
                      {day.day}
                    </motion.div>

                    <h3 className="text-3xl font-bold text-[#2C4A6A] mb-4">Day {day.day}: {day.title}</h3>
                    
                    <div className="prose prose-lg text-gray-600 font-light mb-6">
                      <p>{day.experienceNote || (day as any).description}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full font-medium border border-gray-100">
                        ⛰️ {day.altitudeMeters || day.altitude}m
                      </span>
                      <span className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full font-medium border border-gray-100">
                        ⏱️ {day.walkingHours || (day as any).hours}
                      </span>
                      <span className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full font-medium border border-gray-100">
                        🛏️ {day.accommodation || 'Teahouse'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Sticky Chart */}
            <div className="md:w-[45%] hidden md:block">
              <div className="sticky top-32">
                <AltitudeChart itinerary={trekData.itinerary} />
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-gray-100">
                   <p className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-2">Current Location</p>
                   <p className="text-xl font-bold text-[#2C4A6A] mb-4">
                     {trekData.itinerary?.find(d => d.day === activeDay)?.title.split("to").pop() || "Kathmandu"}
                   </p>
                   <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                     <motion.div 
                       className="h-full bg-[#006D77]"
                       animate={{ width: `${(activeDay / (trekData.itinerary?.length || 14)) * 100}%` }}
                       transition={{ type: "spring", stiffness: 50 }}
                     />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 4: THE CHALLENGE */}
      <section className="relative z-10 bg-[#1E293B] text-white py-40 transition-colors duration-1000">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-bold mb-6 text-white tracking-tight">The Reality of Altitude</h2>
            <p className="text-2xl font-light text-slate-300 max-w-3xl mx-auto">
              At 4,940 meters, the air holds barely half the oxygen you&apos;re used to. Your steps slow. Your lungs burn. This is where preparation meets reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-rose-500/20 text-rose-400 rounded-full flex items-center justify-center text-xl mb-6">🥩</div>
              <h3 className="text-2xl font-bold mb-4">The &quot;Meat Rule&quot;</h3>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                We enforce a strict vegetarian policy on the mountain. Meat is carried up by porters without refrigeration. One bad meal can end your trek. Dal Bhat and hot soups will be your fuel.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xl mb-6">🚁</div>
              <h3 className="text-2xl font-bold mb-4">Helicopter Evacuation</h3>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                If Acute Mountain Sickness (AMS) strikes severely, time is the only cure. We maintain a 24/7 standby coordination team in Kathmandu for immediate aerial evacuation if your guide deems it necessary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCENE 4.5: THE BLACKOUT (Beat) */}
      <div className="h-[50vh] bg-black relative z-10" />

      {/* SCENE 5: THE REWARD (Payoff) */}
      <section ref={scene5Ref} className="relative h-[200vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <motion.div 
             className="absolute inset-0 z-0"
             style={{ opacity: rewardOpacity }}
          >
             <div className="w-full h-full bg-slate-900 absolute inset-0"></div>
             <img 
                src="/images/treks/ebc/base-camp-arrival.jpg" 
                alt="Everest Base Camp Arrival"
                className="w-full h-full object-cover scale-105 relative z-10"
             />
             <div className="absolute inset-0 bg-black/40 z-20" />
          </motion.div>

          <div className="relative z-30 text-center px-4 w-full">
            <motion.h2 
              style={{ opacity: rewardTextOpacity }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 drop-shadow-2xl"
            >
              You made it.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-200px" }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className="text-2xl md:text-4xl text-amber-400 font-light tracking-wide drop-shadow-lg">
                Everest Base Camp — 5,364m
              </p>
              <p className="text-xl text-white/80 mt-4 font-light">
                The roof of the world, beneath your feet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCENE 6: THE DECISION */}
      <section id="book" className="relative z-20 bg-[#F8FAFC] py-32 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <p className="text-3xl text-[#2C4A6A] font-serif italic mb-4">Now the question is...</p>
            <h2 className="text-5xl font-bold text-[#2C4A6A] tracking-tight">Will you experience this yourself?</h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="prose prose-xl text-gray-600 font-light leading-relaxed mb-10"
              >
                <p>
                  With us, you do not simply book an itinerary. You enter the Khumbu with people who know its rhythms, respect its spiritual geography, and recognize that for you, this may be a once-in-a-lifetime journey.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-[#006D77]/10 text-[#006D77] rounded-xl flex items-center justify-center text-xl">🤝</div>
                  <div>
                    <h4 className="font-bold text-[#2C4A6A]">100% Guaranteed Departures</h4>
                    <p className="text-sm text-gray-500">Your trip will never be cancelled.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-[#006D77]/10 text-[#006D77] rounded-xl flex items-center justify-center text-xl">👥</div>
                  <div>
                    <h4 className="font-bold text-[#2C4A6A]">Small Groups</h4>
                    <p className="text-sm text-gray-500">Max 12 people. Personalized attention.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-[#006D77]/10 text-[#006D77] rounded-xl flex items-center justify-center text-xl">💎</div>
                  <div>
                    <h4 className="font-bold text-[#2C4A6A]">No Hidden Fees</h4>
                    <p className="text-sm text-gray-500">What you see is what you pay.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 w-full">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="sticky top-32"
               >
                 <StickyInquiryCard trek={trekData as any} />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
