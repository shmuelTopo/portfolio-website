import './TechBox.css'

import type { ToolTechIcon } from '../images/TechAndToolsIcons'
import * as Icons from '../images/TechAndToolsIcons'

export interface TechItem {
  size: 'lg' | 'sm'
  name: string
  color : "original" | "current" 
  Icon: ToolTechIcon | undefined
}

function TechBox({ Icon, name, size, color}: TechItem) {
  if (!Icon) throw new Error('there is no icon')
  return (
    <div className={`tech-box  ${size}`}>
      <div className='icon'>
        <Icon color={color} />
      </div>
      <h4 className='tech-box-title'>{name}</h4>
    </div>
  )
}

export default TechBox
export type TechItemName = (typeof techItems)[number]['name']

export const techItems = [
  {
    name: 'Typescript',
    icon: Icons.TypescriptIcon
  },
  {
    name: 'Express',
    icon: Icons.ExpressIcon
  },
  {
    name: 'NodeJS',
    icon: Icons.NodeIcon
  },
  {
    name: 'HTML',
    icon: Icons.HTMLIcon
  },
  {
    name: 'CSS',
    icon: Icons.CssIcon
  },
  {
    name: 'JavaScript',
    icon: Icons.JavascriptIcon
  },
  {
    name: 'Git',
    icon: Icons.GitIcon
  },
  {
    name: 'MySql',
    icon: Icons.MySqlIcon
  },
  {
    name: 'Postgres',
    icon: Icons.PostgresIcon
  },
  {
    name: 'Mongo DB',
    icon: Icons.MongoDbIcon
  },
  {
    name: 'Python',
    icon: Icons.PythonIcon
  },
  {
    name: 'VSCode',
    icon: Icons.VSCodeIcon
  },
  {
    name: 'Linux',
    icon: Icons.LinuxIcon
  },
  {
    name: 'React',
    icon: Icons.ReactIcon
  },
  {
    name: 'Svelte',
    icon: Icons.SvelteIcon
  }
] as const
