import React,{useEffect,useState} from "react";
import Reveal from 'react-reveal/Reveal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function MenuNavbar(){
  return(
    <div className="menu-navbar">
      <nav className="navbar navbar-expand navbar-dark" style={{backgroundColor: "#D82148"}}>
        <Reveal effect="animate__fadeInUp">
          <div className="container-fluid">

              <a className="navbar-brand" href="/">WANS</a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="toggle-cart-btn" data-modal-target="#cart"><ShoppingCartIcon/></a>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
      </nav>
    </div>
  );
}

export default MenuNavbar;
