import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import ProductionSection from "@/components/ProductionSection";
import Raagam from "@/components/Raagam";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <ProductionSection/>
      <WhyChoose/>
      <Raagam/>
      <Sponsors/>
      <Testimonials/>
    </>
  );
}
