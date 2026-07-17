import { MdGroups, MdSchedule, MdBuild } from "react-icons/md";
import type { ProjectLink } from "@/app/data/projects";

type ProjectCardProps = {
    title: string
    role?: string
    description?: string
    contributions?: string[]
    imageUrl?: string
    team?: string
    duration?: string
    tech?: string
    links?: ProjectLink[]
}

export default function ProjectCard({ title, role, description, contributions, imageUrl, team, duration, tech, links }: ProjectCardProps) {
    const hasMeta = team || duration || tech;

    return (
        <div className="group flex flex-col h-full">
            {/* Image + meta bar */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-linear-to-br from-foreground/10 to-transparent">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        draggable={false}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="font-jetbrains text-xl text-foreground/40">{title}</span>
                    </div>
                )}

                {hasMeta && (
                    <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-2 bg-black/55 backdrop-blur-sm font-jetbrains text-xs text-gray-200">
                        {team && (
                            <span className="inline-flex items-center gap-1.5">
                                <MdGroups className="w-4 h-4" /> {team}
                            </span>
                        )}
                        {duration && (
                            <span className="inline-flex items-center gap-1.5">
                                <MdSchedule className="w-4 h-4" /> {duration}
                            </span>
                        )}
                        {tech && (
                            <span className="inline-flex items-center gap-1.5">
                                <MdBuild className="w-4 h-4" /> {tech}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="pt-4">
                <h3 className="text-lg md:text-xl font-bold font-jakarta text-highlight">{title}</h3>
                {role && <p className="text-sm text-gray-400 font-jakarta mb-3">{role}</p>}
                {description && (
                    <p className="text-sm text-gray-400 font-jakarta leading-relaxed">{description}</p>
                )}

                {contributions && contributions.length > 0 && (
                    <div className="mt-3">
                        <p className="text-sm font-semibold text-foreground/80 font-jakarta mb-1.5">Contributed:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400 font-jakarta leading-relaxed">
                            {contributions.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {links && links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-foreground/15 font-jetbrains text-xs uppercase tracking-wider hover:border-highlight hover:text-highlight transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
