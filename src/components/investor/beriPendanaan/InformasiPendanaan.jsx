import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'

const InformasiPendanaan = ({ umkm }) => {
  const [pendanaan, setPendanaan] = useState(0)

  return (
    <div>
      <p>Minimal pembelian : {toRupiah(umkm.saham)} / 1 lembar saham </p>
      <p>Dari Total kebutuhan dana : {toRupiah(umkm.totalKebutuhanDana)}</p>
      <p>Sisa dana yang dibutuhkan : {toRupiah(umkm.terkumpul)}</p>
      <div className='mt-3'>
        <input
          type='range'
          name='pendanaan'
          id='pendanaan'
          min={0}
          max={umkm.totalKebutuhanDana - umkm.terkumpul}
          step={100}
          value={pendanaan}
          onInput={(e) => setPendanaan(e.target.value)}
          className='w-full h-4 bg-green-200 appearance-none cursor-pointer '
        />
        <h3 className='font-semibold text-center'>Total</h3>
        <h4 className='font-semibold text-center mt-2'>
          {toRupiah(pendanaan)}
        </h4>

        <div className='flex flex-1 gap-4 justify-center mt-5'>
          <Link to={'/'} className='py-2 px-8 bg-green-500'>
            Chat
          </Link>
          <Link to={'/'} className='py-2 px-8 bg-green-500'>
            Beli
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InformasiPendanaan
