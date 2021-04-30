import React from 'react';
import person from '../../person-icon.svg';
import '../../App.css';

const headerStyles = {
    backgroundColor: '#282c34',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
}

function Header() {
    return (
        <>
            <div className="App">
                <header style={headerStyles} className="App-header">
                    <h2>
                        Employee Directory
                    </h2>
                    <img src={person} className="App-logo" alt="logo" />
                </header>
            </div>
        </>
    )
}

export default Header;