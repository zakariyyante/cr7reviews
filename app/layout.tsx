import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "AW-XXXXXXXXXX";
const CONVERSION_LABEL = process.env.NEXT_PUBLIC_CONVERSION_LABEL ?? "AW-XXXXXXXXXX/YYYYYYYY";

export const metadata: Metadata = {
  title: "CR7 Reviews | Melhores Sites de Jogos em Portugal 2026",
  description:
    "Encontre os melhores sites de jogos em Portugal. Avaliações de especialistas, bónus exclusivos e operadores licenciados pelo SRIJ.",
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
    <html lang="pt" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col felt-texture">
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
