import React from 'react'

const ProjectItem = ({project}) => {
  return (
    <li className='project rounded-lg cursor-pointer' key={project.id}>
      <a href={project.link} target='_blank' rel="noreferrer">
        <div
          style={{backgroundImage: `url(/images/${project.img}.png)`}} 
          className='project_background rounded-t-lg w-full h-56 sm:h-48 lg:h-36'
        />
        <h1 className='project_title mt-4 px-3 text-base text-zinc-900 font-medium'>
          {project.name}
        </h1>
        <p className='project_tech px-3 pb-3 font-light text-[13px] text-zinc-800'>
          {project.tech}
        </p>
      </a>
    </li>
  )
}

export default ProjectItem