import "./Nav.css"; // تنسيق هذا المكوّن فقط

// props: القيم التي يمررها المكوّن الأب (Site). نستخرجها مباشرة بين الأقواس
export default function Nav({ visible, titles, theme, toggleTheme, ui, lang, setLang }) {
  return (
    <nav>
      <div className="w">
        {/* {"< "} بين أقواس لأن الرمز < لا يُكتب مباشرة كنص في JSX */}
        <a href="#top" className="logo">{"< "}<i>MA</i>{" />"}</a>
        <div className="links">
          {/* map: يحوّل كل مفتاح قسم ظاهر إلى رابط. key ضرورية ليميّز React العناصر */}
          {visible.map((k) => (
            <a key={k} href={"#" + k}>{titles[k].label}</a>
          ))}
        </div>
        {/* زر اللغة: يعرض اللغة الأخرى ويبدّل عند الضغط */}
        <button className="btn" onClick={() => setLang(lang === "ar" ? "en" : "ar")}>
          {lang === "ar" ? "EN" : "عربي"}
        </button>
        <button className="btn" onClick={toggleTheme}>{theme === "dark" ? ui.light : ui.dark}</button>
      </div>
    </nav>
  );
}