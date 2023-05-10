import "./Projects.css";
import TechBox, { TechItemName } from "../components/TechBox";
import { GitHubIcon, NewTabLink } from "../images/icons";

interface Project {
  itemNames: TechItemName[];
  title: string;
  githubLink?: string;
  liveWebsiteLink?: string;
  description: string;
}

const projects: Project[] = [
  {
    itemNames: ["React", "Postgres"],
    title: "Recipe website",
    githubLink: "github.com",
    liveWebsiteLink: "projects.shmuel.dev/recipes",
    description: "cool website",
  },
];

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map(project => <ProjectBox projectInfo={project}></ProjectBox>)}
    </div>
  );
}

function ProjectBox({projectInfo}: {projectInfo: Project}) {
  return (
    <div>
      <img src="" alt="" />
      <div className="project-description">
        <div className="project-title-and-links">
          <p className="project-title"></p>
          <button>
            <NewTabLink />
          </button>
          <button>
            <GitHubIcon />
          </button>
        </div>
        <div className="chips">
          {projectInfo.itemNames.map((item) => {
            return <TechBox name={item} size="sm" />;
          })}
        </div>
        <p className="project-description">{projectInfo.description}</p>
      </div>
    </div>
  );
}