import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '../Button/Button';
import RedLine from '../Redline/Redline';

function App() {
  const [showGif, setShowGif] = useState(true);
  const [gifOpacity, setGifOpacity] = useState(1);
  const [showWelcomeText, setShowWelcomeText] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    const gifTimeoutId = setTimeout(() => {
      setGifOpacity(0);
    }, 4000);

    const welcomeTextTimeoutId = setTimeout(() => {
      setShowGif(false);
      setTextOpacity(1);
      setShowWelcomeText(true);
    }, 6000);
    return () => {
      clearTimeout(gifTimeoutId);
      clearTimeout(welcomeTextTimeoutId);
    }
  }, []);

  const headerStyle = {
    backgroundColor: showGif ? '#000' : '#282c34',
  };

  const gifStyle: React.CSSProperties = {
    opacity: gifOpacity,
    transition: 'opacity 2s ease',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
    width: '60%',
  };

  const welcomeTextStyle: React.CSSProperties = {
    opacity: textOpacity,
    transition: 'opacity 2s ease',
    color: '#fff',
  };

  return (
    <div className="App" style={headerStyle}>
      <header className="App-header">
        {showGif && (
          <img
            src="https://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-10.gif"
            className="Loading-gif"
            alt="gif"
            style={gifStyle}
          />
        )}
        {showWelcomeText && (
          <div>
            <RedLine />
            <h1 style={welcomeTextStyle}>Welcome to Eli Fuchsman's Portfolio</h1>
            <div style={buttonContainerStyle}>
              <Button variation="linkedin" buttonText="Visit LinkedIn" link="https://www.linkedin.com/in/elifuchsman/" />
              <Button variation="github" buttonText="Visit GitHub" link="https://www.github.com/efuchsman/" />
              <Button variation="resume" buttonText="Download Resume" />
            </div>
            <p></p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
