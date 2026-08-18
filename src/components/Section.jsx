import { sectionProgress } from '../progress.js';
import Topic from './Topic.jsx';

export default function Section({ sec, state, collapsed, onToggleCollapse, onToggleItem }) {
  const prog = sectionProgress(sec, state);

  return (
    <div className={`section ${collapsed ? 'collapsed' : ''}`}>
      <div className="sec-head" onClick={() => onToggleCollapse(sec.id)}>
        <span className="sec-title">
          <span className="toggle-arrow">▾</span>{sec.title}
        </span>
        <span className="sec-count">{prog.done}/{prog.total}</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: prog.pct + '%' }}></div>
      </div>
      <div className="topics">
        {sec.topics.map(topic => (
          <Topic key={topic.id} sec={sec} topic={topic} state={state} onToggle={onToggleItem} />
        ))}
      </div>
    </div>
  );
}
