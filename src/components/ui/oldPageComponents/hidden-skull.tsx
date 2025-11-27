'use client';

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import IconToxicSkull from "@/assets/images/iconToxicSkull.png";

export default function HiddenSkull() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <motion.div
            ref={ref}
            style={{
                opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
            }}
            className="absolute -top-4/5 right-0 w-full h-full grid place-items-center mix-blend-color-burn"
        >
            <div className="w-full h-[1200px]">
                <img
                    src={typeof IconToxicSkull === 'string' ? IconToxicSkull : IconToxicSkull.src}
                    alt="IconToxicSkull"
                    className="object-contain grayscale w-full h-full"
                />
            </div>
        </motion.div>
    );
}