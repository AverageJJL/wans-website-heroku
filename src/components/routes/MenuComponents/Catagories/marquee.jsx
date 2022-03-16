import { PinDropSharp } from "@mui/icons-material";
import React,{useEffect,useState} from "react";
import Draggable from 'react-draggable';

function Marquee(props){
    
    useEffect(()=>{
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");
        for(let i=0; i<marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
          }
        const classAdd = "marquee-content-"+props.number;
        marqueeContent.classList.add(classAdd);
        marqueeContent.classList.remove("marquee-content");
        if(props.number==="1"){
            document.getElementById('marquee').setAttribute('id', 'marquee1');
            var rootStyles = getComputedStyle(root);
            root.style.setProperty('--marquee-width-1', '1589.75px');
        }
        if(props.number==="2"){
            document.getElementById('marquee').setAttribute('id', 'marquee2');
            var rootStyles = getComputedStyle(root);
            root.style.setProperty('--marquee-width-2', '1640px');
        }
        if(props.number==="3"){
            document.getElementById('marquee').setAttribute('id', 'marquee3');
            var rootStyles = getComputedStyle(root);
            root.style.setProperty('--marquee-width-3', '1875px');
        }
        if(props.number==="4"){
            document.getElementById('marquee').setAttribute('id', 'marquee4');
            var rootStyles = getComputedStyle(root);
            root.style.setProperty('--marquee-width-4', '2060px');
        }
    });

   
    ////////////noodle button click/////////////
    function increaseSize(){
      let currentCard = document.getElementById("carouselInner");
      let currentCardId = currentCard.getElementsByClassName("active")[0].lastElementChild.getAttribute("id");
      if(currentCardId==="ExtraPortions"){
        currentCard.classList.add("extra-extra-height");
        return
      }
      else if(currentCard.classList.contains("extra-height")){
        return
      }
      
      else{
        if(currentCard.classList.contains("decrease-height")){
          currentCard.classList.remove("decrease-height");
          currentCard.classList.add("extra-height");
        }
        
        else{
          currentCard.classList.add("extra-height");
        }
      }
      
     }
   ////////////////////////////////////////////reverting heights back to normal on other button clicks////////////////////////////////
   function handleBtnClick(){
    let currentCard = document.getElementById("carouselInner");
    
    if(currentCard.classList.contains("extra-extra-height")){
      currentCard.classList.remove("extra-extra-height");
    }
    else if(currentCard.classList.contains("extra-height")){
      currentCard.classList.remove("extra-height");
    }
    else if(currentCard.classList.contains("decrease-height")){
      currentCard.classList.remove("decrease-height");
    }
    else{
      return
    }
   }
   /////////////////////////////////////////////decreasing height for smaller sections//////////////////////////////////
   function decreaseSize(){
    let currentCard = document.getElementById("carouselInner");
    if(currentCard.classList.contains("extra-height")){
      currentCard.classList.remove("extra-height");
      currentCard.classList.add("decrease-height");
    }
    else if(currentCard.classList.contains("extra-extra-height")){
      currentCard.classList.remove("extra-extra-height");
      currentCard.classList.add("decrease-height");
    }
    else if(currentCard.classList.contains("decrease-height")){
      return
    }
    else{
      currentCard.classList.add("decrease-height");
    }
   }
   ///////////////////////////////////
     function handleMarqueeClick(name){
        if(name==="Soups" || name==="PineappleDishes"){
            decreaseSize();
        }
        else if(name==="NoodleDishes"){
            increaseSize();
        }
        else{
            handleBtnClick();
        }
    }


    let list =[];
    let count=props.count;
    for(let i=0; i<props.name.length;i++){
        const name = props.name[i].replace(/\s/g, '');
        let href="#"+name;
        list.push(<li><a onClick={() =>{handleMarqueeClick(name)}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={count} className="btn btn-outline-danger" href={href}>{props.name[i]}</a></li>)        
        count++;
    }

    return(
            <div id="marquee">
                <Draggable axis="x" handle=".container-for-ul" position={null}>
                <div className="container-for-ul">
                    
                    <ul className="marquee-content">
                        {list}
                    </ul>
                </div>
                </Draggable>
            </div>
    );
}

//duplicated 2.5 times
export default Marquee;