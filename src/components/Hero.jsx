import Icon from "./Icon";
import CountUp from "./CountUp";
import { useTyping } from "../hooks";
import { site, hero } from "../data";

export default function Hero() {
  const typed = useTyping(site.roles);

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <span className="pill">
            <i className="dot" />
            {site.status}
          </span>

          <p className="greeting mono">{site.greeting}</p>
          <h1>
            {site.firstName}
            <br />
            {site.lastName}
          </h1>

          <p className="typed mono">
            {typed}
            <span className="caret" />
          </p>

          <p className="intro">{site.intro}</p>

          <div className="chips">
            {site.chips.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>

          <div className="btn-row">
            <a href="#portfolio" className="btn btn-primary">
              View Case Studies <Icon name="arrowRight" size={18} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Icon name="mail" size={18} /> Contact Me
            </a>
          </div>

          <div className="socials">
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email">
              <Icon name="mail" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass main-card float">
            <div className="icon-box">
              <Icon name={hero.main.icon} size={26} />
            </div>
            <div>
              <h4>{hero.main.title}</h4>
              <p className="mono cyan">{hero.main.tags.join(" · ")}</p>
            </div>
          </div>

          {hero.orbs.map((o, i) => (
            <span key={o} className={`orb orb-${i}`}>{o}</span>
          ))}

          <div className="glass stats-card float-slow">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="big grad">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <small className="mono">{s.label}</small>
              </div>
            ))}
          </div>

          <div className="glass badge-card float">
            <p className="mono gold">★ {hero.badge.label}</p>
            <h5>{hero.badge.title}</h5>
          </div>
        </div>
      </div>
    </section>
  );
}