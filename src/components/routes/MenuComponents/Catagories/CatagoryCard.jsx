import React from "react";

function CatagoryCard(props){
    let lists =[];
    let description=[];
    if(props.description){
        for(let j=0;j<props.numOfItems;j++){
            description.push(props.description[j]);
        }
    }
    
    {for(let i=0; i<props.numOfItems;i++){
        lists.push(
        <li ><span className="row"><span className="col-sm-6"><span className=" card-item-name item-name">{props.itemName[i]}</span><p className="grey">{description[i]}</p></span><span className="col-sm-6 text-right"><span className="card-item-price item-price">{props.itemPrice[i]}</span><button className="add-to-cart-btn btn btn-sm btn-outline-danger">Add to cart</button></span></span></li>
        );
    }}
    const name = props.name.replace(/\s/g, '');
    return(
        <div id={name} className="catagory-card">
            <div >
                <div className="catagory-card-inner">
                <div className="card text-allign-left">
                    <div className="card-header">
                        {props.name}
                    </div>
                    <div className="card-body">
                    <ol start={props.start}>
                    {lists}
                    </ol>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CatagoryCard;
