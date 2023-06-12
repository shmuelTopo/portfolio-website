/* eslint-disable @next/next/no-img-element */
import './Projects.css'
import IconChip from '../components/IconChip'
import type { TechItemName } from '../components/IconChip'
import { techItems } from '../components/IconChip'
import { GitHubIcon, NewTabLink } from '../images/Icons'
import theProjects from '../projects/projects.json'

interface Project {
  content: string
  data: {
    title: string
    items: TechItemName[]
    imgSrc: string
    githubLink: string
    liveLink?: string
    videoSrc?: string
  }
  isEmpty: boolean
  excerpt: string
  html: string
}

const projects: Project[] = theProjects as Project[]

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div className='projects-container'>
        {projects.map((project) => (
          <ProjectBox key={project.data.title} projectInfo={project}></ProjectBox>
        ))}
      </div>
    </>
  )
}

function ProjectBox({ projectInfo }: { projectInfo: Project }) {
  return (
    <div className='project-box'>
      <div className='image-container'>
        {projectInfo.data.videoSrc ? (
          <video width={1080} height={720} controls poster={projectInfo.data.imgSrc} src={projectInfo.data.videoSrc}></video>
        ) : (
          <img src={projectInfo.data.imgSrc} alt={`${projectInfo.data.title} showcase`} />
        )}
      </div>

      <div className='project-info'>
        <div className='project-title-and-links'>
          {projectInfo.data.liveLink ? (
            <a className='project-title' href={projectInfo.data.liveLink}>
              <h4>{projectInfo.data.title}</h4>
            </a>
          ) : (
            <h4 className='project-title'>{projectInfo.data.title}</h4>
          )}

          {projectInfo.data.liveLink && (
            <a href={projectInfo.data.liveLink} target='_blank' rel='noreferrer'>
              <NewTabLink className='icon' />
            </a>
          )}
          {projectInfo.data.githubLink && (
            <a href={projectInfo.data.githubLink} target='_blank' rel='noreferrer'>
              <GitHubIcon className='icon' />
            </a>
          )}
        </div>
        <div className='project-chips'>
          {projectInfo.data.items.map((item) => {
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
        <div dangerouslySetInnerHTML={{ __html: projectInfo.html }} />
      </div>
    </div>
  )
}
