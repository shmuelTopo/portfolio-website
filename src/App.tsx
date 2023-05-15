import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import { useEffect, useRef, useState } from 'react'
import View from './views/View'
import SocialMediaLinks from './views/Contact'
import Projects from './views/Projects'

const links = [
  { title: 'Home', href: 'home' },
  { title: 'About', href: 'about' },
  { title: 'Projects', href: 'projects' },
  { title: 'Contact', href: 'contact' }
]

function App() {
  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)

  const refs = [
    { name: 'home', ref: homeRef },
    { name: 'about', ref: aboutRef },
    { name: 'contact', ref: contactRef },
    { name: 'projects', ref: projectsRef }
  ]
  const [currentView, setCurrentView] = useState(refs[0].name)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let currentViewName = refs[0].name
      refs.forEach((ref) => {
        if (ref.ref.current && ref.ref.current.getBoundingClientRect().y < 85) {
          currentViewName = ref.name
        }
      })
      setCurrentView(currentViewName)
    })
  })

  return (
    <main className='App'>
      <Navbar currentView={currentView} setCurrentView={setCurrentView} links={links} />
      <View id='home' ref={homeRef}>
        <Home />
      </View>

      <View id='about' ref={aboutRef}>
        <About />
      </View>

      <View id='projects' ref={projectsRef}>
        <Projects />
      </View>

      <View id='contact' ref={contactRef}>
        <SocialMediaLinks />
      </View>

    </main>
  )
}

export default App
