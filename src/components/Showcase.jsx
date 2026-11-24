import { useState } from "react";
import Icon from "./Icon";
import Rich from "./Rich";
import CountUp from "./CountUp";
import SectionTitle from "./SectionTitle";
import { showcase, caseStudies, experience, skills, leadership } from "../data";

function CasesView() {
  return (
    <div className="grid-2">
      {caseStudies.map((c) => (
        <article key={c.title} className="glass card">
          <div className="card-top">
            <span className="pill pill-cyan">
              <Icon name={c.icon} size={14} /> {c.tag}
            </span>
            <span className="mono muted">{c.date}</span>
          </div>
          <h3>{c.title}</h3>
          <p className="summary">{c.summary}</p>

          <dl className="par">
            {[["Problem", c.problem], ["Approach", c.approach], ["Outcome", c.outcome]].map(([k, v]) => (
              <div key={k}>
                <dt className="mono">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <div className="chips">
            {c.metrics.map((m) => (
              <span key={m} className="chip accent">{m}</span>
            ))}
            {c.skills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>

          {c.link && (
            <a href={c.link} target="_blank" rel="noreferrer" className="link mono">
              View Details <Icon name="arrowUpRight" size={14} />
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

function ExperienceView() {
  return (
    <div className="timeline">
      {experience.map((e) => (
        <article key={e.company + e.period} className="glass card t-item">
          <div className="card-top">
            <span className="pill pill-cyan">{e.company}</span>
            <span className="mono muted">{e.period}</span>
          </div>
          <h3>
            {e.role} {e.current && <span className="pill current">Current</span>}
          </h3>
          <p className="summary">{e.location}</p>
          <ul className="bullets">
            {e.bullets.map((b, i) => (
              <li key={i}>
                <Rich text={b} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function SkillsView() {
  return (
    <div className="grid-2">
      {skills.map((g) => (
        <article key={g.group} className="glass card">
          <h3>{g.group}</h3>
          <div className="chips">
            {g.items.map((i) => (
              <span key={i} className="chip">{i}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function LeadershipView() {
  return (
    <div className="grid-2">
      {leadership.map((l) => (
        <article key={l.org} className="glass card lead">
          <span className="icon-box"><Icon name={l.icon} size={22} /></span>
          <div>
            <p className="mono cyan">{l.org}</p>
            <h3>{l.role}</h3>
            <p className="summary">{l.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const views = {
  cases: CasesView,
  experience: ExperienceView,
  skills: SkillsView,
  leadership: LeadershipView,
};

export default function Showcase() {
  const [tab, setTab] = useState(showcase.tabs[0].id);
  const View = views[tab];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="show-stats">
          {showcase.stats.map((s) => (
            <div key={s.label} className="glass show-stat">
              <div className="show-stat-top">
                <span className="stat-icon"><Icon name={s.icon} /></span>
                <span className="stat-num grad">
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
              </div>
              <h4>{s.label}</h4>
              <p className="mono">{s.sub}</p>
            </div>
          ))}
        </div>

        <SectionTitle title={showcase.title} subtitle={showcase.subtitle} />

        <div className="tabs">
          {showcase.tabs.map((t) => (
            <button
              key={t.id}
              className={`tab ${tab === t.id ? "active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              <Icon name={t.icon} size={18} /> {t.label}
            </button>
          ))}
        </div>

        <div key={tab} className="fade-in">
          <View />
        </div>
      </div>
    </section>
  );
}