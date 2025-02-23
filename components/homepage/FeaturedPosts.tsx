import { useTranslation } from 'next-i18next'
import { Link } from '~/components/Link'
import { BlogTags } from '~/components/blog/BlogTags'
import { FEATURED_POSTS } from '~/constant'
import type { BlogFrontMatter } from '~/types/mdx'
import { formatDate } from '~/utils/date'

export function FeaturedPosts({ posts }: { posts: BlogFrontMatter[] }) {
  let { t, i18n } = useTranslation()
  let lang = i18n.language
  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.filter((post) => post.writing_type !== 'lab').slice(0, FEATURED_POSTS).map((frontMatter) => {
          let { slug, date, title, summary, tags, images, writing_type } = frontMatter
          return (
            <li key={slug} className="py-12 flex space-x-4 items-start">
              {/* Image */}
              <img
                src={Array.isArray(images) ? images[0] : images}
                alt={title}
                className="w-1/4 h-auto object-cover"
              />

              <article className="flex-1 space-y-2">
                <div className="space-y-3">
                  <h2 className="mb-1 text-2xl md:text-3xl font-bold tracking-tight">
                    <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                      <span data-umami-event="featured-title">{title}</span>
                    </Link>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, lang)}</time>
                    </dd>
                  </h2>
                  {/* automatically false cause we are only showing the ones that dont have writing_type as lab */}
                  <BlogTags tags={tags} is_lab={writing_type === "lab"} /> 
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                  <div className="text-base font-medium leading-6">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Read "${title}"`}
                    >
                      <span data-umami-event="featured-read-more">Read more &rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      {posts.length > FEATURED_POSTS && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            <span data-umami-event="all-posts"> {t('blog.all_posts_title')} &rarr;</span>
          </Link>
        </div>
      )}
    </div>
  )
}
