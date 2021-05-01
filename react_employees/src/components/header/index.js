import React from 'react';
import person from '../../person-icon.svg';
import '../../App.css';

const headerStyles = {
    backgroundColor: '#282c34',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 3rem',
    fontSize: 'calc(10px + 1vmin)',
    color: 'white',
    boxShadow: 'inset -5px 1px 15px 5px #1b1e22'
}

function Header() {
    return (
        <>
            <div className="App">
                <header style={headerStyles} className="App-header">
                    <h1>
                        Employee Directory
                    </h1>
                    <img src={person} className="App-logo" alt="logo" />
                </header>
            </div>
        </>
    )
}

export default Header;