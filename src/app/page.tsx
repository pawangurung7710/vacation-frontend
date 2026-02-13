import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustStrip />

      {/* Spacer for other sections */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-96 rounded-3xl bg-background border-2 border-dashed border-border-subtle flex items-center justify-center">
          <p className="text-primary-text/40 font-medium">Other sections (Featured Treks, Value Prop, etc.) coming in next phases...</p>
        </div>
      </div>
    </main>
  );
}
