import {
  IconCashBanknote,
  IconCoin,
  IconCurrencyDollar,
  IconMoneybag,
  IconUser,
} from '@tabler/icons'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import toRupiah from '../../../../constants/fungsi'
import data from './../../../../constants/data'

const DetailUsaha = () => {
  const [ulasan, setUlasan] = useState('')
  const { id } = useParams()
  const getUsaha = (id) => {
    const index = data.listUsaha.findIndex((usaha) => usaha.id == id)
    return data.listUsaha[index]
  }

  const usaha = getUsaha(id)

  const handleUlasan = () => {
    console.log(ulasan)
  }

  return (
    <div>
      <h2 className='font-semibold text-xl'>Portofolio {usaha.nama}</h2>

      <div className='grid grid-cols-3 gap-8 mt-4'>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconUser size={32} className='text-green-400' />
          </div>
          <div>
            <h4>Total Investor</h4>
            <h3 className='font-semibold text-lg'>{usaha.totalInvestor}</h3>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCurrencyDollar size={32} className='text-green-400' />
          </div>
          <div>
            <h4>Laba</h4>
            <h3 className='font-semibold text-lg'>{toRupiah(usaha.laba)}</h3>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCashBanknote size={32} className='text-green-400' />
          </div>
          <div>
            <h4>Dana Terkumpul</h4>
            <h3 className='font-semibold text-lg'>{usaha.danaTerkumpul}</h3>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCoin size={32} className='text-green-400' />
          </div>
          <div>
            <h4>Total pendanaan</h4>
            <h3 className='font-semibold text-lg'>
              {toRupiah(usaha.jumlahPendanaan)}
            </h3>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconMoneybag size={32} className='text-green-400' />
          </div>
          <div className='w-full'>
            <h4>Dividen</h4>
            <h3 className='font-semibold text-lg'>
              {toRupiah(usaha.totalDividen)}
            </h3>
            <Link
              to={'/'}
              className='flex w-full bg-green-800 text-white font-medium py justify-center rounded-md'
            >
              klaim
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-white p-4 mt-8'>
        <textarea
          name='ulasan'
          id=''
          cols='30'
          rows='5'
          className='resize-none w-full bg-green-100 p-4'
          placeholder='Ketik sesuatu'
          value={ulasan}
          onChange={(e) => setUlasan(e.target.value)}
        ></textarea>

        <div className='flex flex-row-reverse'>
          <button
            onClick={handleUlasan}
            className='px-4 py-1 bg-green-600 text-white rounded-md'
          >
            Beri Ulasan
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailUsaha
