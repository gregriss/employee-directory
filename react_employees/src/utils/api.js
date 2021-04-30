import axios from 'axios';

const URL = 'https://randomuser.me/api/';

const randomUsers = {
    search: (query) => {
        return axios.get(URL + query);
    }
}

export default randomUsers;
