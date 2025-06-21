"use client";

import Header from "../components/header";
import Meta from "../components/meta";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
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

const BackToTop = dynamic(() => import("../components/back-to-top"), {
  ssr: false,
});

const TubeLines = dynamic(() => import("../components/tubelines"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/footer"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={P22Underground.variable}>
      <head>
        <Meta />
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
            <LazyMotion features={domAnimation}>
              <motion.div
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                  pageInitial: {
                    y: 20,
                    opacity: 0,
                    scale: 0.99,
                  },
                  pageAnimate: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      ease: "easeInOut",
                      when: "beforeChildren",
                    },
                  },
                }}
              >
                <div className="bg-lighterBg text-black px-5 lg:px-10 lg:mx-10 min-h-[60vh] lg:mt-10 lg:py-5">
                  {children}
                </div>
                <BackToTop />
              </motion.div>
            </LazyMotion>
          </div>
        </div>
      </body>
    </html>
  );
}
