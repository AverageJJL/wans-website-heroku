import React from "react";
import Reveal from 'react-reveal/Reveal';

function Footer(){
  return(
    <div id="footer">
      <footer class="page-footer font-small text-white pt-4">

      <div class="container-fluid text-center text-md-left">

        <div class="row">

          <div class="col-md-6 mt-md-0 mt-3">

            <h5 class="text-uppercase">Visit Us</h5>
            <p>Wans Chinese Takeaway <br/> Ormskirk <br/> Lancashire <br/> L39 4RY </p>

          </div>

          <hr class="clearfix w-100 d-md-none pb-3"/>

          <div class="col-md-3 mb-md-0 mb-3">

            <h5 class="text-uppercase">Questions?</h5>

            <ul class="list-unstyled">
              <li>
                <p>Call 01695576382</p>
              </li>
              <li>
                <p>We are open Tuesday-Thursday 5-10:30pm <br/>Friday-Saturday 5-11:30pm <br/> Sunday 5-10:00pm <br/>Closed on Monday</p>
              </li>
            </ul>

          </div>


        </div>

      </div>

      <div class="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://mdbootstrap.com/"> wans-chinese-takeaway.com</a>
      </div>

  </footer>
</div>
);
}

export default Footer;
