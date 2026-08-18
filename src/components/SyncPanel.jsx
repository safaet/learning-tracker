import { useEffect, useState } from 'react';
import { randomCode } from '../storage.js';

export default function SyncPanel({ syncConfig, syncStatus, onConnect }) {
  const [open, setOpen] = useState(false);
  const [apiUrl, setApiUrl] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    if (syncConfig) {
      setApiUrl(syncConfig.apiUrl || '');
      setCode(syncConfig.code || '');
    }
  }, [syncConfig]);

  return (
    <div className={`sync-panel ${open ? 'open' : ''}`}>
      <div className="sync-head" onClick={() => setOpen(o => !o)}>
        <span className="sync-title"><span className="toggle-arrow">▾</span> ডিভাইস সিঙ্ক</span>
        <span className="sync-status">{syncStatus}</span>
      </div>
      <div className="sync-body">
        <div className="sync-row">
          <input
            type="text"
            placeholder="API URL, e.g. https://your-api.onrender.com"
            value={apiUrl}
            onChange={e => setApiUrl(e.target.value)}
          />
        </div>
        <div className="sync-row">
          <input
            type="text"
            placeholder="Sync code"
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          <button className="sync-btn" onClick={() => setCode(randomCode(20))}>জেনারেট</button>
        </div>
        <div className="sync-row">
          <button className="sync-btn" style={{ flex: 1 }} onClick={() => onConnect(apiUrl, code)}>
            সংযোগ করুন ও সিঙ্ক করুন
          </button>
        </div>
        <p className="sync-note">
          এই code-টা password-এর মতো — অন্য ডিভাইসে এই একই URL আর code বসালে একই প্রগ্রেস দেখতে পাবেন। কারো সাথে শেয়ার করবেন না।
        </p>
      </div>
    </div>
  );
}
