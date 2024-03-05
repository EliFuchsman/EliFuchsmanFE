import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setShowGif(false);
    }, 5000);
    return () => clearTimeout(timeoutId)
  }, []);

  const headerStyle = {
    backgroundColor: showGif ? '#000' : '#282c34',
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
            {/* You can remove or modify the existing content based on your needs */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
            </p>
          </div>
        )}
      </header>
    </div >
  );
}

export default App;
