import { useState, useEffect, useRef } from "react";

// parse: يفصل النص إلى بداية + رقم + نهاية. مثال: "+3" → { pre: "+", end: 3, post: "" }
// يعيد null إن لم يحتوِ النص رقماً (مثل "ABC")
const parse = (text) => {
  const m = String(text).match(/^(\D*)(\d+)(.*)$/);
  return m ? { pre: m[1], end: +m[2], post: m[3] } : null;
};

// noMotion: هل نتخطى الحركة؟ (متصفح قديم، أو المستخدم فعّل "تقليل الحركة")
const noMotion = () =>
  !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Count({ text }) {
  const [v, setV] = useState(0);   // الرقم المعروض أثناء العدّ، يبدأ من 0
  const ref = useRef(null);        // مرجع لعنصر <b> لنراقب دخوله الشاشة
  const p = parse(text);
  const still = noMotion();        // true = نعرض الرقم النهائي مباشرة بلا عدّ

  useEffect(() => {
    const q = parse(text);
    if (!q || noMotion()) return;  // لا عدّ هنا، ولا setState مباشر في هذا الـ effect

    let raf;                       // معرّف الإطار الحالي لنلغيه عند التنظيف
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;   // لم يدخل الشاشة بعد
      io.disconnect();                 // دخل: نعدّ مرة واحدة فقط
      const t0 = performance.now();
      const tick = (t) => {
        const prog = Math.min((t - t0) / 1200, 1);                    // التقدّم من 0 إلى 1 خلال 1.2 ثانية
        setV(Math.round(q.end * (1 - Math.pow(1 - prog, 3))));        // يبدأ سريعاً ثم يبطئ
        if (prog < 1) raf = requestAnimationFrame(tick);              // نكرر حتى الانتهاء
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };      // تنظيف عند إزالة المكوّن
  }, [text]);

  // نركّب النص: بداية + (الرقم النهائي أو المتحرك) + نهاية
  return <b ref={ref}>{p ? p.pre + (still ? p.end : v) + p.post : text}</b>;
}