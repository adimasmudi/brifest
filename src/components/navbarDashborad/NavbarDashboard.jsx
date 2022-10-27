import {
  IconBell,
  IconMessageCircle,
  IconUser,
  IconLogout,
} from '@tabler/icons'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import logoBrifest from './../../assets/logo birfest.png'

// universal cookie
import Cookies from 'universal-cookie'

const NavbarDashboard = () => {
  const cookies = new Cookies()
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
            <Link to={'/'} className='flex justify-center items-center'>
              <IconBell size={42} color='#959595' />
            </Link>
            <Link to={'/'} className='flex justify-center items-center'>
              <IconMessageCircle size={42} color='#959595' />
            </Link>

            <Link to={'/profile'} className='flex justify-center items-center'>
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
