export type Work = {
    period: string
    title: string
    company: string
    type?: string
    tags?: string[]
    description?: string
}

export type Education = {
    degree: string
    school: string
    location?: string
}

export type SkillGroup = {
    label: string
    items: string[]
}

export const experiences: Work[] = [
    {
        period: 'May 2026 - Present',
        title: 'Intern Software Engineer',
        company: 'Inovat Energy Storage Solutions',
        tags: ['Python', 'Machine Learning'],
        description: 'Developed an AI model for weather prediction and energy production.',
    },
    {
        period: 'May 2025 - Sep 2025',
        title: 'Intern Game Developer',
        company: 'Dinomore Games',
        tags: ['Unity', 'C#', 'Published'],
        description: 'Built "Voltline" for Nintendo & Playstation.',
    },
    {
        period: 'Sep 2024 - Dec 2024',
        title: 'Intern Game Developer',
        company: 'Moralabs',
        tags: ['Unity', 'C#', 'TypeScript'],
        description: 'Worked on "Twins & Dreams" and a playable ad for "Miss Katy: Royal Detective".',
    },
]

export const education: Education[] = [
    {
        degree: 'Computer Science',
        school: 'TOBB University of Economics and Technology',
        location: 'Ankara, Türkiye',
    },
]
