import React from "react";
import Footer from "./Footer";
import Reveal from 'react-reveal/Reveal';

function OrderNow(){
  return(

    <div id="orderNow" className="mr-md-3 overflow-hidden">
      <div className="food_background d-md-flex flex-md-equal w-100 pl-md-3">
        <img src="./images/shredded-chilli-beef.jpg" width="100%" height="600px"/>
      </div>
      <div className="order-now-elements my-3 py-3">
      <Reveal effect="animate__fadeInDown">
          <h1>Order Now</h1>
          </Reveal>
          <Reveal effect="animate__slideInUp">
          <div className="bg-light box-shadow mx-auto" style={{width: "80%", height: "400px", borderRadius: "21px 21px 21px 21px", backgroundColor:"#EEEEEE"}}>
            <p>Currently, online ordering is unavailable <br/> however you can still view our menu and learn more about our items by clicking the button below</p>
            <Reveal effect="animate__slideInDown" duration={1500}>
            <a className="btn btn-lg btn-warning" href="./routes/ourMenu.jsx">Our Menu</a>
            </Reveal>
          </div>
          </Reveal>
      </div>
      <Footer/>
    </div>
  );
}

export default OrderNow;
