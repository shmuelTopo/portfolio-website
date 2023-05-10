import "./Projects.css";
import TechBox, { TechItemName } from "../components/TechBox";
import { GitHubIcon, NewTabLink } from "../images/icons";

interface Project {
  itemNames: TechItemName[];
  imgSrc: string;
  title: string;
  githubLink?: string;
  liveWebsiteLink?: string;
  description: string;
}

const projects: Project[] = [
  {
    itemNames: ["React", "Postgres"],
    imgSrc: "https://source.unsplash.com/npxXWgQ33ZQ",
    title: "Recipe website",
    githubLink: "github.com",
    liveWebsiteLink: "projects.shmuel.dev/recipes",
    description:
      "Recipe website, where users can search recipes, and add their own, save them to their watch list and so on",
  },
];

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectBox projectInfo={project}></ProjectBox>
      ))}
    </div>
  );
}

function ProjectBox({ projectInfo }: { projectInfo: Project }) {
  return (
    <div className="project-box">
      <img src={projectInfo.imgSrc} alt={`${projectInfo.title} showcase`} />
      <div className="project-description">
        <div className="project-title-and-links">
          <h4 className="project-title">{projectInfo.title}</h4>
          {projectInfo.liveWebsiteLink && (
            <a href={projectInfo.liveWebsiteLink}>
              <NewTabLink />
            </a>
          )}
          {projectInfo.githubLink && (
            <a href={projectInfo.githubLink}>
              <GitHubIcon />
            </a>
          )}
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
