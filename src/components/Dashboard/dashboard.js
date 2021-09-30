import React from 'react';
import ReactDOM from 'react-dom';
import ProductList2 from './ProductList';
import productData from '../../backend/dataset/products.json'


// const products = productData;


// const Dashboard = function() {
//     ReactDOM.render(<ProductList products={products}></ProductList>, document.getElementById('product-list'));
// }

// Dashboard();

// export default Dashboard;


function Dashboard2() {
    return (
        <div className="container">
            <header className="header">
            <h1>Products</h1>
            </header>
            <ProductList2 />
        </div>
    );
}

export default Dashboard2;