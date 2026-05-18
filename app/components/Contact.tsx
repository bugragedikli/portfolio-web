import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    const socialLinks = [
        { name: "GitHub", url: "https://github.com/bugragedikli", icon: FaGithub },
        { name: "LinkedIn", url: "https://linkedin.com/in/bugragedikli", icon: FaLinkedin },
        { name: "X", url: "https://twitter.com/bugragedikli_", icon: FaXTwitter },
        { name: "Email", url: "mailto:bugragedikli024@gmail.com", icon: MdEmail },
    ];

    return (
        <section id="contact" className="w-full py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 font-jakarta">Get In Touch</h2>
                
                <div className="space-y-12">
                    {/* Social Links Section */}
                    <div>
                        <p className="text-gray-400 font-jakarta leading-relaxed mb-6">
                            Connect with me on social media or send me a direct message.
                        </p>
                        <div className="flex gap-6">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                    title={link.name}
                                >
                                    <div className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded hover:border-highlight transition group-hover:text-highlight">
                                        <link.icon className="w-6 h-6" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Message Section - No Backend Required */}
                    <div className="border border-gray-700 rounded p-6">
                        <h3 className="text-lg font-bold mb-4 font-jakarta">Send a Message</h3>
                        <p className="text-sm text-gray-400 font-jakarta mb-4">
                            Fill out the form below and I'll get back to you via email.
                        </p>
                        <form 
                            method="post"
                            action="mailto:bugragedikli024@gmail.com"
                            encType="text/plain"
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-sm font-jakarta mb-2">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    className="w-full bg-background border border-gray-700 rounded px-3 py-2 font-jakarta text-sm focus:border-highlight outline-none transition" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-jakarta mb-2">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required
                                    className="w-full bg-background border border-gray-700 rounded px-3 py-2 font-jakarta text-sm focus:border-highlight outline-none transition" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-jakarta mb-2">Message</label>
                                <textarea 
                                    rows={5} 
                                    name="message"
                                    required
                                    className="w-full bg-background border border-gray-700 rounded px-3 py-2 font-jakarta text-sm focus:border-highlight outline-none transition"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="px-6 py-2 bg-highlight text-background rounded font-jakarta hover:opacity-80 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}