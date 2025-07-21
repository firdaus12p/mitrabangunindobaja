import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest(".whatsapp-floating-btn")) {
        setShowOptions(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleOptionClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281244677317?text=${encodedMessage}`, "_blank");
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-75"
      }`}
    >
      <div className="relative group whatsapp-floating-btn">
        {/* Options Dropdown */}
        {showOptions && (
          <div className="absolute bottom-full right-0 mb-4 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
            {whatsappOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.message)}
                className="w-full px-4 py-3 text-left hover:bg-green-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 group/option"
              >
                <div className="flex items-center space-x-3 min-w-[200px]">
                  <span className="text-xl group-hover/option:scale-110 transition-transform duration-200">
                    {option.icon}
                  </span>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover/option:text-green-600 transition-colors duration-200 text-sm">
                      {option.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {option.message.length > 40
                        ? option.message.substring(0, 40) + "..."
                        : option.message}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={toggleOptions}
          className="relative w-14 h-14 bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white rounded-full shadow-lg hover:shadow-green-500/50 transition-shadow duration-200 group overflow-hidden cursor-pointer"
          aria-label="Chat via WhatsApp"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-full"></div>

          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 transition-transform duration-200"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.485" />
            </svg>
          </div>

          {/* Ripple Effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-200"></div>
        </button>

        {/* Pulse Rings */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-10"></div>
        </div>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
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

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
