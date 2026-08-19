import { useMemo, useRef, useState } from 'react';
import { GUIDE, GUIDE_TITLE, GUIDE_SUBTITLE } from '../guide.js';

const ACCENTS = ['#4fd8c4', '#b48cff', '#e8d97a'];
const SPOTLIGHT_ID = 'top-3';

const NAV_LABELS = {
  'strategy': 'কৌশল',
  'current-status': 'বর্তমান অবস্থা',
  'khan-academy': 'Khan Academy',
  'math-resources': '১. Math',
  'cs-resources': '২. CS',
  'classic-ml-resources': '৩. ML',
  'dl-resources': '৪. DL',
  'nlp-resources': '৫. NLP',
  'llm-resources': '৬. LLM',
  'infra-resources': '৭. Infra',
  'research-resources': '৮. Research',
  [SPOTLIGHT_ID]: 'সংক্ষেপে',
};

const RESOURCE_SECTION_IDS = new Set([
  'math-resources', 'cs-resources', 'classic-ml-resources', 'dl-resources',
  'nlp-resources', 'llm-resources', 'infra-resources', 'research-resources',
]);

function countListItems(blocks) {
  if (!blocks) return 0;
  return blocks.reduce((sum, b) => (b.type === 'ul' || b.type === 'ol' ? sum + b.items.length : sum), 0);
}

function sectionResourceCount(sec) {
  let total = countListItems(sec.blocks);
  if (sec.subsections) {
    for (const sub of sec.subsections) total += countListItems(sub.blocks);
  }
  return total;
}

// Splits a list item's leading bold segment (a resource-type label like "ভিডিও:")
// from the rest of the sentence, so it can be rendered as a separate tag/badge.
function splitLabel(parts) {
  const [first, ...rest] = parts;
  if (first && typeof first === 'object' && first.bold) {
    const label = first.bold.replace(/[:：]\s*$/, '');
    let body = rest;
    if (typeof body[0] === 'string') {
      body = [body[0].replace(/^\s+/, ''), ...body.slice(1)];
    }
    return { label, body };
  }
  return { label: null, body: parts };
}

function Segment({ seg }) {
  if (typeof seg === 'string') return seg;
  if (seg.bold) return <strong>{seg.bold}</strong>;
  if (seg.italic) return <em>{seg.italic}</em>;
  if (seg.code) return <code className="guide-code">{seg.code}</code>;
  if (seg.link) {
    return (
      <a className="guide-link" href={seg.url} target="_blank" rel="noopener noreferrer">
        {seg.link}<span className="guide-link-arrow">↗</span>
      </a>
    );
  }
  return null;
}

function Parts({ parts }) {
  return parts.map((seg, i) => <Segment key={i} seg={seg} />);
}

function ResourceCard({ item }) {
  const parts = Array.isArray(item) ? item : item.parts;
  const { label, body } = splitLabel(parts);
  return (
    <li className="resource-card">
      {label && <span className="resource-tag">{label}</span>}
      <span className="resource-body"><Parts parts={body} /></span>
    </li>
  );
}

function SpotlightCard({ item, index }) {
  const parts = Array.isArray(item) ? item : item.parts;
  const { label, body } = splitLabel(parts);
  return (
    <li className="spotlight-card">
      <span className="spotlight-index">{index + 1}</span>
      <span className="spotlight-text">
        {label && <strong className="spotlight-label">{label}</strong>}
        <span className="resource-body"><Parts parts={body} /></span>
      </span>
    </li>
  );
}

function ListBlock({ type, items, resourceStyle, spotlight }) {
  if (resourceStyle && type === 'ul') {
    return (
      <ul className="resource-list">
        {items.map((item, i) => <ResourceCard key={i} item={item} />)}
      </ul>
    );
  }
  if (spotlight && type === 'ol') {
    return (
      <ol className="spotlight-list">
        {items.map((item, i) => <SpotlightCard key={i} item={item} index={i} />)}
      </ol>
    );
  }
  const Tag = type === 'ol' ? 'ol' : 'ul';
  return (
    <Tag className="guide-list">
      {items.map((item, i) => {
        const isPlain = Array.isArray(item);
        const parts = isPlain ? item : item.parts;
        const children = isPlain ? null : item.children;
        return (
          <li key={i}>
            <Parts parts={parts} />
            {children && (
              <ul className="guide-sublist">
                {children.map((c, j) => <li key={j}><Parts parts={c} /></li>)}
              </ul>
            )}
          </li>
        );
      })}
    </Tag>
  );
}

