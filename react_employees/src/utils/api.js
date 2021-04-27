// import React from 'react';
import axios from 'axios';
// import App from '../App';
// const { useEffect } = React;

// useEffect(() => {
//     randomData = fetchRandomData().then(randomData => {
//         setRandomUserDataJSON(randomData || 'NO user data found');
//     });
// }, []);

const fetchRandomData = () => {
    return axios.get('https://randomuser.me/api')
    .then(data => {
        console.log(data);
        return JSON.stringify(data);
    })
    .catch(err => console.log(err));
}

export default fetchRandomData;
