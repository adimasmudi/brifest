import React, { useCallback, useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'
// import data from './../../../constants/data'
import Dropzone from './Dropzone'

import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'

const DetailPembayaran = () => {
  const { id } = useParams()
  const [investor, setInvestor] = useState('')
  const [usaha, setUsaha] = useState({})
  const [serachParams] = useSearchParams()
  const [jumlahPembayaran, setJumlahPembayaran] = useState(0)
  const saham = Number(serachParams.get('saham'))
  const [pendanaanId, setPendanaanId] = useState('')
  const [error, setError] = useState('')
  // const jumlahPembayaran = Number(serachParams.get('jumlahPembayaran'))

  const [images, setImages] = useState([])

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  const navigate = useNavigate()

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/investor/viewFormBayar/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log('dari detail bayar', result)
        setUsaha(result.data.usaha)
        setInvestor(result.data.namaInvestor)
        setJumlahPembayaran(
          Number(Number(saham) * Number(result.data.usaha?.minimalPembelian))
        )
        console.log(jumlahPembayaran)
      })
      .catch((error) => {
        console.log(error)
        // console.log(error)
      })
  }, [])

  const onDrop = useCallback((acceptedFiles) => {
    setImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  })

  const formData = new FormData()

  const handleSubmit = (e) => {
    e.preventDefault()

    // axios({
    //   method: 'post',
    //   url: `http://localhost:5000/investor/addPendanaan`,
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   data: {
    //     nominal: jumlahPembayaran,
    //     usahaId: usaha._id,
    //   },
    // }).then((data) => {
    //   setPendanaanId(data._id)
    // })

    formData.append('jumlahLembarSaham', saham)
    formData.append('nominal', jumlahPembayaran)
    formData.append('usahaId', usaha._id)
    formData.append('images', images[0], images[0].name)

    console.log(images)

    axios
      .post(`http://localhost:5000/investor/addPendanaan`, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        console.log('error dari pembayaran', err)
      })

    navigate(`/investor/dashboard`)
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
            defaultValue={investor}
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
            defaultValue={usaha?.userId?.namaUser}
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
            name='jumlahLembarSaham'
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
            value={toRupiah(jumlahPembayaran)}
            disabled
            className='bg-green-200 p-2 border-b-2 border-b-green-700 text-sm'
          />
        </div>
        <div className='grid gap-2 mb-4'>
          <label htmlFor='jumlah-pembayaran' className='font-medium text-lg'>
            Bukti Transfer
          </label>
          <Dropzone onDrop={onDrop} accept={'image/*'} name='images' />
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
