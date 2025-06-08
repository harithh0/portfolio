import { appWithTranslation } from 'next-i18next'

import 'css/tailwind.css'
import 'css/twemoji.css'
import 'css/resume.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { LayoutWrapper } from '~/components/LayoutWrapper'

function App({ Component, pageProps }) {
  return (
    // @ts-ignore
    <ThemeProvider attribute="class">
      <Head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="f677dc69-42e6-4f98-ad8d-cd90bbcd27f4"></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
