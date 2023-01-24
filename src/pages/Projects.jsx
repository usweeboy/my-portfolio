import React, { useState } from 'react'
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  const [projects, setProjects] = useState([
    {id: 0, name: 'Virtual Keyboard', tech: 'HTML, CSS, JS', img: 'virtualkeyboard', link: 'https://usweeboy.github.io/virtual-keyboard/'},
    {id: 1, name: 'Quizz', tech: 'React, Redux, Tailwind', img: 'quizz', link: 'https://quizz-react-eight.vercel.app/'},
    {id: 2, name: 'Leacorr (Timer)', tech: 'React, Tailwind', img: 'leacorr', link: 'https://leacorr-timer.vercel.app/'},
    {id: 3, name: 'Todos', tech: 'React, Redux, SASS', img: 'todos', link: 'https://github.com/usweeboy/todos-react'},
    {id: 4, name: 'Landing Page', tech: 'HTML, SASS, JS', img: 'landingpage', link: 'https://landingpage-zeta.vercel.app/'},
    {id: 5, name: 'Cook Service (Vue)', tech: 'Vue, Tailwind', img: 'cookservice', link: 'https://cookservice-vue.vercel.app/'},
  ]);

  return (
    <div className='Projects'>
      <div className='py-10 px-4 mx-auto max-w-6xl'>
        <div className='flex justify-center'>
          <h1 className='w-80 pb-4 border-b border-b-gray-300 text-center text-4xl sm:text-5xl font-bold text-indigo-500'>
            Projects
          </h1>
        </div>
        <ul className='project_list mt-6 sm:mt-10 flex justify-between flex-wrap gap-6'>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects