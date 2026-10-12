import "./Section.css";
import { pad } from "../../utils/helpers";

// children: أي محتوى نضعه بين وسمَي <Section> ... </Section>
export default function Section({ id, index, title, ui, children }) {
  return (
    <section id={id}>
      <div className="w">
        <div className="chap">
          <div className="lbl">{ui.chapter} {pad(index + 1)} — {title.label}</div>
          <h2>{title.head} <span className="ac">{title.accent}</span></h2>
        </div>
        {children}
      </div>
    </section>
  );
}