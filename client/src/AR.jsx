import React, { Component } from "react";
import 'aframe';
import {Entity, Scene} from 'aframe-react';

import "./App.css";

function AR (props) {

    return (
      <div>
      <video id="camera--view"></video>
      <Scene ar-raycaster raycaster cursor="fuse:false">
          <a-assets>
            <a-video src="#camera--view"></a-video>
          </a-assets>


          <Entity io3d-furniture="id:d8402f88-3595-4c99-8abe-b81d9ca10d4c"  rotation="0 30 0" position="0 .5 -2"></Entity>
      </Scene>

        <button id="camera--trigger">Take a picture</button>
          <script src="arapp.js"></script>

</div>

     );
  }


export default AR;
