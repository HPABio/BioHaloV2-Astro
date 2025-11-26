import { ChevronRight, Sparkles } from "lucide-react"

export default function FluorineCard() {
  return (
    <div className="relative w-full max-w-4xl">
      {/* Main card container */}
      <div className="relative rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-900/80 to-zinc-950/90 border border-zinc-800/50 p-8 md:p-12 overflow-hidden backdrop-blur-sm">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-transparent to-transparent rounded-3xl" />

        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
          {/* Outer glow blur layer */}
          <span
            className="absolute inset-0 text-[20rem] md:text-[28rem] font-bold leading-none"
            style={{
              color: "rgba(34, 211, 238, 0.05)",
              filter: "blur(40px)",
            }}
          >
            F
          </span>
          {/* Main stroke outline */}
          <span
            className="text-[20rem] md:text-[28rem] font-bold leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "3px rgba(34, 211, 238, 0.5)",
              filter: "blur(0.5px)",
            }}
          >
            F
          </span>
          {/* Inner fill with gradient-like effect */}
          <span
            className="absolute inset-0 text-[20rem] md:text-[28rem] font-bold leading-none"
            style={{
              color: "rgba(34, 211, 238, 0.06)",
            }}
          >
            F
          </span>
          {/* Bright edge highlight */}
          <span
            className="absolute inset-0 text-[20rem] md:text-[28rem] font-bold leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(34, 211, 238, 0.7)",
            }}
          >
            F
          </span>
          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(34, 211, 238, 0.05) 40%, transparent 70%)",
            }}
          />
        </div>

        {/* Line 1 - top area */}
        <div
          className="absolute top-20 left-40 w-40 h-px hidden md:block"
          style={{
            background: "linear-gradient(to right, rgba(113, 113, 122, 0.5), transparent)",
            transform: "rotate(-45deg)",
            transformOrigin: "left center",
          }}
        />
        {/* Line 2 - connecting line */}
        <div
          className="absolute top-28 left-48 w-24 h-px hidden md:block"
          style={{
            background: "linear-gradient(to right, rgba(113, 113, 122, 0.4), transparent)",
            transform: "rotate(-45deg)",
            transformOrigin: "left center",
          }}
        />
        {/* Line 3 - middle area */}
        <div
          className="absolute top-44 left-56 w-32 h-px hidden md:block"
          style={{
            background: "linear-gradient(to right, rgba(113, 113, 122, 0.3), transparent)",
            transform: "rotate(-45deg)",
            transformOrigin: "left center",
          }}
        />
        {/* Line 4 - vertical connector */}
        <div
          className="absolute top-24 left-44 w-px h-20 hidden md:block"
          style={{
            background: "linear-gradient(to bottom, rgba(113, 113, 122, 0.5), transparent)",
          }}
        />
        {/* Line 5 - upper right accent */}
        <div
          className="absolute top-16 right-1/3 w-20 h-px hidden md:block"
          style={{
            background: "linear-gradient(to left, rgba(34, 211, 238, 0.2), transparent)",
            transform: "rotate(-45deg)",
            transformOrigin: "right center",
          }}
        />
        {/* Line 6 - corner accent */}
        <div
          className="absolute top-12 left-52 w-16 h-px hidden md:block"
          style={{
            background: "linear-gradient(to right, rgba(113, 113, 122, 0.35), transparent)",
            transform: "rotate(45deg)",
            transformOrigin: "left center",
          }}
        />

        {/* Content container */}
        <div className="relative z-10">
          {/* Top row with icon and badge */}
          <div className="flex items-start justify-between mb-16 md:mb-24">
            {/* Element icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-cyan-900/60 to-cyan-950/80 border border-cyan-700/30 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-semibold text-cyan-400">F</span>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700/50 bg-zinc-900/50">
              <Sparkles className="w-4 h-4 text-zinc-400" />
              <span className="text-sm text-zinc-300">Atomic Number 9 • Halogen</span>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6">
            {/* Element name */}
            <div className="flex items-baseline gap-3">
              <span className="text-5xl md:text-6xl font-light text-white tracking-tight">F</span>
              <span className="text-xl md:text-2xl text-zinc-400 font-medium">[Fluorine]</span>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-lg md:text-xl max-w-md leading-relaxed">
              BioHalo Fluorine
              <br />
              Research Program
            </p>

            {/* CTA Button */}
            <button className="mt-4 flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-700/60 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-600/60 transition-all duration-300 group">
              <span className="text-white font-medium tracking-wide">LEARN MORE</span>
              <div className="flex -space-x-1">
                <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom edge highlight */}
        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      {/* Outer glow effect */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent -z-10 blur-xl" />
    </div>
  )
}
