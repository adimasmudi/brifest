import { IconDownload, IconX } from '@tabler/icons'
import React, { useEffect, useState } from 'react'
import toRupiah from '../../../constants/fungsi'

import axios from 'axios'
// universal cookie
import Cookies from 'universal-cookie'

const DetailTransaksi = ({ setModal, data }) => {
  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  const [investor, setInvestor] = useState('')

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/umkm/getInvestor/${data._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setInvestor(result.data.userId.namaUser)
      })
      .catch((error) => {
        setError(error)
      })
  }, [data])

  console.log('data from transaksi', data)
  const handleTerima = (e) => {
    e.preventDefault()
    console.log('terima')
  }
  const handleTolak = (e) => {
    e.preventDefault()
    console.log('tolak')
  }
  const handleClose = (e) => {
    e.preventDefault()
    setModal(false)
  }
  const handleDownload = (e) => {
    console.log('download logic goes here')
    //     // text content
    //     const texts = ["line 1", "line 2", "line 3"]

    //    // file object
    //     const file = new Blob(texts, {type: 'text/plain'});

    //    // anchor link
    //     const element = document.createElement("a");
    //     element.href = URL.createObjectURL(file);
    //     element.download = "100ideas-" + Date.now() + ".txt";

    //     // simulate link click
    //     document.body.appendChild(element); // Required for this to work in FireFox
    //     element.click();
  }

  return (
    <div className='rounded-lg w-96 overflow-hidden relative z-30'>
      <div className='flex justify-between bg-slate-300 p-4 border-b border-b-slate-400'>
        <h1 className='font-medium text-xl '>Detail Transaksi</h1>
        <button onClick={() => setModal(false)}>
          <IconX />
        </button>
      </div>
      <div className='flex flex-col items-start gap-0 bg-white p-4 border-b border-b-slate-400'>
        <h1 className='text-xl font-medium'># {data.id}</h1>
        <p className='text-sm'>{data.namaUsaha}</p>
      </div>
      <form action=''>
        <div className='bg-white p-4 border-b border-b-slate-400'>
          <div className='flex justify-between'>
            <span className='text-green-400'>Tanggal Pembelian</span>
            <span>
              {`${new Date(data.tanggal).toLocaleDateString('id-ID', {
                weekday: 'long',
              })}, ${new Date(data.tanggal).getDate()}-${new Date(
                data.tanggal
              ).getMonth()}-${new Date(data.tanggal).getFullYear()}`}
            </span>
          </div>
          <div className='flex justify-between'>
            <span className='text-green-400'>Nama Investor</span>
            <span>{investor}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-green-400'>Lembar Saham</span>
            <span>{data.jumlahLembarSaham} lembar</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-green-400'>Jumlah Dana</span>
            <span>{toRupiah(data.nominal)}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-green-400'>Bukti pembayaran</span>
            <button
              onClick={handleDownload}
              value='download'
              className='flex text-green-600 gap-3 items-center'
            >
              Download <IconDownload />{' '}
            </button>
          </div>
        </div>
        <div className='flex justify-end bg-white p-4 border-t border-t-slate-400 gap-3'>
          {data.status == 'proses' ? (
            <>
              <button
                className='px-8 py-2 bg-red-500 rounded-sm text-white'
                onClick={handleTolak}
              >
                Tolak
              </button>
              <button
                className='px-8 py-2 bg-green-500 rounded-sm text-white'
                onClick={handleTerima}
              >
                Terima
              </button>
            </>
          ) : (
            <button
              className='px-8 py-2 bg-slate-300 border-2 border-slate-400 rounded-lg'
              onClick={handleClose}
            >
              Close
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default DetailTransaksi
