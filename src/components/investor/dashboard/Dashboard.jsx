import React, { useState, useEffect } from 'react'
import CariUsaha from './CariUsaha'
import Portofolio from './Portofolio'
import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'

const Dashboard = () => {
  const [usaha, setUsaha] = useState([])
  const [pendanaan, setPendanaan] = useState([])

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://guarded-wildwood-83398.herokuapp.com/investor/dashboard`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setUsaha(result.data.usaha)
        setPendanaan(result.data.dana)
      })
      .catch((error) => {
        console.log(error)
        // console.log(error)
      })
  }, [])
  return (
    <div>
      <h1 className='font-semibold text-4xl'>Dashboard</h1>
      <Portofolio />
      {usaha !== [] && <CariUsaha data={usaha} />}
    </div>
  )
}

export default Dashboard
