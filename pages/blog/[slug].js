import React from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import { articles } from "../../data/articles";

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = articles.find((article) => article.slug === params.slug);

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

export default function ArtikelDetail({ article }) {
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <NextSeo
        title={`${article.title} | Mitra Bangun Indo Baja`}
        description={article.description}
        openGraph={{
          title: article.title,
          description: article.description,
          type: "article",
          article: {
            publishedTime: article.date,
            tags: article.tags,
          },
        }}
      />

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-blue-600">
              Artikel
            </Link>
            <span>›</span>
            <span className="text-gray-800">{article.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Hero Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-2xl">
                    {article.category}
                  </span>
                </div>

                <div className="p-8">
                  {/* Article Meta */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>
                        {new Date(article.date).toLocaleDateString("id-ID", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                    {article.title}
                  </h1>

                  {/* Description */}
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {article.description}
                  </p>

                  {/* Content */}
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">
                      Tags:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Artikel Terkait
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((relatedArticle) => (
                      <Link
                        key={relatedArticle.id}
                        href={`/blog/${relatedArticle.slug}`}
                        className="block group"
                      >
                        <div className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                          <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {new Date(relatedArticle.date).toLocaleDateString(
                              "id-ID"
                            )}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Articles */}
              <div className="mt-6">
                <Link
                  href="/blog"
                  className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  ← Kembali ke Artikel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
