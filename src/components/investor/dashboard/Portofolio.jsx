import { IconCreditCard, IconWallet } from '@tabler/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Portofolio = () => {
  return (
    <div className='my-2 p-4 rounded-xl bg-[#C9FEC9] w-full'>
      <h2 className='font-medium text-xl'>Portofolio</h2>
      <div className='flex flex-1 justify-between my-2'>
        <div className='flex gap-4 items-center'>
          <IconWallet size={42} />
          <div>
            <p className='font-medium'>Total Pendanaan</p>
            <h3 className='font-semibold text-2xl'>Rp. 75.100.000,00</h3>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <IconCreditCard size={42} />
          <div>
            <p className='font-medium'>Total Dividen</p>
            <h3 className='font-semibold text-2xl'>Rp. 15.203.201,00</h3>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <Link
          to={'/'}
          className='font-medium bg-[#5DD95D] rounded-lg py-2 px-8'
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  )
}

export default Portofolio
