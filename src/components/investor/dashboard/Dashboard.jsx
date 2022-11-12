import React, { useState, useEffect } from 'react'
import CariUsaha from './CariUsaha'
import Portofolio from './Portofolio'
import axios from 'axios'

// universal cookie
import Cookies from 'universal-cookie'

const Dashboard = () => {
  const [usaha, setUsaha] = useState([])
  const [pendanaan, setPendanaan] = useState([])
  const [user, setUser] = useState('')

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/investor/dashboard`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log('investor', result)
        setUser(result.data.user.userEmail.split('@')[0])
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
      <h1 className='font-semibold text-4xl'>Dashboard, {user}</h1>
      <Portofolio dana={pendanaan} />
      {usaha !== [] && <CariUsaha data={usaha} dana={pendanaan} />}
    </div>
  )
}

export default Dashboard
