import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="930adc75-e0eb-4c7a-85aa-4275ff4f519c"
      ></script>
      <link
        rel="preconnect"
        href="https://va.vercel-scripts.com/"
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
