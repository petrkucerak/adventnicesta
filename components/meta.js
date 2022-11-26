import Head from "next/head";

export default function Meta() {
  return (
    <Head>
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
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#543fb6"
      />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/mstile-144x144.png"
      />
      <meta name="theme-color" content="#543fb6" />
    </Head>
  );
}
