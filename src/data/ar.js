import { seoPoints, seoTools } from "./seo.js"; // الاستيراد من الملف المشترك

const ar = {
  // ui: نصوص الواجهة الثابتة التي تتغير مع اللغة
  ui: {
    chapter: "الفصل", summary: "الملخص",
    h1a: "أحوّل الفكرة إلى واجهة،", h1b: "والفريق إلى إنتاجية.",
    browse: "تصفّح المشاريع ←", contact: "تواصل معي",
    light: "☀ نهاري", dark: "☾ ليلي",
    fRole: "المنصب", fCompany: "الشركة", fLoc: "الموقع",
    edu: "التعليم", view: "عرض المشروع ↗", tools: "الأدوات والمهارات", built: "بُني بـ React · 2026",
  },
  profile: {
    name: "محمود الشامي", role: "مطوّر واجهات أمامية وقائد فريق كتّاب المحتوى", company: "جملة (Jomla)",
    heroBio: "مطوّر واجهات أمامية وقائد فريق كتّاب المحتوى في شركة جملة (Jomla). أبني تجارب ويب سريعة ومتجاوبة بـ React، وأقود فريق محتوى بخبرة تتجاوز 3 سنوات في تحسين محركات البحث (SEO).",
    about: "مطوّر واجهات أمامية بخبرة تتجاوز سنة، أعمل مع React وTailwind وSass وأهتم بالأداء وتجربة المستخدم. وأقود فريق كتّاب المحتوى في شركة جملة بخبرة تزيد على 3 سنوات في SEO، وأنقل هذه الخبرة إلى كل موقع أبنيه.",
    location: "حمص، سوريا", email: "mahmoudalshame360@gmail.com", phone: "+963939425360",
    linkedin: "https://www.linkedin.com/in/mahmoud-alshame-0689b5251/",
    github: "https://github.com/Mahmoud-Alshame",
    photo: "/images/me.jpeg", // الصورة من مجلد public (بدل base64)
  },
  // أي قسم قيمته false يختفي من الموقع
  show: { about: true, specs: true, experience: true, projects: true, skills: true, seo: true, contact: true },
  // عناوين الأقسام: label (الصغير) + head (العادي) + accent (الملوّن)
  titles: {
    about: { label: "من أنا", head: "مطوّر واجهات،", accent: "وقائد فريق محتوى." },
    specs: { label: "التخصصات", head: "أربعة مجالات تتراكم", accent: "لتصنع منتجاً متكاملاً." },
    experience: { label: "الخبرة", head: "رحلة عملية", accent: "خطوة بعد خطوة." },
    projects: { label: "المشاريع", head: "أعمال", accent: "يمكنك تجربتها بنفسك." },
    skills: { label: "المهارات", head: "الأدوات التي", accent: "أبني بها." },
    seo: { label: "SEO والمحتوى", head: "محتوى يُقرأ،", accent: "وترتيب يتقدّم." },
    contact: { label: "تواصل", head: "لنبنِ معاً", accent: "شيئاً يستحق." },
  },
  stats: [
    { n: "+3", l: "سنوات خبرة SEO" }, { n: "+1", l: "سنة تطوير واجهات" }, { n: "6", l: "مشاريع منشورة" },
  ],
  specs: [
    { title: "تطوير الواجهات", desc: "بناء واجهات سريعة ومتجاوبة بـ React وTailwind وSass مع اهتمام بالأداء وتوافق المتصفحات.", tags: "react, tailwind, sass" },
    { title: "قيادة فريق المحتوى", desc: "قيادة فريق الكتّاب: توزيع المهام ومراجعة الجودة وتوجيه الكتّاب لتسليم محتوى متقن في موعده.", tags: "team_lead, quality_control, mentoring" },
    { title: "SEO والمحتوى", desc: "بخبرة تزيد على 3 سنوات: بحث الكلمات المفتاحية وتحسين الصفحات وتدقيق المحتوى لرفع الزيارات وتجربة المستخدم.", tags: "semrush, keywords, audits" },
    { title: "التحليلات والقرار", desc: "قياس أداء المحتوى واتخاذ قرارات مبنية على البيانات لتحسين النتائج.", tags: "analytics, reporting" },
  ],
  experience: [
    { role: "Front-End Developer & Content Team Lead", company: "جملة (Jomla)", period: "الآن", desc: "بناء واجهات React متجاوبة، وقيادة فريق كتّاب المحتوى: توزيع المهام وضبط الجودة وتطبيق استراتيجيات SEO." },
    { role: "Frontend Web Developer Trainee", company: "Claud Soft (عن بُعد)", period: "يناير 2025 — الآن", desc: "HTML5 وCSS3 وJavaScript وBootstrap وTailwind وSass وReact، مع Git/GitHub وأساسيات النشر وتحسين الأداء وتوافق المتصفحات." },
    { role: "SEO Content Writing", company: "تحسين محركات البحث", period: "+3 سنوات", desc: "كتابة وتحرير المحتوى وبحث الكلمات المفتاحية وتدقيق المحتوى بخبرة تزيد على 3 سنوات." },
    { role: "Frontend Web Developer Trainee", company: "Darrebni — حمص", period: "فبراير — نوفمبر 2023", desc: "تدريب منظّم على HTML وCSS وBootstrap وJavaScript والتصميم المتجاوب، مع العمل بمنهجية Agile وGit/GitHub." },
  ],
  education: [
    { role: "كلية تكنولوجيا المعلومات", company: "الجامعة الافتراضية السورية", period: "2023", desc: "" },
    { role: "معهد الحاسوب التقني — هندسة البرمجيات", company: "جامعة حمص", period: "2020", desc: "" },
  ],
  projects: [
    { name: "Weather App", desc: "تطبيق يعرض الطقس حسب موقعك: الحرارة والرياح والرطوبة والعظمى والصغرى.", tech: "Angular, TypeScript, HTML5, CSS3", link: "https://mostafamhli.github.io/weatherapp/", img: "" },
    { name: "Edmate Learning Dashboard", desc: "لوحة تحكم لمنصة تعليمية تعرض الطلاب والمدرّبين والدورات.", tech: "HTML5, CSS3, JavaScript", link: "https://edmate-learning-dashboard.web.app/", img: "" },
    { name: "Techno Tech", desc: "موقع متجاوب مع جميع أحجام الشاشات.", tech: "HTML5, CSS3, Bootstrap, Tailwind", link: "https://mahmoud-alshame.github.io/techno-tech-website/", img: "" },
    { name: "Bondi", desc: "موقع متجاوب مع جميع أحجام الشاشات.", tech: "HTML5, CSS3, Bootstrap, Tailwind", link: "https://mahmoud-alshame.github.io/Bondi/", img: "" },
    { name: "Golden Academy", desc: "موقع أكاديمية متجاوب مع جميع أحجام الشاشات.", tech: "HTML5, CSS3, Bootstrap, Tailwind", link: "https://mahmoud-alshame.github.io/Golden-Academy/index.html", img: "" },
    { name: "E-commerce Website", desc: "موقع تجارة إلكترونية متجاوب.", tech: "HTML5, CSS3, Bootstrap, Tailwind", link: "https://mahmoud-alshame.github.io/E-commerce-Website/", img: "" },
  ],
  skills: [
    { icon: "⌨️", group: "اللغات البرمجية", items: "JavaScript" },
    { icon: "🎨", group: "أدوات الويب", items: "HTML5, CSS3, Bootstrap, Tailwind, Sass" },
    { icon: "⚛️", group: "أطر الواجهات", items: "React" },
    { icon: "☁️", group: "الخلفية والسحابة", items: "Firebase" },
    { icon: "🔀", group: "التحكم بالإصدارات", items: "Git, GitHub" },
    { icon: "🌐", group: "اللغات", items: "English (Professional), العربية (الأم)" },
  ],
    // أسطر "الكود" التي تظهر في الواجهة: k الاسم، v القيمة، hl="1" لتمييز القيمة بالأخضر
  codeLines: [
    { k: "role", v: "front_end + content_team_lead", hl: "" },
    { k: "company", v: "jomla", hl: "1" },
    { k: "stack", v: "react · tailwind · sass", hl: "" },
    { k: "status", v: "accepting_new_ideas", hl: "1" },
  ],
  // نصا التذييل
  footer: { left: "محمود الشامي — جملة (Jomla)", right: "بُني بـ React · 2026" },
  
  seoPoints, seoTools, // اختصار لـ seoPoints: seoPoints
};

export default ar; // يجعل الملف يصدّر كائن البيانات ليُستورد في مكان آخر