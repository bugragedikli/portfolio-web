
'use client';

import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

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
        <nav className="fixed bg-background top-0 w-full z-50 px-6 py-8 flex justify-between items-center border-b border-highlight">
            <a href="#" className="jmono text-xl font-extrabold tracking-tight mono uppercase">Bugra Gedikli</a>
            <div className="flex gap-6 md:gap-10 items-center">
                <div className="hidden md:flex gap-10 text-[16px] uppercase tracking-[0.2em] font-medium">
                    <a href="#about" className="jmono opacity-70 hover:opacity-100 hover:text-highlight transition-all">About</a>
                    <a href="#projects" className="jmono opacity-70 hover:opacity-100 hover:text-highlight transition-all">Projects</a>
                    <a href="#resume" className="jmono opacity-70 hover:opacity-100 hover:text-highlight transition-all">Resume</a>
                    <a href="#contact" className="jmono opacity-70 hover:opacity-100 hover:text-highlight transition-all">Contact</a>
                </div>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                    title={isDark ? 'Light Mode' : 'Dark Mode'}
                >
                    {isDark ? (
                        <MdLightMode className="w-5 h-5" />
                    ) : (
                        <MdDarkMode className="w-5 h-5" />
                    )}
                </button>
            </div>
        </nav>
    )
}