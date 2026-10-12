import "./Skills.css";
import Tags from "../ui/Tags";

export default function Skills({ data }) {
  return (
    <div className="grid">
      {data.skills.map((s, i) => {
        const icon = s.icon || "✦";
        const isImg = icon.startsWith("data:") || icon.startsWith("http") || icon.startsWith("/");
        return (
          <div className="card" key={i}>
            <div className="ico">{isImg ? <img src={icon} alt={s.group} /> : icon}</div>
            <h3>{s.group}</h3>
            <Tags list={s.items} />
          </div>
        );
      })}
    </div>
  );
}