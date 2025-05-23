
import { useState } from 'react'
import { PageSeo } from 'components/SEO'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ProjectCard } from '~/components/ProjectCard'
import type { Project } from '~/types/data'

export async function getStaticProps({ locale }) {
  let projectsDataModule = await import(`~/data/${locale}/projectsData.ts`)
  let projectsData = projectsDataModule.projectsData

  return {
    props: {
      projectsData,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default function Projects({ projectsData }: { projectsData: Project[] }) {
  const [selectedCategory, setSelectedCategory] = useState('software')
  const SoftwareProjects = projectsData.filter(({ type }) => type === 'software')
  const CybersecurityProjects = projectsData.filter(({ type }) => type === 'cyber')
  const { t } = useTranslation('common')

  const description = t('projects.projects_description')

  return (
    <>
      <PageSeo
        title={`${t('projects.projects_title')} - ${t('site_meta_data.author')} - ${t(
          'site_meta_data.title'
        )}`}
        description={description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('projects.projects_title')}
          </h1>
          <p className="text-base md:text-lg md:leading-7 text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="container py-12">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
            <div className="flex space-x-8">
              <button
                className={`pb-2 text-lg font-semibold ${selectedCategory === 'software'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                onClick={() => setSelectedCategory('software')}
              >
                {t('projects.work_title')}
              </button>
              <button
                className={`pb-2 text-lg font-semibold ${selectedCategory === 'cyber'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                onClick={() => setSelectedCategory('cyber')}
              >
                {t('projects.side_title')}
              </button>
            </div>
          </div>

          {/* Category Title */}
          {selectedCategory === 'software' && (
            <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              {t('projects.work_title')}
            </h3>
          )}
          {selectedCategory === 'cyber' && (
            <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              {t('projects.side_title')}
            </h3>
          )}

          {/* Project Cards */}
          <div className="-m-4 flex flex-wrap">
            {(selectedCategory === 'software' ? SoftwareProjects : CybersecurityProjects).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
