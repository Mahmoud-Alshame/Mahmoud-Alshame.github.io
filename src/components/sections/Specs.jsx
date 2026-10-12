import Tags from "../ui/Tags";

export default function Specs({ data }) {
  return (
    <div className="grid">
      {data.specs.map((s, i) => (
        <div className="card" key={i}>
          <div className="lbl">§ {i + 1}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <Tags list={s.tags} />
        </div>
      ))}
    </div>
  );
}