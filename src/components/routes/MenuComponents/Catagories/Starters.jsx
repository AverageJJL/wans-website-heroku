import React,{useState, useEffect} from "react";
import CatagoryBlockOpen from "../CatagoryBlockOpen";
import CatagoryBlockClosed from "../CatagoryBlockClosed";
import starters from "./Menu/starters";
import soups from "./Menu/soups";
import spareRibs from "./Menu/spareRibs";
import Cart from './cart.jsx';

function Starters(){





  // puts all the starter,soup item names in one array
  let soupItemsName = []
  let soupItemsPrice = []
  let spareRibItemsName = []
  let spareRibItemsPrice = []
  let starterItemsName = [];
  let starterItemsPrice = [];
  for(let i=0; i<starters.length;i++){
    starterItemsName.push(starters[i].name);
    starterItemsPrice.push(starters[i].price);
  }
  for(let j=0; j<soups.length;j++){
    soupItemsName.push(soups[j].name);
    soupItemsPrice.push(soups[j].price);
  }
  for(let k=0; k<spareRibs.length;k++){
    spareRibItemsName.push(spareRibs[k].name);
    spareRibItemsPrice.push(spareRibs[k].price);
  }

  useEffect(()=>{
    const openModalButtons = document.querySelectorAll("[data-modal-target]");
    const closeModalButtons = document.querySelectorAll("[data-close-button]");
    const overlay = document.getElementById("overlay");

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
        console.log(modal);
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




  return(

  <div id="Starters">
  <Cart/>
  <div className="" id="overlay"></div>
    <div class="container">
      <div class="row">

        <div class="col-md-6">
          <CatagoryBlockOpen name={"Starters"} numOfItems={14} start={starters[0].id} count={"One"} itemName={starterItemsName} itemPrice={starterItemsPrice}/>
        </div>
        <div class="col-md-6">
        <ol className="starters-ol">
          <li>
            <CatagoryBlockOpen name={"Soups"} numOfItems={7} start={soups[0].id} count={"Two"} itemName={soupItemsName} itemPrice={soupItemsPrice}/>
          </li>
          <li>
            <CatagoryBlockOpen name={"Spare Ribs & Chicken Wings"} numOfItems={6}  start={spareRibs[0].id} count={"Three"} itemName={spareRibItemsName} itemPrice={spareRibItemsPrice}/>
          </li>
          </ol>
        </div>
      </div>

    </div>

  </div>

);
}


export default Starters;
