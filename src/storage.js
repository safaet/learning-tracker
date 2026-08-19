export const STORAGE_KEY = 'ai-foundations-progress-v2';
export const SYNC_CONFIG_KEY = 'ai-foundations-sync-config-v1';
export const useClaudeStorage = typeof window.storage !== 'undefined';

export async function saveState(key = STORAGE_KEY, state) {
  if (useClaudeStorage) {
    const result = await window.storage.set(key, JSON.stringify(state), false);
    return result ? 'সেভ হয়েছে' : 'সেভ করা যায়নি';
  }
  localStorage.setItem(key, JSON.stringify(state));
  return 'ব্রাউজারে সেভ হয়েছে';
}

export async function loadState(key = STORAGE_KEY) {
  if (useClaudeStorage) {
    const result = await window.storage.get(key, false);
    const state = result && result.value ? JSON.parse(result.value) : {};
    return { state, status: 'রেডি' };
  }
  const raw = localStorage.getItem(key);
  const state = raw ? JSON.parse(raw) : {};
  return { state, status: 'রেডি (ব্রাউজার স্টোরেজ)' };
}

export function loadSyncConfig() {
  try {
    const raw = localStorage.getItem(SYNC_CONFIG_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    return null;
  }
  return null;
}

export function saveSyncConfig(cfg) {
  localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify(cfg));
}

export function normalizeApiUrl(url) {
  return url.trim().replace(/\/+$/, '');
}

export function randomCode(len) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let out = '';
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export async function pullRemote(syncConfig) {
  const res = await fetch(syncConfig.apiUrl + '/api/progress/' + encodeURIComponent(syncConfig.code));
  if (!res.ok) throw new Error('bad response');
  return res.json();
}

export async function pushRemote(syncConfig, state) {
  const res = await fetch(syncConfig.apiUrl + '/api/progress/' + encodeURIComponent(syncConfig.code), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ state })
  });
  if (!res.ok) throw new Error('bad response');
}
