import React, {useState, useEffect} from "react";

//link to youtube video and to other resources in "link" text file (found under injex.js) remember to remove unessesary txt files after use





function Cart(){

  useEffect(() => {
    addEventListeners();
    //function to add event listeners to remove row btn, quantityInputs and add to cart buttons
    function addEventListeners(itemName){
      var removeFromCartBtns = document.getElementsByClassName('close');
      for(let i=0; i<removeFromCartBtns.length; i++)
    	removeFromCartBtns[i].onclick=removeRow;

      var quantityInputs = document.getElementsByClassName("cart-quantity-input");
      for(let i = 0; i <quantityInputs.length;i++){
        var input = quantityInputs[i];
        if(input.classList[0] === "combo-box" && isNaN(input)){
          input.setAttribute("value",2);
          updateCartTotal();
          input.addEventListener("change",comboBoxQuantityChanged);
        }
        else if(isNaN(input)){
          input.setAttribute("value",1);
          updateCartTotal();
          input.addEventListener("change",quantityChanged);
        }
        

      }

      var addToCartButtons = document.getElementsByClassName("add-to-cart-btn");
      for(let i=0;i<addToCartButtons.length;i++){
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
      }
      updateCartTotal();
    };

    function removeRow(event){
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.parentElement.remove();
      updateCartTotal();
    };

    /////////////////////////// quantity changed functions //////////////////////////////////////////
    function quantityChanged(event){
      var input = event.target;
      if(isNaN(input.value) || input.value <=0){
        input.value = 1;
      }

      updateCartTotal();
    };

    function comboBoxQuantityChanged(event){
      var input = event.target;
      if(isNaN(input.value) || input.value <=1){
        input.value = 2;
      }

      updateCartTotal();
    };

      /////////////////////////// add to cart functions //////////////////////////////////////////
    function addToCartClicked(event){
      var button = event.target;
      var shopItem = button.parentElement.parentElement;
      var itemName = shopItem.getElementsByClassName("item-name")[0].innerText;
      var itemPrice = shopItem.getElementsByClassName("item-price")[0].innerText;
      if(itemName === "Combination Starters(Per Head)"){
        addComboBox(itemName, itemPrice);
        return
      }
      addItemToCart(itemName, itemPrice);
    }

      /////////////////////////// add combo box function //////////////////////////////////////////
    function addComboBox(itemName, itemPrice){
      var cartRow = document.createElement("div");
      var cartItems = document.getElementsByClassName("cart-items")[0];
      var cartItemNames = document.getElementsByClassName("cart-item-name");
      for(let i=0;i<cartItemNames.length;i++){
        if(cartItemNames[i].innerText === itemName){
          alert("this item is already in basket");
          return;
        }

      }

      cartRow.classList.add("cart-row","border-bottom");
      var cartRowContents = `
      <div class="row main align-items-center">
        <div class="col-2"></div>
        <div class="col">
          <div class="row cart-item-name">${itemName}</div>
        </div>
        <div class="col">
         <input type="number" class="combo-box quantity cart-quantity-input " placeholder="2"/>
        </div>
        <div class="price col">${itemPrice} <span class="close">&#10005;</span></div>
      </div>
      `
      cartRow.innerHTML = cartRowContents;
      cartItems.append(cartRow);
      var name ="combo-box";
      addEventListeners(name);
    }

  /////////////////////////// add regular item function //////////////////////////////////////////
    function addItemToCart(itemName, itemPrice){
      var cartRow = document.createElement("div");
      var cartItems = document.getElementsByClassName("cart-items")[0];
      var cartItemNames = document.getElementsByClassName("cart-item-name");
      for(let i=0;i<cartItemNames.length;i++){
        if(cartItemNames[i].innerText === itemName){
          alert("this item is already in basket");
          return;
        }

      }

      cartRow.classList.add("cart-row","border-bottom");
      var cartRowContents = `
      <div class="row main align-items-center">
        <div class="col-2"></div>
        <div class="col">
          <div class="row cart-item-name">${itemName}</div>
        </div>
        <div class="col">
         <input type="number" class="quantity cart-quantity-input " placeholder="1"/>
        </div>
        <div class="price col">${itemPrice} <span class="close">&#10005;</span></div>
      </div>
      `
      cartRow.innerHTML = cartRowContents;
      cartItems.append(cartRow);
      addEventListeners();
    }

    function updateCartTotal(){
      var cartItemContainer = document.getElementsByClassName("cart-items")[0];
      var cartRows = cartItemContainer.getElementsByClassName("cart-row");
      var total = 0;
      var totalQuantity = 0;
      for(let i=0; i<cartRows.length;i++ ){
        let cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("price")[0];
        var quantityElement = cartRow.getElementsByClassName("quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("£",""));
        var quantity = parseInt(quantityElement.value);
        total = total + (price * quantity);
        totalQuantity = (totalQuantity + quantity);
      }
      //rounds number to 2 dp
      total = Math.round(total * 100)/100;
      //changes total price
      document.getElementsByClassName("total-price")[0].innerText = "£"+total;
      document.getElementsByClassName("num-of-items")[0].innerText = totalQuantity+" items";

      if(totalQuantity===1||totalQuantity===2){
        removeNoItemsInCartDiv();
      }
      else if(totalQuantity===0){
        noItemsInCart();
      }
      else{
        return
      }



    };

    function noItemsInCart(){
      var cartRow = document.createElement("div");
      var cartItems = document.getElementsByClassName("cart-items")[0];
      cartRow.classList.add("border-bottom", "no-items-in-cart");
      var cartRowContents = `
      <div class="row main align-items-center">
        <p> no items in cart </p>
      </div>
      `
      cartRow.innerHTML = cartRowContents;
      cartItems.append(cartRow);
    }

    function removeNoItemsInCartDiv(){
      if(document.getElementsByClassName("no-items-in-cart")[0]){
        var noItemsDiv = document.getElementsByClassName("no-items-in-cart")[0];
        noItemsDiv.remove();
      }
      else{
        return
      }
      
    }
  });


  return(
    <div id="cart" className="cart-card">
      <div className="row">
        <div className="col-md-8 cart">
         <div className="title">
            <div className="row">
              <div className="col">
                <h4><b>Shopping Cart</b></h4>
              </div>
              <div className="num-of-items col align-self-center text-right text-muted">0 items</div>
            </div>
          </div>
          <div className="cart-items">

          </div>
          <div className="back-to-shop"><p data-close-button className="close-cart-btn text-muted">close</p></div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5><b>Summary</b></h5>
          </div>

          <div className="row" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
            <p>Unfortunately, online ordering is currently unavailable but you can still check your total here</p>
            <p>To place a order please call 01695576382 </p>
            <div className="total-price-div col">TOTAL PRICE</div>
          </div>
          <button className="checkout-btn total-price">£0</button>
        </div>
      </div>
    </div>

  );

};
export default Cart;
