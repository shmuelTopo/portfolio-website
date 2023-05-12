import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import './SwapThemes.css'
import { SunIcon, MoonIcon } from '../images/Icons'
import { initializeAntController } from '../Ants/antsController'
type Theme = 'dark' | 'light'
let theUpdateFunction: ReturnType<typeof initializeAntController>

export default function SwapThemes() {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  const handleClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    theUpdateFunction(newTheme)
  }

  useEffect(() => {
    setTimeout(() => {
      const updateFunction = initializeAntController((newTheme) => setTheme(newTheme))
      console.log('update function', updateFunction)
      if (updateFunction) theUpdateFunction = updateFunction
    }, 200)
  }, [setTheme])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <button className='swap-button' onClick={handleClick}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  )
}
