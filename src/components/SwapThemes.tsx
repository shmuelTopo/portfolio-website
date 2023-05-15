import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import './SwapThemes.css'
import { SunIcon, MoonIcon } from '../images/Icons'
type Theme = 'dark' | 'light'

export default function SwapThemes() {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  const handleClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

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
