export default function JamOperasional() {
  const operationalHours = [
    { day: "Senin", hours: "08:00 - 17:00", isOpen: true, icon: "📅" },
    { day: "Selasa", hours: "08:00 - 17:00", isOpen: true, icon: "📅" },
    { day: "Rabu", hours: "08:00 - 17:00", isOpen: true, icon: "📅" },
    { day: "Kamis", hours: "08:00 - 17:00", isOpen: true, icon: "📅" },
    { day: "Jumat", hours: "08:00 - 17:00", isOpen: true, icon: "📅" },
    { day: "Sabtu", hours: "08:00 - 15:00", isOpen: true, icon: "🏪" },
    { day: "Minggu", hours: "Tutup", isOpen: false, icon: "🔒" },
  ];

  const getCurrentStatus = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now.getHours();

    // Convert to our day format (Monday = 0)
    const dayIndex = currentDay === 0 ? 6 : currentDay - 1;
    const todaySchedule = operationalHours[dayIndex];

    if (!todaySchedule.isOpen) {
      return { isOpen: false, message: "Tutup hari ini" };
    }

    const isWeekend = dayIndex === 5; // Saturday
    const openHour = 8;
    const closeHour = isWeekend ? 15 : 17;

    if (currentHour >= openHour && currentHour < closeHour) {
      return { isOpen: true, message: "Buka sekarang" };
    } else {
      return { isOpen: false, message: "Tutup sekarang" };
    }
  };

  const status = getCurrentStatus();
  const currentDayIndex =
    new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <span className="text-2xl">⏰</span>
            <span className="text-blue-600 font-bold text-lg">
              Jam Operasional
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6 leading-tight">
            Kapan Kami
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Melayani Anda?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kunjungi toko kami atau hubungi WhatsApp untuk layanan konsultasi
            24/7
          </p>
        </div>

        {/* Status Card */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl ${
              status.isOpen
                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                : "bg-gradient-to-r from-red-500 to-rose-600 text-white"
            }`}
          >
            <span className="text-2xl">{status.isOpen ? "🟢" : "🔴"}</span>
            <span>{status.message}</span>
          </div>
        </div>

        {/* Operating Hours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 mb-16">
          {operationalHours.map((schedule, index) => (
            <div
              key={schedule.day}
              className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl border ${
                index === currentDayIndex
                  ? "border-blue-300 bg-blue-50/70 shadow-lg shadow-blue-500/20"
                  : "border-white/20 hover:border-blue-200/50"
              }`}
            >
              {/* Current Day Indicator */}
              {index === currentDayIndex && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  schedule.isOpen
                    ? "bg-gradient-to-br from-green-500 to-emerald-600"
                    : "bg-gradient-to-br from-gray-400 to-gray-500"
                }`}
              >
                <span className="text-xl">{schedule.icon}</span>
              </div>

              {/* Day */}
              <h3
                className={`font-bold text-lg mb-2 ${
                  index === currentDayIndex ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {schedule.day}
              </h3>

              {/* Hours */}
              <p
                className={`text-sm font-medium ${
                  schedule.isOpen ? "text-gray-600" : "text-red-500"
                }`}
              >
                {schedule.hours}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Store Visit */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🏪</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Kunjungi Toko Kami
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Datang langsung ke toko untuk melihat produk secara langsung dan
              berkonsultasi dengan tim ahli kami.
            </p>
            <div className="text-center">
              <span className="inline-flex items-center space-x-2 text-blue-600 font-semibold">
                <span>📍</span>
                <span>Makassar, Sulawesi Selatan</span>
              </span>
            </div>
          </div>

          {/* WhatsApp 24/7 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              WhatsApp 24/7
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Konsultasi dan pemesanan kapan saja melalui WhatsApp. Tim kami
              siap membantu Anda 24 jam.
            </p>
            <div className="text-center">
              <a
                href="https://wa.me/6281244677317"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                <span>💬</span>
                <span>+62 812-4467-7317</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
