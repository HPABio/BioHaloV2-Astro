"use client";
import React from "react";

import NetworkDiagram from "./NetworkDiagram";
import { TrendingDown, Sprout, Zap, Recycle, Leaf } from "lucide-react";
import enzymeImage1 from "@/assets/images/AdobeStock/AdobeStock_747938517_Compressed.png";

interface NetworkDiagramWithNodesProps {
  className?: string;
  nodeLabels?: string[];
  enzymeImage?: string;
  enzymeImageAlt?: string;
  width?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const NetworkDiagramWithNodes: React.FC<NetworkDiagramWithNodesProps> = ({
  className = "",
  nodeLabels = [
    "Bio-Based Materials",
    "Minimal By-Products",
    "Reduced Fluorine",
    "Circular Economy",
    "Green Chemistry",
  ],
  enzymeImage,
  enzymeImageAlt = "Enzyme",
  width = "max-w-2xl",
  imageWidth = 500,
  imageHeight = 500,
}) => {
  const icons = [
    <Sprout key="sprout" className="w-full h-full" />,
    <Zap key="zap" className="w-full h-full" />,
    <TrendingDown key="trending" className="w-full h-full" />,
    <Recycle key="recycle" className="w-full h-full" />,
    <Leaf key="leaf" className="w-full h-full" />,
  ];

  return (
    <div
      className={`bg-gray-800/0 px-8 rounded-lg w-full flex justify-center ${width} ${className}`}
    >
      <div className="w-full flex flex-col gap-0 relative max-w-[550px] ">
        {/* First row: 5 square divs */}
        <div className="flex justify-between w-full z-10 mb-[-20px]">
          {nodeLabels.map((label, index) => (
            <div
              key={index}
              className="w-[100px] aspect-square rounded-lg flex items-center justify-center p-4
              bg-gradient-to-br from-gray-900/50 to-gray-800/60 backdrop-blur-xl 
              border-[1px] lg:border-[1.2px] border-mintAccent/5 lg:border-tealAccent/15 hover:border-mintAccent/10 group"
            >
              <div className="w-full h-full rounded-full flex items-center justify-center p-4 xl:p-5
               text-tealAccent bg-gradient-to-tl from-gray-900/50 to-gray-800/60 backdrop-blur-xl 
              border-[1px] border-mintAccent/10 group-hover:border-mintAccent/30">
                {icons[index]}
              </div>
            </div>
          ))}
        </div>

        {/* Second row: Network Diagram */}
        <div className="w-full aspect-[4/3] flex flex-col items-start justify-center p-0 m-0 -mt-[75px]"
          style={{
            willChange: "transform",
          }}
        >
          <NetworkDiagram className="w-full h-full " />

          {/* Third row: One centered square div */}
          <div className="w-full flex justify-center z-10 -mt-[220px] xl:-mt-[180px]">
            <div className="w-full aspect-video scale-[1.3]"
              style={{
                willChange: "transform",
                backgroundImage: `url(${enzymeImage1.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkDiagramWithNodes;
