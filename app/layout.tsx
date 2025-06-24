import Header from "../components/header";
import Footer from "../components/footer";
import TubeLines from "../components/tubelines";
import BackToTop from "../components/back-to-top";
import { Metadata } from "next";
import AnimateLayout from "../components/animate-layout";

import localFont from "next/font/local";
import "../styles/index.css";

const P22Underground = localFont({
  src: [
    {
      path: "/fonts/P22UndergroundBook.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/P22UndergroundDemiBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-P22Underground",
});

// metadata for every page
export const metadata: Metadata = {
  // set these manually for each page
  // title: "Fare Free London",
  // description: "Homepage for the Fare Free London Campaign",
  robots: "index,follow",

  keywords: [
    "free",
    "public",
    "transport",
    "London",
    "tube",
    "train",
    "bus",
    "metro",
    "rail",
    "car",
    "taxi",
    "public transport",
    "fare-free transit",
    "public transport equality",
    "sustainable transport",
    "climate action",
    "social justice",
    "environmental benefits",
    "low-income support",
    "air pollution reduction",
    "Greater London Authority",
    "free transit benefits",
    "public service transport",
    "TFL",
    "Transport for London",
    "Free London",
    "Free things to do in London",
    "London cost of living",
    "Sadiq Khan",
  ],
  authors: [{ name: "Fare Free London" }],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  themeColor: "#000",
  openGraph: {
    title: "Fare Free London",
    description: "Campaign for free public transport in London",
    url: "https://farefreelondon.org",
    siteName: "Fare Free London",
    images: ["/images/banner-draft.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fare Free London",
    description: "Campaign for free public transport in London",
    images: ["/images/banner-draft.png"],
  },
  metadataBase: new URL("https://farefreelondon.org"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={P22Underground.variable}>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="930adc75-e0eb-4c7a-85aa-4275ff4f519c"
        />
        <script
          defer
          src="https://umami.jackkershaw.pp.ua/script.js"
          data-website-id="8b381dbb-2907-4867-b9d0-83ca338f5635"
        />
        <link rel="preconnect" href="https://va.vercel-scripts.com/" />
      </head>
      <body>
        <div>
          <Header />
          <div className="bg-lighterBg text-black px-5 lg:px-10 lg:mx-10 min-h-[60vh] lg:mt-10 lg:py-5">
            <AnimateLayout>
              <div className="bg-lighterBg text-black px-5 lg:px-10 lg:mx-10 min-h-[60vh] lg:mt-10 lg:py-5">
                {children}
              </div>
              <BackToTop />
            </AnimateLayout>
          </div>
        </div>
        <Footer></Footer>
        <TubeLines></TubeLines>
      </body>
    </html>
  );
}
