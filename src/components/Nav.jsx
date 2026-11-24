import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Tools', '#tools'],
  ['Process', '#process'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Back to top">
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-text">
            <strong>{profile.name}</strong>
            <span className="mono">{profile.title}</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-copper btn-sm" href={profile.upwork} target="_blank" rel="noreferrer">
          Hire on Upwork
        </a>
      </div>
    </header>
  )
}
