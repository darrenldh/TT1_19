import React, { Component } from 'react';
import ProductCard from './ProductCard';

//components/Dashboard/ProductList.js

class ProductList extends Component {
    constructor(props) {
    super(props);

    this.state = {
        products: [],
    }
    }


    render() {
        return (
            <div className="container main-content">
            {
                this.state.products.map(product => {
                return <ProductCard key={product.id} image={product.media.source} name={product.name} description={product.description} price={product.price.formatted_with_symbol} />
                })
            }
            </div>
        );
    }
}

export default ProductList;