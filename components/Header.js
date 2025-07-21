import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchBar from './SearchBar';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Artikel', href: '/artikel' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-gradient-to-r from-blue-600 to-blue-800'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MB</span>
              </div>
              <span className={`font-bold text-lg ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}>
                Mitra Bangunindobaja
              </span>
            </Link>
          </div>

          {/* Mobile Layout: Logo - SearchBar - Burger */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Mobile Search Bar */}
            <div className="flex-1 max-w-xs">
              <SearchBar isMobile={true} />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  router.pathname === item.href
                    ? isScrolled 
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-white/20 text-white'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Desktop Search Bar */}
            <div className="ml-4">
              <SearchBar isMobile={false} />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t ${
              isScrolled ? 'border-gray-200 bg-white' : 'border-white/20 bg-blue-700/50'
            }`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    router.pathname === item.href
                      ? isScrolled
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-white/20 text-white'
                      : isScrolled
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
