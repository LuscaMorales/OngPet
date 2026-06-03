import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
  },
});

export const apiFD = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'multipart/form-data'},
});
