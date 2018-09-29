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
        <div>
    <section className="product-container">
        <div>
          <img className="gallery" alt={"" + this.state.product.name} src={"" + this.state.product.path_1}/>
          <img className="gallery" alt={"" + this.state.product.name} src={"" + this.state.product.path_2}/>
          <img className="gallery" alt={"" + this.state.product.name} src={"" + this.state.product.path_3}/>
          <img className="gallery" alt={"" + this.state.product.name} src={"" + this.state.product.path_4}/>
        </div>
     </section>
     <section className="product-description">
        <h3>{this.state.product.name}</h3>
        <p className="text-description">
          {this.state.product.description}
        </p>
        <img className="qrcode" alt="" src={this.state.product.qrcode}/>
        <p>Check it out in AR!</p>
     </section>
     </div>

     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={"" + this.state.product.path_1} alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={"" + this.state.product.path_2} alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={"" + this.state.product.path_3} alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>




     );
  }
}


export default ProductContainer;
