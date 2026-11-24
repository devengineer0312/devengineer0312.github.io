import { profile } from '../data/profile.js'
import { Briefcase, ArrowRight } from './Icons.jsx'

// All contact goes through Upwork (no email / phone / social links, per Upwork's terms).
const reasons = [
  ['Milestones', 'Work split into clear, reviewable deliverables'],
  ['Protected payments', 'Funds held in escrow until each milestone is approved'],
  ['One place', 'Messages, files and design reviews kept on Upwork'],
]

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <div>
            <p className="kicker mono">07 · Let’s work together</p>
            <h2>Have a board to build?</h2>
            <p className="section-lede">
              Send me the requirements, a block diagram or an existing design that needs a review through Upwork.
              I'll come back with clarifying questions, a proposed approach and a realistic timeline.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-link primary" href={profile.upwork} target="_blank" rel="noreferrer">
              <Briefcase />
              <span><strong>Hire me on Upwork</strong><small>Invite me to your job or send a project brief</small></span>
              <ArrowRight />
            </a>
            <ul className="reasons">
              {reasons.map(([t, d]) => (
                <li key={t}>
                  <strong>{t}</strong>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
