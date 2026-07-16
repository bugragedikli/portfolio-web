import { bio, techStack, facts } from '@/app/data/about';

export default function About() {
    return (
        <section id="about" className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
                {/* Left — text */}
                <div className="flex flex-col justify-between gap-8">
                    <div>
                        <h2 className="text-4xl font-bold font-jakarta mb-4">About</h2>
                        <p className="text-gray-400 font-jakarta leading-relaxed max-w-md">
                            {bio}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-jakarta mb-1">Tech stack</h3>
                        <p className="text-gray-400 font-jakarta mb-4">Some technologies I use on a daily basis.</p>

                        <div className="flex flex-wrap gap-2.5">
                            {techStack.map((t) => (
                                <span
                                    key={t.name}
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/10 font-jetbrains text-sm"
                                >
                                    <t.icon className="w-4 h-4 text-highlight" />
                                    {t.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right — terminal */}
                <div className="rounded-xl overflow-hidden border border-foreground/10 bg-neutral-950 shadow-lg">
                    {/* title bar */}
                    <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500" />
                            <span className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="flex-1 text-center font-jetbrains text-xs text-gray-500">
                            bugra@portfolio ~ zsh
                        </span>
                    </div>

                    {/* body */}
                    <div className="p-5 font-jetbrains text-sm leading-relaxed">
                        <p>
                            <span className="text-highlight">$</span> <span className="text-gray-200">whoami</span>
                        </p>
                        <p className="text-gray-400 pl-4 mb-3">bugra</p>

                        <p>
                            <span className="text-highlight">$</span> <span className="text-gray-200">cat facts.txt</span>
                        </p>
                        <div className="pl-4 mt-1 space-y-1">
                            {facts.map((f, i) => (
                                <p key={i} className="text-gray-400">
                                    <span className="mr-2">{f.emoji}</span>
                                    {f.text}
                                </p>
                            ))}
                        </div>

                        <p className="mt-3 flex items-center">
                            <span className="text-highlight mr-2">$</span>
                            <span className="inline-block w-2 h-4 bg-gray-500 animate-pulse" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
