import React, { useCallback, useState } from 'react'
import Dropzone from './Dropzone'

const TambahUsaha = () => {
  const [namaUsaha, setNamaUsaha] = useState('')
  const [kebutuhanDana, setKebutuhanDana] = useState(0)
  const [minimalSaham, setMinimalSaham] = useState(0)
  const [dividen, setDividen] = useState(0)
  const [kategory, setKategory] = useState('')
  const [alamat, setAlamat] = useState('')
  const [namaPemilik, setNamaPemilik] = useState('')
  const [contact, setContact] = useState('')
  const [deskripsi, setDeskripsi] = useState('')

  const [images, setImages] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    setImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      namaUsaha,
      kebutuhanDana,
      minimalSaham,
      dividen,
      kategory,
      alamat,
      contact,
      deskripsi,
      images
    )
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
              value={namaUsaha}
              onChange={(e) => setNamaUsaha(e.target.value)}
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
              value={minimalSaham}
              onChange={(e) => setMinimalSaham(e.target.value)}
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
              value={dividen}
              onChange={(e) =>
                setDividen(
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
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
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
              placeholder='Enter input...'
              value={kategory}
              onChange={(e) => setKategory(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400'
            />
          </div>
          <div className='mt-2 grid'>
            <label htmlFor='contact' className='text-sm font-semibold'>
              Contact person
            </label>
            <input
              type='text'
              id='contact'
              placeholder='Enter input...'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
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
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className='placeholder:text-xs text-xs p-2 outline-none border-b border-b-green-400 resize-none'
              rows={3}
            ></textarea>
          </div>
        </div>

        <div className='bg-white p-4 rounded-md w-full h-[70%]'>
          <h1 className='font-semibold text-lg'>Foto Produk</h1>
          <Dropzone onDrop={onDrop} accept={'image/*'} />
          <img src={images.length > 0 ? images[0].preview : ''} alt='' />
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
