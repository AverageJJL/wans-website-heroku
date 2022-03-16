import React,{useEffect} from "react";
import SaltAndPepperBox from "./SaltAndPepperBox";
import starters from "./Menu/starters";
import soups from "./Menu/soups";
import spareRibs from "./Menu/spareRibs";
import curryDishes from "./Menu/curryDishes";
import noodleDishes from "./Menu/noodleDishes";
import friedRiceDishes from "./Menu/friedRiceDishes";
import sweetAndSourDishes from "./Menu/sweetAndSourDishes";
import pineappleDishes from "./Menu/pineappleDishes";
import garlicSauceDishes from "./Menu/garlicSauceDishes";
import tomatoDishes from "./Menu/tomatoDishes";
import cashewNutDishes from "./Menu/cashewNutDishes";
import fooYungDishes from "./Menu/fooYungDishes";
import mushroomDishes from "./Menu/mushroomDishes";
import broccoliDishes from "./Menu/broccoliDishes";
import sweetcornDishes from "./Menu/sweetcornDishes";
import greenPepperDishes from "./Menu/greenPepperDishes";
import satayDishes from "./Menu/satayDishes";
import oysterSauceDishes from "./Menu/oysterSauceDishes";
import szechuanDishes from "./Menu/szechuanDishes";
import chilliSauceDishes from "./Menu/chilliSauceDishes";
import omelette from "./Menu/omelette";
import kungPoSauceDishes from "./Menu/kungPoSauceDishes";
import okSauceDishes from "./Menu/okSauceDishes";
import kingDoSauceDishes from "./Menu/kingDoSauceDishes";
import yellowBeanSauceDishes from "./Menu/yellowBeanDishes";
import freshGingerAndSpringOnionDishes from "./Menu/freshGingerAndSpringOnionDishes";
import saltAndPepperDishes from "./Menu/saltAndPepperDishes";
import steakDishes from "./Menu/steakDishes";
import vegetableAndTofuDishes from "./Menu/vegetableAndTofuDishes";
import thaiSauceDishes from "./Menu/thaiSauceDishes";
import malaysianSauceDishes from "./Menu/malaysianSauceDishes";
import lemonOrOrangeSauceDishes from "./Menu/lemonOrOrangeSauceDishes";
import porkLoinDishes from "./Menu/porkLoinDishes";
import englishDishes from "./Menu/englishDishes";
import drinks from "./Menu/drinks";
import extraPortions from "./Menu/extraPortions";
import specialSetMeals from "./Menu/specialSetMeals";
import Cart from './cart.jsx';
import CatagoryCard from "./CatagoryCard";

