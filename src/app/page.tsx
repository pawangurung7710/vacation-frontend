import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FeaturedTreks from "@/components/FeaturedTreks";
import ValueProp from "@/components/ValueProp";
import SeasonalAndProcess from "@/components/SeasonalAndProcess";
import Inspiration from "@/components/Inspiration";
import SeasonalDeal from "@/components/SeasonalDeal";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustStrip />
      <FeaturedTreks />
      <ValueProp />
      <SeasonalAndProcess />
      <Inspiration />
      <SeasonalDeal />
      <Newsletter />
    </main>
  );
}
