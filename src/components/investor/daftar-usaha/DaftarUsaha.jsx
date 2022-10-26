import React from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'
import data from './../../../constants/data'

const DaftarUsaha = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold'>List Usaha</h1>

      <table className='w-full mt-4'>
        <thead>
          <tr className='border-b-4 border-b-green-400'>
            <th className='text-left w-2'>No</th>
            <th className='text-left w-24'>Nama Usaha</th>
            <th className='text-left w-24'>Tanggal Pendanaan</th>
            <th className='text-left w-24'>Jumlah Pendanaan</th>
            <th className='text-left w-24'>Total Dividen</th>
            <th className='text-left w-24'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.listUsaha.map((usaha, i) => (
            <tr key={usaha.id} className='border-b-2 border-b-green-400'>
              <td className='py-3'>{++i}</td>
              <td>{usaha.nama}</td>
              <td>{usaha.tanggal}</td>
              <td>{toRupiah(usaha.jumlahPendanaan)}</td>
              <td>{toRupiah(usaha.totalDividen)}</td>
              <td>
                <Link
                  to={`/investor/detail-usaha/${usaha.id}`}
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

export default DaftarUsaha
