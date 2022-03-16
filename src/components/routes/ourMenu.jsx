import React from "react";
import MenuNavbar from "./MenuComponents/MenuNavbar";
import CatagoryCarousel from "./MenuComponents/Catagories/CatagoryCarousel";
import Marquee from "./MenuComponents/Catagories/marquee";
import '../styles/MenuStyles.css';

function Menu(){
  let marqueeNames1 = ["Starters","Salt and Pepper Box","Soups","Spare Ribs and Chicken Wings","Curry Dishes","Noodle Dishes","Fried Rice Dishes","Sweet and Sour Dishes","Pineapple Dishes"];
  let marqueeNames2 = ["Garlic Sauce Dishes","Tomato Dishes","Cashew Nut Dishes","Foo Yung Dishes","Mushroom Dishes","Broccolli Dishes","Sweetcorn Dishes","Green Pepper Dishes","Satay Dishes"];
  let marqueeNames3 = ["Oyster Dishes","Szechuan Dishes","Omelette Dishes","Chilli Sauce Dishes","Kung Po Sauce Dishes","OK Sauce Dishes","King Do Sauce Dishes","Yellow Bean Sauce Dishes","Fresh Ginger & Spring Onion Dishes"];
  let marqueeNames4 = ["Salt & Pepper Dishes","Steak Dishes","Vegetable & Tofu Dishes","Thai Sauce Dishes","Malaysian Sauce Dishes","Lemon/Orange Sauce Dishes","Pork Loin Dishes","English Dishes","Drinks","Extra Portions","Special Set Meals"];
  return(
    <div>
    <MenuNavbar/>
    <div className="catagory-header">
      <Marquee name={marqueeNames1} number={"1"} count={0}/>
      <Marquee name={marqueeNames2} number={"2"} count={9}/>
      <div className="catagory-div">
        <h1 className="header-h1">Our Catagories</h1>
      </div>
      
      <Marquee name={marqueeNames3} number={"3"} count={18}/>
      <Marquee name={marqueeNames4} number={"4"} count={27}/>
    </div>
    
    <CatagoryCarousel/>
   
    </div>
  );
}

export default Menu;
