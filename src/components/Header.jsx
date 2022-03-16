import React from "react";
import Reveal from 'react-reveal/Reveal';

function Header(){
  return(
    <div className="d-flex h-100 text-center text-white bg-dark" id="header">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{backgroundColor: "#D82148"}}>
        <main className="px-3">
        <Reveal effect="animate__fadeInUp" duration={2000}>
          <h1 className="header-h1">Delicious Chinese Cuisine</h1>
          </Reveal>
          <Reveal effect="animate__fadeInUp" duration={2000}>
          <p className="lead header-p">since 1990 something</p>
          </Reveal>
          <Reveal effect="animate__fadeInUp"duration={2000}>
          <p className="lead">
            <a href="./routes/ourMenu.jsx" className="btn btn-lg btn-outline-light fw-bold border-white">Our Menu</a>
          </p>
          </Reveal>

        </main>
      </div>
    </div>
  );
}

export default Header;
