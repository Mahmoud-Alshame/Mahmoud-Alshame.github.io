import { useState } from "react";
import { COLLECTIONS } from "./collections";
import Field from "./Field";

// name: اسم القائمة (مثل "projects") | data: كل البيانات | save: دالة الحفظ
export default function ListEditor({ name, data, save }) {
  const cfg = COLLECTIONS[name];   // إعدادات هذه القائمة من collections.js
  const items = data[name];        // عناصرها الحالية
  const [armed, setArmed] = useState(null);   // رقم العنصر الذي ينتظر تأكيد الحذف (الضغطة الثانية)

  // update: تغيير حقل واحد في عنصر واحد. map يعيد نسخة جديدة (لا نعدّل الأصل مباشرة)
  const update = (i, k, v) =>
    save({ ...data, [name]: items.map((it, j) => (j === i ? { ...it, [k]: v } : it)) });

  // remove: حذف عنصر (filter يُبقي كل العناصر ما عدا رقم i)
  const remove = (i) => {
    save({ ...data, [name]: items.filter((_, j) => j !== i) });
    setArmed(null);
  };

  // move: تبديل مكان عنصر مع جاره (step = -1 للأعلى، +1 للأسفل)
  const move = (i, step) => {
    const a = [...items], j = i + step;
    if (j < 0 || j >= a.length) return;   // لا نخرج عن حدود القائمة
    [a[i], a[j]] = [a[j], a[i]];          // تبديل
    save({ ...data, [name]: a });
  };

  // add: عنصر جديد بحقول فارغة (Object.fromEntries يبني كائناً من أزواج [مفتاح، قيمة])
  const add = () =>
    save({ ...data, [name]: [...items, Object.fromEntries(cfg.fields.map((f) => [f[0], ""]))] });

  return (
    <details className="panel">
      <summary>{cfg.title} ({items.length})</summary>
      {items.map((it, i) => (
        <div className="item" key={i}>
          <div className="ibar">
            <b>#{i + 1}</b>
            <span>
              <button className="btn" onClick={() => move(i, -1)}>↑</button>
              <button className="btn" onClick={() => move(i, 1)}>↓</button>
              {/* الضغطة الأولى تُفعّل التأكيد، والثانية تحذف فعلاً */}
              <button className="btn" onClick={() => (armed === i ? remove(i) : setArmed(i))}>
                {armed === i ? "تأكيد الحذف؟" : "حذف"}
              </button>
            </span>
          </div>
          {cfg.fields.map(([k, label, type]) => (
            <Field key={k} label={label} area={type} value={it[k]} onChange={(v) => update(i, k, v)} />
          ))}
        </div>
      ))}
      <button className="btn pri" style={{ margin: "10px 0 14px" }} onClick={add}>+ إضافة</button>
    </details>
  );
}