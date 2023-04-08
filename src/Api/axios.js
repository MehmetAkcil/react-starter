import axios from 'axios';

const obj = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        //Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    }
}

if (window.localStorage.getItem('token') !== null) {
    obj.Authorization = `Bearer ${window.localStorage.getItem('token')}`
}

export default axios.create(obj);