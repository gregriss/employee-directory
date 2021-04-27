import React from 'react';
// import logo from './logo.svg';
import person from './person-icon.svg';
import './App.css';
import fetchRandomData from './utils/api.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={person} className="App-logo" alt="logo" />
        <h1>
          Employee Directory 
          {/* <code>src/App.js</code> */}
        </h1>
        <button onClick={() => {
                fetchRandomData();
            }}>Fetch Random Data</button>
            <div>
              {/* {randomData} */}
            </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
