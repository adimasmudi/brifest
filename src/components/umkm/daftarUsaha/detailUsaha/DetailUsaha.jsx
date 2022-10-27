import { IconCashBanknote, IconCurrencyDollar, IconUser } from '@tabler/icons'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../../../constants/data'
import toRupiah from '../../../../constants/fungsi'
import RekapData from './RekapData'
import Riwayat from './Riwayat'

const DetailUsaha = () => {
  const { id } = useParams()
  const getUsaha = (id) => {
    const index = data.daftarUsahaUmkm.findIndex((usaha) => usaha.id == id)
    return data.daftarUsahaUmkm[index]
  }
  const usaha = getUsaha(id)

  const [modal, setModal] = useState(false)

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='font-semibold text-xl'>Portofolio {usaha.namaProduk}</h1>
        <button
          className='bg-green-500 px-12 py text-white rounded-lg'
          onClick={() => setModal(true)}
        >
          Rekap Data
        </button>
      </div>

      <div className='grid grid-cols-3 gap-8 mt-4'>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconUser size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Total Investor</p>
            <h3 className='font-semibold text-2xl'>{usaha.totalInvestor}</h3>
            <Link
              to={`/umkm/detail-usaha/1/detail-investor`}
              className='bg-green-400 p-1 px-3 rounded-md text-white'
            >
              Detail Investor
            </Link>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCashBanknote size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Laba</p>
            <h3 className='font-semibold text-lg'>{toRupiah(usaha.laba)}</h3>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCurrencyDollar size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Dana terkumpul</p>
            <h3 className='font-semibold text-lg'>{usaha.danaTerkumpul}</h3>
          </div>
        </div>
      </div>

      <Riwayat listRiwayat={usaha.riwayat} />

      <div
        className={`bg-black bg-opacity-50 flex justify-center items-center fixed z-50 left-0 top-0 ${
          modal ? 'bottom-0 right-0 block' : 'hidden'
        }`}
      >
        <RekapData setModal={setModal} />
      </div>
    </div>
  )
}

export default DetailUsaha
