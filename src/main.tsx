import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRouter from './routes/AppRouter';
import './styles/global.css';
import { createRoot } from 'react-dom/client';

/**
 * Application entry point.
 */
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>
  );
}
