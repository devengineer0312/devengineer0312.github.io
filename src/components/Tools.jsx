import { toolGroups, platforms, interfaces } from '../data/profile.js'
import BrandIcon from './BrandIcon.jsx'

export default function Tools() {
  return (
    <section className="section" id="tools">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="kicker mono">04 · Tools</p>
            <h2>The software and tools I work with</h2>
            <p className="section-lede">
              Professional ECAD and MCAD tools for design, simulation tools for checking it, and the platforms the boards are built around.
            </p>
          </div>
        </header>

        <div className="tool-groups">
          {toolGroups.map((g) => (
            <section key={g.title} className="tool-group">
              <header>
                <h3>{g.title}</h3>
                <p>{g.note}</p>
              </header>
              <ul className="tool-list">
                {g.tools.map((t) => (
                  <li key={t.name} className="tool">
                    <span className="tool-logo"><BrandIcon item={t} size={30} /></span>
                    <span className="tool-text">
                      <strong>{t.name}</strong>
                      <small>{t.use}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="platforms">
          <h3 className="sub-h">Platforms I design with</h3>
          <ul className="platform-list">
            {platforms.map((p) => (
              <li key={p.name} className="platform">
                <BrandIcon item={p} size={22} />
                <span>{p.name}</span>
              </li>
            ))}
          </ul>
          <ul className="chips interface-list" aria-label="Interfaces">
            {interfaces.map((i) => <li key={i} className="chip chip-quiet">{i}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
