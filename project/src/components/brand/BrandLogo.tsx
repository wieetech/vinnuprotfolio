type BrandLogoProps = {
  className?: string;
  title?: string;
};

export function BrandLogo({
  className = 'h-auto w-full',
  title = 'The Vinnu Portfolio logo',
}: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 280 280"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M133 31c48-6 100 15 128 61c11 17 18 37 20 58"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M31 163c6 31 22 58 45 79c20 17 45 29 71 34"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      <text
        x="140"
        y="110"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Brush Script MT', 'Segoe Script', cursive"
        fontSize="34"
        fontStyle="italic"
      >
        The
      </text>
      <text
        x="140"
        y="163"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="42"
        fontWeight="600"
        letterSpacing="10"
      >
        VINNU
      </text>
      <text
        x="140"
        y="193"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="18"
        fontWeight="500"
        letterSpacing="6"
      >
        PORTFOLIO
      </text>
    </svg>
  );
}
