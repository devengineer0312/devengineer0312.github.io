import { experience, education } from '../data/profile.js'

// Company logo (public/logos/<file>) or, when no official logo is available,
// a lettered badge in the company's colour.
function CompanyMark({ item, name }) {
  if (item.logo) {
    return (
      <span className="co-mark">
        <img src={`${process.env.PUBLIC_URL}/logos/${item.logo}`} alt={`${name} logo`} loading="lazy" />
      </span>
    )
  }
  return (
    <span className="co-mark co-badge" style={{ '--c': item.color || 'var(--accent)' }} aria-hidden="true">
      {item.badge}
    </span>
  )
}

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="kicker mono">03 · Experience</p>
            <h2>12 years building production hardware</h2>
          </div>
        </header>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.company} className="tl-item">
              <div className="tl-when mono">{e.period}</div>
              <div className="tl-body">
                <div className="tl-head">
                  <CompanyMark item={e} name={e.company} />
                  <div>
                    <h3>{e.role} <span className="at">· {e.company}</span></h3>
                    <p className="tl-place mono">{e.place}</p>
                  </div>
                </div>
                <ul>
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
          <li className="tl-item tl-edu">
            <div className="tl-when mono">{education.period}</div>
            <div className="tl-body">
              <div className="tl-head">
                <CompanyMark item={education} name={education.school} />
                <div>
                  <h3>{education.degree} <span className="at">· {education.school}</span></h3>
                  <p className="tl-place mono">{education.place}</p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
