import React, { useCallback, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'
import data from './../../../constants/data'
import Dropzone from './Dropzone'

const DetailPembayaran = () => {
  const { id } = useParams()
  const [serachParams] = useSearchParams()
  const saham = Number(serachParams.get('saham'))
  const jumlahPembayaran = Number(serachParams.get('jumlahPembayaran'))

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

  const umkms = data.umkms
  const getUmkm = (id) => {
    const index = umkms.findIndex((umkm) => umkm.id == id)
    return umkms[index]
  }

  const umkm = getUmkm(id)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Adi Hidayat', umkm.pemilik, saham, jumlahPembayaran, images)
  }

  return (
    <div className='p-4 bg-white '>
      <h1 className='text-2xl font-semibold'>Masukan Detail Pembayaran</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className='grid gap-2 mb-4'>
          <label htmlFor='nama' className='font-medium text-lg'>
            Nama
          </label>
          <input
            id='nama'
            type='text'
            defaultValue={'Adi Hidayat'}
            disabled
            className='bg-green-200 p-2 border-b-2 border-b-green-700 text-sm'
          />
        </div>
        <div className='grid gap-2 mb-4'>
          <label htmlFor='pelaku-umkm' className='font-medium text-lg'>
            Pelaku UMKM
          </label>
          <input
            id='pelaku-umkm'
            type='text'
            defaultValue={umkm.pemilik}
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
          <label htmlFor='jumlah-pembayaran' className='font-medium text-lg'>
            Jumlah Pembayaran
          </label>
          <input
            id='jumlah-pembayaran'
            type='text'
            defaultValue={toRupiah(jumlahPembayaran)}
            disabled
            className='bg-green-200 p-2 border-b-2 border-b-green-700 text-sm'
          />
        </div>
        <div className='grid gap-2 mb-4'>
          <label htmlFor='jumlah-pembayaran' className='font-medium text-lg'>
            Bukti Transfer
          </label>
          <Dropzone onDrop={onDrop} accept={'image/*'} />
        </div>
        <div className='text-right'>
          <button
            type='submit'
            className='p-2 px-8 bg-green-600 rounded-lg text-white'
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  )
}

export default DetailPembayaran
