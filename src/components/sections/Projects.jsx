import "./Projects.css";
import Tags from "../ui/Tags";

export default function Projects({ data }) {
  return (
    <div className="grid">
      {data.projects.map((x, i) => (
        <div className="card pj" key={i}>
          <div className="thumb">
            {x.img ? <img src={x.img} alt={x.name} loading="lazy" /> : <span className="mono">{"</>"}</span>}
          </div>
          <div className="cb">
            <h3>{x.name}</h3>
            <p>{x.desc}</p>
            <Tags list={x.tech} />
            {x.link && <p className="lnk"><a className="ac" href={x.link} target="_blank" rel="noopener noreferrer">{data.ui.view}</a></p>}
          </div>
        </div>
      ))}
    </div>
  );
}