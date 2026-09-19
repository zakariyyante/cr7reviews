import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopDisclaimer from "@/components/TopDisclaimer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "AW-XXXXXXXXXX";
const CONVERSION_LABEL = process.env.NEXT_PUBLIC_CONVERSION_LABEL ?? "AW-XXXXXXXXXX/YYYYYYYY";

export const metadata: Metadata = {
  title: "CR7 Reviews | Melhores Plataformas de Jogos Online em Portugal 2026",
  description:
    "Descubra a seleção das plataformas mais confiáveis e divertidas para jogadores portugueses. Analisamos e classificamos as opções para sua segurança.",
  metadataBase: new URL("https://cr7reviews.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt" className={`${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#09090b] font-sans">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');

            function gtag_report_conversion(url) {
              gtag('event', 'conversion', {
                'send_to': '${CONVERSION_LABEL}',
                'value': 1.0,
                'currency': 'EUR'
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
        <div className="sticky top-0 z-50">
          <TopDisclaimer />
          <Header />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
