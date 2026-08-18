import { useEffect, useState, useCallback } from 'react';
import { DATA } from '../data.js';
import {
  loadState, saveState, loadSyncConfig, saveSyncConfig,
  normalizeApiUrl, pullRemote, pushRemote
} from '../storage.js';
import LearningCurve from './LearningCurve.jsx';
import SyncPanel from './SyncPanel.jsx';
import Section from './Section.jsx';

export default function TrackerBoard() {
  const [state, setState] = useState({});
  const [statusText, setStatusText] = useState('লোড হচ্ছে...');
  const [syncConfig, setSyncConfig] = useState(null);
  const [syncStatus, setSyncStatus] = useState('সংযুক্ত নয়');
  const [collapsed, setCollapsed] = useState({});
  const [filterMode, setFilterMode] = useState('all');
  const [loaded, setLoaded] = useState(false);

  const persist = useCallback(async (nextState, cfg) => {
    try {
      const status = await saveState(nextState);
      setStatusText(status);
    } catch (e) {
      setStatusText('সেভ করা যায়নি');
    }
    const activeCfg = cfg !== undefined ? cfg : syncConfig;
    if (activeCfg) await doPushRemote(activeCfg, nextState);
  }, [syncConfig]);

  const doPushRemote = async (cfg, currentState) => {
    try {
      setSyncStatus('সিঙ্ক হচ্ছে...');
      await pushRemote(cfg, currentState);
      setSyncStatus('সিঙ্ক হয়েছে');
    } catch (e) {
      setSyncStatus('সিঙ্ক ব্যর্থ');
    }
  };

  const doPullRemote = async (cfg, mergeIfEmpty, currentState) => {
    try {
      setSyncStatus('সিঙ্ক হচ্ছে...');
      const data = await pullRemote(cfg);
      const remoteHasData = data.state && Object.keys(data.state).length > 0;
      if (remoteHasData) {
        setState(data.state);
        const status = await saveState(data.state);
        setStatusText(status);
      } else if (mergeIfEmpty && Object.keys(currentState).length > 0) {
        await pushRemote(cfg, currentState);
      }
      setSyncStatus('সিঙ্ক হয়েছে');
    } catch (e) {
      setSyncStatus('সিঙ্ক ব্যর্থ (অফলাইন মোডে চলছে)');
    }
  };

  useEffect(() => {
    (async () => {
      let initialState = {};
      try {
        const result = await loadState();
        initialState = result.state;
        setStatusText(result.status);
      } catch (e) {
        initialState = {};
        setStatusText('নতুন ট্র্যাকার শুরু হলো');
      }
      setState(initialState);

      const cfg = loadSyncConfig();
      if (cfg) {
        setSyncConfig(cfg);
        setSyncStatus('সংযুক্ত');
        await doPullRemote(cfg, true, initialState);
      }
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
    DATA.forEach(sec => { next[sec.id] = collapse; });
    setCollapsed(next);
  };

  const onConnect = async (apiUrlRaw, code) => {
    const trimmedCode = code.trim();
    if (!apiUrlRaw.trim() || !trimmedCode) {
      setSyncStatus('API URL ও code দুটোই দিন');
      return;
    }
    if (!/^https?:\/\//.test(apiUrlRaw.trim())) {
      setSyncStatus('সঠিক URL দিন (http:// দিয়ে শুরু)');
      return;
    }
    if (!/^[A-Za-z0-9_-]{6,64}$/.test(trimmedCode)) {
      setSyncStatus('code শুধু letters/numbers/-/_ হতে পারে (৬-৬৪ অক্ষর)');
      return;
    }
    const cfg = { apiUrl: normalizeApiUrl(apiUrlRaw), code: trimmedCode };
    saveSyncConfig(cfg);
    setSyncConfig(cfg);
    await doPullRemote(cfg, true, state);
  };

  const onReset = async () => {
    if (!confirm('সব প্রগ্রেস রিসেট করবেন?')) return;
    setState({});
    await persist({});
  };

  if (!loaded) {
    return (
      <div className="frame">
        <div className="board">
          <h1>AI ফাউন্ডেশন ট্র্যাকার</h1>
          <p className="sub">লোড হচ্ছে...</p>
          <div className="ledge"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="frame">
      <div className="board">
        <h1>AI ফাউন্ডেশন ট্র্যাকার</h1>
        <p className="sub">সাব-টপিক লেভেলে চেক করুন — প্রগ্রেস অটো-সেভ হয়</p>

        <LearningCurve data={DATA} state={state} />

        <SyncPanel syncConfig={syncConfig} syncStatus={syncStatus} onConnect={onConnect} />

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

        <div id="sections">
          {DATA.map(sec => (
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
        <div className="ledge"></div>
      </div>
    </div>
  );
}
