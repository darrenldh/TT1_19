import React from "react";


//components/Dashboard/ProductCard.js


const ProductCard = ({ title, price, description, imageUrl }) => {
    return (
        <div className="row product">
        <div className="col-md-2">
            <img src={imageUrl} alt={title} height="150" />
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

export default ProductCard;