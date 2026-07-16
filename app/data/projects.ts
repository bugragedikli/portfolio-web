export type Project = {
    id: string
    title: string
    role?: string
    description?: string
    imageUrl?: string
    projectUrl?: string
    // shown in the meta bar over the image — fill team/duration where you know them
    team?: string       // e.g. "1", "Team of 4"
    duration?: string   // e.g. "6 Weeks", "4 Months"
    tech?: string       // e.g. "Unity (C#)"
}

export const projects: Project[] = [
    {
        id: 'voltline',
        title: 'Voltline',
        role: 'Lead Developer',
        description: 'A relaxing puzzle game shipped on Nintendo Switch and Playstation. I led development, designed levels, and built the core gameplay mechanics.',
        imageUrl: '/voltline_logo.avif',
        projectUrl: 'https://www.nintendo.com/us/store/products/voltline-switch/',
        tech: 'Unity (C#)',
    },
    {
        id: 'graduation',
        title: 'Intelligent Traffic Simulator',
        role: 'Graduation Project',
        description: 'A traffic simulation system using reinforcement learning to optimize flow and reduce congestion.',
        imageUrl: '/grad_project.png',
        tech: 'Python · React',
    },
    {
        id: 'twinsdreams',
        title: 'Twins & Dreams',
        role: 'Game Developer',
        description: 'Puzzle game for mobile and PC. I polished gameplay mechanics, created new levels, and prepared the Steam release.',
        projectUrl: 'https://store.steampowered.com/app/3403150/Twins__Dreams/',
        tech: 'Unity (C#)',
    },
    {
        id: 'misskatyad',
        title: 'Miss Katy: Royal Detective',
        role: 'Playable Ad',
        description: 'A playable advertisement for the mobile game "Miss Katy: Royal Detective".',
        tech: 'Cocos Creator (TS)',
    },
    {
        id: 'grid3',
        title: 'Grid 3',
        role: 'Case Study',
        projectUrl: 'https://grabus.itch.io/grid3',
        tech: 'Unity (C#)',
    },
]
