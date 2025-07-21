import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

  const heroSlides = [
    {
      title: "Bahan Bangunan & Material Terlengkap",
      subtitle: "Solusi Konstruksi Berkualitas Tinggi",
      description:
        "Dapatkan bahan bangunan terbaik dengan harga terjangkau. Pengiriman ke seluruh Indonesia dengan garansi kualitas.",
      image: "🏗️",
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
    },
    {
      title: "Atap Spandek & Material Premium",
      subtitle: "Kualitas Terjamin, Harga Bersaing",
      description:
        "Berbagai pilihan atap spandek, besi, triplex, dan material konstruksi berkualitas ekspor.",
      image: "🏠",
      gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    },
    {
      title: "Pengiriman Ke Seluruh Indonesia",
      subtitle: "Rating 4.9/5 • 1000+ Produk Terjual",
      description:
        "Layanan pengiriman cepat dan aman ke seluruh nusantara. Dipercaya ribuan pelanggan.",
      image: "🚛",
      gradient: "from-purple-600 via-violet-700 to-purple-800",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest(".whatsapp-dropdown")) {
        setShowWhatsAppOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const stats = [
    { icon: "⭐", value: "4.9/5", label: "Rating Customer" },
    { icon: "✅", value: "1000+", label: "Produk Terjual" },
    { icon: "🌍", value: "34", label: "Provinsi Jangkauan" },
    { icon: "🚀", value: "24 Jam", label: "Respon Cepat" },
  ];

  const whatsappOptions = [
    {
      icon: "🚚",
      title: "Tanya Pengiriman",
      message:
        "Halo! Saya ingin bertanya tentang pengiriman produk ke daerah saya. Bisa dibantu?",
    },
    {
      icon: "💰",
      title: "Tanya Harga",
      message:
        "Halo! Saya ingin mengetahui harga terbaru untuk produk yang saya butuhkan. Terima kasih!",
    },
    {
      icon: "👨‍💼",
      title: "Konsultasi",
      message:
        "Halo! Saya ingin berkonsultasi mengenai material bangunan yang tepat untuk proyek saya. Mohon bantuannya!",
    },
  ];

  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281244677317?text=${encodedMessage}`, "_blank");
    setShowWhatsAppOptions(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dynamic Background with Parallax */}
      <div
        className={`absolute inset-0 bg-gradient-to-br transition-all duration-1000 ${heroSlides[currentSlide].gradient}`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce [animation-delay:0s]"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce [animation-delay:1s]"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce [animation-delay:2s]"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-bounce [animation-delay:1.5s]"></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

          {/* Mesh Gradient Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Hero Content */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Hero Icon with Animation */}
          <div className="mb-8 mt-8 sm:mt-12 lg:mt-16 relative">
            <div className="inline-flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl shadow-black/20 group hover:scale-105 transition-all duration-500">
              <span className="text-6xl lg:text-8xl transition-transform duration-300">
                {heroSlides[currentSlide].image}
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Dynamic Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {heroSlides[currentSlide].title}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-100 mb-6">
            {heroSlides[currentSlide].subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
            {/* WhatsApp Dropdown Button */}
            <div className="relative group w-full sm:w-auto whatsapp-dropdown">
              <button
                onClick={() => setShowWhatsAppOptions(!showWhatsAppOptions)}
                className="relative w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.485" />
                    </svg>
                  </span>
                  <span>Hubungi WhatsApp</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      showWhatsAppOptions ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Dropdown Menu */}
              {showWhatsAppOptions && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-fade-in">
                  {whatsappOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleWhatsAppClick(option.message)}
                      className="w-full px-6 py-4 text-left hover:bg-green-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 group"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                          {option.icon}
                        </span>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                            {option.title}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {option.message.length > 50
                              ? option.message.substring(0, 50) + "..."
                              : option.message}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#produk"
              className="group relative w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 bg-white/20 backdrop-blur-lg text-white border border-white/30 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl transition-all duration-500 hover:scale-105 hover:bg-white/30 hover:shadow-2xl hover:shadow-white/20"
            >
              <div className="relative flex items-center justify-center space-x-3">
                <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                  🛍️
                </span>
                <span>Lihat Katalog Produk</span>
                <div className="w-0 group-hover:w-4 sm:group-hover:w-6 h-0.5 bg-white rounded-full transition-all duration-300"></div>
              </div>
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative group bg-white/15 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20 text-center ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-100 font-medium leading-tight">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator - Hidden on mobile */}
      <div className="hidden lg:block absolute bottom-8 left-8 text-white/80 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
