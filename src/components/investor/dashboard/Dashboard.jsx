import React from 'react'
import CariUsaha from './CariUsaha'
import Portofolio from './Portofolio'

const Dashboard = () => {
  return (
    <div>
      <h1 className='font-semibold text-4xl'>Dashboard</h1>
      <Portofolio />
      <CariUsaha />
    </div>
  )
}

export default Dashboard
