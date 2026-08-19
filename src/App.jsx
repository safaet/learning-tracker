import { useState } from 'react';
import TrackerBoard from './components/TrackerBoard.jsx';
import GuidePanel from './components/GuidePanel.jsx';
import RagPanel from './components/RagPanel.jsx';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('tracker');

  return (
    <div className="frame">
      <div className="board">
        <div className="tab-row">
          <button
            className={`tab-btn ${activeTab === 'tracker' ? 'active' : ''}`}
            onClick={() => setActiveTab('tracker')}
          >ট্র্যাকার</button>
          <button
            className={`tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
            onClick={() => setActiveTab('guide')}
          >লার্নিং গাইড</button>
          <button
            className={`tab-btn ${activeTab === 'rag' ? 'active' : ''}`}
            onClick={() => setActiveTab('rag')}
          >RAG প্রজেক্ট</button>
        </div>

        {activeTab === 'tracker' && <TrackerBoard />}
        {activeTab === 'guide' && <GuidePanel />}
        {activeTab === 'rag' && <RagPanel />}

        <div className="ledge"></div>
      </div>
    </div>
  );
}
