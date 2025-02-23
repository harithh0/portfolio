import type { Project } from '~/types/data'

export let projectsData: Project[] = [
    {
        type: 'cyber',
        title: 'Active Directory Homelab',
        description: 'Creating a Active Directory enviornment and users to learn about AD and its uses',
        imgSrc: '/static/images/ad-homelab-base.png',
        url: '/blog/ad-homelab/',
        featured : true
    },
      {
        type: 'software',
        title: 'OnionChat',
        description: 'A secure & anonymous, end-to-end chat application',
        imgSrc: '/static/images/Onion-chat-base.png',
        url: '/blog/onionchat-writeup/',
        repo: "harithh0/OnionChat",
        featured : true,
        builtWith: ["Python-Django REST API", "Electron JS"]
    },
]
