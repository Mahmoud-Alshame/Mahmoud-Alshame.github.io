import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Section from "./components/layout/Section";
import Hero from "./components/hero/Hero";
import { VIEWS } from "./components/sections";   // جديد: قاموس {مفتاح القسم: مكوّنه}
import useData from "./hooks/useData";
import useReveal from "./hooks/useReveal";
import { SECTIONS } from "./data/sections";

export default function Site({ lang, setLang, theme, toggleTheme }) {
  const [data] = useData(lang);
  useReveal([data]);
  const ui = data.ui;
  const visible = SECTIONS.map((s) => s[0]).filter((k) => data.show[k]);

  return (
    <>
      <Nav visible={visible} titles={data.titles} theme={theme} toggleTheme={toggleTheme} ui={ui} lang={lang} setLang={setLang} />
      <Hero data={data} />   {/* حلّ مكان الـ header المؤقت */}
      {visible.map((k, i) => {
        const View = VIEWS[k];   // نجلب مكوّن القسم من القاموس (بحرف كبير لأن React يشترط ذلك للمكوّنات)
        return (
          <Section key={k} id={k} index={i} title={data.titles[k]} ui={ui}>
            {/* إن لم نكتب مكوّن القسم بعد نعرض سطراً مؤقتاً، وإلا نعرض القسم الحقيقي */}
            {View ? <View data={data} /> : <p className="mu">قسم {k} قيد البناء</p>}
          </Section>
        );
      })}
      <Footer profile={data.profile} ui={ui} />
    </>
  );
}