import { IconArrowsTransferDown } from '@tabler/icons'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'
import data from './../../../constants/data'
import TransferDividen from './TransferDividen'

import axios from 'axios'
// universal cookie
import Cookies from 'universal-cookie'

const DetailInvestor = () => {
  const { id } = useParams()

  const [modal, setModal] = useState(false)

  const [investor, setInvestor] = useState({})

  const [error, setError] = useState('')

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://brifest-api.herokuapp.com/umkm/viewListInvestor/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setInvestor(result.data)
      })
      .catch((error) => {
        setError('Internal Server Error')
        // console.log(error)
      })
  }, [])

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  const handleTransfer = (id) => {
    // const index = listInvestor.findIndex((investor) => investor.id == id)
    // setInvestor(listInvestor[index])
    // setModal(true)
    return
  }

  console.log(investor)

  return (
    <div>
      <h1 className='text-2xl font-semibold'>List Pemilik Investor</h1>
      {investor.length > 0 ? (
        <table className='w-full mt-4'>
          <thead>
            <tr className='border-b-4 border-b-green-400'>
              <th className='text-left w-2'>No</th>
              <th className='text-left w-24'>Nama</th>
              <th className='text-left w-24'>Tanggal Pendanaan</th>
              <th className='text-left w-24'>Jumlah pendanaan</th>
              <th className='text-left w-24'>Total Dividen</th>
              <th className='text-left w-24'>Action</th>
            </tr>
          </thead>

          <tbody>
            {investor?.map((investor, i) => (
              <tr
                key={investor.userId._id}
                className='border-b-2 border-b-green-400'
              >
                <td className='py-3'>{++i}</td>
                <td>{investor.userId.namaUser}</td>
                <td>{`${new Date(investor.tanggal).toLocaleDateString('id-ID', {
                  weekday: 'long',
                })}, ${new Date(investor.tanggal).getDate()}-${new Date(
                  investor.tanggal
                ).getMonth()}-${new Date(investor.tanggal).getFullYear()}`}</td>
                <td>{toRupiah(investor.nominal)}</td>
                <td>{toRupiah(0)}</td>
                <td>
                  <button
                    className='flex flex-1 justify-center items-center bg-green-600 p-1 rounded-sm'
                    onClick={handleTransfer.bind(this, investor.id)}
                  >
                    <IconArrowsTransferDown color='#ffffff' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center text-lg'>Belum ada investor</p>
      )}

      <div
        className={`bg-black bg-opacity-50 flex justify-center items-center fixed z-50 left-0 top-0 ${
          modal ? 'bottom-0 right-0 block' : 'hidden'
        }`}
      >
        <TransferDividen setModal={setModal} data={investor} />
      </div>
    </div>
  )
}

export default DetailInvestor
