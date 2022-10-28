import React, { useEffect } from 'react'
import CariUsaha from './CariUsaha'
import Portofolio from './Portofolio'
import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'

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
