export default function FeaturesSection() {
  const features = [
    {
      icon: "🚚",
      title: "Pengiriman Nasional",
      description:
        "Melayani pengiriman ke 34 provinsi dengan packaging aman dan estimasi waktu akurat",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "⭐",
      title: "Rating 4.9/5",
      description:
        "Kepercayaan 1000+ pelanggan dengan kualitas produk dan layanan terbaik",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "💰",
      title: "Harga Terbaik",
      description:
        "Harga kompetitif untuk semua kebutuhan bahan bangunan dengan kualitas terjamin",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: "🔒",
      title: "Bergaransi",
      description:
        "Semua produk bergaransi resmi dengan jaminan kualitas dari supplier terpercaya",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: "📞",
      title: "Konsultasi Gratis",
      description:
        "Tim ahli siap membantu memilih produk tepat sesuai kebutuhan proyek Anda",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: "⚡",
      title: "Respon Cepat",
      description:
        "Pemesanan mudah via WhatsApp dengan respon dalam hitungan menit",
      color: "from-cyan-500 to-teal-600",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <span className="text-2xl">🏆</span>
            <span className="text-blue-600 font-bold text-lg">
              Keunggulan Kami
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6 leading-tight">
            Mengapa Pilih
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Mitra Bangun Indo Baja?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami berkomitmen memberikan layanan terbaik dengan produk
            berkualitas tinggi untuk semua kebutuhan konstruksi dan bangunan
            Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <span className="text-2xl filter drop-shadow-sm">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                  {feature.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/6281244677317"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden"
          >
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            {/* Content */}
            <span className="relative z-10 text-2xl group-hover:scale-125 transition-transform duration-300">
              💬
            </span>
            <span className="relative z-10">Konsultasi Gratis Sekarang</span>
            <span className="relative z-10 text-xl group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
