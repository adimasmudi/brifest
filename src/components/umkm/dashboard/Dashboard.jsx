import { IconCashBanknote, IconCurrencyDollar, IconUser } from '@tabler/icons'
import React, { useEffect, useState } from 'react'
import toRupiah from '../../../constants/fungsi'
import Grafik from './Grafik'
import ListInvestor from './ListInvestor'

import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'

const Dashboard = () => {
  const [user, setUser] = useState('')
  const [totalInvestor, setTotalInvestor] = useState(0)
  const [totalPendanaan, setTotalPendanaan] = useState(0)
  const [laba, setLaba] = useState(0)

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/umkm/dashboard`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log(result.data[0])
        setUser(result.data.usaha[0].userId.namaUser)
        setTotalInvestor(result.data.usaha[0].pendanaanId.length)
        // const sum = result.data.usaha[0].pendanaanId
        //   ? [...result.data.usaha[0].pendanaanId.nominal].reduce(
        //       (partialSum, a) => partialSum + a,
        //       0
        //     )
        //   : 0

        const labArr = []
        result.data.rekapan?.map((data) => {
          data.tipe === 'pemasukan'
            ? labArr.push(data.jumlah)
            : labArr.push(-data.jumlah)
        })

        const labaTotal = labArr.reduce((partial, a) => partial + a, 0)
        setLaba(labaTotal)
        setTotalPendanaan(0)
      })
      .catch((error) => {
        console.log(error)
        // console.log(error)
      })
  }, [])
  return (
    <div>
      <h1 className='font-semibold text-4xl'>Dashboard, {user}</h1>

      <div className='grid grid-cols-3 gap-8 mt-4'>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconUser size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Total Investor</p>
            <h3 className='font-semibold text-2xl'>{totalInvestor}</h3>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCashBanknote size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Total Pendanaan</p>
            <h3 className='font-semibold text-lg'>
              {toRupiah(totalPendanaan)}
            </h3>
          </div>
        </div>
        <div className='px-4 py-8 flex gap-4 bg-white rounded-lg border-green-400 border'>
          <div className='bg-green-200 flex justify-center items-center p-4 rounded-md border-green-400 border'>
            <IconCurrencyDollar size={32} className='text-green-400' />
          </div>
          <div>
            <p className='font-medium'>Laba</p>
            <h3 className='font-semibold text-lg'>{toRupiah(laba)}</h3>
          </div>
        </div>
      </div>

      <Grafik />
      <ListInvestor />
    </div>
  )
}

export default Dashboard
