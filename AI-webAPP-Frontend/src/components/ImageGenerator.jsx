import React, { useState } from 'react';

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/generate-image?prompt=${encodeURIComponent(prompt)}`);
      const urls = await response.json();
      setImageUrls(urls);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      generateImage();
    }
  };

  const downloadImage = (url, index) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `generated-image-${index + 1}.jpg`;
    link.click();
  };

  return (
    <div className="component-card">
      <div className="component-header">
        <div className="component-icon">🎨</div>
        <div className="component-info">
          <h2 className="component-title">AI Image Generator</h2>
          <p className="component-description">Create stunning visuals from text descriptions</p>
        </div>
      </div>

      <div className="component-content">
        {/* Input Section */}
        <div className="input-group">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe the image you want to create..."
            className="text-input"
            disabled={isLoading}
          />

          <button
            onClick={generateImage}
            disabled={isLoading || !prompt.trim()}
            className="primary-button"
          >
            {isLoading ? (
              <>
                <div className="button-spinner"></div>
                Generating Images...
              </>
            ) : (
              <>
                <span className="button-icon">✨</span>
                Generate Images
              </>
            )}
          </button>
        </div>

        {/* Image Grid */}
        <div className="image-grid">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="image-slot">
              {imageUrls[index] ? (
                <>
                  <img
                    src={imageUrls[index]}
                    alt={`Generated ${index + 1}`}
                    className="generated-image"
                  />
                  <div className="image-overlay">
                    <button
                      onClick={() => downloadImage(imageUrls[index], index)}
                      className="download-button"
                    >
                      ⬇
                    </button>
                  </div>
                </>
              ) : (
                <div className="empty-slot">
                  <div className="empty-slot-content">
                    <span className="empty-icon">🖼️</span>
                    <p className="empty-text">img {index + 1}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator;