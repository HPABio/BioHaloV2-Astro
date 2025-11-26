import React from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
    const faqs = [
        {
            question: "What's your typical project timeline?",
            answer:
                "Project timelines vary based on scope. A typical landing page takes 1-2 weeks, while a full website with multiple pages can take 3-6 weeks. We'll provide a detailed timeline during our initial consultation and keep you updated throughout the process.",
        },
        {
            question: "Do you offer ongoing support after launch?",
            answer:
                "Yes! All our plans include 30 days of post-launch support. After that, we offer monthly maintenance packages or hourly support options to ensure your website stays updated and performs optimally.",
        },
        {
            question: "What platforms do you design for?",
            answer:
                "We specialize in custom websites, Webflow, WordPress, and Shopify. Our designs are responsive and work seamlessly across all devices. We can also integrate with popular tools like HubSpot, Mailchimp, and various CMS platforms.",
        },
        {
            question: "How does the revision process work?",
            answer:
                "We present designs at key milestones and gather your feedback. The number of revision rounds depends on your plan - from 2 rounds in the Starter plan to unlimited revisions in Professional and Enterprise. We work closely with you to ensure the final design exceeds expectations.",
        },
        {
            question: "What do I need to provide to get started?",
            answer:
                "To begin, we'll need your brand assets (logo, colors, fonts), content (text and images), and a clear understanding of your goals. Don't have everything ready? No problem - we can help with content creation, photography recommendations, and brand development.",
        },
        {
            question: "Can you help with SEO and performance?",
            answer:
                "Absolutely. We build with SEO best practices in mind, including semantic HTML, fast loading times, and mobile optimization. We can also help with keyword research, meta tags, and performance tuning to ensure your site ranks well and converts visitors.",
        },
    ];

    return (
        <section className="sm:px-8 sm:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5f52e2f1-d904-420f-82c5-91ee43087973_3840w.webp)] max-w-full bg-cover mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl font-semibold tracking-tight mt-4 sm:text-4xl md:text-5xl md:text-[#ffffff] text-slate-100">
                    Frequently asked questions
                </h2>
                <p className="text-base md:text-lg mt-3 max-w-2xl mx-auto text-slate-400">
                    Everything you need to know about our design services and process.
                </p>
            </div>

            <div className="max-w-3xl mr-auto ml-auto space-y-4">
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="group overflow-hidden transition-colors xl:bg-[#ffffff]/20 border rounded-xl backdrop-blur-xl hover:border-slate-700 bg-black border-slate-800/10"
                    >
                        <summary className="flex cursor-pointer sm:p-7 list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                            <h3 className="text-base font-medium pr-4 sm:text-lg sm:text-[#ffffff]/60 text-slate-100">
                                {faq.question}
                            </h3>
                            <ChevronDown className="flex-shrink-0 group-open:rotate-180 transition-transform w-5 h-5 text-slate-400" />
                        </summary>
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                                {faq.answer}
                            </p>
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
