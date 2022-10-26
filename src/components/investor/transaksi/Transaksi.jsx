import React from 'react'
import { Link } from 'react-router-dom'
import data from './../../../constants/data'

const Transaksi = () => {
  const daftarTransaksi = data.daftarTransaksi
  return (
    <div>
      <h1 className='text-2xl font-semibold'>List Usaha</h1>

      <table className='w-full mt-4'>
        <thead>
          <tr className='border-b-4 border-b-green-400'>
            <th className='text-left w-2'>No</th>
            <th className='text-left w-24'>ID Transaksi</th>
            <th className='text-left w-24'>Tanggal</th>
            <th className='text-left w-24'>Nama Usaha</th>
            <th className='text-left w-24'>Lembar Usaha</th>
            <th className='text-left w-24'>Status</th>
            <th className='text-left w-24'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.daftarTransaksi.map((transaksi, i) => (
            <tr key={transaksi.id} className='border-b-2 border-b-green-400'>
              <td className='py-3'>{++i}</td>
              <td>{transaksi.id}</td>
              <td>{transaksi.tanggal}</td>
              <td>{transaksi.nama}</td>
              <td>{transaksi.saham} </td>
              <td>
                <div
                  className={`px-4 py-1 max-w-[85px] rounded-full text-white ${
                    transaksi.status == 'Sukses'
                      ? 'bg-green-700'
                      : transaksi.status == 'Gagal'
                      ? 'bg-red-700'
                      : 'bg-yellow-400'
                  }`}
                >
                  {transaksi.status}
                </div>
              </td>
              <td>
                <Link
                  to={`/investor/detail-transaksi/`}
                  className='p-2 bg-green-400 font-medium rounded-lg'
                >
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transaksi
