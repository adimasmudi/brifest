const umkms = [
  {
    id: 1,
    category: 'kuliner',
    judul: 'Bakso meledak',
    deskripsi:
      'Usaha kuliner ini amat sangat diminati akhir-akhir ini. Jenis makanan ini juga sering dibicarakan oleh orang-orang karena rasanya yang enak dan juga unik. Oleh karena itu, jenis usaha ini akan sangat menguntungkan dengan pasar yang luas.',
    pemilik: 'PT Adi Putra',
    rate: '4',
    totalKebutuhanDana: 150000000,
    terkumpul: 75000000,
    saham: 1200,
    gambar: 'umkm1.png',
    pembayaran: [
      'BNI 489473020 Adi Putra Wicaksono',
      'BRI 489473020983402382 Adi Putra Wicaksono',
      'MANDIRI 20983402382 Adi Putra Wicaksono',
    ],
    alamat: 'JL. Darmawangsa No. 10 Jakarta',
    contact: '081259967123',
  },
  {
    id: 2,
    category: 'pendidikan',
    judul: 'Kursus membangun website',
    deskripsi:
      'Usaha bootcamp ini amat sangat diminati akhir-akhir ini. Jenis makanan ini juga sering dibicarakan oleh orang-orang karena rasanya yang enak dan juga unik. Oleh karena itu, jenis usaha ini akan sangat menguntungkan dengan pasar yang luas.',
    pemilik: 'PT Adi Firman',
    rate: '3',
    totalKebutuhanDana: 5000000,
    terkumpul: 4500000,
    saham: 800,
    gambar: 'umkm2.png',
    pembayaran: [
      'MANDIRI 20983402382 Adi Firman Wicaksono',
      'BNI 489473020 Adi Firman Wicaksono',
      'BRI 489473020983402382 Adi Firman Wicaksono',
    ],
    alamat: 'JL. Darmawangsa No. 10 Jakarta',
    contact: '081259967123',
  },
  {
    id: 3,
    category: 'kuliner',
    judul: 'Bakso meledak',
    deskripsi:
      'Usaha kuliner ini amat sangat diminati akhir-akhir ini. Jenis makanan ini juga sering dibicarakan oleh orang-orang karena rasanya yang enak dan juga unik. Oleh karena itu, jenis usaha ini akan sangat menguntungkan dengan pasar yang luas.',
    pemilik: 'PT Roti Mekar',
    rate: '5',
    totalKebutuhanDana: 30000000,
    terkumpul: 10000000,
    saham: 100,
    gambar: 'umkm3.png',
    pembayaran: [
      'BNI 489473020 Adi kumis Wicaksono',
      'BRI 489473020983402382 Adi kumis Wicaksono',
      'MANDIRI 20983402382 Adi kumis Wicaksono',
    ],
    alamat: 'JL. Darmawangsa No. 10 Jakarta',
    contact: '081259967123',
  },
]

const listUsaha = [
  {
    id: 1,
    nama: 'Bakso meledak',
    tanggal: '21 januari 2020',
    jumlahPendanaan: 20000000,
    totalDividen: 250000,
    totalInvestor: 31,
    laba: 3200000,
    danaTerkumpul: 64,
  },
  {
    id: 2,
    nama: 'Laundry Wangy',
    tanggal: '1 april 2022',
    jumlahPendanaan: 15000000,
    totalDividen: 150000,
    totalInvestor: 23,
    laba: 3230000,
    danaTerkumpul: 64,
  },
  {
    id: 3,
    nama: 'Kursus jahit',
    tanggal: '30 desember 2021',
    jumlahPendanaan: 10000000,
    totalDividen: 50000,
    totalInvestor: 31,
    laba: 220000,
    danaTerkumpul: 11,
  },
]
const daftarTransaksi = [
  {
    id: 2930472829,
    tanggal: '22 januaru 2020',
    nama: 'PT Adi Firman',
    saham: 20,
    status: 'Sukses',
  },
  {
    id: 1930472829,
    tanggal: '22 januari 2020',
    nama: 'PT Adi Firman',
    saham: 20,
    status: 'Sukses',
  },
  {
    id: 3930472829,
    tanggal: '25 maret 2020',
    nama: 'PT Adi Firman',
    saham: 20,
    status: 'Gagal',
  },
  {
    id: 5930472829,
    tanggal: '29 april 2020',
    nama: 'PT Adi Firman',
    saham: 20,
    status: 'Proses',
  },
]

export default { umkms, listUsaha, daftarTransaksi }
