import ProjectCard from "./ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold font-jakarta mb-6">Projects</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
