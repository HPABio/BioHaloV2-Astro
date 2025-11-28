"use client";

import { motion, type Easing } from "framer-motion";
import AtomDiagram from "./atom-diagram";

interface HoverAtomProps {
  // Base AtomDiagram props
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
  // Animation control props
  hoverAmplitude?: number; // How far the atom moves up/down (in pixels)
  hoverDuration?: number; // Duration of one complete hover cycle (in seconds)
  hoverEase?: Easing; // Easing function for the hover animation
  initialDelay?: number; // Delay before animation starts (in seconds)

  // Additional animation controls
  rotationAngle?: number; // Rotation angle in degrees
  rotationDuration?: number; // Duration of one complete rotation
  scaleRange?: [number, number]; // Min and max scale values
  scaleDuration?: number; // Duration of scale animation
  shouldRotate?: boolean; // Whether the atom should rotate
  shouldScale?: boolean; // Whether the atom should scale
  shouldHover?: boolean; // Whether the atom should hover

  // Visibility control
  animateOnlyInView?: boolean; // Whether to animate only when in view
}

export function HoverAtom({
  // Default values for base props
  width = "100%",
  height = "100%",
  className = "",
  color = "tealAccent",

  // Default values for animation props
  hoverAmplitude = 10, // 10px up/down movement
  hoverDuration = 2, // 2 seconds per cycle
  hoverEase = "easeInOut", // Smooth transition both ways
  initialDelay = 0, // Start immediately

  // Default values for additional animations
  rotationAngle = 360, // Full rotation
  rotationDuration = 20, // 20 seconds per rotation
  scaleRange = [0.95, 1.05], // Subtle scale effect
  scaleDuration = 2, // 2 seconds per scale cycle
  shouldRotate = false, // Rotation off by default
  shouldScale = false, // Scale off by default
  shouldHover = true, // Hover on by default

  // Default for visibility control
  animateOnlyInView = true, // Only animate when in view by default
}: HoverAtomProps) {
  // Animation configuration
  const animationProps = {
    y: shouldHover ? [-hoverAmplitude, hoverAmplitude] : 0,
    rotate: shouldRotate ? rotationAngle : 0,
    scale: shouldScale ? scaleRange : 1,
  };

  const transitionProps = {
    y: {
      duration: hoverDuration,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: hoverEase,
      delay: initialDelay,
    },
    rotate: {
      duration: rotationDuration,
      repeat: Infinity,
      ease: "linear",
    },
    scale: {
      duration: scaleDuration,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      initial={{
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      // Use whileInView if animateOnlyInView is true, otherwise use animate
      {...(animateOnlyInView
        ? {
          whileInView: animationProps,
          viewport: { once: false, margin: "0px" },
        }
        : { animate: animationProps })}
      transition={transitionProps}
      className={className}
    >
      <AtomDiagram width={width} height={height} color={color} />
    </motion.div>
  );
}
