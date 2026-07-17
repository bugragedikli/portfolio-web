import { profile } from "@/app/data/site";

export default function Footer() {
    return (
        <footer className="w-full border-t border-foreground/10 py-8 px-6">
            <p className="text-center font-jetbrains text-xs text-gray-500">
                © {new Date().getFullYear()} {profile.name}
            </p>
        </footer>
    )
}
