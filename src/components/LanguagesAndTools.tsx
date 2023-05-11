import './LanguagesAndTools.css'
import TechBox, { techItems } from './TechBox'

function LanguagesAndTools() {
  return (
    <>
      <h2>Technologies and Tools</h2>

      <ul className='languagesAndTools'>
        {techItems.map((item) => (
          <TechBox color={"original"} key={item.name} name={item.name} Icon={item.icon} size='lg' />
        ))}
      </ul>
    </>
  )
}

export default LanguagesAndTools
