import './IconChip.css'

import type { ToolTechIcon } from '../images/ToolsIcons'
import * as Icons from '../images/ToolsIcons'

export interface TechItem {
  size: 'lg' | 'sm'
  name: string
  color: 'original' | 'current'
  Icon: ToolTechIcon | undefined,
  width?: number,
  className?: string
}

function IconChip({ Icon, name, size, color, width, className }: TechItem) {
  if (!Icon) throw new Error('there is no icon')
  return (
    <div className={`tech-box  ${size}`}>
      <div className='chip-icon'>
        <Icon className={className} width={ width || (size === 'lg' ? 50 : 30)} color={color} />
      </div>
      <h4 className='tech-box-title'>{name}</h4>
    </div>
  )
}

export default IconChip
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
