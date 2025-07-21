import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import products from '../data/products';

export default function SearchBar({ isMobile = false }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered.slice(0, 5));
      setIsOpen(true);
    } else {
      setFilteredProducts([]);
      setIsOpen(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/produk?search=${encodeURIComponent(searchTerm.trim())}`);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  const handleProductClick = (product) => {
    router.push(`/produk?category=${encodeURIComponent(product.category)}`);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div ref={searchRef} className="relative">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`
            w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${isMobile 
              ? 'text-sm bg-white/95 backdrop-blur-sm' 
              : 'bg-white'
            }
          `}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>

      {/* Search Dropdown */}
      {isOpen && filteredProducts.length > 0 && (
        <div 
          className={`
            absolute top-full left-0 right-0 mt-1 
            bg-white border border-gray-200 rounded-lg shadow-lg z-50
            max-h-64 overflow-y-auto
            ${isMobile ? 'min-w-[280px]' : 'min-w-[320px]'}
          `}
        >
          {filteredProducts.map((product, index) => (
            <button
              key={index}
              onClick={() => handleProductClick(product)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">
                    {product.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {product.category}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
