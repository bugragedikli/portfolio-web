'use client';

import { useState } from "react";
import { socialLinks } from "@/app/data/social";

// Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local — get a free key at https://web3forms.com
// (the destination email stays on their servers and never appears in this code).
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
    "w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2.5 font-jakarta text-sm focus:border-highlight outline-none transition";

export default function Contact() {
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (!WEB3FORMS_ACCESS_KEY) {
            setStatus("error");
            return;
        }

        setStatus("sending");

        const formData = new FormData(form);
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="w-full py-24 px-6">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-jakarta mb-4">Get In Touch</h2>
                <p className="text-gray-400 font-jakarta leading-relaxed mb-8">
                    Have a project in mind or just want to say hi? Drop me a message.
                </p>

                <form onSubmit={handleSubmit} className="text-left space-y-4">
                    {/* honeypot — hidden from users, catches bots */}
                    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" name="name" required placeholder="Name" className={fieldClass} />
                        <input type="email" name="email" required placeholder="Email" className={fieldClass} />
                    </div>
                    <textarea name="message" required rows={4} placeholder="Your message" className={`${fieldClass} resize-none`} />

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full px-6 py-2.5 bg-highlight text-background rounded-lg font-jakarta font-semibold hover:opacity-90 transition disabled:opacity-60"
                    >
                        {status === "sending" ? "Sending…" : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p className="text-highlight font-jakarta text-sm text-center">
                            Thanks! I&apos;ll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 font-jakarta text-sm text-center">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>

                <div className="flex justify-center gap-4 mt-10">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.name}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-foreground/15 hover:border-highlight hover:text-highlight hover:-translate-y-1 transition-all"
                        >
                            <link.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
