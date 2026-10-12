const COLORS = ["var(--ac)", "var(--mu)", "var(--tx)"]; // ألوان تتكرر على الأسطر
const WIDTHS = [1, 0.6, 0.8];                           // نسب الأطوال لتبدو كأسطر كود حقيقية

// x,y: بداية الأسطر | w: العرض الكامل | n: عدد الأسطر
export default function Lines({ x, y, w, n }) {
  // Array.from({length:n}, fn): ينشئ مصفوفة بطول n ويستدعي fn لكل عنصر (i = رقمه)
  return Array.from({ length: n }, (_, i) => (
    <rect key={i} x={x} y={y + i * 9}                  // كل سطر أسفل السابق بـ 9 وحدات
      width={w * WIDTHS[i % 3]} height="3.5" rx="1.7"  // i % 3 يدور على القيم الثلاث
      fill={COLORS[i % 3]} opacity=".6" />
  ));
}