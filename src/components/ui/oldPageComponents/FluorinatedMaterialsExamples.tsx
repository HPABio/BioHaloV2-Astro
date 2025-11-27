"use client";

import { motion, useMotionValue } from "framer-motion";
import { useTransform, useScroll } from "framer-motion";
import AdobeStockCPU from "@/assets/AdobeStock/AdobeStock_1514887767_Preview_CPU.jpeg";
import JetEngineCloseUpLummiAi from "@/assets/images/JetEngineClose-Up.jpeg";
import JetEngineTurbine from "@/assets/images/JetEngineTurbineClose-Up.jpeg";
import MatteBlackBottleLummiAi from "@/assets/images/MatteBlackBottle.jpeg";
import Hg_lamp from "@/assets/images/Hg_lamp.png";
import PfasBP from "@/assets/figures_and_graphics/BioHalo Figures (light gray)/SVG/pfasBP.svg";
import BioFMonomer from "@/assets/figures_and_graphics/BioHalo Figures (light gray)/PNG/BioF-Monomer.png";
import BioFMonomerAllPink from "@/assets/figures_and_graphics/BioHalo Figures (light gray)/SVG/BioF-Monomer-all-pink.svg";
import HalogenLampGeminiFutureV2 from "@/assets/images/HalogenLampGeminiFutureV2.png";
import HalogenLampGemini from "@/assets/images/HalogenLampGemini.png";
import { useRef } from "react";
import { SilkBackground } from "@/components/ui/bg-silk";

// Function to generate random brightness values
const generateBrightnessValues = (count: number, min: number, max: number) => {
  min = min || 0.7;
  max = max || 1.3;
  count = count || 10;
  return Array.from({ length: count }, () => {
    const brightness = min + Math.random() * (max - min); // Random value between 0.9 and 1.3
    return `blur(0px) brightness(${brightness.toFixed(2)})`;
  });
};

export function PFASTile() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      const maxDistance = Math.sqrt(
        (rect.width / 2) ** 2 + (rect.height / 2) ** 2
      );
      const currentDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const normalizedDistance = Math.min(1, currentDistance / maxDistance);

      // Map normalizedDistance (0 at center, 1 at edge) to brightness (3 at center, 1 at edge)
      const brightnessValue = 3 - normalizedDistance * 2; // Range from 3 to 1

      mouseX.set(brightnessValue);
    }
  };

  const filter = useTransform(
    mouseX,
    [1, 3],
    ["blur(0px) saturate(0) brightness(1)", "blur(0px) saturate(3) brightness(2)"]
  );

  return (
    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => mouseX.set(1)} // Reset brightness when mouse leaves
        className="w-full h-full relative"
        style={{
          filter: filter,
          transition: "filter 0.1s ease-out", // Smooth transition for brightness change
        }}
      >
       <img
          src={BioFMonomerAllPink.src}
          alt="Halogen Lamp"
          className="w-full h-full object-contain object-center -rotate-[5deg] hue-rotate-[200deg]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
          }}
        />
        <div className="absolute bottom-8 right-8">
          <p className="text-sm text-slate-300/50 font-medium font-poppins leading-none">
            <span className="text-3xl text-tealAccent uppercase font-semibold font-poppins leading-none">
              Forever Chemicals
              <br />
            </span>
            Perfluoroalkyl and Polyfluoroalkyl Substances 
            <br />
            <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60 leading-none">
              PFAS
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function CPUTile() {
  const refCPUText = useRef(null);
  return (
    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
      <motion.div
        initial={{
          filter: "blur(0px) brightness(1)",
        }}
        whileInView={{
          filter: generateBrightnessValues(10, 0.8, 1.3),
          transition: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        className="w-full h-full relative"
      >
        <img
          src={AdobeStockCPU.src}
          alt="CPU"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
          }}
        />
        <motion.div
          ref={refCPUText}
          initial={{ filter: "brightness(1)" }}
          style={{
            filter: useTransform(
              useScroll({
                target: refCPUText,
                offset: ["start end", "start start"],
              }).scrollYProgress,
              [0, 0.4, 0.5, 1],
              [
                "brightness(1)",
                "brightness(3)",
                "brightness(2)",
                "brightness(1)",
              ]
            ),
          }}
          className="absolute bottom-8 right-8"
        >
          <p className="text-sm text-slate-300/50 font-medium font-poppins leading-none">
            <span className="text-3xl text-tealAccent uppercase font-semibold font-poppins leading-none">
              electronics
              <br />
            </span>
            production of
            <br />
            <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60 leading-none">
              semiconductor wafers
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function SurfactantsTile() {
  const refCPUText = useRef(null);
  return (
    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
      <motion.div
        initial={{
          filter: "blur(0px) brightness(1)",
        }}
        whileInView={{
          filter: generateBrightnessValues(10, 0.8, 1.3),
          transition: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        className="w-full h-full relative"
      >
        <img
          src={JetEngineCloseUpLummiAi.src}
          alt="CPU"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
          }}
        />
        <motion.div
          ref={refCPUText}
          initial={{ filter: "brightness(1)" }}
          style={{
            filter: useTransform(
              useScroll({
                target: refCPUText,
                offset: ["start end", "start start"],
              }).scrollYProgress,
              [0, 0.4, 0.5, 1],
              [
                "brightness(1)",
                "brightness(3)",
                "brightness(2)",
                "brightness(1)",
              ]
            ),
          }}
          className="absolute bottom-8 right-8"
        >
          <p className="text-sm text-slate-300/50 font-medium font-poppins leading-none">
            <span className="text-3xl text-tealAccent uppercase font-semibold font-poppins leading-none">
              Surfactants
              <br />
            </span>
            production of
            <br />
            <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60 leading-none">
              coatings, adhesives, etc 
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}


export function AerospaceTile() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      const maxDistance = Math.sqrt(
        (rect.width / 2) ** 2 + (rect.height / 2) ** 2
      );
      const currentDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const normalizedDistance = Math.min(1, currentDistance / maxDistance);

      // Map normalizedDistance (0 at center, 1 at edge) to brightness (3 at center, 1 at edge)
      const brightnessValue = 3 - normalizedDistance * 2; // Range from 3 to 1

      mouseX.set(brightnessValue);
    }
  };

  const filter = useTransform(
    mouseX,
    [1, 3],
    ["blur(0px) brightness(1)", "blur(0px) brightness(3)"]
  );

  return (
    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => mouseX.set(1)} // Reset brightness when mouse leaves
        className="w-full h-full relative"
        style={{
          filter: filter,
          transition: "filter 0.1s ease-out", // Smooth transition for brightness change
        }}
      >
        <img
          src={JetEngineCloseUpLummiAi.src}
          alt="Halogen Lamp"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
          }}
        />
        <div className="absolute bottom-8 right-8">
          <p className="text-sm text-slate-300/50 font-medium font-poppins leading-none">
            <span className="text-3xl text-tealAccent uppercase font-semibold font-poppins leading-none">
              aerospace
              <br />
            </span>
            production of
            <br />
            <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60 leading-none">
              mechanical high performance parts
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}


