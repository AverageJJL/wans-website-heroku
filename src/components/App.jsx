import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Carousel from "./Carousel";
import Notices from "./Notices";
import FAQ from "./FAQ";
import OrderNow from "./OrderNow";
import Footer from "./Footer";
import OpeningHours from "./OpeningHours";
import { Link } from "react-router-dom";
import './styles/styles.css';
// import Header from "/Header";
function App(){
  return(
    <div>
    <Navbar/>
    <Header/>

    <Carousel/>
    <OpeningHours/>
    <Notices/>
    <FAQ/>
    <OrderNow/>
    </div>
  );
}

export default App;
