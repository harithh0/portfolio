import type { siteMetadata } from '~/data/siteMetadata'

export interface Project {
  type: 'software' | 'cyber'
  title: string
  description?: string
  imgSrc: string
  url?: string
  repo?: string
  builtWith?: string[]
  featured?: boolean
}

export type SiteMetaData = typeof siteMetadata & {
  title: string
  author: string
  full_name: string
  header_title: string
  footer_title: string
  description: string
  language: string
}
