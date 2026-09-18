import { Suspense } from "react";
import { brands } from "./data/brands";
import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import ComplianceBar from "@/components/ComplianceBar";
import AboutSection from "@/components/AboutSection";
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

      <section id="brands" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-black uppercase italic md:text-5xl">
              Top Marcas <span className="gold-text">Recomendadas</span>
            </h2>
            <p className="text-slate-400">
              Atualizado semanalmente com as melhores ofertas licenciadas em Portugal.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
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
      <AboutSection />
    </>
  );
}
