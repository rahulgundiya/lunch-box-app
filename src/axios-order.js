import axios from 'axios';

 const instance = axios.create({
    baseURL:'https://lunch-app-cf664.firebaseio.com/'
})
export default instance;