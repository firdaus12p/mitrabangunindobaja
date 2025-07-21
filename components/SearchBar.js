import { useState, useEffect } from "react";
import { products, categories } from "../data/products";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const categoryIcons = {
    atap: "🏠",
    triplex: "🪵",
    papan: "📋",
    "baja-berat": "🔩",
    plafon: "🏢",
    "paku-baut": "🔧",
    "tangki-ipal": "🚰",
    "baja-ringan": "⚡",
    "tangki-air": "💧",
    pipa: "🔧",
    "pipa-besi": "⚙️",
    sanitary: "🚽",
  };

  // Handle search suggestions
  useEffect(() => {
    if (searchTerm.length > 0) {
      const searchTermLower = searchTerm.toLowerCase().trim();

      const suggestions = products
        .filter((product) => {
          const nameLower = product.name.toLowerCase();
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

          return false;
        })
        .sort((a, b) => {
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
        })
        .slice(0, 5); // Limit to 5 suggestions

      setSearchSuggestions(suggestions);
      setShowSuggestions(suggestions.length > 0);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const formatPrice = (price) => {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setShowSuggestions(false);
    window.location.href = `/produk?search=${encodeURIComponent(
      suggestion.name
    )}`;
  };

  const handleSearchFocus = () => {
    if (searchTerm.length > 0 && searchSuggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleSearchBlur = () => {
    // Delay hiding to allow click on suggestions
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/produk?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-md">
      <form onSubmit={handleSubmit} className="flex">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            className="w-full px-3 py-2 pr-10 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
          <svg
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && searchSuggestions.length > 0 && (
            <div
              className="absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-lg shadow-2xl shadow-gray-500/20 z-50 overflow-hidden max-h-80 overflow-y-auto"
              style={{ minWidth: "300px" }}
            >
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 px-3 py-2 border-b border-gray-100">
                  📦 Produk Ditemukan ({searchSuggestions.length})
                </div>
                {searchSuggestions.map((suggestion, index) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full p-2 hover:bg-blue-50/80 rounded-lg transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <span className="text-sm">
                        {categoryIcons[suggestion.category]}
                      </span>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 text-sm">
                        {suggestion.name.length > 30
                          ? suggestion.name.substring(0, 30) + "..."
                          : suggestion.name}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center space-x-1">
                        <span>💰 Rp {formatPrice(suggestion.price)}</span>
                        <span>•</span>
                        <span>⭐ {suggestion.rating}</span>
                      </div>
                    </div>
                    <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 text-sm rounded-r-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <span className="hidden sm:inline">Cari</span>
          <span className="sm:hidden">🔍</span>
        </button>
      </form>
    </div>
  );
}
