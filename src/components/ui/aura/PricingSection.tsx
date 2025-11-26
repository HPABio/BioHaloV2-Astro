import React from "react";
import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
    return (
        <section className="sm:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
            <div className="sm:mb-16 text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-slate-100">
                    Choose your plan
                </h2>
                <p className="text-base md:text-lg mt-3 max-w-2xl mx-auto text-slate-400">
                    Transparent pricing that scales with your needs. No hidden fees, no
                    surprises.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {/* Starter Plan */}
                <article className="relative flex flex-col rounded-2xl border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border-slate-800 bg-black">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-100">Starter</h3>
                        <p className="text-sm mt-1 text-slate-400">
                            Perfect for small projects
                        </p>
                        <div className="mt-6 flex items-baseline gap-2">
                            <span className="text-4xl font-semibold tracking-tight text-slate-100">
                                $2,500
                            </span>
                            <span className="text-slate-400">per project</span>
                        </div>
                        <ul className="mt-8 space-y-3">
                            {[
                                "Up to 5 pages",
                                "Responsive design",
                                "2 revision rounds",
                                "1 week delivery",
                                "Email support",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="mt-8 w-full h-11 rounded-lg border text-sm font-medium transition border-slate-700 bg-black text-slate-100 hover:bg-slate-950">
                        Get Started
                    </button>
                </article>

                {/* Professional Plan (Featured) */}
                <article className="relative flex flex-col rounded-2xl border-2 p-6 sm:p-8 shadow-lg border-indigo-400 bg-black">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-indigo-400 text-black">
                            <Sparkles className="w-3 h-3" />
                            Most Popular
                        </span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-100">
                            Professional
                        </h3>
                        <p className="text-sm mt-1 text-slate-400">
                            For growing businesses
                        </p>
                        <div className="mt-6 flex items-baseline gap-2">
                            <span className="text-4xl font-semibold tracking-tight text-slate-100">
                                $5,500
                            </span>
                            <span className="text-slate-400">per project</span>
                        </div>
                        <ul className="mt-8 space-y-3">
                            {[
                                "Up to 15 pages",
                                "Advanced interactions",
                                "Unlimited revisions",
                                "2 week delivery",
                                "CMS integration",
                                "Priority support",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="mt-8 w-full h-11 rounded-lg text-sm font-medium transition shadow-sm bg-indigo-400 text-black hover:bg-indigo-300">
                        Get Started
                    </button>
                </article>

                {/* Enterprise Plan */}
                <article className="relative flex flex-col rounded-2xl border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border-slate-800 bg-black">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-100">Enterprise</h3>
                        <p className="text-sm mt-1 text-slate-400">Custom solutions</p>
                        <div className="mt-6 flex items-baseline gap-2">
                            <span className="text-4xl font-semibold tracking-tight text-slate-100">
                                Custom
                            </span>
                        </div>
                        <ul className="mt-8 space-y-3">
                            {[
                                "Unlimited pages",
                                "Custom features",
                                "Dedicated team",
                                "Flexible timeline",
                                "API integrations",
                                "24/7 support",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-indigo-400" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="mt-8 w-full h-11 rounded-lg border text-sm font-medium transition border-slate-700 bg-black text-slate-100 hover:bg-slate-950">
                        Contact Sales
                    </button>
                </article>
            </div>

            <div className="mt-12 text-center">
                <p className="text-sm text-slate-400">
                    All plans include source files and 30 days of post-launch support
                </p>
            </div>
        </section>
    );
}
