import React from 'react'
import { NavLink } from 'react-router-dom';

const DropdownMenu = () => {
  return (
    <div className='dropdown mt-[10px]'>
      <NavLink 
        to='/' 
        className='block rounded text-[15px] font-light text-slate-50 cursor-pointer p-2 hover:bg-zinc-700 bg-z transition duration-200'
      >
        Home
      </NavLink>
      <NavLink 
        to='/projects' 
        className='block rounded text-[15px] font-light text-slate-50 cursor-pointer p-2 hover:bg-zinc-700 bg-z transition duration-200'
      >
        Projects
      </NavLink>
      <NavLink 
        to='/contacts' 
        className='block rounded text-[15px] font-light text-slate-50 cursor-pointer p-2 hover:bg-zinc-700 bg-z transition duration-200'
      >
        Contacts
      </NavLink>
      <div className='flex items-center mt-1 p-2'>
        <a href='https://github.com/usweeboy' target='_blank' rel="noreferrer">
          <img className='w-8 h-8 cursor-pointer' src='/images/icons/github-white.svg'/>
        </a>
        <a href='https://t.me/usweeboy' target='_blank' rel="noreferrer">
          <img className='w-8 h-8 cursor-pointer ml-3' src='/images/icons/telegram.svg'/>
        </a>
      </div>
    </div>
  )
}

export default DropdownMenu