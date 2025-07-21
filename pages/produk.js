import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import products from '../data/products';

export default function Produk() {
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Semua', ...new Set(products.map(product => product.category))];

  useEffect(() => {
    // Get category and search from URL params
    const { category, search } = router.query;
    
    if (category) {
      setSelectedCategory(category);
    }
    
    if (search) {
      setSearchTerm(search);
    }
  }, [router.query]);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'Semua') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Update URL without page reload
    const newQuery = { ...router.query };
    if (category && category !== 'Semua') {
      newQuery.category = category;
    } else {
      delete newQuery.category;
    }
    router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>Produk - Mitra Bangunindobaja</title>
        <meta name="description" content="Jelajahi koleksi lengkap material bangunan berkualitas tinggi dari Mitra Bangunindobaja. Besi, semen, bata, genteng, pipa, keramik, cat dan lainnya." />
      </Head>

      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Produk Kami</h1>
            <p className="text-xl">Temukan berbagai material bangunan berkualitas tinggi</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-700 font-medium">Kategori:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      (selectedCategory === category) || (category === 'Semua' && !selectedCategory)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {searchTerm && (
                <div className="text-sm text-gray-600">
                  Hasil pencarian untuk: "<span className="font-medium">{searchTerm}</span>"
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      const newQuery = { ...router.query };
                      delete newQuery.search;
                      router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
                    }}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ✕ Hapus
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Gambar Produk</span>
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-blue-600">
                          {product.price}
                        </span>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                          Hubungi
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-4 4-4-4m4 4V3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Tidak ada produk ditemukan
                </h3>
                <p className="text-gray-500 mb-4">
                  Coba ubah filter atau kata kunci pencarian Anda
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setSearchTerm('');
                    router.push('/produk', undefined, { shallow: true });
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Lihat Semua Produk
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
