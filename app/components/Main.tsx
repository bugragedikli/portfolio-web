import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Projects from "./Projects";
import Resume from "./Resume";

export default function Main() {
    return (
        <main className="w-full">
            <style>{`
                section {
                    animation: slideUp 0.6s ease-out;
                }
            `}</style>
            <Landing />
            <Projects />
            <About />
            <Resume />
            <Contact />
        </main>
    )
}