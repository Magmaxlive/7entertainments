import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import ProductionSection from "@/components/ProductionSection";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <ProductionSection/>
      <WhyChoose/>
    </>
  );
}
