import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import WhatsAppButton from "../components/WhatsAppButton";
import JamOperasional from "../components/JamOperasional";
import FeaturesSection from "../components/FeaturesSection";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Mitra Bangun Indo Baja",
    url: "https://mitrabangunindobaja.com",
    telephone: "+6281244677317",
    email: "adilabadi317@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Makassar",
      addressCountry: "ID",
    },
    description:
      "Toko bahan bangunan dan material terlengkap di Makassar dengan pengiriman ke seluruh Indonesia",
    openingHours: "Mo-Sa 08:00-17:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1000",
    },
  };

  return (
    <>
      <NextSeo
        title="Jual Bahan Bangunan & Material Terlengkap | Kirim Seluruh Indonesia | Mitra Bangun Indo Baja"
        description="Toko bahan bangunan dan material terlengkap di Makassar. Jual atap spandek, besi, triplex, pipa, dan material konstruksi berkualitas. Pengiriman ke seluruh Indonesia. Rating 4.9/5, terjual 1000+."
        openGraph={{
          type: "website",
          locale: "id_ID",
          url: "https://mitrabangunindobaja.com",
          site_name: "Mitra Bangun Indo Baja",
          title:
            "Jual Bahan Bangunan & Material Terlengkap | Mitra Bangun Indo Baja",
          description:
            "Toko bahan bangunan dan material terlengkap di Makassar dengan pengiriman ke seluruh Indonesia",
          images: [
            {
              url: "/images/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Mitra Bangun Indo Baja - Toko Bahan Bangunan",
            },
          ],
        }}
        twitter={{
          handle: "@mitrabangunindobaja",
          site: "@mitrabangunindobaja",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "jual bahan bangunan, material, pesan bahan bangunan, mitra bangun indo baja, jual bahan bangunan di makassar, toko bahan bangunan makassar, toko material di makassar, pesan online bahan bangunan, kirim ke seluruh Indonesia, atap spandek, besi, triplex, pipa",
          },
          {
            name: "geo.region",
            content: "ID-SN",
          },
          {
            name: "geo.placename",
            content: "Makassar",
          },
          {
            name: "geo.position",
            content: "-5.1477;119.4327",
          },
        ]}
      />

      <Head>
        <link rel="canonical" href="https://mitrabangunindobaja.com" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header />

      <main>
        <Hero />
        <FeaturesSection />
        <ProductList />
        <JamOperasional />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
