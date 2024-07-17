import Header from "./header";
import Meta from "./meta";
import { m, LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";

const BackToTop = dynamic(() => import("./back-to-top"), {
  ssr: false,
});

const TubeLines = dynamic(() => import("./tubelines"), {
  ssr: false,
});

const Footer = dynamic(() => import("./footer"), {
  ssr: false,
});

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      <Header />
      <LazyMotion features={domAnimation}>
        <m.div
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
        </m.div>
      </LazyMotion>
      <Footer />
      <TubeLines />
    </div>
  );
}