function Block({ block, resourceStyle, spotlight }) {
  if (block.type === 'p') return <p className="guide-p"><Parts parts={block.parts} /></p>;
  if (block.type === 'note') return <p className="guide-note"><Parts parts={block.parts} /></p>;
  if (block.type === 'ol' || block.type === 'ul') {
    return <ListBlock type={block.type} items={block.items} resourceStyle={resourceStyle} spotlight={spotlight} />;
  }
  return null;
}

function GuideSubsection({ sub, resourceStyle }) {
  return (
    <div className="topic-group">
      <div className="topic-head">
        <span className="topic-title">{sub.title}</span>
      </div>
      <div className="guide-content">
        {sub.blocks.map((block, i) => <Block key={i} block={block} resourceStyle={resourceStyle} />)}
      </div>
    </div>
  );
}

function GuideSection({ sec, collapsed, onToggleCollapse, accent, sectionRef }) {
  const resourceStyle = RESOURCE_SECTION_IDS.has(sec.id);
  const spotlight = sec.id === SPOTLIGHT_ID;
  const count = resourceStyle ? sectionResourceCount(sec) : 0;

  return (
    <div
      ref={sectionRef}
      className={`section guide-section ${collapsed ? 'collapsed' : ''} ${spotlight ? 'guide-spotlight' : ''}`}
      style={{ '--accent': accent }}
    >
      <div className="sec-head" onClick={() => onToggleCollapse(sec.id)}>
        <span className="sec-title">
          <span className="toggle-arrow">▾</span>{sec.title}
        </span>
        {count > 0 && <span className="resource-count">{count}টি রিসোর্স</span>}
      </div>
      <div className="topics">
        {sec.blocks && (
          <div className="guide-content">
            {sec.blocks.map((block, i) => <Block key={i} block={block} resourceStyle={resourceStyle} spotlight={spotlight} />)}
          </div>
        )}
        {sec.subsections && sec.subsections.map(sub => (
          <GuideSubsection key={sub.id} sub={sub} resourceStyle={resourceStyle} />
        ))}
      </div>
    </div>
  );
}

export default function GuidePanel() {
  const [collapsed, setCollapsed] = useState(() => {
    const initial = {};
    GUIDE.forEach(sec => { initial[sec.id] = sec.id !== 'strategy'; });
    return initial;
  });
  const sectionRefs = useRef({});

  const onToggleCollapse = (secId) => {
    setCollapsed(prev => ({ ...prev, [secId]: !prev[secId] }));
  };

  const onFilter = (mode) => {
    const collapse = mode === 'collapse';
    const next = {};
    GUIDE.forEach(sec => { next[sec.id] = collapse; });
    setCollapsed(next);
  };

  const onNavClick = (secId) => {
    setCollapsed(prev => ({ ...prev, [secId]: false }));
    setTimeout(() => {
      sectionRefs.current[secId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const totalResources = useMemo(
    () => GUIDE.reduce((sum, sec) => sum + (RESOURCE_SECTION_IDS.has(sec.id) ? sectionResourceCount(sec) : 0), 0),
    []
  );

  return (
    <>
      <h1>{GUIDE_TITLE}</h1>
      <p className="sub">{GUIDE_SUBTITLE}</p>
      <p className="guide-stat">৮টি টপিকে {totalResources}+ কিউরেটেড রিসোর্স, প্লাস একটা স্টেপ-বাই-স্টেপ স্ট্র্যাটেজি</p>

      <div className="filter-row">
        <button className="filter-btn" onClick={() => onFilter('all')}>সব খোলা</button>
        <button className="filter-btn" onClick={() => onFilter('collapse')}>সব বন্ধ</button>
      </div>

      <div className="guide-nav">
        {GUIDE.map((sec, i) => (
          <button
            key={sec.id}
            className="guide-nav-pill"
            onClick={() => onNavClick(sec.id)}
          >
            <span className="guide-nav-dot" style={{ background: sec.id === SPOTLIGHT_ID ? '#e8d97a' : ACCENTS[i % ACCENTS.length] }} />
            {NAV_LABELS[sec.id] || sec.title}
          </button>
        ))}
      </div>

      <div id="guide-sections">
        {GUIDE.map((sec, i) => (
          <GuideSection
            key={sec.id}
            sec={sec}
            collapsed={!!collapsed[sec.id]}
            onToggleCollapse={onToggleCollapse}
            accent={sec.id === SPOTLIGHT_ID ? '#e8d97a' : ACCENTS[i % ACCENTS.length]}
            sectionRef={el => { sectionRefs.current[sec.id] = el; }}
          />
        ))}
      </div>
    </>
  );
}
