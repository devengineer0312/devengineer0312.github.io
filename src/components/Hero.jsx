import { useState } from 'react'
import { profile } from '../data/profile.js'
import { ArrowRight, Briefcase, Chip, Layers, Cube, Board, Antenna } from './Icons.jsx'

const statIcons = { chip: Chip, layers: Layers, cube: Cube, board: Board, antenna: Antenna }

// Subtle PCB traces behind the hero.
function Traces() {
  return (
    <svg className="traces" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="fade" x1="0" x2="1">
          <stop offset="0" stopColor="var(--copper)" stopOpacity="0" />
          <stop offset=".45" stopColor="var(--copper)" stopOpacity=".55" />
          <stop offset="1" stopColor="var(--copper)" stopOpacity=".1" />
        </linearGradient>
      </defs>
      <g stroke="url(#fade)" strokeWidth="1.4" fill="none">
        <path d="M0 120 H260 L300 160 H560 L600 120 H1200" />
        <path d="M0 520 H180 L240 460 H480 L520 420 H760 L800 460 H1200" />
        <path d="M1040 640 V560 L1000 520 V380 L1040 340 H1200" />
      </g>
      <path className="pulse" d="M0 120 H260 L300 160 H560 L600 120 H1200" />
      <path className="pulse pulse-2" d="M0 520 H180 L240 460 H480 L520 420 H760 L800 460 H1200" />
    </svg>
  )
}

// Clean portrait card. Falls back to initials until public/profile.jpg exists.
function Portrait() {
  const [failed, setFailed] = useState(false)
  const src = `${process.env.PUBLIC_URL}/${profile.photo}`
  return (
    <figure className="portrait">
      <div className="portrait-frame">
        {!failed ? (
          <img src={src} alt={`${profile.name}, ${profile.title}`} onError={() => setFailed(true)} />
        ) : (
          <div className="portrait-fallback" role="img" aria-label={profile.name}>
            <span>{profile.initials}</span>
          </div>
        )}
      </div>
      <figcaption className="portrait-caption">
        <strong>{profile.name}</strong>
        <span>{profile.title}</span>
      </figcaption>
    </figure>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Traces />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Hi, I’m {profile.name} · available for projects
          </p>
          <h1>
            {profile.title}
            <span className="h1-role">{profile.role}</span>
          </h1>
          <p className="h1-sub">{profile.headline}</p>
          <p className="lede">{profile.pitch}</p>

          <div className="hero-cta">
            <a className="btn btn-copper" href="#projects">
              View my projects <ArrowRight />
            </a>
            <a className="btn btn-ghost" href={profile.upwork} target="_blank" rel="noreferrer">
              <Briefcase /> Hire me on Upwork
            </a>
          </div>
        </div>

        <Portrait />
      </div>

      <div className="container">
        <ul className="highlights" aria-label="Highlights">
          {profile.stats.map((s) => {
            const Icon = statIcons[s.icon]
            return (
              <li key={s.label} className="highlight">
                <span className="highlight-icon"><Icon /></span>
                <span>
                  <strong>{s.value}</strong>
                  <small>{s.label}</small>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
