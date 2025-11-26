import { useEffect, useRef } from 'react';
import { InspiraShaderToy, type MouseMode } from './InspiraShaderToy';
import { cn } from '@/lib/utils';

interface ShaderToyProps {
  mouseMode?: MouseMode;
  className?: string;
  shaderCode: string;
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
  mouseSensitivity?: number;
  damping?: number;
}

export default function ShaderToy({
  mouseMode = 'click',
  className,
  shaderCode,
  hue = 0,
  saturation = 1,
  brightness = 1,
  speed = 1,
  mouseSensitivity = 1,
  damping = 0,
}: ShaderToyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shaderRef = useRef<InspiraShaderToy | undefined>(undefined);

  useEffect(() => {
    if (!containerRef.current) return;

    const shader = new InspiraShaderToy(containerRef.current, mouseMode);
    shaderRef.current = shader;

    const success = shader.setShader({
      source: shaderCode,
    });

    if (!success) {
      console.error('Failed to compile shader');
      return;
    }

    shader.setHSV({
      hue,
      saturation,
      brightness,
    });

    shader.setSpeed(speed);
    shader.setMouseSensitivity(mouseSensitivity);
    shader.setMouseDamping(damping);

    shader.play();

    return () => {
      shader.dispose();
    };
  }, [shaderCode, mouseMode]); // Only recreate on shader code or mouse mode change

  // Watch for prop changes and update shader
  useEffect(() => {
    if (!shaderRef.current) return;
    shaderRef.current.setHue(hue);
  }, [hue]);

  useEffect(() => {
    if (!shaderRef.current) return;
    shaderRef.current.setSaturation(saturation);
  }, [saturation]);

  useEffect(() => {
    if (!shaderRef.current) return;
    shaderRef.current.setBrightness(brightness);
  }, [brightness]);

  useEffect(() => {
    if (!shaderRef.current) return;
    shaderRef.current.setSpeed(speed);
  }, [speed]);

  useEffect(() => {
    if (!shaderRef.current) return;
    shaderRef.current.setMouseSensitivity(mouseSensitivity);
  }, [mouseSensitivity]);

  useEffect(() => {
    if (!shaderRef.current) return;
    shaderRef.current.setMouseDamping(damping);
  }, [damping]);

  return (
    <div
      ref={containerRef}
      className={cn('shadertoy-container', className)}
    />
  );
}

