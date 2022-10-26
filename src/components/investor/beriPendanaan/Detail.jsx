import React from 'react'

const Detail = ({ umkm }) => {
  return (
    <div>
      <h2 className='font-semibold text-2xl'>Pembayaran</h2>
      {umkm.pembayaran.map((el, i) => (
        <p key={i} className='text-base'>
          {el}
        </p>
      ))}

      <h2 className='font-semibold text-2xl'>Alamat</h2>
      <p className='text-base'>{umkm.alamat}</p>

      <h2 className='font-semibold text-2xl'>Contact Person</h2>
      <p className='text-base'>{umkm.contact}</p>
    </div>
  )
}

export default Detail
