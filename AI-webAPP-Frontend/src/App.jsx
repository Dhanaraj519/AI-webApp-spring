import React, { useState } from 'react';
import ChatComponent from './components/ChatComponent.jsx';
import ImageGenerator from './components/ImageGenerator.jsx';
import RecipeGenerator from './components/RecipeGenerator.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('chat');

  const tabs = [
    { id: 'chat', label: 'AI Chat', icon: '💬' },
    { id: 'recipe-generator', label: 'Recipe Creator', icon: '👨‍🍳' },
    { id: 'image-generator', label: 'Image Generator', icon: '🎨' },
  ];

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1 className="main-title">
            AI <span className="title-accent">Web APP</span>
          </h1>
          <div className="title-underline"></div>
          <p className="subtitle">
            One Place for All Your AI Needs
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'chat' && <ChatComponent />}
          {activeTab === 'recipe-generator' && <RecipeGenerator />}
          {activeTab === 'image-generator' && <ImageGenerator />}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;