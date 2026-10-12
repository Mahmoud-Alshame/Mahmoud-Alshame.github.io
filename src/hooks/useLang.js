import { useState, useEffect } from "react";

export default function useLang() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ar"); // اللغة المحفوظة، أو العربية افتراضياً

  useEffect(() => {
    document.documentElement.lang = lang;                          // <html lang="en">
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";  // عربي = من اليمين، إنجليزي = من اليسار
    localStorage.setItem("lang", lang);
  }, [lang]);

  return [lang, setLang]; // نعيد setLang مباشرة لأن الزر يمرّر إليها "ar" أو "en"
}