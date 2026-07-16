
'use client';

import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode, MdOutlineDescription } from 'react-icons/md';

export default function Navbar() {
    const [isDark, setIsDark] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check localStorage and system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
        
        setIsDark(shouldBeDark);
        applyTheme(shouldBeDark);
    }, []);

    const applyTheme = (dark: boolean) => {
        const html = document.documentElement;
        if (dark) {
            html.style.colorScheme = 'dark';
            html.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            html.style.colorScheme = 'light';
            html.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        applyTheme(newTheme);
    };

    if (!mounted) return null;

    return (
        <header className="w-full z-50">
            <nav className="max-w-400 mx-auto px-8 md:px-12 py-8 flex justify-between items-center">
                <a href="#" className="jmono text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
                    Bugra Gedikli<span className="text-highlight ml-1">.</span>
                </a>
                <div className="flex gap-8 md:gap-12 items-center">
                    <div className="hidden md:flex gap-8 lg:gap-12 text-lg uppercase tracking-[0.15em] font-medium">
                        <a href="#about" className="jmono opacity-80 hover:opacity-100 hover:text-highlight border-b-2 border-transparent hover:border-highlight pb-1 transition-all">About</a>
                        <a href="#projects" className="jmono opacity-80 hover:opacity-100 hover:text-highlight border-b-2 border-transparent hover:border-highlight pb-1 transition-all">Projects</a>
                        <a href="#contact" className="jmono opacity-80 hover:opacity-100 hover:text-highlight border-b-2 border-transparent hover:border-highlight pb-1 transition-all">Contact</a>
                    </div>
                    <a
                        href="/bugra_gedikli_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View CV"
                        className="jmono inline-flex items-center gap-2 px-4 py-2 rounded-full border border-highlight text-highlight text-sm uppercase tracking-[0.15em] font-medium hover:bg-highlight hover:text-background transition-all"
                    >
                        <MdOutlineDescription className="w-5 h-5" />
                        Resume
                    </a>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                        title={isDark ? 'Light Mode' : 'Dark Mode'}
                    >
                        {isDark ? (
                            <MdLightMode className="w-6 h-6" />
                        ) : (
                            <MdDarkMode className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </nav>
        </header>
    )
}