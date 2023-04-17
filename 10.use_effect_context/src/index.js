import React from 'react';
import ReactDOM from 'react-dom';
import { AuthCotextProvider } from './store/auth-contex';
import './index.css';
import App from './App';

ReactDOM.render(
  <AuthCotextProvider>
    <App />
  </AuthCotextProvider>,
  document.getElementById('root')
);
