import { useState } from "react"
import { Cpu, FlaskConical, Rocket, Lightbulb, ChevronRight, Atom } from "lucide-react"
import { CPUTile, HalogenTile, SurfactantsTile, AerospaceTile, PFASTile } from "@/components/ui/oldPageComponents/FlurinatedMaterialsExamples.tsx";
import { Button } from "@/components/ui/button"
import AtomDiagram from "@/components/ui/atom-diagram";

const features = [
  {
    id: "halogens",
    icon: Atom,
    label: "Halogens",
    title: "Halogenation",
    description:
      "Specialized components for the production of halogen lamps and other advanced lighting solutions, delivering efficiency and longevity.",
    component: PFASTile ,
  },
  {
    id: "lighting",
    icon: Lightbulb,
    label: "Lighting",
    title: "Lighting Industry",
    description:
      "Specialized components for the production of halogen lamps and other advanced lighting solutions, delivering efficiency and longevity.",
    component: HalogenTile,
  },
  {
    id: "electronics",
    icon: Cpu,
    label: "Electronics",
    title: "Electronics Production",
    description:
      "Essential fluorinated materials for the production of semiconductor wafers, ensuring high performance and reliability in modern electronics.",
    component: CPUTile,
  },
  {
    id: "surfactants",
    icon: FlaskConical,
    label: "Surfactants",
    title: "Surfactants & Coatings",
    description:
      "Advanced fluorinated surfactants used in the production of high-performance coatings, adhesives, and specialized surface treatments.",
    component: SurfactantsTile,
  },
  {
    id: "aerospace",
    icon: Rocket,
    label: "Aerospace",
    title: "Aerospace Engineering",
    description:
      "Critical materials for the production of mechanical high-performance parts, capable of withstanding extreme conditions in aerospace applications.",
    component: AerospaceTile,
  },
  
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <section className="text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Fluorinated Materials</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              By using holgens like fluorine, the PFAS industry can fluorinate certain polymers to create a wide range of products that are both durable and long-lasting.
            </p>
          </div>

          {/* Logo */}
          <div className="hidden lg:flex items-center justify-center w-32 h-32  rounded-2xl ">
            {/* <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 10V45M50 55V90M10 50H45M55 50H90M22 22L42 42M58 58L78 78M78 22L58 42M42 58L22 78"
                stroke="black"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg> */}
            <AtomDiagram color="white"/>
          </div>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap gap-2 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon
            const isActive = activeFeature.id === feature.id
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${isActive
                    ? "bg-white text-black"
                    : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {feature.label}
              </button>
            )
          })}
        </div>

        {/* Feature Content */}
        <div className="grid lg:grid-cols-2 gap-x-12 lg:gap-x-20 items-center">
          {/* Left - Feature Description */}
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 mb-2">
              <activeFeature.icon className="w-5 h-5 text-zinc-300" />
            </div>
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">{activeFeature.label}</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-1 text-balance">{activeFeature.title}</h3>
            <p className="text-zinc-400 leading-relaxed mb-0">{activeFeature.description}</p>
            {/* <Button
              variant="outline"
              className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 hover:text-white rounded-full px-6"
            >
              Learn More
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button> */}
          </div>

          {/* Right - Active Tile Component */}
          <div className="relative w-full aspect-square md:aspect-auto md:h-[400px]">
            <activeFeature.component />
          </div>
        </div>
      </div>
    </section>
  )
}
