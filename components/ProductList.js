import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { products, categories } from "../data/products";

export default function ProductList() {
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const productsPerPage = 8;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      let filtered = products;

      // Handle search from URL params (from navbar search)
      const searchParam = router.query.search;
      if (searchParam) {
        const searchTermLower = searchParam.toLowerCase().trim();

        filtered = filtered.filter((product) => {
          const nameLower = product.name.toLowerCase();
          const descriptionLower = product.description.toLowerCase();
          const categoryName =
            categories
              .find((cat) => cat.id === product.category)
              ?.name?.toLowerCase() || "";

          // Priority 1: Exact match in product name
          if (nameLower === searchTermLower) return true;

          // Priority 2: Product name starts with search term
          if (nameLower.startsWith(searchTermLower)) return true;

          // Priority 3: Category name exact match
          if (categoryName === searchTermLower) return true;

          // Priority 4: Product name contains search term as whole word
          const nameWords = nameLower.split(/\s+/);
          if (nameWords.some((word) => word === searchTermLower)) return true;

          // Priority 5: Category name contains search term
          if (categoryName.includes(searchTermLower)) return true;

          // Priority 6: Product name contains search term (partial match)
          if (nameLower.includes(searchTermLower)) return true;

          // Priority 7: Description contains search term as whole word (lowest priority)
          const descWords = descriptionLower.split(/\s+/);
          if (descWords.some((word) => word === searchTermLower)) return true;

          return false;
        });

        // Sort results by relevance
        filtered.sort((a, b) => {
          const aNameLower = a.name.toLowerCase();
          const bNameLower = b.name.toLowerCase();
          const aCategoryName =
            categories
              .find((cat) => cat.id === a.category)
              ?.name?.toLowerCase() || "";
          const bCategoryName =
            categories
              .find((cat) => cat.id === b.category)
              ?.name?.toLowerCase() || "";

          // Exact name match first
          if (aNameLower === searchTermLower && bNameLower !== searchTermLower)
            return -1;
          if (bNameLower === searchTermLower && aNameLower !== searchTermLower)
            return 1;

          // Name starts with search term
          if (
            aNameLower.startsWith(searchTermLower) &&
            !bNameLower.startsWith(searchTermLower)
          )
            return -1;
          if (
            bNameLower.startsWith(searchTermLower) &&
            !aNameLower.startsWith(searchTermLower)
          )
            return 1;

          // Category exact match
          if (
            aCategoryName === searchTermLower &&
            bCategoryName !== searchTermLower
          )
            return -1;
          if (
            bCategoryName === searchTermLower &&
            aCategoryName !== searchTermLower
          )
            return 1;

          return 0;
        });
      }

      // Handle category filter
      if (selectedCategory !== "all") {
        filtered = filtered.filter(
          (product) => product.category === selectedCategory
        );
      }

      setFilteredProducts(filtered);
      setCurrentPage(1);
      setIsLoading(false);
    }, 300);
  }, [selectedCategory, router.query.search]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const formatPrice = (price) => {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const categoryIcons = {
    atap: "🏠",
    triplex: "🪵",
    papan: "�",
    "baja-berat": "🔩",
    plafon: "�",
    "paku-baut": "�",
    "tangki-ipal": "�",
    "baja-ringan": "⚡",
    "tangki-air": "�",
    pipa: "🔧",
    "pipa-besi": "⚙️",
    sanitary: "�",
  };

  return (
    <section
      id="produk"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/30">
            <span className="text-3xl">🏗️</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6 bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Produk Bahan Bangunan Terlengkap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dapatkan bahan bangunan berkualitas tinggi dengan harga terbaik.
            Semua produk bergaransi dengan pengiriman ke seluruh Indonesia.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          {/* Search Result Indicator */}
          {router.query.search && (
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-6 py-3 rounded-2xl">
                <span className="text-2xl">🔍</span>
                <span className="font-semibold text-blue-800">
                  Hasil pencarian untuk: "{router.query.search}"
                </span>
                <button
                  onClick={() => router.push("/produk")}
                  className="ml-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Ditemukan {filteredProducts.length} produk
              </p>
            </div>
          )}

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`group flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg"
              }`}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                🏪
              </span>
              <span>Semua Produk</span>
            </button>

            {categories
              .filter((cat) => cat.id !== "all")
              .map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg"
                  }`}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {categoryIcons[category.id]}
                  </span>
                  <span className="whitespace-nowrap">{category.name}</span>
                </button>
              ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          {isLoading ? (
            // Loading State
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg animate-pulse"
                >
                  <div className="h-48 bg-gray-200 rounded-t-3xl"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : currentProducts.length > 0 ? (
            // Products Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform-gpu"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-t-3xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl group-hover:scale-125 transition-transform duration-500">
                        {categoryIcons[product.category]}
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-yellow-400/90 backdrop-blur-sm text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <span>⭐</span>
                      <span>{product.rating}</span>
                    </div>

                    {/* Sold Badge */}
                    <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.sold}+ Terjual
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-black text-blue-600">
                          Rp {formatPrice(product.price)}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">
                          /{product.unit}
                        </span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/6281244677317?text=Halo, saya tertarik dengan ${product.name}. Bisakah memberikan info lebih lanjut?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        💬 Pesan
                      </a>

                      <Link
                        href={`/produk?id=${product.id}`}
                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                      >
                        👁️
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // No Products Found
            <div className="text-center py-16">
              <div className="text-8xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                Produk Tidak Ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah filter atau kata kunci pencarian Anda
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  router.push("/produk");
                }}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            >
              ← Sebelum
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            >
              Sesudah →
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-black mb-4">
                Tidak Menemukan Produk yang Dicari?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Hubungi kami langsung untuk konsultasi dan penawaran khusus
              </p>
              <a
                href="https://wa.me/6281244677317"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-2xl">💬</span>
                <span>Konsultasi Gratis Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
