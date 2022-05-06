import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.20.110.213:3333'
});