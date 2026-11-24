import { languageColors } from '../data/github.js'
import langData from '../data/github-languages.json'

// Coloured language breakdown for a GitHub repository (GitHub-style).
export default function LanguageBar({ repo, max = 3 }) {
  const languages = langData[repo]?.languages
  if (!languages?.length) return null
  const color = (n) => languageColors[n] || '#999'
  return (
    <div className="langs">
      <div className="lang-bar" aria-hidden="true">
        {languages.map((l) => <span key={l.name} style={{ width: `${l.pct}%`, background: color(l.name) }} />)}
      </div>
      <ul className="lang-legend">
        {languages.slice(0, max).map((l) => (
          <li key={l.name}>
            <i style={{ background: color(l.name) }} />
            {l.name} <span>{l.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
