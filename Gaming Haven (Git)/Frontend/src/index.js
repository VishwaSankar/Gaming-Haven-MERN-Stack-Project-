import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV==='production') disableReactDevTools();
axios.defaults.baseURL="http://localhost:4000"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <App />
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

