import type { SpotifyNowPlayingData } from '~/types/server'
import { fetcher } from '~/utils/fetcher'
let { default: useSWR } = require('swr')

export function SpotifyNowPlaying() {
  let response = useSWR('/api/spotify', fetcher)
  let { songUrl, title, artist } = (response.data as SpotifyNowPlayingData) || {}

  return <div></div>
}
