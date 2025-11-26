import React from "react";
import { Palette, Layout, TrendingUp, Plus, Star } from "lucide-react";

export function TestimonialsSection() {
    return (
        <section className="sm:p-8 sm:bg-zinc-900 border-0 rounded-none pt-6 pr-6 pb-6 pl-6">
            <div className="mt-2 xl:text-center xl:mt-10">
                <h2 className="sm:text-4xl md:text-5xl text-3xl font-semibold text-slate-100 tracking-tight mt-4">
                    Real results
                </h2>
                <p className="mt-1 text-sm sm:text-base font-normal font-geist text-slate-400">
                    From concept to conversion
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {/* Metrics card */}
                <article className="flex flex-col min-h-[420px] sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
                    <div className="space-y-5">
                        <div className="flex gap-2 gap-x-2 gap-y-2 items-end">
                            <span className="text-5xl sm:text-6xl font-geist font-medium tracking-tighter text-slate-100">
                                150+
                            </span>
                        </div>
                        <p className="text-sm font-geist text-slate-300">
                            We've delivered{" "}
                            <span className="font-medium font-geist text-slate-100">
                                successful projects
                            </span>{" "}
                            across industries with exceptional results and client
                            satisfaction.
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium font-geist text-slate-100">
                                DesignStudio
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-7 w-7 bg-gradient-to-br border rounded-full flex items-center justify-center from-slate-700 to-slate-600 border-slate-600">
                                <Palette className="h-3 w-3 text-slate-300" />
                            </div>
                            <div className="h-7 w-7 bg-gradient-to-br border -ml-2 rounded-full flex items-center justify-center from-slate-700 to-slate-600 border-slate-600">
                                <Layout className="h-3 w-3 text-slate-300" />
                            </div>
                            <div className="h-7 w-7 bg-gradient-to-br border -ml-2 rounded-full flex items-center justify-center from-slate-700 to-slate-600 border-slate-600">
                                <TrendingUp className="h-3 w-3 text-slate-300" />
                            </div>
                            <span className="inline-flex items-center justify-center -ml-1 h-7 px-2 rounded-full text-xs font-normal font-geist bg-indigo-500 text-slate-100">
                                150+
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-green-500">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-xs font-normal font-geist text-slate-400">
                                99% client satisfaction rate
                            </span>
                        </div>
                    </div>
                    <button className="mt-6 h-11 w-full rounded-full text-sm font-normal transition font-geist bg-indigo-500 text-slate-100 hover:bg-indigo-600">
                        Start your project
                    </button>
                </article>

                {/* Testimonial columns */}
                <div className="grid grid-rows-[auto_1fr] gap-4">
                    <article className="flex xl:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 flex bg-cover border rounded-md items-center justify-center border-slate-700 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6931cecd-5f27-498d-90aa-86489df2ef35_320w.webp)]"></div>
                            <div className="">
                                <p className="text-sm font-medium tracking-tight leading-tight font-geist text-slate-100">
                                    Sarah Chen
                                </p>
                                <p className="text-xs font-geist text-slate-400">
                                    TechFlow Solutions
                                </p>
                            </div>
                        </div>
                        <span className="text-slate-600">
                            <Plus className="h-4 w-4" />
                        </span>
                    </article>

                    <article className="flex flex-col min-h-[420px] sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-green-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-slate-600">
                                <Plus className="h-4 w-4" />
                            </span>
                        </div>
                        <p className="text-2xl sm:text-3xl text-right leading-snug font-geist font-medium tracking-tighter text-slate-100">
                            Our new website increased conversions by 180% in the first month.
                            Absolutely transformative.
                        </p>
                    </article>
                </div>

                <div className="grid grid-rows-[1fr_auto] gap-4">
                    <article className="flex flex-col min-h-[420px] sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
                        <p className="text-2xl sm:text-3xl text-center leading-snug font-geist font-medium tracking-tighter text-slate-100">
                            DesignStudio understood our vision and delivered beyond
                            expectations. True design partners.
                        </p>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center gap-1 text-green-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-slate-600">
                                <Plus className="h-4 w-4" />
                            </span>
                        </div>
                    </article>

                    <article className="flex xl:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between">
                        <div className="h-9 w-9 flex bg-cover border rounded-md items-center justify-center border-slate-700 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/287ca1e2-ccca-409b-b256-664c7ae20a40_320w.webp)] bg-center"></div>
                        <div className="">
                            <p className="text-sm font-medium tracking-tight leading-tight font-geist text-slate-100">
                                Marcus Johnson
                            </p>
                            <p className="text-xs font-geist text-slate-400">
                                Innovate Labs
                            </p>
                        </div>
                    </article>
                </div>

                <div className="grid grid-rows-[auto_1fr] gap-4">
                    <article className="flex xl:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 flex bg-cover border rounded-md items-center justify-center border-slate-700 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cb364025-2387-4977-a5e2-b5466b778b1d_320w.webp)] bg-center"></div>
                            <div className="">
                                <p className="text-sm font-medium tracking-tight leading-tight font-geist text-slate-100">
                                    Maya Patel
                                </p>
                                <p className="text-xs font-geist text-slate-400">
                                    CEO, Digital Ventures
                                </p>
                            </div>
                        </div>
                        <span className="text-slate-600">
                            <Plus className="h-4 w-4" />
                        </span>
                    </article>

                    <article className="flex flex-col min-h-[420px] sm:p-6 sm:bg-zinc-800/50 bg-slate-800/50 border-zinc-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-green-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-slate-600">
                                <Plus className="h-4 w-4" />
                            </span>
                        </div>
                        <p className="text-2xl sm:text-3xl text-right leading-snug font-geist font-medium tracking-tighter text-slate-100">
                            Professional, responsive, and delivered ahead of schedule. Best
                            design investment we've made.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
