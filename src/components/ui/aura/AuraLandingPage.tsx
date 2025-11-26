import React from "react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { ValuePropositionSection } from "./ValuePropositionSection";
import { ServicesSection } from "./ServicesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";

export function AuraLandingPage() {
    return (
        <div className="antialiased text-slate-100 font-sans bg-black min-h-screen relative overflow-hidden">
            {/* Fonts and Global Styles */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        
        .font-geist { font-family: 'Geist', sans-serif !important; }
        .font-manrope { font-family: 'Manrope', sans-serif !important; }
      `}</style>

            {/* Background Image */}
            <div
                className="top-0 w-full -z-10 h-[1140px] bg-cover bg-center absolute blur-2xl"
                style={{
                    backgroundImage:
                        'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a321d955-bf50-4745-bd6a-5555c9e712e7_3840w.webp")',
                }}
            ></div>

            {/* Backdrop Gradients */}
            <div className="fixed -z-10 top-0 right-0 bottom-0 left-0 pointer-events-none">
                <div className="absolute top-0 right-0 bottom-0 left-0"></div>
                <div className="-top-40 -right-32 bg-gradient-to-br w-[42rem] h-[42rem] rounded-full absolute blur-3xl from-indigo-800/40 via-fuchsia-800/30 to-cyan-800/30 invisible"></div>
                <div className="-bottom-32 -left-20 bg-gradient-to-tr w-[32rem] h-[32rem] rounded-full absolute blur-3xl from-sky-800/40 via-violet-800/30 to-rose-800/30 invisible"></div>
            </div>

            <Navbar />
            <HeroSection />
            <ValuePropositionSection />
            <ServicesSection />
            <TestimonialsSection />
            <PricingSection />
            <FAQSection />
            <Footer />
        </div>
    );
}
