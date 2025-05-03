import axios from 'axios';
import {BASE_URL} from './urls';

const apiKey = process.env.IMDB_API_KEY;
const apiToken = process.env.IMDB_API_TOKEN;

const Client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiToken}`,
  },
  params: {
    api_key: apiKey,
    language: 'en-EN',
  },
});

Client.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default Client;
