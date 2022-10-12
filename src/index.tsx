import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";

import Header from "./components/Header";
import Signup from "./components/Signup";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<App />} >
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
        
      </Router>

    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
