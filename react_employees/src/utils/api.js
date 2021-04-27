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

    const BASEURL = 'https://randomuser.me/api/';
    let query = '?results=20';

    export default {

        search: (query) => {
            // return axios.get(BASEURL + query + APIKEY);
            return axios.get(BASEURL + query);
        }
    }
    