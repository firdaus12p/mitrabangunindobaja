# Mitra Bangunindobaja Website

Website resmi Mitra Bangunindobaja - Supplier terpercaya untuk semua kebutuhan bangunan dan konstruksi.

## 🏗️ Tentang Proyek

Website ini dibangun menggunakan Next.js dan Tailwind CSS untuk memberikan pengalaman pengguna yang optimal dalam mencari dan membeli material bangunan.

## ✨ Fitur Utama

- **Responsive Design**: Tampilan optimal di semua perangkat
- **Product Search**: Pencarian produk dengan dropdown suggestions
- **Category Filter**: Filter produk berdasarkan kategori
- **Mobile-First**: Prioritas pada pengalaman mobile
- **SEO Optimized**: Struktur SEO yang baik untuk ranking pencarian
- **Security**: Headers keamanan dan proteksi XSS

## 🛠️ Teknologi

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **Build Tools**: PostCSS, Autoprefixer
- **Deployment**: Static Export

## 📦 Instalasi

1. Clone repository:
```bash
git clone https://github.com/firdaus12p/mitrabangunindobaja.git
cd mitrabangunindobaja
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:3000`

## 🗂️ Struktur Proyek

```
├── components/
│   ├── Header.js         # Navigation header
│   └── SearchBar.js      # Search component
├── data/
│   └── products.js       # Product data
├── pages/
│   ├── _app.js          # App wrapper
│   ├── _document.js     # Document structure
│   ├── index.js         # Homepage
│   ├── produk.js        # Products page
│   └── kontak.js        # Contact page
├── public/              # Static assets
├── styles/
│   └── globals.css      # Global styles
└── package.json         # Dependencies
```

## 🚀 Build & Deploy

1. Build untuk production:
```bash
npm run build
```

2. Export static files:
```bash
npm run export
```

3. Deploy folder `out/` ke hosting provider

## 📱 Fitur Mobile

- Navbar dengan layout: Logo - SearchBar - Burger Menu
- Search bar terintegrasi di navbar untuk pengalaman yang seamless
- Menu mobile yang responsive
- Touch-friendly buttons dan navigation

## 🔍 SEO Features

- Meta tags yang optimal
- Structured data
- Sitemap generation
- Clean URLs
- Open Graph tags

## 🔒 Security

- Security headers
- XSS protection
- Content Security Policy
- Safe external links

## 📞 Kontak

- **Email**: info@mitrabangunindobaja.com
- **Telepon**: +62 123 456 7890
- **Website**: https://mitrabangunindobaja.com

## 📄 License

© 2024 Mitra Bangunindobaja. All rights reserved.
