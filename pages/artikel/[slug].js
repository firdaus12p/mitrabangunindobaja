import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import { articles } from "../../data/articles";
import Link from "next/link";

export default function ArticleDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    if (slug) {
      const foundArticle = articles.find((a) => a.slug === slug);
      setArticle(foundArticle);

      if (foundArticle) {
        // Get related articles from same category
        const related = articles
          .filter(
            (a) =>
              a.category === foundArticle.category && a.id !== foundArticle.id
          )
          .slice(0, 3);
        setRelatedArticles(related);
      }
    }
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 pt-20">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <div className="text-8xl mb-4">📄</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Artikel Tidak Ditemukan
            </h1>
            <p className="text-gray-600 mb-8">
              Maaf, artikel yang Anda cari tidak dapat ditemukan.
            </p>
            <Link
              href="/artikel"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kembali ke Daftar Artikel
            </Link>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <NextSeo
        title={`${article.title} | Mitra Bangun Indo Baja`}
        description={article.excerpt}
        openGraph={{
          title: article.title,
          description: article.excerpt,
          url: `https://mitrabangunindobaja.com/artikel/${article.slug}`,
          images: [
            {
              url: article.image || "/images/default-article.jpg",
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ],
        }}
      />

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-blue-100">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/artikel"
                    className="hover:text-white transition-colors"
                  >
                    Artikel
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium">{article.title}</li>
              </ol>
            </nav>

            {/* Article Header */}
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 bg-blue-500/30 rounded-full text-sm font-medium mb-4">
                {article.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100">
                <div className="flex items-center space-x-2">
                  <span>👤</span>
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📅</span>
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⏱️</span>
                  <span>{article.readTime} menit baca</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Article Image */}
            {article.image && (
              <div className="h-64 md:h-96 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📰</div>
                  <p className="text-gray-600">
                    Gambar artikel akan ditampilkan di sini
                  </p>
                </div>
              </div>
            )}

            {/* Article Body */}
            <div className="p-8 md:p-12">
              {/* Article Excerpt */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Tags:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Butuh Konsultasi Lebih Lanjut?
                </h3>
                <p className="text-gray-600 mb-6">
                  Tim ahli kami siap membantu Anda memilih bahan bangunan yang
                  tepat
                </p>
                <a
                  href="https://wa.me/6281244677317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors hover:scale-105 transform duration-300"
                >
                  <span>💬</span>
                  <span>Konsultasi Gratis</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Artikel Terkait
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/artikel/${relatedArticle.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {/* Image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                      <span className="text-4xl">📰</span>
                    </div>

                    <div className="p-6">
                      <div className="text-sm text-blue-600 font-medium mb-2">
                        {relatedArticle.category}
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{formatDate(relatedArticle.publishedAt)}</span>
                        <span>{relatedArticle.readTime} min</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center">
            <Link
              href="/artikel"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <span>←</span>
              <span>Kembali ke Daftar Artikel</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Custom Styles */}
      <style jsx global>{`
        .prose h2 {
          @apply text-2xl font-bold text-gray-800 mt-8 mb-4;
        }
        .prose h3 {
          @apply text-xl font-bold text-gray-800 mt-6 mb-3;
        }
        .prose h4 {
          @apply text-lg font-bold text-gray-800 mt-4 mb-2;
        }
        .prose p {
          @apply text-gray-700 leading-relaxed mb-4;
        }
        .prose ul {
          @apply space-y-2 mb-6;
        }
        .prose li {
          @apply text-gray-700;
        }
        .prose strong {
          @apply font-bold text-gray-800;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}

// Generate paths for all articles at build time
export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// This function gets called at build time for static generation
export async function getStaticProps({ params }) {
  // Find the article with the matching slug
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
}
