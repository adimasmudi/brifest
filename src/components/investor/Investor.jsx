import { IconHome, IconNotes, IconPackage } from '@tabler/icons'

import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import NavbarDashboard from '../navbarDashborad/NavbarDashboard'
import Sidebar from '../sidebar/sidebar'
import BeriPendanaan from './beriPendanaan/BeriPendanaan'
import DaftarUsaha from './daftar-usaha/DaftarUsaha'
import DetailUsaha from './daftar-usaha/detailUsaha/DetailUsaha'
import Dashboard from './dashboard/Dashboard'
import Transaksi from './transaksi/Transaksi'

import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'
import Kontrak from './kontrak/Kontrak'
import DetailPembayaran from './detailPembayaran/DetailPembayaran'

const Investor = () => {
  let res
  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: 'get',
      url: 'http://localhost:5000/investor/dashboard',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        res = result
        console.log('res', res)
      })
      .catch((error) => {
        window.location.href = '/'
      })
  }, [])

  const menus = [
    {
      name: 'dashboard',
      icon: <IconHome />,
      path: '/dashboard',
    },
    {
      name: 'daftar usaha',
      icon: <IconPackage />,
      path: '/daftar-usaha',
    },
    {
      name: 'transaksi',
      icon: <IconNotes />,
      path: '/transaksi',
    },
  ]

  return (
    <>
      <NavbarDashboard />
      <div className='flex'>
        <Sidebar menus={menus} prefix='investor' />

        <div className='bg-[#DDF4DF] min-h-screen w-full p-8'>
          <Routes>
            <Route index path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/daftar-usaha' element={<DaftarUsaha />} />
            <Route path='/transaksi' element={<Transaksi />} />
            <Route path='/beri-pendanaan/:id/*' element={<BeriPendanaan />} />
            <Route path='/detail-usaha/:id/*' element={<DetailUsaha />} />
            <Route
              path='/detail-pembayaran/:id'
              element={<DetailPembayaran />}
            />
            <Route path='/kontrak/:id' element={<Kontrak />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Investor
