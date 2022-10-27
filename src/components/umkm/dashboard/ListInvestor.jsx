import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../../constants/data'

const ListInvestor = () => {
  const investor = data.investor
  return (
    <div>
      <h2 className='font-medium text-base mt-4'>Investor terbaru</h2>
      <div className='grid grid-cols-4 gap-8 mt-4 w-full'>
        {investor.map((el) => (
          <div
            className='px-4 py-8 flex flex-col items-center gap-4 bg-white rounded-lg border-green-400 border'
            key={el.id}
          >
            <img
              src={`http://127.0.0.1:5173/assets/${el.gambar}`}
              alt={`${el.gambar}`}
              width={80}
            />
            <div className='text-center'>
              <h3 className='text-xl font-medium'>{el.nama}</h3>
              <p>{el.umkm}</p>
            </div>

            <Link
              to={`detail/${el.id}`}
              className='px-4 py-2 bg-green-400 rounded-md font-medium text-white'
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListInvestor
