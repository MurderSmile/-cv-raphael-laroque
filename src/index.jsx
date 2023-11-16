import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Styles/css/index.css";
import reportWebVitals from "./reportWebVitals";

import { ProjectProvider } from "./Utils/Context/index";

import Header from "./Components/Header";
import Loading from "./Components/Loading";
import Cv from "./Pages/Cv/index";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectProvider>
        <Header />

        <Loading />

        <Routes>
          <Route path="*" element={<Cv />} />
        </Routes>

        <Footer />
      </ProjectProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
