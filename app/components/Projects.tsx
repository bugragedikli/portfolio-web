'use client';

import { useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const [dragging, setDragging] = useState(false);

    // Drag-to-scroll state. `moved` guards accidental link clicks after a drag.
    const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        // Mouse (and pen) only — touch keeps its native horizontal scroll.
        if (e.pointerType === "touch") return;
        const el = trackRef.current;
        if (!el) return;
        drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
        setDragging(true);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = trackRef.current;
        if (!drag.current.active || !el) return;
        const dx = e.clientX - drag.current.startX;
        if (Math.abs(dx) > 5) {
            drag.current.moved = true;
            el.setPointerCapture(e.pointerId);
        }
        el.scrollLeft = drag.current.startScroll - dx;
    };

    const endDrag = () => {
        if (!drag.current.active) return;
        drag.current.active = false;
        setDragging(false);
    };

    // Swallow the click that follows a real drag so card links don't open.
    const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
        if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
        }
    };

    const step = () => {
        const el = trackRef.current;
        const card = el?.firstElementChild as HTMLElement | null;
        return card ? card.offsetWidth + 24 : (el?.clientWidth ?? 1);
    };

    const scroll = (dir: 1 | -1) => {
        trackRef.current?.scrollBy({ left: dir * step(), behavior: "smooth" });
    };

    // Map an indicator index to a scroll position across the full scrollable range,
    // so the last indicator lands at the very end (accounts for multiple cards in view).
    const goTo = (index: number) => {
        const el = trackRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const ratio = projects.length > 1 ? index / (projects.length - 1) : 0;
        el.scrollTo({ left: ratio * maxScroll, behavior: "smooth" });
    };

    const onScroll = () => {
        const el = trackRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
        setActive(Math.round(progress * (projects.length - 1)));
    };

    const arrowClass =
        "flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 text-foreground hover:bg-highlight hover:text-background transition-colors";

    return (
        <section id="projects" className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold font-jakarta">Projects</h2>
                    <div className="flex gap-2">
                        <button onClick={() => scroll(-1)} aria-label="Previous projects" className={arrowClass}>
                            <MdChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={() => scroll(1)} aria-label="Next projects" className={arrowClass}>
                            <MdChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div
                    ref={trackRef}
                    onScroll={onScroll}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={endDrag}
                    onPointerCancel={endDrag}
                    onClickCapture={onClickCapture}
                    className={`flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none ${
                        dragging ? "snap-none" : "snap-x snap-mandatory scroll-smooth"
                    }`}
                >
                    {projects.map((project) => (
                        <div key={project.id} className="snap-start shrink-0 w-72 sm:w-80">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>

                {/* Progress indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {projects.map((project, i) => {
                        const dist = Math.abs(i - active);
                        const style =
                            dist === 0
                                ? "w-6 bg-highlight"
                                : dist === 1
                                ? "w-2.5 bg-highlight/50"
                                : "w-2 bg-foreground/20 hover:bg-foreground/40";
                        return (
                            <button
                                key={project.id}
                                onClick={() => goTo(i)}
                                aria-label={`Go to project ${i + 1}`}
                                aria-current={i === active}
                                className={`h-2 rounded-full transition-all ${style}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
