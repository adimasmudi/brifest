import { IconBell, IconMessageCircle, IconUser } from '@tabler/icons'
import { Link } from 'react-router-dom'
import logoBrifest from './../../assets/logo birfest.png'

const NavbarDashboard = () => {
  return (
    <div className='px-28 py-4'>
      <div className='flex justify-between'>
        <img src={logoBrifest} alt='logo Brifest' />
        <div className='flex flex-1 justify-end gap-10'>
          <Link to={'/'} className='flex justify-center items-center'>
            <IconBell size={42} color='#959595' />
          </Link>
          <Link to={'/'} className='flex justify-center items-center'>
            <IconMessageCircle size={42} color='#959595' />
          </Link>
          <Link to={'/'} className='flex justify-center items-center'>
            <IconUser size={42} color='#959595' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarDashboard
