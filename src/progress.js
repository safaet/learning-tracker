export function allItemIds(data) {
  const ids = [];
  data.forEach(sec => sec.topics.forEach(t => t.subs.forEach((_, i) => ids.push(sec.id + ':' + t.id + ':' + i))));
  return ids;
}

export function topicIds(sec, topic) {
  return topic.subs.map((_, i) => sec.id + ':' + topic.id + ':' + i);
}

export function topicProgress(sec, topic, state) {
  const ids = topicIds(sec, topic);
  const done = ids.filter(id => state[id]).length;
  return { done, total: ids.length };
}

export function sectionProgress(sec, state) {
  let done = 0, total = 0;
  sec.topics.forEach(t => {
    const p = topicProgress(sec, t, state);
    done += p.done;
    total += p.total;
  });
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

export function overallPct(data, state) {
  const ids = allItemIds(data);
  const done = ids.filter(id => state[id]).length;
  return { done, total: ids.length, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
}
