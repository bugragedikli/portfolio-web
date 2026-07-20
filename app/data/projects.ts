export type ProjectLink = {
    label: string
    url: string
}

export type Project = {
    id: string
    title: string
    role?: string
    description?: string
    // for projects you contributed to rather than created — rendered as a "Contributed:" bullet list
    contributions?: string[]
    imageUrl?: string
    // shown in the meta bar over the image — fill team/duration where you know them
    team?: string       // e.g. "1", "Team of 4"
    duration?: string   // e.g. "6 Weeks", "4 Months"
    tech?: string       // e.g. "Unity (C#)"
    // custom buttons under the card — add as many as you like
    links?: ProjectLink[]
}

export const projects: Project[] = [
    {
        id: 'voltline',
        title: 'Voltline',
        role: 'Lead Game Developer',
        description: 'A relaxing puzzle game published on the Nintendo eShop and PlayStation Store, built with Unity and C# during my internship at Dinomore Games. I led the technical development and architected all systems within a demanding 3-month production window.',
        imageUrl: '/voltline_logo.avif',
        tech: 'Unity (C#)',
        team: "2",
        duration: "3 Months",
        links: [
            { label: 'Nintendo', url: 'https://www.nintendo.com/us/store/products/voltline-switch/' },
            { label: 'PlayStation', url: 'https://store.playstation.com/tr-tr/product/EB2251-CUSA58133_00-0504252544586584' },
        ],
    },
    {
        id: 'graduation',
        title: 'Intelligent Traffic Simulator',
        role: 'Graduation Project',
        description: 'An AI-powered traffic intersection simulator combining PPO reinforcement learning, SUMO traffic simulation, and real-time web visualization. The full-stack system achieved a 15% throughput improvement with under 50ms inference latency.',
        imageUrl: '/grad_project.png',
        tech: 'Python · React',
        links: [
            { label: 'GitHub', url: 'https://github.com/zehrapaksoy/synapse_bitirme' },
        ]
    },
    {
        id: 'twinsdreams',
        title: 'Twins & Dreams',
        role: 'Game Developer',
        description: 'A puzzle game shipped to release on Steam, iOS, and Android. I took over an in-progress codebase and brought it across the finish line.',
        contributions: [
            'Implemented a new PC input system and additional level mechanics.',
            'Built a cross-platform achievements system with Steam and mobile platform SDK integration.',
            'Redesigned 50 levels for smoother difficulty progression.',
            'Resolved release-blocking issues including unsolvable levels and character movement',
        ],
        tech: 'Unity (C#)',
        imageUrl: '/twinsdreams_logo.jpg',
        links: [
            { label: 'Steam', url: 'https://store.steampowered.com/app/3403150/Twins__Dreams/' },
            { label: 'IOS', url: 'https://apps.apple.com/tr/app/twins-dreams/id6746153671?l=tr'},
            { label: 'Android', url: 'https://play.google.com/store/apps/details?id=com.gamehouse.twins.dreams.puzzle.escape.brain.games&hl=tr' },

        ],
    },
    {
        id: 'misskatyad',
        title: 'Miss Katy: Royal Detective',
        role: 'Playable Ad Developer',
        description: 'An interactive playable ad for the mobile game "Miss Katy: Royal Detective", designed and developed with Cocos Creator and TypeScript to support user acquisition.',
        imageUrl: '/misskatyad.png',
        tech: 'Cocos Creator (TS)',
    },
    {
        id: 'grid3',
        title: 'Grid 3',
        role: 'Case Study',
        description: 'A 2D game built with Unity and C# as a case study for Dinomore Games. The game is for understanding the multiple games in one game mechanic, and the graphics are not the main focus.',
        tech: 'Unity (C#)',
        imageUrl: '/grid3.png',
        links: [
            { label: 'itch.io', url: 'https://grabus.itch.io/grid3' },
            { label: 'GitHub', url: 'https://github.com/bugragedikli/grid-game'}
        ],
    },
]
