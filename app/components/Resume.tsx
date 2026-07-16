import { MdWorkOutline, MdSchool, MdLocationOn } from 'react-icons/md';
import { experiences, education } from '@/app/data/resume';

function TimelineDot() {
    return <span className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-highlight ring-4 ring-background" />;
}

export default function Resume() {
    return (
        <section id="resume" className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                {/* Left — heading */}
                <div>
                    <h2 className="text-4xl font-bold font-jakarta leading-tight mb-4">
                        Experience &amp; Education
                    </h2>
                    <p className="text-gray-400 font-jakarta leading-relaxed">
                        My professional journey so far — where I&apos;ve worked and what I&apos;ve studied.
                    </p>
                </div>

                {/* Middle — work */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <MdWorkOutline className="w-6 h-6 text-highlight" />
                        <h3 className="text-xl font-bold font-jakarta">Work Experience</h3>
                    </div>
                    <div className="relative border-l-2 border-gray-700 ml-2 space-y-5">
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative pl-6">
                                <TimelineDot />
                                <p className="font-jetbrains text-xs font-semibold text-highlight">{exp.period}</p>
                                <h4 className="text-base font-bold font-jakarta mt-0.5">{exp.title}</h4>
                                <p className="text-sm text-gray-400 font-jakarta">{exp.company}</p>
                                {exp.description && (
                                    <p className="text-xs text-gray-500 font-jakarta mt-1 leading-relaxed">{exp.description}</p>
                                )}
                                {exp.tags && exp.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="text-[11px] font-jetbrains px-2 py-0.5 rounded-full bg-foreground/10 text-gray-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — education */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <MdSchool className="w-6 h-6 text-highlight" />
                        <h3 className="text-xl font-bold font-jakarta">Education</h3>
                    </div>
                    <div className="relative border-l-2 border-gray-700 ml-2 space-y-5">
                        {education.map((ed, i) => (
                            <div key={i} className="relative pl-6">
                                <TimelineDot />
                                <h4 className="text-base font-bold font-jakarta">{ed.degree}</h4>
                                <p className="text-sm text-gray-400 font-jakarta mb-2">{ed.school}</p>
                                {ed.location && (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-jetbrains px-2 py-0.5 rounded-full bg-foreground/10 text-gray-400">
                                        <MdLocationOn className="w-3.5 h-3.5" /> {ed.location}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
