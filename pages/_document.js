import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Additional meta tags for SEO */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />

        {/* Geo tags */}
        <meta name="geo.region" content="ID-SN" />
        <meta name="geo.placename" content="Makassar" />
        <meta name="geo.position" content="-5.1477;119.4327" />
        <meta name="ICBM" content="-5.1477, 119.4327" />

        {/* Business information */}
        <meta name="contact" content="adilabadi317@gmail.com" />
        <meta name="author" content="Mitra Bangun Indo Baja" />
        <meta name="copyright" content="Mitra Bangun Indo Baja" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mitra Bangun Indo Baja",
              url: "https://mitrabangunindobaja.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+6281244677317",
                contactType: "customer service",
                availableLanguage: "Indonesian",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Makassar",
                addressRegion: "Sulawesi Selatan",
                addressCountry: "ID",
              },
              sameAs: ["https://wa.me/6281244677317"],
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
