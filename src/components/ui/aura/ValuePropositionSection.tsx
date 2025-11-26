import React from "react";
import { ArrowUpRight, Star, ShieldCheck, Check } from "lucide-react";

export function ValuePropositionSection() {
    return (
        <div className="animate-[slideUp_0.6s_ease-out_0.5s_both] xl:ml-auto xl:mr-auto xl:bg-zinc-900 bg-zinc-900 max-w-full border-0 rounded-none mt-4 mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
            <div className="xl:mt-10 text-center mt-20 mb-12">
                <h2 className="sm:text-4xl md:text-5xl md:mt-10 text-3xl font-semibold text-slate-100 tracking-tight font-geist mt-10">
                    Your success is our priority
                </h2>
                <p className="text-base md:text-lg mt-3 max-w-2xl mx-auto font-geist text-slate-400">
                    Strategic design solutions backed by proven results and expert
                    craftsmanship
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6">
                {/* Left: Core differentiator */}
                <div className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41438a62-3777-4cae-924c-e588db59dba3_1600w.webp)] bg-cover border-slate-800 border rounded-2xl relative">
                    <div className="sm:h-[560px] sm:p-8 flex flex-col bg-gradient-to-t from-black/80 via-black/40 to-transparent h-[450px] pt-6 pr-6 pb-6 pl-6 relative">
                        <div className="flex items-center gap-3">
                            <div className="">
                                <p className="text-sm font-geist text-slate-300">
                                    Our Approach
                                </p>
                                <p className="text-xs sm:text-sm mt-1 font-geist text-slate-400">
                                    Strategic Design Thinking
                                </p>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="sm:text-4xl text-2xl font-semibold tracking-tight font-geist mb-4 text-slate-100">
                                Design with <span className="text-blue-400">Purpose</span>
                            </div>
                            <div className="flex items-center gap-2 mb-6 text-slate-300">
                                <div className="flex items-center gap-1">
                                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                                </div>
                                <p className="text-sm font-geist">Every pixel has intention</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-geist text-slate-400">
                                Discover our process
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle: Results & methodology */}
                <div className="flex flex-col min-h-[420px] sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between relative">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                            background:
                                "repeating-radial-gradient(circle at 80% -20%, rgba(59,130,246,0.08) 0 1px, transparent 1px 60px)",
                        }}
                    ></div>
                    <div className="relative">
                        <p className="text-sm font-geist text-slate-400">
                            Proven Results
                        </p>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-geist font-light tracking-tight text-slate-100">
                            <span className="font-semibold text-blue-400">3x</span> faster
                            delivery,{" "}
                            <span className="font-semibold text-blue-500">2x</span> better
                            engagement
                        </h3>

                        <p className="mt-8 text-sm font-geist text-slate-400">
                            Our Process
                        </p>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-3 text-sm font-geist text-slate-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                                Strategic Discovery & Research
                            </div>
                            <div className="flex items-center gap-3 text-sm font-geist text-slate-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                                Collaborative Design Execution
                            </div>
                            <div className="flex items-center gap-3 text-sm font-geist text-slate-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                                Data-Driven Optimization
                            </div>
                        </div>

                        <div className="xl:bg-zinc-800/75 bg-slate-800/50 border-zinc-800 border rounded-xl mt-8 px-5 py-5">
                            <div className="flex items-center gap-1 mb-3 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="mt-3 text-sm font-geist text-slate-300">
                                "DesignStudio transformed our digital presence completely. Their
                                strategic approach and attention to detail elevated our entire
                                brand."
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <img
                                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/096dab35-ecaf-418f-a932-5b514543b035_320w.jpg"
                                    alt="Michael Torres"
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                                <div className="text-sm">
                                    <p className="font-geist text-slate-200">Michael Torres</p>
                                    <p className="text-xs text-slate-400 font-geist">
                                        CEO, Innovation Labs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Trust indicators & guarantees */}
                <div className="grid grid-rows-2 gap-6 gap-x-6 gap-y-6">
                    {/* Trust & expertise */}
                    <div className="flex flex-col sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
                        <div className="flex items-center sm:block">
                            <div className="relative h-28 w-28 sm:mx-auto">
                                <div className="absolute inset-0 rounded-full bg-blue-500"></div>
                                <div className="absolute inset-[10px] rounded-full flex items-center justify-center bg-slate-900/80">
                                    <ShieldCheck className="w-8 h-8 text-blue-500" />
                                </div>
                            </div>
                            <div className="ml-5 sm:ml-0 sm:mt-6 text-center">
                                <h4 className="text-lg font-geist font-medium tracking-tight text-slate-100">
                                    100% Satisfaction
                                </h4>
                                <p className="mt-2 text-sm font-geist text-slate-400">
                                    Guaranteed results or your money back. Your success is our
                                    commitment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Key metrics */}
                    <div className="flex flex-col sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="">
                                <div className="text-2xl font-geist font-medium tracking-tight text-slate-100">
                                    150+
                                </div>
                                <p className="text-xs mt-1 font-geist text-slate-400">
                                    Projects delivered
                                </p>
                            </div>
                            <div className="">
                                <div className="text-2xl font-geist font-medium tracking-tight text-slate-100">
                                    48h
                                </div>
                                <p className="text-xs mt-1 font-geist text-slate-400">
                                    Average start time
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm font-geist">
                                <span className="text-slate-400">Brand Strategy</span>
                                <span className="text-blue-400">Expert</span>
                            </div>
                            <div className="flex items-center justify-between text-sm font-geist">
                                <span className="text-slate-400">Visual Design</span>
                                <span className="text-blue-500">Expert</span>
                            </div>
                            <div className="flex items-center justify-between text-sm font-geist">
                                <span className="text-slate-400">Digital Marketing</span>
                                <span className="text-blue-300">Expert</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-800">
                            <div className="flex items-center gap-2 text-xs font-geist text-slate-400">
                                <Check className="w-3 h-3 text-green-500" />
                                DesignStudio Certified Team
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
