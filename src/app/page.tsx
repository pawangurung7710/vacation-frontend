import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FeaturedTreks from "@/components/FeaturedTreks";
import ValueProp from "@/components/ValueProp";
import SeasonalAndProcess from "@/components/SeasonalAndProcess";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustStrip />
      <FeaturedTreks />
      <ValueProp />
      <SeasonalAndProcess />

      {/* Spacer for next Phase 4 sections */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-96 rounded-3xl bg-white border-2 border-dashed border-border-subtle flex items-center justify-center">
          <p className="text-primary-text/40 font-medium tracking-widest uppercase text-xs">Final sections (Stories, Deals, Signup, Footer) coming in Phase 4...</p>
        </div>
      </div>
    </main>
  );
}
