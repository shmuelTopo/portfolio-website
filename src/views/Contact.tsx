/* eslint-disable @next/next/no-img-element */
import './Contact.css'
import Image from 'next/image'
import { MailIcon, GitHubIcon, LinkedinIcon, PhoneIcon } from '../images/Icons'
function SocialMediaLinks() {
  return (
    <footer>
      <div className='personal-details'>
        <div>
          <h2>Contact Me</h2>
          <ul>
            <li>
              <strong>Phone:</strong> +1-848-210-2317
            </li>
            <li>
              <strong>Email:</strong> contact@shmuel.dev
            </li>
            <li>
              <strong>Address:</strong> Lakewood, NJ, United States
            </li>
          </ul>
        </div>
        <img
          src='https://media.licdn.com/dms/image/C4D03AQF986mMkFtMxQ/profile-displayphoto-shrink_800_800/0/1646231567041?e=1689811200&v=beta&t=TZusQXA6RCDYh3wTNPfOrSHmonsaHVdISsia_6j9fDk'
          alt='shmuel'
          width={100}
          height={100}
        />
      </div>

      <ul className='social-list'>
        <li>
          <a href='https://github.com/shmuelTopo' target='_blank' rel='noreferrer' title='GitHub'>
            <GitHubIcon className='social-list-icon' />
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/in/shmuel-topo' target='_blank' rel='noreferrer' title='Linkedin'>
            <LinkedinIcon className='social-list-icon' />
          </a>
        </li>

        <li>
          <a href='mailto:contact@shmuel.dev' target='_blank' rel='noreferrer' title='Email'>
            <MailIcon className='social-list-icon' />
          </a>
        </li>

        <li>
          <a href='tel:+1-848-210-2317' target='_blank' rel='noreferrer' title='Phone'>
            <PhoneIcon className='social-list-icon' />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default SocialMediaLinks
