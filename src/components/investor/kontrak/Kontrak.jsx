import React, { useCallback, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import data from './../../../constants/data'
import Dropzone from './Dropzone'

const Kontrak = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const saham = Number(searchParams.get('saham'))
  const jumlahPembyaran = Number(searchParams.get('jumlahPembyaran'))
  const umkms = data.umkms

  const [kalimatPerjanjian, setKalimatPerjanjian] = useState('')
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

  const getUmkm = (id) => {
    const index = umkms.findIndex((umkm) => umkm.id == id)
    return umkms[index]
  }

  const umkm = getUmkm(id)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(umkm.pemilik, 'Adi Hidayat', saham, kalimatPerjanjian, images)
    setTimeout(() => {
      window.location.href = `/investor/detail-pembayaran/${umkm.id}?saham=${saham}&jumlahPembayaran=${jumlahPembyaran}`
    }, 5000)
  }

  return (
    <div className='bg-white p-4'>
      <h1 className='font-semibold text-2xl mb-6'>Pembuatan Kontrak</h1>

      <form action='' onSubmit={handleSubmit}>
        <div className='grid gap-2 mb-4'>
          <label htmlFor='pihak-pertama' className='font-medium text-lg'>
            Pihak Pertama
          </label>
          <input
            id='pihak-pertama'
            type='text'
            defaultValue={umkm.pemilik}
            disabled
            className='bg-green-200 p-2 border-b-2 border-b-green-700 text-sm'
          />
        </div>
        <div className='grid gap-2 mb-4'>
          <label htmlFor='pihak-kedua' className='font-medium text-lg'>
            Pihak Kedua
          </label>
          <input
            id='pihak-kedua'
            type='text'
            defaultValue={'Adi Hidayat'}
            disabled
            className='bg-green-200 p-2 border-b-2 border-b-green-700 text-sm'
          />
        </div>
        <div className='grid gap-2 mb-4'>
          <label htmlFor='jumlah-saham' className='font-medium text-lg'>
            Jumlah Lembar Saham
          </label>
          <input
            id='jumlah-saham'
            type='number'
            defaultValue={saham}
            disabled
            className='bg-green-200 p-2 border-b-2 border-b-green-700 text-sm'
          />
        </div>
        <div className='grid gap-2 mb-4'>
          <label htmlFor='kalimat-perjanjian' className='font-medium text-lg'>
            Kalimat perjanjian
          </label>
          <textarea
            name='kalimat-perjanjian'
            id='kalimat-perjanjian'
            cols='30'
            rows='3'
            className='bg-green-200 p-2 border-b-2 border-b-green-700 text-sm resize-none outline-none'
            value={kalimatPerjanjian}
            onChange={(e) => setKalimatPerjanjian(e.target.value)}
            placeholder='Enter input ...'
          ></textarea>
          <Dropzone onDrop={onDrop} accept={'image/*'} />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='p-2 px-8 bg-green-600 rounded-lg text-white'
          >
            Setuju
          </button>
        </div>
      </form>
    </div>
  )
}

export default Kontrak
