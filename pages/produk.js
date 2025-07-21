import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { products, categories } from "../data/products";

export default function ProdukPage() {
  const router = useRouter();
  const { search, kategori } = router.query;

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("popular");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const productsPerPage = 12;

  useEffect(() => {
    if (search) {
      setSearchTerm(search);
    }
    if (kategori) {
      setSelectedCategory(kategori);
    }
  }, [search, kategori]);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    if (sortBy === "price-low") {
      filtered.sort(
        (a, b) =>
          parseInt(a.price.replace(/\D/g, "")) -
          parseInt(b.price.replace(/\D/g, ""))
      );
    } else if (sortBy === "price-high") {
      filtered.sort(
        (a, b) =>
          parseInt(b.price.replace(/\D/g, "")) -
          parseInt(a.price.replace(/\D/g, ""))
      );
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "sold") {
      filtered.sort((a, b) => b.sold - a.sold);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, sortBy]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const breadcrumbs = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/produk" },
  ];

  if (selectedCategory !== "all") {
    const category = categories.find((cat) => cat.id === selectedCategory);
    if (category) {
      breadcrumbs.push({
        name: category.name,
        href: `/produk?kategori=${selectedCategory}`,
      });
    }
  }

  return (
    <>
      <NextSeo
        title="Daftar Produk Bahan Bangunan Terlengkap | Mitra Bangun Indo Baja"
        description="Jual bahan bangunan dan material konstruksi berkualitas tinggi. Atap spandek, besi, triplex, pipa, dan material bangunan lainnya dengan harga terbaik. Pengiriman ke seluruh Indonesia."
        openGraph={{
          title:
            "Daftar Produk Bahan Bangunan Terlengkap | Mitra Bangun Indo Baja",
          description:
            "Jual bahan bangunan dan material konstruksi berkualitas tinggi dengan pengiriman ke seluruh Indonesia",
          url: "https://mitrabangunindobaja.com/produk",
          images: [
            {
              url: "/images/products-og.jpg",
              width: 1200,
              height: 630,
              alt: "Produk Bahan Bangunan Mitra Bangun Indo Baja",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "produk bahan bangunan, material konstruksi, atap spandek, besi, triplex, pipa, jual bahan bangunan makassar",
          },
        ]}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {breadcrumbs.map((item, index) => (
                  <li key={index} className="inline-flex items-center">
                    {index > 0 && (
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-gray-500 text-sm font-medium">
                        {item.name}
                      </span>
                    ) : (
                      <a
                        href={item.href}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border"
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">🔽</span>
                <span className="font-semibold">Filter & Urutkan</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>{filteredProducts.length} produk</span>
                <div
                  className={`w-6 h-6 transition-transform duration-200 ${
                    showMobileFilter ? "rotate-180" : ""
                  }`}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Filter Dropdown */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              showMobileFilter ? "max-h-96 mb-6" : "max-h-0"
            }`}
          >
            <div className="bg-white rounded-lg shadow-sm border p-4 space-y-4">
              {/* Mobile Category Filter */}
              <div>
                <h4 className="font-medium mb-3">Kategori</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setShowMobileFilter(false);
                    }}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === "all"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    🏪 Semua ({products.length})
                  </button>
                  {categories.slice(0, 5).map((category) => {
                    const count = products.filter(
                      (p) => p.category === category.id
                    ).length;
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setShowMobileFilter(false);
                        }}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category.id
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category.icon}{" "}
                        {category.name.split(" ").slice(0, 2).join(" ")} (
                        {count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Sort */}
              <div>
                <h4 className="font-medium mb-3">Urutkan</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="popular">Paling Populer</option>
                  <option value="rating">Rating Tertinggi</option>
                  <option value="sold">Paling Laris</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Hidden on Mobile */}
            <div className="hidden lg:block lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Filter Produk</h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Kategori</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === "all"}
                        onChange={() => setSelectedCategory("all")}
                        className="mr-2"
                      />
                      Semua Produk ({products.length})
                    </label>
                    {categories.map((category) => {
                      const count = products.filter(
                        (p) => p.category === category.id
                      ).length;
                      return (
                        <label key={category.id} className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === category.id}
                            onChange={() => setSelectedCategory(category.id)}
                            className="mr-2"
                          />
                          {category.icon} {category.name} ({count})
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Sort Options */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Urutkan</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="popular">Paling Populer</option>
                    <option value="rating">Rating Tertinggi</option>
                    <option value="sold">Paling Laris</option>
                    <option value="price-low">Harga Terendah</option>
                    <option value="price-high">Harga Tertinggi</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid - Full width on mobile */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h1 className="text-3xl font-bold text-gray-800">
                    {selectedCategory === "all"
                      ? "Semua Produk Bahan Bangunan"
                      : categories.find((cat) => cat.id === selectedCategory)
                          ?.name || "Produk"}
                  </h1>
                  <p className="text-gray-600">
                    Menampilkan {filteredProducts.length} produk
                  </p>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Tidak ada produk ditemukan
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Coba ubah filter atau kata kunci pencarian Anda
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchTerm("");
                    }}
                    className="btn-primary"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                          />
                          {product.originalPrice && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                              DISKON
                            </div>
                          )}
                        </div>

                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                            {product.name}
                          </h3>

                          <div className="flex items-center mb-3">
                            <div className="flex items-center text-yellow-500 mr-2">
                              <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-sm font-medium ml-1">
                                {product.rating}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500">
                              ({product.sold} terjual)
                            </span>
                          </div>

                          <div className="mb-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-blue-600">
                                {product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  {product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <a
                              href={`/produk/${product.slug}`}
                              className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              Detail
                            </a>
                            <a
                              href={`https://wa.me/6281244677317?text=Halo, saya tertarik dengan produk ${encodeURIComponent(
                                product.name
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-green-500 text-white text-center py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                            >
                              Pesan
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                      <div className="flex space-x-2">
                        {currentPage > 1 && (
                          <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            Sebelumnya
                          </button>
                        )}

                        {Array.from(
                          { length: Math.min(5, totalPages) },
                          (_, i) => {
                            const page = i + 1;
                            return (
                              <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded-lg ${
                                  currentPage === page
                                    ? "bg-blue-600 text-white"
                                    : "bg-white border border-gray-300 hover:bg-gray-50"
                                }`}
                              >
                                {page}
                              </button>
                            );
                          }
                        )}

                        {currentPage < totalPages && (
                          <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            Selanjutnya
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
