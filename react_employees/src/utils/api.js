import axios from 'axios';
// import { useEffect } from 'react';
// import App from '../App';
// const { useEffect, useState } = React;

// export default {
// setRandomUserDataJSON = useState('');
// useEffect(() => {
//     fetchRandomData().then(randomData => {
//         setRandomUserDataJSON(randomData || 'NO user data found');
//     });
// }, []);

const URL = 'https://randomuser.me/api/';
// let query = '?results=20';

const randomUsers = {

    search: (query) => {
        // return axios.get(BASEURL + query + APIKEY);
        return axios.get(URL + query);
    }
}

export default randomUsers;
