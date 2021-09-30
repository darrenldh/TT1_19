import React from 'react';
import ProductList from './ProductList';



// function Dashboard() {
//     return(
//         <h2>Dashboard</h2>
//     );
// }

function Dashboard() {
    return (
      <div className="container">
        <header className="header">
          <h1>My Products</h1>
        </header>
        <ProductList />
      </div>
    );
}
  
export default Dashboard;