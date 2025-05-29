import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';

  return (
    <div className={`app-container ${themeClass}`}>
      <header>
        <h1>Theme Toggler</h1>
      </header>

      <main>
        {
            ooooo
        }
        <p>Current Theme: {isDarkTheme ? 'Dark' : 'Light'}</p>

        <button onClick={toggleTheme}>
          Toggle to {isDarkTheme ? 'Light' : 'Dark'} Theme
        </button>
      </main>
    </div>
  );
}

export default App;