import type { Project } from '~/types/data'

export let projectsData: Project[] = [
  {
    type: 'software',
    title: 'Weaverse - Shopify Hydrogen Theme Customizer & Headless CMS',
    description: `The first Hydrogen-driven website builder powered by AI. Weaverse is a Shopify sales channel that allows you to create a website in minutes with no coding required.`,
    imgSrc: '/static/images/weaverse-hydrogen.jpg',
    url: 'https://www.weaverse.io?',
    builtWith: ['Remix', 'Prisma', 'Tailwind', 'OpenAI'],
  },
  {
    type: 'cyber',
    title: 'Weaverse SDKs',
    description:
      'Open-source toolkits for seamless integration and development of Shopify Hydrogen themes and headless commerce solutions.',
    imgSrc: '/static/images/weaverse_x_h2_x_shopify.jpg',
    repo: 'weaverse/weaverse',
    builtWith: ['Turborepo', 'Hydrogen', 'React', 'Typescript'],
  },

]
