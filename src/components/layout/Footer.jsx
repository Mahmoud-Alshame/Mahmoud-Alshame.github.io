import "./Footer.css";

// النصان يأتيان من data.footer (قابلان للتعديل من لوحة التحكم)
export default function Footer({ data }) {
  const f = data.footer || {};
  return (
    <footer>
      <div className="w">
        <span>{f.left}</span>
        <span>{f.right}</span>
      </div>
    </footer>
  );
}