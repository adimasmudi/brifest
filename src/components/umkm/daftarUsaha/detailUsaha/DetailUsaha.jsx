import { IconCashBanknote, IconCurrencyDollar, IconUser } from '@tabler/icons'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../../../constants/data'
import toRupiah from '../../../../constants/fungsi'
import RekapData from './RekapData'
import Riwayat from './Riwayat'

import axios from 'axios'
// universal cookie
import Cookies from 'universal-cookie'

const DetailUsaha = () => {
  const [detailUsaha, setDetailUsaha] = useState([])
  const [rekapan, setRekapan] = useState([])
  const [danaTerkumpul, setDanaTerkumpul] = useState([])
  const { id } = useParams()
  const [error, setError] = useState('')

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/umkm/usaha/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log('result detail', result)
        setDetailUsaha(result.data.usaha)
        setRekapan(result.data.usaha.rekapanId)
        setDanaTerkumpul(result.data.usaha.pendanaanId)
      })
      .catch((error) => {
        result.data.message
          ? setError(result.data.message)
          : setError('Internal Server Error')
        // console.log(error)
      })
  }, [rekapan])

  const [modal, setModal] = useState(false)

  const hitungLaba = (rekapan) => {
    let laba = 0
    rekapan.map((r) => {
      r.tipe === 'pemasukan' ? (laba += r.jumlah) : (laba -= r.jumlah)
    })

    return laba
  }

  const hitungDanaTerkumpul = (dana) => {
    console.log('dana', dana)
    let totalDana = 0
    for (let i of dana) {
      totalDana += i.nominal
    }

    return totalDana
  }

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='font-semibold text-xl'>
          Portofolio {detailUsaha.namaProduk}
        </h1>
        <button
          className='bg-green-500 px-12 py text-white rounded-lg'
          onClick={() => setModal(true)}
        >
          Rekap Data
        </button>
      </div>

      <div className='grid grid-cols-3 gap-8 mt-4'>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconUser size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Total Investor</p>
            <h3 className='font-semibold text-2xl'>
              {detailUsaha.pendanaanId?.length}
            </h3>
            <Link
              to={`/umkm/detail-usaha/${detailUsaha._id}/detail-investor`}
              className='bg-green-400 p-1 px-3 rounded-md text-white'
            >
              Detail Investor
            </Link>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCashBanknote size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Laba</p>
            <h3 className='font-semibold text-lg'>
              {toRupiah(hitungLaba(rekapan))}
            </h3>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCurrencyDollar size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Dana terkumpul</p>
            <h3 className='font-semibold text-lg'>
              {toRupiah(hitungDanaTerkumpul(danaTerkumpul))}
            </h3>
          </div>
        </div>
      </div>

      <Riwayat listRiwayat={rekapan} />

      <div
        className={`bg-black bg-opacity-50 flex justify-center items-center fixed z-50 left-0 top-0 ${
          modal ? 'bottom-0 right-0 block' : 'hidden'
        }`}
      >
        <RekapData setModal={setModal} usahaId={detailUsaha._id} />
      </div>
    </div>
  )
}

export default DetailUsaha
