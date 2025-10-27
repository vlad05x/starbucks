import React from "react";

interface GlowCircleProps {
  size?: number;
  className?: string;
  gradient?: string;
  blur?: number;
}

export const GlowCircle: React.FC<GlowCircleProps> = ({
  size = 200,
  className = "",
  gradient = "rgba(255,255,255,0.04)",
  blur = 156,
}) => (
  <div
    className={`absolute rounded-full ${className}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: gradient,
      filter: `blur(${blur}px)`,
    }}
  />
);
