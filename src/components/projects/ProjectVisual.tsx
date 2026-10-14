/** Custom SVG key art per project. Abstract and original; no screenshots are faked. */
export function ProjectVisual({ slug, className }: { slug: string; className?: string }) {
  const id = `v-${slug}`;
  const common = {
    viewBox: "0 0 400 240",
    preserveAspectRatio: "xMidYMid slice" as const,
    className,
    role: "img" as const,
    "aria-hidden": true,
  };

  switch (slug) {
    case "rafiki":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1b3a6b" />
              <stop offset="0.6" stopColor="#e0865a" />
              <stop offset="1" stopColor="#f4c98a" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill={`url(#${id}-sky)`} />
          <circle cx="290" cy="130" r="34" fill="#ffe3a8" opacity="0.9" />
          <path d="M0 170 L70 110 L120 150 L190 90 L260 160 L320 120 L400 175 V240 H0Z" fill="#2a2450" opacity="0.85" />
          <path d="M0 200 L90 150 L160 190 L240 140 L330 195 L400 165 V240 H0Z" fill="#14122c" />
          <path d="M40 215 C120 150 180 205 250 150 S340 120 360 95" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="5 6" opacity="0.8" />
          <circle cx="40" cy="215" r="5" fill="#fff" />
          <path d="M360 70c-9 0-15 7-15 15 0 11 15 25 15 25s15-14 15-25c0-8-6-15-15-15Z" fill="#7c6cff" />
          <circle cx="360" cy="85" r="5" fill="#fff" />
          <path d="M150 55l40-12-8 14 22 4-52 10 6-10Z" fill="#fff" opacity="0.85" />
        </svg>
      );

    case "attack-on-titan-utopia":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2b0d12" />
              <stop offset="1" stopColor="#a8432a" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill={`url(#${id}-sky)`} />
          <circle cx="300" cy="80" r="40" fill="#ffb27a" opacity="0.35" />
          <rect y="120" width="400" height="120" fill="#1a0e10" />
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 11 }).map((__, c) => (
              <rect
                key={`${r}-${c}`}
                x={c * 38 - (r % 2) * 19}
                y={120 + r * 24}
                width="36"
                height="22"
                fill="#2a1a1c"
                stroke="#0e0708"
              />
            )),
          )}
          <path d="M120 40 L280 190 M280 40 L120 190" stroke="#e6e6f0" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <path d="M120 40 L280 190 M280 40 L120 190" stroke="#c0392b" strokeWidth="1" opacity="0.8" />
        </svg>
      );

    case "the-last-of-us-legacy":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#06100e" />
              <stop offset="1" stopColor="#1f3a2c" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill={`url(#${id}-sky)`} />
          <circle cx="90" cy="70" r="26" fill="#d6e6c2" opacity="0.18" />
          <path d="M0 240V140l26-4V96h30v30l20-6v-48h38v60l18-4V70h34v72l24-8v-34h40v46l22-6V84h32v60l34-10V240Z" fill="#0b1512" />
          <path d="M0 240V190l40-12 30 14 60-22 50 18 70-20 60 16 90-18V240Z" fill="#0f1d17" />
          {Array.from({ length: 14 }).map((_, i) => (
            <circle
              key={i}
              className="drift"
              cx={20 + ((i * 29) % 360)}
              cy={170 + ((i * 17) % 60)}
              r={1 + (i % 3) * 0.7}
              fill="#cfe8a8"
              style={{ animationDelay: `${(i * 0.45) % 6}s` }}
            />
          ))}
        </svg>
      );

    case "unity-endless-runner":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0a0a24" />
              <stop offset="1" stopColor="#3b1d7a" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill={`url(#${id}-sky)`} />
          <circle cx="200" cy="96" r="30" fill="#ff6fb1" opacity="0.5" />
          <path d="M0 110h400V240H0Z" fill="#0d0b22" />
          {[-3, -2, -1, 0, 1, 2, 3].map((n) => (
            <line key={n} x1="200" y1="110" x2={200 + n * 120} y2="240" stroke="#7c6cff" strokeWidth="1.5" opacity="0.8" />
          ))}
          {[125, 142, 166, 200].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#7c6cff" strokeWidth="1" opacity="0.4" />
          ))}
          <rect x="150" y="150" width="34" height="34" fill="#4f8cff" opacity="0.9" />
          <rect x="226" y="132" width="20" height="20" fill="#ff6fb1" opacity="0.9" />
          <path d="M194 205l12-26 12 26Z" fill="#fff" />
        </svg>
      );

    case "unity-action-rpg":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id={`${id}-glow`} cx="0.5" cy="0.55" r="0.6">
              <stop offset="0" stopColor="#ff5a2a" stopOpacity="0.55" />
              <stop offset="1" stopColor="#12060a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="240" fill="#12060a" />
          <rect width="400" height="240" fill={`url(#${id}-glow)`} />
          <g stroke="#5a2a22" strokeWidth="1" opacity="0.8">
            {Array.from({ length: 9 }).map((_, i) => (
              <path key={i} d={`M${-40 + i * 60} 240 L${120 + i * 20} 120`} />
            ))}
            {[130, 150, 178, 215].map((y) => (
              <line key={y} x1="0" y1={y} x2="400" y2={y} />
            ))}
          </g>
          <ellipse cx="200" cy="170" rx="70" ry="22" fill="none" stroke="#ff7a3c" strokeWidth="2" />
          <ellipse cx="200" cy="170" rx="46" ry="14" fill="none" stroke="#ffb27a" strokeWidth="1" opacity="0.7" />
          <path d="M200 120l9 38h-18Z" fill="#ffd9b0" />
          <circle cx="40" cy="200" r="22" fill="#7a0f1c" stroke="#ff4a5e" strokeWidth="2" />
          <circle cx="360" cy="200" r="22" fill="#10285e" stroke="#4f8cff" strokeWidth="2" />
        </svg>
      );

    case "temple-run-3d":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0d2a1f" />
              <stop offset="1" stopColor="#6f8a3a" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill={`url(#${id}-sky)`} />
          <path d="M120 150V70a80 80 0 0 1 160 0v80Z" fill="#0a1a12" />
          <path d="M138 150V74a62 62 0 0 1 124 0v76Z" fill="#cdbb7a" opacity="0.35" />
          <path d="M60 240L170 150h60L340 240Z" fill="#5a4a2a" />
          <path d="M60 240L170 150h60L340 240Z" fill="none" stroke="#2c2312" strokeWidth="2" />
          {[170, 190, 212].map((y) => (
            <line key={y} x1={200 - (y - 150) * 1.4 - 30} y1={y} x2={200 + (y - 150) * 1.4 + 30} y2={y} stroke="#2c2312" />
          ))}
          {[0, 1, 2, 3].map((n) => (
            <circle key={n} cx="200" cy={166 + n * 18} r={3 + n} fill="#ffd54a" />
          ))}
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <rect width="400" height="240" fill="#161621" />
        </svg>
      );
  }
}
