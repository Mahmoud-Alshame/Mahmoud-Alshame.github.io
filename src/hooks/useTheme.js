import {useState, useEffect} from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(()=>{
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  // يعمل بعد الرسم الأول وكلما تغيّرت theme (المصفوفة [theme] تحدد متى يُعاد التنفيذ)
  useEffect(() => {
    document.documentElement.dataset.theme = theme;        // يضع data-theme="dark" على <html> فتعمل ألوان theme.css
    localStorage.setItem("theme", theme);                  // يحفظ الاختيار
  }, [theme]);


  // toggle: يقلب القيمة بين dark و light
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return [theme, toggle]; // نعيد القيمة الحالية ودالة التبديل
};