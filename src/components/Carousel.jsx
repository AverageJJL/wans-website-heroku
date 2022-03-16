import React, {useState} from "react";
import Reveal from 'react-reveal/Reveal';

function Carousel(){
  // const [direction, setDirection] = useState("");
  // function handleClick(leftOrRight){
  //   setDirection=leftOrRight;
  // }
  return(
    <div id="top-picks" style={{backgroundColor:"#EEEEEE"}}>
      <h1 className="top-picks-h1">Top Picks</h1>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="home-carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
          <div className="img-and-content">
          <Reveal effect="animate__slideInRight">
            <img src="images/salt-and-pepper-chicken.jpg" className="carousel-img" alt="salt and pepper chicken"/>
            </Reveal>
            <Reveal effect="animate__slideInUp">
              <div className="shadow carousel-content-box" style={{width: "70%", height: "400px", borderRadius: "0 21px 21px 0", backgroundColor:"#E1E5EA"}}>
                <div className="container">
                  <div className="carousel-content">
                    <h1>Salt and Pepper Chicken</h1>
                    <p>Crispy batter, deep fried perfectly to please your taste buds</p>
                    <p><a className="btn btn-lg btn-warning" href="./routes/ourMenu.jsx">Order Now</a></p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <div className="img-and-content">
            <Reveal effect="animate__slideInRight">
            <img src="images/ok-chicken(2).jpg" className="carousel-img" alt="shredded shilli chicken"/>
            </Reveal>
            <Reveal effect="animate__slideInUp">
              <div className="shadow carousel-content-box" style={{width: "70%", height: "400px", borderRadius: "0 21px 21px 0", backgroundColor:"#E1E5EA"}}>
                <div className="container">
                  <div className="carousel-content">
                    <h1>Chicken in OK Sauce</h1>
                    <p>Sweet make u likey</p>
                    <p><a className="btn btn-lg btn-warning" href="./routes/ourMenu.jsx">Order Now</a></p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          </div>
          <div className="carousel-item">
          <div className="img-and-content">
            <Reveal effect="animate__slideInRight">
            <img src="images/duck.png" className="carousel-img" alt="duck and pancakes"/>
            </Reveal>
            <Reveal effect="animate__slideInUp">
              <div className="shadow carousel-content-box" style={{width: "70%", height: "400px", borderRadius: "0 21px 21px 0", backgroundColor:"#E1E5EA"}}>
                <div className="container">
                  <div className="carousel-content">
                    <h1>Aromatic Crispy Duck</h1>
                    <p>Deep Fried Shredded Duck with steamed pancakes, fresh cucumber, spring onions and hoisin sauce</p>
                    <p><a className="btn btn-lg btn-warning" href="./routes/ourMenu.jsx">Order Now</a></p>
                  </div>
                </div>
              </div>
            </Reveal>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev"  style={{zIndex:"3"}}  type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel;
