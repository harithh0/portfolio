import Link from 'next/link'
import { kebabCase } from '~/utils/string'

interface TagProps {
  text: string
  url?: string // Make url optional
  is_lab?: boolean
}

export function Tag({ text, url, is_lab }: TagProps) {
  const finalUrl = url ? url : text // Use text if url is not provided
  return (
    is_lab ? (
      <Link
        href={`#`}
        className="mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 md:text-base"
      >
        <span data-umami-event="tag">#{text.split(' ').join('-')}</span>
      </Link>
    ) : (
      <Link
        href={`/tags/${kebabCase(finalUrl)}`}
        className="mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 md:text-base"
      >
        <span data-umami-event="tag">#{text.split(' ').join('-')}</span>
      </Link>
    )
  )
}  
