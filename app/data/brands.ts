export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const brandSource = [
  {
    name: "NossaAposta",
    logo: "/brands/nossaaposta.png",
    bonus: "Ganhe Até €300 + 25 Giros Grátis!",
    url: "https://www.nossaaposta.pt/boas-vindas-campanha?PAR=532ga4924cidpidNossaAposta-SL2PT26affid2674&cid=",
    isMobile: true,
    votes: 6842,
  },
] as const;

export const brands: Brand[] = brandSource.map((brand, index) => ({
  id: slugify(brand.name),
  name: brand.name,
  logo: brand.logo,
  rating: Number((10 - index * 0.2).toFixed(1)),
  bonus: brand.bonus,
  url: brand.url,
  isMobile: brand.isMobile,
  votes: brand.votes,
}));
