import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "app/redux/reducers/rootReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById('root'));

//const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

const store = configureStore({
  reducer: rootReducer,
  //middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});


root.render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
     </Provider>
  </React.StrictMode>
);

reportWebVitals();
