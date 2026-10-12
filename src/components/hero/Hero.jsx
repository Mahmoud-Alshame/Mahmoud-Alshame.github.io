import "./Hero.css";                 // تنسيق هذا المكوّن (الملف التالي)
import Workstation from "./Workstation"; // الرسمة المتحركة (نفس المجلد)

export default function Hero({ data }) {
  const { profile: p, ui } = data;   // نأخذ profile باسم p، وui كما هي
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
        <div className="code mono">
          role <b>= "front_end + content_team_lead"</b><br />
          company <b>= "<i>jomla</i>"</b><br />
          stack <b>= react · tailwind · sass</b><br />
          status <b>= <i>accepting_new_ideas</i></b>
        </div>
        <Workstation />
      </div>
    </header>
  );
}