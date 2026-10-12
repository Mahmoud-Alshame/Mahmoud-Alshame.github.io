import ar from "./ar.js";
import { seoPoints, seoTools } from "./seo.js";

const en = {
  ui: {
    chapter: "Chapter", summary: "Summary",
    h1a: "I turn ideas into interfaces,", h1b: "and teams into output.",
    browse: "View projects →", contact: "Get in touch",
    light: "☀ Light", dark: "☾ Dark",
    fRole: "Role", fCompany: "Company", fLoc: "Location",
    edu: "Education", view: "View project ↗", tools: "Tools & skills", built: "Built with React · 2026",
  },
  profile: {
    ...ar.profile, // ننسخ الحقول المشتركة (الإيميل والروابط والصورة) ثم نستبدل النصوص أدناه
    name: "Mahmoud Al-Shame", role: "Front-End Developer & Content Team Lead", company: "Jomla", location: "Homs, Syria",
    heroBio: "Front-end developer and content writers' team lead at Jomla. I build fast, responsive web experiences with React, and lead a content team backed by 3+ years of SEO experience.",
    about: "A front-end developer with 1+ years of experience in React, Tailwind and Sass, focused on performance and user experience. I also lead the content writers' team at Jomla with 3+ years in SEO, and bring that experience to every site I build.",
  },
  show: { ...ar.show },
  titles: {
    about: { label: "About", head: "Front-end developer,", accent: "content team lead." },
    specs: { label: "Expertise", head: "Four skills that compound", accent: "into a complete product." },
    experience: { label: "Experience", head: "A career built", accent: "step by step." },
    projects: { label: "Projects", head: "Work you can", accent: "try for yourself." },
    skills: { label: "Skills", head: "The tools", accent: "I build with." },
    seo: { label: "SEO & Content", head: "Content that gets read,", accent: "rankings that climb." },
    contact: { label: "Contact", head: "Let's build", accent: "something worthwhile." },
  },
  stats: [{ n: "+3", l: "years in SEO" }, { n: "+1", l: "year in front-end" }, { n: "6", l: "live projects" }],
  specs: [
    { title: "Front-End Development", desc: "Fast, responsive interfaces with React, Tailwind and Sass, with attention to performance and cross-browser support.", tags: "react, tailwind, sass" },
    { title: "Content Team Leadership", desc: "Leading the writers' team: assigning tasks, reviewing quality and mentoring writers to deliver polished content on time.", tags: "team_lead, quality_control, mentoring" },
    { title: "SEO & Content", desc: "3+ years of keyword research, page optimization and content audits to grow traffic and improve user experience.", tags: "semrush, keywords, audits" },
    { title: "Analytics & Decisions", desc: "Measuring content performance and making data-driven decisions to improve results.", tags: "analytics, reporting" },
  ],
  experience: [
    { role: "Front-End Developer & Content Team Lead", company: "Jomla", period: "Present", desc: "Building responsive React interfaces and leading the content writers' team: task planning, quality control and SEO strategy." },
    { role: "Frontend Web Developer Trainee", company: "Claud Soft (Remote)", period: "Jan 2025 — Present", desc: "HTML5, CSS3, JavaScript, Bootstrap, Tailwind, Sass and React, plus Git/GitHub, deployment basics, performance tuning and cross-browser compatibility." },
    { role: "SEO Content Writing", company: "Search Engine Optimization", period: "3+ years", desc: "Writing and editing content, keyword research and content audits with 3+ years of experience." },
    { role: "Frontend Web Developer Trainee", company: "Darrebni — Homs", period: "Feb — Nov 2023", desc: "Structured training in HTML, CSS, Bootstrap, JavaScript and responsive design, working with Agile and Git/GitHub." },
  ],
  education: [
    { role: "College of Information Technology", company: "Syrian Virtual University", period: "2023", desc: "" },
    { role: "Computer Technical Institute — Software Engineering", company: "Homs University", period: "2020", desc: "" },
  ],
  projects: [
    { name: "Weather App", desc: "Shows the weather for your location: temperature, wind, humidity, highs and lows.", tech: "Angular, TypeScript, HTML5, CSS3", link: ar.projects[0].link, img: "" },
    { name: "Edmate Learning Dashboard", desc: "Admin dashboard for an education platform showing students, mentors and courses.", tech: "HTML5, CSS3, JavaScript", link: ar.projects[1].link, img: "" },
    { name: "Techno Tech", desc: "A website responsive on every screen size.", tech: "HTML5, CSS3, Bootstrap, Tailwind", link: ar.projects[2].link, img: "" },
    { name: "Bondi", desc: "A website responsive on every screen size.", tech: "HTML5, CSS3, Bootstrap, Tailwind", link: ar.projects[3].link, img: "" },
    { name: "Golden Academy", desc: "A responsive academy website.", tech: "HTML5, CSS3, Bootstrap, Tailwind", link: ar.projects[4].link, img: "" },
    { name: "E-commerce Website", desc: "A responsive online store.", tech: "HTML5, CSS3, Bootstrap, Tailwind", link: ar.projects[5].link, img: "" },
  ],
  skills: [
    { icon: "⌨️", group: "Programming Languages", items: "JavaScript" },
    { icon: "🎨", group: "Web Tools", items: "HTML5, CSS3, Bootstrap, Tailwind, Sass" },
    { icon: "⚛️", group: "Frontend Frameworks", items: "React" },
    { icon: "☁️", group: "Backend & Cloud", items: "Firebase" },
    { icon: "🔀", group: "Version Control", items: "Git, GitHub" },
    { icon: "🌐", group: "Languages", items: "English (Professional), Arabic (Native)" },
  ],
  seoPoints, seoTools,
};

export default en;