"use strict";(()=>{var a={};a.id=722,a.ids=[722],a.modules={3718:(a,e,n)=>{n.r(e),n.d(e,{config:()=>T,default:()=>N,getServerSideProps:()=>D,getStaticPaths:()=>S,getStaticProps:()=>w,reportWebVitals:()=>A,routeModule:()=>q,unstable_getServerProps:()=>K,unstable_getServerSideProps:()=>I,unstable_getStaticParams:()=>C,unstable_getStaticPaths:()=>B,unstable_getStaticProps:()=>M});var i={};n.r(i),n.d(i,{default:()=>y,getStaticPaths:()=>v,getStaticProps:()=>P});var t=n(7093),s=n(5244),l=n(1323),r=n(1106),g=n(2166),u=n(997),d=n(9816),m=n.n(d),p=n(6641),o=n(1163),b=n(6689),x=n(3150),c=n(6522),h=n(4930),k=n(7633),f=n(1664),j=n.n(f);function y(){let{slug:a}=(0,o.useRouter)().query,[e,n]=(0,b.useState)(null),[i,t]=(0,b.useState)([]);(0,b.useEffect)(()=>{if(a){let e=k.D.find(e=>e.slug===a);n(e),e&&t(k.D.filter(a=>a.category===e.category&&a.id!==e.id).slice(0,3))}},[a]);let s=a=>new Date(a).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"});return e?(0,u.jsxs)(u.Fragment,{children:[u.jsx(p.NextSeo,{title:`${e.title} | Mitra Bangun Indo Baja`,description:e.excerpt,openGraph:{title:e.title,description:e.excerpt,url:`https://mitrabangunindobaja.com/artikel/${e.slug}`,images:[{url:e.image||"/images/default-article.jpg",width:1200,height:630,alt:e.title}]}}),u.jsx(x.Z,{}),(0,u.jsxs)("main",{className:"jsx-861f93b275bf93a2 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 pt-20",children:[u.jsx("div",{className:"jsx-861f93b275bf93a2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16",children:(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsx("nav",{className:"jsx-861f93b275bf93a2 mb-8",children:(0,u.jsxs)("ol",{className:"jsx-861f93b275bf93a2 flex items-center space-x-2 text-blue-100",children:[u.jsx("li",{className:"jsx-861f93b275bf93a2",children:u.jsx(j(),{href:"/",className:"hover:text-white transition-colors",children:"Beranda"})}),u.jsx("li",{className:"jsx-861f93b275bf93a2",children:"/"}),u.jsx("li",{className:"jsx-861f93b275bf93a2",children:u.jsx(j(),{href:"/artikel",className:"hover:text-white transition-colors",children:"Artikel"})}),u.jsx("li",{className:"jsx-861f93b275bf93a2",children:"/"}),u.jsx("li",{className:"jsx-861f93b275bf93a2 text-white font-medium",children:e.title})]})}),(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 text-center",children:[u.jsx("div",{className:"jsx-861f93b275bf93a2 inline-flex items-center px-3 py-1 bg-blue-500/30 rounded-full text-sm font-medium mb-4",children:e.category}),u.jsx("h1",{className:"jsx-861f93b275bf93a2 text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight",children:e.title}),(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 flex flex-wrap justify-center items-center gap-6 text-blue-100",children:[(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 flex items-center space-x-2",children:[u.jsx("span",{className:"jsx-861f93b275bf93a2",children:"\uD83D\uDC64"}),u.jsx("span",{className:"jsx-861f93b275bf93a2",children:e.author})]}),(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 flex items-center space-x-2",children:[u.jsx("span",{className:"jsx-861f93b275bf93a2",children:"\uD83D\uDCC5"}),u.jsx("span",{className:"jsx-861f93b275bf93a2",children:s(e.publishedAt)})]}),(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 flex items-center space-x-2",children:[u.jsx("span",{className:"jsx-861f93b275bf93a2",children:"⏱️"}),(0,u.jsxs)("span",{className:"jsx-861f93b275bf93a2",children:[e.readTime," menit baca"]})]})]})]})]})}),u.jsx("div",{className:"jsx-861f93b275bf93a2 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 bg-white rounded-3xl shadow-xl overflow-hidden",children:[e.image&&u.jsx("div",{className:"jsx-861f93b275bf93a2 h-64 md:h-96 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center",children:(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 text-center",children:[u.jsx("div",{className:"jsx-861f93b275bf93a2 text-8xl mb-4",children:"\uD83D\uDCF0"}),u.jsx("p",{className:"jsx-861f93b275bf93a2 text-gray-600",children:"Gambar artikel akan ditampilkan di sini"})]})}),(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 p-8 md:p-12",children:[u.jsx("div",{className:"jsx-861f93b275bf93a2 bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg",children:u.jsx("p",{className:"jsx-861f93b275bf93a2 text-lg text-gray-700 leading-relaxed",children:e.excerpt})}),u.jsx("div",{dangerouslySetInnerHTML:{__html:e.content},className:"jsx-861f93b275bf93a2 prose prose-lg max-w-none"}),e.tags&&e.tags.length>0&&(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 mt-12 pt-8 border-t border-gray-200",children:[u.jsx("h3",{className:"jsx-861f93b275bf93a2 text-lg font-bold text-gray-800 mb-4",children:"Tags:"}),u.jsx("div",{className:"jsx-861f93b275bf93a2 flex flex-wrap gap-2",children:e.tags.map((a,e)=>(0,u.jsxs)("span",{className:"jsx-861f93b275bf93a2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium",children:["#",a]},e))})]}),(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl text-center",children:[u.jsx("h3",{className:"jsx-861f93b275bf93a2 text-2xl font-bold text-gray-800 mb-4",children:"Butuh Konsultasi Lebih Lanjut?"}),u.jsx("p",{className:"jsx-861f93b275bf93a2 text-gray-600 mb-6",children:"Tim ahli kami siap membantu Anda memilih bahan bangunan yang tepat"}),(0,u.jsxs)("a",{href:"https://wa.me/6281244677317",target:"_blank",rel:"noopener noreferrer",className:"jsx-861f93b275bf93a2 inline-flex items-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors hover:scale-105 transform duration-300",children:[u.jsx("span",{className:"jsx-861f93b275bf93a2",children:"\uD83D\uDCAC"}),u.jsx("span",{className:"jsx-861f93b275bf93a2",children:"Konsultasi Gratis"})]})]})]})]})}),i.length>0&&(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",children:[u.jsx("h2",{className:"jsx-861f93b275bf93a2 text-3xl font-bold text-gray-800 mb-8 text-center",children:"Artikel Terkait"}),u.jsx("div",{className:"jsx-861f93b275bf93a2 grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:i.map(a=>u.jsx(j(),{href:`/artikel/${a.slug}`,className:"group",children:(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105",children:[u.jsx("div",{className:"jsx-861f93b275bf93a2 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center",children:u.jsx("span",{className:"jsx-861f93b275bf93a2 text-4xl",children:"\uD83D\uDCF0"})}),(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 p-6",children:[u.jsx("div",{className:"jsx-861f93b275bf93a2 text-sm text-blue-600 font-medium mb-2",children:a.category}),u.jsx("h3",{className:"jsx-861f93b275bf93a2 font-bold text-lg text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2",children:a.title}),u.jsx("p",{className:"jsx-861f93b275bf93a2 text-gray-600 text-sm line-clamp-3 mb-4",children:a.excerpt}),(0,u.jsxs)("div",{className:"jsx-861f93b275bf93a2 flex items-center justify-between text-xs text-gray-500",children:[u.jsx("span",{className:"jsx-861f93b275bf93a2",children:s(a.publishedAt)}),(0,u.jsxs)("span",{className:"jsx-861f93b275bf93a2",children:[a.readTime," min"]})]})]})]})},a.id))})]}),u.jsx("div",{className:"jsx-861f93b275bf93a2 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",children:u.jsx("div",{className:"jsx-861f93b275bf93a2 text-center",children:(0,u.jsxs)(j(),{href:"/artikel",className:"inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg",children:[u.jsx("span",{className:"jsx-861f93b275bf93a2",children:"←"}),u.jsx("span",{className:"jsx-861f93b275bf93a2",children:"Kembali ke Daftar Artikel"})]})})})]}),u.jsx(c.Z,{}),u.jsx(h.Z,{}),u.jsx(m(),{id:"861f93b275bf93a2",children:".prose h2{@apply text-2xl font-bold text-gray-800 mt-8 mb-4;}.prose h3{@apply text-xl font-bold text-gray-800 mt-6 mb-3;}.prose h4{@apply text-lg font-bold text-gray-800 mt-4 mb-2;}.prose p{@apply text-gray-700 leading-relaxed mb-4;}.prose ul{@apply space-y-2 mb-6;}.prose li{@apply text-gray-700;}.prose strong{@apply font-bold text-gray-800;}.line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}"})]}):(0,u.jsxs)(u.Fragment,{children:[u.jsx(x.Z,{}),u.jsx("main",{className:"min-h-screen bg-gray-50 pt-20",children:(0,u.jsxs)("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[u.jsx("div",{className:"text-8xl mb-4",children:"\uD83D\uDCC4"}),u.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Artikel Tidak Ditemukan"}),u.jsx("p",{className:"text-gray-600 mb-8",children:"Maaf, artikel yang Anda cari tidak dapat ditemukan."}),u.jsx(j(),{href:"/artikel",className:"bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:"Kembali ke Daftar Artikel"})]})}),u.jsx(c.Z,{}),u.jsx(h.Z,{})]})}async function v(){return{paths:k.D.map(a=>({params:{slug:a.slug}})),fallback:!1}}async function P({params:a}){let e=k.D.find(e=>e.slug===a.slug);return e?{props:{article:e}}:{notFound:!0}}let N=(0,l.l)(i,"default"),w=(0,l.l)(i,"getStaticProps"),S=(0,l.l)(i,"getStaticPaths"),D=(0,l.l)(i,"getServerSideProps"),T=(0,l.l)(i,"config"),A=(0,l.l)(i,"reportWebVitals"),M=(0,l.l)(i,"unstable_getStaticProps"),B=(0,l.l)(i,"unstable_getStaticPaths"),C=(0,l.l)(i,"unstable_getStaticParams"),K=(0,l.l)(i,"unstable_getServerProps"),I=(0,l.l)(i,"unstable_getServerSideProps"),q=new t.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/artikel/[slug]",pathname:"/artikel/[slug]",bundlePath:"",filename:""},components:{App:g.default,Document:r.default},userland:i})},7633:(a,e,n)=>{n.d(e,{D:()=>i});let i=[{id:1,title:"Tips Memilih Atap Spandek yang Berkualitas untuk Rumah Anda",slug:"tips-memilih-atap-spandek-berkualitas",excerpt:"Panduan lengkap memilih atap spandek yang tepat berdasarkan ketebalan, material, dan kebutuhan bangunan Anda. Dapatkan tips dari ahli konstruksi untuk investasi jangka panjang.",content:`
      <h2>Mengapa Memilih Atap Spandek?</h2>
      <p>Atap spandek telah menjadi pilihan utama untuk berbagai jenis bangunan di Indonesia karena kombinasi sempurna antara kekuatan, daya tahan, dan harga yang relatif terjangkau. Material ini sangat cocok untuk iklim tropis Indonesia yang memiliki curah hujan tinggi dan panas matahari yang intens.</p>
      
      <p>Dibandingkan dengan material atap konvensional seperti genteng tanah liat atau asbes, atap spandek menawarkan beberapa keunggulan signifikan yang membuatnya semakin populer di kalangan kontraktor dan pemilik rumah.</p>

      <h3>Keunggulan Utama Atap Spandek</h3>
      <ul>
        <li><strong>Tahan Korosi:</strong> Dengan lapisan galvanis atau galvalume, atap spandek dapat bertahan hingga 15-20 tahun</li>
        <li><strong>Ringan namun Kuat:</strong> Beban struktural yang ringan namun mampu menahan angin kencang</li>
        <li><strong>Pemasangan Cepat:</strong> Ukuran lembaran yang besar mempercepat proses instalasi</li>
        <li><strong>Ekonomis:</strong> Harga yang kompetitif dengan value yang tinggi</li>
        <li><strong>Variasi Warna:</strong> Tersedia dalam berbagai pilihan warna dan finishing</li>
      </ul>
      
      <h3>Faktor-faktor yang Perlu Dipertimbangkan Saat Memilih</h3>
      
      <h4>1. Ketebalan Material</h4>
      <p>Ketebalan atap spandek sangat menentukan daya tahan dan kekuatan material. Berikut adalah panduan memilih ketebalan yang tepat:</p>
      <ul>
        <li><strong>0.20 mm:</strong> Cocok untuk bangunan sementara atau gudang ringan</li>
        <li><strong>0.25 mm:</strong> Ideal untuk rumah tinggal dengan bentang sedang</li>
        <li><strong>0.30 mm:</strong> Recommended untuk bangunan komersial atau area dengan angin kencang</li>
        <li><strong>0.35 mm ke atas:</strong> Untuk bangunan industri atau area dengan kondisi cuaca ekstrem</li>
      </ul>

      <h4>2. Jenis Coating (Lapisan Pelindung)</h4>
      <p>Coating adalah kunci utama daya tahan atap spandek. Pilihan coating yang tersedia:</p>
      <ul>
        <li><strong>Galvanis (GI):</strong> Lapisan seng yang memberikan perlindungan dasar anti karat</li>
        <li><strong>Galvalume (GL):</strong> Kombinasi aluminium dan seng yang lebih tahan korosi</li>
        <li><strong>Color Coated:</strong> Lapisan cat dengan berbagai pilihan warna dan finish</li>
        <li><strong>Anti Condensation:</strong> Lapisan khusus untuk mengurangi embun di bagian bawah</li>
      </ul>

      <h4>3. Profil dan Ukuran</h4>
      <p>Pemilihan profil yang tepat akan mempengaruhi estetika dan fungsi atap:</p>
      <ul>
        <li><strong>Profil Trapesium:</strong> Paling umum digunakan, cocok untuk segala jenis bangunan</li>
        <li><strong>Profil Sinusoidal:</strong> Memberikan tampilan yang lebih halus dan modern</li>
        <li><strong>Profil Standing Seam:</strong> Premium option dengan sambungan yang rapi</li>
      </ul>

      <h3>Tips Instalasi yang Benar</h3>
      <p>Pemasangan yang benar sama pentingnya dengan pemilihan material yang berkualitas:</p>
      <ol>
        <li><strong>Persiapan Rangka:</strong> Pastikan rangka baja ringan atau kayu dalam kondisi yang baik dan sesuai standar</li>
        <li><strong>Slope yang Tepat:</strong> Minimum kemiringan 15\xb0 untuk aliran air yang optimal</li>
        <li><strong>Overlap yang Cukup:</strong> Minimal 15cm overlap untuk mencegah kebocoran</li>
        <li><strong>Sistem Ventilasi:</strong> Pasang ridge vent untuk sirkulasi udara yang baik</li>
        <li><strong>Aksesoris Pendukung:</strong> Gunakan gutter, nok, dan lisplang yang sesuai</li>
      </ol>

      <h3>Perawatan untuk Memperpanjang Usia Pakai</h3>
      <p>Meskipun atap spandek tergolong low maintenance, beberapa langkah perawatan berikut dapat memperpanjang usia pakai:</p>
      <ul>
        <li>Pembersihan rutin dari daun dan kotoran</li>
        <li>Inspeksi berkala untuk memastikan tidak ada sekrup yang kendor</li>
        <li>Periksa kondisi gutter dan saluran air</li>
        <li>Touch up cat pada area yang tergores (untuk yang bercat)</li>
        <li>Pastikan ventilasi tidak tersumbat</li>
      </ul>

      <h3>Investasi Jangka Panjang</h3>
      <p>Meskipun harga awal atap spandek mungkin lebih tinggi dibanding beberapa alternatif, namun dengan perhitungan jangka panjang, material ini menawarkan value yang sangat baik. Daya tahan hingga 20 tahun dengan perawatan minimal membuat atap spandek menjadi investasi yang cerdas untuk rumah Anda.</p>

      <p>Dengan memilih atap spandek yang tepat dan melakukan instalasi yang benar, Anda akan mendapatkan perlindungan optimal untuk bangunan dengan biaya yang efisien dalam jangka panjang.</p>
    `,image:"/images/articles/atap-spandek-tips.jpg",author:"Tim Mitra Bangun Indo Baja",publishedAt:"2025-01-15",category:"Tips & Panduan",tags:["atap spandek","konstruksi","bahan bangunan","galvanis","galvalume","tips konstruksi"],readTime:8},{id:2,title:"Perbedaan Triplex Berdasarkan Jenis Kayu dan Kegunaannya",slug:"perbedaan-triplex-jenis-kayu-kegunaan",excerpt:"Mengenal berbagai jenis triplex mulai dari sengon, mahoni, hingga mercy beserta kegunaan optimalnya.",content:`
      <h2>Apa itu Triplex?</h2>
      <p>Triplex adalah material kayu lapis yang terdiri dari tiga lapisan kayu yang direkatkan dengan lem khusus...</p>
      
      <h3>Jenis-jenis Triplex</h3>
      <h4>1. Triplex Sengon</h4>
      <p>Cocok untuk furniture ringan dan aplikasi indoor...</p>
      
      <h4>2. Triplex Mahoni</h4>
      <p>Memiliki kekuatan yang lebih baik, cocok untuk furniture berkualitas...</p>
    `,image:"/images/articles/triplex-jenis.jpg",author:"Tim Mitra Bangun Indo Baja",publishedAt:"2025-01-12",category:"Edukasi Produk",tags:["triplex","kayu","furniture"],readTime:7},{id:3,title:"Cara Perawatan Besi Bangunan agar Tidak Mudah Berkarat",slug:"cara-perawatan-besi-bangunan-anti-karat",excerpt:"Panduan praktis merawat material besi pada konstruksi bangunan agar tahan lama dan tidak mudah berkarat.",content:`
      <h2>Pentingnya Perawatan Besi pada Konstruksi</h2>
      <p>Besi merupakan material utama dalam konstruksi bangunan yang memerlukan perawatan khusus...</p>
      
      <h3>Langkah-langkah Perawatan</h3>
      <ol>
        <li>Pembersihan rutin dari kotoran dan debu</li>
        <li>Aplikasi cat anti karat secara berkala</li>
        <li>Kontrol kelembaban lingkungan sekitar</li>
      </ol>
    `,image:"/images/articles/perawatan-besi.jpg",author:"Tim Mitra Bangun Indo Baja",publishedAt:"2025-01-10",category:"Maintenance",tags:["besi","perawatan","anti karat"],readTime:6},{id:4,title:"Mengenal Jenis-jenis Pipa PVC dan Aplikasinya",slug:"jenis-pipa-pvc-aplikasi",excerpt:"Panduan lengkap tentang berbagai jenis pipa PVC dan penggunaannya dalam sistem plumbing dan konstruksi.",content:`
      <h2>Pipa PVC dalam Konstruksi Modern</h2>
      <p>Pipa PVC telah menjadi pilihan utama dalam sistem plumbing karena berbagai keunggulannya...</p>
      
      <h3>Jenis-jenis Pipa PVC</h3>
      <ul>
        <li><strong>PVC AW:</strong> Untuk air bersih</li>
        <li><strong>PVC D:</strong> Untuk drainase</li>
        <li><strong>PVC Conduit:</strong> Untuk instalasi listrik</li>
      </ul>
    `,image:"/images/articles/pipa-pvc-jenis.jpg",author:"Tim Mitra Bangun Indo Baja",publishedAt:"2025-01-08",category:"Edukasi Produk",tags:["pipa pvc","plumbing","instalasi"],readTime:8},{id:5,title:"Keunggulan Baja Ringan untuk Konstruksi Modern",slug:"keunggulan-baja-ringan-konstruksi-modern",excerpt:"Mengapa baja ringan menjadi pilihan utama untuk konstruksi modern? Simak keunggulan dan aplikasinya.",content:`
      <h2>Revolusi Konstruksi dengan Baja Ringan</h2>
      <p>Baja ringan telah mengubah cara kita membangun struktur modern dengan berbagai keunggulannya...</p>
      
      <h3>Keunggulan Utama</h3>
      <ul>
        <li>Ringan namun kuat</li>
        <li>Tahan terhadap rayap dan jamur</li>
        <li>Proses pemasangan yang cepat</li>
        <li>Ramah lingkungan</li>
      </ul>
    `,image:"/images/articles/baja-ringan-keunggulan.jpg",author:"Tim Mitra Bangun Indo Baja",publishedAt:"2025-01-05",category:"Teknologi Konstruksi",tags:["baja ringan","konstruksi modern","teknologi"],readTime:6},{id:6,title:"Panduan Instalasi Plafon Gipsum yang Benar",slug:"panduan-instalasi-plafon-gipsum",excerpt:"Langkah-langkah detail instalasi plafon gipsum yang benar untuk hasil yang maksimal dan tahan lama.",content:`
      <h2>Persiapan Instalasi Plafon Gipsum</h2>
      <p>Instalasi plafon gipsum memerlukan persiapan yang matang dan teknik yang tepat...</p>
      
      <h3>Alat dan Bahan yang Diperlukan</h3>
      <ul>
        <li>Papan gipsum</li>
        <li>Rangka metal furring</li>
        <li>Sekrup gipsum</li>
        <li>Compound gipsum</li>
      </ul>
    `,image:"/images/articles/instalasi-plafon-gipsum.jpg",author:"Tim Mitra Bangun Indo Baja",publishedAt:"2025-01-03",category:"Tutorial",tags:["plafon gipsum","instalasi","tutorial"],readTime:10}]},6641:a=>{a.exports=require("next-seo")},2785:a=>{a.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:a=>{a.exports=require("next/head")},6689:a=>{a.exports=require("react")},6405:a=>{a.exports=require("react-dom")},997:a=>{a.exports=require("react/jsx-runtime")},9816:a=>{a.exports=require("styled-jsx/style")},7147:a=>{a.exports=require("fs")},1017:a=>{a.exports=require("path")},2781:a=>{a.exports=require("stream")},9796:a=>{a.exports=require("zlib")}};var e=require("../../webpack-runtime.js");e.C(a);var n=a=>e(e.s=a),i=e.X(0,[859,559,163,294],()=>n(3718));module.exports=i})();