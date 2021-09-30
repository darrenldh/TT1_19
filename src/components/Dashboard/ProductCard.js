// import React from "react";

// class ProductCard extends React.Component {
    
//     // Renders the ProductCard with Product Information
//     render() {
//         return (
//             <div class="card">
//                 <div class="card-image">
//                     <figure class="image is-4by3">
//                         <img src={this.props.product.image} alt="Placeholder image"></img>
//                     </figure>
//                 </div>
//                 <div class="card-content">
//                     <p class="title product-title">{this.props.product.title}</p>
//                     <p class="price product-price">{this.props.product.price}</p>

//                     <div class="content">
//                         {this.props.product.description}
//                         <br></br>
//                     </div>
//                     <a class="button is-primary" href={"product.html?id=" + this.props.product.id.toString()} target="_blank">
//                         <strong>Add to Cart</strong>
//                     </a>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ProductCard;

const ProductCard2 = ({ title, price, description, image }) => {
    return (
      <div className="row product">
        <div className="col-md-2">
          <img src={image} alt={title} height="150" />
        </div>
        <div className="col-md-8 product-detail">
          <h4>{title}</h4>
          <div dangerouslySetInnerHTML={{__html: description}}></div>
        </div>
        <div className="col-md-2 product-price">
          {price}
        </div>
      </div>
    );
  }

  export default ProductCard2;