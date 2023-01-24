import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
      <header className='bg-zinc-900 px-4 flex justify-center py-24'>
        <div className='mx-auto max-w-6xl'>
          <div className='context text-center'> 
            <h1 className='text-4xl md:text-5xl font-bold text-slate-50'>Hey, my name is 
              <span className='text-indigo-500'> Daniil</span>
            </h1>
            <h3 className='mt-2 text-xl md:text-2xl font-normal text-slate-50'>I'm a Frontend Developer</h3>
            <button className='z-0 mt-8 md:mt-10'>
              <a 
                className='bg-indigo-500 py-3 px-4 rounded-lg text-slate-50 text-[15px] transition duration-300 hover:bg-indigo-600'
                href='https://docs.google.com/document/d/1KCl3xN6KsnxpfYqKrftkgdqv-kYjB4AynPcMV4-WQII/edit' target='_blank'>
                Downoload CV
              </a>
            </button>
          </div>
          <div className="area">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </header>
      <main className='px-4 py-12'>
        <div className='mx-auto max-w-7xl text-center'>
          <h2 className='text-3xl md:text-4xl font-semibold text-zinc-900'>Frontend</h2>
          <p className='text-base md:text-[17px] leading-7 text-zinc-800 mt-2 mx-auto max-w-sm'>
            HTML, CSS, SASS/SCSS, JavaScript, React JS, Tailwind, Redux, NPM, Git, Vue
          </p>
        </div>
        <div className='mx-auto max-w-7xl text-center mt-12'>
          <h2 className='text-3xl md:text-4xl font-semibold text-zinc-900'>About me</h2>
          <div className='flex justify-center mt-4'>
            <img src='/images/avatar.png' className='w-32 h-32 md:w-36 md:h-36'/>
          </div>
          <p className='font-light leading-7 text-base md:text-[17px] text-zinc-800 mt-4 mx-auto max-w-lg'>
            My name is Daniil Grachkov. I'm 19 years old. I started programming on my own a year ago, in 2022.  
            In addition to programming, I also study <span className='font-medium'>English</span>.  
            My level is <span className='font-medium'>A2</span>. I like to learn new technologies.  
            My first framework was <span className='font-medium'>Vue </span>,
            but later I switched to <span className='font-medium'>React </span> and use only it.
            I can <span className='font-medium'>easily switch between them</span>.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home