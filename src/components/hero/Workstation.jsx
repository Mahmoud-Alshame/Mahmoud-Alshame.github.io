import { useState } from "react";
import "./Workstation.css";                        // تنسيق وحركات الرسمة (الملف التالي)
import { PLANE, GROUND } from "./parts/geometry";  // زوايا المستويات
import Lines from "./parts/Lines";                 // أسطر الكود الوهمية
import Panel from "./parts/Panel";                 // النافذة العائمة
import Spark from "./parts/Spark";                 // النجمة اللامعة

// مواضع النجوم: [x, y, الحجم, التأخير]. أضف سطراً جديداً لنجمة جديدة
const SPARKS = [[60, 40, 1.3, 0], [236, 48, 1, 0.9], [322, 150, 1.4, 1.7], [118, 176, 0.9, 0.5], [30, 250, 1.1, 1.3], [352, 262, 0.8, 2.1]];

export default function Workstation() {
  const [on, setOn] = useState(false); // للجوال: النقر يفعّل نفس حركة hover (يضيف الصنف "on")

  return (
    <div className={"art" + (on ? " on" : "")} onClick={() => setOn(!on)} aria-hidden="true">
      <svg viewBox="0 0 440 380">
        <defs>{/* تعريفات تُستخدم لاحقاً بالـ id */}
          <linearGradient id="wsGrad">{/* تدرج اللمعان الذي يمر على الشاشة */}
            <stop offset="0" stopColor="var(--ac)" stopOpacity="0" />
            <stop offset=".5" stopColor="var(--ac)" stopOpacity=".45" />
            <stop offset="1" stopColor="var(--ac)" stopOpacity="0" />
          </linearGradient>
          <clipPath id="wsScr"><rect width="190" height="118" rx="3" /></clipPath>{/* قصّ اللمعان داخل الشاشة فقط */}
          <pattern id="wsKeys" width="9" height="9" patternUnits="userSpaceOnUse">{/* مربع مكرر لأزرار الكيبورد */}
            <rect x="1" y="1" width="7" height="7" rx="1.5" fill="var(--m1)" />
          </pattern>
        </defs>

        <ellipse cx="200" cy="322" rx="190" ry="46" fill="var(--tx)" opacity=".06" />{/* ظل المكتب */}
        <g transform={GROUND(162, 233)}><rect width="70" height="46" rx="4" className="bz" /></g>{/* قاعدة الشاشة */}

        <g transform={PLANE}>{/* الشاشة كلها داخل المستوى المائل */}
          <rect x="82" y="120" width="26" height="50" className="bz" />          {/* رقبة الشاشة */}
          <rect x="-8" y="-8" width="206" height="142" rx="8" className="bz" />  {/* الإطار */}
          <rect className="sc" width="190" height="118" rx="3" />                {/* الزجاج */}
          <circle cx="95" cy="127" r="2.5" fill="var(--mu)" />                   {/* زر صغير أسفل الإطار */}
          <g className="lg">{/* الشعار: يكبر عند hover */}
            <circle className="halo" cx="99" cy="66" r="36" fill="var(--ac)" opacity=".35" />
            <circle cx="95" cy="59" r="36" fill="var(--ac)" />
            <text x="95" y="66" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--on)" fontFamily="JetBrains Mono, monospace">{"<MA />"}</text>
          </g>
          {/* اللمعان: skewX يميّله، وclipPath يقصّه داخل الشاشة */}
          <g clipPath="url(#wsScr)"><g transform="skewX(-20)"><rect className="sheen" x="-70" y="-10" width="34" height="140" fill="url(#wsGrad)" /></g></g>
        </g>

        {/* النوافذ العائمة الخمس: المحتوى بين الوسمين هو children */}
        <Panel x={-62} y={-6} w={72} h={84} d={1}>
          <circle cx="-44" cy="12" r="8" fill="var(--mu)" opacity=".5" />
          <rect x="-54" y="30" width="24" height="30" fill="var(--mu)" opacity=".3" />
          <Lines x={-24} y={32} w={28} n={4} />
        </Panel>
        <Panel x={-44} y={86} w={58} h={62} d={2}>
          <circle cx="-30" cy="104" r="6" fill="var(--mu)" opacity=".5" />
          <Lines x={-36} y={118} w={42} n={3} />
        </Panel>
        <Panel x={20} y={-38} w={130} h={36} d={2}><Lines x={34} y={-26} w={100} n={3} /></Panel>
        <Panel x={165} y={0} w={92} h={118} d={3}><Lines x={175} y={14} w={72} n={10} /></Panel>
        <Panel x={205} y={56} w={70} h={88} d={1}><Lines x={215} y={70} w={50} n={6} /></Panel>

        {/* النجوم: map يحوّل كل صف في SPARKS إلى مكوّن Spark */}
        {SPARKS.map(([x, y, s, delay], i) => <Spark key={i} x={x} y={y} s={s} delay={delay} />)}

        <g transform={GROUND(80, 262)}>{/* لوحة المفاتيح */}
          <rect width="130" height="44" rx="4" className="bz" />
          <rect x="4" y="4" width="122" height="36" fill="url(#wsKeys)" />
        </g>
        <g transform={GROUND(212, 285)}>{/* لوحة الماوس والماوس */}
          <rect width="46" height="40" rx="5" className="bz" />
          <rect x="15" y="10" width="15" height="21" rx="7" fill="var(--ac)" />
        </g>

        <g className="gem" style={{ animationDelay: "-1.5s" }}>{/* شارة الكود { } */}
          <g transform="translate(262 318)">
            <rect width="52" height="40" rx="9" fill="var(--card)" stroke="var(--ac)" strokeWidth="1.5" />
            <text x="26" y="27" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--ac)" fontFamily="JetBrains Mono, monospace">{"{ }"}</text>
          </g>
        </g>
        <g className="gem">{/* الكرة الأرضية (الويب) */}
          <g transform="translate(34 330)">
            <circle r="24" fill="var(--card)" stroke="var(--ac)" strokeWidth="1.5" />
            <ellipse rx="10" ry="24" fill="none" stroke="var(--ac)" strokeOpacity=".7" />
            <path d="M-24 0H24M-21 -12H21M-21 12H21" stroke="var(--ac)" strokeOpacity=".7" fill="none" />
          </g>
        </g>
      </svg>
    </div>
  );
}