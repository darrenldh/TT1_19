import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';
import productData from './products.json'


const products = productData;


const Dashboard = function() {
    ReactDOM.render(<ProductList products={products}></ProductList>, document.getElementById('product-list'));
}

export default Dashboard;