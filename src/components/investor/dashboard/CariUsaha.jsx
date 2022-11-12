import { IconSearch } from '@tabler/icons'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi.js'
// import data from './../../../constants/data.js'

const CariUsaha = ({ data }) => {
  const [search, setSearch] = useState('')
  // const [data, setData] = useState(usaha)

  // const handleSearch = (dt, search) => {
  //   e.preventDefault()

  //   const newData = data?.filter(
  //     (d) =>
  //       handleSearch(d.namaProduk, search) ||
  //       handleSearch(d.namaPerusahaan, search)
  //   )
  //   setData(newData)
  // }

  const hitungTerkumpul = (pendanaan) => {
    let danaTerkumpul = 0
    if (pendanaan?.length !== 0) {
      pendanaan?.map((dana) => {
        danaTerkumpul += dana.nominal
      })
    }

    console.log('dana terkumpul', danaTerkumpul)

    return danaTerkumpul
  }

  return (
    <div className='my-2 p-4 rounded-xl w-full'>
      <div className='flex flex-1 justify-between'>
        <h2 className='font-medium text-2xl w-full'>
          Cari usaha untuk didanani
        </h2>
        <div className='w-full'>
          <form action='#' className='flex gap-4'>
            <input
              value={search}
              type='text'
              placeholder='Masukkan kata pencarian'
              onChange={(e) => setSearch(e.target.value)}
              className='p-2 w-full text-xs placeholder:text-xs'
            />
            <button
              type='submit'
              className='flex justify-between items-center gap-3 bg-[#5DD95D] p-2 rounded-md'
            >
              <IconSearch size={18} /> <p>Search</p>
            </button>
          </form>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-8 my-6'>
        {data?.map((umkm) => (
          <Link
            to={`/investor/beri-pendanaan/${umkm._id}`}
            className='flex flex-col bg-white'
            key={umkm._id}
          >
            <img
              src={`https://brifest-api.herokuapp.com/public/${umkm.images}`}
              alt={umkm.images}
            />
            <div className='p-4  '>
              <h3 className='text-xl font-medium'>{umkm.namaProduk}</h3>
              <p className='text-base font-light'>{umkm.namaPerusahaan}</p>

              <h4 className='mt-4'>Total kebutuhan dana :</h4>
              <p>{toRupiah(umkm.kebutuhanDana)}</p>

              <div className='mt-4 bg-slate-600 h-3 relative'>
                <div
                  className='absolute top-0 left-0 h-full bg-green-500'
                  style={{
                    width:
                      (hitungTerkumpul(umkm.pendanaanId) / umkm.kebutuhanDana) *
                        100 +
                      '%',
                  }}
                ></div>
              </div>
              <p>
                {Math.round(
                  (hitungTerkumpul(umkm.pendanaanId) / umkm.kebutuhanDana) *
                    100,
                  2
                ) + '%'}{' '}
                Terkumpul
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CariUsaha
