import React, { Component } from 'react';
import ProductCard from './ProductCard';

//components/Dashboard/ProductList.js

class ProductList extends Component {
    renderCard = (current_item) => {
        return <ProductCard product={current_item}></ProductCard>;
    }

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