import axios from "axios";

export const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetcher = (url) => http.get(url).then((res) => res.data);
