import {
  IconBell,
  IconMessageCircle,
  IconUser,
  IconLogout,
} from '@tabler/icons'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import logoBrifest from './../../assets/logo birfest.png'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
// universal cookie
import Cookies from 'universal-cookie'

const NavbarDashboard = () => {
  const [notif, setNotif] = useState(0)
  const [error, setError] = useState('')

  const cookies = new Cookies()

  // const navigate = useNavigate()
  const token = cookies.get('TOKEN')

  useEffect(() => {
    // sisi investor

    // sisi umkm
    axios({
      method: 'get',
      url: `http://localhost:5000/umkm/getPengajuanPerjanjian`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  const navigate = useNavigate()
  const logout = () => {
    // destroy the cookie
    cookies.remove('TOKEN', { path: '/' })
    navigate('/')
  }
  return (
    <div className='px-28 py-4'>
      <div className='flex justify-between'>
        <img src={logoBrifest} alt='logo Brifest' />
        <div className='flex flex-1 justify-end gap-10'>
          <form action='' onSubmit={logout} className='flex flex-row gap-2'>
            <Link to={'#'} className='flex justify-center items-center'>
              <button
                type='button'
                className='inline-flex relative items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <IconBell size={42} color='#959595' />
                <div className='inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900'>
                  20
                </div>
              </button>
            </Link>

            <Link to={'#'} className='flex justify-center items-center'>
              <IconMessageCircle size={42} color='#959595' />
            </Link>

            <Link to={'#'} className='flex justify-center items-center'>
              <IconUser size={42} color='#959595' />
            </Link>

            <button type='submit'>
              <IconLogout size={42} color='#959595' />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NavbarDashboard
