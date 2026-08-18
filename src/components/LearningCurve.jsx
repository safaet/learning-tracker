import { overallPct, sectionProgress } from '../progress.js';

export default function LearningCurve({ data, state }) {
  const overall = overallPct(data, state);

  const points = data.map((sec, i) => {
    const p = sectionProgress(sec, state).pct;
    const x = 20 + i * (660 / (data.length - 1));
    const y = 80 - (p / 100) * 65;
    return { x, y };
  });

  const pointsStr = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="curve-wrap">
      <div className="curve-label">
        <span>আপনার লার্নিং কার্ভ</span>
        <span>{overall.pct}%</span>
      </div>
      <svg viewBox="0 0 700 90" style={{ width: '100%', height: '70px', display: 'block' }}>
        <line x1="0" y1="85" x2="700" y2="85" stroke="rgba(242,239,233,0.2)" strokeWidth="1" />
        <polyline
          points={pointsStr}
          fill="none"
          stroke="#e8d97a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 3"
        />
        <g>
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#e8927c" />
          ))}
        </g>
      </svg>
      <div className="curve-count">{overall.done} / {overall.total} সাব-টপিক সম্পন্ন</div>
    </div>
  );
}
