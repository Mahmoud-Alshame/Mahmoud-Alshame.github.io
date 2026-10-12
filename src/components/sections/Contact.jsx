import "./Contact.css";

export default function Contact({ data }) {
  const p = data.profile;
  return (
    <div className="big">
      <p className="mu">{p.location} · <span className="mono">{p.phone}</span></p>
      <div className="cta">
        <a className="btn pri" href={"mailto:" + p.email}>{p.email} ←</a>
        <a className="btn" href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a className="btn" href={p.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </div>
  );
}