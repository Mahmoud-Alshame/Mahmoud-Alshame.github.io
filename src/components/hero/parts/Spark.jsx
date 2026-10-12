// نجمة رباعية تلمع. s = الحجم | delay = تأخير بداية الحركة
export default function Spark({ x, y, s, delay }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path className="sp" style={{ animationDelay: delay + "s" }}
        d="M0-7Q0 0 7 0Q0 0 0 7Q0 0-7 0Q0 0 0-7Z" fill="var(--ac)" />
    </g>
  );
}