import { IconHome, IconNotes, IconPackage } from '@tabler/icons'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarDashboard from '../navbarDashborad/NavbarDashboard'
import Sidebar from '../sidebar/sidebar'
import BeriPendanaan from './beriPendanaan/BeriPendanaan'
import DaftarUsaha from './daftar-usaha/DaftarUsaha'
import DetailUsaha from './daftar-usaha/detailUsaha/DetailUsaha'
import Dashboard from './dashboard/Dashboard'
import Transaksi from './transaksi/Transaksi'

import { Link, Navigate, useNavigate } from 'react-router-dom'
// universal cookie
import Cookies from 'universal-cookie'

const Investor = () => {
  const cookies = new Cookies()

  const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  if (token === undefined) {
    window.location.href = '/'
    return
  }
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
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Investor
