interface LineProps {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
}

export const Line: React.FC<LineProps> = ({
  width = 809,
  height = 613,
  stroke = "#D9D9D9",
  strokeWidth = 1.4,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.368042 611.546L138.947 525.873C177.343 502.135 196.042 456.339 185.233 412.511L177.974 383.076C166.243 335.507 189.303 286.203 233.331 264.713L249.849 256.65C271.823 245.925 289.316 227.8 299.254 205.459L313.182 174.148C332.663 130.355 379.55 105.547 426.715 114.078L557.96 137.816C603.041 145.97 648.149 123.664 669.034 82.8879L682.142 57.2963C703.293 16.0017 749.239 -6.28809 794.764 2.65996L862.868 16.0459"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};
