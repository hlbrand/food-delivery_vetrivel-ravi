import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AnimatePresence } from "framer-motion";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </BrowserRouter>,
  rootElement
);
