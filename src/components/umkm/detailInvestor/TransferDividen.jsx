import { IconX } from '@tabler/icons'
import React, { useCallback, useState } from 'react'
import toRupiah from '../../../constants/fungsi'
import Dropzone from './Dropzone'

const TransferDividen = ({ setModal, data }) => {
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
  }

  const arrbulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]
  const date = new Date()
  const tanggal = date.getDate()
  const bulan = date.getMonth()
  const tahun = date.getFullYear()

  return (
    <div className='rounded-lg w-96 overflow-hidden relative z-30'>
      <div className='flex justify-between bg-slate-300 p-4 border-b border-b-slate-400'>
        <h1 className='font-medium text-xl '>Transfer Dividen</h1>
        <button onClick={() => setModal(false)}>
          <IconX />
        </button>
      </div>
      <div className='flex flex-col items-center gap-0 justify-center bg-white p-4 border-b border-b-slate-400'>
        <h1 className='text-xl font-medium'>{toRupiah(data.totalDividen)}</h1>
        <p className='text-green-500'>{data.nama}</p>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <div className='bg-white p-4 border-b border-b-slate-400'>
          <div className='flex justify-between'>
            <span className='text-green-400'>Tanggal Transfer</span>
            <span>{`${tanggal} ${arrbulan[bulan]} ${tahun}`}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-green-400'>Nama Investor</span>
            <span>{data.nama}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-green-400'>Lembar Saham</span>
            <span>{data.saham} lembar</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-green-400'>Nominal Transfer</span>
            <span>{toRupiah(data.totalDividen)}</span>
          </div>
        </div>
        <div className='bg-white p-4'>
          <Dropzone onDrop={onDrop} accept={'image/*'} />
        </div>
        <div className='flex justify-end bg-slate-300 p-4 border-t border-t-slate-400'>
          <button className='px-8 py-2 bg-green-500 rounded-sm'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default TransferDividen
