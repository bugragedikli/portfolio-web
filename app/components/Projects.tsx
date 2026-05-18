import ProjectCard from "./ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
    const featured = projects.filter(p => p.type === 'featured');
    const main = projects.filter(p => p.type === 'main');
    const other = projects.filter(p => p.type === 'other');

    return (
        <section id="projects" className="w-full py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold font-jakarta mb-6">Projects</h2>
                
                {/* Featured Projects */}
                {featured.map(project => (
                    <div key={project.id} className="mb-6 border border-gray-700 rounded">
                        <ProjectCard 
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl}
                            tags={project.tags}
                            featured
                        />
                    </div>
                ))}

                {/* Main Projects */}
                {main.length > 0 && (
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {main.map(project => (
                            <ProjectCard 
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                projectUrl={project.projectUrl}
                                tags={project.tags}
                            />
                        ))}
                    </div>
                )}

                {/* Other Projects */}
                {other.length > 0 && (
                    <div className="space-y-3">
                        {other.map(project => (
                            <ProjectCard 
                                key={project.id}
                                title={project.title}
                                meta={project.meta}
                                projectUrl={project.projectUrl}
                                compact
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}