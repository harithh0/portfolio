import type { Project } from '~/types/data'

export let projectsData: Project[] = [
  {
    type: 'software',
    title: 'OnionChat',
    description: 'A secure & anonymous, end-to-end chat application',
    imgSrc: '/static/images/Onion-chat-base.png',
    url: '/blog/onionchat-writeup/',
    repo: "harithh0/OnionChat",
    featured: true,
    builtWith: ["Python-Django REST API", "Electron JS"]
  },
  {
    type: 'software',
    title: 'UniBites',
    description: 'A mobile platform to help reduce food waste on school campuses',
    imgSrc: '/static/images/unibites.webp',
    url: 'https://unibites.app',
    featured: true,
    builtWith: ["Python-Django REST API", "MySQL", "React Native", "Expo"]
  },

  {
    type: 'cyber',
    title: 'Active Directory Homelab',
    description: 'Creating a Active Directory enviornment and users to learn about AD and its uses',
    imgSrc: '/static/images/ad-homelab-base.png',
    url: '/blog/ad-homelab/',
    featured: true
  },
  {
    type: 'software',
    title: 'Caesar Decrypt',
    description: 'Caesar Cipher decryption tool in C++ with accuracy detection algorithm',
    imgSrc: '/static/images/caesar-decrypt_base.webp',
    repo: "harithh0/caesar-decrypt",
    featured: true,
    builtWith: ["C++"]
  },
  {
    type: 'software',
    title: 'SSH Honeypot',
    description: 'Simple python SSH honeypot for connection logging',
    imgSrc: '/static/images/ssh_honeypot_python_v1.webp',
    repo: "harithh0/ssh_honeypot",
    featured: true,
    builtWith: ["Python"]
  },
  {
    type: 'software',
    title: 'FileCrypt',
    description: 'Python-based AES-256 file & folder encryption tool.',
    imgSrc: '/static/images/FileCrypt_base.png',
    repo: "harithh0/FileCrypt",
    featured: true,
    builtWith: ["Python"]
  },
]

