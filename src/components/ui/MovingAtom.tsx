"use client";

import { HoverAtom } from "./HoverAtom";
import { ReactNode } from "react";

interface MovingAtomProps {
  // Base props
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;

  // Hover animation props
  hoverAmplitude?: number;
  hoverDuration?: number;
  hoverEase?: string;
  initialDelay?: number;

  // Additional animation controls
  rotationAngle?: number;
  rotationDuration?: number;
  scaleRange?: [number, number];
  scaleDuration?: number;
  shouldRotate?: boolean;
  shouldScale?: boolean;
  shouldHover?: boolean;

  // Children components (for future FollowAtom implementation)
  children?: ReactNode;
}

export function MovingAtom({
  // Default values for base props
  width = "100%",
  height = "auto",
  className = "",
  color = "tealAccent",
  // Default values for hover animation
  hoverAmplitude = 10,
  hoverDuration = 2,
  hoverEase = "easeInOut",
  initialDelay = 0,

  // Default values for additional animations
  rotationAngle = 360,
  rotationDuration = 20,
  scaleRange = [0.95, 1.05],
  scaleDuration = 2,
  shouldRotate = false,
  shouldScale = false,
  shouldHover = true,

  // Children
  children,
}: MovingAtomProps) {
  return (
    <div className={` ${className}`}>
      <HoverAtom
        width={width}
        height={height}
        hoverAmplitude={hoverAmplitude}
        hoverDuration={hoverDuration}
        hoverEase={hoverEase}
        initialDelay={initialDelay}
        rotationAngle={rotationAngle}
        rotationDuration={rotationDuration}
        scaleRange={scaleRange}
        scaleDuration={scaleDuration}
        shouldRotate={shouldRotate}
        shouldScale={shouldScale}
        shouldHover={shouldHover}
        color={color}
      />
      {children}
    </div>
  );
}
