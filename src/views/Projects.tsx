import './Projects.css'
import TechBox from '../components/TechBox'
import type { TechItemName } from '../components/TechBox'
import { techItems } from '../components/TechBox'
import { GitHubIcon, NewTabLink } from '../images/icons'

interface Project {
  items: TechItemName[]
  imgSrc: string
  title: string
  githubLink?: string
  liveLink?: string
  description: string
}

const projects: Project[] = [
  {
    // items: [{ name: 'React', icon: ReactIcon }, {name: "Postgres", icon: PostgresIcon}],
    items: ['React',"Postgres"],
    imgSrc: 'https://source.unsplash.com/npxXWgQ33ZQ',
    title: 'Recipe website',
    githubLink: 'https://github.com/shmuelTopo/recipe-app',
    liveLink: 'https://projects.shmuel.dev/recipes',
    description: 'Recipe website, where users can search recipes, and add their own, save them to their watch list and so on'
  }
]

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectBox key={project.title} projectInfo={project}></ProjectBox>
      ))}
    </div>
  )
}

function ProjectBox({ projectInfo }: { projectInfo: Project }) {
  return (
    <div className='project-box'>
      <img src={projectInfo.imgSrc} alt={`${projectInfo.title} showcase`} />
      <div className='project-info'>
        <div className='project-title-and-links'>
          <h4 className='project-title'>{projectInfo.title}</h4>
          {projectInfo.liveLink && (
            <a href={projectInfo.liveLink} target='_blank' rel='noreferrer'>
              <NewTabLink />
            </a>
          )}
          {projectInfo.githubLink && (
            <a href={projectInfo.githubLink} target='_blank' rel='noreferrer'>
              <GitHubIcon />
            </a>
          )}
        </div>
        <div className='project-chips'>
          {projectInfo.items.map((item) => {
            return <TechBox color='current' key={item} Icon={techItems.find(t => t.name === item)?.icon} name={item} size='sm' />
          })}
        </div>
        <hr />
        <p className='project-description'>{projectInfo.description}</p>
      </div>
    </div>
  )
}
