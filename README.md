# Mitra Bangun Indo Baja - Website Statis

Website statis untuk toko bahan bangunan dan material menggunakan Next.js dengan fitur SEO optimal, responsif, dan terintegrasi WhatsApp.

## 🚀 Fitur Utama

- **SEO Friendly**: Optimasi meta tags, structured data, sitemap
- **Responsive Design**: Tampilan optimal di semua device
- **WhatsApp Integration**: Tombol floating dan form terintegrasi
- **Product Catalog**: Daftar produk dengan filter dan search
- **Articles/Blog**: Sistem artikel untuk content marketing
- **Fast Loading**: Optimasi gambar dan performance
- **Security**: Headers keamanan dan proteksi XSS
- **PWA Ready**: Progressive Web App capabilities

## 🛠 Teknologi

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **SEO**: next-seo
- **Icons**: Heroicons
- **Deployment**: Static Export

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## 🏗 Struktur Project

```
├── pages/
│   ├── index.js          # Homepage
│   ├── produk.js         # Products page
│   ├── artikel.js        # Articles page
│   └── kontak.js         # Contact page
├── components/
│   ├── Header.js         # Navigation header
│   ├── Footer.js         # Footer component
│   ├── ProductList.js    # Product listing
│   ├── SearchBar.js      # Search functionality
│   └── WhatsAppButton.js # WhatsApp integration
├── data/
│   ├── products.js       # Product data
│   └── articles.js       # Article data
└── public/
    ├── images/           # Static images
    └── robots.txt        # SEO robots file
```

## 🎯 SEO Features

- Meta tags optimization
- Open Graph tags
- Twitter Cards
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Canonical URLs
- Performance optimization

## 📱 WhatsApp Integration

- Floating WhatsApp button
- Contact form integration
- Product inquiry links
- Automatic message formatting

## 🔧 Konfigurasi

### Environment Variables

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=6281244677317
NEXT_PUBLIC_SITE_URL=https://mitrabangunindobaja.com
```

### Next.js Config

- Static export configuration
- Security headers
- Image optimization
- Performance optimization

## 🚀 Deployment

Website ini didesain untuk deployment sebagai static site ke:

- Vercel
- Netlify
- GitHub Pages
- Hostinger (static hosting)

```bash
# Build dan export
npm run build && npm run export

# Upload folder 'out' ke hosting provider
```

## 📈 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔒 Security Features

- Content Security Policy headers
- XSS Protection
- MIME type sniffing protection
- Frame options protection
- HTTPS enforcement

## 📞 Kontak

- **WhatsApp**: +62 812-4467-7317
- **Email**: adilabadi317@gmail.com
- **Website**: https://mitrabangunindobaja.com

## 📄 License

© 2025 Mitra Bangun Indo Baja. All rights reserved.
