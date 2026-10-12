// file: ملف الصورة | done: دالة تستلم الصورة النهائية | max: أقصى عرض بالبكسل
export default function pickImage(file, done, max = 800) {
  const reader = new FileReader();            // أداة المتصفح لقراءة الملفات
  reader.onload = () => {                     // تعمل عند انتهاء القراءة
    const img = new Image();
    img.onload = () => {                      // تعمل عندما تُحمَّل الصورة في الذاكرة
      const k = Math.min(1, max / img.width); // نسبة التصغير (لا نكبّر أبداً: الحد الأقصى 1)
      const c = document.createElement("canvas");   // لوحة رسم غير مرئية
      c.width = img.width * k;
      c.height = img.height * k;
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height); // نرسم الصورة مصغّرة
      // الأيقونات الصغيرة PNG (تحفظ الشفافية)، والصور الكبيرة JPEG بجودة 80%
      done(c.toDataURL(max < 400 ? "image/png" : "image/jpeg", 0.8));
    };
    img.src = reader.result;                  // نعطي الصورة الناتج المقروء
  };
  reader.readAsDataURL(file);                 // نبدأ القراءة كنص base64
}