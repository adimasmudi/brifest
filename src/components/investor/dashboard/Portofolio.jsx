import { IconCreditCard, IconWallet } from '@tabler/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'

const Portofolio = ({ pendanaan }) => {
  const [dana, setDana] = useState(0)
  const [dividen, setDividen] = useState(0)

  return (
    <div className='my-2 p-4 rounded-xl bg-[#C9FEC9] w-full'>
      <h2 className='font-medium text-xl'>Portofolio</h2>
      <div className='flex flex-1 justify-between my-2'>
        <div className='flex gap-4 items-center'>
          <IconWallet size={42} />
          <div>
            <p className='font-medium'>Total Pendanaan</p>
            <h3 className='font-semibold text-2xl'>{toRupiah(dana)}</h3>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <IconCreditCard size={42} />
          <div>
            <p className='font-medium'>Total Dividen</p>
            <h3 className='font-semibold text-2xl'>{toRupiah(dividen)}</h3>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <Link
          to={'#'}
          className='font-medium bg-[#5DD95D] rounded-lg py-2 px-8'
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  )
}

export default Portofolio
