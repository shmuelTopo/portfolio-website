import './Projects.css'
import IconChip from '../components/IconChip'
import type { TechItemName } from '../components/IconChip'
import { techItems } from '../components/IconChip'
import { GitHubIcon, NewTabLink } from '../images/Icons'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { projectsList } from './projectsList'

export interface Project {
  items: TechItemName[]
  imgSrc: string
  title: string
  githubLink?: string
  liveLink?: string
  description: string
}

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div className='projects-container'>
        {projectsList.map((project) => (
          <ProjectBox key={project.title} projectInfo={project}></ProjectBox>
        ))}
      </div>
    </>
  )
}

function ProjectBox({ projectInfo }: { projectInfo: Project }) {
  console.log(projectInfo.description)
  return (
    <div className='project-box'>
      <img src={projectInfo.imgSrc} alt={`${projectInfo.title} showcase`} />
      <div className='project-info'>
        <div className='project-title-and-links'>
          <h4 className='project-title'>{projectInfo.title}</h4>
          {projectInfo.liveLink && (
            <a href={projectInfo.liveLink} target='_blank' rel='noreferrer'>
              <NewTabLink className='icon' />
            </a>
          )}
          {projectInfo.githubLink && (
            <a href={projectInfo.githubLink} target='_blank' rel='noreferrer'>
              <GitHubIcon className='icon' />
            </a>
          )}
        </div>
        <div className='project-chips'>
          {projectInfo.items.map((item) => {
            return (
              <IconChip
                className='icon-chip'
                width={20}
                color='original'
                key={item}
                Icon={techItems.find((t) => t.name === item)?.icon}
                name={item}
                size='sm'
              />
            )
          })}
        </div>
        <hr />
        <ReactMarkdown>{projectInfo.description}</ReactMarkdown>
      </div>
    </div>
  )
}
