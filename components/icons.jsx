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
