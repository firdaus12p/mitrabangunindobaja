"use strict";(()=>{var a={};a.id=492,a.ids=[492],a.modules={6465:(a,n,e)=>{e.r(n),e.d(n,{config:()=>S,default:()=>j,getServerSideProps:()=>v,getStaticPaths:()=>f,getStaticProps:()=>P,reportWebVitals:()=>T,routeModule:()=>C,unstable_getServerProps:()=>B,unstable_getServerSideProps:()=>A,unstable_getStaticParams:()=>M,unstable_getStaticPaths:()=>N,unstable_getStaticProps:()=>w});var i={};e.r(i),e.d(i,{default:()=>y,getStaticPaths:()=>b,getStaticProps:()=>x});var t=e(7093),s=e(5244),r=e(1323),l=e(1106),g=e(2166),u=e(997);e(6689);var p=e(1664),d=e.n(p),o=e(6641),m=e(3150),k=e(6522),h=e(4930),c=e(7633);async function b(){return{paths:c.D.map(a=>({params:{slug:a.slug}})),fallback:!1}}async function x({params:a}){let n=c.D.find(n=>n.slug===a.slug);return n?{props:{article:n}}:{notFound:!0}}function y({article:a}){let n=c.D.filter(n=>n.id!==a.id&&n.category===a.category).slice(0,3);return(0,u.jsxs)(u.Fragment,{children:[u.jsx(o.NextSeo,{title:`${a.title} | Mitra Bangun Indo Baja`,description:a.description,openGraph:{title:a.title,description:a.description,type:"article",article:{publishedTime:a.date,tags:a.tags}}}),u.jsx(m.Z,{}),u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-white",children:(0,u.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,u.jsxs)("nav",{className:"flex items-center space-x-2 text-sm text-gray-600 mb-8",children:[u.jsx(d(),{href:"/",className:"hover:text-blue-600",children:"Home"}),u.jsx("span",{children:"›"}),u.jsx(d(),{href:"/blog",className:"hover:text-blue-600",children:"Artikel"}),u.jsx("span",{children:"›"}),u.jsx("span",{className:"text-gray-800",children:a.title})]}),(0,u.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[u.jsx("div",{className:"lg:col-span-3",children:(0,u.jsxs)("article",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[u.jsx("div",{className:"aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center",children:u.jsx("span",{className:"text-blue-600 font-semibold text-2xl",children:a.category})}),(0,u.jsxs)("div",{className:"p-8",children:[(0,u.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,u.jsxs)("div",{className:"flex items-center text-sm text-gray-500",children:[u.jsx("span",{children:new Date(a.date).toLocaleDateString("id-ID",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),u.jsx("span",{className:"mx-2",children:"•"}),u.jsx("span",{children:a.readTime})]}),u.jsx("span",{className:"bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full",children:a.category})]}),u.jsx("h1",{className:"text-3xl lg:text-4xl font-bold text-gray-800 mb-6",children:a.title}),u.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:a.description}),u.jsx("div",{className:"prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700",dangerouslySetInnerHTML:{__html:a.content}}),(0,u.jsxs)("div",{className:"mt-8 pt-6 border-t border-gray-200",children:[u.jsx("h3",{className:"text-sm font-semibold text-gray-800 mb-3",children:"Tags:"}),u.jsx("div",{className:"flex flex-wrap gap-2",children:a.tags.map((a,n)=>u.jsx("span",{className:"inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded",children:a},n))})]})]})]})}),(0,u.jsxs)("div",{className:"lg:col-span-1",children:[n.length>0&&(0,u.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6",children:[u.jsx("h3",{className:"text-lg font-bold text-gray-800 mb-4",children:"Artikel Terkait"}),u.jsx("div",{className:"space-y-4",children:n.map(a=>u.jsx(d(),{href:`/blog/${a.slug}`,className:"block group",children:(0,u.jsxs)("div",{className:"border-b border-gray-100 pb-4 last:border-b-0 last:pb-0",children:[u.jsx("h4",{className:"font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2",children:a.title}),u.jsx("p",{className:"text-sm text-gray-500",children:new Date(a.date).toLocaleDateString("id-ID")})]})},a.id))})]}),u.jsx("div",{className:"mt-6",children:u.jsx(d(),{href:"/blog",className:"block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium",children:"← Kembali ke Artikel"})})]})]})]})}),u.jsx(k.Z,{}),u.jsx(h.Z,{})]})}let j=(0,r.l)(i,"default"),P=(0,r.l)(i,"getStaticProps"),f=(0,r.l)(i,"getStaticPaths"),v=(0,r.l)(i,"getServerSideProps"),S=(0,r.l)(i,"config"),T=(0,r.l)(i,"reportWebVitals"),w=(0,r.l)(i,"unstable_getStaticProps"),N=(0,r.l)(i,"unstable_getStaticPaths"),M=(0,r.l)(i,"unstable_getStaticParams"),B=(0,r.l)(i,"unstable_getServerProps"),A=(0,r.l)(i,"unstable_getServerSideProps"),C=new t.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/blog/[slug]",pathname:"/blog/[slug]",bundlePath:"",filename:""},components:{App:g.default,Document:l.default},userland:i})},7633:(a,n,e)=>{e.d(n,{D:()=>i});let i=[{id:1,title:"Tips Memilih Atap Spandek yang Berkualitas untuk Rumah Anda",slug:"tips-memilih-atap-spandek-berkualitas",excerpt:"Panduan lengkap memilih atap spandek yang tepat berdasarkan ketebalan, material, dan kebutuhan bangunan Anda. Dapatkan tips dari ahli konstruksi untuk investasi jangka panjang.",content:`
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
    `,image:"/images/articles/instalasi-plafon-gipsum.jpg",author:"Tim Mitra Bangun Indo Baja",publishedAt:"2025-01-03",category:"Tutorial",tags:["plafon gipsum","instalasi","tutorial"],readTime:10}]},6641:a=>{a.exports=require("next-seo")},2785:a=>{a.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:a=>{a.exports=require("next/head")},6689:a=>{a.exports=require("react")},997:a=>{a.exports=require("react/jsx-runtime")},9816:a=>{a.exports=require("styled-jsx/style")},1017:a=>{a.exports=require("path")}};var n=require("../../webpack-runtime.js");n.C(a);var e=a=>n(n.s=a),i=n.X(0,[859,559,294],()=>e(6465));module.exports=i})();