import './Home.css'
import { DownloadIcon } from '../images/Icons'

const Home = () => {

  return (
    <div className='home'>
      <h1>
        <span className='name'>Hi, I am Shmuel </span>
        <span className='description'>Full Stack Developer</span>
      </h1>
      <p className='home-description'>
        I am a dedicated and motivated developer, with a strong passion for web development and an eagerness to learn and work with new
        technologies.
      </p>{' '}
      <a className='downloadBtn' href='https://shmuel.dev/files/resume.pdf' download={'resume shmuel toporowitch.pdf'} rel='noreferrer'>
        <DownloadIcon className='icon' /> Resume
      </a>
    </div>
  )
}

export default Home
