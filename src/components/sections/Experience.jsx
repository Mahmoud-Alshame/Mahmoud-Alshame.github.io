import "./Experience.css";

function Rows({ list }) {
  return (
    <>
      {list.map((x, i) => (
        <div className="row" key={i}>
          <div className="mono mu period">{x.period}</div>
          <div>
            <h3>{x.role}</h3>
            <div className="ac company">{x.company}</div>
            {x.desc && <p>{x.desc}</p>}
          </div>
        </div>
      ))}
    </>
  );
}

export default function Experience({ data }) {
  return (
    <>
      <Rows list={data.experience} />
      <div className="sub">{data.ui.edu}</div>
      <Rows list={data.education} />
    </>
  );
}