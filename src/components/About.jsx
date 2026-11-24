import { about, profile } from '../data/profile.js'
import { ArrowRight } from './Icons.jsx'

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <p className="kicker mono">01 · About me</p>
            <h2>Electronics and mechanical hardware, designed together.</h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className={`about-p ${i === 0 ? 'lead' : ''}`}>{p}</p>
            ))}
            <div className="about-cta">
              <a className="btn btn-copper" href={profile.upwork} target="_blank" rel="noreferrer">Work with me on Upwork <ArrowRight /></a>
              <a className="btn btn-ghost" href="#projects">See my work</a>
            </div>
          </div>
          <aside className="facts" aria-label="Quick facts">
            <p className="facts-head mono">AT A GLANCE</p>
            <dl>
              {about.facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="mono">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <h3 className="sub-h">What I do</h3>
        <div className="services">
          {about.services.map((s, i) => (
            <article key={s.title} className="service">
              <span className="service-n mono">{String(i + 1).padStart(2, '0')}</span>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
