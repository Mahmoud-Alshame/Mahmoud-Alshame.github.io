import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./config";

const MAX_BYTES = 950000;   // حد Firestore للمستند 1MiB، نترك هامشاً صغيراً

// loadSite: يقرأ مستند اللغة (site/ar أو site/en). يعيد null إن لم يكن موجوداً بعد
export async function loadSite(lang) {
  const snap = await getDoc(doc(db, "site", lang));
  return snap.exists() ? snap.data() : null;
}

// saveSite: يحفظ بيانات اللغة كاملة في مستند واحد
export async function saveSite(lang, data) {
  const { ui, ...rest } = data;                          // eslint-disable-line no-unused-vars
  const clean = JSON.parse(JSON.stringify(rest));        // يحذف أي قيمة undefined (Firestore يرفضها)
  const size = new Blob([JSON.stringify(clean)]).size;   // حجم البيانات بالبايت
  if (size > MAX_BYTES) throw new Error("حجم البيانات كبير (غالباً بسبب الصور). صغّر الصور أو انقلها إلى public.");
  await setDoc(doc(db, "site", lang), clean);            // يكتب (ويستبدل) المستند
}
