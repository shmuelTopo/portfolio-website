import './Projects.css'
import TechBox from '../components/TechBox'
import type { TechItemName } from '../components/TechBox'
import { techItems } from '../components/TechBox'
import { GitHubIcon, NewTabLink } from '../images/icons'

interface Project {
  items: TechItemName[]
  keyFeatures?: string[]
  imgSrc: string
  title: string
  githubLink?: string
  liveLink?: string
  description: string
}

const projects: Project[] = [
  {
    title: 'Recipe website',
    description: `I developed a recipe website using TypeScript, Express, and Postgres. It provides a seamless and enjoyable recipe browsing experience.`,
    keyFeatures: [
      `Recipe Search: Users can search for recipes using keywords. The server connects to an external recipe API to fetch relevant recipes.`,
      `Caching: Fetched recipes are temporarily stored in PostgreSQL for 1 hour. This reduces repetitive API calls and improves performance.`,
      `Recipe Retrieval: the server directly retrieves specific details from the PostgreSQL database, if it is still in cached. If not, Express seamlessly makes another API request to obtain the necessary details.`
    ],
    items: ['Typescript', 'Express', 'React', 'Postgres'],
    imgSrc: 'https://source.unsplash.com/7X1gURtGScE',
    githubLink: 'https://github.com/shmuelTopo/recipe-app',
    liveLink: 'https://projects.shmuel.dev/recipes'
  },
  {
    title: 'Chess website',
    description: `I developed a recipe website using TypeScript, Express, and Postgres. It provides a seamless and enjoyable recipe browsing experience.`,
    keyFeatures: [
      `Recipe Search: Users can search for recipes using keywords. The server connects to an external recipe API to fetch relevant recipes.`,
      `Caching: Fetched recipes are temporarily stored in PostgreSQL for 1 hour. This reduces repetitive API calls and improves performance.`,
      `Recipe Retrieval: the server directly retrieves specific details from the PostgreSQL database, if it is still in cached. If not, Express seamlessly makes another API request to obtain the necessary details.`
    ],
    items: ['Typescript', 'Express', 'React', 'Postgres'],
    imgSrc: 'https://source.unsplash.com/fzOITuS1DIQ',
    githubLink: 'https://github.com/shmuelTopo/recipe-app',
    liveLink: 'https://projects.shmuel.dev/recipes'
  },
  {
    title: 'Maps website',
    description: `I developed a recipe website using TypeScript, Express, and Postgres. It provides a seamless and enjoyable recipe browsing experience.`,
    keyFeatures: [
      `Recipe Search: Users can search for recipes using keywords. The server connects to an external recipe API to fetch relevant recipes.`,
      `Caching: Fetched recipes are temporarily stored in PostgreSQL for 1 hour. This reduces repetitive API calls and improves performance.`,
      `Recipe Retrieval: the server directly retrieves specific details from the PostgreSQL database, if it is still in cached. If not, Express seamlessly makes another API request to obtain the necessary details.`
    ],
    items: ['Typescript', 'Express', 'React', 'Postgres'],
    imgSrc: 'https://source.unsplash.com/SFRw5GChoLA',
    githubLink: 'https://github.com/shmuelTopo/recipe-app',
    liveLink: 'https://projects.shmuel.dev/recipes'
  },
  {
    title: 'Blog website',
    description: `I developed a recipe website using TypeScript, Express, and Postgres. It provides a seamless and enjoyable recipe browsing experience.`,
    keyFeatures: [
      `Recipe Search: Users can search for recipes using keywords. The server connects to an external recipe API to fetch relevant recipes.`,
      `Caching: Fetched recipes are temporarily stored in PostgreSQL for 1 hour. This reduces repetitive API calls and improves performance.`,
      `Recipe Retrieval: the server directly retrieves specific details from the PostgreSQL database, if it is still in cached. If not, Express seamlessly makes another API request to obtain the necessary details.`
    ],
    items: ['Typescript', 'Express', 'React', 'Postgres'],
    imgSrc: 'https://source.unsplash.com/npxXWgQ33ZQ',
    githubLink: 'https://github.com/shmuelTopo/recipe-app',
    liveLink: 'https://projects.shmuel.dev/recipes'
  }
]

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div className='projects-container'>
        {projects.map((project) => (
          <ProjectBox key={project.title} projectInfo={project}></ProjectBox>
        ))}
      </div>
    </>
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
            return <TechBox color='current' key={item} Icon={techItems.find((t) => t.name === item)?.icon} name={item} size='sm' />
          })}
        </div>
        <hr />
        <p className='project-description'>{projectInfo.description}</p>
        {projectInfo.keyFeatures && (
          <>
            <h5>Key Features:</h5>
            <ol>
              {projectInfo.keyFeatures?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ol>
          </>
        )}
      </div>
    </div>
  )
}
