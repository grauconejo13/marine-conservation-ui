const palettes = {
  'little-penguin': ['#d8f3f0', '#0f3d46'],
  'green-sea-turtle': ['#dff0d1', '#2f6d58'],
  'manta-ray': ['#d9edf1', '#24566a'],
  'humpback-whale': ['#dce7f2', '#27465d'],
}

export default function MarineIllustration({ id, name }) {
  const [light, dark] = palettes[id] || ['#d8f3f0', '#0f3d46']

  return (
    <svg className="marine-illustration" viewBox="0 0 320 180" role="img" aria-label={`Original illustration of ${name}`}>
      <defs>
        <linearGradient id={`${id}-water`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={dark} />
          <stop offset="100%" stopColor="#0d7d86" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" rx="24" fill={`url(#${id}-water)`} />
      <circle cx="254" cy="34" r="54" fill={light} opacity="0.22" />
      <path d="M0 136 C65 118 107 154 166 138 C222 123 260 151 320 130 L320 180 L0 180 Z" fill={light} opacity="0.15" />

      {id === 'little-penguin' && (
        <g transform="translate(126 35)">
          <ellipse cx="38" cy="58" rx="30" ry="50" fill="#f7fbfb" />
          <ellipse cx="38" cy="54" rx="27" ry="46" fill={dark} />
          <ellipse cx="40" cy="62" rx="17" ry="34" fill="#f7fbfb" />
          <circle cx="29" cy="28" r="3" fill="#f7fbfb" />
          <path d="M58 32 L76 37 L59 41 Z" fill="#f1b96b" />
          <path d="M15 58 L-2 78 L18 72 Z" fill={dark} />
          <path d="M62 58 L79 78 L59 72 Z" fill={dark} />
        </g>
      )}

      {id === 'green-sea-turtle' && (
        <g transform="translate(74 42)">
          <ellipse cx="84" cy="45" rx="57" ry="39" fill={light} opacity="0.95" />
          <ellipse cx="84" cy="45" rx="42" ry="29" fill={dark} opacity="0.75" />
          <circle cx="151" cy="43" r="15" fill={light} />
          <path d="M42 23 C11 6 1 16 27 37 Z" fill={light} />
          <path d="M42 66 C11 85 1 75 28 54 Z" fill={light} />
          <path d="M118 22 C142 4 151 11 130 36 Z" fill={light} />
          <path d="M118 68 C143 84 153 75 131 53 Z" fill={light} />
        </g>
      )}

      {id === 'manta-ray' && (
        <g transform="translate(56 45)">
          <path d="M104 36 C69 6 24 5 4 19 C35 38 47 64 65 77 C79 88 95 81 104 68 C113 81 129 88 143 77 C161 64 173 38 204 19 C184 5 139 6 104 36 Z" fill={light} />
          <path d="M104 38 C101 67 102 90 111 108" stroke={light} strokeWidth="8" strokeLinecap="round" fill="none" />
          <circle cx="89" cy="43" r="3" fill={dark} />
          <circle cx="119" cy="43" r="3" fill={dark} />
        </g>
      )}

      {id === 'humpback-whale' && (
        <g transform="translate(42 53)">
          <path d="M20 48 C50 14 119 6 175 27 C194 34 210 33 228 21 C223 38 213 47 198 53 C213 61 223 71 228 88 C208 74 192 72 173 80 C118 101 53 89 20 59 C7 47 7 42 20 48 Z" fill={light} />
          <path d="M76 69 C65 91 46 100 32 88" stroke={light} strokeWidth="9" strokeLinecap="round" fill="none" />
          <circle cx="174" cy="42" r="3" fill={dark} />
        </g>
      )}
    </svg>
  )
}
