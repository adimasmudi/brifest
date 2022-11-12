import { IconEdit, IconTrash } from '@tabler/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../../constants/fungsi'

import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'

const Riwayat = ({ listRiwayat }) => {
  const [idRekapan, setIdRekapan] = useState('')

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  const deleteRekapan = (id) => {
    axios({
      method: 'delete',
      url: `https://brifest-api.herokuapp.com/umkm/deleteRekapan/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
        // console.log(error)
      })
  }
  return (
    <div className='mt-8 border-2 border-green-400 bg-white rounded-lg'>
      <h2 className='p-4 text-base font-medium border-b-2 border-b-black'>
        Riwayat
      </h2>

      <div className='p-4 '>
        <table>
          <thead>
            <tr>
              <th className='w-52 pb-2 text-left'>Tanggal</th>
              <th className='w-52 pb-2 text-center'>Jam</th>
              <th className='w-52 pb-2 text-left'>Judul Pencatatan</th>
              <th className='w-52 pb-2 text-center'>Jumlah</th>
              <th className='w-52 pb-2 text-left'>Tipe</th>
              <th className='w-52 pb-2 text-center'>Aksi</th>
            </tr>
          </thead>
          <tbody className='bg-green-200'>
            {listRiwayat.map((riwayat) => (
              <tr key={riwayat._id}>
                <td className='text-sm'>{`${new Date(
                  riwayat.tanggal
                ).toLocaleDateString('id-ID', { weekday: 'long' })} ${new Date(
                  riwayat.tanggal
                ).getDate()}-${new Date(riwayat.tanggal).getMonth()}-${new Date(
                  riwayat.tanggal
                ).getFullYear()}`}</td>
                <td className='text-sm text-center'>
                  {`${new Date(riwayat.tanggal).getHours()}:${new Date(
                    riwayat.tanggal
                  ).getMinutes()}`}
                </td>
                <td className='text-sm text-left'>{riwayat.judul}</td>
                <td className='text-sm text-center'>
                  {toRupiah(riwayat.jumlah)}
                </td>
                <td
                  className={`text-sm ${
                    riwayat.tipe === 'pemasukan'
                      ? 'text-blue-500'
                      : 'text-red-500'
                  }`}
                >
                  {riwayat.tipe}
                </td>
                <td className='text-sm flex flex-1 justify-center gap-3'>
                  <form action=''>
                    <button onClick={() => deleteRekapan(riwayat._id)}>
                      <IconTrash color='#FF0707' />
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Riwayat
