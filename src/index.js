import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'animate.css';
import Menu from "./components/routes/ourMenu";
import App from './components/App';


const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/routes/ourMenu.jsx" element={<Menu/>}/>

  </Routes>
  </BrowserRouter>,
  rootElement
  
);
// <Route path="/routes/cart.jsx" element={<Cart/>}/>