function CatagoryCarousel(){

    let soupItemsName = []
    let soupItemsPrice = []
    let spareRibItemsName = []
    let spareRibItemsPrice = []
    let starterItemsName = [];
    let starterItemsPrice = [];
    let starterDescriptions = [];
    let curryItemsName = [];
    let curryItemsPrice = [];
    let noodleItemsName = [];
    let noodleItemsPrice = [];
    let friedRiceItemsName = [];
    let friedRiceItemsPrice = [];
    let sweetAndSourItemsName = [];
    let sweetAndSourItemsPrice = [];
    let pineappleDishesItemsName = [];
    let pineappleDishesItemsPrice = [];
    let garlicSauceDishesItemsName = [];
    let garlicSauceDishesItemsPrice = [];
    let tomatoDishesItemsName = [];
    let tomatoDishesItemsPrice = [];
    let cashewNutDishesItemsName = [];
    let cashewNutDishesItemsPrice = [];
    let fooYungDishesItemsName = [];
    let fooYungDishesItemsPrice = [];
    let mushroomDishesItemsName = [];
    let mushroomDishesItemsPrice = [];
    let broccoliDishesItemsName = [];
    let broccoliDishesItemsPrice = [];
    let sweetcornDishesItemsName = [];
    let sweetcornDishesItemsPrice = [];
    let greenPepperDishesItemsName = [];
    let greenPepperDishesItemsPrice = [];
    let satayDishesItemsName = [];
    let satayDishesItemsPrice = [];
    let oysterSauceDishesItemsName = [];
    let oysterSauceDishesItemsPrice = [];
    let szechuanDishesItemsName = [];
    let szechuanDishesItemsPrice = [];
    let omeletteItemsName = [];
    let omeletteItemsPrice = [];
    let chilliSauceDishesItemsName = [];
    let chilliSauceDishesItemsPrice = [];
    let kungPoSauceDishesItemsName = [];
    let kungPoSauceDishesItemsPrice = [];
    let okSauceDishesItemsName = [];
    let okSauceDishesItemsPrice = [];
    let kingDoSauceDishesItemsName = [];
    let kingDoSauceDishesItemsPrice = [];
    let yellowBeanSauceDishesItemsName = [];
    let yellowBeanSauceDishesItemsPrice = [];
    let freshGingerAndSpringOnionDishesItemsName = [];
    let freshGingerAndSpringOnionDishesItemsPrice = [];
    let saltAndPepperDishesItemsName = [];
    let saltAndPepperDishesItemsPrice = [];
    let steakDishesItemsName = [];
    let steakDishesItemsPrice = [];
    let vegetableAndTofuDishesItemsName = [];
    let vegetableAndTofuDishesItemsPrice = [];
    let thaiSauceDishesItemsName = [];
    let thaiSauceDishesItemsPrice = [];
    let malaysianSauceDishesItemsName = [];
    let malaysianSauceDishesItemsPrice = [];
    let lemonOrOrangeSauceDishesItemsName = [];
    let lemonOrOrangeSauceDishesItemsPrice = [];
    let porkLoinDishesItemsName = [];
    let porkLoinDishesItemsPrice = [];
    let englishDishesItemsName = [];
    let englishDishesItemsPrice = [];
    let drinksItemsName = [];
    let drinksItemsPrice = [];
    let drinksDescription = [];
    let extraPortionsItemsName = [];
    let extraPortionsItemsPrice = [];
    let extraPortionsDescriptions = [];
    let specialSetMealsItemsName = [];
    let specialSetMealsItemsPrice = [];
    let specialSetMealsDescriptions = [];

    for(let i=0; i<starters.length;i++){
        starterItemsName.push(starters[i].name);
        starterItemsPrice.push(starters[i].price);
        starterDescriptions.push(starters[i].ingredients);
    }
    for(let j=0; j<soups.length;j++){
        soupItemsName.push(soups[j].name);
        soupItemsPrice.push(soups[j].price);
    }
    for(let k=0; k<spareRibs.length;k++){
        spareRibItemsName.push(spareRibs[k].name);
        spareRibItemsPrice.push(spareRibs[k].price);
    }
    for(let l=0; l<9;l++){
      curryItemsName.push(curryDishes[l].name);
      curryItemsPrice.push(curryDishes[l].price);
      chilliSauceDishesItemsName.push(chilliSauceDishes[l].name);
      chilliSauceDishesItemsPrice.push(chilliSauceDishes[l].price);
    }
    for(let m=0; m<noodleDishes.length;m++){
      noodleItemsName.push(noodleDishes[m].name);
      noodleItemsPrice.push(noodleDishes[m].price);
    }
    for(let n=0; n<friedRiceDishes.length;n++){
      friedRiceItemsName.push(friedRiceDishes[n].name);
      friedRiceItemsPrice.push(friedRiceDishes[n].price);
    }
    for(let o=0; o<sweetAndSourDishes.length;o++){
      sweetAndSourItemsName.push(sweetAndSourDishes[o].name);
      sweetAndSourItemsPrice.push(sweetAndSourDishes[o].price);
      vegetableAndTofuDishesItemsName.push(vegetableAndTofuDishes[o].name);
      vegetableAndTofuDishesItemsPrice.push(vegetableAndTofuDishes[o].price);
    }
    for(let p=0; p<6;p++){
      pineappleDishesItemsName.push(pineappleDishes[p].name);
      pineappleDishesItemsPrice.push(pineappleDishes[p].price);
      garlicSauceDishesItemsName.push(garlicSauceDishes[p].name);
      garlicSauceDishesItemsPrice.push(garlicSauceDishes[p].price);
      yellowBeanSauceDishesItemsName.push(yellowBeanSauceDishes[p].name);
      yellowBeanSauceDishesItemsPrice.push(yellowBeanSauceDishes[p].price);
      freshGingerAndSpringOnionDishesItemsName.push(freshGingerAndSpringOnionDishes[p].name);
      freshGingerAndSpringOnionDishesItemsPrice.push(freshGingerAndSpringOnionDishes[p].price);
      saltAndPepperDishesItemsName.push(saltAndPepperDishes[p].name);
      saltAndPepperDishesItemsPrice.push(saltAndPepperDishes[p].price);
    }
    for(let q=0; q<7;q++){
      tomatoDishesItemsName.push(tomatoDishes[q].name);
      tomatoDishesItemsPrice.push(tomatoDishes[q].price);
      cashewNutDishesItemsName.push(cashewNutDishes[q].name);
      cashewNutDishesItemsPrice.push(cashewNutDishes[q].price);
      mushroomDishesItemsName.push(mushroomDishes[q].name);
      mushroomDishesItemsPrice.push(mushroomDishes[q].price);
      broccoliDishesItemsName.push(broccoliDishes[q].name);
      broccoliDishesItemsPrice.push(broccoliDishes[q].price);
      sweetcornDishesItemsName.push(sweetcornDishes[q].name);
      sweetcornDishesItemsPrice.push(sweetcornDishes[q].price);
      greenPepperDishesItemsName.push(greenPepperDishes[q].name);
      greenPepperDishesItemsPrice.push(greenPepperDishes[q].price);
      satayDishesItemsName.push(satayDishes[q].name);
      satayDishesItemsPrice.push(satayDishes[q].price);
      oysterSauceDishesItemsName.push(oysterSauceDishes[q].name);
      oysterSauceDishesItemsPrice.push(oysterSauceDishes[q].price);
      szechuanDishesItemsName.push(szechuanDishes[q].name);
      szechuanDishesItemsPrice.push(szechuanDishes[q].price);
      omeletteItemsName.push(omelette[q].name);
      omeletteItemsPrice.push(omelette[q].price);
      kungPoSauceDishesItemsName.push(kungPoSauceDishes[q].name);
      kungPoSauceDishesItemsPrice.push(kungPoSauceDishes[q].price);

    }
    for(let r=0; r<8;r++){
      fooYungDishesItemsName.push(fooYungDishes[r].name);
      fooYungDishesItemsPrice.push(fooYungDishes[r].price);

    }
    for(let s=0; s<5;s++){
      okSauceDishesItemsName.push(okSauceDishes[s].name);
      okSauceDishesItemsPrice.push(okSauceDishes[s].price);
      kingDoSauceDishesItemsName.push(kingDoSauceDishes[s].name);
      kingDoSauceDishesItemsPrice.push(kingDoSauceDishes[s].price);
      porkLoinDishesItemsName.push(porkLoinDishes[s].name);
      porkLoinDishesItemsPrice.push(porkLoinDishes[s].price);
      specialSetMealsItemsName.push(specialSetMeals[s].name);
      specialSetMealsItemsPrice.push(specialSetMeals[s].price);
      specialSetMealsDescriptions.push(specialSetMeals[s].ingredients);

    }
    for(let t=0; t<4;t++){
      steakDishesItemsName.push(steakDishes[t].name);
      steakDishesItemsPrice.push(steakDishes[t].price);
      thaiSauceDishesItemsName.push(thaiSauceDishes[t].name);
      thaiSauceDishesItemsPrice.push(thaiSauceDishes[t].price);
      malaysianSauceDishesItemsName.push(malaysianSauceDishes[t].name);
      malaysianSauceDishesItemsPrice.push(malaysianSauceDishes[t].price);
      lemonOrOrangeSauceDishesItemsName.push(lemonOrOrangeSauceDishes[t].name);
      lemonOrOrangeSauceDishesItemsPrice.push(lemonOrOrangeSauceDishes[t].price);

    }
    for(let u=0; u<8;u++){
      englishDishesItemsName.push(englishDishes[u].name);
      englishDishesItemsPrice.push(englishDishes[u].price);

    }
    for(let v=0; v<2;v++){
      drinksItemsName.push(drinks[v].name);
      drinksItemsPrice.push(drinks[v].price);
      drinksDescription.push(drinks[v].ingredients);

    }
    for(let w=0; w<27;w++){
      extraPortionsItemsName.push(extraPortions[w].name);
      extraPortionsItemsPrice.push(extraPortions[w].price);
      extraPortionsDescriptions.push(extraPortions[w].ingredients);

    }
    

  useEffect(()=>{
    const openModalButtons = document.querySelectorAll("[data-modal-target]");
    const closeModalButtons = document.querySelectorAll("[data-close-button]");
    const overlay = document.getElementById("overlay");
    const startersCard = document.getElementById("Starters");

    if(startersCard.parentElement.classList.contains("active")){
      startersCard.parentElement.parentElement.classList.add("starter-height");
    }
    else{
      startersCard.parentElement.parentElement.classList.remove("starter-height");
    }
    

    overlay.addEventListener("click", () =>{
      const modals = document.querySelectorAll("#cart.active");
      modals.forEach(modal =>{
        closeModal(modal);
      })
    })

    openModalButtons.forEach(button => {
      button.addEventListener("click", () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
      })
    });
    closeModalButtons.forEach(button => {
      button.addEventListener("click", () =>{
        const modal = button.parentElement.parentElement.parentElement.parentElement;
        closeModal(modal);
      })
    });

    function openModal(modal){
      if(modal == null){
        return
      }else{
        modal.classList.add("active");
        overlay.classList.add("active");
      }
    }

    function closeModal(modal){
      if(modal == null){
        return;
      }else{
        modal.classList.remove("active");
        overlay.classList.remove("active");
      }
    }

    
    
    

  });
 
  ////////////////////////////////////increasing height for noodle section///////////////////////////////

  //////////carousel button clicks//////////
  function hanleCarouselClickForwards(){
    let currentCard = document.getElementById("carouselInner");
    let currentCardId = currentCard.getElementsByClassName("active")[0].lastElementChild.getAttribute("id");
    if(currentCardId==="Starters"){
      removeSizeClasses();
      currentCard.classList.remove("starter-height");
    }
    else if(currentCardId==="CurryDishes"){
      removeSizeClasses();
      currentCard.classList.add("extra-height");
    } 
    else if(currentCardId==="Drinks"){
      removeSizeClasses();
      currentCard.classList.add("extra-portion-height");
    }
    else if(currentCardId==="ExtraPortions"){
      removeSizeClasses();
      currentCard.classList.add("extra-extra-height");
    }
    else if(currentCardId==="SaltandPepperBox" || currentCardId==="Sweet&SourDishes" || currentCardId==="PineappleDishes"|| currentCardId==="GarlicSauceDishes"|| currentCardId==="TomatoDishes"||currentCardId==="FooYungDishes"||  currentCardId==="BroccoliDishes"|| currentCardId==="GreenPepperDishes"|| currentCardId==="SatayDishes"|| currentCardId==="OysterSauceDishes"|| currentCardId==="SzechuanDishes" || currentCardId==="ChilliSauceDishes"|| currentCardId==="KungPoSauceDishes"|| currentCardId==="OKSauceDishes"|| currentCardId==="FreshGinger&SpringOnionDishes"|| currentCardId==="Salt&PepperDishes"|| currentCardId==="VegetableAndTofuDishes"|| currentCardId==="ThaiSauceDishes"|| currentCardId==="MalaysianSauceDishes"|| currentCardId==="Lemon/OrangeSauceDishes"|| currentCardId==="EnglishDishes"){
      removeSizeClasses();
      currentCard.classList.add("decrease-height");
    }
    else if(currentCardId==="SpecialSetMeals"){
      removeSizeClasses();
      currentCard.classList.add("starter-height");
    }
    else{
      removeSizeClasses();
    }
   }
   function hanleCarouselClickBackwards(){
    let currentCard = document.getElementById("carouselInner");
    let currentCardId = currentCard.getElementsByClassName("active")[0].lastElementChild.getAttribute("id");
    
    if(currentCardId==="FriedRiceDishes"){
      removeSizeClasses();
      currentCard.classList.add("extra-height");
    } 
    else if(currentCardId==="SaltandPepperBox"){
      removeSizeClasses();
      currentCard.classList.add("starter-height")
    }
    else if(currentCardId==="SpecialSetMeals"){
      removeSizeClasses();
      currentCard.classList.add("extra-portion-height");
    }
    else if(currentCardId==="Starters"){
      removeSizeClasses();
      currentCard.classList.add("extra-extra-height");
    }
    else if(currentCardId==="SpareRibs&ChickenWings"|| currentCardId==="ExtraPortions" || currentCardId==="GarlicSauceDishes"|| currentCardId==="TomatoDishes"|| currentCardId==="CashewNutDishes"|| currentCardId==="FooYungDishes"||currentCardId==="BroccoliDishes"|| currentCardId==="GreenPepperDishes"|| currentCardId==="OysterSauceDishes"|| currentCardId==="SzechuanDishes" || currentCardId==="OmeletteDishes"|| currentCardId==="ChilliSauceDishes"|| currentCardId==="OKSauceDishes"|| currentCardId==="KingDoSauceDishes"|| currentCardId==="SteakDishes"|| currentCardId==="VegetableAndTofuDishes"|| currentCardId==="MalaysianSauceDishes"|| currentCardId==="Lemon/OrangeSauceDishes"|| currentCardId==="PorkLoinDishes"|| currentCardId==="EnglishDishes"|| currentCardId==="YellowBeanSauceDishes"){
      removeSizeClasses();
      currentCard.classList.add("decrease-height"); 
    }
    else{
     removeSizeClasses();
    }
   }
   function removeSizeClasses(){
    let currentCard = document.getElementById("carouselInner");
    if(currentCard.classList.contains("extra-height")){
      currentCard.classList.remove("extra-height");
    }
    if(currentCard.classList.contains("decrease-height")){
      currentCard.classList.remove("decrease-height");
    }
    if(currentCard.classList.contains("extra-extra-height")){
      currentCard.classList.remove("extra-extra-height");
    }
    if(currentCard.classList.contains("starter-height")){
      currentCard.classList.remove("starter-height");
    }
    if(currentCard.classList.contains("extra-portion-height")){
      currentCard.classList.remove("extra-portion-height");
    }
    
   }

   ////////////noodle button click/////////////
   function increaseSize(){
    let currentCard = document.getElementById("carouselInner");
    removeSizeClasses();
    currentCard.classList.add("extra-height");
    
   }

   function addStarterHeight(){
    let currentCard = document.getElementById("carouselInner");
    removeSizeClasses();
    currentCard.classList.add("starter-height");

   }

   function addExtraPortionHeight(){
    let currentCard = document.getElementById("carouselInner");
    removeSizeClasses();
    currentCard.classList.add("extra-portion-height");
   }

   function addExtraExtraHeight(){
    let currentCard = document.getElementById("carouselInner");
    removeSizeClasses();
    currentCard.classList.add("extra-extra-height");

   }
   ////////////////////////////////////////////reverting heights back to normal on other button clicks////////////////////////////////
   function handleBtnClick(){
    let currentCard = document.getElementById("carouselInner");
    removeSizeClasses();
   }
   /////////////////////////////////////////////decreasing height for smaller sections//////////////////////////////////
   function decreaseSize(){
    let currentCard = document.getElementById("carouselInner");
    removeSizeClasses();
    currentCard.classList.add("decrease-height");
   }

    return(
        <div className="catagory-carousel">
            <Cart/>
            <div className="" id="overlay"></div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
              <ol className="carousel-indicators row">
                <li onClick={addStarterHeight} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="col-md-3 col-6 indicatorBtn active">Starters</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="col-md-3 col-6 indicatorBtn">Salt & Pepper Box</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="col-md-3 col-6 indicatorBtn">Soup</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="col-md-3 col-6 indicatorBtn">Spare Ribs & Chicken Wings</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="col-md-3 col-6 indicatorBtn">Curry Dishes</li>
                <li onClick={increaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" className="col-md-3 col-6 indicatorBtn">Noodle Dishes</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" className="col-md-3 col-6 indicatorBtn">Fried Rice Dishes</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" className="col-md-3 col-6 indicatorBtn">Sweet & Sour Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" className="col-md-3 col-6 indicatorBtn">Pineapple Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" className="col-md-3 col-6 indicatorBtn">Garlic Sauce Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" className="col-md-3 col-6 indicatorBtn">Tomato Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" className="col-md-3 col-6 indicatorBtn">Cashew Nut Dishes</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12" className="col-md-3 col-6 indicatorBtn">Foo Yung Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13" className="col-md-3 col-6 indicatorBtn">Mushroom Dishes</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14" className="col-md-3 col-6 indicatorBtn">Broccoli Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="15" className="col-md-3 col-6 indicatorBtn">Sweetcorn Dishes</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="16" className="col-md-3 col-6 indicatorBtn">Green Pepper Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="17" className="col-md-3 col-6 indicatorBtn">Satay Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="18" className="col-md-3 col-6 indicatorBtn">Oyster Sauce Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="19" className="col-md-3 col-6 indicatorBtn">Szechuan Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="20" className="col-md-3 col-6 indicatorBtn">Omelette</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="21" className="col-md-3 col-6 indicatorBtn">Chilli Sauce Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="22" className="col-md-3 col-6 indicatorBtn">Kung Po Sauce Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="23" className="col-md-3 col-6 indicatorBtn">OK Sauce Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="24" className="col-md-3 col-6 indicatorBtn">King Do Dishes</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="25" className="col-md-3 col-6 indicatorBtn">Yellow Bean Sauce Dishes</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="26" className="col-md-3 col-6 indicatorBtn">Fresh Ginger & Spring Onion Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="27" className="col-md-3 col-6 indicatorBtn">Salt & Pepper Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="28" className="col-md-3 col-6 indicatorBtn">Steak Dishes</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="29" className="col-md-3 col-6 indicatorBtn">Vegetable & Tofu Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="30" className="col-md-3 col-6 indicatorBtn">Thai Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="31" className="col-md-3 col-6 indicatorBtn">Malaysia Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="32" className="col-md-3 col-6 indicatorBtn">Lemon/Orange Sauce Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="33" className="col-md-3 col-6 indicatorBtn">Pork Loin Dishes</li>
                <li onClick={handleBtnClick} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="34" className="col-md-3 col-6 indicatorBtn">English Dishes</li>
                <li onClick={decreaseSize} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="35" className="col-md-3 col-6 indicatorBtn">Drinks</li>
                <li onClick={addExtraPortionHeight} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="36" className="col-md-3 col-6 indicatorBtn">Extra Portions</li>
                <li onClick={addExtraExtraHeight} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="37" className="col-md-3 col-6 indicatorBtn">Special Set Meals</li>
                
                
              </ol>
                <div id="carouselInner" className="carousel-inner">
                    <div className="carousel-item first active">
                    <CatagoryCard name={"Starters"} numOfItems={14} start={starters[0].id} count={"One"} itemName={starterItemsName} itemPrice={starterItemsPrice} description={starterDescriptions}/>
                    
                    </div>
                    <div className="carousel-item">
                    <SaltAndPepperBox/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Soups"} numOfItems={7} start={soups[0].id} count={"Two"} itemName={soupItemsName} itemPrice={soupItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Spare Ribs & Chicken Wings"} numOfItems={11}  start={spareRibs[0].id} count={"Three"} itemName={spareRibItemsName} itemPrice={spareRibItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Curry Dishes"} numOfItems={9}  start={curryDishes[0].id} count={"Four"} itemName={curryItemsName} itemPrice={curryItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Noodle Dishes"} numOfItems={21}  start={noodleDishes[0].id} count={"Four"} itemName={noodleItemsName} itemPrice={noodleItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Fried Rice Dishes"} numOfItems={12}  start={friedRiceDishes[0].id} count={"Five"} itemName={friedRiceItemsName} itemPrice={friedRiceItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Sweet & Sour Dishes"} numOfItems={10}  start={sweetAndSourDishes[0].id} count={"Six"} itemName={sweetAndSourItemsName} itemPrice={sweetAndSourItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Pineapple Dishes"} numOfItems={6}  start={pineappleDishes[0].id} count={"Seven"} itemName={pineappleDishesItemsName} itemPrice={pineappleDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Garlic Sauce Dishes"} numOfItems={6}  start={garlicSauceDishes[0].id} count={"Eight"} itemName={garlicSauceDishesItemsName} itemPrice={garlicSauceDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Tomato Dishes"} numOfItems={7}  start={tomatoDishes[0].id} count={"Nine"} itemName={tomatoDishesItemsName} itemPrice={tomatoDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Cashew Nut Dishes"} numOfItems={7}  start={cashewNutDishes[0].id} count={"Ten"} itemName={cashewNutDishesItemsName} itemPrice={cashewNutDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Foo Yung Dishes"} numOfItems={8}  start={fooYungDishes[0].id} count={"Eleven"} itemName={fooYungDishesItemsName} itemPrice={fooYungDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Mushroom Dishes"} numOfItems={7}  start={mushroomDishes[0].id} count={"Eleven"} itemName={mushroomDishesItemsName} itemPrice={mushroomDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Broccoli Dishes"} numOfItems={7}  start={broccoliDishes[0].id} count={"Twelve"} itemName={broccoliDishesItemsName} itemPrice={broccoliDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Sweetcorn Dishes"} numOfItems={7}  start={sweetcornDishes[0].id} count={"Thirteen"} itemName={sweetcornDishesItemsName} itemPrice={sweetcornDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Green Pepper Dishes"} numOfItems={7}  start={greenPepperDishes[0].id} count={"Fourteen"} itemName={greenPepperDishesItemsName} itemPrice={greenPepperDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Satay Dishes"} numOfItems={7}  start={satayDishes[0].id} count={"Fifthteen"} itemName={satayDishesItemsName} itemPrice={satayDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Oyster Sauce Dishes"} numOfItems={7}  start={oysterSauceDishes[0].id} count={"Sixteen"} itemName={oysterSauceDishesItemsName} itemPrice={oysterSauceDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Szechuan Dishes"} numOfItems={7}  start={szechuanDishes[0].id} count={"Seventeen"} itemName={szechuanDishesItemsName} itemPrice={szechuanDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Omelette Dishes"} numOfItems={7}  start={omelette[0].id} count={"Eighteen"} itemName={omeletteItemsName} itemPrice={omeletteItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Chilli Sauce Dishes"} numOfItems={9}  start={chilliSauceDishes[0].id} count={"Nineteen"} itemName={chilliSauceDishesItemsName} itemPrice={chilliSauceDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Kung Po Sauce Dishes"} numOfItems={7}  start={kungPoSauceDishes[0].id} count={"Twenty"} itemName={kungPoSauceDishesItemsName} itemPrice={kungPoSauceDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"OK Sauce Dishes"} numOfItems={5}  start={okSauceDishes[0].id} count={"TwentyOne"} itemName={okSauceDishesItemsName} itemPrice={okSauceDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"King Do Sauce Dishes"} numOfItems={5}  start={kingDoSauceDishes[0].id} count={"TwentyTwo"} itemName={kingDoSauceDishesItemsName} itemPrice={kingDoSauceDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Yellow Bean Sauce Dishes"} numOfItems={6}  start={yellowBeanSauceDishes[0].id} count={"TwentyThree"} itemName={yellowBeanSauceDishesItemsName} itemPrice={yellowBeanSauceDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Fresh Ginger & Spring Onion Dishes"} numOfItems={6}  start={freshGingerAndSpringOnionDishes[0].id} count={"TwentyFour"} itemName={freshGingerAndSpringOnionDishesItemsName} itemPrice={freshGingerAndSpringOnionDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Salt & Pepper Dishes"} numOfItems={6}  start={saltAndPepperDishes[0].id} count={"TwentyFive"} itemName={saltAndPepperDishesItemsName} itemPrice={saltAndPepperDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Steak Dishes"} numOfItems={4}  start={steakDishes[0].id} count={"TwentySix"} itemName={steakDishesItemsName} itemPrice={steakDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Vegetable And Tofu Dishes"} numOfItems={10}  start={vegetableAndTofuDishes[0].id} count={"TwentySeven"} itemName={vegetableAndTofuDishesItemsName} itemPrice={vegetableAndTofuDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Thai Sauce Dishes"} numOfItems={4}  start={thaiSauceDishes[0].id} count={"TwentyEight"} itemName={thaiSauceDishesItemsName} itemPrice={thaiSauceDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Malaysian Sauce Dishes"} numOfItems={4}  start={malaysianSauceDishes[0].id} count={"TwentyNine"} itemName={malaysianSauceDishesItemsName} itemPrice={malaysianSauceDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Lemon/Orange Sauce Dishes"} numOfItems={4}  start={lemonOrOrangeSauceDishes[0].id} count={"Thirty"} itemName={lemonOrOrangeSauceDishesItemsName} itemPrice={lemonOrOrangeSauceDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Pork Loin Dishes"} numOfItems={5}  start={porkLoinDishes[0].id} count={"ThirtyOne"} itemName={porkLoinDishesItemsName} itemPrice={porkLoinDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"English Dishes"} numOfItems={8}  start={englishDishes[0].id} count={"ThirtyTwo"} itemName={englishDishesItemsName} itemPrice={englishDishesItemsPrice}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Drinks"} numOfItems={2}  start={drinks[0].id} count={"ThirtyThree"} itemName={drinksItemsName} itemPrice={drinksItemsPrice} description={drinksDescription}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Extra Portions"} numOfItems={27}  start={extraPortions[0].id} count={"ThirtyFour"} itemName={extraPortionsItemsName} itemPrice={extraPortionsItemsPrice} description={extraPortionsDescriptions}/>
                    
                    </div>
                    <div className="carousel-item">
                    <CatagoryCard name={"Special Set Meals"} numOfItems={5}  start={specialSetMeals[0].id} count={"ThirtyFive"} itemName={specialSetMealsItemsName} itemPrice={specialSetMealsItemsPrice} description={specialSetMealsDescriptions}/>
                    
                    </div>
                    
                </div>
                <a onClick={hanleCarouselClickBackwards} className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a onClick={hanleCarouselClickForwards} className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
            

        </div>
    );
}


export default CatagoryCarousel;