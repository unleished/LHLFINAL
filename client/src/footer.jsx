import React, { Component } from "react";
import "./App.css";
import "./footer.css";

function Footer (props) {

    return (
      <div className="vyoofooter">

          <div className="footerwrapper">
            <div className="footText col-4">
              <p>1234 Notre Dame Ouest</p>
              <p>Montreal, QC H3C 0G4</p>
              <p>819 555 9382</p>
              </div>
            <div className="footText col-4">
              <p>FAQ</p>
              <p>Returns & Exchanges</p>
              <p>International Shipping</p>
            </div>
            <div className="footText col-4">
              <p>About Us</p>
              <p>Press</p>
              <p>Contact Us</p>
            </div>

            <div class="footer-copyright text-center">
              <div className="footerIcons">
               <i class="fab fa-instagram px-2"></i><i class="fab fa-facebook px-2"></i><i class="fab fa-twitter-square px-2"></i>
              </div>
              © 2018 Copyright: vyo͞o
            </div>
          </div>
      </div>


    );

}

export default Footer;
