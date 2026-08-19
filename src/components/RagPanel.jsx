import { useEffect, useState, useCallback } from 'react';
import { RAG_DATA, RAG_INTRO, priorityNote } from '../ragData.js';
import { loadState, saveState } from '../storage.js';
import { overallPct } from '../progress.js';
import Section from './Section.jsx';

const RAG_STORAGE_KEY = 'rag-project-progress-v1';

export default function RagPanel() {
  const [state, setState] = useState({});
  const [statusText, setStatusText] = useState('লোড হচ্ছে...');
  const [collapsed, setCollapsed] = useState({});
  const [filterMode, setFilterMode] = useState('all');
  const [loaded, setLoaded] = useState(false);

  const persist = useCallback(async (nextState) => {
    try {
      const status = await saveState(RAG_STORAGE_KEY, nextState);
      setStatusText(status);
    } catch (e) {
      setStatusText('সেভ করা যায়নি');
    }
  }, []);

  useEffect(() => {
    (async () => {
      let initialState = {};
      try {
        const result = await loadState(RAG_STORAGE_KEY);
        initialState = result.state;
        setStatusText(result.status);
      } catch (e) {
        initialState = {};
        setStatusText('নতুন প্রজেক্ট ট্র্যাকার শুরু হলো');
      }
      setState(initialState);
      setLoaded(true);
    })();
  }, []);

  const onToggleItem = (id) => {
    const nextState = { ...state, [id]: !state[id] };
    setState(nextState);
    persist(nextState);
  };

  const onToggleCollapse = (secId) => {
    setCollapsed(prev => ({ ...prev, [secId]: !prev[secId] }));
  };

  const onFilter = (mode) => {
    setFilterMode(mode);
    const collapse = mode === 'collapse';
    const next = {};
    RAG_DATA.forEach(sec => { next[sec.id] = collapse; });
    setCollapsed(next);
  };

  const onReset = async () => {
    if (!confirm('RAG প্রজেক্টের সব প্রগ্রেস রিসেট করবেন?')) return;
    setState({});
    await persist({});
  };

  if (!loaded) {
    return (
      <>
        <h1>RAG প্রজেক্ট</h1>
        <p className="sub">লোড হচ্ছে...</p>
      </>
    );
  }

  const overall = overallPct(RAG_DATA, state);

  return (
    <>
      <h1>RAG প্রজেক্ট</h1>
      <p className="sub">{RAG_INTRO}</p>

      <div className="rag-progress-summary">
        <div className="curve-label">
          <span>RAG প্রজেক্ট প্রগ্রেস</span>
          <span>{overall.pct}%</span>
        </div>
        <div className="bar-track">
          <div className="bar-fill" style={{ width: overall.pct + '%' }}></div>
        </div>
        <div className="curve-count">{overall.done} / {overall.total} আইটেম সম্পন্ন</div>
      </div>

      <p className="rag-priority"><strong>অগ্রাধিকার:</strong> {priorityNote}</p>

      <div className="filter-row">
        <button
          className={`filter-btn ${filterMode === 'all' ? 'active' : ''}`}
          onClick={() => onFilter('all')}
        >সব খোলা</button>
        <button
          className={`filter-btn ${filterMode === 'collapse' ? 'active' : ''}`}
          onClick={() => onFilter('collapse')}
        >সব বন্ধ</button>
      </div>

      <div id="rag-sections">
        {RAG_DATA.map(sec => (
          <Section
            key={sec.id}
            sec={sec}
            state={state}
            collapsed={!!collapsed[sec.id]}
            onToggleCollapse={onToggleCollapse}
            onToggleItem={onToggleItem}
          />
        ))}
      </div>

      <div className="footer">
        <span className="status">{statusText}</span>
        <button className="reset" onClick={onReset}>রিসেট</button>
      </div>
    </>
  );
}
