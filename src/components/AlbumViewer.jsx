import { useEffect, useRef, useState } from 'react'
import { categories } from '../data/projects.js'
import { profile } from '../data/profile.js'
import { imgSrc, thumbSrc, imgSize, pad2 } from '../lib.js'
import { ArrowLeft, ArrowRight, Close, Link } from './Icons.jsx'
import BrandIcon from './BrandIcon.jsx'
import LanguageBar from './LanguageBar.jsx'
import { repoUrl } from '../data/github.js'

const catLabel = (id) => categories.find((c) => c.id === id)?.label ?? id

export default function AlbumViewer({ project, index, onIndex, onClose }) {
  const total = project.images.length
  const img = project.images[index]
  const { w, h } = imgSize(project.id, index)
  const [copied, setCopied] = useState(false)
  const dialogRef = useRef(null)
  const stripRef = useRef(null)
  const touch = useRef(null)

  const go = (d) => onIndex((index + d + total) % total)

  // keyboard: ← → navigate, Esc closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  // lock page scroll + focus the dialog while open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => { document.body.style.overflow = prev }
  }, [])

  // preload neighbours; keep active thumbnail in view
  useEffect(() => {
    ;[1, -1].forEach((d) => { const i = new Image(); i.src = imgSrc(project.id, (index + d + total) % total) })
    stripRef.current?.querySelector('[aria-current="true"]')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [index, project.id, total])

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch { /* clipboard unavailable: ignore */ }
  }

  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label={project.title} ref={dialogRef} tabIndex={-1}>
      <div className="viewer-backdrop" onClick={onClose} />
      <div className="viewer-shell">
        {/* ---------- stage ---------- */}
        <section className="stage">
          <header className="stage-bar">
            <span className="mono fig">FIG {pad2(index + 1)} / {pad2(total)}</span>
            <div className="stage-actions">
              <button className="tool-btn" onClick={copyLink} title="Copy link to this photo">
                <Link /> <span>{copied ? 'Copied' : 'Share'}</span>
              </button>
              <button className="tool-btn icon-only" onClick={onClose} aria-label="Close album (Esc)">
                <Close />
              </button>
            </div>
          </header>

          <div
            className="stage-canvas"
            onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touch.current == null) return
              const dx = e.changedTouches[0].clientX - touch.current
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
              touch.current = null
            }}
          >
            {total > 1 && (
              <button className="nav-arrow prev" onClick={() => go(-1)} aria-label="Previous photo">
                <ArrowLeft />
              </button>
            )}
            <figure className="figure" key={index}>
              <div className="figure-frame" style={{ aspectRatio: `${w} / ${h}`, '--r': w / h }}>
                <img src={imgSrc(project.id, index)} alt={img.caption} width={w} height={h} />
              </div>
            </figure>
            {total > 1 && (
              <button className="nav-arrow next" onClick={() => go(1)} aria-label="Next photo">
                <ArrowRight />
              </button>
            )}
          </div>

          <div className="caption">
            <p>{img.caption}</p>
            {img.credit && (
              <p className="credit mono">
                Photo: <a href={img.credit.url} target="_blank" rel="noreferrer">{img.credit.text}</a>, via Wikimedia Commons
              </p>
            )}
          </div>

          <div className="strip" ref={stripRef}>
            {project.images.map((im, i) => (
              <button
                key={i}
                className="strip-thumb"
                aria-current={i === index}
                aria-label={`Photo ${i + 1}: ${im.caption}`}
                onClick={() => onIndex(i)}
              >
                <img src={thumbSrc(project.id, i)} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </section>

        {/* ---------- spec sheet ---------- */}
        <aside className="sheet-panel">
          <ul className="chips">
            <li className="chip">{catLabel(project.category)}</li>
          </ul>
          <h2>{project.title}</h2>
          <p className="panel-meta mono">{project.tool} · {project.layers}</p>
          <p className="panel-summary">{project.summary}</p>

          {project.repo && (
            <div className="repo-box">
              <a className="btn btn-ghost block" href={repoUrl(project.repo)} target="_blank" rel="noreferrer">
                <BrandIcon item={{ icon: 'github', name: 'GitHub' }} size={18} /> View code on GitHub
              </a>
              <LanguageBar repo={project.repo} max={4} />
            </div>
          )}

          <h3 className="panel-h mono">Spec sheet</h3>
          <dl className="specs">
            {project.specs.map(([k, v]) => (
              <div key={k}>
                <dt className="mono">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <h3 className="panel-h mono">{project.notesTitle || 'Engineering notes'}</h3>
          <ul className="notes">
            {project.contributions.map((c) => <li key={c}>{c}</li>)}
          </ul>

          {project.status && <p className="status mono">● {project.status}</p>}

          <ul className="tags">
            {project.tags.map((t) => <li key={t}>{t}</li>)}
          </ul>

          <a className="btn btn-copper block" href={profile.upwork} target="_blank" rel="noreferrer">
            {project.repo ? 'Discuss a similar project' : 'Discuss a similar board'} <ArrowRight />
          </a>
          <p className="kbd-hint mono">← → navigate · Esc close</p>
        </aside>
      </div>
    </div>
  )
}
