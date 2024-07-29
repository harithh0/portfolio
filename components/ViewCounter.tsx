import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import type { ViewCounterProps } from '~/types/components'
import type { ViewApiResponse } from '~/types/server'
import { fetcher } from '~/utils/fetcher'
let { default: useSWR } = require('swr')

export function ViewCounter({ slug, className }: ViewCounterProps) {
  return <span className={className}></span>
}
