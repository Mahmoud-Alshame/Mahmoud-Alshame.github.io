import { useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export default function useAuth() {
  // undefined = ما زلنا نتحقق | null = غير مسجَّل | كائن = مسجَّل
  const [user, setUser] = useState(undefined);

  // onAuthStateChanged يخبرنا بكل تغيّر في حالة الدخول، ويعيد دالة إلغاء الاشتراك (تنظيف)
  useEffect(() => onAuthStateChanged(auth, setUser), []);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);
  return { user, login, logout };
}