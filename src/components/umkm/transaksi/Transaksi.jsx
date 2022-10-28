import { IconFileText, IconTrash } from '@tabler/icons'
import React, { useState } from 'react'
import data from './../../../constants/data'
import DetailTransaksi from './DetailTransaksi'

const Transaksi = () => {
  const daftarTransaksi = data.daftarTransaksi

  const [modal, setModal] = useState(false)

  const [transaksi, setTransaksi] = useState({})

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
