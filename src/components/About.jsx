import Icon from "./Icon";
import Rich from "./Rich";
import CountUp from "./CountUp";
import SectionTitle from "./SectionTitle";
import { site, about } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle title={about.title} subtitle={about.subtitle} />

        <div className="about-grid">
          <div className="glass about-main">
            <span className="pill">
              <i className="dot" />
              {about.badge}
            </span>
            {about.paragraphs.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
            <div className="btn-row">
              <a href="#contact" className="btn btn-primary">
                Get in Touch <Icon name="arrowRight" size={18} />
              </a>
              <a href={site.resume} download className="btn btn-primary">
                Download CV <Icon name="download" size={18} />
              </a>
            </div>
          </div>

          <div className="about-side">
            <div className="stat-grid">
              {about.stats.map((s) => (
                <div key={s.label} className="glass stat-card">
                  <span className="stat-icon"><Icon name={s.icon} /></span>
                  <div className="stat-num grad">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <h4>{s.label}</h4>
                  <p className="mono">{s.sub}</p>
                </div>
              ))}
            </div>

            <div className="glass edu">
              <p className="mono cyan label">
                <Icon name="grad" size={18} /> EDUCATION
              </p>
              {about.education.map((e) => (
                <div key={e.school} className="edu-item">
                  <i className={`dot-lg ${e.color}`} />
                  <div>
                    <h4>{e.school}</h4>
                    <p>{e.degree}</p>
                    <span className="mono purple">{e.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}