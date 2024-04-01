import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '../Button/Button';
import RedLine from '../Redline/Redline';
import Link from '../Link/Link';
import Page from '../pages/Page';

const rootUrl = process.env.REACT_APP_BE_APP_ROOT;
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [showGif, setShowGif] = useState(true);
  const [gifFadeOut, setGifFadeOut] = useState(false);
  const [showWelcomeText, setShowWelcomeText] = useState(false);
  const [apiType, setApiType] = useState<'info' | 'summary' | 'education' | 'projects' | 'experience' | null>(null);


  useEffect(() => {
    const gifTimeoutId = setTimeout(() => {
      setGifFadeOut(true);
    }, 2000);

    const welcomeTextTimeoutId = setTimeout(() => {
      setShowGif(false);
      setShowWelcomeText(true);
    }, 4000);

    return () => {
      clearTimeout(gifTimeoutId);
      clearTimeout(welcomeTextTimeoutId);
    };
  }, []);

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    maxWidth: '80%',
    width: '100%',
    gap: '20px',
    margin: 'auto',
  };

  const linkContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '20px',
  };

  const handleReturn = () => {
    setApiType(null);
  };

  return (
    <div className="App">
      <header className={`App-header ${showGif ? 'loading' : ''}`}>
        {showGif && (
          <img
            src="https://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-10.gif"
            className={`App-gif ${gifFadeOut ? 'hide' : ''}`}
            alt="gif"
          />
        )}
        {showWelcomeText && (
          <div>
            <RedLine />
            <div style={linkContainerStyle}>
              <Link linkText="Info" handleClick={() => setApiType('info')} />
              <Link linkText="Summary" handleClick={() => setApiType('summary')} />
              <Link linkText="Education" handleClick={() => setApiType('education')} />
              <Link linkText="Experience" handleClick={() => setApiType('experience')} />
              <Link linkText="Projects" handleClick={() => setApiType('projects')} />
            </div>

            {apiKey && apiType && rootUrl && <Page apiType={apiType} onReturn={handleReturn} urlPath={rootUrl} apiKey={apiKey} />}
            <h1 className="welcome-text">Welcome to Eli Fuchsman's Portfolio</h1>
            <div style={buttonContainerStyle}>
              <Button variation="linkedin" buttonText="Visit LinkedIn" link="https://www.linkedin.com/in/elifuchsman/" />
              <Button variation="github" buttonText="Visit GitHub" link="https://www.github.com/efuchsman/" />
              <Button variation="resume" buttonText="Download Resume" link={`${rootUrl}/resume`} apiKey={apiKey} />
            </div>
            <p></p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
