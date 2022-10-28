import { IconArrowsTransferDown } from '@tabler/icons'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi'
import data from './../../../constants/data'
import TransferDividen from './TransferDividen'

const DetailInvestor = () => {
  const { id } = useParams()

  const getInvestor = (id) => {
    const index = data.daftarUsahaUmkm.findIndex((usaha) => usaha.id == id)
    return data.daftarUsahaUmkm[index]
  }
  const listInvestor = getInvestor(id).investor

  const [modal, setModal] = useState(false)

  const [investor, setInvestor] = useState({})

  const handleTransfer = (id) => {
    const index = listInvestor.findIndex((investor) => investor.id == id)
    setInvestor(listInvestor[index])
    setModal(true)
  }

  return (
    <div>
      <h1 className='text-2xl font-semibold'>List Pemilik Investor</h1>

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
          {listInvestor.map((investor, i) => (
            <tr key={investor.id} className='border-b-2 border-b-green-400'>
              <td className='py-3'>{++i}</td>
              <td>{investor.nama}</td>
              <td>{investor.tanggalPendanaan}</td>
              <td>{toRupiah(investor.jumlahPendanaan)}</td>
              <td>{toRupiah(investor.totalDividen)}</td>
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
