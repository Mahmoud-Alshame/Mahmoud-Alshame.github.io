import { initializeApp } from "firebase/app";        // يشغّل الاتصال بمشروعك
import { getFirestore } from "firebase/firestore";   // قاعدة البيانات
import { getAuth } from "firebase/auth";             // تسجيل الدخول

// import.meta.env: طريقة Vite لقراءة متغيرات ملف .env
const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

export const db = getFirestore(app);   // نصدّرهما لتستخدمهما بقية الملفات
export const auth = getAuth(app);