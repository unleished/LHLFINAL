
import React, { Component } from "react";

function generateQR (props) {



const base = `http://api.qrserver.com/v1/create-qr-code/?data=`
const end = `!&size=100x100`
const productUrls = [
localhost:3001/product_1.html,
localhost:3001/product_2.html,
localhost:3001/product_3.html,
localhost:3001/product_4.html,
localhost:3001/product_5.html,
localhost:3001/product_6.html,
]

const url = productUrl.map((url)=> {base} + url + {end})

    return (
      {url}

     );
  }


export default generateQR;
