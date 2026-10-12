import useAuth from "../hooks/useAuth";
import useData from "../hooks/useData";
import Login from "./Login";
import Editor from "./Editor";

export default function Dashboard(props) {
  const { user, login, logout } = useAuth();
  const [saved, saveToDb, loading] = useData(props.lang);

  if (user === undefined || loading) return <p className="w mu" style={{ padding: 40 }}>جارٍ التحميل…</p>;
  if (!user) return <Login login={login} />;   // غير مسجَّل: نعرض صفحة الدخول فقط
  // key: إعادة بناء المحرر عند تغيّر اللغة ليبدأ من بيانات اللغة الجديدة
  return <Editor key={props.lang} {...props} initial={saved} saveToDb={saveToDb} logout={logout} />;
}