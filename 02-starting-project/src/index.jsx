import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import Quiz from "./quiz.jsx";
import "./components/Header/header.css"
import React from "react";

const entryPoint = document.getElementById("root");
// we can use an alternative way which is create element from react
// ReactDOM.createRoot(entryPoint).render(<App />);
// reactElement accepts a string or a function not an element 
// ReactDOM.createRoot(entryPoint).render(React.createElement(<App />))
ReactDOM.createRoot(entryPoint).render(React.createElement(App))
