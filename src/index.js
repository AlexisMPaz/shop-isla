// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Style
import './index.css';

// Components
import App from './components/App';

// Context
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
      <App />
    </CartProvider>
);