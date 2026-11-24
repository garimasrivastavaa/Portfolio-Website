import { useState } from "react";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";
import { site, contact } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Frontend-only: opens the visitor's email app with the message pre-filled
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle title={contact.title} subtitle={contact.subtitle} />

        <div className="contact-grid">
          <form className="glass form" onSubmit={onSubmit}>
            <h3 className="purple-h">{contact.formTitle}</h3>
            <p className="muted">{contact.formSub}</p>

            <div className="field">
              <Icon name="user" size={18} />
              <input name="name" placeholder="Your Name" value={form.name} onChange={onChange} required />
            </div>
            <div className="field">
              <Icon name="mail" size={18} />
              <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={onChange} required />
            </div>
            <div className="field">
              <Icon name="message" size={18} />
              <textarea name="message" rows={5} placeholder="Your Message" value={form.message} onChange={onChange} required />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              <Icon name="send" size={18} /> Send Message
            </button>
          </form>

          <div>
            <div className="glass connect">
              <p className="mono label"><i className="line" /> CONNECT WITH ME</p>

              <a className="link-card" href={site.linkedin} target="_blank" rel="noreferrer">
                <span className="icon-box"><Icon name="linkedin" /></span>
                <div>
                  <h4>Let's Connect</h4>
                  <p className="mono">on LinkedIn</p>
                </div>
                <Icon name="arrowRight" size={16} />
              </a>

              <a className="link-card" href={`mailto:${site.email}`}>
                <span className="icon-box red"><Icon name="mail" /></span>
                <div>
                  <h4>Email</h4>
                  <p className="mono">{site.email}</p>
                </div>
                <Icon name="arrowRight" size={16} />
              </a>
            </div>

            <div className="glass avail">
              <i className="dot-green" />
              <div>
                <h4>{contact.availability.title}</h4>
                <p className="mono">{contact.availability.sub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}