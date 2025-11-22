import React, { useState } from 'react';

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const createRecipe = async () => {
    if (!ingredients.trim()) return;
    
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        ingredients,
        dietaryRestrictions,
        cuisine: cuisine || 'any'
      });
      const response = await fetch(`http://localhost:8080/recipe-creator?${params}`);
      const data = await response.text();
      setRecipe(data);
    } catch (error) {
      console.error("Error generating recipe:", error);
      setRecipe("Sorry, I couldn't generate a recipe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="component-card">
      <div className="component-header">
        <div className="component-icon">👨‍🍳</div>
        <div className="component-info">
          <h2 className="component-title">Recipe Creator</h2>
          <p className="component-description">Transform ingredients into delicious recipes</p>
        </div>
      </div>

      <div className="component-content">
        {/* Input Grid */}
        <div className="recipe-inputs">
          <div className="input-field">
            <label className="input-label">
              <span className="label-icon">🥘</span>
              Ingredients *
            </label>
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g., chicken, rice, vegetables"
              className="text-input"
              disabled={isLoading}
            />
          </div>

          <div className="input-field">
            <label className="input-label">
              <span className="label-icon">🌍</span>
              Cuisine Type
            </label>
            <input
              type="text"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              placeholder="e.g., Indian, Asian, chinese"
              className="text-input"
              disabled={isLoading}
            />
          </div>

          <div className="input-field">
            <label className="input-label">
              <span className="label-icon">🥗</span>
              Dietary Restrictions
            </label>
            <input
              type="text"
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
              placeholder="e.g.,vegetarian, non-vegetarian, vegan"
              className="text-input"
              disabled={isLoading}
            />
          </div>
        </div>

        <button
          onClick={createRecipe}
          disabled={isLoading || !ingredients.trim()}
          className="primary-button"
        >
          {isLoading ? (
            <>
              <div className="button-spinner"></div>
              Creating Recipe...
            </>
          ) : (
            <>
              <span className="button-icon">👨‍🍳</span>
              Create Recipe
            </>
          )}
        </button>

        {/* Recipe Output */}
        {(recipe || isLoading) && (
          <div className="response-section">
            <div className="response-header">
              <span className="response-indicator pulse">🔥</span>
              <h3 className="response-title">Your Recipe</h3>
            </div>
            {isLoading ? (
              <div className="loading-container">
                <div className="loading-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <span className="loading-text">Cooking up something delicious...</span>
              </div>
            ) : (
              <div className="recipe-content">
                <pre className="recipe-text">{recipe}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeGenerator;