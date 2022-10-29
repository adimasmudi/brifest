import { IconX } from '@tabler/icons'
import React, { useState } from 'react'

import axios from 'axios'
// universal cookie
import Cookies from 'universal-cookie'

const RekapData = ({ setModal, usahaId }) => {
  const [waktu, setWaktu] = useState('')
  const [judul, setJudul] = useState('')
  const [tipe, setTipe] = useState('pemasukan')
  const [jumlah, setJumlah] = useState(0)
  const [catatan, setCatatan] = useState('')

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios({
      method: 'post',
      url: 'https://brifest-api.herokuapp.com/umkm/addRekapanDana',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        tanggal: waktu,
        judul,
        tipe,
        jumlah,
        catatan,
        usahaId,
      },
    })
      .then((result) => {
        // console.log(Object.entries(result.data).length)
        setJudul('')
        setWaktu('')
        setJumlah(0)
        setCatatan('')
        setModal(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='rounded-lg w-96 overflow-hidden relative z-30'>
      <div className='flex justify-between bg-slate-300 p-4 border-b border-b-slate-400'>
        <h1 className='font-medium text-xl '>Rekap Data</h1>
        <button onClick={() => setModal(false)}>
          <IconX />
        </button>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <div className='bg-white p-4'>
          <div className='mb-2 grid grid-cols-[1fr_2fr]'>
            <label htmlFor='waktu' className='text-green-700'>
              Waktu
            </label>
            <input
              type='datetime-local'
              id='waktu'
              name='tanggal'
              onChange={(e) => setWaktu(e.target.value)}
              className='w-full bg-green-200 px-2 border border-green-500 outline-none rounded-sm'
            />
          </div>
          <div className='mb-2 grid grid-cols-[1fr_2fr]'>
            <label htmlFor='judul' className='text-green-700'>
              Judul
            </label>
            <input
              type='text'
              id='judul'
              value={judul}
              name='judul'
              onChange={(e) => setJudul(e.target.value)}
              className='w-full bg-green-200 px-2 border border-green-500 outline-none rounded-sm'
            />
          </div>
          <div className='mb-2 grid grid-cols-[1fr_2fr]'>
            <label htmlFor='tipe' className='text-green-700'>
              Tipe
            </label>
            <select
              value={tipe}
              onChange={(e) => setTipe(e.target.value)}
              className='w-full bg-green-200 px-2 border border-green-500 outline-none rounded-sm'
              name='tipe'
              id='tipe'
            >
              <option value='pemasukan'>pemasukan</option>
              <option value='pengeluaran'>pengeluaran</option>
            </select>
          </div>
          <div className='mb-2 grid grid-cols-[1fr_2fr]'>
            <label htmlFor='jumlah' className='text-green-700'>
              Jumlah
            </label>
            <input
              type='number'
              id='jumlah'
              value={jumlah}
              name='jumlah'
              onChange={(e) => setJumlah(e.target.value)}
              className='w-full bg-green-200 px-2 border border-green-500 outline-none rounded-sm'
            />
          </div>
          <div className='mb-2 grid grid-cols-[1fr_2fr]'>
            <label htmlFor='catatan' className='text-green-700'>
              Catatan
            </label>
            <textarea
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className='w-full bg-green-200 px-2 border border-green-500 outline-none rounded-sm resize-none'
              name='catatan'
              id='catatan'
              cols='30'
              rows='3'
            ></textarea>
          </div>
        </div>
        <div className='flex justify-end bg-slate-300 p-4 border-t border-t-slate-400'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default RekapData
