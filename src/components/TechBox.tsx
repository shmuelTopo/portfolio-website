import './TechBox.css'

export interface TechItem {
  size: "lg" | "sm";
  name: TechItemName
}

export type TechItemName = (typeof techItems)[number]["name"];

function TechBox({ name, size }: TechItem) {
  return (
    <div className={`tech-box  ${size}`}>
      <img
        alt={name + "-icon"}
        src={techItems.find((ti) => ti.name === name)?.icon}
        className="tech-box-icon"
      />
      <h4 className="tech-box-title">{name}</h4>
    </div>
  );
}

export default TechBox;
export const techItems = [
  {
    name: "Typescript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "NodeJS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    name: "MySql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
  },
  {
    name: "Postgres",
    icon: "https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/postgresql/postgresql-plain.svg",
  },
  {
    name: "Mongo DB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/python/python-plain.svg",
  },
  {
    name: "VSCode",
    icon: "https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/vscode/vscode-plain.svg",
  },
  {
    name: "Linux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/linux/linux-plain.svg",
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/react/react-original.svg",
  },
  {
    name: "Svelte",
    icon: "https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/svelte/svelte-plain.svg",
  },
] as const;
