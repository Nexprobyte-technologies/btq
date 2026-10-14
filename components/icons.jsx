export const ArrowDiagonal = ({ size = 12 }) => (
  <svg viewBox="0 0 8 8" fill="none" width={size} height={size} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.481464 0L7.12325 0.575372L6.54788 7.21717L5.32486 7.11121L5.71936 2.55721L0.789885 6.70069L0 5.76098L4.92948 1.61751L0.375518 1.223L0.481464 0Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowRight = ({ size = 16 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Chevron = ({ size = 16, dir = "right" }) => (
  <svg
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="none"
    aria-hidden="true"
    style={{ transform: dir === "left" ? "rotate(180deg)" : dir === "down" ? "rotate(90deg)" : "none" }}
  >
    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Search = ({ size = 18 }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" />
    <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const User = ({ size = 18 }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} fill="none" aria-hidden="true">
    <circle cx="10" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M3.8 17c.7-3.2 3.2-4.7 6.2-4.7s5.5 1.5 6.2 4.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const Bag = ({ size = 18 }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M4.5 6.5h11l-.9 10H5.4l-.9-10Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7.4 8.2V5.8a2.6 2.6 0 0 1 5.2 0v2.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const Eye = ({ size = 16 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M2 8.667C4.4 3.334 11.6 3.334 14 8.667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M8 11.333c1.333 0 2.4-1 2.4-2.266 0-1.267-1.067-2.267-2.4-2.267s-2.4 1-2.4 2.266c0 1.267 1.067 2.267 2.4 2.267Z"
      stroke="currentColor"
      strokeWidth="1.25"
    />
  </svg>
);

export const Close = ({ size = 18 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Up = ({ size = 16 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Instagram = ({ size = 16 }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} fill="none" aria-hidden="true">
    <rect x="3" y="3" width="14" height="14" rx="4.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="10" cy="10" r="3.4" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="14.2" cy="5.9" r="1" fill="currentColor" />
  </svg>
);

export const Facebook = ({ size = 16 }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M11.2 17v-6h2l.3-2.3h-2.3V7.2c0-.7.2-1.1 1.1-1.1h1.2V4.1c-.2 0-.9-.1-1.8-.1-1.8 0-3 1.1-3 3.1v1.6H6.7V11h2.1v6h2.4Z" />
  </svg>
);

export const X = ({ size = 16 }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M3 3h3.4l3.3 4.4L13.4 3H17l-5.2 6.3L17.4 17H14l-3.6-4.8L6.3 17H3l5.5-6.7L3 3Z" />
  </svg>
);

export const Youtube = ({ size = 16 }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M16.8 6.7c-.2-.8-.7-1.3-1.5-1.5C14 5 10 5 10 5s-4 0-5.3.2c-.8.2-1.3.7-1.5 1.5C3 8 3 10 3 10s0 2 .2 3.3c.2.8.7 1.3 1.5 1.5C6 15 10 15 10 15s4 0 5.3-.2c.8-.2 1.3-.7 1.5-1.5.2-1.3.2-3.3.2-3.3s0-2-.2-3.3ZM8.6 12.3V7.7l3.7 2.3-3.7 2.3Z" />
  </svg>
);

export const Heart = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const HeartFilled = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#c91235" stroke="#c91235" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const Check = ({ size = 16 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3.5 8.5l3 3 6-6" />
  </svg>
);

export const Filter = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

export const Trash = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export const Minus = ({ size = 14 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <line x1="3" y1="8" x2="13" y2="8" />
  </svg>
);

export const Plus = ({ size = 14 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <line x1="8" y1="3" x2="8" y2="13" />
    <line x1="3" y1="8" x2="13" y2="8" />
  </svg>
);

export const Truck = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

export const Shield = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const Star = ({ size = 14, filled = true }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const Sparkles = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export const WhatsApp = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const WhatsAppFilled = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.2 1.25-1.95 1.41-.51.11-1.18.2-3.43-.73-2.87-1.19-4.73-4.1-4.87-4.29-.14-.19-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.26-.29.58-.36.77-.36.2 0 .39 0 .56.01.18.01.42-.07.65.49.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.79 1.3 1.7 2.11 1.17 1.04 2.16 1.37 2.47 1.52.31.15.49.13.67-.08.18-.21.77-.9.98-1.21.2-.31.41-.26.69-.15.28.1 1.77.83 2.07.98.3.15.5.23.57.36.07.13.07.75-.17 1.43z" />
  </svg>
);

export const Phone = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Mail = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const MapPin = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

