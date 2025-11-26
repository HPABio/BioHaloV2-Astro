"use client";
import React from "react";

interface AtomDiagramProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const AtomDiagram: React.FC<
  AtomDiagramProps & {
    nucleusRadius?: number;
    nucleusFill?: string;
    nucleusStroke?: string;
    nucleusStrokeWidth?: number;
    shell1Radius?: number;
    shell1Stroke?: string;
    shell1StrokeWidth?: number;
    shell2Radius?: number;
    shell2Stroke?: string;
    shell2StrokeWidth?: number;
    electronRadius?: number;
    electronFill?: string;
    electronStroke?: string;
    electronStrokeWidth?: number;
    color?: string;
  }
> = ({
  width = "100%",
  height = "100%",
  className = "",
  nucleusRadius = 15,
  nucleusFill,
  nucleusStroke = "none",
  nucleusStrokeWidth = 2,
  shell1Radius = 40,
  shell1Stroke,
  shell1StrokeWidth = 4,
  shell2Radius = 70,
  shell2Stroke,
  shell2StrokeWidth = 4,
  electronRadius = 10,
  electronFill,
  electronStroke = "none",
  electronStrokeWidth = 1,
  color = "gray",
}) => {
  // Use the provided color or fall back to defaults
  const finalNucleusFill = nucleusFill ?? color;
  const finalShell1Stroke = shell1Stroke ?? color;
  const finalShell2Stroke = shell2Stroke ?? color;
  const finalElectronFill = electronFill ?? color;

  return (
    <svg
      width={width}
      height={height}
      viewBox="50 50 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Nucleus (single circle) */}
      <circle
        cx="150"
        cy="150"
        r={nucleusRadius}
        fill={finalNucleusFill}
        stroke={nucleusStroke}
        strokeWidth={nucleusStrokeWidth}
      />

      {/* First (inner) shell */}
      <circle
        cx="150"
        cy="150"
        r={shell1Radius}
        fill="none"
        stroke={finalShell1Stroke}
        strokeWidth={shell1StrokeWidth}
      />

      {/* Two electrons on the first shell */}
      <circle
        cx="190"
        cy="150"
        r={electronRadius}
        fill={finalElectronFill}
        stroke={electronStroke}
        strokeWidth={electronStrokeWidth}
      />
      <circle
        cx="110"
        cy="150"
        r={electronRadius}
        fill={finalElectronFill}
        stroke={electronStroke}
        strokeWidth={electronStrokeWidth}
      />

      {/* Second (outer) shell */}
      <circle
        cx="150"
        cy="150"
        r={shell2Radius}
        fill="none"
        stroke={finalShell2Stroke}
        strokeWidth={shell2StrokeWidth}
      />

      {/* Seven electrons on the second shell */}
      <circle
        cx="220"
        cy="150"
        r={electronRadius}
        fill={finalElectronFill}
        stroke={electronStroke}
        strokeWidth={electronStrokeWidth}
      />
      <circle
        cx="193.644"
        cy="204.728"
        r={electronRadius}
        fill={finalElectronFill}
        stroke={electronStroke}
        strokeWidth={electronStrokeWidth}
      />
      <circle
        cx="134.424"
        cy="218.245"
        r={electronRadius}
        fill={finalElectronFill}
        stroke={electronStroke}
        strokeWidth={electronStrokeWidth}
      />
      <circle
        cx="86.932"
        cy="180.372"
        r={electronRadius}
        fill={finalElectronFill}
        stroke={electronStroke}
        strokeWidth={electronStrokeWidth}
      />
      <circle
        cx="86.932"
        cy="119.628"
        r={electronRadius}
        fill={finalElectronFill}
        stroke={electronStroke}
        strokeWidth={electronStrokeWidth}
      />
      <circle
        cx="134.424"
        cy="81.755"
        r={electronRadius}
        fill={finalElectronFill}
        stroke={electronStroke}
        strokeWidth={electronStrokeWidth}
      />
      <circle
        cx="193.644"
        cy="95.272"
        r={electronRadius}
        fill={finalElectronFill}
        stroke={electronStroke}
        strokeWidth={electronStrokeWidth}
      />
    </svg>
  );
};

export default AtomDiagram;
