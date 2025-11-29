'use client';

import Hero from "@/components/ui/neural-network-hero.tsx";

export default function PurpleVelvetHero({ className }: { className?: string }) {
    return (
        <div className={className}>
            <Hero color="#efe8ff" />
        </div>
    );
}