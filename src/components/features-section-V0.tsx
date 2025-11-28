import { useState } from "react"
import { Cpu, FlaskConical, Rocket, Lightbulb, ChevronRight, Atom } from "lucide-react"
import { CPUTile, HalogenTile, MaterialsTile, SurfactantsTile, AerospaceTile, PFASTile } from "@/components/ui/oldPageComponents/FluorinatedMaterialsExamples";
import { Button } from "@/components/ui/button"
import AtomDiagram from "@/components/ui/atom-diagram";

const features = [
  {
    id: "PFAS",
    icon: Atom,
    label: "PFAS",
    title: "Forever Chemicals",
    description:
      "Named after their long life cycle and extreme durability, Per- and Polyfluoroalkyl Substances (PFAS) are a class of chemicals used in almost every industry.",
    component: PFASTile,
  },
  // {
  //   id: "lighting",
  //   icon: Lightbulb,
  //   label: "Lighting",
  //   title: "Lighting Industry",
  //   description:
  //     "Specialized components for the production of halogen lamps and other advanced lighting solutions, delivering efficiency and longevity.",
  //   component: HalogenTile,
  // },
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
    label: "Coatings",
    title: "Coatings & Fabrics",
    description:
      "Advanced fluorinated surfactants used in the production of high-performance coatings, adhesives, and specialized surface treatments.",
    component: MaterialsTile,
  },
  {
    id: "aerospace",
    icon: Rocket,
    label: "Aerospace",
    title: "High-Performance Materials",
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
            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
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
            {/* Element icon */}
            <div className="relative w-28 h-28 rounded-lg bg-gradient-to-br from-cyan-900/20 to-cyan-950/80 border border-cyan-500/20 flex flex-col items-center justify-center shadow-2xl shadow-cyan-900/20 overflow-hidden">
              <AtomDiagram color="white" className="absolute -top-6 -right-6 w-24 h-24 opacity-5 rotate-12 pointer-events-none" />
              <div className="w-full px-3 flex justify-between absolute top-2">
                <span className="text-xs font-mono text-cyan-400">9</span>
                <span className="text-[10px] font-mono text-cyan-600">18.998</span>
              </div>
              <div className="text-5xl font-bold text-cyan-100 mt-2">F</div>
              <div className="text-[10px] font-medium tracking-widest text-cyan-500 uppercase">Fluorine</div>
            </div>
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
