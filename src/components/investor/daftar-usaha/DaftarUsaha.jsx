import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'
import data from './../../../constants/data'

import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'

const DaftarUsaha = () => {
  const [pendanaan, setPendanaan] = useState([])
  const [pembayaran, setPembayaran] = useState([])
  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/investor/listUsaha`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setPendanaan(result.data.pendanaan)
        setPembayaran(result.data.pembayaran)
      })
      .catch((error) => {
        console.log(error)
        // console.log(error)
      })
  }, [])

  return (
    <div>
      <h1 className='text-2xl font-semibold'>List Usaha</h1>

      {pendanaan.length > 0 ? (
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
                    to={`/investor/detail-usaha/${usaha._id}`}
                    className='p-2 bg-green-400 font-medium rounded-lg'
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-lg text-center'>
          Anda belum pernah investasi ke usaha manapun
        </p>
      )}
    </div>
  )
}

export default DaftarUsaha
