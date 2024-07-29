import { PostsSearch } from '~/components/PostsSearch'
import type { ListLayoutProps } from '~/types/layout'
import { useTranslation } from 'next-i18next'
import { Tag } from '~/components/Tag'
import { Pagination } from '~/components/Pagination'
import { useState } from 'react'
import { PostListItem } from '~/components/PostListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';




function ListLayout(props: ListLayoutProps) {
  let { posts, title, initialDisplayPosts = [], pagination } = props
  let { t } = useTranslation('common')
  let [searchValue, setSearchValue] = useState('')
  let [selectedTag, setSelectedTag] = useState('')

  let filteredBlogPosts = posts.filter((frontMatter) => {
    let searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  let displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  // Step 1: Extract all tags and create a frequency map
  const tagFrequency = displayPosts
    .flatMap((post) => post.tags)
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1
      return acc
    }, {})


    

  // Step 2: Create a unique list of tags
  const uniqueTags = Object.keys(tagFrequency).sort((a, b) => tagFrequency[b] - tagFrequency[a]);

  // Step 3: Filter posts by selected tag
  if (selectedTag) {
    displayPosts = displayPosts.filter((post) => post.tags.includes(selectedTag))
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <header className="space-y-4 pb-12 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <p className="text-base md:text-lg md:leading-7 text-gray-500 dark:text-gray-400">
            {t('blog.intro')}
          </p>
          <PostsSearch onChange={setSearchValue} />
        </header>

        <ul className="mt-10">
        <div className="mt-5 mr-10 mb-5">
        <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FontAwesomeIcon icon={faTag} size="2x" />
          Tags
        </p>
        </div>
          <div className="flex flex-wrap gap-2.5 text-bgColor justify-end mb-5">
            {uniqueTags.map((tag) => (
              <li key={tag}>
                <a
                  aria-label={`View all posts with the tag: ${tag}`}
                  className="flex items-center justify-center rounded-lg p-1 hover:underline"
                  style={{
                    color: 'white',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    backgroundColor: '#4a5568',
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedTag(tag)}
                >
                  #{tag}
                  <span className="ml-2">({tagFrequency[tag]})</span> {/* Show frequency */}
                </a>
              </li>
            ))}
          </div>

          <div className="text-end mb-5">
            <a href="/tags">
              <p>View all &#x2192;</p>
            </a>
          </div>
        </ul>

        <ul className="space-y-14 py-10">
          {!filteredBlogPosts.length && t('blog.no_posts')}
          {displayPosts.map((frontMatter) => (
            <PostListItem key={frontMatter.slug} frontMatter={frontMatter} />
          ))}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

export default ListLayout
