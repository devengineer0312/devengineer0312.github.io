import { brandIcons } from '../data/brandIcons.js'

// Renders a real application / vendor logo:
//   icon  → vector logo from brandIcons.js (Simple Icons)
//   img   → raster icon from public/icons
//   badge → lettered badge in the brand colour (when no logo is available)
export default function BrandIcon({ item, size = 28 }) {
  if (item.icon && brandIcons[item.icon]) {
    const b = brandIcons[item.icon]
    return (
      <svg className="brand-icon" width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={item.name}>
        <path d={b.path} fill={item.color || b.hex} />
      </svg>
    )
  }
  if (item.img) {
    return (
      <img
        className="brand-icon"
        src={`${process.env.PUBLIC_URL}/icons/${item.img}`}
        alt={item.name}
        width={size}
        height={size}
        loading="lazy"
      />
    )
  }
  return (
    <span
      className="brand-badge"
      style={{ '--bc': item.color || '#55645d', fontSize: item.badge?.length > 2 ? size * 0.3 : size * 0.45, width: size, height: size }}
      role="img"
      aria-label={item.name}
    >
      {item.badge}
    </span>
  )
}
