import { useTranslation } from 'next-i18next'
import { BuiltWith } from './BuiltWith'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { socialLinks } from '~/components/SocialList'
import { headerNavLinks } from '~/data/headerNavLinks'

export function Footer() {
  let { t } = useTranslation('common')

  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        <ul className="flex items-start gap-2">
          <div className="mt-1 mr-1 text-gray-300">
            <p>Find me on</p>
          </div>
          {socialLinks.map(({ friendlyName, link, icon }) => (
            <li key={friendlyName} className="flex">
              <a
                className="inline-block p-1 sm:hover:text-link text-gray-300"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {icon}
                <span className="sr-only">{friendlyName}</span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-start gap-2">
          <div className="mt-1 mr-1"></div>
          {headerNavLinks.map(({ href, name }, index) => (
            <li key={href} className="flex items-center">
              <a className="inline-block p-1 sm:hover:text-link text-gray-300" href={href}>
                {name}
              </a>
              {index < headerNavLinks.length - 1 && <span className="mx-2">|</span>}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
