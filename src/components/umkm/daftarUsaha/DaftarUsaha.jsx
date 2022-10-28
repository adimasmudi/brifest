import { IconTarget } from '@tabler/icons'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'
import data from './../../../constants/data'

import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'

const DaftarUsaha = () => {
  const [listUsaha, setListUsaha] = useState([])
  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://guarded-wildwood-83398.herokuapp.com/umkm/usahaUser`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setListUsaha(result.data)
      })
      .catch((error) => {
        console.log(error)
        // console.log(error)
      })
  }, [])

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
            <tr key={usaha._id} className='border-b-2 border-b-green-400'>
              <td className='py-3'>{++i}</td>
              <td>{usaha.namaProduk}</td>
              <td>{usaha.namaPerusahaan}</td>
              <td>{toRupiah(usaha.kebutuhanDana)}</td>
              <td>{0}%</td>
              <td>
                <Link
                  to={`/umkm/detail-usaha/${usaha._id}`}
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