export function MaterialsTile() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      const maxDistance = Math.sqrt(
        (rect.width / 2) ** 2 + (rect.height / 2) ** 2
      );
      const currentDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const normalizedDistance = Math.min(1, currentDistance / maxDistance);

      // Map normalizedDistance (0 at center, 1 at edge) to brightness (3 at center, 1 at edge)
      const brightnessValue = 3 - normalizedDistance * 2; // Range from 3 to 1

      mouseX.set(brightnessValue);
    }
  };

  const filter = useTransform(
    mouseX,
    [1, 3],
    ["blur(0px) brightness(1)", "blur(0px) brightness(3)"]
  );

  return (
    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
      <div className="w-full h-full relative">
        <SilkBackground className="absolute inset-0 z-0" />
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "radial-gradient(circle, transparent 0%, transparent 40%, black 85%, black 100%)",
            }}
        />
        <div className="absolute bottom-8 right-8">
          <p className="text-sm text-slate-300/50 font-medium font-poppins leading-none">
            <span className="text-3xl text-tealAccent uppercase font-semibold font-poppins leading-none">
              aerospace
              <br />
            </span>
            production of
            <br />
            <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60 leading-none">
              mechanical high performance parts
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}


export function HalogenTile() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      const maxDistance = Math.sqrt(
        (rect.width / 2) ** 2 + (rect.height / 2) ** 2
      );
      const currentDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const normalizedDistance = Math.min(1, currentDistance / maxDistance);

      // Map normalizedDistance (0 at center, 1 at edge) to brightness (3 at center, 1 at edge)
      const brightnessValue = 3 - normalizedDistance * 2; // Range from 3 to 1

      mouseX.set(brightnessValue);
    }
  };

  const filter = useTransform(
    mouseX,
    [1, 3],
    ["blur(0px) brightness(0.5)", "blur(0px) brightness(2)"]
  );

  return (
    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => mouseX.set(1)} // Reset brightness when mouse leaves
        className="w-full h-full relative"
        style={{
          filter: filter,
          transition: "filter 0.1s ease-out", // Smooth transition for brightness change
        }}
      >
        <img
          src={HalogenLampGemini.src}
          alt="Halogen Lamp"
          className="w-full h-full object-cover object-center hue-rotate-[150deg]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
          }}
        />
        <div className="absolute bottom-8 right-8">
          <p className="text-sm text-slate-300/50 font-medium font-poppins leading-none">
            <span className="text-3xl text-tealAccent uppercase font-semibold font-poppins leading-none">
              lighting
              <br />
            </span>
            production of
            <br />
            <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60 leading-none">
              halogen lamps &
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
       