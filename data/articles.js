const articles = [
  {
    id: 1,
    title: "Tips Memilih Atap Spandek yang Berkualitas untuk Rumah Anda",
    slug: "tips-memilih-atap-spandek-berkualitas",
    excerpt:
      "Panduan lengkap memilih atap spandek yang tepat berdasarkan ketebalan, material, dan kebutuhan bangunan Anda.",
    content: `
      <h2>Mengapa Memilih Atap Spandek?</h2>
      <p>Atap spandek menjadi pilihan populer untuk berbagai jenis bangunan karena kekuatan, daya tahan, dan harga yang relatif terjangkau...</p>
      
      <h3>Faktor-faktor yang Perlu Dipertimbangkan</h3>
      <ul>
        <li><strong>Ketebalan Material:</strong> Pilih ketebalan sesuai dengan beban yang akan ditanggung</li>
        <li><strong>Coating:</strong> Galvanis atau galvalume untuk perlindungan anti karat</li>
        <li><strong>Ukuran:</strong> Sesuaikan dengan dimensi bangunan untuk meminimalkan sambungan</li>
      </ul>
    `,
    image: "/images/articles/atap-spandek-tips.jpg",
    author: "Tim Mitra Bangun Indo Baja",
    publishedAt: "2025-01-15",
    category: "Tips & Panduan",
    tags: ["atap spandek", "konstruksi", "bahan bangunan"],
    readTime: 5,
  },
  {
    id: 2,
    title: "Perbedaan Triplex Berdasarkan Jenis Kayu dan Kegunaannya",
    slug: "perbedaan-triplex-jenis-kayu-kegunaan",
    excerpt:
      "Mengenal berbagai jenis triplex mulai dari sengon, mahoni, hingga mercy beserta kegunaan optimalnya.",
    content: `
      <h2>Apa itu Triplex?</h2>
      <p>Triplex adalah material kayu lapis yang terdiri dari tiga lapisan kayu yang direkatkan dengan lem khusus...</p>
      
      <h3>Jenis-jenis Triplex</h3>
      <h4>1. Triplex Sengon</h4>
      <p>Cocok untuk furniture ringan dan aplikasi indoor...</p>
      
      <h4>2. Triplex Mahoni</h4>
      <p>Memiliki kekuatan yang lebih baik, cocok untuk furniture berkualitas...</p>
    `,
    image: "/images/articles/triplex-jenis.jpg",
    author: "Tim Mitra Bangun Indo Baja",
    publishedAt: "2025-01-12",
    category: "Edukasi Produk",
    tags: ["triplex", "kayu", "furniture"],
    readTime: 7,
  },
  {
    id: 3,
    title: "Cara Perawatan Besi Bangunan agar Tidak Mudah Berkarat",
    slug: "cara-perawatan-besi-bangunan-anti-karat",
    excerpt:
      "Panduan praktis merawat material besi pada konstruksi bangunan agar tahan lama dan tidak mudah berkarat.",
    content: `
      <h2>Pentingnya Perawatan Besi pada Konstruksi</h2>
      <p>Besi merupakan material utama dalam konstruksi bangunan yang memerlukan perawatan khusus...</p>
      
      <h3>Langkah-langkah Perawatan</h3>
      <ol>
        <li>Pembersihan rutin dari kotoran dan debu</li>
        <li>Aplikasi cat anti karat secara berkala</li>
        <li>Kontrol kelembaban lingkungan sekitar</li>
      </ol>
    `,
    image: "/images/articles/perawatan-besi.jpg",
    author: "Tim Mitra Bangun Indo Baja",
    publishedAt: "2025-01-10",
    category: "Maintenance",
    tags: ["besi", "perawatan", "anti karat"],
    readTime: 6,
  },
  {
    id: 4,
    title: "Mengenal Jenis-jenis Pipa PVC dan Aplikasinya",
    slug: "jenis-pipa-pvc-aplikasi",
    excerpt:
      "Panduan lengkap tentang berbagai jenis pipa PVC dan penggunaannya dalam sistem plumbing dan konstruksi.",
    content: `
      <h2>Pipa PVC dalam Konstruksi Modern</h2>
      <p>Pipa PVC telah menjadi pilihan utama dalam sistem plumbing karena berbagai keunggulannya...</p>
      
      <h3>Jenis-jenis Pipa PVC</h3>
      <ul>
        <li><strong>PVC AW:</strong> Untuk air bersih</li>
        <li><strong>PVC D:</strong> Untuk drainase</li>
        <li><strong>PVC Conduit:</strong> Untuk instalasi listrik</li>
      </ul>
    `,
    image: "/images/articles/pipa-pvc-jenis.jpg",
    author: "Tim Mitra Bangun Indo Baja",
    publishedAt: "2025-01-08",
    category: "Edukasi Produk",
    tags: ["pipa pvc", "plumbing", "instalasi"],
    readTime: 8,
  },
  {
    id: 5,
    title: "Keunggulan Baja Ringan untuk Konstruksi Modern",
    slug: "keunggulan-baja-ringan-konstruksi-modern",
    excerpt:
      "Mengapa baja ringan menjadi pilihan utama untuk konstruksi modern? Simak keunggulan dan aplikasinya.",
    content: `
      <h2>Revolusi Konstruksi dengan Baja Ringan</h2>
      <p>Baja ringan telah mengubah cara kita membangun struktur modern dengan berbagai keunggulannya...</p>
      
      <h3>Keunggulan Utama</h3>
      <ul>
        <li>Ringan namun kuat</li>
        <li>Tahan terhadap rayap dan jamur</li>
        <li>Proses pemasangan yang cepat</li>
        <li>Ramah lingkungan</li>
      </ul>
    `,
    image: "/images/articles/baja-ringan-keunggulan.jpg",
    author: "Tim Mitra Bangun Indo Baja",
    publishedAt: "2025-01-05",
    category: "Teknologi Konstruksi",
    tags: ["baja ringan", "konstruksi modern", "teknologi"],
    readTime: 6,
  },
  {
    id: 6,
    title: "Panduan Instalasi Plafon Gipsum yang Benar",
    slug: "panduan-instalasi-plafon-gipsum",
    excerpt:
      "Langkah-langkah detail instalasi plafon gipsum yang benar untuk hasil yang maksimal dan tahan lama.",
    content: `
      <h2>Persiapan Instalasi Plafon Gipsum</h2>
      <p>Instalasi plafon gipsum memerlukan persiapan yang matang dan teknik yang tepat...</p>
      
      <h3>Alat dan Bahan yang Diperlukan</h3>
      <ul>
        <li>Papan gipsum</li>
        <li>Rangka metal furring</li>
        <li>Sekrup gipsum</li>
        <li>Compound gipsum</li>
      </ul>
    `,
    image: "/images/articles/instalasi-plafon-gipsum.jpg",
    author: "Tim Mitra Bangun Indo Baja",
    publishedAt: "2025-01-03",
    category: "Tutorial",
    tags: ["plafon gipsum", "instalasi", "tutorial"],
    readTime: 10,
  },
];

const categories = [
  "Tips & Panduan",
  "Edukasi Produk",
  "Maintenance",
  "Teknologi Konstruksi",
  "Tutorial",
];

export { articles, categories };
