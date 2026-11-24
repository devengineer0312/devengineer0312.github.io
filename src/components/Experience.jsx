import { experience, education } from '../data/profile.js'

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
                <h3>{e.role} <span className="at">· {e.company}</span></h3>
                <p className="tl-place mono">{e.place}</p>
                <ul>
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
          <li className="tl-item tl-edu">
            <div className="tl-when mono">{education.period}</div>
            <div className="tl-body">
              <h3>{education.degree} <span className="at">· {education.school}</span></h3>
              <p className="tl-place mono">{education.place}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
