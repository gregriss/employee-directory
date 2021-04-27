import React from 'react';
// import logo from './logo.svg';
import person from './person-icon.svg';
import './App.css';
import API from './utils/api.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={person} className="App-logo" alt="logo" />
        <h1>
          Employee Directory 
        </h1>
        <button onClick={() => {
                fetchRandomData();
            }}>Fetch Random Data</button>
            <div>
              {/* {randomData} */}
            </div>
      </header>
    </div>
  );
}

export default App;
