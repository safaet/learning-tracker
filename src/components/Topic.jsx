import { topicProgress } from '../progress.js';

export default function Topic({ sec, topic, state, onToggle }) {
  const tp = topicProgress(sec, topic, state);

  return (
    <div className="topic-group">
      <div className="topic-head">
        <span className="topic-title">{topic.title}</span>
        <span className="topic-count">{tp.done}/{tp.total}</span>
      </div>
      {topic.note && <p className="topic-note">{topic.note}</p>}
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
      {topic.resources && topic.resources.length > 0 && (
        <div className="topic-resources">
          <span className="topic-resources-label">রিসোর্স</span>
          <div className="resource-link-list">
            {topic.resources.map((r, i) => (
              <a
                key={i}
                className="resource-link-item"
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
              >{r.text}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
