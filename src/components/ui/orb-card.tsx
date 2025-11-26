import * as React from "react"
import { cn } from "@/lib/utils"
import Orb from "@/components/Orb"

export interface OrbCardProps extends React.HTMLAttributes<HTMLDivElement> {
  orbPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  orbHue?: number
  orbHoverIntensity?: number
  orbSize?: number
  orbRimThickness?: number
  children: React.ReactNode
}

const OrbCard = React.forwardRef<HTMLDivElement, OrbCardProps>(
  (
    {
      className,
      orbPosition = "top-right",
      orbHue = 0,
      orbHoverIntensity = 0.3,
      orbSize = 200,
      orbRimThickness = 1.15,
      children,
      ...props
    },
    ref
  ) => {
    const orbPositionClasses = {
      "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
      "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
      "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
      "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-visible rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-xl shadow-2xl",
          "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-50 before:pointer-events-none",
          className
        )}
        {...props}
      >
        {/* Background decorative layer - behind orb */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />
        </div>

        {/* Orb - positioned at corner, behind content but in front of background */}
        <div
          className={cn(
            "absolute z-10 pointer-events-none blur-lg",
            orbPositionClasses[orbPosition]
          )}
          style={{ width: `${orbSize}px`, height: `${orbSize}px` }}
        >
          <Orb
            hue={orbHue}
            hoverIntensity={orbHoverIntensity}
            rotateOnHover={true}
            forceHoverState={false}
            rimThickness={orbRimThickness}
          />
        </div>

        {/* Content layer - in front of orb */}
        <div className="relative z-20 p-8">{children}</div>

        {/* Decorative border glow - behind content, in front of orb */}
        <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-[15]" />
      </div>
    )
  }
)

OrbCard.displayName = "OrbCard"

export { OrbCard }

