import React, { Component } from "react";
import "./App.css";
import "./footer.css";

function Footer (props) {

    return (
      <div id="footer">

          <div id="footerwrapper">
            <div className="footText">

              <p>1234 Notre Dame Ouest</p>
              <p>Montreal, QC H3C 0G4</p>
              <p>819 555 9382</p>
              </div>
            <div className="footText">
              <p>FAQ</p>
              <p>Returns & Exchanges</p>
              <p>International Shipping</p>
            </div>
            <div className="footText">
              <p>About Us</p>
              <p>Press</p>
              <p>Contact Us</p>
            </div>
        </div>
      </div>


    );

}

export default Footer;
