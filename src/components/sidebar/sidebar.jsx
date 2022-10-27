import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const sidebar = ({ menus, prefix }) => {
  return (
    <div className='min-w-[250px]'>
      <h2 className='text-4xl font-medium mb-8 text-center'>Menu</h2>

      <ul className='mx-6 flex flex-1 flex-col gap-3'>
        {menus.map((menu, ind) => (
          <li key={ind + 1}>
            <NavLink
              style={({ isActive }) => {
                return {
                  background: isActive ? '#5DD95D' : '',
                }
              }}
              to={`/${prefix}${menu.path}`}
              className='flex p-2 font-medium text-xl items-center bg-[#DDF4DF] rounded-xl gap-3'
            >
              {menu.icon}
              {menu.name
                .split(' ')
                .map((word) => word.replace(word[0], word[0].toUpperCase()))
                .join(' ')}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  )
}

export default sidebar
