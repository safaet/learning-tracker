import { topicProgress } from '../progress.js';

export default function Topic({ sec, topic, state, onToggle }) {
  const tp = topicProgress(sec, topic, state);

  return (
    <div className="topic-group">
      <div className="topic-head">
        <span className="topic-title">{topic.title}</span>
        <span className="topic-count">{tp.done}/{tp.total}</span>
      </div>
      <div className="items">
        {topic.subs.map((label, i) => {
          const id = sec.id + ':' + topic.id + ':' + i;
          const done = !!state[id];
          return (
            <div
              key={id}
              className={`item ${done ? 'done' : ''}`}
              onClick={() => onToggle(id)}
            >
              <span className="box">{done ? '✓' : ''}</span>
              <span className="item-label">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
