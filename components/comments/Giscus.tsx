import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { GISCUS_COMMENTS_ID } from '~/constant'
import type { GiscusProps } from '~/types/components'

function Giscus({ config }: GiscusProps) {
  let { theme, resolvedTheme } = useTheme()
  let { themeURL, darkTheme, lightTheme } = config

  useEffect(() => {
    let isDark = theme === 'dark' || resolvedTheme === 'dark'
    let giscusTheme = isDark ? darkTheme : lightTheme
    if (themeURL) giscusTheme = themeURL

    let script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'harithh0/portfolio'); // Replace with your repo
    script.setAttribute('data-repo-id', 'R_kgDOMcUxPg'); // Replace with your repo ID
    script.setAttribute('data-category', 'General'); // Replace with your category
    script.setAttribute('data-category-id', 'DIC_kwDOMcUxPs4ChPop'); // Replace with your category ID
    script.setAttribute('data-mapping', 'og:title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true



    let commentsNode = document.getElementById(GISCUS_COMMENTS_ID)
    if (commentsNode) commentsNode.appendChild(script)

    return () => {
      let comments = document.getElementById(GISCUS_COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, resolvedTheme])

  return (
    <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300">
      <div className="giscus" id={GISCUS_COMMENTS_ID} />
    </div>
  )
}

export default Giscus
