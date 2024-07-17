import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";
import Head from "next/head";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import TubeLines from "./tubelines";
import BackToTop from "./back-to-top";

export default function Layout({ children }) {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <Meta />
      <Header />
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
      <Footer />
      <TubeLines />
    </div>
  );
}
