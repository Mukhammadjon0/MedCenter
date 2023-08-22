import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import { Provider } from 'react-redux';
import store from './api/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
          <App />
        </Provider>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
