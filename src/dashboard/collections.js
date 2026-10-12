// كل قائمة: العنوان + الحقول. الحقل = [المفتاح في البيانات، التسمية، النوع]
// النوع (اختياري): "area" مربع نص كبير | "img" صورة | "icon" إيموجي أو صورة صغيرة
// لإضافة حقل جديد لمشروع مثلاً أضِف سطره هنا فقط (وأضفه في ar.js و en.js)
export const COLLECTIONS = {
  stats: { title: "الإحصائيات", fields: [["n", "الرقم"], ["l", "الوصف"]] },
  specs: { title: "التخصصات", fields: [["title", "العنوان"], ["desc", "الوصف", "area"], ["tags", "وسوم (افصل بفاصلة)"]] },
  experience: { title: "الخبرات", fields: [["role", "المسمّى"], ["company", "الشركة"], ["period", "الفترة"], ["desc", "المهام", "area"]] },
  education: { title: "التعليم", fields: [["role", "التخصص"], ["company", "الجهة"], ["period", "السنة"]] },
  projects: { title: "المشاريع", fields: [["img", "صورة المشروع", "img"], ["name", "الاسم"], ["desc", "الوصف", "area"], ["tech", "التقنيات (فاصلة)"], ["link", "الرابط"]] },
  skills: { title: "المهارات", fields: [["icon", "الأيقونة (إيموجي أو صورة)", "icon"], ["group", "المجموعة"], ["items", "المهارات (فاصلة)"]] },
  seoPoints: { title: "إنجازات SEO", fields: [["t", "النص", "area"]] },
  seoTools: { title: "أدوات SEO", fields: [["t", "الأداة / المهارة"]] },
};