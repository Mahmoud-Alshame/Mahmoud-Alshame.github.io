import { useState, useEffect } from "react";
import { DATA } from "../data";
import { loadSite, saveSite } from "../firebase/db";

const CACHE = "portfolio-cache-v1-";   // نسخة محلية تُعرض فوراً بينما نجلب الأحدث

// يعيد [data, save, loading]
export default function useData(lang) {
  const base = DATA[lang];   // البيانات الأصلية من ar.js / en.js (احتياط)

  const [data, setData] = useState(() => {
    try {
      const c = JSON.parse(localStorage.getItem(CACHE + lang));   // آخر نسخة جُلبت سابقاً
      if (c) return { ...base, ...c, ui: base.ui };
    } catch { /* نتجاهل التالف */ }
    return base;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;   // يمنع تحديث المكوّن بعد إزالته
    loadSite(lang)
      .then((remote) => {
        if (!alive) return;
        if (remote) {
          setData({ ...base, ...remote, ui: base.ui });
          localStorage.setItem(CACHE + lang, JSON.stringify(remote));
        }
        setLoading(false);
      })
      .catch(() => alive && setLoading(false));   // فشل الشبكة: نبقى على ما لدينا
    return () => { alive = false; };
  }, [lang, base]);

  // save: يحفظ في Firestore ثم يحدّث الشاشة والنسخة المحلية
  const save = async (next) => {
    await saveSite(lang, next);
    setData(next);
    localStorage.setItem(CACHE + lang, JSON.stringify(next));
  };

  return [data, save, loading];
}