import React, { useState, useEffect, useCallback } from "react";
import {
    Plus,
    ChevronLeft,
    ChevronRight,
    PlayCircle,
    ArrowRight,
    Check,
} from "lucide-react";

const CARDS = [
    {
        title: "E-commerce Platform",
        description: "Complete online store design",
        image:
            "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fa91f7af-c0ee-487e-9b71-34905a5f7414_1600w.webp",
    },
    {
        title: "SaaS Dashboard",
        description: "Modern analytics interface",
        image:
            "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5929dfb3-6ba0-482e-8054-7c6b716e45bc_1600w.jpg",
    },
    {
        title: "Landing Pages",
        description: "High-converting designs",
        image:
            "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ce6d7146-78eb-4530-bc2a-2885666e1383_1600w.webp",
    },
    {
        title: "Mobile App UI",
        description: "Native & responsive experiences",
        image:
            "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c75a3e33-28d5-4996-97d3-cabbf3908ede_1600w.webp",
    },
    {
        title: "Brand Identity",
        description: "Complete visual systems",
        image:
            "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4ba3f45-b7fb-47e5-a442-3c55bd9f9f1c_1600w.webp",
    },
];

export function HeroSection() {
    const [current, setCurrent] = useState(2);
    const [windowWidth, setWindowWidth] = useState(0);
    const [savedCards, setSavedCards] = useState<boolean[]>(
        new Array(CARDS.length).fill(false)
    );

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % CARDS.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + CARDS.length) % CARDS.length);
    }, []);

    const toggleSave = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        setSavedCards((prev) => {
            const newSaved = [...prev];
            newSaved[index] = !newSaved[index];
            return newSaved;
        });
    };

    const getCardStyle = (index: number) => {
        const baseX = windowWidth < 640 ? 44 : 72;
        const baseY = windowWidth < 640 ? 10 : 14;
        const baseR = 5;

        const offset = index - current;
        const depth = Math.abs(offset);

        if (depth > 2) {
            return {
                opacity: 0,
                pointerEvents: "none" as const,
                transform: "translate3d(0,0,0) scale(0.9)",
                zIndex: 0,
                visibility: "hidden" as const, // Hide completely
            };
        }

        const translateX = offset * baseX;
        const translateY = depth * baseY + (offset === 0 ? 0 : 6);
        const rotate = offset * -baseR;
        const scale = offset === 0 ? 1 : depth === 1 ? 0.965 : 0.93;

        return {
            opacity: 1,
            pointerEvents: (offset === 0 ? "auto" : "none") as "auto" | "none",
            transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg) scale(${scale})`,
            transition: "transform 400ms cubic-bezier(.2,.7,0,1), opacity 300ms ease",
            zIndex: 100 - depth,
            filter:
                offset === 0
                    ? "drop-shadow(0 15px 25px rgba(15,23,42,0.25))"
                    : "drop-shadow(0 8px 16px rgba(15,23,42,0.12))",
        };
    };

    return (
        <section className="relative">
            <div className="sm:px-8 sm:pt-16 text-center max-w-3xl mr-auto ml-auto pt-10 pr-6 pl-6">
                <h1 className="sm:text-5xl md:text-6xl md:text-[#ffffff] md:mt-20 text-4xl font-semibold text-slate-100 tracking-tight mt-20">
                    Beautiful websites that convert.
                </h1>
            </div>

            {/* Carousel */}
            <div className="sm:px-8 sm:mt-16 max-w-5xl mt-16 mr-auto ml-auto pr-6 pl-6 relative">
                <div className="sm:h-[600px] h-[520px] relative">
                    {/* Cards */}
                    <div
                        className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center"
                        id="cardStack"
                    >
                        {CARDS.map((card, index) => (
                            <article
                                key={index}
                                className="coach-card sm:w-[420px] aspect-[4/5] overflow-hidden shadow-slate-100/10 bg-slate-900 w-[78%] ring-white/5 ring-1 rounded-2xl absolute shadow-xl"
                                style={getCardStyle(index)}
                            >
                                <img
                                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                                    src={card.image}
                                    alt={card.title}
                                />
                                <div className="absolute top-4 right-4">
                                    <button
                                        onClick={(e) => toggleSave(e, index)}
                                        className="save-btn transition hover:bg-black bg-black/80 rounded-full pt-2 pr-2.5 pb-2 pl-2.5 shadow-sm backdrop-blur"
                                    >
                                        {savedCards[index] ? (
                                            <Check className="w-5 h-5 text-emerald-400" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-slate-100" />
                                        )}
                                    </button>
                                </div>
                                <div className="sm:p-6 bg-gradient-to-t to-transparent from-slate-100/70 via-slate-100/20 pt-5 pr-5 pb-5 pl-5 absolute right-0 bottom-0 left-0">
                                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-black">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm sm:text-base mt-1 text-slate-800">
                                        {card.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="-left-2 sm:-left-8 flex absolute top-0 bottom-0 items-center">
                        <button
                            onClick={prev}
                            className="group relative inline-flex items-center justify-center h-11 w-11 rounded-full shadow-md ring-1 hover:shadow-lg transition bg-black ring-slate-800 hover:ring-slate-700"
                        >
                            <ChevronLeft className="text-slate-100 group-hover:text-slate-50 w-5 h-5" />
                        </button>
                    </div>
                    <div className="absolute inset-y-0 -right-2 sm:-right-8 flex items-center">
                        <button
                            onClick={next}
                            className="group relative inline-flex items-center justify-center h-11 w-11 rounded-full shadow-md ring-1 hover:shadow-lg transition bg-black ring-slate-800 hover:ring-slate-700"
                        >
                            <ChevronRight className="text-slate-100 group-hover:text-slate-50 w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 xl:text-slate-50 text-sm hover:text-slate-100 text-slate-300"
                    >
                        <PlayCircle className="w-4 h-4" />
                        Watch our process
                    </a>
                    <span className="h-4 w-px bg-slate-800"></span>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 xl:text-slate-50/60 text-sm hover:text-indigo-300 text-indigo-400"
                    >
                        View full portfolio
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
