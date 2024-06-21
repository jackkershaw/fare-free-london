import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";
import Head from "next/head";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import TubeLines from "./tubelines";
import BackToTop from "./BackToTop";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{"Fare Free London"}</title>
        <meta
          name="description"
          content={"Campaign for free public transport in London"}
        />
      </Head>
      <Analytics />
      <SpeedInsights />
      <Meta />
      <Header />
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
        <main className="bg-lighterBg text-black px-5 lg:px-10 lg:mx-10 min-h-[60vh] lg:mt-10 lg:py-5">
          {children}
        </main>
        <BackToTop />
      </motion.div>
      <Footer />
      <TubeLines />
    </div>
  );
}
