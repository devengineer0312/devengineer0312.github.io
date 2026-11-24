import { workflow } from '../data/profile.js'

export default function Process() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="kicker mono">05 · Process</p>
            <h2>How we’ll work together</h2>
            <p className="section-lede">
              A clear path from first requirements to a working, manufacturable product, with a deliverable you can review at every step.
            </p>
          </div>
        </header>
        <ol className="process">
          {workflow.map((s) => (
            <li key={s.step} className="step">
              <span className="step-n">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="step-out">
                {s.out.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
