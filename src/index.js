import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import moment from 'moment';
import "moment/locale/fr";

moment.locale('fr');

// setup base API url from ENV for dev and production conformity
// axios.defaults.baseURL = "http://108.61.176.171:8080";
axios.defaults.baseURL = "http://127.0.0.1:8080";

// add the auth token to the request
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('_auth');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
