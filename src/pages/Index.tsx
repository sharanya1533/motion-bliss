import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Hero from "@/components/Hero";
import PhysicalWellness from "@/components/PhysicalWellness";
import MentalWellness from "@/components/MentalWellness";
import Programs from "@/components/Programs";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PhysicalWellness />
      <MentalWellness />
      <Programs />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
