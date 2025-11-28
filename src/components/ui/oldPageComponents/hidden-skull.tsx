'use client';

import { useRef } from "react";
import RainbowBG from "@/assets/images/ColorfulGradientRainbowTexture.jpeg"
import { motion, useScroll, useTransform } from "framer-motion";
import IconToxicSkull from "@/assets/images/iconToxicSkull.png";

export default function HiddenSkull({ className }: { className?: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"],
    });

    return (
        <div className="relative overflow-hidden w-full h-full flex flex-col sm:flex-row bg-linear-to-r from-black via-black/30 to-transparent min-w-[420px]">
            <img src={RainbowBG.src} alt="Rainbow Background" className="w-full h-full object-cover object-right " />
                <motion.div
                ref={ref}
                style={{
                    opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
                }}
                className={`absolute -top-4/5 right-0 w-full h-full grid place-items-center ${className}`}
            >
                <div className="w-full h-[1200px]">
                    <img
                        src={typeof IconToxicSkull === 'string' ? IconToxicSkull : IconToxicSkull.src}
                        alt="IconToxicSkull"
                        className="object-contain grayscale w-full h-full"
                    />
                </div>
            </motion.div>
            <div className="absolute w-full inset-0 bg-linear-to-b from-black via-transparent to-black ">
              <div className="absolute inset-0  w-2/3 h-full mr-auto bg-linear-to-r from-black via-black to-transparent" />
              <div className="hidden 2xl:block absolute inset-0  w-1/5 h-full ml-auto bg-linear-to-l from-black via-black to-transparent border-2 border-red-500 " />
            </div>
          </div>
        
    );
}