import React, { useState, useEffect } from 'react';
import './App.css';
import ResumeButton from '../ResumeButton/ResumeButton';
import LinkedInButton from '../LinkedInButton/LinkedInButton';
import GitHubButton from '../GitHubButton/GitHubButton';

function App() {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setShowGif(false);
    }, 4000);
    return () => clearTimeout(timeoutId)
  }, []);

  const headerStyle = {
    backgroundColor: showGif ? '#000' : '#282c34',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
    width: '60%',
  };

  return (
    <div className="App" style={headerStyle}>
      <header className="App-header">
        {showGif ? (
          <img
            src="https://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-10.gif"
            className="Loading-gif"
            alt="gif"
          />
        ) : (
          <div>
            <h1>Welcome to Eli Fuchsman's Portfolio</h1>
            <div style={buttonContainerStyle}>
              <LinkedInButton />
              <GitHubButton />
              <ResumeButton />
            </div>
            <p></p>
          </div>
        )}
      </header>
    </div >
  );
}

export default App;
