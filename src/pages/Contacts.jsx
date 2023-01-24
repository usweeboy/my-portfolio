import React from 'react'

const Contacts = () => {
  return (
    <div className='Contacts'>
      <div className='py-10 px-4 mx-auto max-w-6xl'>
        <div className='flex justify-center'>
          <h1 className='text-center w-80 pb-3 border-b border-b-gray-300 text-4xl sm:text-5xl font-bold text-indigo-500'>
            Contacts
          </h1>
        </div>
        <div className='text-center block sm:flex justify-center mt-7'>
          <div className='sm:mr-10'>
            <div>
              <h3 className='text-zinc-900 text-3xl font-semibold'>Location</h3>
              <p className='text-zinc-900 text-[15px]'>
                Tyumen, Russia
              </p>
            </div>
            <div className='mt-5'>
              <h3 className='text-zinc-900 text-3xl font-semibold'>Phone</h3>
              <p className='text-zinc-900 text-[15px]'>
                +7 (929) 264 39-03
              </p>
            </div>
          </div>
          <div className='sm:ml-10 mt-7 sm:mt-0'>
            <h3 className='text-zinc-900 text-3xl font-semibold'>
              Social network
            </h3>
            <div className='mt-5 sm:mt-3 transition duration-100 hover:bg-zinc-200 rounded-lg p-1'>
              <a className='flex items-center' target='_blank' rel="noreferrer" href='https://github.com/usweeboy'>
                <img src='/images/icons/github.svg'/>
                <p className='ml-1 text-zinc-900 font-medium text-lg'>
                  Github
                </p>
              </a>
            </div>
            <div className='mt-3 transition duration-100 hover:bg-zinc-200 rounded-lg p-1'>
              <a className='flex items-center' target='_blank' rel="noreferrer" href='https://t.me/usweeboy'>
                <img src='/images/icons/telegram-color.svg'/>
                <p className='ml-1 text-zinc-900 font-medium text-lg'>
                  Telegram
                </p>
              </a>
            </div>
            <div className='mt-3 transition duration-100 hover:bg-zinc-200 rounded-lg p-1'>
              <a className='flex items-center' target='_blank' rel="noreferrer" href="mailto:usweeboy21@mail.ru">
                <img src='/images/icons/mail.svg'/>
                <p className='ml-1 text-zinc-900 font-medium text-lg'>
                  Mail
                </p>
              </a>
            </div>
            <div className='mt-3 transition duration-100 hover:bg-zinc-200 rounded-lg p-1'>
              <a className='flex items-center' target='_blank' rel="noreferrer" href='https://vk.com/dgrachkov'>
                <img src='/images/icons/vk-color.svg'/>
                <p className='ml-1 text-zinc-900 font-medium text-lg'>
                  VK
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts