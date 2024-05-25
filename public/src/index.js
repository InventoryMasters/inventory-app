import React from 'react';
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { UserProvider } from './context/UserContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
);
