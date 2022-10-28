import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavbarDashboard from '../NavbarDashborad/NavbarDashboard'

// universal cookie
import Cookies from 'universal-cookie'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const cookies = new Cookies()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:5000/',
      data: {
        email,
        password,
      },
    })
      .then((result) => {
        console.log(result)
        // set the cookie
        cookies.set('TOKEN', result.data.token, {
          path: '/',
        })

        navigate(`/${result.data.userRole}/dashboard`)
      })
      .catch((error) => {
        setError(error)
      })
  }

  return (
    <>
      <div className='grid place-items-center justify-center min-h-screen '>
        <div className='max-w-xl px-[25px] py-[24px] rounded-[10px] shadow-md'>
          <h1 className='text-4xl font-semibold text-gray-800'>Log In</h1>
          <p className='text-sm text-primary mt-3 mb-5'>
            Selamat Datang, Silahkan masuk dengan email dan password
          </p>

          <form action='/' method='post' onSubmit={handleSubmit}>
            <div className='flex flex-1 flex-col mb-4'>
              <label htmlFor='email' className='font-medium text-sm mb-3'>
                Email
              </label>
              <input
                type='email'
                name='email'
                placeholder='Masukan email anda'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                className='text-sm px-2 py-1 border-[1px] border-[#A1E496] rounded-[5px] focus:ring-green-200 focus:ring-1 outline-none placeholder:text-sm placeholder:text-gray-400'
              />
            </div>
            <div className='flex flex-1 flex-col'>
              <label htmlFor='password' className='font-medium text-sm mb-3'>
                Password
              </label>
              <input
                type='password'
                name='password'
                placeholder='Masukan password anda'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                className='text-sm px-2 py-1 border-[1px] border-[#A1E496] rounded-[5px] focus:ring-green-200 focus:ring-1 outline-none placeholder:text-sm placeholder:text-gray-400'
              />
            </div>
            <div className='flex flex-row-reverse my-4'>
              <Link
                to={'/forgot-password'}
                className='font-semibold text-primary text-sm'
              >
                Lupa Password
              </Link>
            </div>
            <div>
              <button
                type='submit'
                name='password'
                className='w-full py-2 bg-primary font-semibold text-xl text-white  rounded-lg'
              >
                Login
              </button>
            </div>
          </form>
          <p className='mt-6 text-center text-sm'>
            Tidak Punya akun?{' '}
            <Link to={'/register'} className='text-primary'>
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
