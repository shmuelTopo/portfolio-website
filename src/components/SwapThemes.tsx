import './SwapThemes.css'
import { MoonIcon } from '../images/Icons'
type Theme = 'dark' | 'light'

export default function SwapThemes() {
  return <button className='swap-button'>{<MoonIcon />}</button>
}