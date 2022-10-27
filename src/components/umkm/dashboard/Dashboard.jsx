import { IconCashBanknote, IconCurrencyDollar, IconUser } from '@tabler/icons'
import React from 'react'
import toRupiah from '../../../constants/fungsi'
import Grafik from './Grafik'
import ListInvestor from './ListInvestor'

const Dashboard = () => {
  return (
    <div>
      <h1 className='font-semibold text-4xl'>Dashboard</h1>

      <div className='grid grid-cols-3 gap-8 mt-4'>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconUser size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Total Investor</p>
            <h3 className='font-semibold text-2xl'>{140}</h3>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCashBanknote size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Total Dana</p>
            <h3 className='font-semibold text-lg'>{toRupiah(43334418)}</h3>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCurrencyDollar size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Laba</p>
            <h3 className='font-semibold text-lg'>{toRupiah(423455)}</h3>
          </div>
        </div>
      </div>

      <Grafik />
      <ListInvestor />
    </div>
  )
}

export default Dashboard
