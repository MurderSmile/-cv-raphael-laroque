import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/css/index.css';
import reportWebVitals from './reportWebVitals';



//import Header from "./Components/Header";
import Cv from './Pages/Cv/index';
//import Descriptif from "./Pages/Cv/CvSections/Descriptif";
//import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {<Cv />}

    {/*<BrowserRouter>

      <Routes>
        <Route path='/' element={<Cv />} />
        <Route path='*' element={<Descriptif />} />
      </Routes>

    </BrowserRouter>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
