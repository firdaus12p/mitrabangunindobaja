import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productCategories = [
    { name: "Atap Spandek", icon: "🏠" },
    { name: "Besi & Baja", icon: "🔧" },
    { name: "Triplex & Kayu", icon: "🪵" },
    { name: "Pipa & Fitting", icon: "🔌" },
    { name: "Semen & Agregat", icon: "🏗️" },
    { name: "Cat & Finishing", icon: "🎨" },
  ];

  const quickLinks = [
    { name: "Beranda", href: "/", icon: "🏠" },
    { name: "Produk", href: "/produk", icon: "🏗️" },
    { name: "Artikel", href: "/artikel", icon: "📰" },
    { name: "Kontak", href: "/kontak", icon: "📞" },
  ];

  const contactInfo = [
    {
      type: "whatsapp",
      label: "WhatsApp",
      value: "+62 812-4467-7317",
      href: "https://wa.me/6281244677317",
      icon: "💬",
    },
    {
      type: "email",
      label: "Email",
      value: "adilabadi317@gmail.com",
      href: "mailto:adilabadi317@gmail.com",
      icon: "📧",
    },
    {
      type: "location",
      label: "Lokasi",
      value: "Makassar, Sulawesi Selatan",
      href: "#",
      icon: "📍",
    },
  ];

  const socialMedia = [
    {
      name: "WhatsApp",
      href: "https://wa.me/6281244677317",
      icon: "💬",
      color: "hover:text-green-400",
    },
    { name: "Instagram", href: "#", icon: "📸", color: "hover:text-pink-400" },
    { name: "Facebook", href: "#", icon: "📘", color: "hover:text-blue-400" },
    { name: "YouTube", href: "#", icon: "📺", color: "hover:text-red-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏗️</span>
                </div>
                <div>
                  <h3 className="text-xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Mitra Bangun
                  </h3>
                  <p className="text-blue-200 font-semibold">Indo Baja</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Toko bahan bangunan dan material terlengkap di Makassar dengan
                pengiriman ke seluruh Indonesia. Produk berkualitas, harga
                bersaing, pelayanan terpercaya.
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400">✅</span>
                  </div>
                  <span className="text-gray-300">
                    Rating 4.9/5 dari 1000+ Customer
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">🚀</span>
                  </div>
                  <span className="text-gray-300">
                    Pengiriman ke 34 Provinsi
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400">🛡️</span>
                  </div>
                  <span className="text-gray-300">Garansi Kualitas Produk</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-black text-white flex items-center space-x-2">
                <span className="text-2xl">🔗</span>
                <span>Menu Utama</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="text-lg group-hover:scale-125 transition-transform duration-200">
                        {link.icon}
                      </span>
                      <span className="group-hover:text-blue-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div className="space-y-6">
              <h4 className="text-lg font-black text-white flex items-center space-x-2">
                <span className="text-2xl">🏗️</span>
                <span>Kategori Produk</span>
              </h4>
              <ul className="space-y-3">
                {productCategories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={`/produk?category=${category.name}`}
                      className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="text-lg group-hover:scale-125 transition-transform duration-200">
                        {category.icon}
                      </span>
                      <span className="group-hover:text-blue-300">
                        {category.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-black text-white flex items-center space-x-2">
                <span className="text-2xl">📞</span>
                <span>Hubungi Kami</span>
              </h4>

              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.type}
                    href={contact.href}
                    target={contact.type === "whatsapp" ? "_blank" : "_self"}
                    rel={
                      contact.type === "whatsapp" ? "noopener noreferrer" : ""
                    }
                    className="group flex items-start space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <span className="text-lg">{contact.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">
                        {contact.label}
                      </p>
                      <p className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-200">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <p className="text-sm font-semibold text-gray-400 mb-3">
                  Ikuti Kami:
                </p>
                <div className="flex space-x-3">
                  {socialMedia.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                    >
                      <span className="text-lg group-hover:scale-125 transition-transform duration-200">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-lg">©</span>
              <span>
                {currentYear} Mitra Bangun Indo Baja. All rights reserved.
              </span>
            </div>

            {/* Developer Info */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>
                Developed by Muh. Firdaus 2025, Makassar - WA (081258073039)
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/kebijakan-privasi"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/syarat-ketentuan"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
