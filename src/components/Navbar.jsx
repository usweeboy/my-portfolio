import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

const Navbar = () => {
  const [adaptiveMenu, setAdaptiveMenu] = useState(false);

  return (
    <nav className='py-5 px-8 bg-zinc-900 border-b border-b-zinc-800'>
      <div className='flex mx-auto max-w-6xl items-center justify-between'>
        <Link to='/' className='cursor-pointer text-slate-50 text-[26px] lg:text-[28px] font-bold'>
          My portfolio
        </Link>
        <div className='hidden sm:flex items-center'>
          <ul className='flex mr-6'>
            <li className='cursor-pointer mr-5 mb-[2px] border-b border-b-zinc-900 transition duration-200 hover:border-b-indigo-500'>
              <Link to='/' className='text-[15px] font-light text-slate-50'>
                Home
              </Link>
            </li>
            <li className='cursor-pointer mr-5 mb-[2px] border-b border-b-zinc-900 transition duration-200 hover:border-b-indigo-500'>
              <Link to='/projects' className='text-[15px] font-light text-slate-50'>
                Projects
              </Link>
            </li>
            <li className='cursor-pointer mb-[2px] border-b border-b-zinc-900 transition duration-200 hover:border-b-indigo-500'>
              <Link to='/contacts' className='text-[15px] font-light text-slate-50'>
                Contacts
              </Link>
            </li>
          </ul>
          <div className='flex items-center'>
            <a href='https://github.com/usweeboy' target='_blank' rel="noreferrer">
              <img className='w-7 h-7 cursor-pointer mr-3' src='/images/icons/github-white.svg'/>
            </a>
            <a href='https://t.me/usweeboy' target='_blank' rel="noreferrer">
              <img className='w-7 h-7 cursor-pointer' src='/images/icons/telegram.svg'/>
            </a>
          </div>
        </div>
        <img 
          onClick={() => setAdaptiveMenu(!adaptiveMenu)}
          src='/images/icons/menu.svg' 
          className='block sm:hidden w-8 h-8 cursor-pointer'
        />
      </div>
      <CSSTransition
        in={adaptiveMenu}
        timeout={700}
        classNames='myclass'
        unmountOnExit
      >
        <div className='block mt-3 sm:hidden pt-3 border-t sm:border-none border-t-zinc-800'>
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
      </CSSTransition>
    </nav>
  )
}

export default Navbar