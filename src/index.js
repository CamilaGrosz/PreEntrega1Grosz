import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDy7L4a8yafZIMqylRQqeHbBpf9k40I2cQ",
  authDomain: "coderhouse-tiendapple.firebaseapp.com",
  projectId: "coderhouse-tiendapple",
  storageBucket: "coderhouse-tiendapple.appspot.com",
  messagingSenderId: "43487489529",
  appId: "1:43487489529:web:5892e214180fb220626128",
  measurementId: "G-NCCSPPZHWQ"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
