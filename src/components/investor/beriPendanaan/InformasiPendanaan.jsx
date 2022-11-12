import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'

const InformasiPendanaan = ({ umkm, wa }) => {
  const [pendanaan, setPendanaan] = useState(0)
  const [danaDiDapat, setDanaDiDapat] = useState(0)
  const [lembarSaham, setLembarSaham] = useState(0)

  const hitungTerkumpul = (usaha) => {
    let danaTerkumpul = 0
    if (usaha) {
      for (let i of usaha) {
        danaTerkumpul += i.nominal
      }
    }

    setDanaDiDapat(danaTerkumpul)
  }

  useEffect(() => {
    hitungTerkumpul(umkm.pendanaanId)
  }, [umkm])

  return (
    <div>
      <p>
        Minimal pembelian : {toRupiah(umkm.minimalPembelian)} / 1 lembar saham{' '}
      </p>
      <p>Dari Total kebutuhan dana : {toRupiah(umkm.kebutuhanDana)}</p>
      <p>Dana terkumpul : {toRupiah(danaDiDapat)}</p>
      <div className='mt-3'>
        <input
          type='range'
          name='pendanaan'
          id='pendanaan'
          min={0}
          max={umkm.kebutuhanDana - danaDiDapat}
          step={10000}
          value={pendanaan}
          onInput={(e) => {
            setPendanaan(e.target.value)
            setLembarSaham(Math.round(e.target.value / umkm.minimalPembelian))
          }}
          className='w-full h-4 bg-green-200 appearance-none cursor-pointer '
        />
        <h3 className='font-semibold text-center'>Total</h3>
        <h4 className='font-semibold text-center mt-2'>
          {toRupiah(pendanaan)} ({lembarSaham} lembar saham)
        </h4>

        <div className='flex flex-1 gap-4 justify-center mt-5'>
          <a
            href={`https://wa.me/${wa[0] == '0' ? '+62' + wa.slice(1) : 'wa'}`}
            className='py-2 px-8 bg-green-500'
          >
            Chat
          </a>
          <Link
            to={`/investor/kontrak/${umkm._id}?saham=${lembarSaham}&jumlahPembyaran=${pendanaan}`}
            className='py-2 px-8 bg-green-500'
          >
            Beli
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InformasiPendanaan
