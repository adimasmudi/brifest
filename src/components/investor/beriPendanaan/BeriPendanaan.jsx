import { IconStar } from '@tabler/icons'
import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, Route, Routes, useParams } from 'react-router-dom'
// import data from '../../../constants/data'
import Detail from './Detail'
import InformasiPendanaan from './InformasiPendanaan'

import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'

const BeriPendanaan = () => {
  const [usaha, setUsaha] = useState([])
  const [wa, setWa] = useState('')
  const { id } = useParams()

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://brifest-api.herokuapp.com/investor/detailUsaha/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setUsaha(result.data)
        setWa(result.data.userId.noTelepon)
        console.log('usaha', result.data)
      })
      .catch((error) => {
        console.log(error)
        // console.log(error)
      })
  }, [])

  const countStar = (num) => {
    const array = []
    for (let i = 0; i < 5; i++) {
      if (i < num) {
        array.push(<IconStar fill='#41A958' color='#41A958' key={i} />)
      } else {
        array.push(<IconStar fill='' key={i} />)
      }
    }
    return array
  }

  return (
    <div className='m-6'>
      <div className='flex flex-1 gap-6'>
        <div>
          <img
            src={`https://brifest-api.herokuapp.com/public/${usaha.images}`}
            alt={usaha.images}
          />
        </div>
        <div className='p-3 bg-white rounded-2xl w-full'>
          <h2 className='text-2xl font-medium'>{usaha.judul}</h2>
          <p className='text-base font-light'>{usaha.namaPerusahaan}</p>

          <div className='flex gap-6'>
            {usaha.rate ? usaha.rate : 0} / 5{' '}
            <div className='flex flex-1'>
              {countStar(usaha.rate ? usaha.rate : 0)}
            </div>
          </div>
          <h3 className='text-base font-semibold mt-4 mb-2'>Deskripsi Usaha</h3>
          <p>{usaha.deskripsiUsaha}</p>
        </div>
      </div>
      <div>
        <div className='flex mt-3 font-semibold'>
          <NavLink
            exact='false'
            className={'p-3'}
            style={({ isActive }) => {
              return { background: isActive ? '#fff' : '' }
            }}
            to={`/investor/beri-pendanaan/${usaha._id}/informasi-pendanaan`}
          >
            Informasi pendanaan
          </NavLink>
          <NavLink
            className={'p-3'}
            style={({ isActive }) => {
              return { background: isActive ? '#fff' : '' }
            }}
            to={`/investor/beri-pendanaan/${usaha._id}/detail`}
          >
            Detail
          </NavLink>
          <Outlet />
        </div>
        <div className='bg-white p-6'>
          <Routes>
            <Route
              path='/'
              element={<InformasiPendanaan umkm={usaha} wa={wa} />}
            />
            <Route
              path='/informasi-pendanaan'
              element={<InformasiPendanaan umkm={usaha} />}
            />
            <Route path='/detail' element={<Detail umkm={usaha} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default BeriPendanaan
