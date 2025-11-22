import React, { useState } from 'react';

function ChatComponent() {
  const [prompt, setPrompt] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const askAI = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/ask-ai?prompt=${encodeURIComponent(prompt)}`);
      const data = await response.text();
      setChatResponse(data);
    } catch (error) {
      console.error("Error generating response:", error);
      setChatResponse("Sorry, I couldn't process your request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      askAI();
    }
  };

  return (
    <div className="component-card">
      <div className="component-header">
        <div className="component-icon">💬</div>
        <div className="component-info">
          <h2 className="component-title">AI Chat Assistant</h2>
          <p className="component-description">Ask me anything, get instant answers</p>
        </div>
      </div>

      <div className="component-content">
        {/* Input Section */}
        <div className="input-section">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question here... Press Enter to send"
            className="chat-textarea"
            disabled={isLoading}
          />
          <button
            onClick={askAI}
            disabled={isLoading || !prompt.trim()}
            className="send-button"
          >
            <span className="send-icon">➤</span>
          </button>
        </div>

        {/* Response Section */}
        {(chatResponse || isLoading) && (
          <div className="response-section">
            <div className="response-header">
              <span className="response-indicator">⚡</span>
              <h3 className="response-title">AI Response</h3>
            </div>
            {isLoading ? (
              <div className="loading-container">
                <div className="loading-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <span className="loading-text">Processing your request...</span>
              </div>
            ) : (
              <div className="response-content">
                <p className="response-text">{chatResponse}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatComponent;