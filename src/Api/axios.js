import axios from 'axios';

const obj = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {}
};

obj.headers['Content-Type'] = 'application/json';

// `localStorage`'dan token değerini al
const token = localStorage.getItem('token');

if (token) {
  obj.headers.Authorization = `Bearer ${token}`;
}

export default axios.create(obj);
