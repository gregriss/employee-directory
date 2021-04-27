import React from 'react';
// import logo from './logo.svg';
import person from './person-icon.svg';
import './App.css';
import Container from './components/container';

function App() {
  return (
    <>
      <Container />
      <div className="App">
      <header className="App-header">
        <img src={person} className="App-logo" alt="logo" />
        <h1>
          Employee Directory 
        </h1>
        {/* <button onClick={() => {
                search();
            }}>Fetch Random Data</button>
          */}
        </header>
      </div>
    </>
  );
}

export default App;
