import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mitra Bangunindobaja - Supplier Terpercaya Kebutuhan Bangunan & Konstruksi</title>
        <meta name="description" content="Supplier terpercaya untuk semua kebutuhan bangunan dan konstruksi. Menyediakan besi, semen, bata, genteng, pipa, keramik, cat dan material bangunan berkualitas." />
      </Head>

      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Supplier Terpercaya
              <span className="block text-blue-200">Material Bangunan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Menyediakan berbagai kebutuhan konstruksi dan bangunan berkualitas tinggi 
              dengan harga terjangkau dan pelayanan terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/produk"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Lihat Produk
              </a>
              <a
                href="/kontak"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Mengapa Memilih Kami?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami berkomitmen memberikan produk berkualitas dan pelayanan terbaik untuk semua kebutuhan konstruksi Anda
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Kualitas Terjamin</h3>
                <p className="text-gray-600">Semua produk kami telah tersertifikasi SNI dan berstandar internasional</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Harga Kompetitif</h3>
                <p className="text-gray-600">Dapatkan harga terbaik dengan kualitas premium untuk semua kebutuhan Anda</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pengiriman Cepat</h3>
                <p className="text-gray-600">Layanan pengiriman ke seluruh wilayah dengan jaminan barang sampai dengan aman</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Produk Unggulan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Temukan berbagai material bangunan berkualitas untuk proyek konstruksi Anda
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {['Besi & Baja', 'Semen', 'Bata & Batako', 'Atap'].map((category) => (
                <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Gambar {category}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{category}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Berbagai pilihan {category.toLowerCase()} berkualitas tinggi
                    </p>
                    <a
                      href={`/produk?category=${encodeURIComponent(category)}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Lihat Produk →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Hubungi tim kami untuk konsultasi gratis dan penawaran khusus
            </p>
            <a
              href="/kontak"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Hubungi Sekarang
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
