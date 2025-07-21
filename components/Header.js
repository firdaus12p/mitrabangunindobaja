import { useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", href: "/", icon: "🏠" },
    { name: "Produk", href: "/produk", icon: "🏗️" },
    { name: "Artikel", href: "/artikel", icon: "📰" },
    { name: "Kontak", href: "/kontak", icon: "📞" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                isScrolled
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg"
                  : "bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg"
              }`}
            >
              <span className="text-xl text-white">🏗️</span>
            </div>
            <div className="hidden sm:block">
              <h1
                className={`font-bold text-lg transition-all duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Mitra Bangun Indo Baja
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white hover:text-blue-200 hover:bg-white/10"
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Search Bar */}
          <div className="flex-1 max-w-xs mx-2 lg:hidden">
            <SearchBar />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Desktop Search Bar */}
            <div className="hidden lg:block">
              <SearchBar />
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6281244677317"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                isScrolled
                  ? "bg-green-500 text-white hover:bg-green-600 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
              }`}
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <nav className="pt-4 space-y-2">
            {/* Mobile Menu Items */}
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-50"
                    : "text-white hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}

            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/6281244677317"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
            >
              <span className="text-lg">💬</span>
              <span>Chat WhatsApp</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
