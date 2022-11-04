import { IconFileText, IconTrash } from '@tabler/icons'
import React, { useState, useEffect } from 'react'
import data from './../../../constants/data'
import DetailTransaksi from './DetailTransaksi'

import axios from 'axios'
// universal cookie
import Cookies from 'universal-cookie'

const Transaksi = () => {
  const daftarTransaksi = data.daftarTransaksi

  const [modal, setModal] = useState(false)
  const [dataUsaha, setDataUsaha] = useState([])
  const [dataBayar, setDataBayar] = useState([])

  const [transaksi, setTransaksi] = useState({})
  const [error, setError] = useState('')

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://brifest-api.herokuapp.com/umkm/allTransaksi`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setDataUsaha(result.data.dataUsaha)
        setDataBayar(result.data.dataBayar)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  const handleDetailTransaksi = (id) => {
    const index = daftarTransaksi.findIndex((transaksi) => transaksi.id == id)
    setTransaksi(daftarTransaksi[index])
    setModal(true)
  }

  const handleHapus = (id) => {
    // const index = daftarTransaksi.findIndex((transaksi) => transaksi.id == id)
    console.log(id)
  }

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Daftar Transaksi</h1>

      {dataBayar.length > 0 ? (
        <table className='w-full mt-4'>
          <thead>
            <tr className='border-b-4 border-b-green-400'>
              <th className='text-left w-2'>No</th>
              <th className='text-left w-24'>ID Transaksi</th>
              <th className='text-left w-24'>Tanggal</th>
              <th className='text-left w-24'>Nama Usaha</th>
              <th className='text-left w-24'>Lembar saham</th>
              <th className='text-left w-24'>Status</th>
              <th className='text-left w-24'>Action</th>
            </tr>
          </thead>
          <tbody>
            {daftarTransaksi.map((transaksi, i) => (
              <tr key={transaksi.id} className='border-b-2 border-b-green-400'>
                <td className='py-3'>{++i}</td>
                <td>{transaksi.id}</td>
                <td>{transaksi.tanggal}</td>
                <td>{transaksi.namaUsaha}</td>
                <td>{transaksi.saham}</td>
                <td>
                  <div
                    className={`w-min text-sm px-6 py-1 rounded-full text-white capitalize ${
                      transaksi.status == 'sukses'
                        ? 'bg-green-500'
                        : transaksi.status == 'proses'
                        ? 'bg-yellow-400'
                        : 'bg-red-500'
                    } `}
                  >
                    {transaksi.status}
                  </div>
                </td>
                <td className='flex gap-3 p-2 '>
                  <button
                    className='w-min flex justify-center items-center bg-green-600 p-1 rounded-lg'
                    onClick={handleDetailTransaksi.bind(this, transaksi.id)}
                  >
                    <IconFileText color='#ffffff' radius={20} />
                  </button>
                  <button
                    className='w-min flex justify-center items-center bg-red-600 p-1 rounded-lg'
                    onClick={handleHapus.bind(this, transaksi.id)}
                  >
                    <IconTrash color='#ffffff' radius={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center text-lg'>Belum ada transaksi</p>
      )}

      <div
        className={`bg-black bg-opacity-50 flex justify-center items-center fixed z-50 left-0 top-0 ${
          modal ? 'bottom-0 right-0 block' : 'hidden'
        }`}
      >
        <DetailTransaksi setModal={setModal} data={transaksi} />
      </div>
    </div>
  )
}

export default Transaksi
