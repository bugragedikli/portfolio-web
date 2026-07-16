import {
    SiSharp, SiUnity, SiCplusplus, SiPython, SiJavascript, SiTypescript,
    SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiMysql, SiGit,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export type Tech = {
    name: string
    icon: IconType
}

export type Fact = {
    emoji: string
    text: string
}

export const bio =
    "I'm Buğra, a game & software developer from Türkiye. I build immersive games and reliable software — from shipping titles on Nintendo & Playstation to crafting apps for the web.";

export const techStack: Tech[] = [
    { name: 'C#', icon: SiSharp },
    { name: 'Unity', icon: SiUnity },
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'SQL', icon: SiMysql },
    { name: 'Git', icon: SiGit },
]

export const facts: Fact[] = [
    { emoji: '🎮', text: 'Game Developer & Software Engineer' },
    { emoji: '🎓', text: 'Computer Science @ TOBB ETÜ' },
    { emoji: '📍', text: 'Ankara, Türkiye' },
    { emoji: '⚡', text: 'Building with Unity, C# and the web' },
    { emoji: '🎾', text: 'Tennis Player' },
]
