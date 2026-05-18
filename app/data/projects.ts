export type Project = {
    id: string
    title: string
    description?: string
    meta?: string
    imageUrl?: string
    projectUrl: string
    tags?: string[]
    featured?: boolean
    type: 'featured' | 'main' | 'other'
}

export const projects: Project[] = [
    {
        id: 'voltline',
        title: 'Voltline',
        description: 'A relaxing puzzle game, built with Unity and C#. I led the development of the game, designed levels, and implemented core gameplay mechanics. Voltline is available on Nintendo Switch and Playstation.',
        imageUrl: '/voltline_logo.avif',
        projectUrl: 'https://www.nintendo.com/us/store/products/voltline-switch/',
        tags: ['Unity', 'C#', 'Game Development'],
        type: 'featured'
    },
    {
        id: 'graduation',
        title: 'Intelligent Traffic Simulator',
        description: 'A traffic simulation system using reinforcement learning to optimize flow and reduce congestion.',
        imageUrl: '/grad_project.png',
        projectUrl: '',
        tags: ['React', 'Python', 'FastAPI', 'Reinforcement Learning', 'Simulation'],
        type: 'featured'
    },
    {
        id: 'twinsdreams',
        title: 'Twins & Dreams',
        description: 'Puzzle game for mobile and PC, I polished gameplay mechanics and created new levels. Also, updated the game for Steam release.',
        projectUrl: 'https://store.steampowered.com/app/3403150/Twins__Dreams/',
        tags: ['Unity', 'C#', 'Game Development'],
        type: 'main'
    },
    {
        id: 'misskatyad',
        title: 'Miss Katy: Royal Detective - Playable Ad',
        description: 'A playable advertisement for the game "Miss Katy: Royal Detective".',
        projectUrl: '',
        tags: ['Typescript', 'Cocos Creator', 'Facebook Ads', 'Playable Ads'],
        type: 'main'
    },
    {
        id: 'grid3',
        title: 'Grid 3',
        meta: 'Unity, C#, 2025, Case Study',
        projectUrl: 'https://grabus.itch.io/grid3',
        type: 'other'
    },
]
