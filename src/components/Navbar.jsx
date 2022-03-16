import React from "react";
import Reveal from 'react-reveal/Reveal';

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#D82148"}}>
<Reveal effect="animate__fadeInUp">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">WANS</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./routes/ourMenu.jsx">Our Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Visit">Visit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Notices">Notices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#FAQ">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#orderNow">Order Now</a>
            </li>
          </ul>
        </div>
      </div>
      </Reveal>
    </nav>
  );
}

export default Navbar;
