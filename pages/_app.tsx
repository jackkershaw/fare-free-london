import { AppProps } from "next/app";
import "../styles/index.css";
import localFont from "next/font/local";

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

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <main className={`${P22Underground.variable} `}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
