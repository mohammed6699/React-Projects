import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import Quiz from "./quiz.jsx";
import "./components/Header/header.css"

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<Quiz />);
