import axios from 'axios';

/* 
In package.json,
"proxy": "http://backend:5000",
will set proxy to overwrite this
*/

// const baseURL = 'http://backend:5000';
const baseURL = 'http://192.168.1.5:5000';
//const baseURL = 'http://localhost:5000';

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
