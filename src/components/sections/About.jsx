import "./About.css";
import Count from "../ui/Count";

export default function About({ data }) {
  const { profile: p, stats, ui } = data;
  return (
    <div className="about">
      <div className="photo">
        <img src={p.photo} alt={p.name} />
        <div className="stats">
          {stats.map((s, i) => <div key={i}><Count text={s.n} />{s.l}</div>)}
        </div>
      </div>
      <div>
        <p className="lead">{p.about}</p>
        <ul className="facts">
          <li><span>{ui.fRole}</span><b>{p.role}</b></li>
          <li><span>{ui.fCompany}</span><b>{p.company}</b></li>
          <li><span>{ui.fLoc}</span><b>{p.location}</b></li>
        </ul>
      </div>
    </div>
  );
}