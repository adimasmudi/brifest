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

  const countTotalPendanaan = (umkm) => {
    let totalDana = 0
    for (let i of umkm) {
      for (let j of i.pendanaanId) {
        totalDana += j.nominal
      }
    }

    setTotalPendanaan(totalDana)
  }

  const countTotalInvestor = (usaha) => {
    let totalInvestor = 0
    for (let i of usaha) {
      totalInvestor += i.pendanaanId.length
    }

    setTotalInvestor(totalInvestor)
  }

  const countLaba = (usaha) => {
    const labArr = []
    for (let i of usaha) {
      i.rekapanId.map((data) => {
        data.tipe === 'pemasukan'
          ? labArr.push(data.jumlah)
          : labArr.push(-data.jumlah)
      })
    }

    const labaTotal = labArr.reduce((partial, a) => partial + a, 0)
    setLaba(labaTotal)
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/umkm/dashboard`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log('umkm', result)
        setUser(result.data.user.userEmail.split('@')[0])
        countTotalInvestor(result.data.usaha)
        countTotalPendanaan(result.data.usaha)
        countLaba(result.data.usaha)
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
