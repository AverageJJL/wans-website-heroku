import React from "react";
import Reveal from 'react-reveal/Reveal';

function OpeningHours(){

  return(
    <div id="Visit" className="container">
      <div className="row opening-hours-section">
      <Reveal effect="animate__fadeInUp">
        <div className="col-lg-6">
          <h1>Opening Hours</h1>
          <table className="table table-borderless">
            <tbody className="white hours-text">
              <tr>
                <td>Monday</td>
                <td className="time">Closed</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td className="time">5pm-10:30pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td className="time">5pm-10:30pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td className="time">5pm-10:30pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td className="time">5pm-11:30pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td className="time">5pm-11:30pm</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td className="time">5pm-10:00pm</td>
              </tr>
              <tr className="light-grey">
                <td>We are open on Bank Holidays</td>
                <td className="time">5pm-10:00pm</td>
              </tr>
            </tbody>

          </table>
        </div>
        </Reveal>
        <Reveal effect="animate__fadeInRightBig" duration={2000}>
        <div className="col-lg-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.494709212744!2d-2.887155684184558!3d53.56678698002578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b17c93b2d6ef1%3A0xc5f7c894880b13ad!2sWans%20Chinese%20Take%20Away%2C%208%20Moorgate%2C%20Ormskirk%20L39%204RY!5e0!3m2!1sen!2suk!4v1645871468917!5m2!1sen!2suk"
            width="450" height="400" loading="lazy"></iframe>
        </div>
        </Reveal>
      </div>
    </div>
  );
}

export default OpeningHours;
