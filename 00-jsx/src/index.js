// 1. Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import files
import App from './App';

// 2. Get a reference to the div with id root
const element = document.getElementById('root');

// 3. Tell react to take control of that element
const root = ReactDOM.createRoot(element);

// 5. Show the component on the screen
root.render(<App />)