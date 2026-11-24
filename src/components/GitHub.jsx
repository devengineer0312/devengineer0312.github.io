import { repos, repoGroups, githubProfile, githubUser, languageColors } from '../data/github.js'
import langData from '../data/github-languages.json'
import BrandIcon from './BrandIcon.jsx'
import { ArrowRight } from './Icons.jsx'

const ghIcon = { icon: 'github', name: 'GitHub' }

function LanguageBar({ languages }) {
  if (!languages?.length) return null
  return (
    <div className="langs">
      <div className="lang-bar" aria-hidden="true">
        {languages.map((l) => (
          <span key={l.name} style={{ width: `${l.pct}%`, background: languageColors[l.name] || '#999' }} />
        ))}
      </div>
      <ul className="lang-legend">
        {languages.slice(0, 3).map((l) => (
          <li key={l.name}>
            <i style={{ background: languageColors[l.name] || '#999' }} />
            {l.name} <span>{l.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RepoCard({ repo }) {
  const url = `${githubProfile}/${repo.name}`
  const meta = langData[repo.name]
  return (
    <a className="repo" href={url} target="_blank" rel="noreferrer">
      <p className="repo-name mono">
        <BrandIcon item={ghIcon} size={16} />
        <span>{githubUser}/<strong>{repo.name}</strong></span>
      </p>
      <h4>{repo.title}</h4>
      <p className="repo-desc">{repo.description}</p>
      <ul className="tags">
        {repo.tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <LanguageBar languages={meta?.languages} />
      <span className="repo-link">View on GitHub <ArrowRight /></span>
    </a>
  )
}

export default function GitHub() {
  return (
    <section className="section section-alt" id="github">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="kicker mono">03 · GitHub</p>
            <h2>Firmware & code on GitHub</h2>
            <p className="section-lede">
              {repos.length} public repositories: embedded firmware, FPGA HDL and IoT platforms that sit alongside the hardware above.
            </p>
          </div>
          <a className="btn btn-ghost" href={githubProfile} target="_blank" rel="noreferrer">
            <BrandIcon item={ghIcon} size={18} /> github.com/{githubUser}
          </a>
        </header>

        <div className="album-groups">
          {repoGroups.map((g) => {
            const items = repos.filter((r) => r.group === g.id)
            if (!items.length) return null
            return (
              <section key={g.id} className="album-group" aria-labelledby={`repo-${g.id}`}>
                <header className="group-head">
                  <h3 id={`repo-${g.id}`}>{g.label}</h3>
                  <span className="group-count mono">{items.length} {items.length === 1 ? 'repository' : 'repositories'}</span>
                  <p>{g.blurb}</p>
                </header>
                <div className="repo-grid">
                  {items.map((r) => <RepoCard key={r.name} repo={r} />)}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
