import React from 'react';
import axios from 'axios';
// import { useEffect } from 'react';
// import App from '../App';
const { useEffect, useState } = React;


export default function API() {
    const setRandomUserDataJSON = useState('');

    useEffect(() => {
        fetchRandomData().then(randomData => {
            setRandomUserDataJSON(randomData || 'NO user data found');
        });
    }, []);

    const fetchRandomData = () => {
        return axios.get('https://randomuser.me/api/?results=20')
        .then(res => {
            console.log(res.data.results);
            return JSON.stringify(res);
        })
        .catch(err => console.log(err));
    }
}

// export default fetchRandomData;
