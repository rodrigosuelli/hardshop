import axios from 'axios';

let url;

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:3333/api';
} else {
  url = process.env.REACT_APP_API_URL;
}

const api = axios.create({
  baseURL: url,
});

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export { api, fetcher };
