import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Fare Free London</title>
      <meta
        name="keywords"
        content="free, public, transport, London, tube, train, bus, metro, rail, car, taxi, public transport, fare-free transit, public transport equality, sustainable transport, climate action, social justice, environmental benefits, low-income support, air pollution reduction, Greater London Authority, free transit benefits, public service transport, TFL, Transport for London, Free London, Free things to do in London, London cost of living, Sadiq Khan"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Fare Free London" />
      <meta
        name="google-site-verification"
        content="NV55MkJVtFkcIEdf__HJ_cgUg0GWNaBu4ZxO5WKKyes"
      />
      {/* Favicon */}
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

      {/* Theme color */}
      <meta name="theme-color" content="#000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Description */}
      <meta
        name="description"
        content="Campaign for free public transport in London"
      />

      {/* Title */}
      <title>Fare Free London</title>

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Fare Free london" />
      <meta
        name="twitter:description"
        content="Campaign for free public transport in London"
      />
      <meta name="twitter:image" content="/images/banner-draft.png" />

      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content="Fare Free London"></meta>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://farefreelondon.org/" />
      <meta property="og:title" content="Fare Free London" />
      <meta
        property="og:description"
        content="Campaign for free public transport in London"
      />
      <meta property="og:image" content="/images/banner-draft.png" />

      {/* Viewport */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </Head>
  );
}
