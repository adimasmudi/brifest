import React, { useCallback, useState } from 'react'
import Dropzone from './Dropzone'
import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'

const TambahUsaha = () => {
  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  const [namaProduk, setNamaProduk] = useState('')
  const [kebutuhanDana, setKebutuhanDana] = useState(0)
  const [minimalPembelian, setMinimalPembelian] = useState(0)
  const [persentaseSaham, setPersentaseSaham] = useState(0)
  const [kategori, setKategori] = useState('')
  const [lokasi, setLokasi] = useState('')
  const [namaPemilik, setNamaPemilik] = useState('')
  const [mediaSosial, setMediaSosial] = useState('')
  const [deskripsiUsaha, setDeskripsiUsaha] = useState('')
  const [namaPerusahaan, setNamaPerusahaan] = useState('')

  const [images, setImages] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    // console.log('a', acceptedFiles[0])
    setImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  })

  const formData = new FormData()

  // set configuration
  const configuration = {
    method: 'post',
    url: `https://brifest-api.herokuapp.com/umkm/addUsaha`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      namaProduk,
      namaPerusahaan,
      kategori,
      deskripsiUsaha,
      kebutuhanDana,
      minimalPembelian,
      persentaseSaham,
      lokasi,
      mediaSosial,
      images,
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(images[0])

    formData.append('namaProduk', namaProduk)
    formData.append('namaPerusahaan', namaPerusahaan)
    formData.append('kategori', kategori)
    formData.append('deskripsiUsaha', deskripsiUsaha)
    formData.append('kebutuhanDana', kebutuhanDana)
    formData.append('minimalPembelian', minimalPembelian)
    formData.append('persentaseSaham', persentaseSaham)
    formData.append('lokasi', lokasi)
    formData.append('mediaSosial', mediaSosial)
    formData.append('images', images[0], images[0].name)
    axios
      .post(`https://brifest-api.herokuapp.com/umkm/addUsaha`, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        window.location.href = '/umkm/dashboard'
      })
  }
  return (
    <form action='' onSubmit={handleSubmit}>
      <div className='flex flex-1 w-full justify-between gap-6'>
        <div className='bg-white p-4 rounded-md w-full'>
          <h1 className='font-semibold text-lg'>Kenalkan Usaha Anda</h1>
          <div className='mt-2 grid'>
            <label htmlFor='nama-usaha' className='text-sm font-semibold'>
              Nama Usaha
            </label>
            <input
              type='text'
              id='nama-usaha'
              placeholder='Enter input...'
              value={namaProduk}
              name='namaProduk'
              onChange={(e) => setNamaProduk(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400'
            />
          </div>
          <div className='mt-2 grid'>
            <label htmlFor='nama-perusahaan' className='text-sm font-semibold'>
              Nama Perusahaan
            </label>
            <input
              type='text'
              id='nama-perusahaan'
              placeholder='Enter input...'
              value={namaPerusahaan}
              name='namaPerusahaan'
              onChange={(e) => setNamaPerusahaan(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400'
            />
          </div>
          <div className='mt-2 grid'>
            <label htmlFor='kebutuhan-dana' className='text-sm font-semibold'>
              Dana yang dibutuhkan
            </label>
            <input
              type='number'
              id='kebutuhan-dana'
              placeholder='Enter input...'
              value={kebutuhanDana}
              name='kebutuhanDana'
              onChange={(e) => setKebutuhanDana(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400'
            />
          </div>
          <div className='mt-2 grid'>
            <label htmlFor='saham' className='text-sm font-semibold'>
              Minimal pembelian saham
            </label>
            <input
              type='number'
              id='saham'
              placeholder='Enter input...'
              value={minimalPembelian}
              name='minimalPembelian'
              onChange={(e) => setMinimalPembelian(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400'
            />
          </div>
          <div className='mt-2 grid'>
            <label htmlFor='dividen' className='text-sm font-semibold'>
              Dividen %
            </label>
            <input
              type='number'
              step={0.1}
              min={0}
              max={100}
              id='dividen'
              placeholder='Enter input...'
              value={persentaseSaham}
              name='persentaseSaham'
              onChange={(e) =>
                setPersentaseSaham(
                  e.target.value > 100
                    ? 100
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400'
            />
          </div>
          <div className='mt-2 grid'>
            <label htmlFor='alamat' className='text-sm font-semibold'>
              Alamat
            </label>
            <input
              type='text'
              id='alamat'
              placeholder='Enter input...'
              value={lokasi}
              name='lokasi'
              onChange={(e) => setLokasi(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400'
            />
          </div>
          <div className='mt-2 grid'>
            <label htmlFor='nama-pemilik' className='text-sm font-semibold'>
              Nama Pemilik
            </label>
            <input
              type='text'
              id='nama-pemilik'
              name='namaPemilik'
              placeholder='Enter input...'
              value={namaPemilik}
              onChange={(e) => setNamaPemilik(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400'
            />
          </div>
          <div className='mt-2 grid'>
            <label htmlFor='kategori' className='text-sm font-semibold'>
              Kategori
            </label>
            <input
              type='text'
              id='kategori'
              name='kategori'
              placeholder='Enter input...'
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400'
            />
          </div>
          <div className='mt-2 grid'>
            <label htmlFor='contact' className='text-sm font-semibold'>
              Media Sosial
            </label>
            <input
              type='text'
              id='contact'
              placeholder='Enter input...'
              value={mediaSosial}
              name='mediaSosial'
              onChange={(e) => setMediaSosial(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400'
            />
          </div>
          <div className='mt-2 grid'>
            <label htmlFor='deskripsi' className='text-sm font-semibold'>
              Deskripsi
            </label>
            <textarea
              id='deskripsi'
              placeholder='Enter input...'
              value={deskripsiUsaha}
              name='deskripsiUsaha'
              onChange={(e) => setDeskripsiUsaha(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400 resize-none'
              rows={3}
            ></textarea>
          </div>
        </div>

        <div className='bg-white p-4 rounded-md w-full h-[70%]'>
          <h1 className='font-semibold text-lg'>Foto Produk</h1>
          <Dropzone onDrop={onDrop} accept={'image/*'} name='images' />
          <img src={images.length > 0 ? images[0].preview : ''} alt='' />
          {/* <input type='file' name='gambar' /> */}
        </div>
      </div>
      <div className='flex flex-1 w-full justify-between gap-6 mt-4'>
        <div className='w-full'></div>
        <button
          type='submit'
          className='font-bold bg-green-500 w-full py-2 rounded-lg'
        >
          Upload Data
        </button>
      </div>
    </form>
  )
}

export default TambahUsaha
