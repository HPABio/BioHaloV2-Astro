'use client';

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import IconToxicSkull from "@/assets/images/iconToxicSkull.png";

export default function HiddenSkull() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    return (
        <motion.div
            ref={ref}
            style={{
                opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
            }}
            className="relative w-full h-full grid place-items-center"
        >
            <div className="relative w-full h-full">
                <img
                    src={typeof IconToxicSkull === 'string' ? IconToxicSkull : IconToxicSkull.src}
                    alt="IconToxicSkull"
                    className="object-contain invert grayscale w-full h-full"
                />
            </div>
        </motion.div>
    );
}