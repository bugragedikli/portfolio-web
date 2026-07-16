import type { ElementType } from "react";
import { MdGroups, MdSchedule, MdBuild } from "react-icons/md";

type ProjectCardProps = {
    title: string
    role?: string
    description?: string
    imageUrl?: string
    projectUrl?: string
    team?: string
    duration?: string
    tech?: string
}

export default function ProjectCard({ title, role, description, imageUrl, projectUrl, team, duration, tech }: ProjectCardProps) {
    const Wrapper: ElementType = projectUrl ? "a" : "div";
    const wrapperProps = projectUrl
        ? { href: projectUrl, target: "_blank", rel: "noopener noreferrer" }
        : {};

    const hasMeta = team || duration || tech;

    return (
        <Wrapper
            {...wrapperProps}
            className="group flex flex-col rounded-xl overflow-hidden bg-foreground/3 ring-1 ring-foreground/10 hover:ring-highlight/40 transition-all"
        >
            {/* Image + meta bar */}
            <div className="relative aspect-video overflow-hidden bg-linear-to-br from-foreground/10 to-transparent">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
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
            <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg md:text-xl font-bold font-jakarta text-highlight">{title}</h3>
                    {projectUrl && (
                        <span className="text-highlight text-xl leading-none transition-transform group-hover:translate-x-1">
                            ›
                        </span>
                    )}
                </div>
                {role && <p className="text-sm text-gray-400 font-jakarta mb-3">{role}</p>}
                {description && (
                    <p className="text-sm text-gray-400 font-jakarta leading-relaxed">{description}</p>
                )}
            </div>
        </Wrapper>
    )
}
