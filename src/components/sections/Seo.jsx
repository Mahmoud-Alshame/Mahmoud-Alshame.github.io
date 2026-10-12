import "./Seo.css";

export default function Seo({ data }) {
  return (
    <div className="seo">
      <ul>{data.seoPoints.map((p, i) => <li key={i} dir="auto">{p.t}</li>)}</ul>
      <div className="card">
        <h3>{data.ui.tools}</h3>
        <div className="tags">{data.seoTools.map((t, i) => <span className="tag" key={i}>{t.t}</span>)}</div>
      </div>
    </div>
  );
}