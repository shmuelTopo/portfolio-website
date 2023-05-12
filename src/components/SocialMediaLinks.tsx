import './SocialMediaLinks.css'
import { MailIcon, GitHubIcon, LinkedinIcon } from '../images/Icons'
function SocialMediaLinks() {
  return (
    <ul className='social-list'>
      <li>
        <a href='https://github.com/utsav-devadiga' target='_blank' rel='noreferrer' title='GitHub'>
          <GitHubIcon className='social-list-icon' />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/utsav-devadiga-a6b143179/' target='_blank' rel='noreferrer' title='Linkedin'>
          <LinkedinIcon className='social-list-icon' />
        </a>
      </li>

      <li>
        <a href='mailto:contact@shmuel.dev' target='_blank' rel='noreferrer' title='Email'>
          <MailIcon className='social-list-icon' />
        </a>
      </li>
    </ul>
  )
}

export default SocialMediaLinks
