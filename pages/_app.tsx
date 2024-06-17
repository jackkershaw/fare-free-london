import { AppProps } from "next/app";
import "../styles/index.css";
import localFont from "next/font/local";

const Charter = localFont({
  src: [
    {
      path: "./fonts/Charter/WOFF2 format (best for web)/Charter/charter_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Charter/WOFF2 format (best for web)/Charter/charter_italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Charter/WOFF2 format (best for web)/Charter/charter_bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Charter/WOFF2 format (best for web)/Charter/charter_bold_italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-charter",
});

const Franklin = localFont({
  src: [
    {
      path: "./fonts/Libre_Franklin/LibreFranklin-VariableFont_wght.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Libre_Franklin/LibreFranklin-Italic-VariableFont_wght.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-franklin",
});

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <main className={`${Charter.variable} ${Franklin.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
