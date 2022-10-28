import { IconStar } from '@tabler/icons'
import React from 'react'
import { NavLink, Outlet, Route, Routes, useParams } from 'react-router-dom'
import data from '../../../constants/data'
import Detail from './Detail'
import InformasiPendanaan from './InformasiPendanaan'

const BeriPendanaan = () => {
  const { id } = useParams()
  const getUmkm = (id) => {
    const index = data.umkms.findIndex((umkm) => umkm.id == id)
    return data.umkms[index]
  }

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

  const umkm = getUmkm(id)

  return (
    <div className='m-6'>
      <div className='flex flex-1 gap-6'>
        <div>
          <img
            src={`http://127.0.0.1:5173/assets/${umkm.gambar}`}
            alt={umkm.gambar}
          />
        </div>
        <div className='p-3 bg-white rounded-2xl w-full'>
          <h2 className='text-2xl font-medium'>{umkm.judul}</h2>
          <p className='text-base font-light'>{umkm.pemilik}</p>

          <div className='flex gap-6'>
            {umkm.rate} / 5{' '}
            <div className='flex flex-1'>{countStar(umkm.rate)}</div>
          </div>
          <h3 className='text-base font-semibold mt-4 mb-2'>Deskripsi Usaha</h3>
          <p>{umkm.deskripsi}</p>
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
            to={`/investor/beri-pendanaan/${umkm.id}/informasi-pendanaan`}
          >
            Informasi pendanaan
          </NavLink>
          <NavLink
            className={'p-3'}
            style={({ isActive }) => {
              return { background: isActive ? '#fff' : '' }
            }}
            to={`/investor/beri-pendanaan/${umkm.id}/detail`}
          >
            Detail
          </NavLink>
          <Outlet />
        </div>
        <div className='bg-white p-6'>
          <Routes>
            <Route path='/' element={<InformasiPendanaan umkm={umkm} />} />
            <Route
              path='/informasi-pendanaan'
              element={<InformasiPendanaan umkm={umkm} />}
            />
            <Route path='/detail' element={<Detail umkm={umkm} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default BeriPendanaan
