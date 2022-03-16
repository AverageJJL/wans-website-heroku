import React from "react";
import Reveal from 'react-reveal/Reveal';

function FAQ(){
  return(
  <div id="FAQ">
  <Reveal effect="animate__fadeIn" duration={1500}>
    <h1>FAQs</h1>
    <p>Find the answers for the most frequently asked questions below</p>
  </Reveal>

    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Do you do delivery?
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <strong>Yes, we offer delivery and collection.</strong> We offer delivery up to 4 miles, there is a delivery charge starting from £1.50 but this varies depending on your location. The minimum spend for delivery is around £10.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Are you open on bank holidays?
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">
            <strong>Yes.</strong> We are open 5-10pm on bank holidays.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            What is the differnece between Kung Po and King Do sauce?
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
          <div class="accordion-body">
            Kung Po sauce has a <strong>salty and spicy</strong> taste while King Do sauce has a <strong>sweet and spicy</strong> taste
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
           Do you do har gao or char siu buns?
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
          <div class="accordion-body">
            <strong>Unfortunately, we currently dont serve Har Gao or Char Siu Buns.</strong> However, we do offer Sui Mai which is simlar to Har Gao.
          </div>
        </div>
      </div>
    </div>

  </div>
  );
}

export default FAQ;
