import type { Project } from '~/types/data'

export let projectsData: Project[] = [
  {
    type: 'cyber',
    title: 'Weaverse - Personalizador de Tema Shopify Hydrogen & CMS sin cabeza',
    description: `El primer constructor de sitios web promovido por Hydrogen y potenciado por IA. Weaverse es un canal de ventas de Shopify que te permite crear un sitio web en minutos sin necesidad de programación.`,
    imgSrc: '/static/images/weaverse-hydrogen.jpg',
    url: 'https://www.weaverse.io?ref=leohuynh.dev',
    builtWith: ['Remix', 'Prisma', 'Tailwind', 'OpenAI'],
  }
]
