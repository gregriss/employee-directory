import React from 'react';
import person from '../../person-icon.svg';
import '../../App.css';

const headerStyles = {
    backgroundColor: '#282c34',
    display: 'grid',
    padding: '0.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr)',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
}

function Header() {
    return (
        <>
            <div className="App">
                <header style={headerStyles} className="App-header">
                    <img src={person} className="App-logo" alt="logo" />
                    <h2>
                        Employee Directory
                </h2>
                </header>
            </div>
        </>
    )
}

export default Header;