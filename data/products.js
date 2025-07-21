const products = [
  {
    id: 1,
    name: "Besi Beton Ulir 10mm",
    category: "Besi & Baja",
    price: "Rp 85.000/batang",
    description: "Besi beton ulir diameter 10mm panjang 12m, kualitas SNI untuk konstruksi bangunan",
    image: "/images/besi-beton-ulir.jpg",
    specifications: {
      diameter: "10mm",
      length: "12m",
      material: "Baja Karbon",
      standard: "SNI 2052-2017"
    }
  },
  {
    id: 2,
    name: "Semen Portland 50kg",
    category: "Semen",
    price: "Rp 65.000/sak",
    description: "Semen Portland Type I untuk konstruksi umum, kemasan 50kg",
    image: "/images/semen-portland.jpg",
    specifications: {
      weight: "50kg",
      type: "Portland Type I",
      brand: "Holcim/Gresik",
      standard: "SNI 15-2049-2004"
    }
  },
  {
    id: 3,
    name: "Bata Merah Press",
    category: "Bata & Batako",
    price: "Rp 850/biji",
    description: "Bata merah press kualitas super, ukuran standar 23x11x5cm",
    image: "/images/bata-merah.jpg",
    specifications: {
      size: "23x11x5cm",
      type: "Press",
      quality: "Super",
      absorption: "< 20%"
    }
  },
  {
    id: 4,
    name: "Genteng Metal Spandek",
    category: "Atap",
    price: "Rp 85.000/lembar",
    description: "Genteng metal spandek galvalum tebal 0.4mm, tahan karat dan anti bocor",
    image: "/images/genteng-spandek.jpg",
    specifications: {
      thickness: "0.4mm",
      material: "Galvalum",
      width: "1m",
      length: "6m"
    }
  },
  {
    id: 5,
    name: "Pipa PVC 4 inch",
    category: "Pipa & Fitting",
    price: "Rp 125.000/batang",
    description: "Pipa PVC diameter 4 inch untuk saluran air, panjang 4m",
    image: "/images/pipa-pvc.jpg",
    specifications: {
      diameter: "4 inch (110mm)",
      length: "4m",
      pressure: "PN 10",
      standard: "SNI 06-0084-2002"
    }
  },
  {
    id: 6,
    name: "Keramik Lantai 40x40",
    category: "Keramik & Granit",
    price: "Rp 45.000/m²",
    description: "Keramik lantai motif marmer ukuran 40x40cm, anti slip",
    image: "/images/keramik-lantai.jpg",
    specifications: {
      size: "40x40cm",
      finish: "Matt",
      absorption: "< 3%",
      grade: "Grade A"
    }
  },
  {
    id: 7,
    name: "Cat Tembok Exterior 20kg",
    category: "Cat & Pelapis",
    price: "Rp 245.000/pail",
    description: "Cat tembok exterior tahan cuaca, kemasan 20kg berbagai warna",
    image: "/images/cat-exterior.jpg",
    specifications: {
      weight: "20kg",
      coverage: "16-20 m²/kg",
      type: "Acrylic",
      weather_resistance: "Excellent"
    }
  },
  {
    id: 8,
    name: "Pasir Cor Halus",
    category: "Pasir & Kerikil",
    price: "Rp 350.000/m³",
    description: "Pasir cor halus berkualitas untuk adukan beton dan plester",
    image: "/images/pasir-cor.jpg",
    specifications: {
      type: "Pasir Cor",
      grain_size: "Halus",
      cleanliness: "Bersih",
      unit: "m³"
    }
  }
];

export default products;
