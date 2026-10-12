import { PLANE } from "./geometry";   // نفس المجلد parts، لذلك ./

// d = العمق: كلما زاد ابتعدت النافذة أكثر عند hover (يقرؤه CSS عبر var(--d))
export default function Panel({ x, y, w, h, d, children }) {
  return (
    // .fl: يتحرك عند hover. نضع --d هنا فترثه كل العناصر بداخله
    <g className="fl" style={{ "--d": d }}>
      {/* .bob: يطفو باستمرار. فصلناه عن .fl لأن الاثنين يستعملان transform ولا يجتمعان على عنصر واحد */}
      <g className="bob">
        <g transform={PLANE}>   {/* نرسم داخل المستوى المائل */}
          <rect className="pn" x={x} y={y} width={w} height={h} rx="5" />   {/* جسم النافذة */}
          {/* حدّ لامع يدور حولها: pathLength="100" يجعل طول المحيط 100 فنتحكم بالشرطة بسهولة */}
          <rect className="run" x={x} y={y} width={w} height={h} rx="5" pathLength="100" />
          <circle cx={x + 7} cy={y + 7} r="2" fill="var(--ac)" />            {/* نقطة نافذة صغيرة */}
          {children}   {/* محتوى النافذة (أسطر أو دوائر) يمرّره المكوّن الأب */}
        </g>
      </g>
    </g>
  );
}