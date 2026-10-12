import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { DATA } from "../data";
import { SECTIONS } from "../data/sections";
import { COLLECTIONS } from "./collections";
import Field from "./Field";
import ListEditor from "./ListEditor";

export default function Editor({ lang, setLang, theme, toggleTheme, initial, saveToDb, logout }) {
  const [data, setData] = useState(initial);   // مسوّدة محلية: لا يُرسل شيء لـ Firebase حتى "حفظ ونشر"
  const [dirty, setDirty] = useState(false);   // هل توجد تعديلات غير محفوظة؟
  const [msg, setMsg] = useState("");
  const [jmsg, setJmsg] = useState("");

  const save = (next) => { setData(next); setDirty(true); };
  const kb = Math.round(new Blob([JSON.stringify(data)]).size / 1024);   // حجم المستند (الحد 950)

  const publish = async () => {
    setMsg("جارٍ الحفظ…");
    try { await saveToDb(data); setDirty(false); setMsg("تم النشر ✓"); }
    catch (e) { setMsg(e.message || "فشل الحفظ"); }
  };

  const setProfile = (k, v) => save({ ...data, profile: { ...data.profile, [k]: v } });
  const setShow = (k, v) => save({ ...data, show: { ...data.show, [k]: v } });
  const setTitle = (k, f, v) => save({ ...data, titles: { ...data.titles, [k]: { ...data.titles[k], [f]: v } } });

  const strip = () =>
    JSON.stringify({ ...data, profile: { ...data.profile, photo: "" }, projects: data.projects.map(({ img, ...p }) => p) }, null, 1); // eslint-disable-line no-unused-vars
  const [txt, setTxt] = useState(strip);

  const applyJson = () => {
    try {
      const o = JSON.parse(txt);
      save({
        ...data, ...o,
        profile: { ...data.profile, ...o.profile, photo: data.profile.photo },
        projects: (o.projects || data.projects).map((p, i) => ({ ...p, img: p.img ?? data.projects[i]?.img })),
      });
      setJmsg("تم التطبيق (اضغط حفظ ونشر) ✓");
    } catch { setJmsg("JSON غير صالح"); }
  };

  const reset = () => { save(DATA[lang]); setJmsg("أُعيدت البيانات الأصلية (اضغط حفظ ونشر)"); };

  return (
    <div className="dash">
      <div className="w">
        <div className="top">
          <h2 style={{ margin: 0 }}>لوحة التحكم</h2>
          <span>
            <button className="btn" onClick={() => setLang(lang === "ar" ? "en" : "ar")}>{lang === "ar" ? "EN" : "عربي"}</button>{" "}
            <button className="btn" onClick={toggleTheme}>{theme === "dark" ? "☀" : "☾"}</button>{" "}
            <button className="btn" onClick={reset}>إعادة الضبط</button>{" "}
            <button className="btn" onClick={logout}>خروج</button>{" "}
            <Link className="btn" to="/">عرض الموقع</Link>
          </span>
        </div>

        <div className="sbar">
          <button className="btn pri" onClick={publish} disabled={!dirty}>حفظ ونشر</button>
          <span className="ac">{dirty ? "توجد تعديلات غير محفوظة" : msg}</span>
          <span className={kb > 800 ? "warn" : "mu"}>{kb} / 950 KB</span>
        </div>
        <p className="mu note">التعديلات تخص لغة المحتوى الحالية. احفظ قبل تبديل اللغة وإلا ضاعت التعديلات.</p>

        <details className="panel" open>
          <summary>الأقسام (إظهار / إخفاء / تعديل العناوين)</summary>
          {SECTIONS.map(([k, name]) => (
            <div className="item" key={k}>
              <label className="chk">
                <input type="checkbox" checked={data.show[k]} onChange={(e) => setShow(k, e.target.checked)} />
                <b>{name}</b>
              </label>
              <div className="two">
                {[["label", "العنوان الصغير"], ["head", "العنوان"], ["accent", "الجزء الملوّن"]].map(([f, l]) => (
                  <Field key={f} label={l} value={data.titles[k][f]} onChange={(v) => setTitle(k, f, v)} />
                ))}
              </div>
            </div>
          ))}
        </details>

        <details className="panel">
          <summary>الملف الشخصي</summary>
          <div className="two">
            {[["name", "الاسم"], ["role", "المنصب"], ["company", "الشركة"], ["location", "الموقع"], ["email", "البريد"], ["phone", "الهاتف"], ["linkedin", "LinkedIn"], ["github", "GitHub"]].map(([k, l]) => (
              <Field key={k} label={l} value={data.profile[k]} onChange={(v) => setProfile(k, v)} />
            ))}
          </div>
          <Field label="نبذة الواجهة" area="area" value={data.profile.heroBio} onChange={(v) => setProfile("heroBio", v)} />
          <Field label="نبذة من أنا" area="area" value={data.profile.about} onChange={(v) => setProfile("about", v)} />
          <Field label="مسار الصورة الشخصية (ملف في public/images)" value={data.profile.photo} onChange={(v) => setProfile("photo", v)} />
        </details>

        {Object.keys(COLLECTIONS).map((n) => <ListEditor key={n} name={n} data={data} save={save} />)}

        <details className="panel">
          <summary>نسخ / استيراد البيانات (JSON)</summary>
          <textarea className="js mono" rows="10" value={txt} onChange={(e) => setTxt(e.target.value)} />
          <div className="jbar">
            <button className="btn pri" onClick={applyJson}>تطبيق</button>{" "}
            <button className="btn" onClick={() => setTxt(strip())}>تحديث من البيانات الحالية</button>{" "}
            <span className="ac">{jmsg}</span>
          </div>
        </details>
      </div>
    </div>
  );
}