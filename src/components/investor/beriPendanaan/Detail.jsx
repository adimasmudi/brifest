import React from 'react'

const Detail = ({ umkm }) => {
  // console.log('from details', umkm)
  return (
    <div>
      <h2 className='font-semibold text-2xl'>Pembayaran</h2>
      BRI : 7632-01-007520-53-0
      {/* {umkm.pembayaran.map((el, i) => (
        <p key={i} className='text-base'>
          {el}
        </p>
      ))} */}
      <h2 className='font-semibold text-2xl'>Alamat</h2>
      <p className='text-base'>{umkm.lokasi}</p>
      <h2 className='font-semibold text-2xl'>Contact Person</h2>
      <p className='text-base'>{umkm.mediaSosial}</p>
    </div>
  )
}

export default Detail
