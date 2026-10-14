import "./Hero.css";
import Workstation from "./Workstation";

export default function Hero({ data }) {
  const { profile: p, ui } = data;
  return (
    <header className="hero" id="top">
      <div className="w">
        <div className="lbl">{ui.chapter} 00 — {ui.summary}</div>
        <h1>{ui.h1a} <span className="ac">{ui.h1b}</span></h1>
        <p><b>{p.name}</b> — {p.heroBio}</p>
        <div className="cta">
          <a className="btn pri" href="#projects">{ui.browse}</a>
          <a className="btn" href="#contact">{ui.contact}</a>
        </div>
        {/* أسطر الكود: تُبنى من قائمة codeLines. السطر الذي فيه hl يظهر قيمته بالأخضر */}
        <div className="code mono">
          {(data.codeLines || []).map((l, i) => (
            <div key={i}>{l.k} <b>= "{l.hl ? <i>{l.v}</i> : l.v}"</b></div>
          ))}
        </div>
        <Workstation />
      </div>
    </header>
  );
}