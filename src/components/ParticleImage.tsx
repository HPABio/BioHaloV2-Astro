import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { inspiraImageParticles } from "@/lib/inspiraImageParticles";

interface ParticleImageProps {
  imageSrc: string;
  className?: string;
  canvasWidth?: string;
  canvasHeight?: string;
  gravity?: string;
  particleSize?: string;
  particleGap?: string;
  mouseForce?: string;
  renderer?: "default" | "webgl";
  color?: string;
  colorArr?: number[];
  initPosition?: "random" | "top" | "left" | "bottom" | "right" | "misplaced" | "none";
  initDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
  fadePosition?: "explode" | "top" | "left" | "bottom" | "right" | "random" | "none";
  fadeDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
  noise?: number;
  responsiveWidth?: boolean;
}

export const ParticleImage: React.FC<ParticleImageProps> = ({
  imageSrc,
  className,
  canvasWidth,
  canvasHeight,
  gravity,
  particleSize,
  particleGap,
  mouseForce,
  renderer,
  color,
  colorArr,
  initPosition,
  initDirection,
  fadePosition,
  fadeDirection,
  noise,
  responsiveWidth,
}) => {
  const imageParticleRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageParticleRef.current) {
      const { InspiraImageParticle } = inspiraImageParticles();
      const particles = new InspiraImageParticle(imageParticleRef.current);

      // Cleanup on unmount
      return () => {
        particles.stop();
      };
    }
  }, []);

  return (
    <img
      ref={imageParticleRef}
      src={imageSrc}
      className={cn("hidden w-32 h-32", className)}
      data-particle-gap={particleGap}
      data-width={canvasWidth}
      data-height={canvasHeight}
      data-gravity={gravity}
      data-particle-size={particleSize}
      data-mouse-force={mouseForce}
      data-renderer={renderer}
      data-color={color}
      data-color-arr={colorArr ? JSON.stringify(colorArr) : undefined}
      data-init-position={initPosition}
      data-init-direction={initDirection}
      data-fade-position={fadePosition}
      data-fade-direction={fadeDirection}
      data-noise={noise}
      data-responsive-width={responsiveWidth}
      alt="Particle Effect"
    />
  );
};


