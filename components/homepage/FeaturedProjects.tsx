import { useTranslation } from 'next-i18next'
import { Link } from '~/components/Link'
import { BlogTags } from '~/components/blog/BlogTags'
import type { Project } from '~/types/data'
import { projectsData } from '~/data/en/projectsData'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
export function FeaturedProjects() {
  let { t, i18n } = useTranslation()
  let lang = i18n.language
  const MAX = 6

  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y divide-gray-200 dark:divide-gray-700">
        {!projectsData.filter((post) => post.featured === true).length && 'No projects found.'}
        {projectsData.filter((post) => post.featured === true).slice(0, MAX).map((project) => {
          let { type, title, description, imgSrc, url, repo, builtWith } = project
          return (

            <li key={title} className="py-12">
              <article className="flex flex-col space-y-6">
                {/* Title */}
                <h2 className="mb-1 text-2xl md:text-3xl font-bold tracking-tight text-center">
                  {url ? (
                    <Link href={url} className="text-gray-900 dark:text-gray-100">
                      <span data-umami-event="featured-title">{title}</span>
                    </Link>
                  ) : (
                    title
                  )}
                </h2>

                {/* Image */}
                <div className="text-center">
                  <img src={imgSrc} alt={title} className="inline-block w-1/2 h-full object-cover" />
                </div>
                {/* Description */}
                {description && (
                  <div className=" max-w-none text-gray-500 dark:text-gray-400">
                    {description}
                  </div>
                )}

                {/* Built with */}
                <div className="flex flex-wrap items-center space-x-2">
                  {builtWith && builtWith.length > 0 && (
                    <div className="flex flex-wrap space-x-1.5">
                      <span className="shrink-1">{t('projects.built_with')}:</span>
                      {builtWith.map((tool, index) => (
                        <span key={index} className="font-semibold text-gray-600 dark:text-gray-300">
                          {tool}
                          {index !== builtWith.length - 1 && ','}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Links */}
                {(repo || url) && (
                  <div className="flex space-x-4">
                    {repo && (
                      <div className="text-base font-medium leading-6">
                        <a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="text-4xl" />
                        </a>
                      </div>
                    )}
                    {url && (
                      <div className="text-base font-medium leading-6 flex items-center">
                        <a href={url} className="flex items-center">
                          <span className="mr-2">View</span>
                          <FaExternalLinkAlt className="text-4xl" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </article>
            </li>
          )
        })}
      </ul>
      {projectsData.filter((post) => post.featured === true).length > 0 && (
        <div className="flex justify-end text-base font-medium leading-6 mt-6">
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all projects"
          >
            <span data-umami-event="all-projects">View All Projects &rarr;</span>
          </Link>
        </div>
      )}
    </div>
  )
}
