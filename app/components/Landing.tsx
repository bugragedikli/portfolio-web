import { socialLinks } from "@/app/data/social";
import { profile, hero } from "@/app/data/site";

export default function Landing() {
    return (
        <section id="home" className="w-full min-h-[calc(100vh-7rem)] flex items-center px-6">
            <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left — text */}
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold font-jakarta leading-[1.1] mb-6">
                        {hero.titleLead}
                        <br />
                        <span className="text-highlight">{hero.titleAccent}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-jakarta leading-relaxed mb-8 max-w-md">
                        {hero.tagline}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={hero.primaryCta.href}
                            className="inline-flex items-center gap-2 px-7 py-4 bg-foreground text-background rounded-lg font-jakarta font-semibold hover:opacity-90 transition"
                        >
                            {hero.primaryCta.label} <span aria-hidden>↘</span>
                        </a>
                        <a
                            href={hero.secondaryCta.href}
                            className="px-7 py-4 bg-foreground/10 text-foreground rounded-lg font-jakarta font-semibold hover:bg-foreground/20 transition"
                        >
                            {hero.secondaryCta.label}
                        </a>
                    </div>

                    <div className="flex gap-5 mt-10 text-2xl">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.name}
                                className="opacity-80 hover:opacity-100 hover:text-highlight transition"
                            >
                                <link.icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right — portrait */}
                <div className="relative hidden md:flex justify-center items-center">
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                        {/* dot grid */}
                        <div
                            className="absolute -top-8 -right-10 w-44 h-44 text-gray-500/50 z-0"
                            style={{
                                backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                                backgroundSize: "18px 18px",
                            }}
                        />
                        {/* depth circle */}
                        <div className="absolute inset-0 rounded-full bg-highlight/20 translate-x-6 translate-y-6 z-0" />
                        {/* photo */}
                        <img
                            src={profile.photo}
                            alt={profile.name}
                            className="relative z-10 w-full h-full rounded-full object-cover ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
