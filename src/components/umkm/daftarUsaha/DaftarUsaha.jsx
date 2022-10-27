import { IconTarget } from '@tabler/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'
import data from './../../../constants/data'

const DaftarUsaha = () => {
  const listUsaha = data.daftarUsahaUmkm
  return (
    <div>
      <h1 className='text-2xl font-semibold'>List Usaha</h1>

      <table className='w-full mt-4'>
        <thead>
          <tr className='border-b-4 border-b-green-400'>
            <th className='text-left w-2'>No</th>
            <th className='text-left w-24'>Nama Produk</th>
            <th className='text-left w-24'>Nama perusahaan</th>
            <th className='text-left w-24'>Kebutuhan Dana</th>
            <th className='text-left w-24'>Dana Terkumpul</th>
            <th className='text-left w-24'>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsaha.map((usaha, i) => (
            <tr key={usaha.id} className='border-b-2 border-b-green-400'>
              <td className='py-3'>{++i}</td>
              <td>{usaha.namaProduk}</td>
              <td>{usaha.namaPerusahaan}</td>
              <td>{toRupiah(usaha.kebuthanDana)}</td>
              <td>{usaha.danaTerkumpul}%</td>
              <td>
                <Link
                  to={`/umkm/detail-usaha/${usaha.id}`}
                  className='flex flex-1 justify-center items-center'
                >
                  <IconTarget color='#5DD95D' />
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
