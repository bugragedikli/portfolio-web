import ExperienceItem from './ExperienceItem';

export default function Resume() {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Inovat Energy Storage Solutions',
            period: 'May 2026 - Present',
            description: ''
        },
        {
            title: 'Game Developer',
            company: 'Dinomore Games',
            period: 'May 2025 - Sep 2025',
            description: 'Built "Voltline" for Nintendo & Playstation using Unity and C#.'
        },
        {
            title: 'Game Developer',
            company: 'Moralabs',
            period: 'Sep 2024 - Dec 2024',
            description: 'Worked on "Twins & Dreams", built a playable ad for "Miss Katy: Royal Detective".'
        }
    ];

    return (
        <section id="resume" className="w-full py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 font-jakarta">Resume</h2>
                
                <div className="space-y-8">
                    {/* Download Section */}
                    <div className="border border-gray-700 rounded p-6">
                        <h3 className="text-lg font-bold mb-3 font-jakarta">Download</h3>
                        <p className="text-gray-400 font-jakarta text-sm mb-4">Get my full resume in PDF format.</p>
                        <a href="/bugra_gedikli_resume.pdf" download className="inline-block px-4 py-2 bg-highlight text-background rounded font-jakarta hover:opacity-80 transition">
                            Download Resume
                        </a>
                    </div>

                    {/* Experience Section */}
                    <div className="border border-gray-700 rounded p-6">
                        <h3 className="text-lg font-bold mb-4 font-jakarta">Experience</h3>
                        <div className="space-y-4">
                            {experiences.map((exp) => (
                                <ExperienceItem
                                    key={exp.title}
                                    title={exp.title}
                                    company={exp.company}
                                    period={exp.period}
                                    description={exp.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="border border-gray-700 rounded p-6">
                        <h3 className="text-lg font-bold mb-4 font-jakarta">Skills</h3>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm font-jakarta font-semibold mb-2">Languages</p>
                                <div className="flex flex-wrap gap-2">
                                    {['C#', 'Java', 'JavaScript', 'Python'].map(skill => (
                                        <span key={skill} className="text-xs font-jetbrains px-2 py-1 border border-gray-700 rounded">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-jakarta font-semibold mb-2">Frameworks & Engines</p>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Unity', 'Tailwind CSS'].map(skill => (
                                        <span key={skill} className="text-xs font-jetbrains px-2 py-1 border border-gray-700 rounded">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-jakarta font-semibold mb-2">Technologies</p>
                                <div className="flex flex-wrap gap-2">
                                    {['HTML/CSS', 'SQL', 'Git/GitHub'].map(skill => (
                                        <span key={skill} className="text-xs font-jetbrains px-2 py-1 border border-gray-700 rounded">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-jakarta font-semibold mb-2">Core Competencies</p>
                                <div className="flex flex-wrap gap-2">
                                    {['OOP', 'Software Architecture', 'Performance Optimization', 'Project Ownership', 'Rapid Prototyping', 'UI/UX Principles'].map(skill => (
                                        <span key={skill} className="text-xs font-jetbrains px-2 py-1 border border-gray-700 rounded">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}