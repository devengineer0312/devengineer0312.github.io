// Small inline stroke icons (no icon-font dependency).
const S = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  />
)

export const ArrowRight = () => (
  <S><path d="M5 12h14M13 6l6 6-6 6" /></S>
)
export const ArrowLeft = () => (
  <S><path d="M19 12H5M11 6l-6 6 6 6" /></S>
)
export const Close = () => (
  <S><path d="M6 6l12 12M18 6L6 18" /></S>
)
export const Images = () => (
  <S><rect x="3" y="6" width="14" height="14" rx="2" /><path d="M7 3h12a2 2 0 0 1 2 2v12" /><path d="M3 16l4-4 4 4 2-2 4 4" /></S>
)
export const Search = () => (
  <S><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></S>
)
export const Layers = () => (
  <S><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /><path d="M3 17.5l9 5 9-5" /></S>
)
export const Cube = () => (
  <S><path d="M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5L12 2.5z" /><path d="M3.5 7.25L12 12l8.5-4.75M12 12v9.5" /></S>
)
export const Board = () => (
  <S><rect x="3" y="4" width="18" height="16" rx="2" /><rect x="8" y="9" width="5" height="5" rx=".5" /><path d="M13 11.5h4M17 11.5V8M6 17h3M16 17h2" /><circle cx="17" cy="7.5" r=".8" /><circle cx="6" cy="7" r=".8" /></S>
)
export const Briefcase = () => (
  <S><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></S>
)
export const Link = () => (
  <S><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" /><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" /></S>
)
export const Chip = () => (
  <S><rect x="6" y="6" width="12" height="12" rx="1.5" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></S>
)
