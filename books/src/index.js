import React from "react";
import ReactDOM from "react-dom/client";

import App from './App';
import BooksContext from "./context/books";
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BooksContext.Provider value={5}>
    <App />
  </BooksContext.Provider>
 )