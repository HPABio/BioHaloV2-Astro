import React from "react";
import {
    Monitor,
    Palette,
    Layout,
    Smartphone,
    Layers,
    MousePointerClick,
    Zap,
    Users,
} from "lucide-react";

export function ServicesSection() {
    return (
        <section className="sm:pt-24 md:pt-28 md:mx-auto max-w-7xl mr-auto ml-auto pt-24 pb-20 relative">
            {/* Ambient gradient */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-[42rem] h-[42rem] rounded-full bg-gradient-to-b from-indigo-600/15 via-blue-500/10 to-transparent blur-3xl"></div>
            </div>

            <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-100">
                        Design services that deliver
                    </h2>
                    <p className="text-base md:text-lg mt-3 max-w-2xl mx-auto text-slate-400">
                        Comprehensive solutions from concept to launch, crafted to elevate
                        your brand.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Card 1 */}
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.08]"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)",
                                backgroundSize: "14px 14px",
                            }}
                        ></div>
                        <div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
                            <Monitor className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="relative sm:text-3xl text-2xl font-semibold tracking-tight font-manrope mt-5">
                            Web Design
                        </h3>
                        <p className="relative mt-2 text-white/70 text-sm sm:text-base font-sans">
                            Custom websites that convert visitors into customers with stunning
                            visuals and seamless experiences.
                        </p>

                        {/* Illustration */}
                        <div className="bg-gradient-to-b from-white/[0.03] to-transparent ring-white/10 ring-1 rounded-2xl mt-6 pt-4 pr-4 pb-4 pl-4 relative">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-600/10 via-indigo-700/10 to-transparent pointer-events-none"></div>

                            {/* Icon row */}
                            <div className="relative flex items-center justify-between gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/90">
                                    <Monitor className="w-4 h-4" />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/90">
                                    <Smartphone className="w-4 h-4" />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/90">
                                    <Layout className="w-4 h-4" />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/90">
                                    <Layers className="w-4 h-4" />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/90">
                                    <Palette className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Curves to a core */}
                            <svg
                                className="relative max-w-[320px] opacity-80 mt-6 mr-auto ml-auto w-[320px] h-[24px]"
                                viewBox="0 0 320 100"
                                fill="none"
                                strokeWidth="2"
                                style={{ color: "rgb(255, 255, 255)" }}
                            >
                                <path
                                    d="M20 5 C60 40, 120 40, 160 85"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    opacity="0.7"
                                ></path>
                                <path
                                    d="M85 5 C110 40, 140 40, 160 85"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    opacity="0.7"
                                ></path>
                                <path
                                    d="M150 5 C155 40, 160 40, 160 85"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    opacity="0.7"
                                ></path>
                                <path
                                    d="M235 5 C210 40, 180 40, 160 85"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    opacity="0.7"
                                ></path>
                                <path
                                    d="M300 5 C260 40, 200 40, 160 85"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    opacity="0.7"
                                ></path>
                            </svg>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.08]"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)",
                                backgroundSize: "14px 14px",
                            }}
                        ></div>
                        <div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
                            <Palette className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="relative mt-5 text-2xl sm:text-3xl font-semibold tracking-tight font-manrope">
                            Brand Identity
                        </h3>
                        <p className="relative mt-2 text-white/70 text-sm sm:text-base font-sans">
                            Complete visual systems that capture your brand essence and
                            resonate with your audience.
                        </p>

                        {/* Illustration: tag cloud + verified */}
                        <div className="relative mt-6 rounded-2xl p-4 ring-1 ring-white/10 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-600/10 via-blue-700/10 to-transparent pointer-events-none"></div>

                            <div className="relative grid grid-cols-3 gap-2 text-[11px] sm:text-xs">
                                <span className="text-white/60 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">
                                    Logo Design
                                </span>
                                <span className="text-white/60 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">
                                    Typography
                                </span>
                                <span className="text-white/70 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">
                                    Color System
                                </span>
                                <span className="text-white/60 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">
                                    Guidelines
                                </span>
                                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                                    Assets
                                </span>
                                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                                    Templates
                                </span>
                                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                                    Collateral
                                </span>
                                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                                    Style Guide
                                </span>
                                <span className="text-white/70 bg-white/5 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">
                                    Strategy
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.08]"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)",
                                backgroundSize: "14px 14px",
                            }}
                        ></div>
                        <div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
                            <Layout className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="relative mt-5 text-2xl sm:text-3xl font-semibold tracking-tight font-manrope">
                            UX Strategy
                        </h3>
                        <p className="relative mt-2 text-white/70 text-sm sm:text-base font-sans">
                            User-centered design backed by research and testing for optimal
                            engagement and conversions.
                        </p>

                        {/* Illustration: speech UI */}
                        <div className="relative mt-6 rounded-2xl p-4 ring-1 ring-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-600/10 via-indigo-700/10 to-transparent pointer-events-none"></div>

                            <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-white/10 text-xs sm:text-sm text-white shadow-md">
                                <span className="w-2 h-2 rounded-full bg-white/80 ring-1 ring-white/40"></span>
                                User Research
                            </div>

                            {/* Control */}
                            <div className="relative mt-4 rounded-xl bg-black/40 ring-1 ring-white/10 px-3 py-3 flex items-center gap-3">
                                <button className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 ring-1 ring-white/20 flex items-center justify-center text-white shadow-md">
                                    <Zap className="w-[18px] h-[18px]" />
                                </button>
                                {/* Chart visualization */}
                                <div className="flex-1 flex items-end gap-1">
                                    <div className="w-1 bg-blue-400/60 rounded-full h-3"></div>
                                    <div className="w-1 bg-blue-400/70 rounded-full h-6"></div>
                                    <div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
                                    <div className="w-1 bg-blue-400/80 rounded-full h-8"></div>
                                    <div className="w-1 bg-blue-400/50 rounded-full h-3"></div>
                                    <div className="w-1 bg-blue-400/70 rounded-full h-6"></div>
                                    <div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
                                    <div className="w-1 bg-blue-400/80 rounded-full h-7"></div>
                                    <div className="w-1 bg-blue-400/50 rounded-full h-3"></div>
                                    <div className="w-1 bg-blue-400/70 rounded-full h-5"></div>
                                    <div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
                                    <div className="w-1 bg-blue-400/80 rounded-full h-7"></div>
                                    <div className="w-1 bg-blue-400/50 rounded-full h-3"></div>
                                    <div className="w-1 bg-blue-400/70 rounded-full h-6"></div>
                                    <div className="w-1 bg-blue-400/60 rounded-full h-4"></div>
                                </div>
                                <div className="shrink-0 w-2.5 h-6 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature bullets */}
                <div className="mt-10 sm:mt-12 border-t border-white/10 pt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-start gap-3">
                            <span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
                                <MousePointerClick className="w-[18px] h-[18px] text-white" />
                            </span>
                            <div className="">
                                <p className="text-sm font-medium text-white/90 font-sans">
                                    Conversion Focus
                                </p>
                                <p className="text-sm text-white/60 mt-1 font-sans">
                                    Designs optimized for results.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
                                <Smartphone className="w-[18px] h-[18px] text-white" />
                            </span>
                            <div className="">
                                <p className="text-sm font-medium text-white/90 font-sans">
                                    Responsive Design
                                </p>
                                <p className="text-sm text-white/60 mt-1 font-sans">
                                    Perfect on every device.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
                                <Zap className="w-[18px] h-[18px] text-white" />
                            </span>
                            <div className="">
                                <p className="text-sm font-medium text-white/90 font-sans">
                                    Fast Turnaround
                                </p>
                                <p className="text-sm text-white/60 mt-1 font-sans">
                                    Launch quickly with quality.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
                                <Users className="w-[18px] h-[18px] text-white" />
                            </span>
                            <div>
                                <p className="text-sm font-medium text-white/90 font-sans">
                                    Expert Team
                                </p>
                                <p className="text-sm text-white/60 mt-1 font-sans">
                                    Seasoned design professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
