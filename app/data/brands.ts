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
    name: "Betano",
    logo: "/brands/betano.svg",
    bonus: "Bónus de boas-vindas até 200€ + Freebets",
    url: "https://www.betano.pt/?utm_source=cr7reviews&utm_medium=affiliate&clickid=",
    isMobile: true,
    votes: 6842,
  },
  {
    name: "Betclic",
    logo: "/brands/betclic.svg",
    bonus: "100% até 50€ no casino + apostas desportivas",
    url: "https://www.betclic.pt/?utm_source=cr7reviews&utm_medium=affiliate&subid=",
    isMobile: true,
    votes: 5310,
  },
  {
    name: "Bwin",
    logo: "/brands/bwin.svg",
    bonus: "100% até 200€ de bónus casino",
    url: "https://www.bwin.pt/?utm_source=cr7reviews&utm_medium=affiliate&clickid=",
    isMobile: true,
    votes: 4921,
  },
  {
    name: "Solverde",
    logo: "/brands/solverde.svg",
    bonus: "100 jogadas grátis + bónus até 100€",
    url: "https://www.solverde.pt/?utm_source=cr7reviews&utm_medium=affiliate&payload=",
    isMobile: true,
    votes: 3874,
  },
  {
    name: "ESC Online",
    logo: "/brands/esc-online.svg",
    bonus: "Bónus de boas-vindas até 250€",
    url: "https://www.estorilsolcasinos.pt/?utm_source=cr7reviews&utm_medium=affiliate&visit_id=",
    isMobile: false,
    votes: 2640,
  },
  {
    name: "Luckia",
    logo: "/brands/luckia.svg",
    bonus: "Oferta exclusiva até 100€ + cashback",
    url: "https://www.luckia.pt/?utm_source=cr7reviews&utm_medium=affiliate&clickid=",
    isMobile: true,
    votes: 1988,
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
