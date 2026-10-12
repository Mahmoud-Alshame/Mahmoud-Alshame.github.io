import { useLayoutEffect } from "react"; // مثل useEffect لكن يعمل قبل رسم الشاشة (فلا يومض المحتوى)

const SELECTOR = ".card,.row,.chap,.photo,.lead,.facts li,.seo li,.stats"; // العناصر التي ستظهر بحركة
let observer; // مراقب واحد للتطبيق كله (خارج الدالة ليبقى بين مرات التشغيل)

// getObserver: ينشئ المراقب مرة واحدة ثم يعيده
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;          // العنصر لم يدخل الشاشة بعد
          observer.unobserve(en.target);           // دخل: نتوقف عن مراقبته
          en.target.classList.add("in");           // نضيف "in" فتبدأ حركة الظهور في CSS
          setTimeout(() => en.target.classList.remove("rv", "in"), 1400); // بعد انتهائها نعيده طبيعياً حتى لا تتعارض مع hover
        });
      },
      { threshold: 0.12 } // يُعدّ ظاهراً عندما يظهر 12% منه
    );
  }
  return observer;
}

export default function useReveal(deps) {
  useLayoutEffect(() => {
    // نتجاهل الحركة إذا كان المتصفح قديماً أو المستخدم فعّل "تقليل الحركة"
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.dataset.seen) return;      // عنصر سبق تجهيزه
      el.dataset.seen = "1";            // نعلّمه
      el.classList.add("rv");           // نخفيه مبدئياً (rv = reveal)
      getObserver().observe(el);        // ونراقب دخوله الشاشة
    });
  }, deps);
}