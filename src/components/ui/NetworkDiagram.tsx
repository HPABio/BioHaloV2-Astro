"use client";
import * as React from "react";
// import "@/styles/NetworkDiagram.css";

interface NetworkDiagramProps extends React.SVGProps<SVGSVGElement> {
  animateLines?: boolean;
  animateMarkers?: boolean;
  lineMarkerSize?: number;
}

const NetworkDiagram = ({
  animateLines = true,
  animateMarkers = true,
  lineMarkerSize = 10,
  ...props
}: NetworkDiagramProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Ebene_1"
    viewBox="0 0 1338 789"
    {...props}
  >
    <defs>
      <style>
        {
          ".diagram-cls-1{fill:#fff}.diagram-cls-2{fill:none;stroke:#4B5563;stroke-miterlimit:10;stroke-width:3px}"
            }
      </style>

      {/* Masks for each path */}
      <mask id="network-mask-1">
        <path
          d="M113 199.25v112.84c0 22.32 18.09 40.41 40.41 40.41h414.68c22.32 0 40.41 18.09 40.41 40.41V660.5"
          strokeWidth="3"
          stroke="white"
        />
      </mask>
      <mask id="network-mask-2">
        <path
          d="M1225.5 199.25v112.84c0 22.32-18.09 40.41-40.41 40.41H770.41c-22.32 0-40.41 18.09-40.41 40.41V660.5"
          strokeWidth="3"
          stroke="white"
        />
      </mask>
      <mask id="network-mask-3">
        <path
          d="M947 199.25v52.34c0 22.32-18.09 40.41-40.41 40.41H738.41c-22.32 0-40.41 18.09-40.41 40.41V660.5"
          strokeWidth="3"
          stroke="white"
        />
      </mask>
      <mask id="network-mask-4">
        <path
          d="M391.5 199.75v52.34c0 22.32 18.09 40.41 40.41 40.41h168.18c22.32 0 40.41 18.09 40.41 40.41V661"
          strokeWidth="3"
          stroke="white"
        />
      </mask>
      <mask id="network-mask-5">
        <path d="M668.5 105.5v570" strokeWidth="3" stroke="white" />
      </mask>

      {/* Gradients for animated circles - Updated colors */}
      <radialGradient id="network-teal-grad" fx="1">
        <stop offset="0%" stopColor="#0D9488" />
        <stop offset="50%" stopColor="#0D9488" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="network-mint-grad" fx="1">
        <stop offset="0%" stopColor="#99F6E4" />
        <stop offset="50%" stopColor="#99F6E4" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="network-pink-grad" fx="1">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="50%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>

      {/* Circle marker for path endpoints */}
      <marker
        id="network-circle-marker"
        viewBox="0 0 10 10"
        refX="5"
        refY="5"
        markerWidth={lineMarkerSize}
        markerHeight={lineMarkerSize}
      >
        <circle
          cx="5"
          cy="5"
          r="2"
          fill="black"
          stroke="#232323"
          strokeWidth="0.5"
        >
          {animateMarkers && (
            <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
          )}
        </circle>
      </marker>
    </defs>

    {/* Paths */}
    <g
      stroke="currentColor"
      fill="none"
      strokeWidth="3"
      markerStart="url(#network-circle-marker)"
    >
      {/* First path */}
      <path
        d="M113 199.25v112.84c0 22.32 18.09 40.41 40.41 40.41h414.68c22.32 0 40.41 18.09 40.41 40.41V660.5"
        className="diagram-cls-2"
      />
      {/* Second path */}
      <path
        d="M1225.5 199.25v112.84c0 22.32-18.09 40.41-40.41 40.41H770.41c-22.32 0-40.41 18.09-40.41 40.41V660.5"
        className="diagram-cls-2"
      />
      {/* Third path */}
      <path
        d="M947 199.25v52.34c0 22.32-18.09 40.41-40.41 40.41H738.41c-22.32 0-40.41 18.09-40.41 40.41V660.5"
        className="diagram-cls-2"
      />
      {/* Fourth path */}
      <path
        d="M391.5 199.75v52.34c0 22.32 18.09 40.41 40.41 40.41h168.18c22.32 0 40.41 18.09 40.41 40.41V661"
        className="diagram-cls-2"
      />
      {/* Fifth path */}
      <path d="M668.5 105.5v570" className="diagram-cls-2" />
    </g>

    {/* Animated circles along paths - Updated colors and sizes */}
    {/* Teal Light - Outer */}
    <g mask="url(#network-mask-1)">
      <circle
        className="network-path network-line-1"
        cx="0"
        cy="0"
        r="30"
        fill="url(#network-teal-grad)"
      />
    </g>
    {/* Teal Light - Outer */}
    <g mask="url(#network-mask-2)">
      <circle
        className="network-path network-line-2"
        cx="0"
        cy="0"
        r="30"
        fill="url(#network-teal-grad)"
      />
    </g>
    {/* Mint Light - Inner */}
    <g mask="url(#network-mask-3)">
      <circle
        className="network-path network-line-3"
        cx="0"
        cy="0"
        r="30"
        fill="url(#network-mint-grad)"
      />
    </g>
    {/* Mint Light - Inner */}
    <g mask="url(#network-mask-4)">
      <circle
        className="network-path network-line-4"
        cx="0"
        cy="0"
        r="30"
        fill="url(#network-mint-grad)"
      />
    </g>
    {/* Pink Light - Middle */}
    <g mask="url(#network-mask-5)">
      <circle
        className="network-path network-line-5"
        cx="0"
        cy="0"
        r="30"
        fill="url(#network-pink-grad)"
      />
    </g>
  </svg>
);

export default NetworkDiagram;
