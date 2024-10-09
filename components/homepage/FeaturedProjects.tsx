import { useTranslation } from 'next-i18next'
import { Link } from '~/components/Link'
import { BlogTags } from '~/components/blog/BlogTags'
import type { Project } from '~/types/data'
import { projectsData } from '~/data/en/projectsData'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
export function FeaturedProjects() {
  let { t, i18n } = useTranslation()
  let lang = i18n.language
  const MAX = 5

  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* {!projectsData.length && 'No projects found.'} */}

        {projectsData.slice(0, MAX).map((project) => {
          let { type, title, description, imgSrc, url, repo, builtWith } = project
          return (
            <li key={title} className="py-12">
              <article className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-6">
                <img src={imgSrc} alt={title} className="w-full xl:w-1/4 h-auto object-cover" />
                <div className="space-y-5 xl:w-3/4">
                  <h2 className="mb-1 text-2xl md:text-3xl font-bold tracking-tight">
                    {url ? (
                      <Link href={url} className="text-gray-900 dark:text-gray-100">
                        <span data-umami-event="featured-title">{title}</span>
                      </Link>
                    ) : (
                      title
                    )}
                  </h2>
                  <div className="flex flex-wrap items-center space-x-2">
                    {builtWith.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-200 rounded dark:text-gray-300 dark:bg-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {description && (
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {description}
                    </div>
                  )}
                  {(repo || url) && (
                    <div className="flex space-x-4">
                      {repo && (
                        <div className="text-base font-medium leading-6">
                          <a href={`https://github.com/${repo}`}>
                            <FaGithub className="text-4xl" />
                          </a>
                        </div>
                      )}
                      {url && (
                        <div className="text-base font-medium leading-6">
                          <a href={url}>
                            <FaExternalLinkAlt className="text-4xl" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      {projectsData.length > 0 && (
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
