import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('a[href*="#"]', { speed: 500 });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
