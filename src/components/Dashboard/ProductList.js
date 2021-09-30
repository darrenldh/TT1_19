import React, { Component } from 'react';
import ProductCard from './ProductCard';

//components/Dashboard/ProductList.js

class ProductList extends Component {
    // creates a ProductCard obj to be rendered
    renderCard = (current_item) => {
        return <ProductCard product={current_item}></ProductCard>;
    }

    // Iterate through  product list and calls renderCard
    // creates the ProductTile object
    render() {
        let cards = [];
        for (let i = 0; i < this.props.products.length; i++) {
            const current_item = this.props.products[i];
            cards.push(this.renderTile(current_item));
        }
        return cards;
    }
}

export default ProductList;