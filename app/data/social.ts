import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

export type Social = {
    name: string
    url: string
    icon: IconType
}

export const socialLinks: Social[] = [
    { name: "GitHub", url: "https://github.com/bugragedikli", icon: FaGithub },
    { name: "LinkedIn", url: "https://linkedin.com/in/bugragedikli", icon: FaLinkedin },
];
