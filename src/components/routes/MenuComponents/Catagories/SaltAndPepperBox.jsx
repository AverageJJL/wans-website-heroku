import React from "react";
import saltAndPepperBox from "./Menu/saltAndPepperBox.js";

function SaltAndPepperBox(){
  let saltAndPepperBoxItemsName = [];
  for(let i=0; i<saltAndPepperBox.length;i++){
    saltAndPepperBoxItemsName.push(<p className="card-text">{saltAndPepperBox[i].name}</p>);
  }
  return(
    <div id="SaltandPepperBox" className="salt-and-pepper-card-div">
      <div >
        <div className="">
          <div className="salt-and-pepper-card card">
            <div className="card-header">
              15. Salt & Pepper Box
            </div>
            <div className="salt-and-pepper-card-body card-body">
              <h5 className="card-title">You can choose any <strong>4</strong> of the following items:</h5>
              {saltAndPepperBoxItemsName}
              <h2 className="item-price">£16.00</h2>
              <a className="add-to-cart-btn btn btn-primary">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaltAndPepperBox;
