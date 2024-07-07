import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link rel="canonical" href="https://farefreelondon.org" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/feed.xml"
      />
      <meta
        name="description"
        content="Campaign for free public transport in London"
      />
      <meta name="description" content="Fare Free London" />
      <meta
        property="twitter:url"
        content="https://farefreelondon.org/"
      />
      <meta
        name="twitter:description"
        content="Campaign for free public transport in London"
      />
      <meta property="og:url" content="https://farefreelondon.org/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Campaign for free public transport in London"
      />
    </Head>
  );
}
