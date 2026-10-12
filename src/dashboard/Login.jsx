import { useState } from "react";
import "./Login.css";

// login: دالة تسجيل الدخول القادمة من useAuth
export default function Login({ login }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();                 // يمنع إعادة تحميل الصفحة عند الإرسال
    setErr("");
    try { await login(email, pass); }   // عند النجاح تظهر اللوحة تلقائياً
    catch { setErr("بيانات الدخول غير صحيحة"); }
  };

  return (
    <div className="login">
      <form className="card" onSubmit={submit}>
        <h3>تسجيل الدخول</h3>
        <input type="email" placeholder="البريد" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="كلمة المرور" value={pass} onChange={(e) => setPass(e.target.value)} required />
        <button className="btn pri" type="submit">دخول</button>
        {err && <p className="err">{err}</p>}
      </form>
    </div>
  );
}