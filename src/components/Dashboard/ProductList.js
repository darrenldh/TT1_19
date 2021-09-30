import React from 'react';
import ProductCard2 from './ProductCard';

//components/Dashboard/ProductList.js

// class ProductList extends React.Component {
//     // creates a ProductCard obj to be rendered
//     renderCard = (current_item) => {
//         return <ProductCard product={current_item}></ProductCard>;
//     }

//     // Iterate through  product list and calls renderCard
//     // creates the ProductTile object
//     render() {
//         let cards = [];
//         for (let i = 0; i < this.props.products.length; i++) {
//             const current_item = this.props.products[i];
//             cards.push(this.renderTile(current_item));
//         }
//         return cards;
//     }
// }

// export default ProductList;

class ProductList2 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        products: [],
      }
    }

    render() {
      return (
        <div className="container main-content">
          {/* {
            this.state.products.map(product => {
              return <ProductCard2 key={product.id} title={product.title} description={product.description} price={product.price.formatted_with_symbol} image={product.image}  />
            })
          } */}
          <ProductCard2 />
          <ProductCard2 />
        </div>
      );
    }
  }
  
  export default ProductList2;