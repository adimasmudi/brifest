import { IconHome, IconNotes, IconPackage, IconSquarePlus } from '@tabler/icons'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarDashboard from '../navbarDashborad/NavbarDashboard'
import Sidebar from '../sidebar/sidebar'
import DaftarUsaha from './daftarUsaha/DaftarUsaha'
import DetailUsaha from './daftarUsaha/detailUsaha/DetailUsaha'
import Dashboard from './dashboard/Dashboard'
import DetailInvestor from './detailInvestor/DetailInvestor'
import TambahUsaha from './tambahUsaha/TambahUsaha'
import Transaksi from './transaksi/Transaksi'

const Umkm = () => {
  const menus = [
    {
      name: 'dashboard',
      icon: <IconHome />,
      path: '/dashboard',
    },
    {
      name: 'Tambah usaha',
      icon: <IconSquarePlus />,
      path: '/tambah-usaha',
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
        <Sidebar menus={menus} prefix='umkm' />
        <div className='bg-[#DDF4DF] min-h-screen w-full p-8'>
          <Routes>
            <Route index path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/tambah-usaha' element={<TambahUsaha />} />
            <Route path='/daftar-usaha' element={<DaftarUsaha />} />
            <Route path='/transaksi' element={<Transaksi />} />
            <Route path='/detail-usaha/:id' element={<DetailUsaha />} />
            <Route
              path='/detail-usaha/:id/detail-investor'
              element={<DetailInvestor />}
            />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Umkm
