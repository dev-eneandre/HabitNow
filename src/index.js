import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"; 
import themeReducer from "./features/theme";
import toggleReducer from "./features/toggle";
import modalReducer from "./features/modal";

const store = configureStore({
  reducer : {
    theme : themeReducer,
    toggle : toggleReducer,
    modal : modalReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
