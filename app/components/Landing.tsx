export default function Landing() {
    return (
        <section id="about" className="w-full min-h-screen flex items-center justify-center px-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-3 font-jakarta">
                        Buğra Gedikli
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-jakarta mb-6">
                        Game Developer & Software Engineer
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-jakarta leading-relaxed mb-8 max-w-md">
                        Building immersive games and robust software. Focused on performance, user experience, and shipping things that matter.
                    </p>

                    <div className="flex gap-4">
                        <a href="#projects" className="px-6 py-3 bg-highlight text-background rounded font-jakarta hover:opacity-80 transition">
                            View Work
                        </a>
                        <a href="#contact" className="px-6 py-3 border border-foreground rounded font-jakarta hover:text-background hover:bg-foreground transition">
                            Contact
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex justify-center items-center">
                    <img 
                        src="/bugra.png" 
                        alt="Buğra Gedikli" 
                        className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-background"
                    />
                </div>
            </div>
        </section>
    )
}