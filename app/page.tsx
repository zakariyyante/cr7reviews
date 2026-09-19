import { Suspense } from "react";
import { brands } from "./data/brands";
import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import ComplianceBar from "@/components/ComplianceBar";
import WhyChoose from "@/components/WhyChoose";
import AboutSection from "@/components/AboutSection";
import Faq from "@/components/Faq";
import TrustGuide from "@/components/TrustGuide";
import MobileModal from "@/components/MobileModal";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclidValue = typeof params.gclid === "string" ? params.gclid : undefined;

  return (
    <>
      <Suspense fallback={null}>
        <MobileModal brands={brands} />
      </Suspense>

      <Hero />

      <section id="brands" className="py-6 md:py-10">
        <div className="container mx-auto max-w-[1000px] px-4">
          <div className="flex flex-col gap-4">
            {brands.map((brand, index) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                index={index}
                gclidValue={gclidValue}
              />
            ))}
          </div>
        </div>
      </section>

      <ComplianceBar />
      <WhyChoose />
      <AboutSection />
      <Faq />
      <TrustGuide />
    </>
  );
}
