import { Backpack, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'next-i18next'
import { Twemoji } from '~/components/Twemoji'
import { siteMetadata } from '~/data/siteMetadata'
import XIcon from '~/icons/x.svg'

export function ProfileCardInfo() {
  let { t } = useTranslation('common')

  return (
    <div className="hidden py-4 xl:block xl:px-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{t('name_position')}</h3>
      <h5 className="py-2 text-gray-700 dark:text-gray-400">{t('description_position')}</h5>
      <div className="mb-2 mt-4 space-y-4">

        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <Mail strokeWidth={1} size={20} />
          <a className="px-2" href={`mailto:${siteMetadata.email}`}>
            {siteMetadata.email}
          </a>
        </div>
        <div className="flex gap-2.5 items-center text-gray-700 dark:text-gray-200">
          <a
            target="_blank"
            href={siteMetadata.github}
            rel="noreferrer"
            className="hover:underline text-sm flex items-center"
            data-umami-event="profile-card-github"
          >
            <Github size={20} strokeWidth={1} />
            <span className="ml-px text-gray-500">/</span>
            <span className="ml-0.5">{siteMetadata.socialAccounts.github}</span>
          </a>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <a
            target="_blank"
            href={siteMetadata.linkedin}
            rel="noreferrer"
            className="hover:underline text-sm flex items-center"
            data-umami-event="profile-card-linkedin"
          >
            <Linkedin size={20} strokeWidth={1} />
            <span className="ml-px text-gray-500">/</span>
            <span className="ml-0.5">{siteMetadata.socialAccounts.linkedin}</span>
          </a>
          <span className="text-gray-400 dark:text-gray-500">|</span>

        </div>
      </div>
    </div>
  )
}
