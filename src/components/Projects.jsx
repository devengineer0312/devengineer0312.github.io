import { useMemo, useState } from 'react'
import { categories, projects } from '../data/projects.js'
import { thumbSrc, imgSize } from '../lib.js'
import { Images, Search } from './Icons.jsx'
import BrandIcon from './BrandIcon.jsx'
import { githubProfile, githubUser } from '../data/github.js'

const ghIcon = { icon: 'github', name: 'GitHub' }

function AlbumCard({ project, onOpen, index }) {
  const count = project.images.length
  const { w, h } = imgSize(project.id, 0)
  return (
    <article className={`album ${project.featured ? 'is-featured' : ''}`} style={{ '--i': index }}>
      <button className="album-hit" onClick={() => onOpen(project, 0)} aria-label={`Open album: ${project.title} (${count} images)`}>
        <div className="album-stack">
          {/* the two "sheets" behind the cover use the album's next photos */}
          {count > 2 && <img className="sheet sheet-2" src={thumbSrc(project.id, 2)} alt="" loading="lazy" />}
          {count > 1 && <img className="sheet sheet-1" src={thumbSrc(project.id, 1)} alt="" loading="lazy" />}
          <div className="cover">
            <img src={thumbSrc(project.id, 0)} alt={project.images[0].caption} width={w} height={h} loading="lazy" />
            {project.featured && <span className="ribbon mono">Featured</span>}
            {project.repo && <span className="gh-badge mono"><BrandIcon item={ghIcon} size={14} /> GitHub</span>}
            {project.images[0].credit && <span className="ref-badge mono">Reference photo</span>}
            <span className="count mono"><Images /> {count}</span>
          </div>
        </div>
        <div className="album-body">
          <p className="album-meta mono">
            <span>{project.tool}</span>
            <span className="sep">/</span>
            <span>{project.layers}</span>
          </p>
          <h3>{project.title}</h3>
          <p className="album-short">{project.short}</p>
          <ul className="tags">
            {project.tags.slice(0, 4).map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </button>
      {/* quick-jump strip: open the album at a specific photo */}
      <div className="album-strip" aria-label="Jump to photo">
        {project.images.slice(0, 5).map((img, i) => (
          <button key={i} onClick={() => onOpen(project, i)} aria-label={`Open photo ${i + 1}: ${img.caption}`}>
            <img src={thumbSrc(project.id, i)} alt="" loading="lazy" />
          </button>
        ))}
        {count > 5 && <span className="more mono">+{count - 5}</span>}
      </div>
    </article>
  )
}

export default function Projects({ onOpen }) {
  const [cat, setCat] = useState('all')
  const [q, setQ] = useState('')

  const counts = useMemo(() => {
    const c = { all: projects.length }
    projects.forEach((p) => (c[p.category] = (c[p.category] || 0) + 1))
    return c
  }, [])

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return projects.filter((p) => {
      if (cat !== 'all' && p.category !== cat) return false
      if (!needle) return true
      const hay = [p.title, p.short, p.tool, p.layers, ...p.tags, ...p.specs.flat()].join(' ').toLowerCase()
      return hay.includes(needle)
    })
  }, [cat, q])

  // One continuous grid (no category grouping): featured albums first,
  // then the rest in data order (hardware builds, then GitHub projects).
  const ordered = [...list.filter((p) => p.featured), ...list.filter((p) => !p.featured)]


  return (
    <section className="section" id="projects">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="kicker mono">02 · Portfolio</p>
            <h2>Project albums</h2>
          </div>
          <div className="projects-tools">
          <a className="btn btn-ghost btn-sm" href={githubProfile} target="_blank" rel="noreferrer">
            <BrandIcon item={ghIcon} size={16} /> github.com/{githubUser}
          </a>
          <label className="search">
            <Search />
            <input
              type="search"
              placeholder="Search parts, tools, tech… e.g. BGA, ESP32"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
          </div>
        </header>

        <div className="filters" role="tablist" aria-label="Filter projects by category">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={cat === c.id}
              className={`filter ${cat === c.id ? 'is-active' : ''}`}
              onClick={() => setCat(c.id)}
            >
              {c.label}
              <span className="filter-count mono">{counts[c.id] || 0}</span>
            </button>
          ))}
        </div>

        {list.length ? (
          <div className="album-grid" key={cat + q}>
            {ordered.map((p, i) => <AlbumCard key={p.id} project={p} onOpen={onOpen} index={i} />)}
          </div>
        ) : (
          <p className="empty">
            No projects match “{q}”.{' '}
            <button className="linkish" onClick={() => { setQ(''); setCat('all') }}>Clear filters</button>
          </p>
        )}
      </div>
    </section>
  )
}
