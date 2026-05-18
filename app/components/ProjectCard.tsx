
type ProjectCardProps = {
    title: string
    description?: string
    meta?: string
    imageUrl?: string
    projectUrl: string
    tags?: string[]
    featured?: boolean
    compact?: boolean
}

export default function ProjectCard({ title, description, meta, imageUrl, projectUrl, tags, featured, compact }: ProjectCardProps) {
    if (compact) {
        return (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 border border-gray-700 rounded hover:border-highlight transition group">
                <div>
                    <h3 className="font-jetbrains font-bold text-sm group-hover:text-highlight transition">
                        {title}
                    </h3>
                    {meta && <p className="font-jetbrains text-xs text-gray-500 mt-1">{meta}</p>}
                </div>
                <span className="font-jetbrains text-xs text-gray-500 group-hover:text-highlight transition">→</span>
            </a>
        )
    }

    if (featured) {
        return (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="group block p-6 border border-gray-700 rounded hover:border-highlight transition">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {imageUrl && (
                        <div className="h-64 bg-gray-900 rounded border border-gray-700 overflow-hidden flex items-center justify-center">
                            <img 
                                src={imageUrl} 
                                alt={title} 
                                className="w-full h-full object-contain transition"
                            />
                        </div>
                    )}
                    <div>
                        <div className="font-jetbrains text-xs text-highlight mb-3">FEATURED PROJECT</div>
                        <h3 className="text-3xl font-bold mb-4 font-jakarta group-hover:text-highlight group-hover:text-4xl transition-all">
                            {title}
                        </h3>
                        <p className="text-gray-400 font-jakarta text-sm mb-6 leading-relaxed">
                            {description}
                        </p>
                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="font-jetbrains text-xs px-3 py-1 border border-gray-600 rounded hover:border-highlight transition"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="font-jetbrains text-xs text-highlight">PROJECT INSIDE →</div>
                    </div>
                </div>
            </a>
        )
    }

    return (
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="group block p-4 border border-gray-700 rounded hover:border-highlight transition">
            <h3 className="font-bold mb-2 font-jakarta group-hover:text-highlight transition">
                {title}
            </h3>
            {description && (
                <p className="text-gray-400 font-jakarta text-sm mb-3 leading-relaxed">
                    {description}
                </p>
            )}
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="font-jetbrains text-xs px-2 py-1 border border-gray-600 rounded text-gray-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </a>
    )
}