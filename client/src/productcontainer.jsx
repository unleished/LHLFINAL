  import React, { Component } from "react";
import "./App.css";
import "./App.js";



class ProductContainer extends Component {
  constructor(props){
    super(props);
    this.state = { product: [] }
  }

  getProductsbyID(id){

   let url = `/api/v1/products/${id}`
    fetch(url)

    .then(res => res.json())
    .then(product => { this.setState({ product: product[0] })})
  }

  componentDidMount() {
    this.getProductsbyID(this.props.match.params.id);

  };

  render(){
    return (
      <div>
    <section id="product-container">
        <div>
          <img id="gallery" className="img-fluid img-thumbnail" alt="" src={"" + this.state.product.path_1}/>
        <img id="gallery" className="img-fluid img-thumbnail" alt="" src={"" + this.state.product.path_2}/>
        <img id="gallery" className="img-fluid img-thumbnail" alt="" src={"" + this.state.product.path_3}/>
        <img id="gallery" className="img-fluid img-thumbnail" alt="" src={"" + this.state.product.path_4}/>
        </div>
     </section>
     <section id="product-description">
        <h3>{this.state.product.name}</h3>
        <p id="text-description">
          {this.state.product.description}
        </p>
        <img className="qrcode" alt="" src={this.state.product.qrcode}/>
        <p>Check it out in AR!</p>
     </section>
     </div>
     );
  }
}


export default ProductContainer;
