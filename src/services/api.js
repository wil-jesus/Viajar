import axios from 'axios';

const api = axios.create({
  baseURL: 'http://d597dbb53b63.ngrok.io',
});

export default api;
