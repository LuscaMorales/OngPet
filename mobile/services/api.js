import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.36:3000',
  headers: {
    Accept: 'application/json',
  },
});

export const apiFD = axios.create({
  baseURL: 'http://192.168.1.36:3000',
  headers: {
    'Content-Type': 'multipart/form-data'},
});
