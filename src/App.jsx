import { Routes, Route } from "react-router-dom";   // Routes: حاوية المسارات | Route: مسار واحد
import useTheme from "./hooks/useTheme";
import useLang from "./hooks/useLang";
import Site from "./Site";
import Dashboard from "./dashboard/Dashboard";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [lang, setLang] = useLang();
  const shared = { lang, setLang, theme, toggleTheme };   // خصائص مشتركة نمررها للصفحتين

  return (
    <Routes>
      {/* key={lang}: عند تغيير اللغة تُبنى الصفحة من جديد فتحمّل بيانات اللغة الجديدة */}
      <Route path="/" element={<Site key={lang} {...shared} />} />
      <Route path="/admin" element={<Dashboard key={lang} {...shared} />} />
    </Routes>
  );
}