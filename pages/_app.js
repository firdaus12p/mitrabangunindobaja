import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "id_ID",
          url: "https://mitrabangunindobaja.com",
          site_name: "Mitra Bangun Indo Baja",
        }}
        twitter={{
          handle: "@mitrabangunindobaja",
          site: "@mitrabangunindobaja",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
